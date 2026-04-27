declare const Netlify: {
  env: {
    get(name: string): string | undefined
  }
}

const COOKIE_NAME = "lh787_auth"
const SESSION_SECONDS = 60 * 60 * 24 * 30
const LOGIN_PATH = "/__auth/login"
const LOGOUT_PATH = "/__auth/logout"
const encoder = new TextEncoder()

export default async function authGate(request: Request) {
  const url = new URL(request.url)

  if (url.pathname === LOGIN_PATH && request.method === "POST") {
    return handleLogin(request)
  }

  if (url.pathname === LOGOUT_PATH) {
    return redirectWithClearedCookie(url.origin)
  }

  if (await hasValidSession(request)) {
    return
  }

  if (url.pathname === LOGIN_PATH) {
    return loginPage("/", false)
  }

  return loginPage(`${url.pathname}${url.search}`, false)
}

async function handleLogin(request: Request) {
  const form = await request.formData()
  const password = String(form.get("password") ?? "")
  const redirectTo = normalizeRedirect(String(form.get("redirect") ?? "/"))
  const passwordHash = getEnv("SITE_PASSWORD_HASH")
  const secret = getEnv("AUTH_COOKIE_SECRET")

  if (!passwordHash || !secret) {
    return serviceUnavailable()
  }

  const submittedHash = await sha256Hex(password)
  if (!constantTimeEqual(submittedHash, passwordHash.trim().toLowerCase())) {
    return loginPage(redirectTo, true)
  }

  const expires = Math.floor(Date.now() / 1000) + SESSION_SECONDS
  const signature = await hmacHex(secret, String(expires))
  return redirectResponse(new URL(redirectTo, request.url).toString(), {
    "Set-Cookie": sessionCookie(`${expires}.${signature}`, expires, request.url),
  })
}

async function hasValidSession(request: Request) {
  const cookie = parseCookies(request.headers.get("cookie")).get(COOKIE_NAME)
  if (!cookie) return false

  const secret = getEnv("AUTH_COOKIE_SECRET")
  if (!secret) return false

  const [expiresRaw, signature] = cookie.split(".")
  const expires = Number(expiresRaw)
  if (!Number.isInteger(expires) || expires <= Math.floor(Date.now() / 1000) || !signature) {
    return false
  }

  const expectedSignature = await hmacHex(secret, expiresRaw)
  return constantTimeEqual(signature, expectedSignature)
}

function loginPage(redirectTo: string, failed: boolean) {
  const safeRedirect = escapeHtml(normalizeRedirect(redirectTo))
  const error = failed ? `<p class="error">Passwort nicht korrekt.</p>` : ""

  return new Response(
    `<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <title>LH787 Login</title>
  <style>
    :root {
      color-scheme: light dark;
      --bg: #f6f8fc;
      --panel: #ffffff;
      --text: #172033;
      --muted: #5f6b7a;
      --primary: #3257bc;
      --primary-dark: #05164d;
      --border: #d8deea;
      --danger: #b42318;
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --bg: #0d1321;
        --panel: #151d2d;
        --text: #eef3ff;
        --muted: #aab5c5;
        --border: #2f3a4f;
        --danger: #ffb4ab;
      }
    }

    * {
      box-sizing: border-box;
    }

    body {
      min-height: 100vh;
      margin: 0;
      display: grid;
      place-items: center;
      padding: 24px;
      background: var(--bg);
      color: var(--text);
      font: 16px/1.5 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }

    main {
      width: min(100%, 380px);
      padding: 28px;
      border: 1px solid var(--border);
      border-radius: 8px;
      background: var(--panel);
      box-shadow: 0 18px 45px rgb(5 22 77 / 12%);
    }

    h1 {
      margin: 0 0 6px;
      color: var(--primary);
      font-size: 1.5rem;
      line-height: 1.2;
      letter-spacing: 0;
    }

    p {
      margin: 0 0 20px;
      color: var(--muted);
    }

    label {
      display: block;
      margin-bottom: 8px;
      font-weight: 650;
    }

    input {
      width: 100%;
      min-height: 44px;
      padding: 10px 12px;
      border: 1px solid var(--border);
      border-radius: 6px;
      background: transparent;
      color: var(--text);
      font: inherit;
    }

    input:focus {
      outline: 3px solid color-mix(in srgb, var(--primary) 24%, transparent);
      border-color: var(--primary);
    }

    button {
      width: 100%;
      min-height: 44px;
      margin-top: 16px;
      border: 0;
      border-radius: 6px;
      background: var(--primary);
      color: #ffffff;
      font: inherit;
      font-weight: 700;
      cursor: pointer;
    }

    button:hover {
      background: var(--primary-dark);
    }

    .error {
      margin: 0 0 14px;
      color: var(--danger);
      font-weight: 650;
    }
  </style>
</head>
<body>
  <main>
    <h1>LH787</h1>
    <p>Bitte Passwort eingeben.</p>
    ${error}
    <form method="post" action="${LOGIN_PATH}">
      <input type="hidden" name="redirect" value="${safeRedirect}">
      <label for="password">Passwort</label>
      <input id="password" name="password" type="password" autocomplete="current-password" autofocus required>
      <button type="submit">Einloggen</button>
    </form>
  </main>
</body>
</html>`,
    {
      status: 401,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store",
      },
    },
  )
}

function serviceUnavailable() {
  return new Response("Password protection is not configured.", {
    status: 503,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  })
}

function getEnv(name: string) {
  try {
    return Netlify.env.get(name)
  } catch {
    return undefined
  }
}

function redirectWithClearedCookie(origin: string) {
  return redirectResponse(origin, {
    "Set-Cookie": `${COOKIE_NAME}=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax; Secure`,
  })
}

function redirectResponse(location: string, extraHeaders: Record<string, string> = {}) {
  return new Response(null, {
    status: 303,
    headers: {
      Location: location,
      "Cache-Control": "no-store",
      ...extraHeaders,
    },
  })
}

function sessionCookie(value: string, expires: number, requestUrl: string) {
  const attributes = [
    `${COOKIE_NAME}=${value}`,
    "Path=/",
    `Max-Age=${SESSION_SECONDS}`,
    `Expires=${new Date(expires * 1000).toUTCString()}`,
    "HttpOnly",
    "SameSite=Lax",
  ]

  if (new URL(requestUrl).protocol === "https:") {
    attributes.push("Secure")
  }

  return attributes.join("; ")
}

function parseCookies(header: string | null) {
  const cookies = new Map<string, string>()
  if (!header) return cookies

  for (const part of header.split(";")) {
    const index = part.indexOf("=")
    if (index === -1) continue
    cookies.set(part.slice(0, index).trim(), part.slice(index + 1).trim())
  }

  return cookies
}

function normalizeRedirect(value: string) {
  if (!value.startsWith("/") || value.startsWith("//")) return "/"
  if (value.startsWith(LOGIN_PATH) || value.startsWith(LOGOUT_PATH)) return "/"
  return value
}

async function sha256Hex(value: string) {
  const digest = await crypto.subtle.digest("SHA-256", encoder.encode(value))
  return toHex(digest)
}

async function hmacHex(secret: string, value: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  )
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(value))
  return toHex(signature)
}

function toHex(buffer: ArrayBuffer) {
  return Array.from(new Uint8Array(buffer), (byte) => byte.toString(16).padStart(2, "0")).join("")
}

function constantTimeEqual(a: string, b: string) {
  if (a.length !== b.length) return false

  let diff = 0
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i)
  }
  return diff === 0
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
}

# Autoflight System (AFDS)
![[mcp.webp]]

## Mode Control Panel (MCP)
Dient zum Armieren (arm) und Aktivieren (engage) der lateralen und vertikalen Modi.

## Autopilot
AP wird über die A/P engage switches aktiviert. Er kann über den Disconnect switch am Control Wheel, das Herunterziehen der A/P DISENGAGE bar am MCP oder durch manuelle Übersteuerung (override force) deaktiviert werden.

### Roll Modes (Lateral)

<div class="cl-item"><strong>LNAV</strong><span class="cl-dots"></span><span>Folgt der im FMS aktiven Route</span></div>
<div class="cl-item"><strong>HDG SEL / TRK SEL</strong><span class="cl-dots"></span><span>Fliegt den im MCP-Fenster gewählten Steuerkurs oder Track</span></div>
<div class="cl-item"><strong>HDG HOLD / TRK HOLD</strong><span class="cl-dots"></span><span>Hält den aktuellen Kurs oder Track flügelgleich</span></div>
<div class="cl-item"><strong>LOC / FAC / B/CRS</strong><span class="cl-dots"></span><span>Erfassen und Verfolgen von Localizer oder IAN-Pfaden</span></div>
<div class="cl-item"><strong>ROLLOUT</strong><span class="cl-dots"></span><span>Führung auf der Mittellinie nach dem Aufsetzen bei automatischer Landung</span></div>

> [!info] Autoland Status
> <div class="cl-item"><strong>LAND 3</strong><span class="cl-dots"></span><span>fail operational</span></div>
> <div class="cl-item"><strong>LAND 2</strong><span class="cl-dots"></span><span>fail passive</span></div>
> <div class="cl-item"><strong>NO AUTOLAND</strong><span class="cl-dots"></span><span>Autoland nicht verfügbar</span></div>

> [!proc] Go-Around
> <div class="cl-item"><strong>Erster Druck TO/GA</strong><span class="cl-dots"></span><span>Climb mit 2.000 fpm im THR-Mode</span></div>
> <div class="cl-item"><strong>Zweiter Druck TO/GA</strong><span class="cl-dots"></span><span>THR REF — voller Schub</span></div>

### Pitch Modes (Vertikal)

<div class="cl-item"><strong>TO/GA</strong><span class="cl-dots"></span><span>Pitch Guidance für Start und Go-Around</span></div>
<div class="cl-item"><strong>VNAV</strong><span class="cl-dots"></span><span>Koppelt die vertikale FMS-Führung (VNAV SPD / PTH / ALT)</span></div>
<div class="cl-item"><strong>FLCH SPD</strong><span class="cl-dots"></span><span>Steigt oder sinkt auf gewählte Höhe bei eingestellter Geschwindigkeit</span></div>
<div class="cl-item"><strong>ALT HOLD</strong><span class="cl-dots"></span><span>Hält die aktuelle Höhe bei Aktivierung</span></div>
<div class="cl-item"><strong>V/S & FPA</strong><span class="cl-dots"></span><span>Steuert gewählte vertikale Geschwindigkeit oder Flugpfadwinkel</span></div>
<div class="cl-item"><strong>G/S & G/P</strong><span class="cl-dots"></span><span>Verfolgt ILS-Gleitpfad oder FMC-Gleitweg</span></div>
<div class="cl-item"><strong>FLARE</strong><span class="cl-dots"></span><span>Aktiviert bei Land 2/3 zwischen 60 und 40 ft RA für den Flare</span></div>

## Autothrottle
A/T Arm Switches schalten das System scharf.

> [!info] Manual Engagement
> - Press TO/GA sw < 50 kts, with flaps extended
> - Press A/T sw > 400 ft
> - Select FLCH in-flight
> - Select VNAV in-flight

> [!info] Auto Engagement
> AP or FD engaged in VNAV, FPA, V/S, ALT or G/S **and:**
> - Speed < FMC calculated speed, or
> - Thrust below reference thrust

### A/T Modes

<div class="cl-item"><strong>THR REF</strong><span class="cl-dots"></span><span>Setzt Schub auf berechnetes Limit — Takeoff/Climb in VNAV oder zweiter Druck GA</span></div>
<div class="cl-item"><strong>THR</strong><span class="cl-dots"></span><span>Passt Schub an für geforderte Steig-/Sinkrate — FLCH oder Go-Around</span></div>
<div class="cl-item"><strong>SPD</strong><span class="cl-dots"></span><span>Hält die am MCP oder FMC gewählte Geschwindigkeit — Levelflug</span></div>
<div class="cl-item"><strong>IDLE & HOLD</strong><span class="cl-dots"></span><span>IDLE fährt Schubhebel auf Leerlauf · HOLD entkoppelt Servos für manuelles Eingreifen</span></div>

## VNAV

### Modes

<div class="cl-item"><strong>VNAV SPD</strong><span class="cl-dots"></span><span>Commands pitch, maintains FMC speed — typisch für den Climb</span></div>
<div class="cl-item"><strong>VNAV PTH</strong><span class="cl-dots"></span><span>Commands pitch to maintain FMC altitude or descent path — A/T manages speed</span></div>
<div class="cl-item"><strong>VNAV ALT</strong><span class="cl-dots"></span><span>Commands pitch to maintain MCP altitude (wenn MCP-Altitude restriktiver als FMC-Profil)</span></div>

> [!limit] Limitations & Capture
> <div class="cl-item"><strong>Capture</strong><span class="cl-dots"></span><span>Above 400 ft RA → MCP speed blanks</span></div>
> <div class="cl-item"><strong>QFE</strong><span class="cl-dots"></span><span>VNAV prohibited with QFE use</span></div>
> <div class="cl-item"><strong>FMC failure</strong><span class="cl-dots"></span><span>No VNAV with triple FMC failure</span></div>
> <div class="cl-item"><strong>Disengages with</strong><span class="cl-dots"></span><span>Selection of FLCH / V/S / FPA / ALT · zweimal VNAV drücken · AP/FD disconnect</span></div>

## TO/GA
TO/GA Pitch-Modus liefert die vertikale Führung für Takeoff und Go-Around.

> [!proc] Am Boden (Ground Operation)
> <div class="cl-item"><strong>Pitch-Bar (PFD)</strong><span class="cl-dots"></span><span>Zeigt 8° Nose-up an</span></div>
> <div class="cl-item"><strong>Pitch-Command</strong><span class="cl-dots"></span><span>Wird erst beim Liftoff aktiv</span></div>

> [!proc] After Takeoff (Normalfall)
> <div class="cl-item"><strong>Target speed</strong><span class="cl-dots"></span><span>Higher of V2 + 15 kts oder der bei Rotation erreichten speed</span></div>
> <div class="cl-item"><strong>Speed Reset</strong><span class="cl-dots"></span><span>Nach > 5 s über Zielwert → Target = actual speed (max. V2 + 25 kts)</span></div>
> <div class="cl-item"><strong>MCP-Eingabe</strong><span class="cl-dots"></span><span>Speed über aktuellem Zielwert → FD folgt neuem MCP-Wert</span></div>

### TO/GA with Engine Failure

<div class="cl-item"><strong>Before liftoff</strong><span class="cl-dots"></span><span>Higher of v<sub>2</sub> oder actual v<sub>R</sub></span></div>

**After liftoff:**

| Geschwindigkeit | Kommandiert |
|---|---|
| below v<sub>2</sub> | v<sub>2</sub> |
| v<sub>2</sub> — v<sub>2</sub> + 15 | actual speed |
| above v<sub>2</sub> + 15 | v<sub>2</sub> + 15 |

> [!proc] During Go-Around
> <div class="cl-item"><strong>Erster Druck</strong><span class="cl-dots"></span><span>AFDS erhöht Pitch für actual speed oder MCP-speed (max. MCP + 25 kts) · A/T THR liefert 2.000 fpm</span></div>
> <div class="cl-item"><strong>Zweiter Druck</strong><span class="cl-dots"></span><span>THR REF — max. thrust</span></div>

> [!info] Windshear Recovery
> - AFDS kommandiert Pitch-up von 15° oder knapp unter PLI, je nachdem, welcher Wert niedriger ist.
> - Sobald die Steigrate zunimmt, wechselt der Modus von Pitch-Führung zu Airspeed-Führung für bestmögliche Performance.

> [!info] Terminierung
> - TO/GA endet beim Wählen eines anderen vertikalen Modus (VNAV, FLCH, V/S) oder beim Erreichen der MCP-Zielhöhe.
> - Beim Erreichen der Zielhöhe wechselt AFDS automatisch in Altitude Hold (ALT).

---

> [!limit] Limitations
> <div class="cl-item"><strong>AP — min. engagement altitude after T/O</strong><span class="cl-dots"></span><span>200 ft AGL</span></div>
> <div class="cl-item"><strong>Autoland — max. airport elevation</strong><span class="cl-dots"></span><span>8.400 ft MSL</span></div>
> <div class="cl-item"><strong>Autoland — wind limits</strong><span class="cl-dots"></span><span>HW 25 kts · TW 15 kts · CW 25 kts</span></div>
> <div class="cl-item"><strong>Autoland — glideslope</strong><span class="cl-dots"></span><span>2.5° – 3.25°</span></div>
> <div class="cl-item"><strong>Autoland — flaps</strong><span class="cl-dots"></span><span>20 · 25 · 30 (2-eng and OEI)</span></div>
> <div class="cl-item"><strong>Autoland — requirement</strong><span class="cl-dots"></span><span>LAND 2 or LAND 3</span></div>
> <div class="cl-item"><strong>Without LAND 2 / 3 — disengage</strong><span class="cl-dots"></span><span>below 135 ft</span></div>
> <div class="cl-item"><strong>LAND 2 / 3 + GS >3.25° — disengage</strong><span class="cl-dots"></span><span>below 100 ft</span></div>
> <div class="cl-item"><strong>GS >3.77° — disengage</strong><span class="cl-dots"></span><span>≤ 50 ft below DH / MDA</span></div>
> <div class="cl-item"><strong>FLCH</strong><span class="cl-dots"></span><span>not below 1.000 ft AFE</span></div>

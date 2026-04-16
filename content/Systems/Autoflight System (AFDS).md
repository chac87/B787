# Autoflight System (AFDS)
![[mcp.webp]]

<div style="display:flex;gap:0.75rem;margin-bottom:1rem;align-items:flex-start">
  <img src="/Bilder/takeoff%20modes.webp" style="flex:1;min-width:0;width:50%;border-radius:6px" />
  <img src="/Bilder/landing%20modes.webp" style="flex:1;min-width:0;width:50%;border-radius:6px" />
</div>

## Mode Control Panel (MCP)
Used to arm and engage the lateral and vertical modes.

## Autopilot
The AP is engaged via the A/P engage switches. It can be disengaged via the disconnect switch on the control wheel, pulling down the A/P DISENGAGE bar on the MCP, or by applying an override force on the controls.

### Roll Modes (Lateral)

<div class="cl-item"><strong>LNAV</strong><span class="cl-dots"></span><span>Follows the active FMS route</span></div>
<div class="cl-item"><strong>HDG SEL / TRK SEL</strong><span class="cl-dots"></span><span>Flies the heading or track selected in the MCP window</span></div>
<div class="cl-item"><strong>HDG HOLD / TRK HOLD</strong><span class="cl-dots"></span><span>Holds the current heading or track with wings level</span></div>
<div class="cl-item"><strong>LOC / FAC / B/CRS</strong><span class="cl-dots"></span><span>Captures and tracks the localizer or IAN path</span></div>
<div class="cl-item"><strong>ROLLOUT</strong><span class="cl-dots"></span><span>Centerline guidance after touchdown during an automatic landing</span></div>

> [!info] Autoland Status
> <div class="cl-item"><strong>LAND 3</strong><span class="cl-dots"></span><span>fail operational</span></div>
> <div class="cl-item"><strong>LAND 2</strong><span class="cl-dots"></span><span>fail passive</span></div>
> <div class="cl-item"><strong>NO AUTOLAND</strong><span class="cl-dots"></span><span>Autoland not available</span></div>

> [!proc] Go-Around
> <div class="cl-item"><strong>First TO/GA press</strong><span class="cl-dots"></span><span>Climb at 2,000 fpm in THR mode</span></div>
> <div class="cl-item"><strong>Second TO/GA press</strong><span class="cl-dots"></span><span>THR REF — maximum thrust</span></div>

### Pitch Modes (Vertical)

<div class="cl-item"><strong>TO/GA</strong><span class="cl-dots"></span><span>Pitch guidance for takeoff and go-around</span></div>
<div class="cl-item"><strong>VNAV</strong><span class="cl-dots"></span><span>Couples the vertical FMS guidance (VNAV SPD / PTH / ALT)</span></div>
<div class="cl-item"><strong>FLCH SPD</strong><span class="cl-dots"></span><span>Climbs or descends to the selected altitude at the set speed</span></div>
<div class="cl-item"><strong>ALT HOLD</strong><span class="cl-dots"></span><span>Holds the current altitude at engagement</span></div>
<div class="cl-item"><strong>V/S & FPA</strong><span class="cl-dots"></span><span>Commands the selected vertical speed or flight path angle</span></div>
<div class="cl-item"><strong>G/S & G/P</strong><span class="cl-dots"></span><span>Tracks the ILS glideslope or FMC glide path</span></div>
<div class="cl-item"><strong>FLARE</strong><span class="cl-dots"></span><span>Engages during Land 2/3 between 60 and 40 ft RA for the flare</span></div>

## Autothrottle
The A/T arm switches arm the system.

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

<div class="cl-item"><strong>THR REF</strong><span class="cl-dots"></span><span>Sets thrust to the computed limit — takeoff/climb in VNAV or second GA press</span></div>
<div class="cl-item"><strong>THR</strong><span class="cl-dots"></span><span>Adjusts thrust to achieve the commanded climb or descent rate — FLCH or go-around</span></div>
<div class="cl-item"><strong>SPD</strong><span class="cl-dots"></span><span>Maintains the speed selected on the MCP or FMC — level flight</span></div>
<div class="cl-item"><strong>IDLE & HOLD</strong><span class="cl-dots"></span><span>IDLE retards thrust levers to idle · HOLD decouples servos for manual intervention</span></div>

## VNAV

### Modes

<div class="cl-item"><strong>VNAV SPD</strong><span class="cl-dots"></span><span>Commands pitch, maintains FMC speed — typically used during climb</span></div>
<div class="cl-item"><strong>VNAV PTH</strong><span class="cl-dots"></span><span>Commands pitch to maintain FMC altitude or descent path — A/T manages speed</span></div>
<div class="cl-item"><strong>VNAV ALT</strong><span class="cl-dots"></span><span>Commands pitch to maintain MCP altitude (when MCP altitude is more restrictive than FMC profile)</span></div>

> [!limit] Limitations & Capture
> <div class="cl-item"><strong>Capture</strong><span class="cl-dots"></span><span>Above 400 ft RA → MCP speed blanks</span></div>
> <div class="cl-item"><strong>QFE</strong><span class="cl-dots"></span><span>VNAV prohibited with QFE use</span></div>
> <div class="cl-item"><strong>FMC failure</strong><span class="cl-dots"></span><span>No VNAV with triple FMC failure</span></div>
> <div class="cl-item"><strong>Disengages with</strong><span class="cl-dots"></span><span>Selection of FLCH / V/S / FPA / ALT · pressing VNAV twice · AP/FD disconnect</span></div>

## TO/GA
The TO/GA pitch mode provides vertical guidance for takeoff and go-around.

> [!proc] On the Ground
> <div class="cl-item"><strong>Pitch bar (PFD)</strong><span class="cl-dots"></span><span>Displays 8° nose-up</span></div>
> <div class="cl-item"><strong>Pitch command</strong><span class="cl-dots"></span><span>Becomes active only after liftoff</span></div>

> [!proc] After Takeoff (Normal)
> <div class="cl-item"><strong>Target speed</strong><span class="cl-dots"></span><span>Higher of V2 + 15 kts or the speed achieved at rotation</span></div>
> <div class="cl-item"><strong>Speed reset</strong><span class="cl-dots"></span><span>After > 5 s above target → target = actual speed (max. V2 + 25 kts)</span></div>
> <div class="cl-item"><strong>MCP input</strong><span class="cl-dots"></span><span>Speed set above current target → FD follows new MCP value</span></div>

### TO/GA with Engine Failure

<div class="cl-item"><strong>Before liftoff</strong><span class="cl-dots"></span><span>Higher of v<sub>2</sub> or actual v<sub>R</sub></span></div>

**After liftoff:**

| Speed | Commanded |
|---|---|
| below v<sub>2</sub> | v<sub>2</sub> |
| v<sub>2</sub> — v<sub>2</sub> + 15 | actual speed |
| above v<sub>2</sub> + 15 | v<sub>2</sub> + 15 |

> [!proc] During Go-Around
> <div class="cl-item"><strong>First press</strong><span class="cl-dots"></span><span>AFDS commands pitch-up for actual speed or MCP speed (max. MCP + 25 kts) · A/T THR delivers 2,000 fpm</span></div>
> <div class="cl-item"><strong>Second press</strong><span class="cl-dots"></span><span>THR REF — maximum thrust</span></div>

> [!info] Windshear Recovery
> - AFDS commands pitch-up to 15° or just below the PLI, whichever is lower.
> - Once climb rate increases, the mode transitions from pitch guidance to airspeed guidance for best performance.

> [!info] Termination
> - TO/GA ends when another vertical mode is selected (VNAV, FLCH, V/S) or when the MCP target altitude is reached.
> - Upon reaching the target altitude, the AFDS automatically transitions to Altitude Hold (ALT).

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

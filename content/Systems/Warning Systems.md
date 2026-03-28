# Warning Systems

## TCAS

TCAS interrogates transponders in nearby aircraft, tracks their positions, and predicts potential conflicts. It operates independently of ATC. Only aircraft with operating transponders are detected.

**Alert levels (conflict timeline):**

<div class="checklist">

<div class="cl-item"><strong>RA — Resolution Advisory</strong><span class="cl-dots"></span><strong>15–35 sec to conflict</strong></div>
<div class="cl-sub">Red filled square on ND · red TRAFFIC message · PFD vertical guidance · voice alert</div>
<div class="cl-sub">ADS-B: black directional chevron in red square</div>

<div class="cl-item"><strong>TA — Traffic Advisory</strong><span class="cl-dots"></span><strong>20–48 sec to conflict</strong></div>
<div class="cl-sub">Amber filled circle on ND · amber TRAFFIC message · voice "TRAFFIC, TRAFFIC" (once)</div>
<div class="cl-sub">ADS-B: black directional chevron in amber circle</div>

<div class="cl-item"><strong>Proximate Traffic</strong><span class="cl-dots"></span><strong>&lt;6 NM and ±1,200 ft</strong></div>
<div class="cl-sub">White filled diamond on ND (no alert) · ADS-B: filled white directional chevron</div>

<div class="cl-item"><strong>Other Traffic</strong><span class="cl-dots"></span><strong>in ND range, no conflict</strong></div>
<div class="cl-sub">Hollow white diamond · ADS-B: hollow white directional chevron · upgrades to Proximate when &lt;6 NM and no altitude data</div>

</div>

**Normal operation:** TA/RA selected on ATP. Select **TA ONLY** during engine-out operations (insufficient thrust to follow RA commands).

> [!info] TCAS Non-Normal
> **TCAS OFF** (advisory) — TCAS not operating; inhibited below 400 ft RA. Amber TCAS OFF on ND.
> **TCAS RA** (advisory) — RA guidance unavailable on respective PFD/HUD; ND traffic and voice unaffected.
> **TCAS FAIL** — RA guidance and ND traffic both unavailable; no voice alerts. Amber TCAS FAIL on ND.

---

## GPWS / TAWS

GPWS provides **immediate alerts** (based on radio altitude, baro altitude, ADRS, glideslope deviation, config) and **look-ahead terrain alerts** (EGPWS terrain database, estimated time-to-impact).

**Immediate alert triggers:**
- Altitude loss after T/O or G/A
- Excessive descent rate
- Excessive terrain closing rate
- Unsafe terrain clearance — not in landing config
- Excessive deviation below ILS glideslope or IAN glide path
- Windshear

> [!warning] Note
> Obstacles or terrain ahead may exceed available climb performance. A GPWS caution or warning does **not** guarantee obstacle or terrain clearance.

**Alert levels:**

<div class="checklist">

<div class="cl-item"><strong>GPWS Warning</strong><span class="cl-dots"></span><span class="c-red">~20–30 sec to impact</span></div>
<div class="cl-sub">PULL UP · OBSTACLE PULL UP · TERRAIN TERRAIN PULL UP</div>

<div class="cl-item"><strong>GPWS Caution</strong><span class="cl-dots"></span><span class="c-amber">~40–60 sec to impact</span></div>
<div class="cl-sub">CAUTION TERRAIN · CAUTION OBSTACLE · SINK RATE · DON'T SINK · TOO LOW FLAPS · TOO LOW GEAR · TOO LOW TERRAIN · GLIDESLOPE · BANK ANGLE</div>

</div>

**EGPWS terrain display colors (airplane ≥500 ft above highest terrain):**

| Color | Meaning |
|:---|:---|
| Solid green | Highest terrain band |
| High-density dotted green | Intermediate terrain |
| Low-density dotted green | Lowest terrain band |
| Black | >2,000 ft below airplane |

**When airplane <500 ft above highest terrain** — display shifts to amber/red contours relative to airplane altitude.

*Terrain display correlated to GPS position (IRS as fallback). Terrain and WXR cannot be simultaneously displayed on the same ND/mini-map.*

**Bank Angle:** Voice alert BANK ANGLE at 35°, 40°, 45°. At low altitude during T/O and landing: as low as 10°.

**Approaching Minimums:** APPROACHING MINIMUMS called at 80 ft above Captain's MINS setting.

---

## PWS — Predictive Windshear System

PWS uses weather radar to detect windshear conditions **ahead** of the airplane. GPWS provides reactive windshear alerts for downdrafts/tailwinds currently being encountered.

| WXR Display | On Ground | In Air |
|:---|:---|:---|
| WXR selected | Scans; PWS alerts enabled | Scans <2,300 ft RA; PWS alerts <1,200 ft RA |
| WXR not selected | Scans when thrust levers advanced for T/O; PWS enabled | Scans <2,300 ft RA; PWS alerts <1,200 ft RA |

> [!info] PWS Note
> PWS alerts are enabled **12 seconds** after weather radar begins scanning for windshear.

---

## ATC Transponder

Integrated into the two Integrated Surveillance System Processor Units (ISSPU). Two transponders, supporting Modes A, C, S and ADS-B Out.

---

## WXR Weather Radar

- Maximum range: 320 NM
- PWS windshear scanning: below 2,300 ft RA

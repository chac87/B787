# Warning Systems

## EICAS Alert Levels

<img src="/Bilder/alerts.webp" alt="EICAS Alert Levels">

<div class="eicas-levels">

<div class="eicas-card eicas-card--red">
<div class="eicas-card-title">Time Critical Warning Alerts</div>
<div class="eicas-card-body">Immediate action required · Not shown as EICAS text — aurals or PFD/HUD direct<br>Examples: PULL UP · ENG FAIL · WINDSHEAR · SPEEDBRAKE</div>
</div>

<div class="eicas-card eicas-card--red">
<div class="eicas-card-title">Red Warnings <span class="eicas-card-badge">not cancelable</span></div>
<div class="eicas-card-body">Immediate crew awareness and corrective action<br>Red EICAS message · Master WARNING lights · Fire bell or siren</div>
</div>

<div class="eicas-card eicas-card--amber">
<div class="eicas-card-title">Amber Cautions <span class="eicas-card-badge">cancelable</span></div>
<div class="eicas-card-body">Immediate crew awareness and possible corrective action<br>Amber EICAS message · Master CAUTION lights · Beeper</div>
</div>

<div class="eicas-card eicas-card--amber">
<div class="eicas-card-title">Amber Advisories</div>
<div class="eicas-card-body">Routine crew awareness and possible corrective action<br>Amber EICAS message (indented) · No aural · No master lights</div>
</div>

<div class="eicas-card eicas-card--white">
<div class="eicas-card-title">White Communication Messages</div>
<div class="eicas-card-body">Lower half of EICAS message area · Always start with a dot symbol<br>High/medium level: Hi-Lo chime · Low level: indented, no aural</div>
</div>

<div class="eicas-card eicas-card--white">
<div class="eicas-card-title">White Memo Messages</div>
<div class="eicas-card-body">Routine crew awareness · No action required<br>White EICAS message (indented) · No aural · No master lights</div>
</div>

</div>

## TCAS

TCAS interrogates transponders in nearby aircraft, tracks their positions, and predicts potential conflicts. It operates independently of ATC. Only aircraft with operating transponders are detected.

**Alert levels (conflict timeline):**

<div class="checklist">

<div class="cl-item"><strong><span style="color:#e74c3c;margin-right:0.35em">■</span>RA — Resolution Advisory</strong><span class="cl-dots"></span><strong>15 – 35 sec to conflict</strong></div>
<div class="cl-sub">Red filled square on ND · red TRAFFIC message · PFD vertical guidance · voice alert</div>
<div class="cl-sub">ADS-B: black directional chevron in red square</div>
<div class="cl-sub">Fly out of the red area · pitch change only · continue FD roll commands unless traffic is visual and a different flight path is necessary</div>
<div class="cl-sub">Downgrades to TA during a windshear alert</div>

<div class="cl-item"><strong><span style="color:#f39c12;margin-right:0.35em">●</span>TA — Traffic Advisory</strong><span class="cl-dots"></span><strong>20 – 48 sec to conflict</strong></div>
<div class="cl-sub">Amber filled circle on ND · amber TRAFFIC message · voice "TRAFFIC, TRAFFIC" (once)</div>
<div class="cl-sub">ADS-B: black directional chevron in amber circle</div>

<div class="cl-item"><strong><span style="color:#aaa;margin-right:0.35em">◆</span>Proximate Traffic</strong><span class="cl-dots"></span><strong>&lt;6 NM and ± 1.200 ft</strong></div>
<div class="cl-sub">White filled diamond on ND (no alert) · ADS-B: filled white directional chevron</div>

<div class="cl-item"><strong><span style="color:#aaa;margin-right:0.35em">◇</span>Other Traffic</strong><span class="cl-dots"></span><strong>in ND range, no conflict</strong></div>
<div class="cl-sub">Hollow white diamond · ADS-B: hollow white directional chevron · upgrades to Proximate when &lt;6 NM and no altitude data</div>

<div class="cl-item"><strong><img src="/Bilder/tcas no bearing.webp" alt="clean" style="height:1.5em;width:auto;vertical-align:middle;margin:0 0.4em 0 0;display:inline;border-radius:2px">No Bearing Alert</strong><span class="cl-dots"></span><strong>bearing unavailable</strong></div>
<div class="cl-sub">Traffic detected but azimuth unavailable — no directional symbol shown on ND</div>

</div>

Vertical speed arrow shown on ND traffic symbol when climb/descent rate **> 500 ft/min**. No arrow when < 500 ft/min.

**Normal operation:** TA/RA selected on ATP. Select **TA ONLY** during engine-out operations (insufficient thrust to follow RA commands).

**TCAS Modes** (vertical look-below / look-above):

| Mode | Below | Above |
|:---|:---:|:---:|
| **ABOVE** | 2.700 ft | 9.900 ft |
| **NORM** | 2.700 ft | 2.700 ft |
| **BELOW** | 9.900 ft | 2.700 ft |

### TCAS Inhibit

During a GPWS or PWS warning, TCAS automatically switches to TA only mode with aurals and alerts inhibited. New RAs are NOT given — old RAs become TAs.

<img src="/Bilder/tcas inhibit climb.webp" alt="TCAS Inhibit Climb" style="max-width:600px">
<img src="/Bilder/tcas inhibit descent.webp" alt="TCAS Inhibit Descent" style="max-width:600px">

> [!info] TCAS Non-Normal
> <span class="c-amber">**TCAS OFF**</span> (advisory) — TCAS not operating; inhibited below 400 ft RA. Amber TCAS OFF on ND.
>
> <span class="c-amber">**TCAS RA**</span> (advisory) — RA guidance unavailable on respective PFD/HUD; ND traffic and voice unaffected.
>
> <span class="c-amber">**TCAS FAIL**</span> — RA guidance and ND traffic both unavailable; no voice alerts. Amber TCAS FAIL on ND.

## GPWS / TAWS

<img src="/Bilder/gpws%20terr.webp" alt="GPWS Terrain Display">

GPWS provides **immediate alerts** (based on radio altitude, baro altitude, ADRS, glideslope deviation, config) and **look-ahead terrain alerts** (EGPWS terrain database, estimated time-to-impact).

> [!warning] Note
> Obstacles or terrain ahead may exceed available climb performance. A GPWS caution or warning does **not** guarantee obstacle or terrain clearance.

**Immediate alert triggers:** Sink rate · Terrain closure rate · Altitude loss after takeoff · Unsafe terrain clearance · Below glideslope · Bank angle · Windshear

**Alert levels:**

<div class="eicas-levels">

<div class="eicas-card eicas-card--red">
<div class="eicas-card-title">GPWS Warning <span class="eicas-card-badge">~ 20 – 30 sec to impact</span></div>
<div class="eicas-card-body">PULL UP · OBSTACLE PULL UP · TERRAIN TERRAIN PULL UP</div>
</div>

<div class="eicas-card eicas-card--amber">
<div class="eicas-card-title">GPWS Caution <span class="eicas-card-badge">~ 40 – 60 sec to impact</span></div>
<div class="eicas-card-body">CAUTION TERRAIN · CAUTION OBSTACLE · SINK RATE · DON'T SINK · TOO LOW FLAPS · TOO LOW GEAR · TOO LOW TERRAIN · GLIDESLOPE · BANK ANGLE</div>
</div>

</div>

Reactive Windshear alert < 1.500 ft RA
GPWS alert < 2.450 ft RA

## PWS – Predictive Windshear System

<div style="display:flex;gap:0.75em;margin-bottom:1em;width:80%;margin-left:auto;margin-right:auto">
<img src="/Bilder/pws1.webp" alt="PWS 1" style="width:50%;object-fit:cover">
<img src="/Bilder/pws2.webp" alt="PWS 2" style="width:50%;object-fit:cover">
</div>

PWS uses weather radar to detect windshear conditions **ahead** of the airplane. GPWS provides reactive windshear alerts for downdrafts/tailwinds currently being encountered.

| WXR Display      | On Ground                                              | In Air                                        |
| :--------------- | :----------------------------------------------------- | :-------------------------------------------- |
| WXR selected     | Scans; PWS alerts enabled                              | Scans < 2.300 ft RA; PWS alerts < 1.200 ft RA |
| WXR not selected | Scans when thrust levers advanced for T/O; PWS enabled | Scans < 2.300 ft RA; PWS alerts < 1.200 ft RA |

> [!info] PWS Note
> PWS alerts are enabled **12 sec** after weather radar begins scanning for windshear.

## ATC Transponder

Integrated into the two Integrated Surveillance System Processor Units (ISSPU). Two transponders, supporting Modes A, C, S and ADS-B Out.

## WXR Weather Radar

- Maximum range: 320 NM
- Turbulence detection range: 40 NM
- PWS windshear scanning: below 2.300 ft RA

---

<a href="/Non-Normals/Non-Normal-Maneuvers" style="display:inline-flex;align-items:center;gap:0.5em;padding:0.55em 1.1em;background:#3257BC;color:#fff;border-radius:6px;font-weight:600;font-size:0.9em;text-decoration:none">▶ Non-Normal Maneuvers — GPWS · TCAS · Windshear</a>

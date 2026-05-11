---
title: Engine & APU Non-Normals
tags: [non-normal, engine]
---

# Engine & APU Non-Normals

## Engine Failure after v1

**Rotation:**
- Slow rotation at **1.5°/sec** — avoid rapid pitch changes with asymmetric thrust
- **1 eng att** pitch — very important for initial climb; applicable for 2nd segment (after gear up)
- Airborne detected: Autobrake RTO → **OFF** (audible "klack")

> [!info] Below 400 ft RA
> No actions except to cancel any warning and raise the landing gear with a positive rate of climb. Maintain speed v<sub>2</sub> to v<sub>2</sub>+15 kt until acceleration height.
> If time is available PM advises ATC: "MAYDAY, Callsign, engine failure, standby"

<table class="data-table">
<thead>
<tr><th>Phase</th><th style="text-align:left">Actions</th></tr>
</thead>
<tbody>
<tr>
  <td><strong>&lt; 400 ft</strong></td>
  <td>AP available > <strong>200 ft</strong> AGL<br>PF: <em>"Set RWY TRK and push"</em> — Engage roll mode (TRK HLD)<br>if needed: Max Power (Target V/S ~400–500 ft/min (gross gradient 2.4% × 180 kt GS ≈ 432 ft/min))</td>
</tr>
<tr>
  <td style="border-top: 1px solid color-mix(in srgb, var(--secondary) 16%, var(--lightgray))"><strong>> 400 ft</strong></td>
  <td style="border-top: 1px solid color-mix(in srgb, var(--secondary) 16%, var(--lightgray)); text-align:center"><span class="c-red">Severe Damage, Fire?</span> → Memory Items immediately</td>
</tr>
<tr>
  <td rowspan="2" style="border-top: 1px solid color-mix(in srgb, var(--secondary) 16%, var(--lightgray))"><strong>Acceleration Height</strong></td>
  <td style="border-top: 1px solid color-mix(in srgb, var(--secondary) 16%, var(--lightgray))">Verify VNAV acceleration<br>Intervene manually if required</td>
</tr>
<tr>
  <td style="text-align:center; font-weight:normal; color:inherit">Retract flaps on schedule</td>
</tr>
<tr>
  <td style="border-top: 1px solid color-mix(in srgb, var(--secondary) 16%, var(--lightgray))"><strong>Flaps up</strong></td>
  <td style="border-top: 1px solid color-mix(in srgb, var(--secondary) 16%, var(--lightgray))">Verify CON Thrust<br>Select and Execute ENG OUT<br>Complete the NNC<br>Complete the After T/O checklist<br><em>After cleanup: FLCH recommended</em></td>
</tr>
</tbody>
</table>

<div class="eicas-levels">
<div class="eicas-card eicas-card--white">
  <div class="eicas-card-title">Engine Fail: JCENA</div>
  <div class="eicas-card-body" style="line-height: 2.1">
    <span><strong style="color: #3257BC">J</strong> — Just fly / Memory Items</span><br>
    <span style="padding-left: 1.8em"><strong style="color: #3257BC">C</strong> — Clean-Up and CON Thrust</span><br>
    <span style="padding-left: 3.6em"><strong style="color: #3257BC">E</strong> — Eng Out on VNAV</span><br>
    <span style="padding-left: 5.4em"><strong style="color: #3257BC">N</strong> — NNC</span><br>
    <span style="padding-left: 7.2em"><strong style="color: #3257BC">A</strong> — After Take Off Checklist</span>
  </div>
</div>

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title">Thrust Increase</div>
  <div class="eicas-card-body"><strong>Criteria:</strong> Airborne AND IAS ≥ 140 kt.<br><strong>&lt; 400 ft:</strong> manual thrust — A/T in HOLD.<br><strong>&gt; 400 ft:</strong> A/T disconnect + manual thrust, or TO/GA switch.</div>
</div>

<div class="eicas-card eicas-card--white">
  <div class="eicas-card-title">TAP — Thrust Asymmetry Protection</div>
  <div class="eicas-card-body">Speed below v<sub>2</sub>: automatically reduces thrust on the remaining operating engine. Thrust levers do not move.</div>
</div>

<div class="eicas-card eicas-card--white">
  <div class="eicas-card-title">TAMS — Thrust Asymmetry Minimum Speed</div>
  <div class="eicas-card-body">Situational awareness of minimum control speed required for directional control during large thrust asymmetry. During T/O or G/A: always ≥ 10 kt above v<sub>MCA</sub>. Shown as red-striped band at bottom of the PFD speed tape.</div>
</div>

</div>

<div class="img-row">
  <img src="/Bilder/thrust%20asymm%20rudder.webp" alt="Thrust Asymmetry – Rudder">
</div>

---

## Engine Fail vs. Severe Damage

<div class="eicas-levels">

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title"><span class="nn-bracket">[]</span> ENG FAIL L, R <span class="eicas-card-badge">EICAS CAUTION</span></div>
  <div class="eicas-card-body">EICAS Caution triggers checklist.<br>No airframe vibrations.<br>Restart possible if conditions are met.<br><a href="/Non-Normals/Non-Normal-Checklists/ENG-FAIL-L,-R">→ NNC: ENG FAIL L, R</a></div>
</div>

<div class="eicas-card eicas-card--red">
  <div class="eicas-card-title">Eng Svr Damage/Sep L, R <span class="eicas-card-badge">UN-ANNUNCIATED</span></div>
  <div class="eicas-card-body">No EICAS message — crew decision.<br>Airframe vibrations with abnormal engine indications, or engine separation.<br>No restart.<br>First Memory Items or first Driftdown? No hard rule. Depends on the situation.<br><a href="/Non-Normals/Non-Normal-Checklists/Eng-Svr-Damage-Sep-L,-R"><span>→ NNC: Eng Svr Damage/Sep L, R</span></a> · <a href="/Non-Normals/Memory-Items">→ Memory Items</a></div>
</div>

</div>

> [!warning] Airframe vibrations? → **Always** Eng Svr Damage/Sep L, R

---

## Dual Engine Failure

Dual engine failure requires prompt action regardless of altitude or airspeed. Accomplish memory items and establish the appropriate airspeed to attempt an immediate windmill restart while engine RPM is still high.

<div class="eicas-levels">

<div class="eicas-card eicas-card--red">
  <div class="eicas-card-title">DUAL ENG FAIL/STALL <span class="eicas-card-badge">MEMORY ITEMS</span></div>
  <div class="eicas-card-body">Select via <strong>Unannunciated Checklists</strong> menu.<br>Memory items → establish restart airspeed → attempt windmill restart as soon as possible.<br><a href="/Non-Normals/Non-Normal-Checklists/Dual-Eng-Fail-Stall"><span>→ NNC: Dual Eng Fail/Stall</span></a> · <a href="/Non-Normals/Memory-Items"><span>→ Memory Items</span></a></div>
</div>

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title">Restart Window</div>
  <div class="eicas-card-body">Set approx. <strong>270 kt</strong> as compromise between best glide and windmilling relight speed.<br><strong>RR:</strong> approx. 250 kt.<br>Below FL300, speeds above the cross-start envelope improve restart probability.</div>
</div>

<div class="eicas-card eicas-card--white">
  <div class="eicas-card-title">Fly First</div>
  <div class="eicas-card-body">Descent? Offset? Turn? Speed?<br>At high altitude, descent may be required to improve windmill-start capability.</div>
</div>

</div>

**Immediate Actions:**

- **CM1 = PF**
- **CM1:** "I have control" "Dual Engine Fail - Memory Items". Promptly initiate adequate flightpath (AP available): set lower altitude in MCP and select FLCH.
- **PM:** Apply Memory Items 
- **When flightpath is under control:** PF: "DUAL ENG FAIL checklist"
- **PM:** Unannunciated → ENG → DUAL ENG FAIL/STALL

<div class="eicas-levels">
<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title">Altitude available · Engine recoverable</div>
  <div class="eicas-card-body">ex. dual engine stall at high altitude, volcanic ash<br>→ Increase speed above 250 kt — improves windmill restart probability</div>
</div>
<div class="eicas-card eicas-card--red">
  <div class="eicas-card-title">Low altitude OR engine unrecoverable</div>
  <div class="eicas-card-body">ex. fuel starvation, birdstrike on both engines<br>→ Decrease speed to top of amber band — maximizes glide</div>
</div>
</div>

**ATC:** MAYDAY · Callsign · DUAL ENG FAIL · UNABLE TO MAINTAIN ALTITUDE — request initial vector towards nearest suitable airport.

- **Best chance:** restart attempt immediately after recognizing the failure — use remaining high RPM.
- **Restart probability:** speeds above the cross-start envelope (250 kt) and altitudes below FL300 improve restart probability. Drift-down time can be used to assess landing/ditching options.
- **Cabin:** all CACs are load shed → slow depressurisation. Monitor cabin altitude and don oxygen masks if necessary at high altitude.
- **EICAS:** <span class="c-red">STABILIZER</span> with Master Warning on top is not relevant; <span class="c-amber">ENG FAIL L/R</span> may be on page 2.
- **PM:** correct identification and checklist initiation is crucial for further actions.
- **Engine start confirmed:** <span class="c-green">RUNNING</span> in green on EICAS → engine start successful
- **AUTOSTART shown:** do not interrupt restart attempts unless the engine is definitely damaged or not starting.
- **Hung / stalled start:** stagnant RPM and/or increasing EGT. Do not interrupt a slow start if RPM is increasing and EGT is not near or rapidly approaching the limit.
- **Remaining NNC:** complete including Fuel Jettison to decrease weight as required. Advise the cabin (NITS) to prepare for a possible ditching or emergency landing.

> [!warning] Fuel control switches
> Cycling both switches resets both EECs. Further cycling does **not** aid or speed up the start. Cut off fuel only if engine damage is apparent or the engine does not start.

> [!info] Electrical power restored
> Do not confuse APU generator power with engine generator power at idle RPM — do not advance the thrust lever prematurely.

**If one engine relights:** Transition to single engine driftdown.
- Select ENG OUT CRZ
- Reset MCP altitude
- Execute — verify VNAV automatic driftdown

**If both engines relight (3A):**
- APU shutdown
- Autothrottle re-engage
- All engine cruise on VNAV CRZ page

> [!info] APU auto start
> In flight, the APU automatically starts if **three or more engine generators go offline**. Once the auto-start condition is active, the APU can only be shut down by pulling the APU fire switch. After the condition clears, shut down normally: selector → ON, then OFF.

> [!info] RAT automatic deployment
> The RAT deploys automatically in flight if any of the following occur: both engines have failed · all three hydraulic system pressures are low · loss of all electrical power to captain's and first officer's flight instruments · loss of all four EMPs and a flight control fault occurs on approach · loss of all four EMPs and an engine fails on takeoff or landing.

---

## OEI Cruise / Driftdown

An engine failure at cruise altitude may require a driftdown to single-engine maximum altitude and diversion to an alternate. Engine inoperative cruise data and alternate options are available via the FMC.

<div style="overflow-x:auto;margin:1.2em 0">
<svg viewBox="0 0 760 200" xmlns="http://www.w3.org/2000/svg" style="min-width:580px;width:100%;display:block;font-family:inherit">

  <!-- Pre-failure cruise (dashed) -->
  <line x1="20" y1="50" x2="145" y2="50" style="stroke:var(--gray);stroke-width:2;stroke-dasharray:6,4;opacity:0.6"/>

  <!-- Descent slope -->
  <line x1="145" y1="50" x2="620" y2="150" style="stroke:#3257BC;stroke-width:2.5"/>

  <!-- EO cruise with arrow -->
  <line x1="620" y1="150" x2="745" y2="150" style="stroke:#3257BC;stroke-width:2.5"/>
  <polygon points="745,146 745,154 754,150" fill="#3257BC"/>

  <!-- Dots on descent (exact on slope: y = 50 + (x-145)*100/475) -->
  <circle cx="145" cy="50"  r="5" fill="#3257BC"/>
  <circle cx="240" cy="70"  r="4" fill="#3257BC"/>
  <circle cx="375" cy="98"  r="4" fill="#3257BC"/>
  <circle cx="510" cy="127" r="4" fill="#3257BC"/>
  <circle cx="620" cy="150" r="5" fill="#3257BC"/>

  <!-- Engine Failure label (top-left) -->
  <line x1="145" y1="50" x2="90" y2="22" style="stroke:var(--gray);stroke-width:1;opacity:0.55"/>
  <text x="14" y="18" font-size="11" font-weight="600" fill="currentColor">Engine Failure</text>

  <!-- FMC actions (top-right, from dot 2) -->
  <line x1="240" y1="70" x2="310" y2="12" style="stroke:var(--gray);stroke-width:1;opacity:0.55"/>
  <text x="315" y="9"  font-size="10" fill="currentColor">· VNAV: Select ENG OUT CRZ</text>
  <text x="315" y="21" font-size="10" fill="currentColor">· MCP: Set altitude below ENG OUT CRZ</text>
  <text x="315" y="33" font-size="10" fill="currentColor">· VNAV: EXEC</text>

  <!-- ATC (bottom-left, from dot 3) -->
  <line x1="375" y1="98" x2="245" y2="158" style="stroke:var(--gray);stroke-width:1;opacity:0.55"/>
  <text x="65"  y="153" font-size="10" fill="currentColor">· Notify ATC</text>
  <text x="65"  y="165" font-size="10" fill="currentColor">· HDG TRK SEL (if required)</text>

  <!-- NNC (bottom, from dot 4) -->
  <line x1="510" y1="127" x2="510" y2="165" style="stroke:var(--gray);stroke-width:1;opacity:0.55"/>
  <text x="440" y="178" font-size="10" fill="currentColor">· Non-normal checklist</text>

  <!-- Course of action (bottom-right, from dot 5) -->
  <line x1="620" y1="150" x2="648" y2="170" style="stroke:var(--gray);stroke-width:1;opacity:0.55"/>
  <text x="575" y="184" font-size="10" fill="currentColor">· Determine course of action</text>

</svg>
</div>

### FMC Procedure

<div class="checklist">

<div class="cl-item"><strong>VNAV ACT CRZ page → ENG OUT</strong><span class="cl-dots"></span><strong>Select</strong></div>
<div class="cl-sub"><span class="c-amber">↓ unten — CDU</span></div>
<div class="cl-sub">Displays MOD CRZ calculated on EO MCT on LSK 1L. Review the EO SPD line.</div>

<div class="cl-item"><strong>MCP altitude window</strong><span class="cl-dots"></span><strong>Set altitude below ENG OUT altitude</strong></div>
<div class="cl-sub"><span class="c-green">↑ oben — MCP</span></div>

<div class="cl-item"><strong>EO D/D page</strong><span class="cl-dots"></span><strong>Execute</strong></div>
<div class="cl-sub"><span class="c-amber">↓ unten — CDU</span></div>
<div class="cl-sub">Thrust reference → CON. Autothrottle maintains MCT. Airplane descends in VNAV SPD.</div>
<div class="cl-sub">If excess airspeed cannot be controlled in near-level flight: FMC transitions to VNAV PTH (300 fpm descent) · autothrottle SPD mode controls airspeed.</div>

</div>

At altitude capture the **ENG OUT CRZ** page displays. Maintain MCT and driftdown altitude until EO SPD is established. Level-off cruise mode matches the mode used during driftdown.

> [!info] If EO altitude is entered within 150 ft of computed maximum (or lower), the FMC commands ~1,250 fpm descent instead of the driftdown schedule.

> [!info] When driftdown established: Consider higher speed and FLCH.

### EO Speed Modes

| Speed | Effect | Use when |
|:---|:---|:---|
| **EO SPD** (default) | Higher driftdown altitude | Standard — minimum drag |
| **EO LRC** | Lower driftdown altitude | Best fuel economy |
| **CO SPD** | Higher driftdown speed | Shorter flight time; specified in AMI |

### Special Cases

<div class="eicas-levels">

<div class="eicas-card eicas-card--white">
  <div class="eicas-card-title">Already at or below max EO altitude</div>
  <div class="eicas-card-body">Select and execute the EO CRZ page · maintain engine out cruise speed.</div>
</div>

<div class="eicas-card eicas-card--white">
  <div class="eicas-card-title">Must cruise at maximum EO altitude</div>
  <div class="eicas-card-body">Set MCT · establish climb · decelerate slowly to EO CLB speed · at level-off select EO LRC.</div>
</div>

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title">VNAV not used</div>
  <div class="eicas-card-body">Set MCT on operative engine · hold altitude until deceleration to EO speed · descend to EO cruise altitude · accelerate to LRC.</div>
</div>

<div class="eicas-card eicas-card--red">
  <div class="eicas-card-title">FMC inoperative</div>
  <div class="eicas-card-body">Use turbulence penetration airspeed for driftdown · use EO long-range cruise tables in the QRH.</div>
</div>

</div>

## In-Flight Engine Start

Three start methods are available in flight. The applicable method is determined by the X-START indication and the start envelope on EICAS.

<div class="eicas-levels">

<div class="eicas-card eicas-card--white">
  <div class="eicas-card-title">Auto-Relight</div>
  <div class="eicas-card-body">Activated automatically whenever an engine is at or below idle with FUEL CONTROL in RUN.<br>No crew action required.</div>
</div>

<div class="eicas-card eicas-card--white">
  <div class="eicas-card-title">Windmill Start</div>
  <div class="eicas-card-body">Airspeed within the start envelope — ram air windmills the engine.<br>Restart Envelope is displayed on EICAS.<br>X-START is blank.<br>Set FUEL CONTROL to RUN; no starter required.</div>
</div>

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title">Starter-Assisted Start <span class="eicas-card-badge">X-START</span></div>
  <div class="eicas-card-body">Airspeed below windmilling start speed — starter required.<br>Set START selector to START, then FUEL CONTROL to RUN.</div>
</div>

</div>

> [!info] Restart included in <a href="/Non-Normals/Non-Normal-Checklists/ENG-FAIL-L,-R"><span>ENG FAIL NNC</span></a> or apply un-annunciated NNC <a href="/Non-Normals/Non-Normal-Checklists/Eng-In-Flight-Start-L,-R"><span>Eng In-Flight Start L, R</span></a>.

After a successful in-flight engine restart, consider the following 3A:

<div class="checklist">

<div class="cl-item"><strong>APU</strong><span class="cl-dots"></span><strong>OFF?</strong></div>

<div class="cl-item"><strong>A/T Arm Switch</strong><span class="cl-dots"></span><strong>Back ON?</strong></div>

<div class="cl-item"><strong>All engines on VNAV</strong><span class="cl-dots"></span><strong>Set?</strong></div>

</div>

---

## OEI – Go-Around

Accomplished the same as a normal missed approach with the following differences:

| Approach flap | Go-around flap |
| :-----------: | :------------: |
|   **≤ 20**    |     **5**      |
| **25 or 30**  |     **20**     |

- After TO/GA: AFDS commands a speed between command speed and command speed +15 kts.
- Rudder automatically compensates for differential thrust — no pilot input required.
- Select MCT (CON) when flaps are retracted to the desired setting.
- G/A pitch ca. 8° until gear up — then follow F/D.

## On Ground

<div class="eicas-levels">

<div class="eicas-card eicas-card--red">
  <div class="eicas-card-title"><span class="nn-bracket">[]</span> FIRE ENG L, R <span class="eicas-card-badge">EICAS WARNING</span></div>
  <div class="eicas-card-body">No memory items — work the NNC directly.<br>NNC triggered via EICAS. If EICAS does not display (e.g. externally observed fire) → apply QRH checklist.<br><a href="/Non-Normals/Non-Normal-Checklists/FIRE-ENG-L,-R"><span>→ NNC: FIRE ENG L, R</span></a></div>
</div>

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title">Engine Fail on Ground</div>
  <div class="eicas-card-body">After stopping: apply memory items of Eng Svr Damage/Sep to secure the engine quickly — then work NNC.<br>Applies when failure on ground, in T/O roll, or on final with decision to cope after touchdown.<br><a href="/Non-Normals/Non-Normal-Checklists/Eng-Svr-Damage-Sep-L,-R"><span>→ NNC: Eng Svr Damage/Sep L, R</span></a> · <a href="/Non-Normals/Memory-Items">→ Memory Items</a></div>
</div>

</div>

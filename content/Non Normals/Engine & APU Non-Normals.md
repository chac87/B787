---
title: Engine & APU Non-Normals
tags: [non-normal, engine]
---

# Engine & APU Non-Normals

## Engine Failure after v<sub>1</sub>

<div class="eicas-levels">
<div class="eicas-card eicas-card--white">
  <div class="eicas-card-title">John Cena</div>
  <div class="eicas-card-body" style="line-height: 2.1">
    <span><strong style="color: #3257BC">J</strong> — Just fly / Memory Items</span><br>
    <span style="padding-left: 1.8em"><strong style="color: #3257BC">C</strong> — CON Thrust</span><br>
    <span style="padding-left: 3.6em"><strong style="color: #3257BC">E</strong> — Eng Out on VNAV</span><br>
    <span style="padding-left: 5.4em"><strong style="color: #3257BC">N</strong> — NNC</span><br>
    <span style="padding-left: 7.2em"><strong style="color: #3257BC">A</strong> — After Take Off Checklist</span>
  </div>
</div>
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

If an engine failure occurs on the ground, during the takeoff roll, or on final approach — and the crew decides to cope with the failure only after touchdown — consider, after stopping, securing the affected engine by applying the memory items of <a href="/Non-Normals/Non-Normal-Checklists/Eng-Svr-Damage-Sep-L,-R"><span>Eng Svr Damage/Sep L, R</span></a>.

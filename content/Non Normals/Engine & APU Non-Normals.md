---
title: Engine & APU Non-Normals
tags: [non-normal, engine]
---

# Engine & APU Non-Normals

## Engine Inoperative Cruise / Driftdown

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
  <text x="315" y="9"  font-size="10" fill="currentColor">· Select ENG OUT CRZ</text>
  <text x="315" y="21" font-size="10" fill="currentColor">· Set EO altitude on MCP</text>
  <text x="315" y="33" font-size="10" fill="currentColor">· VNAV SPD descent → EO airspeed</text>

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

<div class="cl-item"><strong>ACT CRZ page → ENG OUT</strong><span class="cl-dots"></span><strong>Select</strong></div>
<div class="cl-sub">Displays MOD CRZ calculated on EO MCT. Review the EO SPD line.</div>

<div class="cl-item"><strong>MCP altitude window</strong><span class="cl-dots"></span><strong>Set EO cruise altitude</strong></div>

<div class="cl-item"><strong>EO D/D page</strong><span class="cl-dots"></span><strong>Execute</strong></div>
<div class="cl-sub">Thrust reference → CON. Autothrottle maintains MCT. Airplane descends in VNAV SPD.</div>
<div class="cl-sub">If excess airspeed cannot be controlled in near-level flight: FMC transitions to VNAV PTH (300 fpm descent) · autothrottle SPD mode controls airspeed.</div>

</div>

At altitude capture the **ENG OUT CRZ** page displays. Maintain MCT and driftdown altitude until EO SPD is established. Level-off cruise mode matches the mode used during driftdown.

> [!info] If EO altitude is entered within 150 ft of computed maximum (or lower), the FMC commands ~1,250 fpm descent instead of the driftdown schedule.

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
  <div class="eicas-card-body">Activated automatically whenever an engine is at or below idle with FUEL CONTROL in RUN. No crew action required.</div>
</div>

<div class="eicas-card eicas-card--white">
  <div class="eicas-card-title">Windmill Start</div>
  <div class="eicas-card-body">Airspeed within the start envelope — ram air windmills the engine. X-START is blank. Set FUEL CONTROL to RUN; no starter required.</div>
</div>

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title">Starter-Assisted Start <span class="eicas-card-badge">X-START</span></div>
  <div class="eicas-card-body">Airspeed below windmilling start speed — starter required. Set START selector to START, then FUEL CONTROL to RUN.</div>
</div>

</div>

> [!info] Autostart makes continuous attempts until the engine starts or the pilot aborts by setting FUEL CONTROL to CUTOFF (+ START to NORM if starter-assisted).

See also [[Non Normals/Non-Normal Checklists/Eng In-Flight Start L, R|Eng In-Flight Start L, R]]

---

## Go-Around / Missed Approach — One Engine Inoperative

Accomplished the same as a normal missed approach with the following differences:

| Approach flap | Go-around flap |
|:---:|:---:|
| **20** | **5** |
| **25 or 30** | **20** |

After TO/GA: AFDS commands a speed between command speed and command speed +15 kts. Rudder automatically compensates for differential thrust — no pilot input required. Select MCT when flaps are retracted to the desired setting.

> [!info] Multi-autopilot go-around: yaw control reverts to the flight control system upon TO/GA initiation.

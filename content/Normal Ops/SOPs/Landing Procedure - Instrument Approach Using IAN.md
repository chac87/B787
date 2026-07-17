---
title: Instrument Approach Using IAN
tags: [sop, landing, captain, first-officer]
section: 2-1-13
role: Both
---

# Instrument Approach Using IAN

Refer to 2-1-3 Instrument Approach Using IAN (OM-B).

IAN should be used only for approaches that have one of the following features:
- a published GP angle on the LEGS page for the final approach segment
- a RWxx waypoint at the approach end of the runway
- a missed approach waypoint before the approach end of the runway, (for example, MXxx)

Use of IAN is not recommended when an approach has a visual maneuver segment that is not in the FMC database.

<span class="c-red"><em>This procedure is not authorized using QFE.</em></span>

> [!info]- Flap Extension Schedule
> | Current Flap Position | At Speed Tape "Display" | Select Flaps | Command Speed for Selected Flaps |
> |:---:|:---:|:---:|:---|
> | UP | "UP" | 1 | "1" |
> | 1 | "1" | 5 | "5" |
> | 5 | "5" | 20 | "20" |
> | 20 | "20" | 25 or 30 | (v<sub>REF25</sub> or v<sub>REF30</sub>) + wind additives |

<div class="eicas-levels">
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">FMC Path</div>
    <div class="eicas-card-body">For FMC-based approaches, verify proper legs/waypoints with GP angle on LEGS page.<br>Typical GP: approx. 3° and threshold crossing approx. 50 ft.</div>
  </div>
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">Radio / Course Source</div>
    <div class="eicas-card-body">Localizer guidance requires tuned radios.<br>For FMC lateral guidance, ILS or GLS should not be tuned.</div>
  </div>
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">LOC G/S Out</div>
    <div class="eicas-card-body">Select G/S prompt OFF to fly FMC-generated G/P.</div>
  </div>
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">Front Course</div>
    <div class="eicas-card-body">Verify inbound front course for all approaches, including B/C LOC.</div>
  </div>
</div>

<div class="eicas-levels">
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">Course Check</div>
    <div class="eicas-card-body">Before selecting APP:<br>Approach clearance received.<br>Inbound intercept heading established.<br>Final guidance tuned and identified, as needed.<br>Lateral and vertical deviation pointers shown in proper position.</div>
  </div>
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">Arm Mode</div>
    <div class="eicas-card-body">Arm the APP mode.</div>
  </div>
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">Intercept</div>
    <div class="eicas-card-body">Verify localizer/final approach course captured.<br><span style="font-size:0.88em;font-weight:700">FMA: LOC / G/P · B/CRS / G/P · FAC / G/P</span><br>IAN G/P is barometric and does not guarantee constraints before FAF; between FAF and missed approach waypoint it should be at/above FMC database constraints.</div>
  </div>
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">Configuration Timing</div>
    <div class="eicas-card-body">Configure approx. 2 NM before FAF.<br>Do not wait for G/P alive; IAN deviation pointer movement may occur late depending on vertical RNP.</div>
  </div>
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">MCP Altitude</div>
    <div class="eicas-card-body">Set missed approach altitude on the MCP.</div>
  </div>
</div>

> [!warning] Deviation / RNP
> Full-scale lateral or vertical deflection, or **NAV UNABLE RNP**, requires a go-around unless suitable visual reference has been established.

<div class="eicas-levels">
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">FAF</div>
    <div class="eicas-card-body">Verify crossing altitude.<br>Monitor the approach.</div>
  </div>
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">DA(H) / MDA(H) / MAP</div>
    <div class="eicas-card-body">IAN does not support autoland. Be prepared to land manually or go around.<br>If suitable visual reference is established, disengage the autopilot latest at 135 ft AGL.<br>Below DA/MDA, visual guidance is primary; G/P remains reference only. Maintain the glide path to landing.</div>
  </div>
</div>


## LANDING CHECKLIST

| Item | Response | Who |
|:---|:---|:---:|
| <span class="c-green">**Speedbrake**</span> | <span class="c-green">ARMED</span> | PF |
| <span class="c-green">**Landing gear**</span> | <span class="c-green">DOWN</span> | B |
| <span class="c-green">**Flaps**</span> | <span class="c-green">\_\_</span> | B |

<div class="sop-entry-tags">
<span class="sop-tag-cl">PM: "Landing Checklist complete."</span>
</div>
<div class="sop-entry-tags" style="margin-top:0.5em">
<span class="sop-tag-cl">PF: "Checklist complete."</span>
</div>

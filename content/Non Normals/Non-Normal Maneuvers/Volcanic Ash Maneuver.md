---
title: Volcanic Ash Maneuver
tags: [non-normal, maneuvers]
---

# Volcanic Ash Maneuver

<div class="cl-note">→ <a href="/Non-Normals/Non-Normal-Checklists/Volcanic-Ash" style="color:#f39c12 !important"><strong>Volcanic Ash NNC</strong></a></div>

## Recognition

<div class="eicas-levels">
<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title">Suspect volcanic ash if one or more occur</div>
  <div class="eicas-card-body">Static discharge around the windshield · Bright glow in engine inlets · Smoke or dust on the flight deck · Acrid odor</div>
</div>
</div>

## Immediate Actions

> [!proc] Immediate Actions
> - Exit ash cloud as quickly as possible – 180° turn or descending turn
> - Minimize thrust to reduce EGT and limit engine damage
> - Don oxygen masks and smoke goggles if needed – establish crew communications
> - ENGINE ANTI-ICE selectors (both) → **ON**
> - APU selector → **START**, then **ON** (if available)

<div style="display: grid; grid-template-columns: 1fr auto 1fr; gap: 4px 0; align-items: center; max-width: 500px; margin: 1.5rem auto; font-size: 0.85rem; font-family: var(--bodyFont);">
  <div style="grid-column: 1/4; display: flex; justify-content: center; margin-bottom: 2px;">
    <div class="flow-node fn-start" style="text-align: center;">Volcanic Ash NNC</div>
  </div>
  <div style="text-align: right; padding-right: 1.5rem; color: var(--gray); font-size: 1.25rem; line-height: 1.2;">↙</div>
  <div></div>
  <div style="text-align: left; padding-left: 1.5rem; color: var(--gray); font-size: 1.25rem; line-height: 1.2;">↗</div>
  <div class="flow-node fn-action" style="text-align: center; white-space: normal; display: block;">Eng Fail NNC<br><small style="font-weight: 400; font-size: 0.82em; color: var(--gray);">1 or 2 engines</small></div>
  <span style="color: var(--gray); white-space: nowrap; padding: 0 8px;">──▶</span>
  <div class="flow-node fn-action" style="text-align: center;">Airspeed Unreliable NNC</div>
</div>

> [!warning] Workload Management
> In volcanic ash, all three NNCs may be active simultaneously. The **Volcanic Ash NNC** always takes priority – do not run Eng Fail or Airspeed Unreliable checklists until the Volcanic Ash NNC explicitly directs you to do so.

## Potential System Anomalies

<div class="eicas-levels">

<div class="eicas-card eicas-card--red">
  <div class="eicas-card-title">Engine</div>
  <div class="eicas-card-body">Malfunctions · increasing EGT · engine stalls · flameouts</div>
</div>

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title">Airspeed</div>
  <div class="eicas-card-body">Decrease or complete loss of airspeed indications</div>
</div>

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title">Cooling</div>
  <div class="eicas-card-body">EQUIP CLG OVRD · EQUIP COOLING FWD / AFT</div>
</div>

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title">Fire Warnings</div>
  <div class="eicas-card-body">FIRE CARGO FWD · FIRE CARGO AFT <em>(may be false)</em></div>
</div>

</div>

## Engine Failures in Volcanic Ash

> [!warning] Checklist Priority
> Do **not** run the DUAL ENG FAIL/STALL or ENG FAIL checklists until the Volcanic Ash NNC explicitly directs you to do so.

> [!proc] Dual Engine Failure
> 1. **FUEL CONTROL switches (both)** → CUTOFF, then RUN
> 2. **RAM AIR TURBINE switch** → Push and hold for 1 second

<div class="cl-note">Windmill restart: airspeed >250 kts significantly improves restart probability after a volcanic ash dual engine stall.</div>

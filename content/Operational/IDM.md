---
title: IDM
tags: [operational]
---
# IDM – In-flight Decision Making

![[idm.webp]]

## Plan B Requirements

| | No Threats at Destination | Threats at Destination |
|:---|:---:|:---:|
| Safe LDG assured + No Threats at Plan B | ✓ | ✓ |
| **Endurance at valid Plan B** | **30 min** | **45 min** |

> [!info] Threats (ETA +/- 1 h incl. PROB)
> LVO<br>Undue delay expected<br>Ceiling < minimum + 200 ft<br>Visibility < minimum + 1.000 m<br>Wind incl. gusts > 30 kts<br>Crosswind incl. gusts > 20 kts<br>CB/TS, SN, FZ, SS/DS, WS, etc.


## IDM in 3 Schritten

**1. Validen Plan B finden**
Runway ohne Threats – **nicht** die geplante Landing Runway (Plan A).
Bei Threats: Runway ohne Threats am Alternate.
Second RWY als Plan B: muss eine **separate** RWY sein (Alternate Fuel = Go Around + neuer Anflug).

**2. Minimum Fuel am Plan B festlegen**
No Threats → **30 min** · Threats → **45 min**

**3. Fuel für den Weg zum Plan B bestimmen**
- Plan B = Alternate → aus OFP
- Plan B = andere Bahn an der Destination → sinnvoller Wert (z.B. 15 min acc. Extra Fuel Flow oder aus LoA)

> [!info] Extra Fuel Flow (kg/h)
> RR Trent 1000: **5.000 kg/h**<br>GE GEnx-1B: **4.800 kg/h**

**Ergebnis:** Minimum Fuel an Destination = Fuel zum validen Plan B + **30 / 45 min**


## Fuel Callouts

| EFOB | Callout | Tell ATC |
|:---|:---|:---|
| Below 45 min | „Minimum Fuel" | EAT at which the IAF must be left at the latest |
| Below Final Reserve | „MAYDAY MAYDAY MAYDAY, Fuel" | In case of go-around: visual pattern or short radar pattern |


## EFOB below Minimum?

If a fuel shortage becomes foreseeable in flight, re-plan as soon as practicable – with the goal of avoiding a change of destination (OM-A 8.3.4.11.2). The critical case: **EFOB at destination drops below Alternate Fuel + Final Reserve** – the remaining fuel no longer covers the diversion to the alternate. Continuing now means **committing to a landing at the destination**. The question to answer: **may we still continue – and if so, why?**

<div class="flow">
  <div class="flow-node fn-start">In-flight fuel check: EFOB at destination below Alternate Fuel + Final Reserve</div>
  <div class="flow-vline"></div>
  <div class="flow-col">
    <div class="flow-row">
      <div class="flow-node fn-q">Continue with same or higher degree of safety than diverting now?</div>
      <span class="flow-arrow">──NO──▶</span>
      <div class="flow-node fn-action">Divert – execute Plan B while a safe diversion is still possible</div>
    </div>
    <div class="flow-vline"></div>
    <span class="flow-label">YES</span>
    <div class="flow-vline"></div>
  </div>
  <div class="flow-node fn-action">Continue – committed to landing at the destination</div>
  <div class="flow-vline"></div>
  <div class="flow-col">
    <div class="flow-row">
      <div class="flow-node fn-q">Calculated fuel on landing below 45 min?</div>
      <span class="flow-arrow">──NO──▶</span>
      <div class="flow-node fn-result">Land – no fuel call required</div>
    </div>
    <div class="flow-vline"></div>
    <span class="flow-label">YES</span>
    <div class="flow-vline"></div>
  </div>
  <div class="flow-node fn-action"><span class="c-amber">"Minimum Fuel"</span> call to ATC</div>
  <div class="flow-vline"></div>
  <div class="flow-col">
    <div class="flow-row">
      <div class="flow-node fn-q">Calculated fuel on landing below Final Reserve?</div>
      <span class="flow-arrow">──NO──▶</span>
      <div class="flow-node fn-result">Land with Final Reserve intact</div>
    </div>
    <div class="flow-vline"></div>
    <span class="flow-label">YES</span>
    <div class="flow-vline"></div>
    <div class="flow-node fn-result"><span class="c-red">"MAYDAY MAYDAY MAYDAY, FUEL"</span><br>Report FOB + remaining flight time in minutes</div>
  </div>
</div>

<div class="eicas-levels">

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title">Why continuing can be justified</div>
  <div class="eicas-card-body">Same or higher degree of safety means: a safe landing at the destination is assured. Evaluate all significant factors at destination, along the diversion route and at the alternate:<br>WX at destination and alternate at expected landing time · Number and state of runways · Approach aids available · Expected approach time (EAT) issued or anticipated · Traffic situation</div>
</div>

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title">Delay Information</div>
  <div class="eicas-card-body">Approaching the destination: request delay information from ATC when unanticipated circumstances may result in landing below Final Reserve + Alternate Fuel – early enough for a realistic assessment <strong>before</strong> discarding the last en-route aerodrome allowing a safe landing</div>
</div>

<div class="eicas-card eicas-card--red">
  <div class="eicas-card-title">Hard Limit</div>
  <div class="eicas-card-body">In any event: fuel remaining after landing must never be less than Final Reserve Fuel</div>
</div>

</div>

> [!info] Bottom Line
> OM-A 8.3.4.11.2 is CM1's joker: it explicitly permits continuing to the destination even with **EFOB below Alternate Fuel + Final Reserve** – provided this offers the same or higher degree of safety than diverting now.

> [!warning] Reduced Contingency Fuel – stricter rules (OM-A 8.3.4.11.3)
> On an RCF OFP, proceeding past the Decision Point requires usable fuel at the DP of at least: **Trip Fuel DP → Destination + 5 % Contingency of that Trip Fuel + Alternate Fuel + Final Reserve**.<br>**The joker from 8.3.4.11.2 does not apply** – enough fuel must be saved on the way to the DP to guarantee this minimum: Shortcuts possible? No WX deviations?<br>**When in doubt: do not accept an RCF OFP!**

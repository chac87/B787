---
title: Fuel Non-Normals
tags: [non-normal, fuel]
---

# Fuel Non-Normals

## Fuel Leak

> [!info]- Fuel Leak Suspected – Indications
> - Visual observation of fuel spray
> - Total fuel quantity decreasing at abnormal rate
> - An engine has excessive fuel flow
> - FUEL DISAGREE message
> - FUEL IMBALANCE message
> - FUEL QTY LOW message
> - INSUFFICIENT FUEL message

<div class="flow">
  <div class="flow-node fn-start">FUEL LEAK SUSPECTED</div>
  <div class="flow-vline"></div>
  <div class="flow-col">
    <div class="flow-row">
      <div class="flow-node fn-q">Unexpected fuel transfer?</div>
      <span class="flow-arrow">──YES──▶</span>
      <div class="flow-node fn-action">FUEL TRANSFER NNC</div>
    </div>
    <div class="flow-vline"></div>
    <span class="flow-label">NO</span>
    <div class="flow-vline"></div>
  </div>
  <div class="flow-col">
    <div class="flow-row">
      <div class="flow-node fn-q">Leak in Engine or Main Tank?</div>
      <span class="flow-arrow">──NO──▶</span>
      <div class="flow-node fn-action">Check center tank</div>
    </div>
    <div class="flow-vline"></div>
    <span class="flow-label">YES</span>
    <div class="flow-vline"></div>
  </div>
  <div class="flow-node fn-action">Shut down engine</div>
  <div class="flow-vline"></div>
  <div class="flow-col">
    <div class="flow-row">
      <div class="flow-node fn-q">Main tank fuel level stable?</div>
      <span class="flow-arrow">──YES──▶</span>
      <div class="flow-node fn-result">Engine leak – engine stays shut down</div>
    </div>
    <div class="flow-vline"></div>
    <span class="flow-label">NO</span>
    <div class="flow-vline"></div>
    <div class="flow-node fn-result">Main tank leak – engine may be restarted</div>
  </div>
</div>

> [!info|no-title]
> - If the engine is shut down during the NNC: Apply the driftdown procedure.
> - Apply the Fuel Imbalance NNC when instructed in the Fuel Leak NNC.

## Fuel Jettison

<a href="/Non-Normals/Non-Normal-Checklists/Fuel-Jettison">→ NNC: Fuel Jettison</a>

> [!caution] Consider when…
> - **Stopping distance or G/A performance** is a concern
> - **Autoland** is required
> - Landing at high gross weight with adequate time available
> - Airplane performance appears to be critical
>
> → Evaluate same or higher degree of safety · See also [[Non Normals/Non-Normal Checklists/Overweight Landing|Overweight Landing]]

> [!info]- General Considerations
> Fuel jettison should be performed when adequate time is available to reduce landing weight. If weather is marginal: consider retaining a higher fuel target after jettison to keep alternate options available – or delay the jettison if necessary.

> [!info]- Operational Prerequisites (OM-A 8.3.15.1)
> - **ATC:** Coordinate with ATC before initiating
> - **Altitude:** > 6.000 ft AGL – minimum 4.000 ft AGL for complete fuel evaporation
> - Not in a holding pattern with other airplanes below
> - **Drift:** Downwind drift may exceed 1 NM per 1.000 ft of drop
> - Clear of cities and towns · Away from thunderstorms
> - A flight report must be filed after landing

> [!info]- System Functions and Limitations
> - ARM selected → FQMS automatically calculates FUEL TO REMAIN at MLW
> - Manual override: PULL FUEL TO REMAIN selector ON, rotate to adjust
> - Jettison rate: Center tank **1.360 kg/min** · Main tanks **570 kg/min**
> - Minimum fuel: **3.900 kg** per main tank (hardwired – system stops automatically)
> - Ground inhibited: nozzle valves cannot open on the ground
> - **Flaps limit:** Not at settings on FUEL JETTISON panel placard – **Flaps 30 prohibited** (OM-B 1-20-12-1)

> [!info]- FUEL AUTO JETTISON
> The system automatically initiates jettison when the landing weight limit is exceeded. Perform the NNC as normal – only verify or adjust FUEL TO REMAIN.

> [!info]- CRM and Communication
> - **ATC:** Always coordinate fuel jettison with ATC
> - **Cabin:** During daylight, a large fuel plume will be visible from the wings. Inform the SCCM and make a PA announcement to reassure passengers **before** initiating jettison

## Fuel Imbalance

<span class="c-amber">**FUEL IMBALANCE**</span> – Difference between Main Tank 1 and 2 exceeds limit.

**Balancing Methods (in order of effectiveness):**

| Method | Comment |
|:---|:---|
| **Fuel Balance System** | Automatic or manual – preferred method |
| **Crossfeed** | Both engines fed from the same tank – imbalance stops growing |
| **Engine throttling** | Last resort – performance penalty |

**EICAS Messages:**

| EICAS | Meaning |
|:---|:---|
| <span class="c-amber">**FUEL IMBALANCE**</span> | Main tank difference exceeds limit |
| <span class="c-amber">**FUEL DISAGREE**</span> | Displayed vs. calculated fuel differs – possible leak |
| <span class="c-amber">**FUEL QTY LOW**</span> | Main tank below minimum quantity |
| <span class="c-amber">**FUEL BALANCE SYS**</span> | Fuel Balance System failed – manual balancing required |

> [!info]- Totalizer vs. Calculated Fuel
> **Totalizer fuel** is the actual sum of the fuel quantities present in the individual fuel tanks.
>
> **Calculated fuel** is derived by taking the initial totalizer value at the time of engine start and subtracting the amount of fuel that has been consumed.
>
> A discrepancy between the two indicates a possible fuel leak – triggering <a href="/Non-Normals/Non-Normal-Checklists/FUEL-DISAGREE"><span>**FUEL DISAGREE**</span></a>.


## Fuel Balance System

Automatically transfers fuel between main tanks to correct imbalance.

- Rate: **135 l/min** (≈ 107 kg/min)
- To correct a 1.000 kg imbalance: approx. **7 min**
- Faster than crossfeed method
- Operates independently of the crossfeed system


## FUEL UNUSABLE CTR

<span class="c-amber">**FUEL UNUSABLE CTR**</span> – Fuel in the center tank can no longer be used for engine supply.

**Cause:** The airplane is outside the CG envelope – remaining center tank fuel is behind the allowable center of gravity.

**Consequence:** Fuel is physically present but locked out. Total quantity shown is misleading – actually available fuel corresponds to main tanks only.

> [!warning] Planning
> Plan landing distance and alternates based on **main tank quantity** – not total quantity.

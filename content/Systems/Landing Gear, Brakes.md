---
title: Landing Gear & Brakes
tags: [systems, landing-gear]
---

# Landing Gear & Brakes

## Overview

| Component         | Details                                                           |
| :---------------- | :---------------------------------------------------------------- |
| Main Landing Gear | 2 × MLG · 4 wheels each = 8 main wheels total                    |
| Nose Landing Gear | 1 × NLG · 2 wheels                                               |
| Hydraulics        | Center System — Extension, Retraction, Steering                  |
| Brakes            | Electromechanical — 4 EBACs · 32 EBAs (Electric Brake Actuators) |

![[landing gear.webp]]

## Gear Operation

> [!info]+ Gear Doors
> <div class="cl-item"><strong>Open / Close</strong><span class="cl-dots"></span><span>Center Hydraulic System pressure</span></div>
> <div class="cl-item"><strong>NLG & MLG Retraction</strong><span class="cl-dots"></span><span>Center Hydraulic System pressure</span></div>

> [!info]+ Lever & Gear Lock
> <div class="cl-item"><strong>On Ground</strong><span class="cl-dots"></span><span>Lever locked in DN — cannot be moved to UP</span></div>
> <div class="cl-item"><strong>In Flight</strong><span class="cl-dots"></span><span>Air/Ground Sensing releases lever lock</span></div>
>
> **LOCK OVERRIDE Switch** — Allows UP on ground (e.g. maintenance):
> 1. Push and **hold** switch
> 2. Lift gear lever to **UP**

> [!info]+ Retraction
> <div class="cl-item"><strong>Transit</strong><span class="cl-dots"></span><span>Crosshatch on EICAS (gear in motion)</span></div>
> <div class="cl-item"><strong>UP</strong><span class="cl-dots"></span><span>UP displayed after ≈ 10 sec</span></div>
> <div class="cl-item"><strong>Doors closed</strong><span class="cl-dots"></span><span>EICAS indication blanks</span></div>
> <div class="cl-item"><strong>Pressure relief</strong><span class="cl-dots"></span><span>Automatic after gear and doors up and locked</span></div>
>
> <div class="cl-item"><strong>Early Doors</strong><span class="cl-dots"></span><span>Gear doors open automatically <strong>1 sec after lift-off</strong>, prior to UP command</span></div>
> <div class="cl-sub">No UP command within 30 sec → doors return to closed position</div>

> [!info]+ Extension (Normal)
> <div class="cl-item"><strong>Principle</strong><span class="cl-dots"></span><span>Free-fall — hydraulic pressure NOT required for extension</span></div>
> <div class="cl-item"><strong>Downlocks</strong><span class="cl-dots"></span><span>Electrically secured</span></div>
> <div class="cl-item"><strong>Trucks</strong><span class="cl-dots"></span><span>Pitch to flight position during extension</span></div>

> [!info]+ Alternate Extension
> Used when: **no Center Hydraulic pressure** available, or when the gear **does not extend correctly**.
>
> <div class="cl-item"><strong>System</strong><span class="cl-dots"></span><span>DC Electric Pump</span></div>
> <div class="cl-item"><strong>ALTERNATE GEAR Switch</strong><span class="cl-dots"></span><span>DOWN</span></div>
> <div class="cl-item"><strong>Gear Lever Position</strong><span class="cl-dots"></span><span>Irrelevant</span></div>
> <div class="cl-item"><strong>EICAS</strong><span class="cl-dots"></span><span>GEAR DOOR displayed</span></div>
> <div class="cl-item"><strong>Retraction after</strong><span class="cl-dots"></span><span>Center Hydraulic available → Lever DN then UP</span></div>

## NWS — Nose Wheel Steering

> [!info]+ NWS
> <div class="cl-item"><strong>Tiller</strong><span class="cl-dots"></span><span>± 70°</span></div>
> <div class="cl-item"><strong>Rudder Pedals</strong><span class="cl-dots"></span><span>± 8°</span></div>
> <div class="cl-item"><strong>Combined Input</strong><span class="cl-dots"></span><span>Both inputs summed (max. 70°)</span></div>
> <div class="cl-item"><strong>Power</strong><span class="cl-dots"></span><span>Center Hydraulic System</span></div>

## Brakes

> [!info]+ Antiskid
> Carbon fiber brake discs. **No nose wheel brakes.**
>
> <div class="cl-item"><strong>Touchdown Protection</strong><span class="cl-dots"></span><span>per wheel</span></div>
> <div class="cl-item"><strong>Hydroplane Protection</strong><span class="cl-dots"></span><span>per wheel</span></div>
> <div class="cl-item"><strong>Locked-Wheel Protection</strong><span class="cl-dots"></span><span>per wheel</span></div>

> [!info]+ Autobrake
> **Activation:**
>
> | Mode | Condition |
> |:---|:---|
> | **RTO** | > 85 kts + Thrust Levers Idle + on ground |
> | **Landing** | Thrust Levers Idle + Wheel Spin-Up |
>
> <div class="cl-item"><strong>MAX AUTO</strong><span class="cl-dots"></span><span>Limited to Autobrake 4 until pitch &lt; 1° (tail-strike avoidance)</span></div>
>
> Brake pressure is **automatically reduced** when reversers and spoilers contribute to deceleration.
>
> **Deactivation:**
>
> | Trigger |
> |:---|
> | Brake pedal input |
> | Thrust Lever advance |
> | Speedbrake → DOWN Detent |
> | DISARM / OFF Selector |
> | Fault · Antiskid Fault · IRU data loss |

> [!info]+ Taxi Brake Release
> Below **30 kts**: half braking force per MLG, alternating (pair-cycling). Pedal must be **fully released** to switch to the next pair.
>
> During heavy braking / landing / RTO / parking: all brakes apply simultaneously.

> [!info]+ Parking Brake
> <div class="cl-item"><strong>Setting</strong><span class="cl-dots"></span><span>Hold brake pedals + Parking Brake Lever</span></div>
> <div class="cl-item"><strong>Park-and-Adjust</strong><span class="cl-dots"></span><span>25% force on 2 of 4 EBAs per MLG — self-adjusts as brakes cool (≈ 60 min)</span></div>
> <div class="cl-item"><strong>Without power</strong><span class="cl-dots"></span><span>Remains set even without electrical power</span></div>
>
> | EICAS | Level | Meaning |
> |:---|:---:|:---|
> | <span class="c-amber">PARKING BRAKE SET</span> | <span class="c-amber">Memo</span> | Parking brake set |
> | <span class="c-red">CONFIG PARKING BRAKE</span> | <span class="c-red">Warning</span> | Takeoff thrust applied with parking brake set |

> [!info]+ Brake Temperature
> Scale: **0.0 – 9.9**
>
> | Range | Indication |
> |:---:|:---|
> | 0.0 – 2.9 | White (normal) |
> | 3.0 – 4.9 | White · hottest brake shown as full bar |
> | ≥ 5.0 | EICAS BRAKE TEMP — remains until all < 3.0 |
>
> | EICAS | Level | Meaning |
> |:---|:---:|:---|
> | <span class="c-amber">BRAKE TEMP</span> | <span class="c-amber">Advisory</span> | At least one brake ≥ 5.0 |

## Tire Pressure

> [!info]+ Tire Pressure
> <div class="cl-item"><strong>Normal</strong><span class="cl-dots"></span><span>White on synoptic</span></div>
> <div class="cl-item"><strong>Out of normal range</strong><span class="cl-dots"></span><span>Amber on synoptic</span></div>
>
---

> [!info] Un-annunciated Checklists
> **GEAR LEVER LOCKED DOWN** — select via Non-Normal Menu in ECL

---

> [!limit] Limitations
> <div class="cl-item"><strong>v<sub>LE</sub> (Gear Extended)</strong><span class="cl-dots"></span><span>270 kts</span></div>
> <div class="cl-item"><strong>Recommended max. for drag</strong><span class="cl-dots"></span><span>200 kts</span></div>
> <div class="cl-item"><strong>Alternate Extension</strong><span class="cl-dots"></span><span>speedbrakes retracted</span></div>
> <div class="cl-item"><strong>Brake Release</strong><span class="cl-dots"></span><span>not above 55% N1 (tailtipping)</span></div>
> <div class="cl-item"><strong>Towing towbarless</strong><span class="cl-dots"></span><span>prohibited unless torque links disconnected</span></div>

---
title: Hydraulic Non-Normals
tags: [non-normal, hydraulics]
---

# Hydraulic Non-Normals

## <span class="c-amber">FAULT</span> — Pump Faults & Overheats

An amber <span class="c-amber">**FAULT**</span> light on a pump switch illuminates for three reasons:

- Low pump output pressure
- Excessive fluid temperature (pump overheat)
- Pump manually selected **OFF**

**Automatic compensation:** If an EDP pressure drops or overheats, selecting the switch to OFF stops the pump. The respective electric demand pump (EMP) automatically comes online to maintain system pressure.

## Fluid Leaks & Center System Isolation

To preserve safe landing capability during a Center System leak, HYDIF automatically isolates specific lines as reservoir quantity decreases:

| Quantity | Valve | Action |
|:---|:---|:---|
| ≤ **0.50** | Alternate Extend Isolation Valve (AEIV) | Closes — traps fluid in standpipe for alternate gear extension pump |
| < **0.40** (airspeed > 60 kts) | Nose Gear Isolation Valve (NGIV) | Closes — preserves fluid for primary flight controls and main landing gear; isolates nose gear actuation and steering |
| ≤ **0.25** | Reserve Steering Isolation Valve (RSIV) | Closes — reserves remaining fluid exclusively for nose wheel steering |

> [!info] Quantity Indication
> EICAS displays **LO** next to the Center reservoir quantity when it drops below 0.40 (40%).

## Dual System Loss

Loss of any two hydraulic systems (L+C, L+R, or C+R) has two key consequences:

**Landing distance** is significantly increased due to reduced braking and flight control authority.

**EICAS caution <a href="/Non-Normals/Non-Normal-Checklists/FLIGHT-CONTROLS"><span>FLIGHT CONTROLS</span></a>** is displayed — multiple ACE or hydraulic failures result in the loss of a significant number of control surfaces.

## Total Hydraulic Loss

Upon loss of **all three systems** (L + R + C), the following remain available:

| Function | Remaining Capability |
|:---|:---|
| **Primary flight controls** | Limited — elevator, aileron, rudder via RAT pressure (Center system only) |
| **Spoilers** | 2 spoiler pairs (RAT/electrically powered) |
| **Flaps / Slats** | Alternate electric drive (Motor Operated Valves) |
| **Stabilizer** | Electric Stabilizer Trim (independent of hydraulics) |

> [!warning] Total Hydraulic Loss
> RAT provides 3.000 psi to the Center system and emergency electrical power. Full controllability is severely limited — Alternate Flaps/Slats and Electric Stabilizer Trim are the primary remaining configuration tools.

## RAT Automatic Deployment

The RAT deploys automatically in flight to provide Center system hydraulic pressure (≥ 3.000 psi) and electrical power (10 kVA).

**Deployment triggers:**

- Loss of both engines
- Low pressure in all three hydraulic systems
- Loss of all electrical power to CPT/FO flight instruments
- Loss of all 4 EMPs combined with: a flight control fault on approach, or an engine failure on takeoff or landing

> [!info] RAT Limitation
> The RAT pressurizes **Center system primary flight controls only**. It does **not** power high-lift devices (flaps/slats) or the landing gear.

→ See also [[Systems/Hydraulic System|Hydraulic System]]

---
title: Hydraulic System
tags: [systems, hydraulics]
---

# Hydraulic System
![[hydraulic system.webp]]

<div class="img-row">
<img src="/Bilder/hyd-ovhd.webp" alt="Hydraulic Overhead Panel" />
<img src="/Bilder/hyd-syn.webp" alt="Hydraulic Synoptic" />
</div>

## System Architecture

The 787 has three independent **5.000 psi** hydraulic systems — **Left (L)**, **Right (R)**, and **Center (C)**. They do not share fluid and are physically isolated for maximum survivability.

| System | Primary Sources | Powered Systems |
|:---|:---|:---|
| **Left** | 1 EDP + 1 EMP | Primary flight controls, L thrust reverser, L/R wing spoilers (partial) |
| **Right** | 1 EDP + 1 EMP | Primary flight controls, R thrust reverser, L/R wing spoilers (partial) |
| **Center** | 2 EMPs (C1, C2) | Primary flight controls, all wing spoilers, TE flaps, LE slats, landing gear, nose wheel steering |

**Total system components:** 2 EDPs · 4 EMPs · 1 RAT · 4 Accumulators · 2 L/R Reservoirs (76 l each) · 1 Center Reservoir (170 l)

## Pump Logic & Automation

All pump sequencing is managed by the **Hydraulic Interface Function (HYDIF)**.

### Left & Right Systems

**Primary — Engine-Driven Pumps (EDP)**
Driven by the N2 rotor. Automatically depressurize when engine RPM drops below sub-idle to preserve windmill start capability.

**Demand — Electric Motor-Driven Pumps (EMP)**
Back up the EDPs during high-load phases. In AUTO, they run when:
- 2nd engine started — for 3 minutes
- Takeoff thrust applied — until flaps retracted
- Thrust reverser operation
- Descent: gear lever down or RA < 1.000 ft, until GS < 40 kts
- Low system pressure

### Center System

**Two EMPs (C1 & C2)** alternate primary/demand roles on a **calendar schedule**:
- C1 is primary on **odd** calendar days
- C2 is primary on **even** calendar days

**Primary pump** runs continuously after the 2nd engine is started.

**Demand pump** runs automatically when:
- 2nd engine started — for 3 minutes
- Takeoff thrust applied — until RA > 2.000 ft
- Flap or slat movement
- Descent: gear lever down and RA < 2.000 ft, until GS < 60 kts
- Low system pressure

## System Indications

Hydraulic pressure and quantity are shown on the **HYD** and **STAT** synoptics.

**Pressure** — Normal operating pressure is **5.000 psi**. Low-pressure condition below 3.000 psi.

**Quantity** — Displayed as a fraction of normal service level (1.00):

| Indication | Threshold | Inhibit |
|:---|:---|:---|
| **LO** | < 0.40 | — |
| **RF** (Refill) | 0.40 – 0.75 | In flight |
| **OF** (Overfill) | > 1.20 | In flight |

## Protections & Failsafes

**Load Shedding**
If electrical power is insufficient, demand pumps are load-shed. The label **LOAD SHED** appears next to the pump symbol on the HYD synoptic.

**Fire Protection — Supply Shutoff Valve (SOV)**
Pulling an Engine Fire Switch closes the respective hydraulic SOV and depressurizes the associated EDP.

**Priority Valves**
During a severe pressure drop, flow is automatically prioritised:
1. Primary flight controls
2. High-lift devices (flaps/slats)
3. Landing gear

**Center System Isolation**
Automatic isolation valves protect Center system fluid during a leak:
- **Alternate Extend Isolation Valve** — isolates the alternate gear extension system
- **Reserve Steering Isolation Valve (RSIV)** — isolates flow between C1 and C2 to preserve nose wheel steering
- **Nose Gear Isolation Valve (NGIV)** — isolates nose gear actuation and steering

> [!warning] OM-B — NGIV Failure (Bulletin DLH-10)
> Boeing has identified that the NGIV can occasionally fail in the **closed** position. If this occurs during approach, it negatively affects primary mode operation of slats/flaps, normal nose gear extension, and nose wheel steering.

## Ram Air Turbine (RAT)

The RAT is a small air-driven turbine providing emergency hydraulic pressure (**≥ 3.000 psi**) to **Center system primary flight controls only**, plus **10 kVA** of electrical power.

**Automatic deployment** occurs when:
- Dual engine failure
- Loss of all 3 hydraulic pressures
- Loss of all electrical power to CPT/FO instruments
- Loss of all 4 EMPs combined with: engine failure on T/O or landing, or flight control fault on approach

**Manual deployment** — guarded switch on the P5 overhead panel:
- **UNLKD** light — RAT in transit / unstowed
- **PRESS** light — Center flight control pressure ≥ 3.000 psi

Once deployed, the RAT can only be stowed on the ground.

→ See also [[Electrical Power System#RAT|Electrical System — RAT]]

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

→ See also [[Non Normals/Hydraulic Non-Normals|Hydraulic Non-Normals]]

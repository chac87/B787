---
title: Hydraulic Non-Normals
tags: [non-normal, hydraulics]
---

# Hydraulic Non-Normals

## <span class="c-amber">FAULT</span> – Pump Faults & Overheats

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
> EICAS displays **LO** next to the Center reservoir quantity when it drops below 0.40 (40 %).

## Single Failure

In all cases some spoilers are inoperative — a **LAPA calculation is required**.

<div class="eicas-levels">

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title">L or R System Failure</div>
  <div class="eicas-card-body">Minor additional restriction · one reverser inoperative</div>
</div>

<div class="eicas-card eicas-card--red">
  <div class="eicas-card-title">C System Failure <span class="eicas-card-badge">Major Restrictions</span></div>
  <div class="eicas-card-body">Slats/flaps in secondary mode · Alternate gear extension needed · Manual speedbrake extension after landing · NWS may be inoperative if isolation valves couldn't assure hydraulic pressure</div>
</div>

</div>

### Slats/Flaps – Secondary Mode

Flaps/slats extension via the flap lever remains available, but takes considerably longer than normal.

> [!info] Extension Times
> Allow **1½ minutes** from UP to 1, and **2½ minutes** from 1 to 20.
> Plan for a **long final** or **early extension on downwind**.

<div class="nnc-note">Do not exceed 240 kt during go-around until slats are retracted to midrange.</div>
<div class="nnc-note">Different speed selection recommended per FCTM.</div>

### Alternate Gear Extension

Performed as a **Deferred Item** during the Approach Checklist.

<div class="checklist">

<div class="cl-item"><strong>Landing Gear Lever</strong><span class="cl-dots"></span><strong>DOWN</strong></div>

<div class="cl-item"><strong>ALTN GEAR extend switch</strong><span class="cl-dots"></span><strong>Push to DOWN – HOLD</strong></div>
<div class="cl-sub">Hold until all gear indicate down or in transit.</div>

</div>

> [!warning] No Retraction Possible
> Once extended via alternate system, gear cannot be retracted. The go-around procedure must be adapted and a **maximum speed of 270 kt** adhered to.

### Manual Speedbrake Extension

No automatic speedbrake deployment on touchdown — this increases the risk of bounce. A **detailed discussion during the approach briefing is required**.

<div class="nnc-note">PF should decide whether landing is assured — extension by PF directly, or a clear command from PF to PM, is preferred.</div>
<div class="nnc-note">Speedbrakes are easier to handle from the CM1 side due to the control stand arrangement.</div>

## Dual System Loss

Loss of any two hydraulic systems (L+C, L+R, or C+R) has two key consequences:

**Landing distance** is significantly increased due to reduced braking and flight control authority.

**EICAS caution <a href="/Non-Normals/Non-Normal-Checklists/FLIGHT-CONTROLS"><span>FLIGHT CONTROLS</span></a>** is displayed — multiple ACE or hydraulic failures result in the loss of a significant number of control surfaces.

## Total Hydraulic Loss

Upon loss of **all three systems** (L + R + C), the following remain available:

| Function                    | Remaining Capability                                                      |
| :-------------------------- | :------------------------------------------------------------------------ |
| **Primary flight controls** | Limited – elevator, aileron, rudder via RAT pressure (Center system only) |
| **Spoilers**                | 2 spoiler pairs (RAT/electrically powered)                                |
| **Flaps / Slats**           | Alternate electric drive (Motor Operated Valves)                          |
| **Stabilizer**              | Electric Stabilizer Trim (independent of hydraulics)                      |

> [!warning] Total Hydraulic Loss
> RAT provides 3.000 psi to the Center system and emergency electrical power. Full controllability is severely limited – Alternate Flaps/Slats and Electric Stabilizer Trim are the primary remaining configuration tools.

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

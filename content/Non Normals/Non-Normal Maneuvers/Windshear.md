---
title: Windshear
tags: [non-normal, maneuvers]
---

# Windshear

<div class="cl-warning">Windshear avoidance policy: AVOID — AVOID — AVOID</div>

> [!caution]- Windshear Suspected – Precautions (OM-B 2-2-16)
> - Full rated T/O Thrust
> - Use longest RWY
> - Flaps 20, if possible (alternatively 15, 17 or 18)
> - Use increased v<sub>R</sub> (Topas Tool)

## PWS & Reactive Windshear

> [!info] System Overview
> | | PWS Caution | PWS Warning | Immediate W/S Alert (GPWS) |
> |:---|:---|:---|:---|
> | **Audio** | *"MONITOR RADAR DISPLAY"* | *"WINDSHEAR AHEAD"* / *"GO-AROUND, WINDSHEAR AHEAD"* | Siren + *"WINDSHEAR, WINDSHEAR, WINDSHEAR"* |
> | **PWS Alerts** | < 1.200 ft RA | < 1.200 ft RA | Rotation – 1.500 ft RA |


→ [[Systems/Warning Systems|Warning Systems]] — PWS system architecture, sensor logic, and alert levels explained in detail.

## Response by Flight Phase

| Flight Phase          | PWS Caution               | PWS Warning                         | Immediate W/S Alert / GPWS                                                |
| :-------------------- | :------------------------ | :---------------------------------- | :------------------------------------------------------------------------ |
| **Before Takeoff**    | Maneuver as rqrd to avoid | Delay T/O                           | n/a                                                                       |
| **THR advanced – v1** | Maneuver as rqrd to avoid | RTO                                 | RTO — or rotate at v<sub>R</sub> and perform Escape Maneuver when airborne           |
| **v1 – Rotation**     | Maneuver as rqrd to avoid | Windshear Escape Maneuver           | Initiate normal rotation ≥ 2.000 ft before RWY end; ensure max thrust set |
| **Inflight**          | Maneuver as rqrd to avoid | Windshear Escape Maneuver           | Windshear Escape Maneuver                                                 |
| **During Approach**   | Maneuver as rqrd to avoid | Escape Maneuver or normal Go-Around | Windshear Escape Maneuver                                                 |

## Recognition in Flight

Unacceptable flight path deviations below **1.000 ft AGL** — any of the following in excess of:

- **15 kts** IAS deviation
- **500 ft/min** vertical speed deviation
- **5°** pitch attitude deviation
- **1 dot** displacement on glideslope
- Unusual thrust lever position for a significant period of time

**Or:** W/S alert *"Windshear – Windshear – Windshear"* (< 1.500 ft RA)

## Windshear Escape Maneuver

> [!proc] Autoflight
> **PF** "WINDSHEAR – I HAVE CONTROL"
>
> **PF** Push either TO/GA switch.
> ###### Verify GA thrust. **PM**
> **PF** Verify TO/GA mode annunciation (FMA: THR / TO/GA / TO/GA).
>
> **PF** Verify GA thrust.
>
> **PF** Verify speedbrakes retracted.
> ###### Verify all required actions completed. Call out any omissions. **PM**
> **PF** Monitor system performance.
>
> ---
>
> - No AFS W/S program — only the Go-Around Pitch and Roll Modes. A/T stays ON.
> - Autopilot flies to stick shaker but remains engaged. If A/P performance unsatisfactory: switch to manual flight.
> - AFDS commands 15° pitch (or slightly below pitch limit). As climb rate increases, AFDS transitions to airspeed control targeting IAS/MACH window airspeed or current airspeed — whichever is greater at TO/GA activation.

> [!proc] Manual Flight
> **PF** "WINDSHEAR – I HAVE CONTROL"
>
> **PF** Disconnect autopilot.
>
> **PF** Push either TO/GA switch.
> ###### Verify maximum thrust. **PM**
> **PF** "MAX POWER" — Aggressively apply maximum thrust.
>
> **PF** Disconnect autothrottle(s).
>
> **PF** Simultaneously roll wings level and rotate to initial pitch attitude of **15°**.
>
> **PF** Verify speedbrakes retracted.
> ###### Verify all required actions completed. Call out any omissions. **PM**
> **PF** Follow flight director TO/GA guidance (if available).
>
> **PF** Do not change gear or flap configuration until windshear is no longer a factor.
>
> **PF** Monitor vertical speed and altitude.
> ###### Monitor vertical speed and altitude. Call out any trend toward terrain contact, descending flight path, or significant airspeed changes. **PM**
> **PF** Do not attempt to regain lost airspeed until windshear is no longer a factor.
> ###### "Vertical Speed, Radio Alt., …" **PM**
>
> ---
>
> - Maximum thrust: advance thrust levers full forward if EECs in normal mode. If terrain contact imminent, advance full forward regardless.
> - Do not exceed the Pitch Limit Indication (PLI). Flight at intermittent stick shaker may be required to obtain positive terrain separation.
> - Aft control column force increases as airspeed decreases. Smooth, steady control avoids pitch attitude overshoot and stall.
> - If TO/GA not available: disconnect autopilot and autothrottle(s) and fly manually.
> - Technique: Both hands on yoke, elbows on armrest.

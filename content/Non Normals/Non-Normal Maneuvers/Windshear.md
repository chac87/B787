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
> - Use increased vR (Topas Tool)

## PWS & Reactive Windshear

> [!info]- System Overview
> | | PWS Caution | PWS Warning | Immediate W/S Alert (GPWS) |
> |:---|:---|:---|:---|
> | **Audio** | *"MONITOR RADAR DISPLAY"* | *"WINDSHEAR AHEAD"* / *"GO-AROUND, WINDSHEAR AHEAD"* | Siren + *"WINDSHEAR, WINDSHEAR, WINDSHEAR"* |
> | **PWS Active** | < 1.200 ft RA | < 1.200 ft RA | — |
> | **Reactive Active** | — | Rotation – 1.500 ft RA | Rotation – 1.500 ft RA |
>
> *PWS only active when WXR selected for display*

## Response by Flight Phase

| Flight Phase          | PWS Caution               | PWS Warning                         | Immediate W/S Alert / GPWS                                                |
| :-------------------- | :------------------------ | :---------------------------------- | :------------------------------------------------------------------------ |
| **Before Takeoff**    | Maneuver as rqrd to avoid | Delay T/O                           | n/a                                                                       |
| **THR advanced – v1** | Maneuver as rqrd to avoid | RTO                                 | RTO — or rotate at VR and perform Escape Maneuver when airborne           |
| **v1 – Rotation**     | Maneuver as rqrd to avoid | Windshear Escape Maneuver           | Initiate normal rotation ≥ 2.000 ft before RWY end; ensure max thrust set |
| **Inflight**          | Maneuver as rqrd to avoid | Windshear Escape Maneuver           | Windshear Escape Maneuver                                                 |
| **During Approach**   | Maneuver as rqrd to avoid | Escape Maneuver or normal Go-Around | Windshear Escape Maneuver                                                 |

## Recognition in Flight

> [!info]- Unacceptable Flight Path Deviations below 1.000 ft AGL
> Any of the following in excess of:
> - **15 kts** IAS deviation
> - **500 ft/min** vertical speed deviation
> - **5°** pitch attitude deviation
> - **1 dot** displacement on glideslope
> - Unusual thrust lever position for a significant period of time
>
> **Or:** W/S alert *"Windshear – Windshear – Windshear"* (< 1.500 ft RA)

## Windshear Escape Maneuver

> [!proc]- Manual Flight
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

<div class="cl-note">Maximum thrust: advance thrust levers full forward if EECs in normal mode. If terrain contact imminent, advance full forward regardless.</div>
<div class="cl-note">Do not exceed the Pitch Limit Indication (PLI). Flight at intermittent stick shaker may be required to obtain positive terrain separation.</div>
<div class="cl-note">Aft control column force increases as airspeed decreases. Smooth, steady control avoids pitch attitude overshoot and stall.</div>
<div class="cl-note">If TO/GA not available: disconnect autopilot and autothrottle(s) and fly manually.</div>
<div class="cl-note">Technique: Both hands on yoke, elbows on armrest.</div>

> [!proc]- Autoflight
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

<div class="cl-note">Es gibt kein AFS W/S Programm — nur die Go-Around Pitch und Roll Modes. A/T stays ON.</div>
<div class="cl-note">Der Autopilot fliegt bis an den Stickshaker, bleibt aber engaged. If A/P performance unsatisfactory: switch to manual flight.</div>
<div class="cl-note">AFDS commands 15° pitch (or slightly below pitch limit). As climb rate increases, AFDS transitions to airspeed control targeting IAS/MACH window airspeed or current airspeed — whichever is greater at TO/GA activation.</div>

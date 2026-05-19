---
title: Windshear
tags: [non-normal, maneuvers]
---

# Windshear

<div class="cl-warning">Windshear avoidance policy: AVOID – AVOID – AVOID</div>

## Precautions

### Takeoff

- **Full rated thrust** – derate only if required for dispatch performance
- **Flaps 20** preferred; 15, 17 or 18 acceptable (near-equivalent performance)
- **Longest suitable runway** clear of known windshear areas
- **Use flight director** after T/O
- **Consider increased v<sub>R</sub>** up to actual GW v<sub>R</sub> +20 kts (set V-speeds for actual GW) – if windshear encountered at actual v<sub>R</sub>: rotate without hesitation, do not wait for increased speed
- Rotate at **normal rate** to all-engine initial climb pitch attitude; minimize pitch reductions until terrain/obstacle clearance assured – unless stick shaker activates
- **PM:** actively monitor vertical path instruments (V/S, altimeter); call out deviations
- Airspeed below trim speed → increased column forces expected. Stick shaker → reduce pitch. Do not exceed PLI.

### Approach & Landing

- **Flaps 25 or 30**
- **Stabilized by 1.000 ft** AAL – improves early windshear recognition
- Use runway **avoiding suspected windshear areas**; use electronic/visual glide path to detect deviations
- If A/T disengaged: add airspeed correction up to **+15 kts** (applied same as gust correction)
- **Avoid large thrust reductions or trim changes** after sudden airspeed increase – may be followed by airspeed decrease
- **Crosscheck F/D commands** with vertical path instruments
- **Consider AP + A/T** for the approach – provides more crew capacity for monitoring
- **PM:** call out vertical path deviations; especially critical at night or in marginal weather

## PWS & Reactive Windshear

> [!info] System Overview
> | | PWS Caution | PWS Warning | Immediate W/S Alert (GPWS) |
> |:---|:---|:---|:---|
> | **Audio** | *"MONITOR RADAR DISPLAY"* | *"WINDSHEAR AHEAD"* / *"GO-AROUND, WINDSHEAR AHEAD"* | Siren + *"WINDSHEAR, WINDSHEAR, WINDSHEAR"* |
> | **PWS Alerts** | < 1.200 ft RA | < 1.200 ft RA | Rotation – 1.500 ft RA |


→ [[Systems/Warning Systems|Warning Systems]] – PWS system architecture, sensor logic, and alert levels explained in detail.

## Response by Flight Phase

| Flight Phase          | PWS Caution               | PWS Warning                         | Immediate W/S Alert / GPWS                                                |
| :-------------------- | :------------------------ | :---------------------------------- | :------------------------------------------------------------------------ |
| **Before Takeoff**    | Maneuver as rqrd to avoid | Delay T/O                           | n/a                                                                       |
| **THR advanced – v1** | Maneuver as rqrd to avoid | RTO                                 | RTO – or rotate at v<sub>R</sub> and perform Escape Maneuver when airborne           |
| **v1 – Rotation**     | Maneuver as rqrd to avoid | Windshear Escape Maneuver           | Initiate normal rotation ≥ 2.000 ft before RWY end; ensure max thrust set |
| **Inflight**          | Maneuver as rqrd to avoid | Windshear Escape Maneuver           | Windshear Escape Maneuver                                                 |
| **During Approach**   | Maneuver as rqrd to avoid | Escape Maneuver or normal Go-Around | Windshear Escape Maneuver                                                 |

## Recognition in Flight

Unacceptable flight path deviations below **1.000 ft AGL** – any of the following in excess of:

- **15 kts** IAS deviation
- **500 ft/min** vertical speed deviation
- **5°** pitch attitude deviation
- **1 dot** displacement on glideslope
- Unusual thrust lever position for a significant period of time

**Or:** W/S alert *"Windshear – Windshear – Windshear"* (< 1.500 ft RA)

## Windshear Escape Maneuver

> [!proc] Autoflight
> **PF**
> 1. **"WINDSHEAR – I HAVE CONTROL"**
> 2. Push either TO/GA switch
> 3. Verify FMA: THR / TO/GA / TO/GA
> 4. Verify GA thrust
> 5. Verify speedbrakes retracted
> 6. Monitor system performance
>
> <hr>
>
> **PM**
> 1. Verify GA thrust
> 2. Verify all actions completed – call out any omissions
> 3. Monitor V/S and altitude – call out trend towards terrain

> [!info]- Autoflight Notes
> - No AFS W/S program – only the Go-Around Pitch and Roll Modes. A/T stays ON.
> - Autopilot flies to stick shaker but remains engaged. If A/P performance unsatisfactory: switch to manual flight.
> - AFDS commands 15° pitch (or slightly below pitch limit). As climb rate increases, AFDS transitions to airspeed control targeting IAS/MACH window airspeed or current airspeed – whichever is greater at TO/GA activation.

> [!proc] Manual Flight
> **PF**
> 1. **"WINDSHEAR – I HAVE CONTROL"**
> 2. Disconnect AP
> 3. Push TO/GA → **"MAX POWER"**
> 4. Apply max. thrust, disconnect A/T
> 5. Wings level, rotate **15°** – or just below PLI, if PLI < 15°
> 6. Verify speedbrakes retracted
> 7. Follow FD TO/GA guidance
>
> <hr>
>
> **PM**
> 1. Verify maximum thrust
> 2. Verify all actions completed – call out any omissions
> 3. Monitor V/S and altitude – call out trend towards terrain

> [!info]- Technique & Notes
> - **PFD:** **P**ush TO/GA · **F**ull forward thrust · **D**isconnect A/T – initial action sequence
> - Maximum thrust: advance thrust levers full forward if EECs in normal mode. If terrain contact imminent, advance full forward regardless.
> - Do not exceed the Pitch Limit Indication (PLI). Flight at intermittent stick shaker may be required to obtain positive terrain separation.
> - Aft control column force increases as airspeed decreases. Smooth, steady control avoids pitch attitude overshoot and stall.
> - If TO/GA not available: disconnect autopilot and autothrottle(s) and fly manually.
> - Technique: Both hands on yoke, elbows on armrest.

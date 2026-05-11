---
title: Flight Control Non-Normals
tags: [non-normal, flight-controls]
---

# Flight Control Non-Normals

## Flap / Slat System Modes

| | Primary | Secondary | Alternate |
|:---|:---:|:---:|:---:|
| **Power** | Center Hydraulic | Hydraulic + Electric | Electric only |
| **Flap Lever** | ✓ | ✓ | ✗ (inoperative) |
| **Flaps / Slats** | Together | Independent | Max Flaps 20 / Slats mid |
| **Protections** | Full | Full | ✗ (open loop) |

### Primary Mode

Normal operation — flaps and slats driven together via the center hydraulic system.

<img src="/Bilder/flaps%20primary.webp" alt="Primary Flap Mode" style="width: 30%">

### Secondary Mode

Automatic switchover when:
- Center hydraulic system failed
- Movement > 50% slower than normal
- Disagree condition or uncommanded motion
- Primary control failed or unable to reach target position

<img src="/Bilder/flaps%20secondary.webp" alt="Secondary Flap Mode" style="width: 30%">

EMCU now drives flaps **or** slats independently. Flap lever remains operative.

**EICAS:** Caution + expanded flap/slat position indication (slat bars fill upward, flap bars downward)

| EICAS | Landing | Note |
|:---|:---|:---|
| <a href="/Non-Normals/Non-Normal-Checklists/FLAPS-PRIMARY-FAIL" style="color:#f39c12 !important"><strong>FLAPS PRIMARY FAIL</strong></a> | Flaps 20 | Slow extension → slow retraction — full flap would compromise G/A performance |
| <a href="/Non-Normals/Non-Normal-Checklists/SLATS-PRIMARY-FAIL" style="color:#f39c12 !important"><strong>SLATS PRIMARY FAIL</strong></a> | Normal | Read checklist notes, allow time for slower extension |

### Alternate Mode

Activated when flap/slat electronics have completely failed.

<img src="/Bilder/flaps%20alternate.webp" alt="Alternate Flap Mode" style="width: 30%">

- **ALTN FLAPS ARM** — disables primary and secondary, flap lever inoperative
- All hydraulics bypassed — electric motors only
- Maximum: **Flaps 20**, slats to mid position
- Switch: RET / OFF / EXT (not spring-loaded)
- **No closed-loop** → no asymmetry or uncommanded motion protection

> [!warning] Only when directed by NNC
> Alternate mode only for: <a href="/Non-Normals/Non-Normal-Checklists/AIRSPEED-UNRELIABLE" style="color:#f39c12 !important"><strong>AIRSPEED UNRELIABLE</strong></a> or <a href="/Non-Normals/Non-Normal-Checklists/FLAP-SLAT-CONTROL" style="color:#f39c12 !important"><strong>FLAP/SLAT CONTROL</strong></a> NNC

<a href="/Non-Normals/Non-Normal-Checklists/FLAP-SLAT-CONTROL" style="color:#f39c12 !important"><strong>FLAP/SLAT CONTROL NNC:</strong></a> Extension takes approx. 3 minutes — plan approach early. v<sub>REF</sub> 20. Flap lever stays UP (per checklist — it is inoperative regardless).

### Flaps / Slats Drive

<a href="/Non-Normals/Non-Normal-Checklists/FLAPS-DRIVE" style="color:#f39c12 !important"><strong>FLAPS DRIVE</strong></a> or <a href="/Non-Normals/Non-Normal-Checklists/SLATS-DRIVE" style="color:#f39c12 !important"><strong>SLATS DRIVE</strong></a> → drive mechanism failed — cannot be moved in **any** mode. Checklist prepares for partial flap/slat landing. See landing techniques in Device Malfunctions below.

## Secondary and Direct Modes — Handling

No automatic envelope protection or load alleviation. No automatic pitch compensation for configuration changes (flaps, gear, thrust).

- **Pitch sensitivity** — highest with flaps up at higher speeds. Small and smooth control column inputs are sufficient.
- **Pitch trim** — trim switches control the stabilizer directly. Use to maintain acceptable column forces and maneuvering capability.
- With **flaps extended**: typical pitch sensitivity for approach and landing.

## Device Malfunctions

### Flap Lever Inoperative

No EICAS alert — unannunciated. Slats and flaps do not respond to the flap lever. Use the Flap Lever Inoperative NNC to extend/retract via the alternate flap system.

After takeoff: usually requires return for landing. Retract flaps only if needed for performance, terrain clearance, or diversion.

### Slats Drive Failure

<a href="/Non-Normals/Non-Normal-Checklists/SLATS-PRIMARY-FAIL" style="color:#f39c12 !important"><strong>SLATS PRIMARY FAIL</strong></a> → secondary mode (electric drive). If secondary also fails or asymmetry exists: <a href="/Non-Normals/Non-Normal-Checklists/SLATS-DRIVE" style="color:#f39c12 !important"><strong>SLATS DRIVE</strong></a> → <a href="/Non-Normals/Non-Normal-Checklists/SLATS-DRIVE" style="color:#f39c12 !important">SLATS DRIVE NNC</a> (accommodates no leading edge slats on one side).

- Flap extension limited to **Flaps 20** if slats not fully extended
- Flaps 1 is for leading edge devices only — if LEDs fail to extend, flap display expands
- Pitch attitude at touchdown is less than normal — fly onto runway, do not float

### Flap Drive Failure

<a href="/Non-Normals/Non-Normal-Checklists/FLAPS-PRIMARY-FAIL" style="color:#f39c12 !important"><strong>FLAPS PRIMARY FAIL</strong></a> → secondary mode (electric drive). If secondary also fails or asymmetry exists: <a href="/Non-Normals/Non-Normal-Checklists/FLAPS-DRIVE" style="color:#f39c12 !important"><strong>FLAPS DRIVE</strong></a> → <a href="/Non-Normals/Non-Normal-Checklists/FLAPS-DRIVE" style="color:#f39c12 !important">FLAPS DRIVE NNC</a>. Flap load relief not available in secondary mode.

- Final: v<sub>REF</sub> + wind additive. If speed drops to v<sub>REF</sub>: 40° bank capability not available
- Pitch attitude on final: several degrees **higher** than normal
- Do not allow airspeed below v<sub>REF</sub> during flare — risk of tail contact
- Fly onto runway — do not float

### Extension via Secondary or Alternate System

Flaps extend more slowly. **Delay setting the new command speed** until flaps reach the selected position — prevents inadvertent low airspeed if attention is diverted during extension.

### All Flaps and Slats Up Landing


Extremely remote probability. Flaps + Slats Fail NNC available. Consider weight reduction (fuel burn or jettison) before approach. Autoland is not permitted.

**Key numbers:**

| Parameter | Value |
|:---|:---|
| Establish final | ~10 NM from runway |
| Rate of descent | ~1.000 FPM |
| Body attitude | ~4° higher than normal |
| Aim point | **1.800 ft down the runway** (not threshold) |
| Speedbrakes | Not below 800 ft |

> [!info]- Approach Technique
> Fly a wide pattern — higher maneuvering speed requires increased turning radius. Maintain no slower than flaps-up maneuvering speed until established on final. Maneuver with normal bank angles.
>
> Use ILS or GLS if available. Do not reduce to final approach speed until aligned. Before intercepting descent: reduce to command speed and hold until landing is assured.
>
> Final approach speed may be in the **amber band** — set A/T to OFF to prevent automatic activation. Brief PM for manual TO/GA thrust for any go-around.
>
> Go around if landing appears beyond the normal touchdown zone.

> [!info]- Landing Technique
> Flare only enough to reduce rate of descent — **do not float**. Floating wastes runway and risks a tail strike. Slight forward column pressure may be needed at the touchdown point and to lower the nose wheels.
>
> After nose wheels on runway: hold light forward pressure and expeditiously accomplish the landing roll procedure.
>
> Apply **maximum reverse thrust immediately** at main gear touchdown — most effective at high speeds. Full reverse required for a longer duration. Autobrakes recommended; setting consistent with available runway length.

## Jammed Flight Controls

May result from dirt, component failure, worn parts, improper lubrication, or foreign objects. Difficult to recognize, especially in a trimmed airplane. → <a href="/Non-Normals/Non-Normal-Checklists/Jammed-Flight-Controls">Jammed Flight Controls NNC</a>

**Signs of an elevator jam:**
- Unexplained AP disengagement or inability to engage autopilot
- Altitude undershoot / overshoot during autopilot level-off
- Higher than normal control forces during speed or configuration changes

> [!info]- Override Technique
> Both pilots apply force in the **same direction** to attempt to clear the jam or activate an override feature. There is no concern about damaging the mechanism — apply maximum force if needed.
>
> If the jam does not clear: apply force individually to each control to identify the non-jammed side (greatest airplane response). The non-jammed pilot becomes PF for the remainder of the flight.
>
> In override: normal force + override force is required to move the surface. Response is slower but sufficient for control and landing. Note: override mechanisms spring-return to the jammed position when released.
>
> If the rudder is jammed: engage the autopilot to counter the jam effect.

**Trim inputs to counter a jammed control:**

| Jammed Control | Trim Input |
|:---|:---|
| Elevator | Stabilizer (select Direct mode for more authority if needed) |
| Aileron | Rudder |
| Spoiler | Rudder |

**Approach and landing:**
- Minimum crosswind runway. Complete preparations early.
- No abrupt thrust, speedbrake, or configuration changes. Small bank angles.
- Establish landing config, speed, and in-trim condition early on final.
- Do not reduce thrust to idle until after touchdown.
- Asymmetric braking and asymmetric thrust reverser may aid directional control.

> [!warning] Elevator jam — Go-Around
> Control forces significantly greater than normal; flare response is slower. Maintain flight path with thrust and main electric trim.
> **Avoid go-around if at all possible.** If unavoidable: advance thrust levers slowly and smoothly, maintain pitch with stabilizer and any available elevator.

## Inoperative Stabilizer

**EICAS:** <a href="/Non-Normals/Non-Normal-Checklists/STABILIZER" style="color:#f39c12 !important"><strong>STABILIZER</strong></a>

Unlike conventional aircraft, normal pitch trim remains available in normal flight control mode — however elevator authority is limited. The NNC specifies a maximum in-flight speed, adjusted approach speed, and landing configuration to ensure adequate elevator control.

**Uncommanded trim motion:** Hold control column firmly. If motion continues, displace column in the **opposite direction** to interrupt stabilizer trim commands.

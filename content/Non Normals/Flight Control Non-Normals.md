---
title: Flight Control Non-Normals
tags: [non-normal, flight-controls]
---

# Flight Control Non-Normals

→ [[Systems/Flight Controls|Flight Controls (Systems)]]

## Flap / Slat System Modes

| | Primary | Secondary | Alternate |
|:---|:---:|:---:|:---:|
| **Power** | Center Hydraulic | Hydraulic + Electric | Electric only |
| **Flap Lever** | ✓ | ✓ | ✗ (inoperative) |
| **Flaps / Slats** | Together | Independent | Max Flaps 20 / Slats mid |
| **Protections** | Full | Full | ✗ (open loop) |

### Primary Mode

Normal operation – flaps and slats driven together via the center hydraulic system.

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

### Alternate Mode

Activated when flap/slat electronics have completely failed.

<img src="/Bilder/flaps%20alternate.webp" alt="Alternate Flap Mode" style="width: 30%">

- **ALTN FLAPS ARM** – disables primary and secondary, flap lever inoperative
- All hydraulics bypassed – electric motors only
- Maximum: **Flaps 20**, slats to mid position
- Switch: RET / OFF / EXT (not spring-loaded)
- **No closed-loop** → no asymmetry or uncommanded motion protection

> [!warning] Only when directed by NNC
> Alternate mode only for: <a href="/Non-Normals/Non-Normal-Checklists/AIRSPEED-UNRELIABLE" style="color:#f39c12 !important"><strong>AIRSPEED UNRELIABLE</strong></a> or <a href="/Non-Normals/Non-Normal-Checklists/FLAP-SLAT-CONTROL" style="color:#f39c12 !important"><strong>FLAP/SLAT CONTROL</strong></a> NNC

<a href="/Non-Normals/Non-Normal-Checklists/FLAP-SLAT-CONTROL" style="color:#f39c12 !important"><strong>FLAP/SLAT CONTROL NNC:</strong></a> Extension takes approx. 3 minutes – plan approach early. v<sub>REF</sub> 20. Flap lever stays UP (per checklist – it is inoperative regardless).

## Slat/Flap Malfunctions

<div class="eicas-levels">

<div class="eicas-card eicas-card--white">
  <div class="eicas-card-title"><a href="/Non-Normals/Non-Normal-Checklists/CRUISE-FLAPS-SYS" style="color:#888888 !important"><strong>CRUISE FLAPS SYS</strong></a> <span class="eicas-card-badge">ADVISORY</span></div>
  <div class="eicas-card-body">Cruise flap system failed · Normal flaps available for landing</div>
</div>

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title"><a href="/Non-Normals/Non-Normal-Checklists/FLAPS-PRIMARY-FAIL" style="color:#f39c12 !important"><strong>FLAPS PRIMARY FAIL</strong></a> <span class="eicas-card-badge">CAUTION</span></div>
  <div class="eicas-card-body">Primary flap mode failed · Secondary mode · Flaps 20 · Slow extension/retraction</div>
</div>

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title"><a href="/Non-Normals/Non-Normal-Checklists/SLATS-PRIMARY-FAIL" style="color:#f39c12 !important"><strong>SLATS PRIMARY FAIL</strong></a> <span class="eicas-card-badge">CAUTION</span></div>
  <div class="eicas-card-body">Primary slat mode failed · Secondary mode · Normal landing · Allow time for slower extension</div>
</div>

<div class="eicas-card eicas-card--red">
  <div class="eicas-card-title"><a href="/Non-Normals/Non-Normal-Checklists/FLAPS-DRIVE" style="color:#f39c12 !important"><strong>FLAPS DRIVE</strong></a> <span class="eicas-card-badge">CAUTION</span></div>
  <div class="eicas-card-body">Drive mechanism failed · Flaps fixed in current position · <strong>DO NOT USE Alternate Mode</strong> · Max FL 200 · Higher fuel burn · Autoland not certified · Higher approach speed / LDG Dist.</div>
</div>

<div class="eicas-card eicas-card--red">
  <div class="eicas-card-title"><a href="/Non-Normals/Non-Normal-Checklists/SLATS-DRIVE" style="color:#f39c12 !important"><strong>SLATS DRIVE</strong></a> <span class="eicas-card-badge">CAUTION</span></div>
  <div class="eicas-card-body">Drive mechanism failed · Slats fixed in current position · Flap extension limited to Flaps 20 · v<sub>REF</sub> 30+30 · Pitch at touchdown lower than normal</div>
</div>

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title"><a href="/Non-Normals/Non-Normal-Checklists/FLAP-SLAT-CONTROL" style="color:#f39c12 !important"><strong>FLAP/SLAT CONTROL</strong></a> <span class="eicas-card-badge">CAUTION</span></div>
  <div class="eicas-card-body">Electronics failed · Alternate mode required · Extension ~3 min · v<sub>REF</sub> 20</div>
</div>

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title"><a href="/Non-Normals/Non-Normal-Checklists/Flap-Lever-Inoperative" style="color:#f39c12 !important"><strong>Flap Lever Inoperative</strong></a> <span class="eicas-card-badge">UNANNUNCIATED</span></div>
  <div class="eicas-card-body">Flaps/slats not responding to flap lever · Alternate mode required · After T/O: usually return for landing</div>
</div>

</div>

**Escalation paths:**
- <a href="/Non-Normals/Non-Normal-Checklists/FLAPS-PRIMARY-FAIL" style="color:#f39c12 !important"><strong>FLAPS PRIMARY FAIL</strong></a> → secondary fails or asymmetry detected → <a href="/Non-Normals/Non-Normal-Checklists/FLAPS-DRIVE" style="color:#f39c12 !important"><strong>FLAPS DRIVE</strong></a>
- <a href="/Non-Normals/Non-Normal-Checklists/SLATS-PRIMARY-FAIL" style="color:#f39c12 !important"><strong>SLATS PRIMARY FAIL</strong></a> → secondary fails or asymmetry detected → <a href="/Non-Normals/Non-Normal-Checklists/SLATS-DRIVE" style="color:#f39c12 !important"><strong>SLATS DRIVE</strong></a>

<div class="eicas-levels">

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title">Possible Threats</div>
  <div class="eicas-card-body">Over-/underspeed when failure occurs · Landing distance · Less drag during approach · Unfamiliar pitch & power values · Non-normal go-around procedure · Higher fuel flow</div>
</div>

<div class="eicas-card eicas-card--white">
  <div class="eicas-card-title">Possible Specials</div>
  <div class="eicas-card-body">Speed setting in secondary / alternate mode · Approach speed in amber band · v<sub>REF</sub> and flap setting on Approach REF page · No autoland certified below flaps 20</div>
</div>

</div>

### Landing Technique – Flap Drive

- Final: v<sub>REF</sub> + wind additive. If speed drops to v<sub>REF</sub>: 40° bank capability not available
- Pitch attitude on final: several degrees **higher** than normal
- Do not allow airspeed below v<sub>REF</sub> during flare – risk of tail contact
- Fly onto runway – do not float

### Slow Extension

Flaps extend more slowly. **Delay setting the new command speed** until flaps reach the selected position – prevents inadvertent low airspeed if attention is diverted during extension.

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
> Fly a wide pattern – higher maneuvering speed requires increased turning radius. Maintain no slower than flaps-up maneuvering speed until established on final. Maneuver with normal bank angles.
>
> Use ILS or GLS if available. Do not reduce to final approach speed until aligned. Before intercepting descent: reduce to command speed and hold until landing is assured.
>
> Final approach speed may be in the **amber band** – set A/T to OFF to prevent automatic activation. Brief PM for manual TO/GA thrust for any go-around.
>
> Go around if landing appears beyond the normal touchdown zone.

> [!info]- Landing Technique
> Flare only enough to reduce rate of descent – **do not float**. Floating wastes runway and risks a tail strike. Slight forward column pressure may be needed at the touchdown point and to lower the nose wheels.
>
> After nose wheels on runway: hold light forward pressure and expeditiously accomplish the landing roll procedure.
>
> Apply **maximum reverse thrust immediately** at main gear touchdown – most effective at high speeds. Full reverse required for a longer duration. Autobrakes recommended; setting consistent with available runway length.

## Jammed Flight Controls

May result from dirt, component failure, worn parts, improper lubrication, or foreign objects. Difficult to recognize, especially in a trimmed airplane. → <a href="/Non-Normals/Non-Normal-Checklists/Jammed-Flight-Controls">Jammed Flight Controls NNC</a>

**Signs of an elevator jam:**
- Unexplained AP disengagement or inability to engage autopilot
- Altitude undershoot / overshoot during autopilot level-off
- Higher than normal control forces during speed or configuration changes

> [!info]- Override Technique
> Both pilots apply force in the **same direction** to attempt to clear the jam or activate an override feature. There is no concern about damaging the mechanism – apply maximum force if needed.
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

> [!warning] Elevator jam – Go-Around
> Control forces significantly greater than normal; flare response is slower. Maintain flight path with thrust and main electric trim.
> **Avoid go-around if at all possible.** If unavoidable: advance thrust levers slowly and smoothly, maintain pitch with stabilizer and any available elevator.

## Inoperative Stabilizer

**EICAS:** <a href="/Non-Normals/Non-Normal-Checklists/STABILIZER" style="color:#e74c3c !important"><strong>STABILIZER</strong></a> (warning) · <a href="/Non-Normals/Non-Normal-Checklists/STABILIZER-L2" style="color:#f39c12 !important"><strong>STABILIZER L2</strong></a> / <a href="/Non-Normals/Non-Normal-Checklists/STABILIZER-R2" style="color:#f39c12 !important"><strong>STABILIZER R2</strong></a> (advisory, one channel) · <span style="color:#f39c12"><strong>STABILIZER CUTOUT</strong></span> (advisory, both cutout)

<div class="eicas-levels">

<div class="eicas-card eicas-card--white">
  <div class="eicas-card-title">NOTIFY</div>
  <div class="eicas-card-body">Manual: uncommanded pitch change · increased wheel force · and/or EICAS warning<br>Auto: EICAS warning</div>
</div>

<div class="eicas-card eicas-card--white">
  <div class="eicas-card-title">FLY</div>
  <div class="eicas-card-body">Manual: keep normal pitch and power<br>Auto: monitor AP performance</div>
</div>

<div class="eicas-card eicas-card--white">
  <div class="eicas-card-title">ANALYZE</div>
  <div class="eicas-card-body">Review all EICAS alerts to identify malfunctioning systems · CM1 identifies applicable checklist after coordinated analysis</div>
</div>

<div class="eicas-card eicas-card--white">
  <div class="eicas-card-title">ACTION</div>
  <div class="eicas-card-body">PF: "Memory Items" → STAB cutout switches CUTOUT<br>Pitch trim via elevator – elevator authority reduced<br>Flaps 20 for landing · Reduced max airspeed for sufficient elevator authority</div>
</div>

</div>

- **Auto-shutdown** – one channel: <span style="color:#f39c12">**STABILIZER L2/R2**</span> advisory, other channel operative · both channels or motion not stopped: <span style="color:#e74c3c">**STABILIZER**</span> warning · secondary mode: <span style="color:#e74c3c">**STABILIZER**</span> warning inhibited
- **Cutout switches** CUTOUT → <span style="color:#f39c12">**STABILIZER CUTOUT**</span> advisory · <span style="color:#e74c3c">**STABILIZER**</span> warning suppressed
- **Uncommanded trim motion** – hold column firmly · if motion continues, displace column in opposite direction to interrupt trim commands

> [!info] If both channels already auto-shut down: placing cutout switches in CUTOUT will **not** clear the <span style="color:#e74c3c">**STABILIZER**</span> warning and will **not** trigger the <span style="color:#f39c12">**STABILIZER CUTOUT**</span> advisory.

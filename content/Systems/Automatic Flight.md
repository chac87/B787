---
title: Automatic Flight
tags: [systems, autoflight, afds, mcp]
---

# Automatic Flight
![[mcp.webp]]

<div style="display:flex;gap:0.75rem;margin-bottom:1rem;align-items:flex-start">
  <img src="/Bilder/takeoff%20modes.webp" style="flex:1;min-width:0;width:50%;border-radius:6px" />
  <img src="/Bilder/landing%20modes.webp" style="flex:1;min-width:0;width:50%;border-radius:6px" />
</div>

## System Overview

The AFDS consists of three autoflight computing systems and the MCP. The autopilot does not control flight control surfaces directly – all autopilot commands are routed through the Primary Flight Computers (PFCs), which generate surface commands via the fly-by-wire system. The autopilot controls the elevators, ailerons, flaperons, and spoilers; rudder commands are added only during an autopilot approach and landing. Nosewheel steering is controlled by the autopilot during rollout after an automatic landing.

When the autopilot is engaged, the PFCs issue backdrive commands that physically move the column, wheel, and pedals, giving the crew visual and tactile feedback of automatic inputs.

## Mode Control Panel (MCP)

The MCP selects and activates AFDS modes and sets target values: airspeed · altitude · heading · track · Mach · vertical speed · flight path angle. All values except V/S and FPA can be preselected before engaging the autopilot or flight director.

### Mode Activation

**Activate only – single push:**
ALT · FLCH SPD · FPA · HDG HOLD · HDG SEL · TRK HOLD · TRK SEL · V/S

**Arm or activate – single push:**
LNAV · VNAV · LOC/FAC · G/S (via APP) · G/P (via APP) · B/CRS (via LOC/FAC or APP)

### Mode Deselection

Most modes are deselected by selecting another mode, or by disengaging the autopilot and turning both flight directors off.

- **G/S and G/P** cannot be deselected by another mode – only by AP disengage + both FDs off, selecting go-around, or (above 1.500 ft RA) reselecting APP
- **VNAV · LNAV · LOC · FAC · G/S · G/P** can be disarmed by pushing their switch a second time – except LNAV when automatically armed on go-around

## Flight Mode Annunciations (FMA)

<img src="/Bilder/fma.webp" style="max-width:420px;border-radius:6px;margin-bottom:0.75rem">

FMAs display just above the ASA on the PFD and HUD, in three columns from left to right:

<div style="display:flex;border:1px solid var(--lightgray);border-radius:4px;overflow:hidden;margin:0.5rem 0 0.75rem">
<details style="flex:1;min-width:0;border:none;border-right:1px solid var(--lightgray)">
<summary style="justify-content:center"><strong>Autothrottle</strong></summary>
<div class="c-green" style="text-align:center;padding:0.4em 0.2em 0.7em">THR REF<br>THR<br>SPD<br>IDLE<br>HOLD</div>
</details>
<details style="flex:1;min-width:0;border:none;border-right:1px solid var(--lightgray)">
<summary style="justify-content:center"><strong>Roll</strong></summary>
<div class="c-green" style="text-align:center;padding:0.4em 0.2em 0.7em">LNAV<br>HDG SEL<br>HDG HOLD<br>TRK SEL<br>TRK HOLD<br>ATT<br>LOC<br>FAC<br>B/CRS<br>TO/GA<br>ROLLOUT</div>
</details>
<details style="flex:1;min-width:0;border:none">
<summary style="justify-content:center"><strong>Pitch</strong></summary>
<div class="c-green" style="text-align:center;padding:0.4em 0.2em 0.7em">TO/GA<br>VNAV SPD<br>VNAV PTH<br>VNAV ALT<br>FLCH SPD<br>V/S<br>FPA<br>ALT<br>G/S<br>G/P<br>FLARE</div>
</details>
</div>

- **Active / captured modes** – large green text at the top of the annunciator box
- **Armed modes** (except TO/GA in flight) – small white text (PFD) / small green text (HUD) at the bottom of the box
- A **green box** frames the mode annunciation for 10 seconds when a mode first activates, and when a degradation clears
- **Mode degradation** with autopilot engaged – amber strikethrough through the affected FMA on the PFD

### Speed on Thrust vs. Speed on Pitch

<div class="eicas-levels">

<div class="eicas-card eicas-card--white">
  <div class="eicas-card-title">Speed on Thrust <span class="eicas-card-badge">RECOMMENDED IN TURBULENCE</span></div>
  <div class="eicas-card-body">Thrust controls airspeed (SPD)<br>Pitch follows the vertical path or altitude<br>Modes: ALT · V/S · FPA · VNAV PTH<br>FMA A/T: SPD</div>
</div>

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title">Speed on Pitch <span class="eicas-card-badge">AVOID IN TURBULENCE</span></div>
  <div class="eicas-card-body">Pitch maintains target airspeed<br>Thrust doesn't change (THR · THR REF · IDLE · HOLD)<br>Modes: FLCH SPD · VNAV SPD<br>FMA pitch: shows "SPD" suffix</div>
</div>

</div>

## AFDS Status Annunciation (ASA)

Displayed just above the attitude indicator on the PFD and HUD.

<div class="eicas-levels">

<div class="eicas-card eicas-card--white">
  <div class="eicas-card-title">A/P</div>
  <div class="eicas-card-body">One or more autopilots engaged</div>
</div>

<div class="eicas-card eicas-card--white">
  <div class="eicas-card-title">FLT DIR</div>
  <div class="eicas-card-body">Flight director ON · autopilot not engaged</div>
</div>

<div class="eicas-card eicas-card--white">
  <div class="eicas-card-title">LAND 3</div>
  <div class="eicas-card-body">Fail operational – a single fault cannot prevent automatic landing</div>
</div>

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title">LAND 2</div>
  <div class="eicas-card-body">Fail passive – a single fault cannot cause a significant flight path deviation</div>
</div>

<div class="eicas-card eicas-card--red">
  <div class="eicas-card-title">NO AUTOLAND</div>
  <div class="eicas-card-body">AFDS unable to make an automatic landing · does not necessarily indicate a system failure – may reflect insufficient lateral or vertical signal integrity</div>
</div>

</div>

Changes in autoland status below 200 ft AGL are inhibited during ILS or GLS autoland when LAND 2 or LAND 3 is displayed. On an IAN approach with G/P engaged, NO AUTOLAND shows at 100 ft AGL if the autopilot is still engaged.

## Autopilot

### Engagement & Disengagement

Engaged by pushing either MCP autopilot engage switch. Normal disengagement via the control wheel disconnect switch. Additional methods:

- MCP autopilot disengage bar (pull down)
- Override force on the control column or control wheel
- Rudder pedal override – **only when LAND 2 or LAND 3 is annunciated**

The EICAS warning **AUTOPILOT DISC** displays on any manual or automatic disengagement. Re-engagement may be possible after some failures by pushing the engage switch.

### Mode Degradation

When the autopilot detects a mode failure, it remains engaged in an **attitude stabilizing mode** using inertial data. Indications on the PFD and HUD:

- Amber strikethrough through the affected FMA
- Respective FD bar and HUD guidance cue removed
- EICAS advisory **AUTOPILOT** displays

Behavior differs by altitude:

**Above 500 ft RA:** If the crew does not respond within 10 seconds, the autopilot automatically disconnects – AUTOPILOT DISC + wailer. TO/GA is available; the autopilot can be re-engaged above 200 ft RA.

**Below 500 ft RA:** The autopilot does not auto-disconnect. **NO AUTOLAND** is added to the indications on the PFD and HUD. TO/GA is available for a go-around.

When the degradation clears, annunciations clear, the autopilot resumes the mode, and a green box appears around the FMA for 10 seconds. An uncommanded MCP altitude change triggers the AUTOPILOT advisory; it clears when the pilot moves the altitude selector.

### Flight Director Mode Degradation

When a specific flight director mode degrades, the affected pitch or roll bar disappears and the HUD cue is removed. No auto-disconnect occurs. When the degradation clears, the bars return immediately.

## Roll Modes

<div class="checklist">

<div class="cl-item"><strong>LNAV</strong><span class="cl-dots"></span><strong>FMS lateral navigation</strong></div>
<div class="cl-sub">Arms on selection. Activates above 50 ft RA when in position to turn onto the active route leg, or immediately if within 2½ NM in flight. On go-around: 50 ft RA (FD only) or 200 ft RA (AP engaged). Deactivated by any other roll mode selection or AP disengage + both FDs off</div>

<div class="cl-item"><strong>HDG SEL</strong><span class="cl-dots"></span><strong>Fly to / maintain selected heading</strong></div>
<div class="cl-item"><strong>HDG HOLD</strong><span class="cl-dots"></span><strong>Hold current heading</strong></div>
<div class="cl-sub">Holds the heading reached when wings level after a turn</div>

<div class="cl-item"><strong>TRK SEL</strong><span class="cl-dots"></span><strong>Fly to / maintain selected track</strong></div>
<div class="cl-item"><strong>TRK HOLD</strong><span class="cl-dots"></span><strong>Hold current track</strong></div>
<div class="cl-sub">Holds the track reached when wings level after a turn</div>

<div class="cl-item"><strong>ATT</strong><span class="cl-dots"></span><strong>Bank angle hold</strong></div>
<div class="cl-sub">Active on initial AP engagement or FD activation in flight. Holds bank between 5° and 30°. Below 5° → transitions to wings-level (HDG HOLD or TRK HOLD). Above 30° → returns to 30° of bank</div>

<div class="cl-item"><strong>LOC</strong><span class="cl-dots"></span><strong>Localizer capture and track</strong></div>
<div class="cl-sub">Arms on selection; captures when within range and within 120° of the localizer course</div>

<div class="cl-item"><strong>FAC</strong><span class="cl-dots"></span><strong>IAN final approach course</strong></div>
<div class="cl-sub">Arms; tracks the IAN inbound bearing when captured</div>

<div class="cl-item"><strong>B/CRS</strong><span class="cl-dots"></span><strong>Back course localizer</strong></div>
<div class="cl-sub">Arms; tracks the inbound back course bearing when captured</div>

<div class="cl-item"><strong>TO/GA</strong><span class="cl-dots"></span><strong>Maintain existing ground track</strong></div>
<div class="cl-sub">In flight: activated by pushing TO/GA switch. Armed when flaps are out of up or glideslope is captured (no FMA for armed state)</div>

<div class="cl-item"><strong>ROLLOUT</strong><span class="cl-dots"></span><strong>Localizer centerline guidance after touchdown</strong></div>
<div class="cl-sub">Arms below 1.500 ft RA; activates at touchdown with weight on wheels. Uses rudder and nosewheel steering</div>

</div>

## Pitch Modes

<div class="checklist">

<div class="cl-item"><strong>TO/GA</strong><span class="cl-dots"></span><strong>Takeoff / go-around pitch guidance</strong></div>
<div class="cl-sub">8° nose-up indication on the ground; pitch commands active after liftoff</div>

<div class="cl-item"><strong>VNAV SPD</strong><span class="cl-dots"></span><strong>Pitch to maintain FMC speed</strong></div>
<div class="cl-sub">Arms on VNAV switch push; activates at 400 ft above field elevation. Typically used during climb</div>
<div class="cl-sub">A/T operates in THR REF · THR · IDLE · HOLD as required by phase of flight</div>

<div class="cl-item"><strong>VNAV PTH</strong><span class="cl-dots"></span><strong>Pitch to maintain FMC altitude or descent path</strong></div>
<div class="cl-sub">A/T maintains speed in SPD mode. EICAS advisory FMC MESSAGE displays if MCP altitude remains at cruise altitude within 2 minutes of top of descent</div>
<div class="cl-sub">For an early descent below the VNAV path, select FLCH, V/S, or FPA. If VNAV is armed and the airplane subsequently intercepts the VNAV path from below, VNAV reactivates in VNAV PTH</div>

<div class="cl-item"><strong>VNAV ALT</strong><span class="cl-dots"></span><strong>Pitch to maintain MCP altitude – VNAV profile vs. MCP conflict</strong></div>
<div class="cl-sub">Airplane levels off. To resume: change MCP altitude and push altitude selector, or select another pitch mode</div>

<div class="cl-item"><strong>FLCH SPD</strong><span class="cl-dots"></span><strong>Pitch to maintain MCP IAS/MACH</strong></div>
<div class="cl-sub">Opens IAS/MACH window if blanked. A/T manages thrust – FMA shows THR once thrust is set to reach the selected altitude in ~2 minutes</div>
<div class="cl-sub">Climb (1.000–12.000 ft change): A/T advances thrust to current limit for ~2 min climb</div>
<div class="cl-sub">Descent (2.000–16.000 ft change): A/T retards thrust to idle for ~2 min descent · smaller changes take less than 2 min</div>

<div class="cl-item"><strong>V/S</strong><span class="cl-dots"></span><strong>Pitch to maintain set vertical speed</strong></div>
<div class="cl-sub">VS/FPA switch opens the V/S window showing current vertical speed</div>

<div class="cl-item"><strong>FPA</strong><span class="cl-dots"></span><strong>Pitch to maintain set flight path angle</strong></div>
<div class="cl-sub">VS/FPA switch opens the FPA window</div>

<div class="cl-item"><strong>ALT</strong><span class="cl-dots"></span><strong>Altitude hold</strong></div>
<div class="cl-sub">Activated by MCP ALT HOLD switch, or by capturing the MCP-selected altitude from a V/S, FPA, or FLCH climb/descent</div>

<div class="cl-item"><strong>G/S</strong><span class="cl-dots"></span><strong>ILS or GLS glideslope</strong></div>
<div class="cl-item"><strong>G/P</strong><span class="cl-dots"></span><strong>FMC glidepath (IAN approach)</strong></div>

<div class="cl-item"><strong>FLARE</strong><span class="cl-dots"></span><strong>Autoland flare</strong></div>
<div class="cl-sub">Arms below 1.500 ft RA. Activates between 60 and 40 ft RA. Deactivates at touchdown and smoothly lowers the nosewheel to the runway</div>

</div>

## Autothrottle

The autothrottle provides thrust control from takeoff through landing. Mode and speed selection is via the MCP; FMC reference thrust limit selection is via the CDUs. When VNAV is active, the FMC selects autothrottle modes and target thrust values.

The autothrottle is **OFF** when the A/T arm switches are OFF, **ARMED** when the switches are ON and the mode is blank, and **ACTIVE** when the switches are ON and a mode is shown.

### Modes

<div class="checklist">

<div class="cl-item"><strong>THR REF</strong><span class="cl-dots"></span><strong>Thrust to reference limit</strong></div>
<div class="cl-sub">Takeoff · climb in VNAV SPD · go-around (second activation)</div>

<div class="cl-item"><strong>THR</strong><span class="cl-dots"></span><strong>Thrust to achieve commanded climb or descent rate</strong></div>
<div class="cl-sub">FLCH SPD · go-around · stall protection in descent (see below)</div>

<div class="cl-item"><strong>SPD</strong><span class="cl-dots"></span><strong>Maintains commanded speed</strong></div>
<div class="cl-sub">Speed set via MCP IAS/MACH selector or FMC (CDU CLIMB / CRUISE / DESCENT pages). Does not exceed operating speed or thrust limits</div>

<div class="cl-item"><strong>IDLE</strong><span class="cl-dots"></span><strong>Thrust levers retard to idle</strong></div>
<div class="cl-sub">Followed by HOLD mode</div>

<div class="cl-item"><strong>HOLD</strong><span class="cl-dots"></span><strong>Thrust lever servos inhibited – manual thrust control</strong></div>
<div class="cl-sub">A/T does not control thrust or speed. Levers can be repositioned manually</div>

</div>

When only one autothrottle is armed and active, the FMA shows a **L–** or **R–** prefix before the mode (e.g. **L SPD**). The EICAS advisory **AUTOTHROTTLE L** or **AUTOTHROTTLE R** displays when the respective servo fails.

### Manual Flight

The autothrottle can operate without the autopilot or flight directors. If both FDs are turned off while the A/T is active, the A/T transitions to **SPD** and maintains the IAS/MACH window speed.

During a manual landing with SPD active, or with pitch mode VNAV or FLCH SPD active, thrust reduces to **IDLE at 25 ft RA**.

### Automatic Activation

The autothrottle automatically activates for stall protection when armed and not active (mode blank). All three conditions must be met:

1. Speed < FMC-calculated value for at least 1 second
2. Thrust < reference thrust limit
3. Above 400 ft AFE on takeoff, **or** above 100 ft RA on approach

The mode engaged depends on the active pitch mode:

| Pitch Mode | Phase | A/T activates in |
|---|---|---|
| VNAV SPD | Climb | **THR REF** – advances toward reference thrust |
| FLCH SPD | Climb | **THR** – advances toward reference thrust |
| TO/GA | Go-around | **THR** – advances toward reference thrust |
| ALT · V/S · FPA · G/S · G/P · VNAV ALT · VNAV PTH | Any | **SPD** |
| AP disconnected, both FDs off | Any | **SPD** |
| VNAV SPD · FLCH SPD | Descent, speed in amber band | **THR** – thrust reaches CLB limit at stick shaker |

**HOLD → THR transition:** If pitch mode is FLCH SPD, VNAV SPD, or VNAV PTH and the A/T is in HOLD mode, speed decreasing into the amber band causes the A/T to transition from HOLD to **THR**. Thrust advances so that CLB limit is reached at stick shaker activation.

**HOLD → THR REF transition (takeoff only):** If pitch mode is TO/GA, A/T is in HOLD, thrust is manually set below the TO reference, and a low-speed condition occurs, the A/T transitions from HOLD to **THR REF** (within 10 kts of stick shaker speed).

### Thrust Lever Operation

Thrust levers can be manually repositioned without disconnecting the A/T. After manual input, the A/T repositions the levers to comply with the active mode – except in **HOLD** mode, where servos are inhibited.

HOLD mode activates in FLCH SPD or VNAV SPD when:
- The pilot overrides the thrust levers
- In a descent, after levers retard to IDLE or reach the target thrust level

### Disconnect

Manual disconnect: push either A/T disconnect switch, or position one or both A/T ARM switches to OFF. Manual disconnect is not possible during conditions that cause automatic activation.

Automatic disconnect occurs:
- Fault detected in the active mode
- Reverse thrust lever raised to reverse idle
- Levers overridden during a manual landing after retard has begun
- Both engines shut down (may occur when one engine shuts down)

EICAS caution **AUTOTHROTTLE DISC** + aural alert on any disconnect. Both are inhibited when the disconnect is caused by reverse thrust.

> [!warning] RA Disagreement
> If an RA disagreement occurs and the **lower** of the two RAs indicates less than 1.500 ft, the autothrottle disconnects and AUTOTHROTTLE DISC shows.
>
> - During takeoff, the autothrottle disconnects at 400 ft if an RA disagreement exists
> - While lower RA < 1.500 ft: re-engagement only possible in **TO/GA** mode (push TO/GA switch)
> - Once lower RA > 1.500 ft: normal re-engagement is available
> - If RADIO ALTIMETER L+R advisory shows: accomplish the RADIO ALTIMETER L+R non-normal checklist

## TO/GA


> [!proc] On the Ground
> TO/GA annunciates when either FD switch is positioned ON (both FDs previously OFF), or when a TO/GA switch is pushed above 80 KIAS. The PFD pitch bar and HUD cue show 8° nose-up. Pitch commands become active only after liftoff.
>
> **Push below 50 kts** (flaps out of up): A/T activates in **THR REF** at the selected thrust limit. If not pushed below 50 kts, the A/T is inhibited until reaching 400 ft.
>
> **Push above 80 kts**: disarms LNAV and VNAV · does not remove thrust derate · Thrust FMA stays **HOLD**.

> [!proc] In Flight – Takeoff Thrust Active
> Push TO/GA while the takeoff thrust limit is still displayed (e.g. during initial climb):
> - Removes climb derates and assumed temperature thrust reduction
> - A/T activates in **THR REF**
> - Disarms AFDS modes
> - **50 – 400 ft RA**: selects TO/GA **roll mode only**
> - **Above 400 ft RA**: selects TO/GA **roll and pitch modes**

> [!proc] Speed Guidance After Liftoff – All Engines
> Target speed = higher of **v<sub>2</sub> + 15 kts** or **v<sub>R</sub> + 15 kts** (airspeed at rotation with pitch > 2°).
> If airspeed remains above target for more than 5 seconds → target resets to the lesser of actual speed or v<sub>2</sub> + 25 kts.
> If the MCP IAS/MACH window is set above the current target → FD follows the new MCP value.
>
> *Note: The AFDS uses the IAS/MACH window speed as V2.*

**Speed Guidance After Liftoff – Engine Failure:**

| Speed | Commanded |
|---|---|
| Below v<sub>2</sub> | v<sub>2</sub> |
| v<sub>2</sub> – v<sub>2</sub> + 15 | Actual speed |
| Above v<sub>2</sub> + 15 | v<sub>2</sub> + 15 |

> [!proc] Go-Around
> Push TO/GA with flaps out of up or glideslope/glidepath captured:
> - A/T activates in **THR** with GA thrust limit displayed – target: **2.000 ft/min** climb rate
> - Disarms AFDS modes; selects TO/GA roll and pitch modes
> - Arms or activates LNAV if an LNAV path is available
> - Initial pitch-up command: **15° or near the PLI**, whichever is less
>
> Commanded speed = higher of MCP IAS/MACH window or current airspeed, to a maximum of IAS/MACH window + 25 kts. Pitch and thrust adjust to maintain the 2.000 fpm climb rate.
>
> LNAV activates at 50 ft RA (FD only) or 200 ft RA (AP engaged).

**Second Push during Go-Around:**

| Condition | Result |
|---|---|
| LNAV armed · TO/GA roll+pitch active | A/T → **THR REF** (GA ref thrust) |
| LNAV active · TO/GA pitch active | A/T → **THR REF** · roll remains LNAV |
| HDG SEL/HOLD active · TO/GA pitch active | A/T → **THR REF** · TO/GA roll mode selected |

<div class="eicas-levels" style="flex-direction:row;gap:0.75rem">

<div class="eicas-card eicas-card--white" style="flex:1">
  <div class="eicas-card-title">Push TO/GA – During Approach</div>
  <div class="eicas-card-body">AFDS commands initial pitch-up<br>FMAs: THR · TO/GA · TO/GA<br>A/T targets 2.000 ft/min) climb<br>Pitch holds current or selected speed<br>LNAV engages automatically if available</div>
</div>

<div class="eicas-card eicas-card--white" style="flex:1">
  <div class="eicas-card-title">Push TO/GA Again – During Missed Approach</div>
  <div class="eicas-card-body">Thrust FMA → THR REF<br>A/T commands G/A thrust limit<br>Pitch holds current or selected speed<br>Engaged roll mode does not change</div>
</div>

</div>

> [!info] Windshear Recovery
> AFDS commands pitch-up to 15° or just below the PLI, whichever is lower. Once climb rate improves, the mode transitions from pitch guidance to airspeed guidance.

> [!info] Termination
> TO/GA ends when another vertical mode is selected (VNAV, FLCH, V/S, FPA) or when the MCP target altitude is captured – AFDS transitions to ALT.

> [!info] After-Touchdown Inhibit
> TO/GA switches are inhibited after touchdown or when below 2 ft RA for 3 or more seconds. Re-enabled above 5 ft RA if the landing is discontinued.

## ILS Signal Interference

The AFDS monitors for ILS signal interference from service vehicles or other aircraft. When interference is detected, the autopilot disregards the ILS signal and holds attitude via inertial data. Most interferences are brief – the only indication is erratic raw ILS data movement. If the condition persists, full mode degradation annunciations apply.

**Glideslope interference:** The AFDS limits descent to **3.25°** while in the attitude stabilizing mode, using inertial data for up to **15 seconds**. This prevents high sink rates during the stabilizing phase.

**Localizer interference:** The AFDS uses inertial data for up to **20 seconds** to allow the signal error to resolve.

### Approach Mode Degradation

Persistent lateral or vertical signal degradation is detected on ILS/GLS approaches (localizer or glideslope) or IAN approaches (error in computed FAC or GP).

**Indications when autopilot is engaged:**
- Amber strikethrough on the affected roll or pitch FMA
- EICAS advisory AUTOPILOT
- FD pitch or roll bar biases out of view
- HUD guidance cue biases out of view

**NO AUTOLAND** additionally shows:
- ILS/GLS above 1.500 ft, or any IAN approach → NO AUTOLAND on FMA
- ILS/GLS between 1.500 and 200 ft → NO AUTOLAND on FMA **and** on the ASA (PFD + HUD)

**Auto-disconnect** occurs when both conditions are met:
- Airplane is above 500 ft AGL
- Crew does not push TO/GA or disconnect within 10 seconds of AUTOPILOT + NO AUTOLAND showing

Low speed and stall protections remain active; the autopilot does not disconnect for underspeed alone. Alerts on auto-disconnect are unchanged: AUTOPILOT DISC · master warning light · wailer.

NO AUTOLAND and ASA NO AUTOLAND clear when the autopilot is disconnected or TO/GA is pushed.

> [!info] NO AUTOLAND does not necessarily indicate an airplane system failure. It can appear when lateral or vertical signal integrity is insufficient for autoland positioning.

## Limitations

> [!limit] Limitations
> <div class="cl-item"><strong>AP – min. engagement altitude after T/O</strong><span class="cl-dots"></span><strong>200 ft AGL</strong></div>
> <div class="cl-item"><strong>Autoland – max. airport elevation</strong><span class="cl-dots"></span><strong>8.400 ft MSL</strong></div>
> <div class="cl-item"><strong>Autoland – wind limits</strong><span class="cl-dots"></span><strong>HW 25 kts · TW 15 kts · CW 25 kts</strong></div>
> <div class="cl-item"><strong>Autoland – glideslope</strong><span class="cl-dots"></span><strong>2.5° – 3.25°</strong></div>
> <div class="cl-item"><strong>Autoland – flaps</strong><span class="cl-dots"></span><strong>20 · 25 · 30 (2-eng and OEI)</strong></div>
> <div class="cl-item"><strong>Autoland – requirement</strong><span class="cl-dots"></span><strong>LAND 2 or LAND 3</strong></div>
> <div class="cl-item"><strong>Without LAND 2 / 3 – disengage</strong><span class="cl-dots"></span><strong>below 135 ft</strong></div>
> <div class="cl-item"><strong>LAND 2 / 3 + GS >3.25° – disengage</strong><span class="cl-dots"></span><strong>below 100 ft</strong></div>
> <div class="cl-item"><strong>GS >3.77° – disengage</strong><span class="cl-dots"></span><strong>≤ 50 ft below DH / MDA</strong></div>
> <div class="cl-item"><strong>FLCH</strong><span class="cl-dots"></span><strong>not below 1.000 ft AFE</strong></div>
> <div class="cl-item"><strong>VNAV – QFE operations</strong><span class="cl-dots"></span><strong>prohibited</strong></div>
> <div class="cl-item"><strong>VNAV – triple FMC failure</strong><span class="cl-dots"></span><strong>not available</strong></div>

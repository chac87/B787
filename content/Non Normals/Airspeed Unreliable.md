---
title: Airspeed Unreliable
tags: [non-normal, warnings]
---

# Airspeed Unreliable

## Scenarios

Three distinct EICAS conditions can trigger an airspeed unreliable situation. Each has a different root cause, a different system response, and a different NNC. → [[Systems/Navigation|Air Data System (ADRS, AOA SPD, ISFD)]]

<div class="eicas-levels">

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title"><a href="/Non-Normals/Non-Normal-Checklists/NAV-AIRSPEED-DATA">[] NAV AIRSPEED DATA</a> <span class="eicas-card-badge">ADVISORY</span></div>
  <div class="eicas-card-body">
    All 3 pitot systems inoperative or invalid → voted airspeed no longer available from ADRS<br>
    AOA SPD displayed <strong>automatically on both PFDs</strong> · Altitude still supplied by ADRS (statics intact)<br>
    Flight controls in Secondary Mode · AFDS not available<br>
    ISFD airspeed may be unreliable — comes from Center Pitot
  </div>
</div>

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title"><a href="/Non-Normals/Non-Normal-Checklists/NAV-AIR-DATA-SYS">[] NAV AIR DATA SYS</a> <span class="eicas-card-badge">CAUTION</span></div>
  <div class="eicas-card-body">
    All 3 static systems inoperative or invalid → voted airspeed and altitude no longer available from ADRS<br>
    AOA SPD and GPS ALT displayed <strong>automatically on both PFDs</strong><br>
    Flight controls in Secondary Mode · AFDS not available<br>
    ISFD airspeed and altitude may be unreliable — comes from Center Pitot and Center Static
  </div>
</div>

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title"><a href="/Non-Normals/Non-Normal-Checklists/AIRSPEED-UNRELIABLE">[] AIRSPEED UNRELIABLE</a> <span class="eicas-card-badge">ADVISORY</span></div>
  <div class="eicas-card-body">
    Voted airspeed conflicts with AOA SPD — system cannot determine which source is correct<br>
    <strong>No automatic display of AOA SPD or GPS ALT</strong><br>
    Pilots must identify the reliable indication · Memory Items required<br>
    May be annunciated by EICAS or recognized and called out by the pilots
  </div>
</div>

</div>

> [!caution] Switching NNCs
> If **NAV AIRSPEED DATA** or **NAV AIR DATA SYS** appears on EICAS while executing the AIRSPEED UNRELIABLE NNC — stop the current checklist immediately and proceed with the NNC for the newly indicated message.

> [!info] Comparing Voted Airspeed vs AOA SPD
> In the AIRSPEED UNRELIABLE scenario, AOA SPD is **not** displayed automatically. To compare both sources simultaneously: one pilot sets their **AIR DATA/ATT selector to ALTN** — that PFD now displays AOA SPD, while the other PFD continues to show voted airspeed from ADRS. Cross-check both against GPS groundspeed, pitch attitude, and ATC radar to identify the reliable indication.

## Memory Items — Pitch and Thrust

Applies to the **AIRSPEED UNRELIABLE** scenario. Set immediately — do not wait for NNC execution.

| Configuration | Pitch Attitude | N1 |
|:---|:---:|:---:|
| **Flaps Extended** | **10°** | **85%** |
| **Flaps Up** | **4°** | **70%** |

- Flaps extended settings result in a **climb**.
- Flaps up settings result in a slight climb (light/low) or slight descent (heavy/high altitude).
- Settings are biased toward higher airspeed — high energy state is preferable.
- Maintain current flap position until pitch/thrust are set and the airplane is stabilized.

> [!info]- Memory Item Rationale
> Calculated to work for all model/engine combinations, at all weights and altitudes.
>
> - Flaps extended: airspeed remains above stick shaker and below the flap placard limit.
> - Flaps up: airspeed remains above stick shaker and below overspeed.
>
> Goal: maintain the airplane safely within the flight envelope — not to achieve a specific climb profile or level flight. Further flap changes require reference to OM-B 4-1-7 Flight With Unreliable Airspeed.

## Recognition

Airspeed unreliable is **initially unannunciated** — do not wait for an EICAS alert. React promptly as soon as the condition is suspected.

**Threats:** AP, A/T, and F/D are all lost → very high workload. **Risk of LOC-I.** Altitude and/or vertical speed indications may also become unreliable.

Familiarize with the normal pitch attitude and thrust for each phase of flight — note them occasionally during normal operations. Any significant body attitude change without a corresponding airspeed change should prompt immediate suspicion.

**Immediate action:** Set memory item pitch and thrust for current configuration. When stabilized → AIRSPEED UNRELIABLE NNC. Alert ATC if unable to maintain assigned altitude.

## Crew Coordination

| Role | Action |
|:---|:---|
| **First to recognize** | Call out: *"Airspeed unreliable"* |
| **PM → ATC** | *"PAN PAN, [Callsign], unable to maintain altitude and airspeed"* |
| **PF briefing** | Brief PM to **manually set TO/GA thrust** in the event of a go-around — A/T is unavailable |

- CAT II/III autoland is no longer possible.

> [!info]- Causes and System Behavior
> Unreliable airspeed can result from a **blocked or frozen pitot/static system** or a **severely damaged/missing radome**.
>
> - If only the ram air inlet is blocked: pressure releases through drain holes — airspeed slowly drops to zero.
> - If both inlet and drain holes are blocked: trapped pressure reacts unpredictably — may increase (thermal expansion), decrease (contraction), or remain constant. This can manifest as increasing IAS in climb, decreasing IAS in descent, or unpredictable IAS in cruise.
>
> An unreliable airspeed may affect the normal pitch control law (which uses indicated airspeed). Air data anomalies cause the FCS to switch to secondary mode. Ground speed from the FMC and ATC radar can serve as a crosscheck.

## Phase Guidance

For extended flight — once the initial situation is stabilized — use the **QRH Performance Inflight tables** for exact pitch attitudes and thrust settings (TPR) for each phase: climb (max climb thrust), cruise, descent (idle thrust), holding, and approach.

→ [[Flight With Unreliable Airspeed]]

### Takeoff — at or after v<sub>1</sub>

- Maintain takeoff thrust
- Smoothly rotate towards 15° → establish normal takeoff pitch attitude
- Retract landing gear, maintain flap configuration
- Climb at normal takeoff pitch attitude to acceleration height → AIRSPEED UNRELIABLE NNC

> [!info] If airspeed becomes unreliable **right after liftoff**: do NOT apply memory items immediately. Rotate to 15°, fly manually, and wait until acceleration height before initiating Memory Items and NNC.

### Descent

- Idle thrust to 10.000 ft — fly body attitude, check rate of descent against OM-B tables
- At 2.000 ft above target altitude: reduce rate of descent to 1.000 FPM
- At level-off: set pitch and thrust for current configuration
- Allow the airplane to stabilize before changing configuration or altitude

### Approach

- ILS or GLS preferred
- Establish landing configuration early on final
- At glide slope intercept or beginning of descent: set thrust and attitude per OM-B tables
- Control rate of descent with thrust

### Landing

- Plan touchdown **1.000–1.500 ft beyond the threshold**
- Fly onto the runway — do not float
- Autobrake if available; maintain brake pressure until stop is assured
- Expedite landing roll after touchdown

### Go-Around / Missed Approach

> [!warning] Do NOT push TO/GA — in any go-around scenario with unreliable airspeed.

<div class="eicas-levels">

<div class="eicas-card eicas-card--white">
  <div class="eicas-card-title">Prior to Approach</div>
  <div class="eicas-card-body">NNC must be complete before approach.<br>Execute go-around using thrust and pitch values from OM-B tables.<br>At safe altitude: set pitch/thrust from OM-B table for current configuration.</div>
</div>

<div class="eicas-card eicas-card--white">
  <div class="eicas-card-title">On Approach</div>
  <div class="eicas-card-body">Disengage AP and disconnect A/T.<br>Manually increase pitch towards 15° → establish normal takeoff pitch attitude.<br>At safe altitude: set pitch/thrust from NNC and accomplish the AIRSPEED UNRELIABLE checklist.</div>
</div>

</div>

## Identification of Reliable Signals / Indications

During an airspeed unreliable event, altitude and vertical speed indications may also become unreliable. Therefore, rely on independent backup systems.

When the AIR DATA/ATT source selector is set to ALTN — or when the system automatically rejects invalid air data — the PFD and HUD provide the following reliable indications:

**AOA SPD** — Backup airspeed calculated from Angle of Attack sensors combined with inertial data. Completely independent of the pitot-static system. Subject to variations during configuration changes, maneuvering, and speedbrake use — avoid abrupt control inputs, high maneuvering loads, and in-flight speedbrake use. When active: **max speed reduced to 300 kt / .85 M** (normal: 360 kt / .90 M). OVERSPEED warnings are adjusted accordingly. Simplified control laws active.

**GPS ALT** — Reliable backup altitude provided automatically from GPS satellite data.

**ISFD** — Independent source of attitude, airspeed, and altitude. Air data comes exclusively from the center pitot and static air data modules; attitude information from internal inertial sensors.

> [!info]- AOA Speed Details
> Simplified control laws are active when AOA SPD is displayed. Because accuracy is limited at high airspeeds, both max speed and OVERSPEED alert thresholds are reduced.
>
> AOA SPD is activated automatically when NAV AIRSPEED DATA or NAV AIR DATA SYS is shown, or when both pilots manually select AIR DATA/ATT to ALTN.
>
> If an air data anomaly occurs at high airspeed: in addition to the AUTOPILOT DISC wailer, an OVERSPEED aural siren may occur until AOA SPD is reduced below the new limit.


---
title: Airspeed Unreliable
tags: [non-normal, warnings]
---

# Airspeed Unreliable

<a href="/Non-Normals/Non-Normal-Checklists/AIRSPEED-UNRELIABLE">→ NNC: AIRSPEED UNRELIABLE</a>

> [!info] After NNC execution: If EICAS shows **NAV AIRDATA SYS** or **NAV AIRSPEED DATA** with GPS ALT or AOA SPD on PFD — follow the respective NNC instead of AIRSPEED UNRELIABLE.

---

## Memory Items — Pitch and Thrust

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

---

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

---

> [!info]- Causes and System Behavior
> Unreliable airspeed can result from a **blocked or frozen pitot/static system** or a **severely damaged/missing radome**.
>
> - If only the ram air inlet is blocked: pressure releases through drain holes — airspeed slowly drops to zero.
> - If both inlet and drain holes are blocked: trapped pressure reacts unpredictably — may increase (thermal expansion), decrease (contraction), or remain constant. This can manifest as increasing IAS in climb, decreasing IAS in descent, or unpredictable IAS in cruise.
>
> An unreliable airspeed may affect the normal pitch control law (which uses indicated airspeed). Air data anomalies cause the FCS to switch to secondary mode. Ground speed from the FMC and ATC radar can serve as a crosscheck.

---

## Phase Guidance

For extended flight — once the initial situation is stabilized — use the **QRH Performance Inflight tables** for exact pitch attitudes and thrust settings (TPR) for each phase: climb (max climb thrust), cruise, descent (idle thrust), holding, and approach.

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

---

## AOA Speed

Angle of Attack Speed (AOA SPD) is a backup airspeed indication based on angle of attack and inertial system inputs — displayed automatically when air data is unreliable. It is subject to variations during configuration changes, maneuvering, and speedbrake use.

- **Avoid:** abrupt control inputs, high maneuvering loads, in-flight speedbrake use.
- When AOA SPD is active: **max speed reduced** to 300 kt / .85 M (normal: 360 kt / .90 M). OVERSPEED warnings are adjusted accordingly.

> [!info]- AOA Speed Details
> Simplified control laws are active when AOA SPD is displayed. Because accuracy is limited at high airspeeds, both max speed and OVERSPEED alert thresholds are reduced.
>
> AOA SPD is activated automatically when NAV AIRSPEED DATA or NAV AIR DATA SYS is shown, or when both pilots manually select AIR DATA/ATT to ALTN.
>
> If an air data anomaly occurs at high airspeed: in addition to the AUTOPILOT DISC wailer, an OVERSPEED aural siren may occur until AOA SPD is reduced below the new limit.

---

## Altitude Unreliable

> [!info] Altitude information transmitted to ATC by the transponder may be unreliable. ATC is **not** an independent source of barometric altitude and cannot be used to verify altitude during an unreliable event. Accomplish the appropriate air data system NNC if an EICAS message is shown.

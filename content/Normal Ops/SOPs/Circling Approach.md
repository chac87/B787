---
title: Circling Approach
tags: [sop, normal-ops]
---

# Circling Approach

<img src="/Bilder/circling.webp" alt="Circling Approach">

## General

The circling approach may be flown following any instrument approach procedure.

<div class="eicas-levels">
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">Circling Minima Cat D</div>
    <div class="eicas-card-body"><strong>700 ft</strong> · <strong>3600 m</strong></div>
  </div>
</div>

**Configuration**

<div class="checklist">
<div class="cl-item"><strong>Landing gear</strong><span class="cl-dots"></span><strong>Down</strong></div>
<div class="cl-item"><strong>Flaps</strong><span class="cl-dots"></span><strong>20</strong></div>
<div class="cl-item"><strong>Speed</strong><span class="cl-dots"></span><strong>Flaps 20 maneuver speed</strong></div>
<div class="cl-item"><strong>Optional</strong><span class="cl-dots"></span><strong>Flaps 25 or 30</strong></div>
</div>

**Descent / Level-off**

| Phase | Use |
|---|---|
| Descent to MDA(H) | **VNAV**, **V/S**, or **FPA** |
| Level at MDA(H) | **ALT HOLD** or **VNAV ALT** |
| Circling maneuver | **HDG SEL/HDG HOLD** or **TRK SEL/TRK HOLD** |
| Before commencing circling | Set missed approach altitude |

> [!warning] APP Mode
> Use of **APP** mode for descent to circling MDA(H) is not recommended.
>
> *Reason: The AFDS does not level off at MCP altitude. Exiting APP mode requires initiating a go-around or disengaging the autopilot and turning off the flight directors.*

**Base / Final**

1. Timing without wind correction.
2. Before starting the turn to base, select landing flaps if not previously selected.
3. Begin decelerating to approach speed plus wind additive.
4. To avoid overshooting final, initially aim at the inside edge of the runway threshold.
5. Do the Landing Checklist.
6. Do not descend below MDA(H) until intercepting the visual descent profile to the landing runway.

> [!proc] Visual Descent
> When intercepting the visual descent profile, disengage the autopilot and continue manually.
>
> After intercepting the visual descent profile, cycle both F/Ds to **OFF**, then select the PM F/D to **ON**. This removes unwanted PF commands while keeping PM go-around guidance available.
>
> *Note: If a go-around is selected with either flight director switch OFF, the flight director pitch command bar on that side disappears when the first pitch mode is selected or engaged.*

## One Engine Inoperative

<div class="eicas-levels">
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">OEI Circling</div>
    <div class="eicas-card-body">
      If circling is anticipated, maintain <strong>gear down</strong>, <strong>flaps 20</strong>, and minimum <strong>V<sub>REF</sub> 20 + wind additive</strong> while circling. Do not descend below MDA(H) until intercepting the visual descent profile.
    </div>
  </div>
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">Landing Flaps 30</div>
    <div class="eicas-card-body">
      Maintain <strong>gear down</strong>, <strong>flaps 20</strong>, and <strong>flaps 20 maneuver speed</strong> from FAF until initiating the turn to base. Before starting the turn to base, select <strong>flaps 30</strong>, reduce to <strong>V<sub>REF</sub> 30 + wind additive</strong>, and intercept the landing profile.
    </div>
  </div>
  <div class="eicas-card eicas-card--amber">
    <div class="eicas-card-title">Limit Thrust</div>
    <div class="eicas-card-body">
      High temperature, high pressure altitude, or high weight may require limit thrust to maintain level flight with gear down and flaps 20. If encountered, consider retracting the landing gear for the circling portion after descent to MDA(H). The GPWS gear override switch may be used to prevent nuisance warnings.
    </div>
  </div>
</div>

## Missed Approach

> [!proc] Circling Missed Approach
> If a missed approach is required at any time while circling, make a climbing turn in the shortest direction toward the landing runway.
>
> Continue the turn until established on an intercept heading to the missed approach course corresponding to the instrument approach procedure just flown.
>
> Maintain missed approach flap setting until close-in maneuvering is completed.

> [!info] Obstacle Clearance
> Different patterns may be required depending on aircraft position when the missed approach is started. This keeps the aircraft within circling and missed approach obstruction clearance areas.
>
> If a missed approach must be accomplished from below MDA(H), choose a flight path that assures safe obstacle clearance until reaching an appropriate altitude on the specified missed approach path.

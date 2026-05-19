---
title: Low Visibility Operations
tags: [sop, supplementary, lvo]
---

# Low Visibility Operations

## Definition, Categories & Prerequisites

> [!info] Low Visibility Operations
> LVO applies at an RVR of **less than 550 m** for landings and **less than 400 m** for takeoffs. **Low Visibility Procedures (LVP)** must be officially in force at the aerodrome — they may already be active above these thresholds.
>
> If LVO is not announced on ATIS or confirmed by other means, request: **"REQUEST CATEGORY II / III APPROACH"**

| Category                                | Decision Height | RVR     | Required Autoland Status |
| :-------------------------------------- | :-------------- | :------ | :----------------------- |
| **CAT I**                               | ≥ 200 ft        | ≥ 550 m (1.800 ft) | Manual or automatic      |
| **CAT II**                              | 100 ft          | 300 m (1.000 ft)   | LAND 2 or LAND 3         |
| **CAT IIIA** (fail-passive)             | 50 ft           | 175 m (600 ft)     | LAND 2 or LAND 3         |
| **CAT IIIB with DH** (fail-operational) | 23 ft           | 125 m (400 ft)     | LAND 2 or LAND 3         |
| **CAT IIIB no DH** (fail-operational)   | no DH           | 75 m (300 ft)      | **LAND 3**               |

> [!warning] CAT II — Manual Landing Not Approved
> CAT II manual landing is **not** approved. A CAT II approach may only be conducted using the autopilot (LAND 2 or LAND 3 required).

> [!info] IAN Approaches
> For approaches using IAN deviations (non-ILS/GLS), only manual or automatic approach with manual landing is available — no autoland below CAT I minima.

## Autoland Status & Limitations

<div class="eicas-levels">

<div class="eicas-card eicas-card--white">
  <div class="eicas-card-title">LAND 3 <span class="eicas-card-badge">FAIL-OPERATIONAL</span></div>
  <div class="eicas-card-body">If a failure occurs below Alert Height, the remaining system completes approach, flare and landing · Upon further failure: system reverts to fail-passive</div>
</div>

<div class="eicas-card eicas-card--white">
  <div class="eicas-card-title">LAND 2 <span class="eicas-card-badge">FAIL-PASSIVE</span></div>
  <div class="eicas-card-body">Upon failure: no significant out-of-trim condition or flight path deviation · autoland no longer available · upon further failure: pilot assumes manual control</div>
</div>

</div>

**Wind limits for autoland:** Headwind max. 25 kts · Tailwind max. 15 kts · Crosswind max. 25 kts · Glideslope 2.5°–3.25°

**Configuration:** Flaps 20, 25 or 30 · single or both engines operative · AFDS must annunciate LAND 2 or LAND 3

> [!limit] Autopilot Limitations
> - The autopilot must not be engaged below **200 ft AGL** after takeoff.
> - Autoland capability may only be used for operations into runways at or below **8.400 ft** airport field elevation.
> - Without LAND 2 or LAND 3 annunciated: the autopilot must be disengaged below **135 ft AGL**.
> - With LAND 2 or LAND 3 annunciated and glideslope angles greater than 3.25°: the autopilot must be disengaged below **100 ft AGL**.
> - If the glidepath angle is greater than 3.77°: the autopilot must be disengaged no later than **50 ft below DH/MDA**.
> - Do not use **FLCH** on final approach below **1.000 ft AFE**.


## Low Visibility Takeoff (LVTO)

<div class="eicas-levels">

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title">RVR 200–400 m</div>
  <div class="eicas-card-body">LVP must be in force at the aerodrome</div>
</div>

<div class="eicas-card eicas-card--red">
  <div class="eicas-card-title">RVR &lt; 200 m <span class="eicas-card-badge">ADDITIONAL RESTRICTIONS</span></div>
  <div class="eicas-card-body">CM1 performs take-off · Max. CWC 10 kts · Runway must not be contaminated · 90 m visual segment from cockpit required at start of takeoff run</div>
</div>

<div class="eicas-card eicas-card--red">
  <div class="eicas-card-title">Absolute Minimum <span class="eicas-card-badge">RVR 125 m (400 ft)</span></div>
  <div class="eicas-card-body">No takeoff below RVR 125 m · LVTO below landing minima may require a Takeoff Alternate · Centerline lights (spacing 15 m) · Edge lights (spacing 60 m)</div>
</div>

</div>


## Alert Height – Below 200 ft RA

> [!warning] Autopilot below 200 ft RA
> Do not disengage the autopilot as long as it is controlling the aircraft adequately. Below Alert Height, multiple autopilots protect against any probable system failure and will safely land the aircraft. Guard the controls and be prepared to take over manually only if pilot action is clearly required.
>
> If a fault affects the **autobrakes**, assume manual control of braking. Accomplish related fault procedures only after rollout is complete and manual control is resumed.
>
> If a **go-around is initiated with the autopilot disengaged**, the flight directors remain in approach mode until TO/GA is engaged.


| Category | Required Visual Reference at DH |
|:---|:---|
| **CAT I** | At least 3 centerline lights/barrettes of the ALS and either one crossbar of the ALS or the threshold lights of the landing runway |
| **CAT II** | At least 3 consecutive lights + a lateral element of the ground pattern |
| **CAT IIIA** (fail-passive · LAND 2) | Centerline of the approach lights or TDZ lights or RWY centerline lights or RWY edge lights or a combination |
| **CAT IIIB with DH** (fail-operational · LAND 3) | At least 1 centreline light |
| **CAT IIIB no DH** | No visual contact required |

## Task Sharing – CAT II/III Approach

> [!info] Note
> Only deviations from amplified procedures are listed. Some items are mentioned in addition for clarification reasons and to illustrate the task sharing flow.

### CAT II/III with DH

<table class="data-table">
<thead>
<tr><th>Event</th><th>PF</th><th>PM</th></tr>
</thead>
<tbody>
<tr><td>Prior Approach</td><td colspan="2">Set DH for planned approach</td></tr>
<tr><td>Between 1.500 ft and 1.000 ft RA, when LAND 2 or LAND 3 is displayed</td><td>"ROLLOUT FLARE ARMED"</td><td></td></tr>
<tr><td>Passing 1.000 ft RA – auto callout "ONE THOUSAND"</td><td>"CHECKED"</td><td>"CHECKED"</td></tr>
<tr><td>At 500 ft RA – verify Autoland status as required for planned approach</td><td>"CHECKED"</td><td>"LAND 2" or "LAND 3"</td></tr>
<tr><td rowspan="2">100 ft above DH</td><td colspan="2">Observe auto callout "APPROACHING MINIMUMS"</td></tr>
<tr><td>Go head-up and concentrate on expected visual cues</td><td>Stay head-down and monitor automatic approach by instrument scan</td></tr>
<tr><td>At DH</td><td colspan="2">Observe auto callout "MINIMUMS"</td></tr>
<tr><td>If external visual references are sufficient</td><td>"CONTINUE" – Monitor approach and landing by visual cues</td><td>Stay head-down</td></tr>
<tr><td>If external visual references are not sufficient</td><td>"GO AROUND" – Initiate a Go Around</td><td>Monitor go around flight parameters on instruments</td></tr>
<tr><td>Between 60 ft and 40 ft RA</td><td></td><td>Monitor FLARE engagement</td></tr>
<tr><td>At approximately 5 ft RA</td><td></td><td>Monitor ROLLOUT engagement</td></tr>
<tr><td>After touchdown</td><td colspan="2">Follow normal landing procedures</td></tr>
<tr><td>End of rollout</td><td>AP OFF</td><td></td></tr>
</tbody>
</table>

### CAT III without DH

<table class="data-table">
<thead>
<tr><th>Event</th><th>PF</th><th>PM</th></tr>
</thead>
<tbody>
<tr><td>Prior Approach</td><td colspan="2">Check that no DH is set</td></tr>
<tr><td>Between 1.500 ft and 1.000 ft RA, when LAND 3 is displayed</td><td>"ROLLOUT FLARE ARMED"</td><td></td></tr>
<tr><td>Passing 1.000 ft RA – auto callout "ONE THOUSAND"</td><td>"CHECKED"</td><td>"CHECKED"</td></tr>
<tr><td>At 500 ft RA – verify Autoland status as required for planned approach</td><td>"CHECKED"</td><td>"LAND 3"</td></tr>
<tr><td>200 ft RA</td><td>"CONTINUE"</td><td>"ALERT HEIGHT"</td></tr>
<tr><td>100 ft RA</td><td>Go head-up and commence outside scanning</td><td>Stay head-down and monitor automatic approach by instrument scan</td></tr>
<tr><td>Between 60 ft and 40 ft RA</td><td></td><td>Monitor FLARE engagement</td></tr>
<tr><td>At approximately 5 ft RA</td><td></td><td>Monitor ROLLOUT engagement</td></tr>
<tr><td>After touchdown</td><td colspan="2">Follow normal landing procedures</td></tr>
<tr><td>End of rollout</td><td>AP OFF</td><td></td></tr>
</tbody>
</table>

## Procedures after Failures / Warnings

> [!info] AFDS Fault — Decision Logic Above Alert Height
> Immediately after recognizing a fault, **check the autoland status annunciation**:
> - If the annunciation is **unchanged** and the affected equipment is not required for the approach → continue the approach
> - If the annunciation has **changed**, or the affected equipment is required → adjust to appropriate higher minimums or go-around. If suitable visual reference is established, consider landing.

<table class="data-table data-table--compact">
<thead>
<tr>
  <th rowspan="2" style="min-width: 10.5rem">Alert</th>
  <th colspan="2">During Approach</th>
  <th colspan="2" class="data-table__col-sep">After Autoland</th>
</tr>
<tr>
  <th style="text-align: center">Above 200 ft AGL</th>
  <th><span class="c-red">Below 200 ft AGL</span><br><small>Alert Height</small></th>
  <th class="data-table__col-sep">During Rollout</th>
  <th>During Go-Around</th>
</tr>
</thead>
<tbody>
<tr class="data-table__section-row"><td colspan="5" class="data-table__section-title"><span class="c-amber">Master Caution Light, EICAS Caution</span></td></tr>
<tr><td><span class="c-amber">AUTOTHROTTLE DISC</span></td><td>Manual thrust, if LAND 2 sufficient</td><td>Go-Around (*)</td><td class="data-table__empty data-table__col-sep">N/A</td><td>Manual thrust</td></tr>
<tr><td><span class="c-amber">SPEEDBRAKE EXTENDED</span></td><td>Retract speedbrakes</td><td>Go-Around (**)</td><td class="data-table__empty data-table__col-sep">N/A</td><td>Retract speedbrakes</td></tr>
<tr><td><span class="c-amber">AUTOPILOT</span></td><td>Go-Around</td><td>Go-Around (**)</td><td class="data-table__col-sep">Disconnect AP &amp; Manual rollout</td><td>Disconnect AP &amp; Manual go-around</td></tr>
<tr><td><span class="c-amber">NO AUTOLAND</span></td><td>Go-Around</td><td>N/A (message inhibited)</td><td class="data-table__empty data-table__col-sep">N/A</td><td class="data-table__empty">N/A</td></tr>
<tr><td><span class="c-amber">NO LAND 3</span></td><td>Continue, if LAND 2 sufficient</td><td>N/A (message inhibited)</td><td class="data-table__empty data-table__col-sep">N/A</td><td class="data-table__empty">N/A</td></tr>
<tr><td><span class="c-amber">ENG FAIL L, R<br>ENG THRUST L, R</span></td><td>Continue Approach</td><td>Continue Approach (master caution light &amp; aural inhibited)</td><td class="data-table__col-sep">Continue Rollout</td><td>Continue Go-around</td></tr>
<tr><td><span class="c-amber">ENG REV AIR/GND<br>ENG REV COMMANDED L, R</span></td><td>Do not command reverse thrust</td><td>Do not command reverse thrust</td><td class="data-table__empty data-table__col-sep">N/A</td><td>Do not command reverse thrust</td></tr>
<tr><td><span class="c-amber">All other EICAS cautions</span></td><td>Check EICAS</td><td>Continue Approach</td><td class="data-table__col-sep">Check EICAS</td><td>Check EICAS</td></tr>
<tr class="data-table__section-row"><td colspan="5" class="data-table__section-title"><span class="c-red">Master Warning Light, EICAS Warning</span></td></tr>
<tr><td><span class="c-red">AUTOPILOT DISC</span></td><td>Manual Go-Around</td><td>Manual Go-Around (**)</td><td class="data-table__col-sep">Manual rollout</td><td>Manual Go-Around</td></tr>
<tr><td><span class="c-red">All other EICAS warnings</span></td><td>Check EICAS</td><td>Continue Approach</td><td class="data-table__col-sep">Check EICAS</td><td>Check EICAS</td></tr>
<tr class="data-table__section-row"><td colspan="5" class="data-table__section-title">Deviation Alerts</td></tr>
<tr><td><span class="c-amber">ILS Deviation Alert</span></td><td>Go-Around</td><td>Go-Around (**)</td><td class="data-table__empty data-table__col-sep">N/A</td><td class="data-table__empty">N/A</td></tr>
<tr><td><span class="c-amber">GLS Deviation Alert</span></td><td>Go-Around</td><td>Go-Around (**)</td><td class="data-table__empty data-table__col-sep">N/A</td><td class="data-table__empty">N/A</td></tr>
</tbody>
</table>

> [!info] Footnotes
> **(\*)** Continuation with manual thrust control is only allowed if the RVR is 200 m or more.
>
> **(\*\*)** A manual landing is only allowed if the RVR is 550 m or more, the runway is clearly identified and the manual landing has previously been briefed.

## After Landing

> [!info] Contaminated Runway — Manual Rollout
> If a manual rollout is required due to a contaminated runway, a minimum RVR of **200 m** applies for all RVR measurement points along the required runway length (this maneuver has not been demonstrated at lower visibility). The landing category (e.g. DUAL) is maintained. Automatic landings on contaminated runways are possible within certain limits.

> [!info] Runway Vacated
> The runway is not considered vacated until the aircraft has completely exited the colour-coded lights. Only then report "Runway vacated" to ATC.

> [!info] Go-Around During LVO
> Every go-around during LVO must be reported via the ACARS Flightlog (enter "LVO"). If the go-around was caused by an aerodrome-related reason, an additional Flight Report must be filed.

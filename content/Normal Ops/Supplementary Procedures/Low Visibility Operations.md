---
title: Low Visibility Operations
tags: [sop, supplementary, lvo]
---

# Low Visibility Operations

## Indications & Limitations

<img src="/Bilder/autoflight.webp" alt="Autoflight — Autoland Status">

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

<table class="data-table">
<thead>
<tr><th colspan="2">Limitations for Autoland</th></tr>
</thead>
<tbody>
<tr><td>Flaps</td><td>20, 25, or 30</td></tr>
<tr><td>Engines</td><td>All Engines or One Engine Inoperative</td></tr>
<tr><td>Max. Elevation</td><td>8.400 ft</td></tr>
<tr><td>Glide Slope</td><td>2.5° – 3.25°</td></tr>
<tr><td>Overweight</td><td>Autoland not recommended</td></tr>
<tr><td>Wind Limits</td><td>CWC &nbsp; 25 kts<br>HWC &nbsp; 25 kts<br>TWC &nbsp; 15 kts</td></tr>
</tbody>
</table>

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
  <div class="eicas-card-title">RVR &lt; 400 m</div>
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


### T/O Alternate

<table class="data-table">
<thead>
<tr><th colspan="2">Conditions requiring a T/O Alternate</th></tr>
</thead>
<tbody>
<tr><td>Wind</td><td>CWC > 25 kts and visibility &lt; 550 m, or HWC > 25 kts</td></tr>
<tr><td>Weight</td><td>> MLAW</td></tr>
<tr><td>Max. Distance</td><td>2 hrs. flight time for ETOPS certified aircraft and crew</td></tr>
</tbody>
</table>


## LVO Approach Minima

| Category                                | DH       | RVR                | ASA                                                                                |
| :-------------------------------------- | :------- | :----------------- | :--------------------------------------------------------------------------------- |
| **CAT I**                               | ≥ 200 ft | ≥ 550 m (1.800 ft) | **<span class="c-amber">NO AUTOLAND</span>**                                       |
| **CAT II**                              | 100 ft   | 300 m (1.000 ft)   | **<span class="c-green">LAND 2</span>** or **<span class="c-green">LAND 3</span>** |
| **CAT IIIA** (fail-passive)             | 50 ft    | 175 m (600 ft)     | **<span class="c-green">LAND 2</span>** or **<span class="c-green">LAND 3</span>** |
| **CAT IIIB with DH** (fail-operational) | 23 ft    | 125 m (400 ft)     | **<span class="c-green">LAND 3</span>**                                            |
| **CAT IIIB no DH** (fail-operational)   | no DH    | 75 m (300 ft)      | **<span class="c-green">LAND 3</span>**                                            |

> [!warning] CAT II — Manual Landing Not Approved
> CAT II manual landing is **not** approved. A CAT II approach may only be conducted using the autopilot (LAND 2 or LAND 3 required).

> [!info] Contaminated Runway
> Minimum RVR **200 m** at all measurement points along the required field length. Manual rollout.

<table class="data-table">
<thead>
<tr>
  <th>Height / Phase</th>
  <th>TDZ RVR</th>
  <th>Midpoint RVR(s)</th>
  <th>Stopend RVR</th>
</tr>
</thead>
<tbody>
<tr class="data-table__section-row"><td colspan="4" class="data-table__section-title">&gt; 1.000 ft RA — Approach may be commenced regardless of reported RVR / visibility</td></tr>
<tr>
  <td>@ 1.000 ft</td>
  <td>acc. IAC</td>
  <td>75 m (or 125 m without rollout guidance/control)</td>
  <td>75 m (if &gt; 60 kts)</td>
</tr>
<tr>
  <td>&lt; 1.000 ft</td>
  <td>75 m</td>
  <td>75 m (or 125 m without rollout guidance/control)</td>
  <td>75 m (if &gt; 60 kts)</td>
</tr>
<tr class="data-table__section-row"><td colspan="4" class="data-table__section-title">@ DH — Approach may be continued if necessary visual reference is established and can be maintained</td></tr>
</tbody>
</table>


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

> [!info] Memory Aid
> Go-Around if EICAS shows <span class="c-amber">**NO**</span> or <span class="c-amber">**AUTO**</span>.

> [!info] AFDS Fault — Decision Logic Above Alert Height
> Immediately after recognizing a fault, **check the autoland status annunciation**:
> - If the annunciation is **unchanged** and the affected equipment is not required for the approach → continue the approach
> - If the annunciation has **changed**, or the affected equipment is required → adjust to appropriate higher minimums or go-around. If suitable visual reference is established, consider landing.

<table class="data-table data-table--split">
<thead>
<tr><th colspan="2" style="text-align:center;font-size:0.95rem;">Above 200 ft RA — During Approach</th></tr>
<tr><th>CONTINUE</th><th>GO-AROUND</th></tr>
</thead>
<tbody>
<tr>
  <td>
    <span class="c-amber">Other EICAS CAUTIONS</span> — check EICAS<br>
    <span class="c-red">Other EICAS WARNINGS</span> — check EICAS<br>
    <span class="c-amber">SPEEDBRAKE EXTENDED</span> — retract speedbrakes<br>
    <span class="c-amber">ENG FAIL / ENG THRUST</span><br>
    <span class="c-amber">ENG REV AIR/GND</span> — do not command reverse<br>
    <span class="c-amber">ENG REV COMMANDED L, R</span> — do not command reverse<br>
    <span class="c-amber">AUTOTHROTTLE DISC</span> — manual thrust, if LAND 2 sufficient (*)<br>
    <span class="c-amber">NO LAND 3</span> — continue if LAND 2 sufficient
  </td>
  <td>
    **<span class="c-amber">NO AUTOLAND</span>**<br>
    <span class="c-amber">AUTOPILOT</span><br>
    <span class="c-red">AUTOPILOT DISC</span><br>
    <span class="c-amber">ILS Deviation Alert</span><br>
    <span class="c-amber">GLS Deviation Alert</span>
  </td>
</tr>
</tbody>
</table>

<table class="data-table data-table--split">
<thead>
<tr><th colspan="2" style="text-align:center;font-size:0.95rem;">Below 200 ft RA — Alert Height</th></tr>
<tr><th>CONTINUE</th><th>GO-AROUND</th></tr>
</thead>
<tbody>
<tr>
  <td>
    <span class="c-amber">ENG FAIL / ENG THRUST</span> (MC &amp; aural inhibited)<br>
    <span class="c-amber">ENG REV AIR/GND</span> — do not command reverse<br>
    <span class="c-amber">ENG REV COMMANDED L, R</span> — do not command reverse<br>
    <span class="c-amber">Other EICAS CAUTIONS</span><br>
    <span class="c-red">Other EICAS WARNINGS</span><br>
    <small><em>NO AUTOLAND / NO LAND 3 messages are inhibited below Alert Height</em></small>
  </td>
  <td>
    Most go-around initiations are inhibited. Exceptions:<br><br>
    <span class="c-amber">SPEEDBRAKE EXTENDED</span> — land, if visual conditions (**)<br>
    <span class="c-amber">AUTOTHROTTLE DISC</span> — G/A if RVR &lt; 200 m (*)<br>
    <span class="c-amber">AUTOPILOT</span> (**)<br>
    <span class="c-red">AUTOPILOT DISC</span> — manual go-around (**)<br>
    <span class="c-amber">ILS Deviation Alert</span> (**)<br>
    <span class="c-amber">GLS Deviation Alert</span> (**)
  </td>
</tr>
</tbody>
</table>

> [!info] Footnotes
> **(\*)** Continuation with manual thrust control is only allowed if the RVR is 200 m or more.
>
> **(\*\*)** A manual landing is only allowed if the RVR is 550 m or more, the runway is clearly identified and the manual landing has previously been briefed.

---
title: Go Around – Missed Approach
tags: [sop, go-around, normal-ops, captain, first-officer]
section: 2-1-14
role: Both
---

# Go Around – Missed Approach

<div class="table-50-50">

| PF | PM |
|:---|:---|
| Push the TO/GA switch.<br><span class="sop-tag-items">PF: "GO AROUND"</span> | |
| Verify that the thrust increases.<br><span class="cl-warning">TO/GA function is inhibited close to the ground and after touchdown. If the thrust levers do not respond when TO/GA is pushed, or if the go-around is initiated after touchdown, advance the thrust levers manually to go-around thrust.</span> | |

</div>

<div class="table-50-50">
<table><tbody>
<tr><td><span class="sop-tag-items">PF: "FLAPS 20"</span> or <span class="sop-tag-items">PF: "FLAPS ___"</span><br>as needed.</td><td>Set the flap lever as directed.<br><span class="sop-tag-items">PM: "FLAPS ___"</span></td></tr>
<tr><td>Verify the rotation to go-around attitude.</td><td></td></tr>
<tr><td></td><td>Verify that the thrust is sufficient for the go-around or adjust as needed.<br><span class="sop-tag-items">PM: "Thrust Set"</span></td></tr>
<tr><td></td><td>Verify a positive rate of climb on the altimeter.<br><span class="sop-tag-items">PM: "POSITIVE RATE"</span></td></tr>
<tr><td>Verify a positive rate of climb on the altimeter.<br><span class="sop-tag-items">PF: "GEAR UP"</span></td><td></td></tr>
<tr><td></td><td>Set the landing gear lever to UP.<br><span class="sop-tag-items">PM: "GEAR UP"</span></td></tr>
<tr><td>Callout FMA.</td><td></td></tr>
<tr><td>Above 400 feet radio altitude, verify or select a roll mode.</td><td>Verify that the missed approach altitude is set.</td></tr>
<tr><td>Verify that the missed approach route is tracked.</td><td></td></tr>
<tr><td>At acceleration height, set speed to the maneuver speed for the planned flap setting.</td><td></td></tr>
<tr><td><span class="sop-tag-items">PF: "FLAPS ___"</span><br>according to the flap retraction schedule.</td><td>Set the flap lever as directed.<br><span class="sop-tag-items">PM: "FLAPS ___"</span></td></tr>
<tr><td>After flaps are set to the planned flap setting and at or above the flap maneuvering speed, select FLCH or VNAV as needed.</td><td></td></tr>
<tr><td>Verify that climb thrust is set.</td><td></td></tr>
<tr><td>Verify that the missed approach altitude is captured.</td><td></td></tr>
</tbody></table>
</div>

<div class="sop-entry-tags">
<span class="sop-tag-cl">PF → PM: "AFTER TAKEOFF CL"</span>
</div>

---

## AFTER TAKEOFF CHECKLIST

| Item | Response | Who |
|:---|:---|:---:|
| <span class="c-green">**Landing gear**</span> | <span class="c-green">UP</span> | PM |
| <span class="c-green">**Flaps**</span> | <span class="c-green">UP</span> | PM |

<div class="sop-entry-tags">
<span class="sop-tag-cl">PM: "After Takeoff Checklist complete."</span>
</div>

<h2 class="h2-no-collapse">Note</h2>

After the After Takeoff Checklist: Check thrust reference mode on EICAS.

---

## TO/GA Switch

> [!info]- Availability
> The TO/GA switch is available when:
> - Flaps are out of UP, **or**
> - Glide slope (GS) or glide path (GP) is captured
>
> The switch is **inhibited** after touchdown or if below 2 ft radio altitude for 3 seconds or more.
> Above 5 ft radio altitude, the switch is re-enabled.

> [!info]- First Push – Commands
> - The roll and pitch modes change to **TO/GA** to provide flight director guidance for the go-around
> - The autothrottle activates in **THR** (Thrust) mode, adjusting engine power to maintain a fixed climb rate of 2.000 feet per minute
> - If an LNAV path is available, LNAV automatically arms or engages

> [!info]- Second Push – Commands
> - The autothrottle mode changes to **THR REF** (Thrust Reference)
> - The system now commands the full maximum go-around thrust

> [!info]- Autopilot Recommendation
> It is generally recommended to fly an **automatic go-around** with the autopilot engaged.
> If the autopilot was disconnected prior to the go-around, re-engage it as soon as the flight path is under control.

## Go-Around above 1500 ft RA

> [!info]- APP Button Deselect — Alternative to TOGA
> Above **1500 ft radio altitude**, pushing **APP** releases both localizer and glideslope.
> Depending on airline configuration, the autopilot reverts to **ATT** (attitude stabilized) or **HDG HOLD + V/S**.
>
> From here, select the modes required to comply with the ATC clearance, accelerate as needed, and reconfigure the aircraft (gear up, flaps as appropriate for speed).
>
> This avoids the full TOGA sequence and keeps the crew in direct control of the climb profile.

> [!info]- Exiting TOGA Mode at Positive Rate
> Once a positive rate of climb is established, TOGA mode can be exited.
> Example: go-around instructed at 1300 ft with a 2000 ft level-off — select **V/S** at positive rate to control the climb and avoid capturing 2000 ft at high rate (TCAS RA risk).

## High Flare / Bounced Landing / Balked Landing

If a go-around is initiated from a high flare, after a bounce, or as a balked landing, the following rules apply:

> [!caution]- Rules at Speed Below v<sub>REF</sub>
> - **Kein Config-Change** mit Speed < v<sub>REF</sub>
> - Pitch darf mit Speed < v<sub>REF</sub> initial **nicht > 8° sein**
> - **Aufsetzen im G/A ist wahrscheinlich** und darf keine Hemmschwelle sein
> - Ziel ist **kontrollierte Pitch bis Speed wieder > v<sub>REF</sub>** und clear of Ground

## Rejected Landing vs. Balked Landing

A **Rejected Landing** is initiated before touchdown (e.g. runway incursion, ATC instruction). A **Balked Landing** is initiated after touchdown has occurred (e.g. after a bounce).

> [!info]- Rejected Landing
> Use the standard FCOM Go-Around procedure.
> TO/GA is available if conditions are met (see above).

> [!proc]- Balked Landing
> **PF** Disengage autopilot.
>
> **PF** Disconnect Autothrottle.
>
> **PF** Maintain landing configuration.
>
> **PF** Manually advance thrust.
>
> **PF** Control pitch below v<sub>REF</sub> to < 8°.
>
> **PF** Rotate at or above v<sub>REF</sub> to 15° of pitch.
>
> *When airborne with positive rate of climb:*
>
> **PF** Use FCOM go-around procedure.

---
title: RNP AR Approach
tags: [sop, supplementary, rnp, navigation]
---

# RNP AR Approach

## RNP vs. RNP AR

<table class="data-table">
<thead>
<tr><th></th><th>RNP</th><th>RNP AR</th></tr>
</thead>
<tbody>
<tr><td>RNP Value 0.3</td><td>✓</td><td>✓</td></tr>
<tr><td>RNP Value &lt; 0.3</td><td></td><td>✓</td></tr>
<tr><td>Straight segment between FAP and RWY</td><td>✓</td><td>✓</td></tr>
<tr><td>Curve between FAP and RWY</td><td></td><td>✓</td></tr>
<tr><td>Minima down to 250 ft</td><td>✓</td><td>✓</td></tr>
<tr><td>Departure and/or Missed Approach RNP &lt; 1</td><td></td><td>✓</td></tr>
</tbody>
</table>

> [!info] Approved Guidance Mode — B787
> Only one guidance mode is approved for RNP AR on the Boeing 787: **LNAV – VNAV PTH**

## Navigation Performance & Obstacle Clearance

<img src="/Bilder/rnp%20ar.webp" alt="RNP AR obstacle clearance zones">

**Lateral obstacle clearance:** 2 × RNP to either side of the centerline · Maximum deviation: **1 RNP** or NPS turns amber (= Scale and ANP bar)

**Vertical obstacle clearance (ROC/MOC):** ~1.000 ft initial · ~500 ft intermediate · Final: function of VEB · Maximum deviation: **75 ft** (= Scale and ANP bar amber after 5 sec)

> [!info] PFD Indications when ANP ≥ RNP
> - ANP bars meet in the middle
> - After 5 seconds: NPS (Scale and ANP bar) turns amber
> - Lateral scale only: **NAV UNABLE RNP** displayed on EICAS
>
> Lateral ANP depends on the position updating source. Vertical ANP depends on air data accuracy.

> [!info] Vertical Error Budget (VEB)
> Covers flight technical error of 75 ft (if not demonstrated), 20 ft QNH error, and temperature effects within the procedure's defined temperature range.
>
> The aircraft verifies **125 ft** for vertical RNP — the NPS amber alert triggers at or slightly less than **75 ft deviation**. During RNP AR: **no temperature correction** by the flight crew.

## Pre-Approach Requirements

<div class="checklist">

<div class="cl-item"><strong>Required equipment</strong><span class="cl-dots"></span><strong>CHECK OPERATIONAL</strong></div>

<div class="cl-item"><strong>RNP PROGRESS page 4</strong><span class="cl-dots"></span><strong>CHECK / MODIFY</strong></div>
<div class="cl-sub">Verify the RNP value of the upcoming approach — modify as required</div>

<div class="cl-item"><strong>Wind and temperature</strong><span class="cl-dots"></span><strong>WITHIN PROCEDURE LIMITS</strong></div>

<div class="cl-item"><strong>QNH</strong><span class="cl-dots"></span><strong>LOCAL — REMOTE STATION PROHIBITED</strong></div>
<div class="cl-sub">RNP AR approaches are based on barometric reference — use of QNH from a remote station is prohibited</div>

</div>

> [!warning] EICAS Alerts — Verify Not Shown
> The following alerts must **not** be displayed prior to commencing the approach:
>
> <span class="c-amber">**FMC VERIFY POSITION · GND PROX SYS · NAV AIR DATA SYS · NAV INERTIAL SYS · NAV IRU · NAV SINGLE GPS · SINGLE SOURCE F/D · NAV UNABLE RNP · SGL SOURCE RAD ALT · SINGLE FMC · TERR POS**</span>
>
> Go-around/missed approach is required if <span class="c-amber">**NAV UNABLE RNP**</span> or <span class="c-amber">**FMC VERIFY POSITION**</span> is displayed unless suitable visual reference is established and maintained.

## During Descent

<div class="checklist">

<div class="cl-item"><strong>Go-Around strategy</strong><span class="cl-dots"></span><strong>REVIEW</strong></div>
<div class="cl-sub">Including "Management of RNP AR capability"</div>

<div class="cl-item"><strong>VOR/DME NAV</strong><span class="cl-dots"></span><strong>OFF</strong></div>

<div class="cl-item"><strong>Aircraft RNP value</strong><span class="cl-dots"></span><strong>VERIFY COMPLIANT</strong></div>
<div class="cl-sub">Must be compliant with the selected procedure</div>

</div>

## Approach Procedure

<div class="checklist">

<div class="cl-item"><strong>TERR</strong><span class="cl-dots"></span><strong>SELECT ON MAP</strong></div>

<div class="cl-item"><strong>2 NM before Descent Point</strong><span class="cl-dots"></span><strong>PM CALLOUT</strong></div>
<div class="cl-sub">PM calls out "Approaching Glide Path" — PF accomplishes required actions</div>

<div class="cl-item"><strong>Navigation Performance</strong><span class="cl-dots"></span><strong>MONITOR</strong></div>
<div class="cl-sub">Maximum deviation: Lateral 1 RNP or NPS amber · Vertical 75 ft</div>

</div>

## Go-Around Criteria

> [!warning] Go-Around — Deviation Exceedance
> Initiate a Go-Around when exceeding:
> - **Lateral:** 1 RNP or NPS turns amber (= Scale and ANP bar)
> - **Vertical:** 75 ft (= Scale and ANP bar amber after 5 sec)

> [!warning] Go-Around — No Visual Reference
> If no visual reference is available when any of the following are displayed:
> - <span class="c-amber">**NAV UNABLE RNP**</span>
> - <span class="c-amber">**FMC VERIFY POSITION**</span>
> - <span class="c-amber">**GPS**</span>

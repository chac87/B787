---
title: NAT HLA
tags: [operational, nat, navigation]
---

# NAT HLA

## Overview

<table class="data-table">
<tbody>
<tr>
  <td><strong>NAT HLA</strong></td>
  <td>FL285 – FL420 · 30°W · 60°N – 70°N<br>Two independent LRNSs required: INS · GNSS · or IRS-based system<br>GNSS as stand-alone: integrity check required<br>Special routes: one LRNS sufficient</td>
</tr>
<tr>
  <td><strong>RNAV 10</strong></td>
  <td>En-route navigation in oceanic/remote areas with limited nav aids and radar coverage<br>Lateral and longitudinal spacing: <strong>50 NM</strong><br>2 LRNS · 2 LRCS<br>Radar surveillance not required</td>
</tr>
<tr>
  <td><strong>RNP 4</strong></td>
  <td>Classified en-route navigation in oceanic/remote areas<br>Lateral and longitudinal spacing: <strong>30 NM</strong><br>2 LRNS · 2 LRCS · ADS · CPDLC · TCAS · On-board nav performance monitoring and alerting<br>Radar surveillance not required</td>
</tr>
<tr>
  <td><strong>PBCS Tracks</strong></td>
  <td><strong>Separation:</strong> 23 NM lateral (½° spacing) · 5 min longitudinal (vs. 10 min standard) · FL 340–400 · Not in New York OCA<br><strong>Waypoints:</strong> Anchored on whole or half degrees of latitude (or combination)<br><strong>Comms:</strong> RCL via ACARS Datalink · Reclearances via CPDLC · Voice = backup<br><strong>Requirements:</strong> RNP 4 · ADS-C · CPDLC</td>
</tr>
<tr>
  <td><strong>RVSM</strong></td>
  <td>1000 ft vertical separation (vs. 2000 ft standard) · FL290 – FL410<br>Equipment: 2 independent ADC altimeters · 1 SSR transponder · altitude alert system · AP · match XPDR to active AP (AP1 → XPDR1)<br>Pre-entry: all equipment operative · failed equipment → inform ATC · request new clearance<br>In-flight: AP for FL maintenance · overshoot/undershoot &lt;150 ft · max 1000 fpm in last 1000 ft · crosscheck after every level change · hourly crosscheck (min. 2 within ±200 ft)<br>Inform ATC: equipment failure · altimeters &gt;200 ft apart · unable to hold FL · when faulty equipment is resumed</td>
</tr>
</tbody>
</table>

## Requirements

### Entry

| | Requirement |
|:---|:---|
| **NAV** | Dual LRNS · Dual FMCS · RNP 10 (PBCS tracks: RNP 4) |
| **RVSM** | Dual altimeters · Transponder · Autopilot (±65 ft) · "W" in flight plan |
| **COM** | FANS 1/A CPDLC (NAT DLM) · 2× HF or 1× HF + SATVOICE · RCP 240 |
| **SURV** | ADS-C · ADS-B · RSP 180 |

### Before OEP – 1-Minute Check

<div class="checklist">

<div class="cl-item"><strong>Datalink</strong><span class="cl-dots"></span><strong>ACTIVE</strong></div>
<div class="cl-sub">CPDLC connected to oceanic center (e.g. EGGX / CZQX) · ADS-C contract established · STAT display: no faults</div>

<div class="cl-item"><strong>RNP / ANP</strong><span class="cl-dots"></span><strong>VERIFY</strong></div>
<div class="cl-sub">POS REF: RNP ≤ 4.0 · ANP < RNP</div>

<div class="cl-item"><strong>Altimeters</strong><span class="cl-dots"></span><strong>CROSSCHECK</strong></div>
<div class="cl-sub">Capt / F/O / Standby: deviation < 200 ft</div>

<div class="cl-item"><strong>Autopilot</strong><span class="cl-dots"></span><strong>ENGAGED</strong></div>
<div class="cl-sub">Altitude hold active</div>

</div>

### In-Flight – EICAS

<table class="data-table">
<thead>
<tr><th>EICAS</th><th>Meaning</th><th>Action</th></tr>
</thead>
<tbody>
<tr><td><span class="c-amber">DATALINK SYS</span> / disconnects</td><td>CPDLC / ADS-C lost</td><td>Voice fallback: 2× HF or 1× HF + SATVOICE</td></tr>
<tr><td><span class="c-amber">NAV UNABLE RNP</span></td><td>ANP > RNP – GPS failure or spoofing</td><td>Exit PBCS tracks · inform ATC</td></tr>
<tr><td><span class="c-amber">GPS L/R</span></td><td>GPS redundancy reduced</td><td>May revert to RNP 10 after time delay · inform ATC</td></tr>
<tr><td><span class="c-amber">ALT DISAGREE</span></td><td>&gt;200 ft altimeter deviation</td><td>RVSM lost · inform ATC · leave altitude band</td></tr>
<tr><td><span class="c-amber">AUTOPILOT</span></td><td>AP lost</td><td>RVSM capability lost · manual flight not approved in RVSM airspace</td></tr>
</tbody>
</table>

## Manually Entered Lat/Lon Waypoints

| Coordinate | Enter as | Displays as |
|:---|:---|:---|
| N47° W008° | N47W008 | N47W008 |
| N47° 15.4' W008° 3.4' | N4715.4W00803.4 | N47W008 |

## NAT Contingencies

<img src="/Bilder/nat%20contingencies.webp" alt="NAT Contingencies">

## Communication

### Oceanic Clearance – Voice

> [!info] RCL – Voice Example
> *"Gander Oceanic, Lufthansa 400, request Oceanic Clearance. Estimating MALOT at 1430z. Requesting M.84, FL 360, max. FL 380"*

### Failure

In the event of communication failure in NAT airspace:

<div class="checklist">

<div class="cl-item"><strong>Flight plan</strong><span class="cl-dots"></span><strong>FLY AS FILED</strong></div>
<div class="cl-sub">Maintain assigned track and cleared altitude</div>

<div class="cl-item"><strong>Speed</strong><span class="cl-dots"></span><strong>KEEP ASSIGNED MACH</strong></div>
<div class="cl-sub">No unilateral Mach change without ATC contact</div>

<div class="cl-item"><strong>Altitude</strong><span class="cl-dots"></span><strong>KEEP CLEARED ALTITUDE</strong></div>
<div class="cl-sub">No altitude change without ATC clearance – except emergency</div>

</div>

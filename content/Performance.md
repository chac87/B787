---
title: Performance
---

# Performance

| | **GEnx** | **RR Trent 1000** |
| :--- | :--- | :--- |
| Registration | D-ABPA – D-ABPE | D-ABPF and on |
| Fan Diameter | ~2,80 m | ~2,80 m |
| Bypass Ratio | 9,6 : 1 | 10 : 1 |
| Architecture | **Twin**-spool | **Three**-spool |
| Primary engine indications | **N1**, EGT, N2 | **TPR**, N1, EGT |

→ [[Flight With Unreliable Airspeed]] — QRH pitch and thrust tables for all flight phases

## Taxi for Aircraft with ICAO Code E

- Taxiways are generally shown in grey
- Restrictions are marked with a **brown overlay** if TWY:
  - Width < 22 m
  - Load bearing capacity < 120 t
  - Only available for wingspan of 50 m or less
  - Not available for ACFT with WTC "HEAVY"
  - Not available for ICAO Code Letter E (wingspan 52 m or more)

> [!warning] Caution
> **Do not use brown TWYs with 787.** There may be exceptions acc. AOI.
>
> AMM does not show brown TWYs.
>
> "Grey" does not automatically allow usage of TWY. (e.g. "N-SOUTH" in FRA — Wingspan MAX 52 m)

## Thrust Asymmetry Protection

- Protection against asymmetric thrust during takeoff and go-around
- Reduces thrust on operating engine without moving thrustlever
- Active if speed drops below approx. v<sub>2</sub> or v<sub>REF</sub>
- No negative effect on certified takeoff performance

<img src="/Bilder/tap%20indications.webp" alt="TAP Indications" style="max-width:40%;border-radius:6px;display:block;">

## Takeoff Distance

<img src="/Bilder/to%20distance.webp" alt="Takeoff Distance" style="width:100%;border-radius:6px;display:block;">

## V1 Range

<img src="/Bilder/v1%20range.webp" alt="V1 Range" style="width:100%;border-radius:6px;display:block;">

## vMCG Limitations

<img src="/Bilder/vmcg.webp" alt="vMCG" style="max-width:45%;border-radius:6px;display:block;margin-bottom:0.75rem;">

- Deviation from centerline max. 30 ft
- No X-Wind considered
- v<sub>MCG</sub> depending on several factors: Aircraft Weight, CG, OAT, Pressure Altitude, Bleed Setting
- Critical situations:
  - TOGA Thrust at Takeoff
  - Low v<sub>1</sub>
  - Remarkable difference between v<sub>1</sub> and v<sub>R</sub>
    - → Use high v<sub>1</sub> in case of X-Wind
    - → Use Optimum Power for takeoff

## Takeoff — Engine Out Performance

<img src="/Bilder/to%20phases.webp" alt="Takeoff Phases — Engine Out" style="width:100%;border-radius:6px;display:block;margin-bottom:0.75rem;">

<div class="eo-block">
<table class="eo-segment-table">
  <thead>
    <tr>
      <th>1. Segment</th>
      <th>2. Segment</th>
      <th>3. Segment</th>
      <th>Final Segment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="seg-ep">Until Gear Up</span></td>
      <td><span class="seg-ep">Until Acc. Alt<br>[min. 400 ft]<br>[LH: 1.500 ft]</span></td>
      <td><span class="seg-ep">Until Slats/Flaps retracted</span></td>
      <td><span class="seg-ep">Until End of Takeoff<br>Flight Path (1.500 ft)</span></td>
    </tr>
    <tr>
      <td><strong>TOGA / Derate / ATM</strong><br>V2</td>
      <td><strong>TOGA / Derate / ATM</strong><br>V2</td>
      <td><strong>TOGA / Derate / ATM</strong></td>
      <td><strong>MCT</strong><br>Final CLB Speed</td>
    </tr>
    <tr>
      <td>min positive climb</td>
      <td>min 2,4% climb</td>
      <td>Acceleration +1,2% climb</td>
      <td>min 1,2% climb</td>
    </tr>
  </tbody>
</table>
<div class="eo-notes">
  <span>Gross gradient min. 2,4%</span>
  <span>Gross − Net gradient = 0,8%</span>
  <span>Obstacle clearance min. 35 ft</span>
</div>
</div>

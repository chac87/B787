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

<div class="eo-block">
<table class="eo-segment-table">
  <thead>
    <tr>
      <th>Final Segment</th>
      <th>3. Segment</th>
      <th>2. Segment</th>
      <th>1. Segment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="seg-ep">Until End of Takeoff<br>Flight Path (1.500 ft)</span></td>
      <td><span class="seg-ep">Until Slats/Flaps retracted</span></td>
      <td><span class="seg-ep">Until Acc. Alt<br>[min. 400 ft]<br>[LH: 1.500 ft]</span></td>
      <td><span class="seg-ep">Until Gear Up</span></td>
    </tr>
    <tr>
      <td><strong>MCT</strong><br>Final CLB Speed</td>
      <td><strong>TOGA / Derate / ATM</strong></td>
      <td><strong>TOGA / Derate / ATM</strong><br>V2</td>
      <td><strong>TOGA / Derate / ATM</strong><br>V2</td>
    </tr>
    <tr>
      <td>min 1,2% climb (2-ENG)<br>min 1,7% climb (4-ENG)</td>
      <td>Acceleration +1,2% climb (2-ENG)<br>Acceleration +1,7% climb (4-ENG)</td>
      <td>min 2,4% climb (2-ENG)<br>min 3,0% climb (4-ENG)</td>
      <td>min positive climb (2-ENG)<br>min 0,5% (4-ENG)</td>
    </tr>
  </tbody>
</table>
<svg class="eo-profile-svg" viewBox="0 0 860 240" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="eo-arr-start" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M6,0 L0,3 L6,6" fill="none" stroke="#555" stroke-width="1.2"/>
    </marker>
    <marker id="eo-arr-end" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6" fill="none" stroke="#555" stroke-width="1.2"/>
    </marker>
  </defs>

  <!-- Gold flight path band -->
  <polygon points="860,215 645,179 430,117 215,117 0,55 0,30 215,93 430,93 645,157 860,197"
           fill="#C49A00" opacity="0.85" class="eo-band"/>

  <!-- Ground line -->
  <line x1="0" y1="215" x2="860" y2="215" stroke="#888" stroke-width="1.5" class="eo-ground"/>

  <!-- Segment dividers -->
  <line x1="215" y1="20" x2="215" y2="215" stroke="#888" stroke-width="1" stroke-dasharray="4,4" class="eo-divider"/>
  <line x1="430" y1="20" x2="430" y2="215" stroke="#888" stroke-width="1" stroke-dasharray="4,4" class="eo-divider"/>
  <line x1="645" y1="20" x2="645" y2="215" stroke="#888" stroke-width="1" stroke-dasharray="4,4" class="eo-divider"/>

  <!-- Gross Gradient label -->
  <text x="430" y="16" text-anchor="middle" font-size="10" font-weight="600" fill="#555" class="eo-text-main">Gross Gradient min 2,4% (2-ENG) · min 3,0% (4-ENG)</text>

  <!-- Net Gradient arrow + label (centered in 2nd segment, showing band height = 0.8%/1.0% deduction) -->
  <line x1="370" y1="93" x2="370" y2="117"
        stroke="#555" stroke-width="1.2"
        marker-start="url(#eo-arr-start)" marker-end="url(#eo-arr-end)" class="eo-arrow"/>
  <text x="380" y="101" font-size="9" fill="#555" class="eo-text-sub">Net Gradient</text>
  <text x="380" y="113" font-size="9" fill="#555" class="eo-text-sub">−0,8% (2-ENG) / −1,0% (4-ENG)</text>

  <!-- 35 ft annotation -->
  <line x1="855" y1="197" x2="855" y2="215" stroke="#888" stroke-width="1" stroke-dasharray="3,3" class="eo-divider"/>
  <text x="848" y="210" font-size="9" text-anchor="middle" fill="#555" class="eo-text-sub">35 ft</text>

  <!-- Segment labels below ground -->
  <text x="108" y="229" text-anchor="middle" font-size="10" fill="#777" class="eo-text-sub">Final Segment</text>
  <text x="323" y="229" text-anchor="middle" font-size="10" fill="#777" class="eo-text-sub">3. Segment</text>
  <text x="538" y="229" text-anchor="middle" font-size="10" fill="#777" class="eo-text-sub">2. Segment</text>
  <text x="753" y="229" text-anchor="middle" font-size="10" fill="#777" class="eo-text-sub">1. Segment</text>

  <!-- 35 ft / 15 ft wet note below ground -->
  <text x="645" y="239" text-anchor="middle" font-size="8.5" fill="#999" class="eo-text-sub">35 ft / 15 ft wet or contaminated</text>
</svg>
</div>

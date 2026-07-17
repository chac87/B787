---
title: Non Precision Approaches General
tags: [sop, normal-ops]
---

# Non Precision Approaches General

## Definition

**Non-ILS approaches** include:

- RNAV / GPS approaches
- RNAV visual approaches
- VOR / NDB / TACAN approaches
- LOC, LOC-BC, LDA, SDF, IGS or similar approaches
- Any approach not flown using conventional ILS/GLS guidance

They are normally flown using **IAN**, **VNAV**, **V/S**, or **FPA** pitch modes.

## Approach Categories

<img src="/Bilder/pbn.webp" alt="PBN Approach Categories">

<div class="eicas-levels">
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">2D Approach – LNAV Minimum (V/S or FPA)</div>
    <div class="eicas-card-body">Stepdown altitudes restricting · Obstacle clearance ensured by crossing altitude at specified fixes · No vertical deviation limit</div>
  </div>
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">2D Approach – LNAV Minimum (VNAV or IAN)</div>
    <div class="eicas-card-body">Vertical deviation restricting: −75 ft · Stepdown altitudes also restricting · Obstacle clearance ensured by crossing altitude at specified fixes</div>
  </div>
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">3D Approach – LNAV/VNAV Minimum</div>
    <div class="eicas-card-body">Must be flown in VNAV guidance (down to temperature limit) · Vertical deviation restricting: −75 ft · Stepdown altitudes not restricting · Obstacle clearance ensured by maximum vertical deviation to flight path</div>
  </div>
</div>

Both approach types have linear geometry. The DIST/ALT table is never restricting.

<img src="/Bilder/obstacle%20clr.webp" alt="Obstacle Clearance – 2D vs. 3D Approaches">

## Operating Principles

> [!info] Core Concept
> The preferred Boeing concept is a **CDFA - Continuous Descent Final Approach**, avoiding level-off at MDA whenever possible.

<div class="eicas-levels">
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">QNH</div>
    <div class="eicas-card-body">Always pre-select.<br>Always confirm with METAR / ATIS.<br><strong>NPA:</strong> Confirm with Tower.</div>
  </div>
</div>

**Flight Path Tolerances**

<div class="media-split">
  <img src="/Bilder/Flight%20Path%20Tolerances.webp" alt="Flight Path Tolerances">
  <div class="eicas-levels">
    <div class="eicas-card eicas-card--red">
      <div class="eicas-card-title">FPA / V/S</div>
      <div class="eicas-card-body"><strong>Never fly below</strong> stepdown fixes along the vertical path.</div>
    </div>
    <div class="eicas-card eicas-card--white">
      <div class="eicas-card-title">VNAV PTH / IAN</div>
      <div class="eicas-card-body">May fly below stepdown fixes along the vertical path.</div>
    </div>
  </div>
</div>

Non-ILS approaches should be flown with:

- Maximum use of the FMC navigation database
- No manual waypoint changes between FAF and MAP
- Raw data monitoring as required
- Strict FMA monitoring
- Stabilized approach criteria applied

The autopilot should normally remain engaged until **suitable visual reference** is established.

| Guidance Concept | Typical Modes | Notes |
|---|---|---|
| IAN | FAC / G/P<br>LOC / G/P<br>B/CRS / G/P | ILS-like display and alerting for suitable non-ILS approaches |
| VNAV | LNAV / VNAV PTH | FMC-calculated vertical path |
| Selected guidance | HDG SEL, TRK SEL, V/S, FPA | Use when required by approach type, raw data, or procedure |

> [!warning] On approach with RNP alerting requirement
> <a href="/Non-Normals/Non-Normal-Checklists/NAV-UNABLE-RNP" style="color:#f39c12 !important"><strong>NAV UNABLE RNP</strong></a> → start a Go-Around unless suitable visual references can be established and maintained.

## IAN

**IAN** provides ILS-like procedures, indications and alerting for suitable non-ILS approaches. It uses the **APP** switch and normally replaces LNAV/VNAV for suitable approaches because procedures are standardized.

IAN does **not** support autoland.

> [!warning] Barometric G/P
> IAN G/P is barometric. Above-ISA temperatures can place the IAN path above PAPI/VASI; following the visual glide slope below the IAN path may trigger a **GLIDESLOPE** alert.

**Guidance:**

| Approach | FMA |
|---|---|
| LOC / LDA / SDF / ILS G/S out | **LOC / G/P** |
| LOC-BC | **B/CRS / G/P** |
| RNAV / GPS / VOR / NDB / TACAN | **FAC / G/P** |

**Requirements / Restrictions:**

- QFE operation not authorized
- Appropriate RNP must be used
- The approach must be selected from the FMC database
- Waypoints from FAF onward must not be modified, except permitted cold-temperature corrections up to and including MAP
- For FMC-based approaches, the LEGS page must contain an appropriate vertical path / GP angle
- IAN is recommended mainly for straight-in approaches
- For non-straight-in or RNAV (RNP) AR approaches, prefer LNAV/VNAV
- If IAN is nevertheless used there, select APP only after LNAV is engaged and the aircraft is on path
- Raw data monitoring is recommended when available
- IAN deviation scales are RNP-based and do not become more sensitive like ILS

**MCP Altitude Handling:**

> [!proc] MCP Altitude
> Set missed approach altitude after G/P capture.
>
> *Reason: Once **G/P** is captured, the aircraft is established on the final descent path. MCP altitude can then be set for the missed approach without interfering with the final descent.*

**Minimums / AP Disconnect at DA(H), MDA(H), or MAP:**

- Published VNAV DA(H), or authorized MDA(H) used as DA(H), may be used where approved

- If suitable visual reference is established:
  - Disengage autopilot (latest at 135 ft AGL)
  - Continue visually
  - Maintain glidepath to landing
- If not:
  - Execute immediate go-around

## VNAV

A VNAV non-ILS approach uses an FMC-calculated vertical path and is flown in **VNAV PTH**. Maximum use of the navigation database is recommended.

The required vertical path should:

- Approximate **3 degrees**
- Cross the runway threshold at approximately **50 ft**
- Be defined on the FMC LEGS page
- Normally be based on a coded **GP angle**

The VNAV glidepath must be shown on the final approach segment of the LEGS page.

**Database Path Construction:**

| Case | Use |
|---|---|
| GP angle on final approach segment | Fully compatible with VNAV and final step-down altitudes |
| RWxx / MXxx / named MAP waypoint | Normally usable when it provides approx. 50 ft threshold crossing |

If the RWxx altitude does not correspond to approx. 50 ft, it may be modified to approx. 50 ft. Threshold crossing altitude normally requires four digits, e.g. **0080** for 80 ft.

Manually constructed or modified final paths require raw-data monitoring and compliance with each step-down fix. Use of DA(H) is not recommended for a manually constructed final approach.

For cold-temperature corrections, VNAV PTH operates normally but follows the higher of the published GP-angle path or the geometric path defined by waypoint constraints.

**Recommended Roll Modes:**

| Approach Type | Recommended Roll Mode |
|---|---|
| RNAV / GPS | **LNAV** |
| B/CRS / VOR / NDB | **LNAV, TRK SEL, or HDG SEL** |
| LOC / SDF / LDA / ILS G/S out / IGS G/S out | **LNAV or LOC** |

For localizer-based approaches, the localizer must be tuned and identified and the LOC pointer displayed before using LOC guidance.

During a VNAV non-ILS approach with speed intervention, pitch mode remains **VNAV PTH** and the vertical path is maintained regardless of IAS/MACH selector changes. Speed intervention is recommended; adding speed constraints is normally unnecessary.

> [!info] Altitude Intervention
> Use altitude intervention only if **VNAV ALT** occurs above path and descent must continue.
>
> In **VNAV PTH** or **VNAV SPD**, altitude intervention does not delete approach waypoint altitude constraints.
>
> In **VNAV ALT**, it may delete down-path constraints within 150 ft of current altitude.

**MCP Altitude Handling:**

Before FAF - approximately **2 NM before FAF**:

> [!proc] Before FAF
> Set DA(H) or MDA(H) in the MCP altitude window.
>
> *This prevents premature descent below the FAF altitude and allows VNAV to capture/follow the final path correctly.*

> [!proc] On Final Approach
> Set missed approach altitude only when at least 300 ft below missed approach altitude.
>
> *Reason: Avoids unwanted **VNAV ALT**, avoids altitude capture interrupting the final descent, and keeps the aircraft on **VNAV PTH** until decision.*

**Minimums / AP Disconnect at DA(H), MDA(H), or MAP:**

- Published VNAV DA(H), or authorized MDA(H) used as DA(H), may be used where approved
- If suitable visual reference is not maintained at or after DA(H)/MDA(H), execute immediate go-around

## IAN vs. VNAV

| Item | IAN | VNAV Non-ILS |
|---|---|---|
| Primary selection | APP switch | VNAV |
| Pitch FMA | **G/P** | **VNAV PTH** |
| Lateral FMA | **FAC**, **LOC**, or **B/CRS** | Usually **LNAV** or **LOC** |
| Missed approach altitude | Set after **G/P** capture | Set when at least **300 ft below** missed approach altitude |
| Best suited for | Straight-in suitable non-ILS approaches | FMC-coded vertical path approaches, especially RNAV-style procedures |

> [!info] Mode Selection
> **Straight-in + valid GP + IAN available** -> use **IAN**.
>
> **RNP AR / RF legs / complex geometry / short final / IAN unsuitable** -> use **LNAV/VNAV**.
>
> **No valid vertical path or VNAV/IAN not suitable** -> use **V/S** or **FPA CDFA**.

**Summary:**

| Item | Using IAN | Using VNAV | Using FPA/V/S |
|---|---|---|---|
| Set DA/MDA | Not required | approx. 2 NM before FAF | approx. 2 NM before FAF |
| Set missed app alt | After glidepath capture | 300 ft below missed app alt | Between missed app alt - 300 ft and DA/MDA + 300 ft |
| AP usage | Until MUH (135 ft AGL) | Until MUH (135 ft AGL) | Until DA/MDA |
| FD usage | Until T/D | Until T/D | Until DA/MDA |

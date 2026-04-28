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

## Operating Principles

> [!info] Core Concept
> The preferred Boeing concept is a **CDFA - Continuous Descent Final Approach**, avoiding level-off at MDA whenever possible.

Non-ILS approaches should be flown with:

- Maximum use of the FMC navigation database
- No manual waypoint changes between FAF and MAP
- Raw data monitoring as required
- Strict FMA monitoring
- Stabilized approach criteria applied

Use of the **autopilot** is preferred because it provides:

- Autopilot alerts
- Mode fail indications
- More accurate course and glidepath tracking
- Lower RNP limits
- Reduced workload

The autopilot should normally remain engaged until **suitable visual reference** is established.

| Guidance Concept | Typical Modes | Notes |
|---|---|---|
| IAN | FAC / G/P<br>LOC / G/P<br>B/CRS / G/P | ILS-like display and alerting for suitable non-ILS approaches |
| VNAV | LNAV / VNAV PTH | FMC-calculated vertical path |
| Selected guidance | HDG SEL, TRK SEL, V/S, FPA | Use when required by approach type, raw data, or procedure |

> [!warning] Autopilot Limits
> The autopilot must be disengaged before descending more than **50 ft below MDA**, unless coupled to an ILS glideslope/localizer or in go-around mode.
>
> Without LAND 2 or LAND 3, autopilot must be disengaged below **200 ft AGL**.

## IAN

**IAN** provides ILS-like procedures, indications and alerting for suitable non-ILS approaches. It uses the **APP** switch and displays approach guidance similar to ILS.

IAN does **not** support autoland.

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
- Waypoints from FAF to MAP must not be modified, except permitted cold-temperature corrections
- For FMC-based approaches, the LEGS page must contain an appropriate vertical path / GP angle
- IAN is recommended mainly for straight-in approaches
- RNAV (RNP) AR is normally better flown using LNAV/VNAV, not IAN

**Procedure Flow:**

<ol class="descent-flow">
  <li style="--i:1">Select approach in FMC</li>
  <li style="--i:2">Verify final approach course and GP angle</li>
  <li style="--i:3">Tune/identify raw data as required</li>
  <li style="--i:4">Intercept heading established</li>
  <li style="--i:5">Deviation pointers displayed</li>
  <li style="--i:6">APP select</li>
  <li style="--i:7">LOC/FAC capture</li>
  <li style="--i:8">G/P alive</li>
  <li style="--i:9">Configure</li>
  <li style="--i:10">G/P capture</li>
  <li style="--i:11">Set missed approach altitude</li>
  <li style="--i:12">Landing checklist</li>
  <li style="--i:13">FAF altitude crosscheck</li>
  <li style="--i:14">DA/MDA/MAP: land or go-around</li>
</ol>

**MCP Altitude Handling:**

> [!proc] MCP Altitude
> Set missed approach altitude after G/P capture.
>
> *Reason: Once **G/P** is captured, the aircraft is established on the final descent path. MCP altitude can then be set for the missed approach without interfering with the final descent.*

**Minimums / AP Disconnect at DA(H), MDA(H), or MAP:**

- If suitable visual reference is established:
  - Disengage autopilot
  - Continue visually
  - Maintain glidepath to landing
- If not:
  - Execute immediate go-around

## VNAV

A VNAV non-ILS approach uses an FMC-calculated vertical path and is flown in **VNAV PTH**.

The required vertical path should:

- Approximate **3 degrees**
- Cross the runway threshold at approximately **50 ft**
- Be defined on the FMC LEGS page
- Normally be based on a coded **GP angle**

The VNAV glidepath must be shown on the final approach segment of the LEGS page.

**Recommended Roll Modes:**

| Approach Type | Recommended Roll Mode |
|---|---|
| RNAV / GPS | **LNAV** |
| B/CRS / VOR / NDB | **LNAV, TRK SEL, or HDG SEL** |
| LOC / SDF / LDA / ILS G/S out / IGS G/S out | **LNAV or LOC** |

For localizer-based approaches, the localizer must be tuned and identified and the LOC pointer displayed before using LOC guidance.

During a VNAV non-ILS approach with speed intervention, pitch mode remains **VNAV PTH** and the vertical path is maintained regardless of IAS/MACH selector changes.

**Procedure Flow:**

<ol class="descent-flow">
  <li style="--i:1">Select FMC approach</li>
  <li style="--i:2">Verify VNAV glidepath on LEGS page</li>
  <li style="--i:3">Tune/identify navaids as required</li>
  <li style="--i:4">Arm LNAV or LOC as appropriate</li>
  <li style="--i:5">Intercept final approach course</li>
  <li style="--i:6">Verify LNAV engaged or LOC captured</li>
  <li style="--i:7">~2 NM before FAF:
    <ul>
      <li>Verify AP engaged</li>
      <li>Set DA(H) or MDA(H) on MCP</li>
      <li>Select/verify VNAV</li>
      <li>Select/verify speed intervention</li>
    </ul>
  </li>
  <li style="--i:8">Approaching glidepath:
    <ul>
      <li>Gear down</li>
      <li>Flaps 20</li>
      <li>Speedbrake armed</li>
    </ul>
  </li>
  <li style="--i:9">Final descent:
    <ul>
      <li>Select landing flaps</li>
      <li>Landing checklist</li>
    </ul>
  </li>
  <li style="--i:10">When >=300 ft below missed approach altitude:
    <ul>
      <li>Set missed approach altitude</li>
    </ul>
  </li>
  <li style="--i:11">DA/MDA/MAP:
    <ul>
      <li>Land or go-around</li>
    </ul>
  </li>
</ol>

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

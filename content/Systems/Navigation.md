# Navigation

## Overview

| System | Count | Tuning | Primary Output |
|:---|:---:|:---:|:---|
| GPS | 2 (L/R) | Automatic | Position → IRS → FMC |
| IRS (IRU + AHRU) | 2 IRU + 2 AHRU | — | Airspeed, Attitude, Heading, Position |
| ADRS | 1 (L/C/R Pitot) | — | Altitude + Airspeed for all systems |
| VOR | 2 | FMC / manual | Position updates, ND bearing |
| DME | 2 | FMC / manual | Distance, FMC position updates |
| ILS | 2 | FMC / manual | LOC + GS Deviation |
| ADF | 2 | Manual (CDU) | Bearing on ND/PFD |
| Transponder | 2 | ATP / TCP | Mode S, ADS-B, TCAS |
| Weather Radar | 1 | TCP | ND (MAP) + Mini-Map up to 320 NM |

<a class="img-lightbox img-lightbox--full" href="#airspeed-indication-lightbox">
  <img class="img-thumb" src="/Bilder/airspeed%20indication.webp" alt="Airspeed Indication — PFD source labels">
</a>
<div id="airspeed-indication-lightbox" class="img-lightbox-overlay">
  <a href="#">
    <img src="/Bilder/airspeed%20indication.webp" alt="Airspeed Indication — PFD source labels">
  </a>
</div>

## GPS

The L/R GPS receivers operate **independently** — position is passed to the IRS, which forms a hybrid GPS/inertial solution for the FMC.

- IRS failure: GPS provides position and track **directly** to the FMC (no EICAS advisory)
- Use GPS for **all approaches** when the FMC database is referenced to **WGS-84**
- Inhibit via GPS NAV prompt on POS REF page 3/4

| EICAS | Level | Condition |
|:---|:---:|:---|
| GPS | Advisory | Both GPS systems have failed |

## ADRS — Air Data Reference System

ADRS provides **altitude and airspeed** to all aircraft systems. It receives air data from the left, center, and right pitot and static systems and computes **trusted voted air data**, which is sent to the PFDs. Because both PFDs receive data from the same voted source, altitude and airspeed indications on both PFDs are always identical. ADRS is completely independent of the IRS.

When voted ADRS air data is invalid and the AIR DATA/ATT switch is in the AUTO position, backup airspeed (AOA SPD) and backup altitude (GPS ALT) are automatically provided by the IRS and GPS systems respectively.

### AIR DATA/ATT Source Selector

**AUTO** — Normal position:

- ADRS provides air data to the PFD and HUD
- Backup airspeed (AOA SPD), based on angle of attack and inertial data, is automatically provided when required
- Backup altitude (GPS ALT), based on GPS data, is automatically provided when required
- IRS provides attitude data to the PFD
- Backup attitude from ISFD sources is automatically provided when required

**ALTN** — Non-normal position:

- Backup airspeed and altitude (AOA SPD / GPS ALT) are displayed on the on-side PFD
- ISFD attitude is displayed on the on-side PFD

### Fallback Hierarchy

| Priority | Source | Airspeed | Altitude |
|:---:|:---|:---:|:---:|
| 1 | ADRS (voted) | Normal | Normal |
| 2 | IRS + GPS (Backup) | AOA SPD | GPS ALT |
| 3 | ISFD (Center Pitot) | ISFD SPD | ISFD ALT |

### ISFD — Integrated Standby Flight Display

ISFD receives data exclusively from the **center pitot static system**. Its altitude, attitude, and airspeed indications are completely independent of both IRU and AHRU values. When both voted ADRS data and backup air data (AOA SPD / GPS ALT) are unavailable, ISFD altitude (**ISFD ALT**) and ISFD airspeed (**ISFD SPD**) are automatically displayed on the PFDs.

## IRS — Inertial Reference System

Computes airspeed, attitude, heading, and position — for displays, FMS, fly-by-wire, and engine controls.

**Components:**

| Unit | Count | Function |
|:---|:---:|:---|
| IRU (Inertial Reference Unit) | 2 | Hybrid GPS/Inertial position + navigation |
| AHRU (Attitude & Heading Reference Unit) | 2 | Attitude, heading, rate — no independent position solution |

### IRU Alignment

- Power-Up → Align Mode → EICAS memo **IRU ALIGN MODE L+R**
- Duration: **7 – 10 min** (mid-latitudes) · up to **17 min** (high latitudes)
- Aircraft must not be moved until alignment is complete
- GPS available → **no manual position entry required**; GPS unavailable → enter position manually (POS INIT)
- During layover: Automatic Realign Mode (realignment continues until aircraft is moved)
- In-flight realignment possible: attitude restored within seconds, full navigation in **≈ 10 min** (GPS required)

> [!info] Recommendation
> Position update recommended when in Navigation Mode for more than **18 hours**

### IRU Power

- Initial power-up: Battery Bus + IRS switches ON
- Battery switch OFF → Hot Battery Bus continues to power the IRS
- **ON BAT** light illuminates + horn in gear well → maintenance warning

### IRS Failure — EICAS

| EICAS | Level | Condition | Consequence |
|:---|:---:|:---|:---|
| NAV IRU | Advisory | Both IRUs have failed | FMC continues to use AHRUs + GPS |
| <span class="c-amber">NAV INERTIAL SYS</span> | <span class="c-amber">Caution</span> | Both IRUs **and** AHRUs have failed | GPS (INRs) takes over — LNAV/VNAV unavailable |

**Inoperative after IRS failure (NAV INERTIAL SYS):**

| Category | Inoperative |
|:---|:---|
| AFDS Modes | FPA, G/S, HDG HOLD/SEL\*, LNAV, LOC, TO/GA, TRK HOLD/SEL, VNAV |
| Navigation | FMC Performance Predictions, FMC VNAV pages, ND Wind Arrow |
| PFD | PFD Heading\* |
| Other | Autobrake |

\* *Operative if Standby Compass Heading is entered on POS INIT.*

**Additionally inoperative after IRS + GPS failure:**
CDU active leg, Direct-to, DIVERT NOW, Nav Radio Autotuning, ND Map (center + expanded)

## Radio Navigation

| System | Tuning | Notes |
|:---|:---|:---|
| VOR (2) | FMC automatic / manual | Bearing on ND, position updates via DME/VOR pair |
| DME (2) | FMC automatic / manual | POS REF 2/4 shows active DME stations |
| ILS (2) | FMC automatic / manual | Autotune from 50 NM TOD or 150 NM runway threshold |
| ADF (2) | Manual (CDU NAV RADIO) | Bearing on PFD mini-map, displayed in cyan |

**ILS Autotune Inhibit** — active when:
- Autopilot engaged **or** FD on + LOC/GS captured

**ILS Tuning re-enabled** when:
- TO/GA pressed, **or** AP disengaged + both FDs off, **or** APP mode deselected above 1.500 ft RA

> [!caution] ILS Autotune — Inhibit After Takeoff
> ILS Autotune is inhibited for **10 minutes after the first takeoff** (to avoid PFD clutter). A newly executed approach in the active flight plan overrides this inhibit.

| EICAS | Level | Condition |
|:---|:---:|:---|
| <span class="c-amber">SINGLE SOURCE APPROACH</span> | <span class="c-amber">Caution</span> | One ILS receiver has failed — both PFDs show the remaining ILS |

**Navaid Identifier Decoding:** Morse decoded to plain text on PFD/ND. Decoding can be erroneous — when in doubt, always verify using **Morse audio**.

## Transponder & ADS-B

Two ATC transponders + TCAS — controlled via **ATP** (primary) or **TCP** (backup).

**Transponder Modes:**

| ATP Selection | Transponder | TCAS | ADS-B Out | ADS-B In |
|:---|:---:|:---:|:---:|:---:|
| STBY | Off | Off | Off | (\*) |
| ALT RPTG OFF | On (no Mode C) | Off | On | Off |
| XPDR | On | Off | On | On |
| TA ONLY | On | TA only | On | On |
| TA/RA | On | TA/RA | On | On |

(\*) *Optionally enabled via software.*

> [!info] Ground Tracking
> Do **not** use TCAS modes for ground tracking — use transponder mode only (not STBY).

| EICAS | Level | Condition |
|:---|:---:|:---|
| TRANSPONDER | Advisory | Both transponders have failed |
| TRANSPONDER PANEL | Advisory | ATP has failed — set transponder/TCAS via TCP |

**ATP Inoperative:** ALERT/XPDR CTL page on TCP → MENU → ALERT/XPDR CTL ON (LSK 1R) → LSK 2R.

## Weather Radar

- Controlled via **TCP** (SYS POWER ON required before the EFIS WXR switch is operational)
- Display on **ND (MAP mode)** and **Mini-Map**
- Maximum display range: **320 NM**
- Self-test: at power-up, every sweep, and when descending below **2.300 ft AGL**
- Turbulence detectable only with **sufficient precipitation** — **no Clear-Air-Turbulence** detection
- Integrated **Predictive Windshear** warning (PWS)

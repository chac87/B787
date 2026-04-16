# Fire Protection System

## Overview

| Area | Detection | Extinguishing |
|:---|:---:|:---:|
| Engine | Fire + Overheat | 2 bottles (both into either engine) |
| APU | Fire | 1 bottle |
| Cargo FWD / AFT | Smoke | 7 bottles (HRD + LRD) |
| Main Wheel Well | Fire + Overheat | — |
| Nose Wheel Well | — | — |
| Lavatory | Smoke | 1 bottle (auto, no cockpit indication) |
| Overhead Crew Rest | Fire | — |
| Overhead FA Rest | Fire | — |

---

## Engine Fire Protection

**Detection:** Multiple dual-channel detectors per nacelle. Normally **1 element per channel** must trigger. Upon failure of one channel → automatic single-channel operation.

| EICAS | Level | Meaning |
|:---|:---:|:---|
| <span class="c-red">ENGINE FIRE L / R</span> | <span class="c-red">Warning</span> | Fire detected |
| <span class="c-amber">ENGINE OVERHEAT L / R</span> | <span class="c-amber">Caution</span> | Overheat detected |
| <span class="c-amber">DET FIRE ENG L / R</span> | <span class="c-amber">Advisory</span> | Entire detection system failed |
| <span class="c-amber">BOTTLE (1/2) DISCH ENG</span> | <span class="c-amber">Advisory</span> | Bottle discharged or pressure too low |

**Extinguishing:** 2 bottles — both can be discharged into either engine.

<div class="checklist">

<div class="cl-item"><strong>Engine FIRE switch</strong><span class="cl-dots"></span><strong>PULL</strong></div>
<div class="cl-sub">Isolates fuel, hydraulics, electrics, and bleed from the engine</div>

<div class="cl-item"><strong>Engine FIRE switch</strong><span class="cl-dots"></span><strong>ROTATE (Bottle 1)</strong></div>
<div class="cl-sub">Rotate in the opposite direction → Bottle 2 into the same engine</div>

</div>

---

## APU Fire Protection

**Detection:** Dual-channel. On the ground: automatic APU shutdown + automatic bottle discharge.

| EICAS | Level | Meaning |
|:---|:---:|:---|
| <span class="c-red">APU FIRE</span> | <span class="c-red">Warning</span> | Fire detected |
| <span class="c-amber">DET FIRE APU</span> | <span class="c-amber">Advisory</span> | Detection system failed |

---

## Cargo Fire Protection

**Class C** — Smoke Detection + Built-in Extinguishing + Ventilation Control.

**Detectors:** Normally **2 detectors must trigger simultaneously** — upon failure of one detector, one is sufficient.

| Area | Number of Detectors |
|:---|:---:|
| FWD Cargo | 18 |
| AFT Cargo | 9 |
| Bulk Cargo (part of AFT) | 2 |

| EICAS | Level | Meaning |
|:---|:---:|:---|
| <span class="c-red">FIRE CARGO FWD / AFT</span> | <span class="c-red">Warning</span> | Fire detected |
| <span class="c-amber">DET FIRE CARGO FWD / AFT</span> | <span class="c-amber">Advisory</span> | Detection system failed |
| <span class="c-amber">BOTTLE DISCH CARGO</span> | <span class="c-amber">Advisory</span> | First 2 bottles begin to discharge |

**Extinguishing — 7 bottles total (Halon):**

| | HRD | LRD |
|:---|:---:|:---:|
| All 787 | 2 | – |
| 180 min ETOPS | – | 3 |
| 240 min ETOPS | – | 4 |
| 330 min ETOPS | – | 5 |

**In-flight sequence (automatic upon fire alarm):**
1. **Immediately** — 2 HRD bottles are discharged
2. **+ 15 min** — LRD bottles discharge slowly (until landing)
3. **Landing < 15 min after alarm** — 1 LRD at touchdown

**On the ground (manual via CARGO FIRE DISCHARGE):** 3 bottles simultaneously, no time delay.

---

**Ventilation Isolation (CARGO FIRE ARM):**

<div class="checklist">

<div class="cl-item"><strong>Lower Recirculation Fans (both)</strong><span class="cl-dots"></span><strong>OFF</strong></div>
<div class="cl-item"><strong>Packs</strong><span class="cl-dots"></span><strong>MINIMUM AIRFLOW</strong></div>
<div class="cl-sub">Pressurization only</div>
<div class="cl-item"><strong>Fwd + Aft Outflow Valves</strong><span class="cl-dots"></span><strong>50/50 SPLIT</strong></div>
<div class="cl-item"><strong>Equipment Cooling (affected side)</strong><span class="cl-dots"></span><strong>OVERRIDE</strong></div>
<div class="cl-item"><strong>Zonal Dryer Fans</strong><span class="cl-dots"></span><strong>OFF</strong></div>
<div class="cl-item"><strong>IFE Cooling</strong><span class="cl-dots"></span><strong>OFF</strong></div>
<div class="cl-item"><strong>NGS</strong><span class="cl-dots"></span><strong>OFF</strong></div>
<div class="cl-item"><strong>Cargo Heat</strong><span class="cl-dots"></span><strong>OFF</strong></div>

<div class="cl-variant">AFT Cargo only</div>
<div class="cl-item cl-indent"><strong>Bulk Cargo Ventilation</strong><span class="cl-dots"></span><strong>OFF</strong></div>
<div class="cl-item cl-indent"><strong>Lav / Galley Vent Fan</strong><span class="cl-dots"></span><strong>OFF</strong></div>
<div class="cl-item cl-indent"><strong>Door 4 Galley Chiller Units</strong><span class="cl-dots"></span><strong>OFF</strong></div>
<div class="cl-variant-end">END AFT Cargo only</div>

<div class="cl-variant">FWD Cargo only</div>
<div class="cl-item cl-indent"><strong>Miscellaneous Equipment Cooling Fan</strong><span class="cl-dots"></span><strong>OFF</strong></div>
<div class="cl-variant-end">END FWD Cargo only</div>

</div>

---

## Main Wheel Well Fire Protection

- Fire + Overheat detection present, **no extinguishing system**
- Nose Wheel Well: **neither detection nor extinguishing**
- In case of fire: Gear Extension

---

## Lavatory Fire Protection

**Detection:** 1 smoke detector per lavatory.

Upon smoke detection:
- Audible alarm in lavatory + cabin
- Lavatory Call Light flashes
- Master Call Light at the responsible FA station illuminates

| EICAS | Level | Meaning |
|:---|:---:|:---|
| <span class="c-amber">SMOKE LAVATORY</span> | <span class="c-amber">Advisory</span> | Smoke detected in lavatory |

**Extinguishing:** 1 bottle per lavatory — discharges automatically into the waste container. **No cockpit indication.**

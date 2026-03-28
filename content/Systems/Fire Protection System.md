# Fire Protection System

## Übersicht

| Bereich | Detection | Extinguishing |
|:---|:---:|:---:|
| Engine | Fire + Overheat | 2 Flaschen (beide auf jedes Triebwerk) |
| APU | Fire | 1 Flasche |
| Cargo FWD / AFT | Smoke | 7 Flaschen (HRD + LRD) |
| Main Wheel Well | Fire + Overheat | — |
| Nose Wheel Well | — | — |
| Lavatory | Smoke | 1 Flasche (auto, keine Cockpit-Anzeige) |
| Overhead Crew Rest | Fire | — |
| Overhead FA Rest | Fire | — |

---

## Engine Fire Protection

**Detektion:** Mehrere Dual-Channel-Detektoren pro Nacelle. Normalerweise muss **1 Element pro Kanal** ansprechen. Bei Ausfall eines Kanals → automatisch Single-Channel-Betrieb.

| EICAS | Level | Bedeutung |
|:---|:---:|:---|
| <span class="c-red">ENGINE FIRE L / R</span> | <span class="c-red">Warning</span> | Feuer erkannt |
| <span class="c-amber">ENGINE OVERHEAT L / R</span> | <span class="c-amber">Caution</span> | Überhitzung erkannt |
| DET FIRE ENG L / R | Advisory | Gesamtes Detektionssystem ausgefallen |
| BOTTLE (1/2) DISCH ENG | Advisory | Flasche entleert oder Druck zu niedrig |

**Extinguishing:** 2 Flaschen — beide können in jedes Triebwerk entleert werden.

<div class="checklist">

<div class="cl-item"><strong>Engine FIRE switch</strong><span class="cl-dots"></span><strong>PULL</strong></div>
<div class="cl-sub">Trennt Treibstoff, Hydraulik, Electrics und Bleed vom Triebwerk</div>

<div class="cl-item"><strong>Engine FIRE switch</strong><span class="cl-dots"></span><strong>ROTATE (Flasche 1)</strong></div>
<div class="cl-sub">Dreht man in die andere Richtung → Flasche 2 in dasselbe Triebwerk</div>

</div>

---

## APU Fire Protection

**Detektion:** Dual-Channel. Bei Feuer am Boden: automatisches APU-Shutdown + automatische Flaschenentleerung.

| EICAS | Level | Bedeutung |
|:---|:---:|:---|
| <span class="c-red">APU FIRE</span> | <span class="c-red">Warning</span> | Feuer erkannt |
| DET FIRE APU | Advisory | Detektionssystem ausgefallen |

---

## Cargo Fire Protection

**Class C** — Smoke Detection + Built-in Extinguishing + Ventilation Control.

**Detektoren:** Normalerweise müssen **2 Detektoren gleichzeitig** ansprechen — bei Ausfall eines Detektors reicht einer.

| Bereich | Anzahl Detektoren |
|:---|:---:|
| FWD Cargo | 18 |
| AFT Cargo | 9 |
| Bulk Cargo (Teil AFT) | 2 |

| EICAS | Level | Bedeutung |
|:---|:---:|:---|
| <span class="c-red">FIRE CARGO FWD / AFT</span> | <span class="c-red">Warning</span> | Feuer erkannt |
| DET FIRE CARGO FWD / AFT | Advisory | Detektionssystem ausgefallen |
| BOTTLE DISCH CARGO | Advisory | Erste 2 Flaschen beginnen zu entleeren |

**Extinguishing — 7 Flaschen gesamt (Halon):**

| | HRD | LRD |
|:---|:---:|:---:|
| Alle 787 | 2 | – |
| 180 min ETOPS | – | 3 |
| 240 min ETOPS | – | 4 |
| 330 min ETOPS | – | 5 |

**Ablauf im Flug (automatisch bei Feueralarm):**
1. **Sofort** — 2 HRD-Flaschen werden ausgelöst
2. **+ 15 min** — LRD-Flaschen entleeren sich langsam (bis zur Landung)
3. **Landung < 15 min nach Alarm** — 1 LRD bei Aufsetzen

**Am Boden (manuell via CARGO FIRE DISCHARGE):** 3 Flaschen gleichzeitig, keine Zeitverzögerung.

---

**Ventilation Isolation (CARGO FIRE ARM):**

<div class="checklist">

<div class="cl-item"><strong>Lower Recirculation Fans (both)</strong><span class="cl-dots"></span><strong>OFF</strong></div>
<div class="cl-item"><strong>Packs</strong><span class="cl-dots"></span><strong>MINIMUM AIRFLOW</strong></div>
<div class="cl-sub">Nur Druckhaltung</div>
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

- Fire + Overheat Detection vorhanden, **kein Löschsystem**
- Nose Wheel Well: **weder Detection noch Extinguishing**
- Bei Feuer: Gear Extension

---

## Lavatory Fire Protection

**Detektion:** 1 Smoke Detector pro Lavatory.

Bei Raucherkennung:
- Akustischer Alarm in Lavatory + Kabine
- Lavatory Call Light blinkt
- Master Call Light am zuständigen FA-Station leuchtet

| EICAS | Level | Bedeutung |
|:---|:---:|:---|
| SMOKE LAVATORY | Advisory | Rauch in Lavatory erkannt |

**Extinguishing:** 1 Flasche pro Lavatory — entleert automatisch in den Waste Container. **Keine Cockpit-Anzeige.**

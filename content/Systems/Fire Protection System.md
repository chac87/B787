# Fire Protection System

## Cargo Fire Detection

**Class C** — Frachtraum mit Smoke/Fire Detection, Built-in Extinguishing, Smoke Containment und Ventilation Control.

**Detektoren:** Erkennen Rauch (LED dual-beam) **und** Überhitzung (> 100 °C). Normalerweise müssen **2 Detektoren** gleichzeitig ansprechen — bei Ausfall eines Detektors reicht einer.

| EICAS Message | Level | Bedeutung |
|:---|:---:|:---|
| FIRE CARGO FWD / AFT | Warning | Feuer erkannt (bleibt solange Bedingung aktiv) |
| DET FIRE CARGO FWD / AFT | Advisory | Gesamtes Detektorsystem ausgefallen |

---

## Cargo Extinguishing

**Flaschen — alle mit Halon:**

| | HRD | LRD |
|:---|:---:|:---:|
| Alle 787 | 2 | – |
| 180 min ETOPS | – | 3 |
| 240 min ETOPS | – | 4 |
| 330 min ETOPS | – | 5 |

**Ablauf im Flug (automatisch bei Feueralarm):**
1. **Sofort** — 2 HRD-Flaschen werden ausgelöst
2. **+ 15 min** — LRD-Flaschen entleeren sich langsam (3 % Halon-Konzentration bis zur Landung)
3. **Landung < 15 min nach Alarm** — nur 1 LRD bei Aufsetzen

**Am Boden (manuell via Checklist):** 2 HRD + 1 LRD, keine Zeitverzögerung.

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

- Fire Detection vorhanden, **kein Löschsystem**
- Bei Feuer: Gear Extension

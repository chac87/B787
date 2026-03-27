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

- Beide Lower Recirculation Fans — **OFF**
- Packs — **Minimum Airflow** (nur Druckhaltung)
- Fwd + Aft Outflow Valves — **50/50 Split**
- Equipment Cooling (betroffene Seite) — **Override**
- Zonal Dryer Fans, IFE Cooling, NGS, Cargo Heat — **OFF**
- *Nur AFT:* Bulk Cargo Ventilation, Lav/Galley Vent Fan, Door 4 Galley Chiller — **OFF**
- *Nur FWD:* Miscellaneous Equipment Cooling Fan — **OFF**

---

## Main Wheel Well Fire Protection

- Fire Detection vorhanden, **kein Löschsystem**
- Bei Feuer: Gear Extension

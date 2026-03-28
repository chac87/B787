# Ventilation System

Das Ventilationssystem nutzt interne Kabinenluft zur Kühlung von elektronischen und elektrischen Komponenten. Die dabei erwärmte Luft wird für das Cargo Heat System verwendet oder overboard abgeführt. Zusätzliche Kühlung liefern zwei Flüssigkeitssysteme: PECS und ICS.

## Equipment Cooling — FWD / AFT

Beide Systeme sind identisch im Aufbau. Jeweils 2 Supply Fans (Primary + Backup) — Backup startet automatisch bei Primary-Ausfall.

| System | Kühlt | Abluft nach |
|:---|:---|:---|
| **FWD Equipment Cooling** | Flight Deck + FWD E/E Racks | Overboard Vent Valve oder FWD Cargo (bei Heizbedarf) |
| **AFT Equipment Cooling** | AFT E/E Racks | Overboard Exhaust Valve oder AFT Cargo |

### Override Mode

Automatische Aktivierung (FWD oder AFT) bei:

| Auslöser |
|:---|
| EQUIP COOLING Switch → OVRD (manuell) |
| Beide Supply Fans ausgefallen (im Flug) |
| Beide Flow Sensors ausgefallen |
| Niedriger Airflow erkannt (im Flug) |
| Überhitzung erkannt (im Flug) |
| Rauch im Equipment Cooling System / Cargo Area |
| CARGO FIRE ARM Switch → ARMED |
| *Zusätzlich AFT only:* Rauch im AFT Equipment Ventilation System |

**Override-Wirkung:** Cargo Heat + Overboard Vent Valves schließen · Fans aus · Override Valve öffnet. Cabin Differential Pressure drückt Luft in Gegenrichtung durch E/E Racks → Overboard Venturi.

> [!info] Override-Kühlung ausreichend im Cruise. Nimmt ab beim Sinken (weniger ΔP).

**Im Flug:**
- FWD OVRD: unterstützt **Rauchevakuierung vom Flight Deck**
- AFT OVRD: unterstützt **Rauchevakuierung aus der Kabine**

| EICAS | Level | Bedeutung |
|:---|:---:|:---|
| <span class="c-amber">EQUIP COOLING FWD</span> | <span class="c-amber">Advisory</span> | FWD Equipment Cooling inoperativ (am Boden + Horn im Wheel Well) |
| <span class="c-amber">EQUIP COOLING AFT</span> | <span class="c-amber">Advisory</span> | AFT Equipment Cooling inoperativ (am Boden + Horn im Wheel Well) |
| <span class="c-amber">EQUIP OVBD VLV AFT</span> | <span class="c-amber">Advisory</span> | AFT Overboard Valve offen — Druckbeaufschlagung kann Duct-Failure + Druckverlust verursachen |

> [!warning] Bei EQUIP OVBD VLV AFT: Kabine **nicht** druckbeaufschlagen — Duct-Versagen und Kabinendruck-Verlust möglich.

---

## Lavatory / Galley Ventilation

Versorgt Lavatories und Galleys mit Belüftungsluft · steuert Rauch in Lavatories und optionalen Crew Rests. Auch sekundärer Heat Sink für PECS und Antrieb für Kabinen-Temperatursensoren.

---

## Fluid Cooling Systems

### PECS — Power Electronics Cooling System

Flüssigkeitskühlung für das Large Motor Power Distribution System (AFT E/E) und die ICS Motor Controllers.

- 2 unabhängige Loops · je 1 Pump Package mit **2 redundanten Pumpen**
- Kühlmitteltemperatur: **27 °C** (Normalbetrieb)
- Status auf **STATUS Page** (Flüssigkeitsmenge + Status je Loop)
- Bei nur einer externen FWD-Stromquelle: nur 1 Loop auf EICAS sichtbar
- Keine Flight Deck Controls — vollautomatisch

> [!caution] PECS benötigt nach Pack- und Hydraulik-EMP-Shutdown eine **Abkühlphase**, um Restwärme aus den flüssigkeitsgekühlten LRUs abzuführen. Andernfalls drohen Schäden an den Komponenten und am Kühlmittel.

### ICS — Integrated Cooling System

Zentrales Kältesystem: kühlt **Galley Carts** + unterstützt Kühlung der **Recirculated Cabin Air** (Lower Recirculation Ducts). Integriert mit Air Conditioning + PECS zur Gesamtwärmelaststeuerung. Keine Flight Deck Controls.

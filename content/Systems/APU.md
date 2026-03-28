# APU

Selbstständige Gasturbine im **Tailcone** · 2 APU Starter/Generatoren (ASGs) · Betrieb bis zur **maximalen zertifizierten Flughöhe** · Generatorleistung nimmt mit Höhe ab.

---

## APU Start

**Starter:** L oder R APU Starter · Starterauswahl automatisch · Bei reiner Batteriestromversorgung wird nur der **rechte** Starter verwendet.

**Stromversorgung:**

| Komponente | Stromquelle |
|:---|:---|
| APUC + Air Inlet Door + rechter Starter | APU Battery |
| Fuel Shutoff Valve + DC Fuel Pump + Fire Detection | Main Battery |
| Linker + rechter Starter | Forward Ext. Power oder Engine Generator |

**Kraftstoffversorgung:**
- Mit AC Power (APU Selector ON): linke AFT Fuel Pump wird automatisch eingeschaltet (unabhängig von Flight Deck Switch)
- Ohne AC Power oder kein AC-Pump-Druck: DC Pump im linken Main Tank (läuft bis APU Shutdown oder AC verfügbar)
- APU kann **ohne Pumpen** gestartet werden: am Boden + Flug bis **14.000 ft**

**Startsequenz:** Selector → START → APUC öffnet Air Inlet Door → bei voller Öffnung + CCS bereit: Starter eingerückt → bei ausreichender Drehzahl: Zündung + Kraftstoff → Starter Cutout bei **≈50% RPM** → APU betriebsbereit bei **95% Zieldrehzahl + 2 Sekunden**

> [!info] Kaltstart aus unpowered airplane (Battery Switch gerade ON): APUC wartet bis CCS-Applikationen verfügbar sind — erkennbar wenn CDU-Seite auf unterem Display sichtbar ist.

> [!info] Nach In-Flight Start: APU laufen lassen bis Öltemperatur stabilisiert — verhindert thermischen Schock an Lagern.

**Fehlgeschlagener Start:** APU schaltet automatisch ab → <span class="c-amber">APU SHUTDOWN</span> Advisory · Selector ON → OFF zum Reset.

**Startversuche:** APU Battery unterstützt **2 aufeinanderfolgende** Versuche · Nach dem 2. fehlgeschlagenen Versuch: **5 min Kühlpause** vor weiterem Versuch.

| EICAS | Level | Bedeutung |
|:---|:---:|:---|
| APU RUNNING | Memo | APU betriebsbereit |
| <span class="c-amber">APU SHUTDOWN</span> | <span class="c-amber">Advisory</span> | APU automatisch abgeschaltet |

---

## APU Automatic Start

Im Flug startet APU automatisch wenn **≥ 3 Engine Generators** ausfallen — unabhängig von Selector-Position.

| Zustand | Abschaltmöglichkeit |
|:---|:---|
| Auto-Start-Bedingung nicht mehr aktiv | Selector ON → OFF |
| Auto-Start-Bedingung noch aktiv | Nur über **APU Fire Switch** |

---

## APU Shutdown

Selector → OFF → **2 min Cooldown** (EICAS Memo: **APU COOLDOWN**) · jederzeit abbrechbar durch Selector → ON.

Nach Cooldown: Überdrehzahl-Simulation testet Overspeed + Fuel Shutoff Protection → Kraftstoff ab → APU stoppt → Spar Valve schließt → Air Inlet Door schließt bei **15% RPM**.

> [!info] Nach APU LIMIT-Meldung: kein Cooldown beim manuellen Shutdown.

| EICAS | Level | Bedeutung |
|:---|:---:|:---|
| APU COOLDOWN | Memo | APU im Cooldown-Zyklus |

---

## APU Operating Modes

| Modus | Aktiv bei |
|:---|:---|
| **Attended** | Engine start/running **oder** Flug |
| **Unattended** | Alle anderen Bodenkonfigurationen |

### Attended Mode — Sofortiger Shutdown bei

| Fault |
|:---|
| APU Fire / Inlet Overtemperature |
| Overspeed / Loss of Overspeed Protection |
| APUC Failure · Speed Droop |
| Start Failure (no rotation / no acceleration / no light-off) |
| Air Inlet Door failed closed |

**Kein Cooldown.** → <span class="c-amber">APU SHUTDOWN</span>

**APU läuft weiter** (kein sofortiger Shutdown) bei:

| Fault | EICAS |
|:---|:---|
| High EGT · High Oil Temp · Low Oil Press | <span class="c-amber">APU LIMIT</span> (Caution) |

| EICAS | Level | Bedeutung |
|:---|:---:|:---|
| <span class="c-amber">APU LIMIT</span> | <span class="c-amber">Caution</span> | Grenzwertüberschreitung — APU läuft weiter |

### Unattended Mode — Sofortiger Shutdown bei

Alle Attended-Gründe **plus**:

| Zusätzliche Faults |
|:---|
| High EGT / Loss of EGT Signal |
| Low Oil Pressure · High Oil Temperature |
| APU S/G Oil Filter Approaching Bypass |

**Kein Cooldown.** → <span class="c-amber">APU SHUTDOWN</span>

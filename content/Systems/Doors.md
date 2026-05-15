# Doors

## Übersicht

| Tür                          |   Anzahl    | Betrieb                           |
| :--------------------------- | :---------: | :-------------------------------- |
| Passenger Entry Doors        | 8 (1L – 4R) | Manuell / Automatik (Slide armed) |
| Flight Deck Door             |      1      | Elektronisch gesichert + Deadbolt |
| Flight Deck Overhead Door    |      1      | Nur am Boden (depressurized)      |
| Cargo Door FWD / AFT         |      2      | Elektrisch (extern) oder manuell  |
| Bulk Cargo Door              |      1      | Manuell                           |
| Equipment / E/E Access Doors |      3      | Manuell (kein Schloss)            |

![[door synoptics.webp]]

> [!caution] Windlimits
> Entry- und Cargo-Türen: max. **40 kts** Betrieb · max. **65 kts** offen halten.

**EICAS-Logik:**
- Flight Deck Door, Passenger Entry Doors, Cargo Doors FWD/AFT → EICAS wenn nicht **geschlossen + verriegelt + gesichert**
- Bulk Cargo Door, Overhead Door, Access Doors → EICAS wenn nicht **geschlossen + verriegelt** (kein Schloss vorhanden)

---

## Flight Deck Door

- Ballistic- und Intrusionsschutz (Tür + Hinterwand)
- Öffnet in die Kabine · Sichtfenster + Sicherheitskamera (EFB)

**Dekompressionsverhalten:**

| Ereignis | Wirkung |
|:---|:---|
| Schnelle Dekompression Flight Deck | Dekompressions-Panel öffnet (Kabine → FD) |
| Schnelle Dekompression Kabine | Gesamte FD-Tür öffnet (FD → Kabine) |

Dekompressions-Panel = Escape-Route bei geklemmter Tür (Anleitung auf Türinnenseite).

### Electronic Access System

**Kabinenseite (Keypad):**

| Keypad-Licht | Bedeutung |
|:---:|:---|
| <span class="c-red">Rot</span> | Tür gesichert (locked) |
| <span class="c-amber">Amber</span> | Notfall-Code eingegeben – wartet auf Crew-Entscheidung |
| <span class="c-green">Grün</span> | Zugang gewährt – Tür entsperrt |

- **Klingel:** Taste `1` + ENT → EICAS COMM: **FD DOOR CALL**
- Keypad dormant bis zum ersten Tastendruck · kehrt nach 3 min ohne Eingabe in Ruhezustand zurück

**Cockpitseite (Aisle Stand):**

| FD DOOR ACCESS Selector | Wirkung |
|:---|:---|
| AUTO (federgezogen) | Tür gesperrt · Notfall-Zugang nach Zeitverzögerung |
| UNLKD | Sofort öffnen |
| DENY | Zugang verweigert · Keypad für definierten Zeitraum gesperrt |

| EICAS | Level | Bedeutung |
|:---|:---:|:---|
| <span class="c-red">FD DOOR AUTO UNLOCK</span> | <span class="c-red">Warning</span> | Notfall-Code eingegeben – keine Crew-Aktion → automatischer Zugang |
| <span class="c-amber">FD DOOR OPEN</span> | <span class="c-amber">Advisory</span> | Lock-Pin ausgefahren obwohl Tür-Sensor offen meldet |
| <span class="c-amber">FD DOOR LOCK FAIL</span> | <span class="c-amber">Advisory</span> | Schloss ausgefallen oder FD DOOR POWER OFF |

### Deadbolt (mechanisch, nur am Boden)

| Position | Wirkung | Schlüssel von Kabine |
|:---|:---|:---:|
| UNLOCKED | Deadbolt eingezogen | – |
| LOCKED – KEY OPERABLE | Deadbolt ausgefahren | Ja |
| LOCKED – KEY INOPERABLE | Deadbolt ausgefahren | Nein |

---

## Flight Deck Overhead Door

Notausstieg via Descent Devices – **nur am Boden + depressurized**.

> [!warning] Tür fällt nach innen auf – Verletzungsgefahr beim Öffnen.

| EICAS | Level | Bedeutung |
|:---|:---:|:---|
| <span class="c-amber">DOOR FD OVHD</span> | <span class="c-amber">Advisory</span> | Tür nicht geschlossen und gesichert |

---

## Passenger Entry Doors

- 8 Türen: **1L – 4R**, paarweise entlang Rumpf
- Translating Plug-Type: erst nach innen+oben, dann nach außen+vorne
- Jede Tür: Sichtfenster + Gust Lock (hält Tür offen)
- **Vent Panel** am Türgriff: verhindert Druckaufbau bei nicht vollständig geschlossener Tür

**Flight Lock:** Türgriff automatisch gesperrt bei GS > **80 kts** · entsperrt < **70 kts** oder bei Stromausfall.

### Slide/Raft & Notbetrieb

| Mode Select Lever | Öffnung innen | Öffnung außen |
|:---|:---|:---|
| **AUTO** (armed, rotes Band) | Tür öffnet pneumatisch · Slide deployt automatisch | Lever wechselt auto → manual · kein Slide |
| **Manual** (grünes Band) | Tür manuell · kein Slide | Normal manuell |

Jedes Türsystem öffnet auch bei Gear-Kollaps-Lage unassistiert.

---

## Cargo Doors

| Tür | Seite | Betrieb |
|:---|:---:|:---|
| FWD Cargo | R | Elektrisch (externes Panel) oder manuell · Schloss: externer Lock Handle |
| AFT Cargo | R | Elektrisch (externes Panel) oder manuell · Schloss: externer Lock Handle |
| Bulk Cargo | L | Manuell (gegengewuchtet) · kein Schloss |

Öffnen der Cargo-Türen deaktiviert **nicht** Cargo Heating, Ventilation oder Fire Detection.

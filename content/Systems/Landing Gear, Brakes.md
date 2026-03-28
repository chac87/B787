# Landing Gear & Brakes

## Übersicht

| Komponente        | Details                                                          |
| :---------------- | :--------------------------------------------------------------- |
| Main Landing Gear | 2 × MLG · je 4 gears = 8 main gears gesamt                       |
| Nose Landing Gear | 1 × NLG · 2 gears                                                |
| Hydraulik         | Center System — Extension, Retraction, Steering                  |
| Brakes            | Elektromechanisch — 4 EBACs · 32 EBAs (Electric Brake Actuators) |

![[landing gear.png]]

## Speed Limits

| Limit | Wert |
|:---|:---:|
| vLE (Gear Extended) | 270 kts |
| Empfohlen für Drag | max. 200 kts |

## Air/Ground Sensing

Je ein Sensor pro MLG-Beam — steuert Gear-Lever-Lock, Early Doors, Autobrake-Aktivierung und andere bodenbezogene Systeme.

## Gear Operation

**Lever-Verriegelung:**
- Am Boden: Lever in **DN gelockt** — kann nicht auf UP gezogen werden
- In der Luft: Air/Ground Sensing gibt Lever frei
- **LOCK OVERRIDE Switch**: Ermöglicht UP am Boden (z. B. Maintenance)

### Retraction

**Early Doors:** Gear doors öffnen **1 Sekunde nach Lift-off**. Wenn kein UP-Kommando innerhalb von **30 Sekunden** → Türen schließen wieder.

**EICAS-Anzeige:**
- Transit → Schraffur (in Bewegung)
- UP (nach ≈ 10 sek) → UP angezeigt
- Doors geschlossen → blanks (erlischt)
- Gear wird nach Einfahren + Türen geschlossen automatisch drucklos

### Extension

- **Free-fall** — Downlocks werden elektrisch gesichert
- Trucks kippen in Flugposition während der Extension

### Alternate Extension

- Betrieb via **DC Electric Pump**
- **ALTERNATE GEAR Switch** → DOWN
- Gear-Lever-Position spielt keine Rolle
- GEAR DOOR wird angezeigt
- Retraction danach möglich: wenn Center Hydraulic verfügbar → DN dann UP

## EICAS — Landing Gear

| EICAS | Level | Bedeutung |
|:---|:---:|:---|
| <span class="c-amber">GEAR DISAGREE</span> | <span class="c-amber">Caution</span> | Gear nach Transit-Zeit nicht in Soll-Position |
| <span class="c-amber">GEAR DRAG BRACE L / R</span> | <span class="c-amber">Caution</span> | Drag Brace nicht verriegelt |
| <span class="c-amber">GEAR SIDE BRACE L / R</span> | <span class="c-amber">Caution</span> | Side Brace nicht verriegelt |
| <span class="c-amber">GEAR DOOR</span> | <span class="c-amber">Advisory</span> | Gear-Türe nicht geschlossen |

## NWS — Nose Wheel Steering

- **Tiller**: ± 70°
- **Rudder**: ± 8°
- Beide Eingaben werden **summiert** (max. 70°)
- Betrieb via **Center Hydraulic System**

## Brakes

Kohlefaser-Bremsscheiben. **Keine Vorderradbremsen.**

### Antiskid

Schutz pro Rad: Touchdown Protection · Hydroplane Protection · Locked-Wheel Protection

| EICAS | Level | Bedeutung |
|:---|:---:|:---|
| <span class="c-amber">ANTISKID</span> | <span class="c-amber">Advisory</span> | Antiskid-System ausgefallen |

### Autobrake

**Aktivierung:**

| Modus | Bedingung |
|:---|:---|
| **RTO** | > 85 kts + Thrust Levers Idle + am Boden |
| **Landing** | Thrust Levers Idle + Wheel Spin-Up |

**MAX AUTO:** Begrenzt auf Autobrake 4 bis **Pitch < 1°** (Tail-Strike-Avoidance).

Bremsdruck wird **automatisch reduziert**, wenn Reverser und Spoiler zur Verzögerung beitragen.

**Deaktivierung:**

| Auslöser |
|:---|
| Pedal-Bremsung |
| Thrust Lever Advance |
| Speedbrake → DOWN Detent |
| DISARM / OFF Selector |
| Fault · Antiskid Fault · IRU-Datenverlust |

| EICAS | Level | Bedeutung |
|:---|:---:|:---|
| <span class="c-amber">AUTOBRAKE</span> | <span class="c-amber">Advisory</span> | Autobrake-System ausgefallen oder deaktiviert |

### Taxi Brake Release

Unter **30 kts**: halbe Bremskraft pro MLG, abwechselnd (Pair-Cycling). Pedal muss **vollständig losgelassen** werden, um auf das nächste Paar umzuschalten. Bei schwerem Bremsen / Landing / RTO / Parking: alle Bremsen gleichzeitig.

### Parking Brake

- Setzen: Bremspedal halten + Parking Brake Lever
- **Park-and-Adjust**: 25 % Kraft auf **2 von 4 EBAs** pro MLG — passt sich beim Abkühlen an (≈ 60 min)
- Bleibt auch **ohne Strom** gesetzt

| EICAS | Level | Bedeutung |
|:---|:---:|:---|
| <span class="c-amber">PARKING BRAKE SET</span> | <span class="c-amber">Memo</span> | Parkbremse gesetzt |
| <span class="c-red">CONFIG PARKING BRAKE</span> | <span class="c-red">Warning</span> | Takeoff-Schub mit gesetzter Parkbremse |

### Brake Temperature

Skala: **0.0 – 9.9**

| Bereich | Anzeige |
|:---:|:---|
| 0.0 – 2.9 | Weiß (normal) |
| 3.0 – 4.9 | Weiß · heißeste Bremse als Vollbalken |
| ≥ 5.0 | EICAS BRAKE TEMP — bleibt bis alle < 3.0 |

| EICAS | Level | Bedeutung |
|:---|:---:|:---|
| <span class="c-amber">BRAKE TEMP</span> | <span class="c-amber">Advisory</span> | Mindestens eine Bremse ≥ 5.0 |

## Tire Pressure

- Normaldruck: Anzeige weiß auf Synoptic
- Außerhalb Normalbereich: **Amber** auf Synoptic

| EICAS | Level | Bedeutung |
|:---|:---:|:---|
| <span class="c-amber">TIRE PRESS</span> | <span class="c-amber">Advisory</span> | Reifendruck außerhalb Normalbereich |

---

> [!info] Un-annunciated Checklists
> **GEAR LEVER LOCKED DOWN** — via Non-Normal Menu im ECL aufrufen

---

> [!limit] Limitations
> <div class="cl-item"><strong>Alternate Extension</strong><span class="cl-dots"></span><span>Speedbrakes eingefahren</span></div>
> <div class="cl-item"><strong>Brake Release</strong><span class="cl-dots"></span><span>nicht über 55% N1 (Tailtipper-Gefahr)</span></div>
> <div class="cl-item"><strong>Schleppen towbarless</strong><span class="cl-dots"></span><span>verboten — außer Torque Links getrennt</span></div>

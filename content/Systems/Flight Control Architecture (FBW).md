# Flight Controls & Protections

## Flight Control Modes

| Input | **NORMAL**<br><span style="font-size:0.78em;font-weight:normal;display:block;text-align:center;">Signal: PFC</span> | **SECONDARY**<br><span style="font-size:0.78em;font-weight:normal;display:block;text-align:center;">Signal: PFC</span> | **DIRECT**<br><span style="font-size:0.78em;font-weight:normal;display:block;text-align:center;">Signal: ACE</span> |
|:---:|:---:|:---:|:---:|
| **PITCH** | Pitch rate<br>Pitch compensation | Proportional elevator deflection | Proportional elevator deflection |
| **PITCH TRIM** | GND: Stabilizer<br>FLT: Trim ref. speed | GND + FLT: Stabilizer | GND + FLT: Stabilizer |
| **ROLL** | Roll rate | Proportional roll surface deflection | Proportional roll surface deflection |
| **YAW** | Sideslip control<br>Yaw damping<br>Rudder ratio changer<br>Gust suppression<br>Asymmetry comp. (> 60 kts) | Proportional rudder<br>Rudder ratio (flap-based)<br>Yaw damping degraded | Proportional rudder<br>Rudder ratio (flap-based)<br>Yaw damping degraded |
| **AUTOPILOT** | ✓ | ✗ | ✗ |
| **PROTECTION** | ✓ Full | Load factor only | ✗ |

---

## Protections

### Pitch & Roll

| Protection                 | Aktiviert bei                  | Wirkung                                             |
| :------------------------- | :----------------------------- | :-------------------------------------------------- |
| **Stall Protection**       | Annäherung an krit. AOA        | Trim-Limit<br>Erhöhte Steuerhorn-Kraft              |
| **Overspeed Protection**   | Annäherung an VMO / MMO        | Trim-Limit<br>Gegendruck am Steuerhorn erforderlich |
| **Tail Strike Protection** | T/O & LDG bei kritischem Pitch | Reduzierter Höhenruderausschlag                     |
| **Bank Angle Protection**  | > 35° bank                     | Rückstellkraft<br>Auto. back roll auf < 30°         |

### Asymmetry & Engine

| Protection | Aktiviert bei | Wirkung |
|:---|:---|:---|
| **Thrust Asymmetry (TAP)** | Großer Schubunterschied (T/O, GA) | EEC begrenzt Schub des arbeitenden Triebwerks |
| **Roll/Yaw Asymmetry Comp.** | Asymmetrische Bedingungen (Normal mode) | Automatischer Ausgleich → reduzierte Pilotenbelastung |
| **TCMA** | Asymm. Idle-Bedingung am GND | Auto-Shutdown des betroffenen Triebwerks |

### Flap/Slat Positionen & Speed Selection

| Flap Lever | Flaps | Slats |
|:---:|:---:|:---|
| 1 | 1° | Mid |
| 5 | 5° | Mid |
| 15 | 15° | Mid |
| 20 | 20° | Mid |
| **25** | **25°** | **Fully Extended** |
| 30 | 30° | Fully Extended |

> [!info] Flap 20 → 25: Slats auf "Fully"
> Beim Wählen von Flap 25 fahren die Slats von **Mid** auf **Fully Extended** — einziger Schritt, bei dem Slats die vollausgefahrene Landeposition einnehmen.

**Speed Selection:**

<div class="checklist">

<div class="cl-item"><strong>Flap-Stellung wählen</strong><span class="cl-dots"></span><strong>ZUERST</strong></div>
<div class="cl-sub">Flap-Lever in gewünschte Position stellen</div>

<div class="cl-item"><strong>Zielgeschwindigkeit einstellen</strong><span class="cl-dots"></span><strong>WENN POSITION IN MAGENTA ERSCHEINT</strong></div>
<div class="cl-sub">Sobald die neue Flap-Position auf dem Speed Tape als Magenta-Dreieck angezeigt wird → Speed setzen</div>

</div>

---

### High Lift (Flaps & Slats)

| Protection | Aktiviert bei | Wirkung |
|:---|:---|:---|
| **Flap/Slat Load Relief** | Klappen ausgefahren bei zu hoher SPD | Auto-Einfahren<br>Ausfahren bei SPD-Abnahme |
| **Slat Autogap** | Hoher AOA | Slats automatisch T/O → LDG Position |
| **Asymmetry/Skew Protection** | Ungleichmäßiges Aus-/Einfahren | Antrieb wird abgeschaltet |

---

> [!limit] Limitations
> <div class="cl-item"><strong>Takeoff</strong><span class="cl-dots"></span><span>Normal Mode only</span></div>
> <div class="cl-item"><strong>Rapid alternating control inputs</strong><span class="cl-dots"></span><span>avoid</span></div>
> <div class="cl-item"><strong>Max. flap extension altitude</strong><span class="cl-dots"></span><span>20.000 ft</span></div>

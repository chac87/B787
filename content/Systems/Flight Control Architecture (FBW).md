# Flight Controls & Protections

## Flight Control Modes

| Input | **NORMAL**<br><span style="font-size:0.78em;font-weight:normal;display:block;text-align:center;">Signal: PFC</span> | **SECONDARY**<br><span style="font-size:0.78em;font-weight:normal;display:block;text-align:center;">Signal: PFC</span> | **DIRECT**<br><span style="font-size:0.78em;font-weight:normal;display:block;text-align:center;">Signal: ACE</span> |
|:---:|:---:|:---:|:---:|
| **PITCH** | Pitch rate · pitch compensation | Proportional elevator deflection | Proportional elevator deflection |
| **PITCH TRIM** | GND: Stabilizer · FLT: Trim ref. speed | GND + FLT: Stabilizer | GND + FLT: Stabilizer |
| **ROLL** | Roll rate | Proportional roll surface deflection | Proportional roll surface deflection |
| **YAW** | Sideslip control · Yaw damping · Rudder ratio changer · Gust suppression · Asymmetry comp. (> 60 kts) | Proportional rudder · Rudder ratio (flap-based) · Yaw damping degraded | Proportional rudder · Rudder ratio (flap-based) · Yaw damping degraded |
| **AUTOPILOT** | ✓ | ✗ | ✗ |
| **PROTECTION** | ✓ Full | Load factor only | ✗ |

---

## Fly-by-Wire

| Mode | Signal | Autopilot | Protections | Aktivierung |
|:---|:---:|:---:|:---:|:---|
| **Normal** | PFC | ✓ | Full | Standardzustand — alle 3 PFCs parallel |
| **Secondary** | PFC | ✗ | Load factor only | IRS/ADRS- oder Flap/Slat-Datenverlust |
| **Direct** | ACE | ✗ | None | Alle PFCs ausgefallen oder PFC Disc. Switch |

---

## Protections

### Pitch & Roll

| Protection | Aktiviert bei | Wirkung |
|:---|:---|:---|
| **Stall Protection** | Annäherung an krit. AOA | Trim-Limit · erhöhte Steuerhorn-Kraft |
| **Overspeed Protection** | Annäherung an VMO / MMO | Trim-Limit · Gegendruck am Steuerhorn erforderlich |
| **Tail Strike Protection** | T/O & LDG bei kritischem Pitch | Reduzierter Höhenruderausschlag |
| **Bank Angle Protection** | > 35° Querneigung | Rückstellkraft · auto. Rückroll auf < 30° |

### Asymmetry & Engine

| Protection | Aktiviert bei | Wirkung |
|:---|:---|:---|
| **Thrust Asymmetry (TAP)** | Großer Schubunterschied (T/O, GA) | EEC begrenzt Schub des arbeitenden Triebwerks |
| **Roll/Yaw Asymmetry Comp.** | Asymmetrische Bedingungen (Normal mode) | Automatischer Ausgleich → reduzierte Pilotenbelastung |
| **TCMA** | Asymm. Idle-Bedingung am GND | Auto-Shutdown des betroffenen Triebwerks |

### High Lift (Flaps & Slats)

| Protection | Aktiviert bei | Wirkung |
|:---|:---|:---|
| **Flap/Slat Load Relief** | Klappen ausgefahren bei zu hoher SPD | Auto-Einfahren · Ausfahren bei SPD-Abnahme |
| **Slat Autogap** | Hoher AOA | Slats automatisch T/O → LDG Position |
| **Asymmetry/Skew Protection** | Ungleichmäßiges Aus-/Einfahren | Antrieb wird abgeschaltet |

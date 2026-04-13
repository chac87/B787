# Flight Controls & Protections

## Overview & Architecture

> [!info]- Flight Control System
> ![[fctl.webp]]

The B787 primary flight control system is a **fly-by-wire** system. Pilot inputs from control columns, wheels, and pedals are processed by **4 Actuator Control Electronics (ACEs)** and **3 Primary Flight Computers (PFCs)**. The Ram Air Turbine (RAT) serves as a backup power source. Pilot controls feature jam override mechanisms to allow continued control if a jam occurs.

| Axis | Surfaces |
|:---|:---|
| **Pitch** | 2 Elevators + 1 Horizontal Stabilizer |
| **Roll** | 2 Ailerons + 2 Flaperons + 14 Spoilers |
| **Yaw** | 1 Rudder (3 hydraulic actuators) |

> [!info]- Power Sources
> ![[fctl source.webp]]

---

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

## Pitch Control

- **Normal mode inflight:** Trim switches change the trim reference speed → PFCs automatically move the elevators and streamline the stabilizer
- **On ground / degraded modes:** Trim switches move the stabilizer directly
- Uncommanded stabilizer motion → automatic shutdown of the affected channel
- **Column cutout:** Stops uncommanded trim if opposed by the control column for more than 2 seconds

## Roll Control

- Control wheel commands a **roll maneuver rate** — not direct surface position
- Bank angle protection > 35° → automatic back roll to < 30°
- Ailerons are locked out at high speeds → roll control by flaperons and spoilers only

## Yaw Control

- Rudder pedals command a **sideslip maneuver**
- **Rudder ratio changer:** Automatically reduces sideslip command as airspeed increases
- Automatic thrust asymmetry compensation + yaw damping
- No rudder influence below 60 kts

---

## High Lift Devices

### Architecture

| Component | Quantity |
|:---|:---:|
| Outboard flaps | 2 |
| Inboard flaps | 2 |
| Krueger flap | 1 |
| Slats | 6 |

- **Primary mode:** Hydraulic (System C) — slats and flaps controlled together
- If slats hydraulic control fails: flaps remain hydraulically driven, slats are powered electrically
- **Alternate mode armed:** Slats extend to mid range position only
- Slat Autogap available in primary mode only

### Flap/Slat Modes

| Mode | Drive | Control |
|:---|:---|:---|
| **Primary** | Hydraulic (System C) | Slats + flaps together |
| **Secondary** | Hydraulic or electric | Controlled separately |
| **Alternate** | Electric | via Alternate Flap Selector |

> [!info]- Primary Mode
> ![[flap normal.webp]]

> [!info]- Secondary Mode
> ![[flaps secondary.webp]]

> [!info]- Alternate Mode
> ![[flaps alternate.webp]]

### Flap/Slat Positions & Speed Selection

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

### Spoilers

- **5 pairs** hydraulically powered, **2 pairs** electrically powered
- Functions: roll control assist + speedbrake
- **Auto-drag:** Ailerons deflect downward + outboard spoilers raise to assist glide slope/path capture

---

## Flight Envelope Protections

→ [[Systems/Flight Envelope Protections|Flight Envelope Protections]]

---

> [!limit] Limitations
> <div class="cl-item"><strong>Takeoff</strong><span class="cl-dots"></span><span>Normal Mode only</span></div>
> <div class="cl-item"><strong>Max. flap extension altitude</strong><span class="cl-dots"></span><span>20.000 ft</span></div>

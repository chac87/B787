# Engines

![[eng indications.webp]]

The 787 is powered by 2 high-bypass-ratio engines: either the **General Electric GEnx** or the **Rolls-Royce Trent 1000**.

> [!info]- GEnx-1B74/75
> <div class="cl-item"><strong>Takeoff Thrust (BET)</strong><span class="cl-dots"></span><span>74.100 lbs</span></div>
> <div class="cl-item"><strong>Architecture</strong><span class="cl-dots"></span><span>Twin-spool turbofan</span></div>
> <div class="cl-item"><strong>N1 Spool</strong><span class="cl-dots"></span><span>Fan · Low Pressure Compressor · Low Pressure Turbine</span></div>
> <div class="cl-item"><strong>N2 Spool</strong><span class="cl-dots"></span><span>High Pressure Compressor · High Pressure Turbine</span></div>
> <div class="cl-item"><strong>Accessory Gearbox</strong><span class="cl-dots"></span><span>N2-driven · N1 and N2 mechanically independent</span></div>

**Engine Intermix**: Both engines operated on the same thrust rating. EGT amber band difference between engines is normal.

---

## Engine Indications

**Primary** (always visible): N1, EGT

**Secondary** (manually via ENG switch or automatically): N2, Fuel Flow, Oil Pressure, Oil Temperature, Oil Quantity, Engine Vibration

### Automatic Secondary Display

Secondary indications appear automatically when any of the following conditions exist. They cannot be cleared until the condition is resolved.

<div class="checklist">

<div class="cl-item"><strong>Displays receive power</strong><span class="cl-dots"></span><strong>AUTO</strong></div>
<div class="cl-item"><strong>FUEL CONTROL → CUTOFF in flight</strong><span class="cl-dots"></span><strong>AUTO</strong></div>
<div class="cl-item"><strong>Engine Fire Switch pulled in flight</strong><span class="cl-dots"></span><strong>AUTO</strong></div>
<div class="cl-item"><strong>Secondary parameter exceeded</strong><span class="cl-dots"></span><strong>AUTO</strong></div>
<div class="cl-item"><strong>N2 below idle in flight</strong><span class="cl-dots"></span><strong>AUTO</strong></div>
<div class="cl-item"><strong>START Selector in START</strong><span class="cl-dots"></span><strong>AUTO</strong></div>
<div class="cl-item"><span class="c-amber">FUEL FLOW ENG L/R</span> Advisory active<span class="cl-dots"></span><strong>AUTO</strong></div>

</div>

### Color Logic

<div class="eicas-levels">

<div class="eicas-card eicas-card--white">
  <div class="eicas-card-title">Normal Range</div>
  <div class="eicas-card-body">All parameters within limits · white</div>
</div>

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title">Amber Band</div>
  <div class="eicas-card-body">EGT max continuous · Oil Temp · Oil Press — amber on reaching</div>
</div>

<div class="eicas-card eicas-card--red">
  <div class="eicas-card-title">Red Lines <span class="eicas-card-badge">LIMIT</span></div>
  <div class="eicas-card-body">N1 · N2 · EGT · Oil Press · Oil Temp — red on reaching</div>
</div>

<div class="eicas-card eicas-card--red">
  <div class="eicas-card-title">Redline Exceedance <span class="eicas-card-badge">LATCHED</span></div>
  <div class="eicas-card-body">N1 · N2 · EGT box remains red after exceedance · Cancel/Recall via Display Switch</div>
</div>

<div class="eicas-card eicas-card--white">
  <div class="eicas-card-title">EGT Amber Inhibit <span class="eicas-card-badge">5 / 10 MIN</span></div>
  <div class="eicas-card-body">5 min after T/O or G/A · 10 min at OEI</div>
</div>

</div>

---

## Electronic Engine Control (EEC)

The EEC uses inputs from the engine, thrust lever position, and other airplane data to control engine operation.

Each EEC has full authority over its engine. Control basis: N1 RPM. EEC self-powered from sufficient PMA output; aircraft power as backup.

### EEC Modes

| Mode | Trigger | Behavior |
|:---|:---|:---|
| **Normal** | Default | EEC schedules N1 per thrust lever position · maximum rated thrust commanded at full forward lever |
| **Soft Alternate** | Auto-switch (switch remains NORM) | N1 schedule per lever position · thrust remains constant at fixed lever |
| **Hard Alternate** | Manually selected ALTN | Thrust may vary to meet N1 command |

- Autothrottle remains connected in Soft and Hard Alternate
- Alternate schedule delivers **equal or greater thrust** than Normal for the same lever position
- **No thrust protection** in Alternate mode → overboost possible at full thrust lever

### Thrust Ramping

At takeoff the EEC increases thrust gradually to minimize fan blade stress at crosswind and low groundspeed.

> [!info] Maximum takeoff thrust may not be fully available until **65 kts**. Active on ground in Normal mode only.

### TCMA — Thrust Control Malfunction Accommodation

Protection against asymmetric idle thrust **on the ground**. EEC shuts down engine when:
- Aircraft on ground **and**
- Thrust lever at idle **and**
- Engine above idle without normal deceleration

→ <span class="c-amber">ENG FAIL L / R</span> (Caution) with aural beeper.

### TAP — Thrust Asymmetry Protection

Automatic thrust reduction of the operating engine following failure during T/O or G/A:

| Phase | TAP active when |
|:---|:---|
| Takeoff | Speed < v<sub>2</sub> |
| Go-Around | Speed < v<sub>REF</sub> (except light weight < 152.273 kg: slight reduction also at v<sub>REF</sub>) |

- At speed ≥ v<sub>2</sub>/v<sub>REF</sub>: TAP increases thrust again
- Available only in FBW Normal Mode + EEC Normal or Alternate mode
- Climb gradient with TAP active is **higher** than without TAP (additional asymmetry creates more drag than thrust gain)

### EEC Idle Selection

| Idle Type | Selected when |
|:---|:---|
| **Minimum Idle** | Ground + normal flight |
| **Approach Idle** | Flaps ≥ 25 **or** Gear DN (in flight) · reduces acceleration time for go-around |
| **Icing Idle** | Engine anti-ice selected ON |

Approach idle is maintained for **5 seconds after touchdown** or when **thrust reversers deploy**.

### ICA — Ice Crystal Anti-Ice Function

Automatic protection against ice crystal icing (ICI) · **above 30.000 ft** only:
- Activates for min. **30 min**, then in 15-min increments
- Terminates below **28.500 ft**
- Display: **ICA** on N1 display · N1/N2/EGT may fluctuate — normal
- Each engine independent
- After engine/EEC replacement: ICA may appear for up to **75 min** in any weather

---

## Engine Start & Ignition

**Autostart only**. 2 starter motors on the N2 accessory gearbox (electric).

**Power sources**: APU (normal) · Forward external power (alternate)

**Simultaneous start**: only when APU running + **both** APU starter/generators available.

Load shed always occurs during engine start.

**Start sequence:** START Selector → START + FUEL CONTROL → RUN · EEC opens fuel valve + igniters at correct N2 RPM · EEC commands starter cutout at idle · Selector → NORM.

### Autostart Abort Conditions (Ground — no retry)

> [!warning] Autostart Aborted — No Retry
> <div class="checklist">
> <div class="cl-item"><strong>Both starters failed</strong><span class="cl-dots"></span><strong>ABORT</strong></div>
> <div class="cl-item"><strong>No N1 rotation</strong><span class="cl-dots"></span><strong>ABORT</strong></div>
> <div class="cl-item"><strong>No oil pressure rise</strong><span class="cl-dots"></span><strong>ABORT</strong></div>
> </div>

### Autostart Correction Conditions (Ground — max. 3 attempts)

> [!info] Autostart Corrected — Max. 3 Attempts
> <div class="checklist">
> <div class="cl-item"><strong>Compressor stall · Hot start · Hung start</strong><span class="cl-dots"></span><strong>RETRY</strong></div>
> <div class="cl-item"><strong>High residual EGT · No EGT rise</strong><span class="cl-dots"></span><strong>RETRY</strong></div>
> <div class="cl-item"><strong>Loss of one starter</strong><span class="cl-dots"></span><strong>RETRY</strong></div>
> <div class="cl-item"><strong>Start time exceeds starter duty cycle</strong><span class="cl-dots"></span><strong>RETRY</strong></div>
> </div>

### In-Flight Start

- EICAS shows start envelope (airspeed range per flight level)
- **X-START**: airspeed too low for windmilling → starter assist required
- Autostart attempts continuously until pilot aborts (FUEL CONTROL → CUTOFF)
- EGT may fluctuate significantly during windmilling start — normal

### Engine Ignition

- 2 igniters per engine · EEC selects igniter for successive ground starts automatically
- **Both** igniters always used for in-flight starts
- Power source: DC (normal) · Standby (backup)

### Auto-Relight

Active whenever engine is ≤ idle with FUEL CONTROL in RUN:

| Event | EEC Response |
|:---|:---|
| Flameout / Rollback | Both igniters on until idle reached |
| Sub-idle stall | Fuel off for 1 sec → reduced schedule to idle |
| Heavy rain/hail ingestion | Both igniters on at flameout |

---

---

## Engine Oil System

- No minimum oil quantity limit → no crew procedure required for low oil quantity alone
- Low oil quantity: secondary display auto + inverted indication (black on white)
- Air/Oil HX activates at low fuel flow or high fuel temperatures

<div class="eicas-levels">

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title">ENG OIL FILTER L / R <span class="eicas-card-badge">ADVISORY</span></div>
  <div class="eicas-card-body">Oil filter clogged — bypass active</div>
</div>

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title">ENG OIL TEMP L / R <span class="eicas-card-badge">ADVISORY</span></div>
  <div class="eicas-card-body">Oil temperature in amber band</div>
</div>

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title">ENG OIL PRESS L / R <span class="eicas-card-badge">CAUTION</span></div>
  <div class="eicas-card-body">Oil pressure too low after start</div>
</div>

</div>

---

## Thrust Reverser

Hydraulically actuated fan-air reverser · available **on ground only**.

- Reverse lever can only be raised when forward lever is at **idle**
- EEC inhibits deployment when not on ground with engine running
- **Mechanical detent** in aisle stand: prevents full reverse thrust position until cowl is partially deployed (tactile feedback)

**On pulling to detent:**
- Autothrottle disconnects
- Auto speedbrakes deploy

**REV indication:**
- In transit → **REV amber** above N1 display
- Fully deployed → **REV green**

**Stowing:** Lever fully down → reverser stowed + locked · Forward lever blocked until reverse lever is fully down.

<div class="eicas-levels">

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title">ENG REV LIMITED L / R <span class="eicas-card-badge">ADVISORY</span></div>
  <div class="eicas-card-body">Reverser cannot deploy or limited to idle thrust</div>
</div>

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title">ENG REVERSER L / R <span class="eicas-card-badge">ADVISORY</span></div>
  <div class="eicas-card-body">Reverser system fault (on ground)</div>
</div>

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title">ENG REV AIR/GND <span class="eicas-card-badge">CAUTION</span></div>
  <div class="eicas-card-body">Air/ground logic for reverser inhibit failed</div>
</div>

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title">ENG REV COMMANDED L / R <span class="eicas-card-badge">CAUTION</span></div>
  <div class="eicas-card-body">Reverse lever not down in flight</div>
</div>

</div>

---

## Airborne Vibration Monitoring

Source displayed: **N1**, **N2**, or **BB** (broadband = average when source unknown).

- No certified limit — no specific crew procedures based on vibration alone
- At **4 units**: secondary display auto + inverted indication
- N1 vibration usually felt · N2 vibration often not perceptible
- Both typically respond to thrust lever adjustment

---

## Engine Failure Alert System

<div class="eicas-levels">

<div class="eicas-card eicas-card--red">
  <div class="eicas-card-title">ENG FAIL <span class="eicas-card-badge">WARNING</span></div>
  <div class="eicas-card-body">T/O 65 kts to 6 kts before v<sub>1</sub>: actual thrust &lt; commanded thrust<br>ENG FAIL on PFD + HUD<br>Voice "Engine Fail"<br>Master WARNING</div>
</div>

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title">ENG FAIL L / R <span class="eicas-card-badge">CAUTION</span></div>
  <div class="eicas-card-body">Engine drops unintentionally below idle</div>
</div>

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title">ENG THRUST L / R <span class="eicas-card-badge">CAUTION</span></div>
  <div class="eicas-card-body">Thrust deviates from command and does not recover (> 6 kts before v<sub>1</sub>)<br>Thrust arc amber<br>Master CAUTION</div>
</div>

</div>

---

> [!limit] Limitations
> <div class="cl-item"><strong>Engine oil — min. temp for start</strong><span class="cl-dots"></span><span>−40°C</span></div>
> <div class="cl-item"><strong>T/O and G/A thrust — time limit</strong><span class="cl-dots"></span><span>10 minutes</span></div>
> <div class="cl-item"><strong>Engine Start — CW >40 kts</strong><span class="cl-dots"></span><span>N1 ≥ 45% before brake release</span></div>
> <div class="cl-item"><strong>Engine Start — TW >5 kts + wind >35 kts</strong><span class="cl-dots"></span><span>N1 ≥ 45% before brake release</span></div>
> <div class="cl-item"><strong>Engine Start — wind >55 kts</strong><span class="cl-dots"></span><span>idle only</span></div>

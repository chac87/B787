# APU

2 APU Starter/Generators (ASGs) · Operation up to the **maximum certified altitude** · Generator output decreases with altitude.

## APU Start

**Starter:** L or R APU Starter · Starter selection is automatic · When powered by battery only, only the **right** starter is used.

**Power Supply:**

<div class="checklist">

<div class="cl-item"><strong>APUC · Air Inlet Door · Right Starter</strong><span class="cl-dots"></span><span>APU Battery</span></div>
<div class="cl-item"><strong>Fuel Shutoff Valve · DC Fuel Pump · Fire Detection</strong><span class="cl-dots"></span><span>Main Battery</span></div>
<div class="cl-item"><strong>Left + Right Starter</strong><span class="cl-dots"></span><span>Forward Ext. Power or Engine Generator</span></div>

</div>

**Fuel Supply:**

<div class="checklist">

<div class="cl-item"><strong>AC power available (Selector ON)</strong><span class="cl-dots"></span><span>Left AFT fuel pump auto-on (independent of flight deck switch)</span></div>
<div class="cl-item"><strong>No AC power or no AC pump pressure</strong><span class="cl-dots"></span><span>DC pump in left main tank – runs until APU Shutdown or AC available</span></div>
<div class="cl-item"><strong>No pumps required</strong><span class="cl-dots"></span><span>Ground + flight up to <strong>14.000 ft</strong></span></div>

</div>

**Start Sequence:**

<div class="checklist">

<div class="cl-item"><strong>Selector → START</strong><span class="cl-dots"></span><span>APUC commands Air Inlet Door open</span></div>
<div class="cl-item"><strong>Door fully open + CCS ready</strong><span class="cl-dots"></span><span>Starter engages</span></div>
<div class="cl-item"><strong>Sufficient RPM reached</strong><span class="cl-dots"></span><span>Ignition + Fuel on</span></div>
<div class="cl-item"><strong>≈ 50 % RPM</strong><span class="cl-dots"></span><strong>Starter Cutout</strong></div>
<div class="cl-item"><strong>95 % target RPM + 2 sec</strong><span class="cl-dots"></span><strong>APU ready</strong></div>

</div>

> [!info] Cold start from unpowered airplane (Battery Switch just turned ON): APUC waits until CCS applications are available – indicated when the CDU page is visible on the lower display.

> [!info] After an in-flight start: allow APU to run until oil temperature stabilizes – prevents thermal shock to bearings.

> [!warning] **Failed Start:** APU shuts down automatically → <span class="c-amber">APU SHUTDOWN</span> Advisory · Selector ON → OFF to reset.

**Start Attempts:** APU Battery supports **2 consecutive** attempts · After the 2nd failed attempt: **5-minute cooling pause** before the next attempt.

<div class="eicas-levels">

<div class="eicas-card eicas-card--white">
  <div class="eicas-card-title">APU RUNNING <span class="eicas-card-badge">MEMO</span></div>
  <div class="eicas-card-body">APU ready for use</div>
</div>

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title">APU SHUTDOWN <span class="eicas-card-badge">ADVISORY</span></div>
  <div class="eicas-card-body">APU automatically shut down · Selector ON → OFF to reset</div>
</div>

</div>

---

## APU Automatic Start

In flight, the APU starts automatically when **≥ 3 Engine Generators** fail – regardless of Selector position.

<div class="checklist">

<div class="cl-item"><strong>To shut down APU after normal power is restored</strong><span class="cl-dots"></span><span>Selector → ON, then → OFF</span></div>
<div class="cl-item"><strong>To shut down APU with auto-start condition still active</strong><span class="cl-dots"></span><span>APU Fire Switch only</span></div>

</div>

---

## APU Shutdown

Selector → OFF → **2-minute cooldown** (EICAS Memo: **APU COOLDOWN**) · Cancellable at any time by Selector → ON.

After cooldown: overspeed simulation tests overspeed and fuel shutoff protection → Fuel off → APU stops → Spar Valve closes → Air Inlet Door closes at **15 % RPM**.

> [!info] **No cooldown** on automatic shutdown (any fault) or manual shutdown with APU LIMIT displayed.

<div class="eicas-levels">

<div class="eicas-card eicas-card--white">
  <div class="eicas-card-title">APU COOLDOWN <span class="eicas-card-badge">MEMO</span></div>
  <div class="eicas-card-body">APU in cooldown cycle</div>
</div>

</div>

---

## APU Operating Modes

<div class="checklist">

<div class="cl-item"><strong>Attended</strong><span class="cl-dots"></span><span>Engine start/running <strong>or</strong> in flight</span></div>
<div class="cl-item"><strong>Unattended</strong><span class="cl-dots"></span><span>All other ground configurations</span></div>

</div>

### Attended Mode

<div class="eicas-levels">

<div class="eicas-card eicas-card--red">
  <div class="eicas-card-title">Immediate Shutdown <span class="eicas-card-badge">NO COOLDOWN</span></div>
  <div class="eicas-card-body">APU Fire · Inlet Overtemperature · Overspeed · Loss of Overspeed Protection · APUC Failure · Speed Droop · Start Failure (no rotation / no acceleration / no light-off) · Air Inlet Door failed closed</div>
</div>

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title">APU LIMIT – APU Continues Running <span class="eicas-card-badge">CAUTION</span></div>
  <div class="eicas-card-body">High EGT · High Oil Temperature · Low Oil Pressure – APU continues operating, no automatic shutdown</div>
</div>

</div>

### Unattended Mode

All Attended faults apply. The following additional faults also trigger an **immediate shutdown**:

<div class="eicas-levels">

<div class="eicas-card eicas-card--red">
  <div class="eicas-card-title">Additional Immediate Shutdown Faults <span class="eicas-card-badge">NO COOLDOWN</span></div>
  <div class="eicas-card-body">High EGT · Loss of EGT Signal · Low Oil Pressure · High Oil Temperature · APU S/G Oil Filter Approaching Bypass</div>
</div>

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title">APU SHUTDOWN <span class="eicas-card-badge">ADVISORY</span></div>
  <div class="eicas-card-body">APU automatically shut down – both Attended and Unattended mode</div>
</div>

</div>

---
title: Fuel Non-Normals
tags: [non-normal, fuel]
---

# Fuel Non-Normals

## Fuel Leak

> [!info]- Fuel Leak Suspected — Indications
> - Visual observation of fuel spray
> - Total fuel quantity decreasing at abnormal rate
> - An engine has excessive fuel flow
> - FUEL DISAGREE message
> - FUEL IMBALANCE message
> - FUEL QTY LOW message
> - INSUFFICIENT FUEL message

<div class="flow">
  <div class="flow-node fn-start">FUEL LEAK SUSPECTED</div>
  <div class="flow-vline"></div>
  <div class="flow-col">
    <div class="flow-row">
      <div class="flow-node fn-q">Unexpected fuel transfer?</div>
      <span class="flow-arrow">──YES──▶</span>
      <div class="flow-node fn-action">FUEL TRANSFER NNC</div>
    </div>
    <div class="flow-vline"></div>
    <span class="flow-label">NO</span>
    <div class="flow-vline"></div>
  </div>
  <div class="flow-col">
    <div class="flow-row">
      <div class="flow-node fn-q">Leak in Engine or Main Tank?</div>
      <span class="flow-arrow">──NO──▶</span>
      <div class="flow-node fn-action">Check center tank</div>
    </div>
    <div class="flow-vline"></div>
    <span class="flow-label">YES</span>
    <div class="flow-vline"></div>
  </div>
  <div class="flow-node fn-action">Shut down engine</div>
  <div class="flow-vline"></div>
  <div class="flow-col">
    <div class="flow-row">
      <div class="flow-node fn-q">Main tank fuel level stable?</div>
      <span class="flow-arrow">──YES──▶</span>
      <div class="flow-node fn-result">Engine leak — engine stays shut down</div>
    </div>
    <div class="flow-vline"></div>
    <span class="flow-label">NO</span>
    <div class="flow-vline"></div>
    <div class="flow-node fn-result">Main tank leak — engine may be restarted</div>
  </div>
</div>

---

## Fuel Jettison

> [!caution] Fuel Jettison must be considered if…
> - **Stopping distance or G/A performance** is a concern
> - **Autoland** is required
>
> → Evaluate same or higher degree of safety
> → s. auch [[Non Normals/Abnormal Emergency Procedures|Overweight Landing]]

> [!info]- Requirements
> **OM-A 8.3.15.1**
> - In close coordination with ATC
> - \> 6000 ft AGL
> - Not in holding pattern
> - Clear of cities and towns
> - Away from thunderstorms
> - A flight report must be filed
>
> **FCTM B787:** If adequate time is available — ensure adequate weather minimums
>
> **OM-B 1-20-12-1:** Do not jettison fuel at Flaps 30

> [!info]- System Notes
> - Inhibited on GND
> - Jettison rate: Main tanks **500 kg/min** · Center tank **1200 kg/min**
> - At least **3900 kg** of fuel per main tank must remain

### Unannunciated Checklist

<div class="checklist">

<div class="cl-item"><strong>FUEL JETTISON ARM switch</strong><span class="cl-dots"></span><strong>ARMED</strong></div>
<div class="cl-sub">Do not jettison fuel at flap settings listed on the FUEL JETTISON control panel placard</div>

<div class="cl-item"><strong>FUEL TO REMAIN selector</strong><span class="cl-dots"></span><strong>PULL ON, set manually</strong></div>
<div class="cl-sub">Change FUEL TO REMAIN value if required before pulling selector</div>

<div class="cl-item"><strong>FUEL JETTISON NOZZLE valve switches (both)</strong><span class="cl-dots"></span><strong>ON</strong></div>

</div>

**When fuel jettison is complete:**

<div class="checklist">

<div class="cl-item"><strong>FUEL JETTISON NOZZLE valve switches (both)</strong><span class="cl-dots"></span><strong>OFF</strong></div>

<div class="cl-item"><strong>FUEL TO REMAIN selector</strong><span class="cl-dots"></span><strong>OFF</strong></div>

<div class="cl-item"><strong>FUEL JETTISON ARM switch</strong><span class="cl-dots"></span><strong>OFF</strong></div>

</div>

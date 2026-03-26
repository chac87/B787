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

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryTextColor': '#1E2A44', 'lineColor': '#8A7F6B', 'edgeLabelBackground': '#F1EDE3'}}}%%
flowchart LR
    A["FUEL LEAK SUSPECTED"] --> B{"Unexp. fuel xfer?"}
    B -->|YES| C["FUEL TRANSFER NNC"]
    B -->|NO| D{"Engine or Main Tank?"}
    D -->|NO| E["Check center tank"]
    D -->|YES| F["Shut down engine"] --> G{"Main tank level stable?"}
    G -->|YES| H["Engine leak — Eng stays off"]
    G -->|NO| I["Main tank leak — Eng may restart"]

    classDef decision fill:#e8e0d0,stroke:#8A7F6B,color:#1E2A44
    classDef action fill:#f1ede3,stroke:#3E5FA8,color:#1E2A44
    classDef result fill:#dce8f0,stroke:#3E5FA8,color:#1E2A44
    classDef start fill:#d4e0f5,stroke:#3E5FA8,color:#1E2A44

    class B,D,G decision
    class C,E,F action
    class H,I result
    class A start
```

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

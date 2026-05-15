---
title: Electrical Power System
tags: [systems, electrical]
---

# Electrical Power System

![[elec distr.webp]]
![[elec ovhd.webp]]

## Power Sources

> [!info]- 4 Engine Starter/Generators (VFSGs)
> <div class="cl-item"><strong>Output</strong><span class="cl-dots"></span><span>235V AC</span></div>
> <div class="cl-item"><strong>Anzahl</strong><span class="cl-dots"></span><span>2 VFSGs pro Triebwerk (L1/L2 und R1/R2), direkt an Engine Gearboxes</span></div>
>
> Beim Engine Start agieren beide als Starter Motors; nach dem Start liefern sie Strom für die Main AC Buses.

> [!info]- 2 APU Starter/Generators (ASGs)
> <div class="cl-item"><strong>Output</strong><span class="cl-dots"></span><span>235V AC – nur Strom, keine Bleed Air</span></div>
> <div class="cl-item"><strong>Max. Altitude</strong><span class="cl-dots"></span><span>FL 431</span></div>
> <div class="cl-item"><strong>APU Start max. Altitude</strong><span class="cl-dots"></span><span>14.000 ft (ohne AC/DC Pumpen)</span></div>
> <div class="cl-item"><strong>Fuel Feed</strong><span class="cl-dots"></span><span>Left manifold via AC fuel pump, oder dedicated DC fuel pump (left main tank)</span></div>
> <div class="cl-item"><strong>APU Start</strong><span class="cl-dots"></span><span>Switch to START → spring back to ON</span></div>
> <div class="cl-item"><strong>APU Battery</strong><span class="cl-dots"></span><span>2 consecutive start attempts, dann 5 min warten</span></div>
>
> Für den APU Start wird automatisch nur ein Generator als Starter Motor ausgewählt. Wird der Start nur über die APU Battery durchgeführt, wird immer der **rechten** Starter genutzt.
>
> Im Flug liefert einer oder beide Generatoren Supplemental Power je nach Electrical Load Requirements.
>
> **Dual Engine Fail** (3+ Generators fail) → APU starts automatically
>
> **Unattended Mode** (at the gate, no engines running): APU auto-shutdown for defined failures (z.B. APU fire)
>
> **Attended Mode** (engine starting/started, in flight):
> - High EGT / high oil temperature / low oil pressure → EICAS <span class="c-amber">**APU LIMIT**</span>
> - All other faults → auto shutdown

> [!info]- External Power
> <div class="cl-item"><strong>FWD System</strong><span class="cl-dots"></span><span>2 Receptacles – generelle Ground Operations</span></div>
> <div class="cl-item"><strong>AFT System</strong><span class="cl-dots"></span><span>1 Receptacle – primär zur Unterstützung des FWD Systems</span></div>
>
> - **1 FWD Anschluss** aktiv → Ground Handling Mode
> - **2 FWD Anschlüsse** aktiv → External Power On Mode (minimiert Load Shedding)
>
> AFT System wird genutzt, wenn bei nicht verfügbarer APU das rechte Triebwerk zuerst gestartet wird.

> [!info]- Batteries
> <div class="cl-item"><strong>Main Battery</strong><span class="cl-dots"></span><span>Airplane Power-up, APU Start, Towing, Electric Braking; Notstrom für Capt. Flight Instruments bis RAT Deployment</span></div>
> <div class="cl-item"><strong>APU Battery</strong><span class="cl-dots"></span><span>APU Start am Boden, Navigation Lights – operates automatically</span></div>

> [!info]- RAT (Ram Air Turbine)
> <div class="cl-item"><strong>Funktion</strong><span class="cl-dots"></span><span>Emergency hydraulic and electric power</span></div>
> <div class="cl-item"><strong>Elektrischer Output</strong><span class="cl-dots"></span><span>Reduziert bei < 120 kts</span></div>
> <div class="cl-item"><strong>Manual Deployment</strong><span class="cl-dots"></span><span>Push button and hold for 1 sec → EICAS <span class="c-amber">RAT UNLOCKED</span></span></div>
>
> **Automatisches Deployment bei:**
> - Dual Engine Fail
> - 3 Hydraulic Systems lost
> - Loss of power to all instruments
> - Loss of all 4 EMPs (Electric Motor Pumps)
>
> Keine Zeit- oder Höhenbeschränkungen für den Einsatz. → Siehe auch [[Hydraulic System#RAT|Hydraulic System – RAT]]

> [!info]- PMGs & PMAs
> <div class="cl-item"><strong>3 Engine Driven PMGs</strong><span class="cl-dots"></span><span>Primärstrom für die Flight Control Electronics</span></div>
> <div class="cl-item"><strong>2 Engine Driven PMAs</strong><span class="cl-dots"></span><span>Primärstrom für die Electronic Engine Control (EEC)</span></div>

## Power Distribution

Systems that use electrical power: Main engine start, Pressurization / Air conditioning, Wing anti-ice, Horizontal stabilizer trim, 2 pairs of spoilers, Wheel brake systems.

> [!info]- 235V AC System
> <div class="cl-item"><strong>Main AC Buses</strong><span class="cl-dots"></span><span>4 Buses im Aft E/E Bay – verteilen den Hochspannungsstrom</span></div>

> [!info]- 115V AC & 28V DC Systems
> <div class="cl-item"><strong>Quelle</strong><span class="cl-dots"></span><span>Power Conversion Devices aus dem 235V AC System (oder direkt External Power am Boden)</span></div>
> <div class="cl-item"><strong>28V DC Hauptnutzer</strong><span class="cl-dots"></span><span>4 Electrical Brake Power Supply Units</span></div>

> [!info]- Large Motor Power Distribution System
> <div class="cl-item"><strong>Funktion</strong><span class="cl-dots"></span><span>Speist große Lasten über Motor Controllers (z.B. Startvorgänge)</span></div>
> <div class="cl-item"><strong>Kühlung</strong><span class="cl-dots"></span><span>Power Electronics Cooling System (PECS) – aktiv sobald Triebwerke, APU oder FWD External Power laufen</span></div>

## Operation Modes

| Mode | Condition |
|:---|:---|
| **Towing Power Mode** | Towing Power sw ON, Main Battery OFF |
| **Battery Only Mode** | Battery sw ON only |
| **Ground Handling Mode** | 1 FWD Ext Pwr AVAIL |
| **Ground Service Mode** | Ground Service sw ON (while in Ground Handling Mode) |
| **External Power On Mode** | At least 1 FWD Ext Pwr ON |
| **In-Air RAT Only Mode** | Essenzielle Flight Controls, Navigation und Kommunikation bei Stromausfall |

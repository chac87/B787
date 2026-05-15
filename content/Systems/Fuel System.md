---
title: Fuel System
tags: [systems, fuel]
---

# Fuel System

<div style="display:flex;gap:0.75rem;margin-bottom:1rem;align-items:flex-start;flex-wrap:wrap">
  <img src="/Bilder/fuel%20syn.webp" style="max-width:50%;min-width:280px;flex:1;border-radius:6px" />
  <img src="/Bilder/fuel%20ovhd.webp" style="max-width:50%;min-width:280px;flex:1;border-radius:6px" />
</div>

![[fuel system.webp]]

<div class="eicas-levels">

<div class="eicas-card eicas-card--white">
  <div class="eicas-card-title">System Architecture</div>
  <div class="eicas-card-body">3 tanks: Left Main · Right Main · Center · Surge tanks outboard of each main tank · Refuel station outboard of left engine</div>
</div>

</div>

## Fuel Pumps

> [!info]- AC Pumps
> - **2 AC-powered pumps** in each tank (L main, R main, Center) – 6 pumps total
> - A single pump can supply sufficient fuel to operate **one engine under all conditions**
> - Center tank pumps are **override/jettison pumps** with higher output pressure → center fuel is used before wing tank fuel
> - When less than all generators are operating, pumps may be **load shed** automatically – indicated by PRESS light illuminated and `LOAD SHED` label on the fuel synoptic

> [!info]- DC Pump
> - **Left main tank only** – no controls or cockpit indicators, status visible on fuel synoptic only
> - Runs automatically to supply APU fuel when AC power is unavailable and APU selector is ON


> [!info] Center Tank Scavenge
> Activates automatically when either main tank quantity is below ~16.000 kg **and** center tank pumps are OFF. Transfers remaining center tank fuel to the main tanks.
> Inhibited if the engine is operating on suction feed.

## APU Fuel Feed

APU fuel is supplied from the **left fuel manifold**.

<div class="checklist">

<div class="cl-item"><strong>AC power available</strong><span class="cl-dots"></span><strong>Left aft AC pump runs automatically</strong></div>
<div class="cl-sub">Runs regardless of fuel pump switch position · DC pump turns off</div>
<div class="cl-item"><strong>AC power unavailable</strong><span class="cl-dots"></span><strong>DC pump runs automatically</strong></div>
<div class="cl-sub">APU selector must be ON · any AC pump supplying the left manifold also works</div>

</div>

## Suction Feed

Each engine can draw fuel from its corresponding main tank through a suction feed line, bypassing the pumps.

> [!warning] Altitude Risk
> As the aircraft climbs, dissolved air is released from fuel due to decreasing air pressure. This air may collect in the suction feed line and restrict fuel flow – at high altitude this can cause **thrust deterioration or engine flameout**.
> The dissolved air eventually depletes after reaching cruise altitude. Depletion time depends on altitude, fuel temperature, and fuel type.

## Fuel Crossfeed vs. Fuel Balancing

<div class="eicas-levels">

<div class="eicas-card eicas-card--white">
  <div class="eicas-card-title">Fuel Crossfeed</div>
  <div class="eicas-card-body">Opens the crossfeed valve – connects the left and right fuel supply manifolds.<br>Pump pressure from one main tank feeds both engines (or the opposite engine).<br><strong>No fuel is transferred into the opposite tank.</strong></div>
</div>

<div class="eicas-card eicas-card--white">
  <div class="eicas-card-title">Fuel Balance System</div>
  <div class="eicas-card-body">Physically pumps fuel from the fuller main tank into the emptier one.<br>Uses the defuel/jettison valve (fuller tank) → inboard refuel valve (emptier tank).<br>Activated via the BALANCE switch – automatic or manual.</div>
</div>

</div>

> [!info]- Manual Balancing – Practical Tip
> If the Fuel Balance System is inhibited or unavailable, use the crossfeed valve to manually balance:
> - Open the crossfeed valve
> - Turn off the fuel pumps of the tank with the **lower** quantity
> - Both engines are now fed from the fuller tank – quantities equalize over time
>
> Fuel flows exclusively to the engines – no transfer into the opposite tank occurs.

## Fuel Jettison

Pumps used: **L + R main tank boost pumps** and **center tank override/jettison pumps**.

- **ARM switch → ARMED** – prepares the system; auto-sets TO REMAIN = MLW fuel quantity
- **TO REMAIN selector** – pull and rotate to manually adjust the quantity to remain
- **L / R NOZZLE → ON** – jettison starts; isolation valves open, fuel flows overboard
- Jettison stops automatically when TOTAL FUEL = FUEL TO REMAIN (isolation valves close)

<div class="eicas-levels">

<div class="eicas-card eicas-card--white">
  <div class="eicas-card-title">Key Limits</div>
  <div class="eicas-card-body">Min. fuel per main tank after jettison: <strong>3.900 kg</strong> (7.800 kg total)<br>Not permitted with Flaps 30<br>Center tank pumps must be ON</div>
</div>

</div>

→ [[Non Normals/Non-Normal Checklists/Fuel Jettison|NNC: Fuel Jettison]]

## Nitrogen Generation System (NGS)

Provides automatic, full-time flammability protection. Generates nitrogen-enriched air that displaces fuel vapors in all tanks, minimising flammability during flight and ground operations.

No flight deck controls or indications – the system operates entirely automatically.

---

> [!info] Un-annunciated Fuel Checklists
> - [[Non Normals/Non-Normal Checklists/Fuel Leak|Fuel Leak]]
> - [[Non Normals/Non-Normal Checklists/Fuel Jettison|Fuel Jettison]]

---

## Fuel Limitations

> [!limit] Limitations
> <div class="cl-item"><strong>Density</strong><span class="cl-dots"></span><span>6.3 – 7.1 lb/gal</span></div>
> <div class="cl-item"><strong>Max. fuel temperature – T/O</strong><span class="cl-dots"></span><span>+ 49 °C</span></div>
> <div class="cl-item"><strong>Min. fuel temperature – T/O</strong><span class="cl-dots"></span><span>− 29 °C</span></div>
> <div class="cl-item"><strong>Max. fuel temperature – in flight</strong><span class="cl-dots"></span><span>+ 65 °C (TS-1: + 57 °C at or above 35.000 ft)</span></div>
> <div class="cl-item"><strong>Min. fuel temperature – in flight</strong><span class="cl-dots"></span><span>− 42 °C or 3 °C above freeze point (whichever is higher)</span></div>
> <div class="cl-item"><strong>Tank capacity Main L / R</strong><span class="cl-dots"></span><span>17.777 kg each</span></div>
> <div class="cl-item"><strong>Tank capacity Center</strong><span class="cl-dots"></span><span>71.946 kg</span></div>
> <div class="cl-item"><strong>Loading – main tanks full when center loaded</strong><span class="cl-dots"></span><span>Exception: center ≤ 10.000 kg if ZFW + center ≤ MZFW</span></div>
> <div class="cl-item"><strong>Imbalance – total fuel > 30.980 kg</strong><span class="cl-dots"></span><span>≤ 680 kg</span></div>
> <div class="cl-item"><strong>Standard Extra Fuel Flow</strong><span class="cl-dots"></span><span>4.800 kg/h</span></div>
> <div class="cl-item"><strong>Imbalance – total fuel ≤ 19.005 kg</strong><span class="cl-dots"></span><span>≤ 1.133 kg</span></div>
> <div class="cl-item"><strong>Center tank usage</strong><span class="cl-dots"></span><span>use center first when > 7.300 kg · switch at FUEL LOW CENTER</span></div>
> <div class="cl-item"><strong>Jettison</strong><span class="cl-dots"></span><span>not with Flaps 30</span></div>
> <div class="cl-item"><strong>Kathon FP 1.5</strong><span class="cl-dots"></span><span>not permitted</span></div>
>
> | Fuel Type | Freeze Point |
> |:---|:---:|
> | JET A-1 | −47°C |
> | JET A | −40°C |
> | JP-8 | −47°C |
> | JP-5 | −46°C |
> | TS-1 | −50 to −60°C |

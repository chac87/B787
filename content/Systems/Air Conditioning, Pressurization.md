---
title: Air Conditioning, Pressurization
tags: [systems, air-conditioning, pressurization]
---

# Air Conditioning, Pressurization

## Air Conditioning

<div class="img-row">
  <img src="/Bilder/air con ovhd.webp" alt="Air Conditioning Overhead Panel">
  <img src="/Bilder/air syn.webp" alt="Air Conditioning Synoptic">
</div>

### Packs

Outside air enters through the CAC inlets, is compressed and sent warm to the packs. The packs cool the air and deliver it to the air distribution manifold. Recirculation fans mix filtered cabin air with fresh outside air to reduce the total outside air required.
<div class="cl-item"><strong>4 CACs</strong><span class="cl-dots"></span><span>2 per pack · 1 sufficient for full pack operation</span></div>
<div class="cl-item"><strong>2 Packs</strong><span class="cl-dots"></span><span>Cool compressed air and supply the distribution manifold</span></div>
<div class="cl-item"><strong>3 Recirculation Fans</strong><span class="cl-dots"></span><span>Increase cabin airflow and reduce outside air consumption</span></div>
<div class="cl-item"><strong>Trim Air</strong><span class="cl-dots"></span><span>Fine-tunes individual zone temperatures after pack outlet</span></div>

<div class="cl-item"><strong>No bleed air</strong><span class="cl-dots"></span><span>Fully electric – Engine Anti-Ice (EAI) is the only system using bleed air</span></div>
<div class="cl-item"><strong>Temperature zones</strong><span class="cl-dots"></span><span>7 – Flight Deck + 6 cabin zones (A/B include sub-zones A1/B1, not visible on synoptic)</span></div>
<div class="cl-item"><strong>Deflector Doors</strong><span class="cl-dots"></span><span>Active on ground + landing (debris protection) · retraction possible at OAT &lt; 2°C or &gt; 35°C</span></div>

#### Ground Operation

<div class="cl-item"><strong>Normal</strong><span class="cl-dots"></span><span>Both packs AUTO</span></div>
<div class="cl-item"><strong>APU as power source</strong><span class="cl-dots"></span><span>1 CAC per pack</span></div>
<div class="cl-item"><strong>Cold weather operation</strong><span class="cl-dots"></span><span>Both CACs per pack active</span></div>
<div class="cl-item"><strong>3-CAC operation</strong><span class="cl-dots"></span><span>Automatically activated 2 min after engine start (both engines)</span></div>
<div class="cl-item"><strong>External air conditioning</strong><span class="cl-dots"></span><span>Switch packs + lower recirculation fans OFF first</span></div>

> [!info] Engine Start
> All CACs shut down during start sequence · PACK L / PACK R inhibited. Packs restart no earlier than **2 min after engine start initiation**.

#### Non-Normal / Standby Cooling

> [!info]- Pack Failure & Standby Cooling
> **Pack failure:** Automatic shutdown on CAC surge, overheat, or severe fault → EICAS <span class="c-amber">**PACK L / R**</span> (Advisory). Reset possible with **AIR COND RESET Switch** at ≤ 34.000 ft.
>
> > [!info] Reset above 34.000 ft not recommended – CACs near surge margin. Reset may cause the operative pack to shut down.
>
> **Standby Cooling Mode:** Automatically activated on certain internal faults → EICAS <span class="c-amber">**PACK MODE L / R**</span> (Advisory) + AIR synoptic: <span class="c-amber">**STBY COOLING**</span>. Reduced cooling capacity possible at low altitudes / high OAT.
>
> **Go-around with OEI + Slat Autogap:** Both packs may briefly load-shed → <span class="c-amber">**PACK L+R**</span> momentarily displayed. No crew action required.
>
> | EICAS | Level | Meaning |
> |:---|:---:|:---|
> | <span class="c-amber">PACK L / R</span> | <span class="c-amber">Advisory</span> | Pack failed (surge, overheat, fault) |
> | <span class="c-amber">PACK MODE L / R</span> | <span class="c-amber">Advisory</span> | Pack in Standby Cooling Mode |


### Air Distribution

![[air recirculation.webp]]

The **Flight Deck** receives 100% conditioned outside air (with one pack OFF + Lower Recirc Fan ON: some recirculated air is also supplied). The **cabin** receives a mix of outside air and recirculated air. Recirculation fans filter cabin air through HEPA filters and return it to the distribution system.

> [!caution] Recirculation fans must remain ON during hot weather operations – unless a Non-Normal Checklist requires OFF.

**Recirc Fans OFF** does **not** increase the fresh air ratio – it only reduces total airflow.

> [!info]- Zonal Dryer (FWD + AFT)
> Dehumidification in the crown area – automatic when electrical power is available.

> [!info]- Alternate Ventilation System (AVS)
> Used on failure of both packs. Switch → **ALTN** partially opens FWD + AFT Outflow Valves → fresh air is drawn into the distribution system. Effective in unpressurized flight only.


### Temperature Control

<div class="cl-item"><strong>CABIN TEMP Selector</strong><span class="cl-dots"></span><span>18 – 29 °C</span></div>
<div class="cl-item"><strong>Zone offset</strong><span class="cl-dots"></span><span>± 6 °C per cabin zone via Cabin Management System (within 18 – 29 °C)</span></div>
<div class="cl-item"><strong>Flight Deck Temp Selector</strong><span class="cl-dots"></span><span>Independent · 18 – 29 °C</span></div>
<div class="cl-item"><strong>Pack outlet temp</strong><span class="cl-dots"></span><span>Determined by coldest zone · Trim Air heats individual zones</span></div>
<div class="cl-item"><strong>Selector failure</strong><span class="cl-dots"></span><span>Pack maintains last set temperature or 24 °C (average)</span></div>

> [!info]- Loss of Trim Air (L or R)
> All zones regulated to average target temperature. Flight deck temperature remains 18 – 29 °C – but may become uncomfortable. Workaround: adjust CABIN TEMP Selector.


### Cargo Heat

#### Forward Cargo

<div class="cl-item"><strong>AUTO target</strong><span class="cl-dots"></span><span>21 °C</span></div>
<div class="cl-item"><strong>Heat source</strong><span class="cl-dots"></span><span>Warm air from forward equipment cooling system</span></div>
<div class="cl-item"><strong>Cold weather</strong><span class="cl-dots"></span><span>Electric heater supplements when more heat is necessary</span></div>
<div class="cl-item"><strong>Live animals</strong><span class="cl-dots"></span><span>Permitted – ventilation and heat supplied in AUTO</span></div>

#### Bulk Cargo

<div class="cl-item"><strong>AUTO target</strong><span class="cl-dots"></span><span>≈ 21 °C – maintained automatically</span></div>
<div class="cl-item"><strong>Heat source</strong><span class="cl-dots"></span><span>Supply fan → electric heater → supply valve → compartment</span></div>
<div class="cl-item"><strong>Live animals</strong><span class="cl-dots"></span><span>Permitted when switch in AUTO</span></div>

#### Aft Cargo

<div class="cl-item"><strong>Temperature control</strong><span class="cl-dots"></span><span>NOT controlled from flight deck – only kept above freezing</span></div>
<div class="cl-item"><strong>Heat source</strong><span class="cl-dots"></span><span>Heated air below floor from aft equipment cooling system</span></div>
<div class="cl-item"><strong>Live animals</strong><span class="cl-dots"></span><span>Not permitted</span></div>


## Pressurization

![[press ovhd.webp]]

<div class="cl-item"><strong>CPCS</strong><span class="cl-dots"></span><span>Cabin Pressure Control System – fully automatic via FMC data + ambient pressure</span></div>
<div class="cl-item"><strong>Outflow Valves</strong><span class="cl-dots"></span><span>2 (FWD + AFT) – outflow normally split equally · each valve alone is sufficient</span></div>
<div class="cl-item"><strong>Relief Valves</strong><span class="cl-dots"></span><span>Positive + Negative – protect structure against extreme differential pressure</span></div>
<div class="cl-item"><strong>Crew action</strong><span class="cl-dots"></span><span>None required beyond FMC data entry</span></div>

### CPCS Automatic Operation

| Phase | Cabin Altitude |
|:---|:---|
| Takeoff | Small positive pressurization prior to rotation |
| Climb | Climbs on schedule (climb rate + FMC cruise alt)<br>with VNAV off: constant when aircraft altitude is constant |
| Cruise | Normal ≤ **6.000 ft**<br>Degraded operation (pack/CAC failure) up to **8.000 ft** |
| Descent | Descends to slightly below FMC landing alt<br>Baro correction via Captain Altimeter |
| Touchdown | Both Outflow Valves open fully → cabin depressurizes |

> [!info] Special Cases
> **High Altitude Takeoff** (field > 8.000 ft): Cabin descends to target cabin altitude during climb.
>
> **High Altitude Landing** (destination > 8.000 ft): Cabin altitude climbs to 6.000 ft after takeoff → holds → climbs to target landing altitude in time.
>
> **Default Cruise Alt** (FMC not available): **43.000 ft**

> [!info] Loss of Landing Altitude
> FMC Landing Altitude not available + MAN not set → EICAS <span class="c-amber">**LANDING ALTITUDE**</span> (Advisory) → system assumes **2.000 ft** as landing altitude.

> [!info]- Loss of Cabin Pressurization
> On pressure loss: Outflow Valves close → pressure maintained. Valves remain closed until cabin altitude limit is reached:
>
> | T/O – Landing Altitude | Cabin Altitude Limit |
> |:---|:---:|
> | < 9.500 ft | 11.500 ft |
> | 9.500 – 14.000 ft | 14.500 ft |
>
> Once limit is reached: Outflow Valves open fully for the remainder of the flight.
>
> > [!warning] Do not manually close Outflow Valves during descent.
>
> CPCS prevents cabin altitude > **15.000 ft** for any probable system failure.

> [!info]- Manual Operation
> Activation: **OUTFLOW VALVE Switches → MAN** + hold OUTFLOW VALVE MANUAL Switch (OPEN / CLOSE).
>
> <div class="cl-item"><strong>Valve position</strong><span class="cl-dots"></span><span>Visible on EICAS</span></div>
> <div class="cl-item"><strong>EICAS not available</strong><span class="cl-dots"></span><span>Hold switch 30 sec → valve travels from fully open/closed to desired position</span></div>
>
> **LANDING ALTITUDE Selector (MAN):** Pull selector → FMC Landing Altitude deactivated · pressurization shown on EICAS. Range: **−2.000 to +14.000 ft**.
>
> | EICAS | Level | Meaning |
> |:---|:---:|:---|
> | <span class="c-amber">LANDING ALTITUDE</span> | <span class="c-amber">Advisory</span> | Landing altitude not available from FMC – system uses 2.000 ft |


### Non-Normals

See [[Air, Pressurization Non-Normals]]

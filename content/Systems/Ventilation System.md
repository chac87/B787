# Ventilation System

The ventilation system uses recirculated cabin air to cool electronic and electrical components. The heated exhaust air is routed to the cargo heat system or discharged overboard. Two fluid cooling systems provide additional cooling: PECS and ICS.

## Equipment Cooling — FWD / AFT

Both systems are identical in design. Each has 2 supply fans (primary + backup) — the backup starts automatically if the primary fails.

| System | Cools | Exhaust to |
|:---|:---|:---|
| **FWD Equipment Cooling** | Flight deck + FWD E/E racks | Overboard vent valve or FWD cargo (if heating required) |
| **AFT Equipment Cooling** | AFT E/E racks | Overboard exhaust valve or AFT cargo |

### Override Mode

Automatic activation (FWD or AFT) when:

| Condition |
|:---|
| EQUIP COOLING switch → OVRD (manual) |
| Both supply fans failed (in flight) |
| Both flow sensors failed |
| Low airflow detected (in flight) |
| Overheat detected (in flight) |
| Smoke in the equipment cooling system / cargo area |
| CARGO FIRE ARM switch → ARMED |
| *Additionally AFT only:* Smoke in the AFT equipment ventilation system |

**Override effect:** Cargo heat + overboard vent valves close · fans off · override valve opens. Cabin differential pressure pushes air in reverse through E/E racks → overboard venturi.

> [!info] Override cooling is sufficient in cruise. Effectiveness decreases during descent (less ΔP).

**In flight:**
- FWD OVRD: assists **smoke removal from the flight deck**
- AFT OVRD: assists **smoke removal from the cabin**

| EICAS | Level | Description |
|:---|:---:|:---|
| <span class="c-amber">EQUIP COOLING FWD</span> | <span class="c-amber">Advisory</span> | FWD equipment cooling inoperative (on ground + horn in wheel well) |
| <span class="c-amber">EQUIP COOLING AFT</span> | <span class="c-amber">Advisory</span> | AFT equipment cooling inoperative (on ground + horn in wheel well) |
| <span class="c-amber">EQUIP OVBD VLV AFT</span> | <span class="c-amber">Advisory</span> | AFT overboard valve open — pressurization may cause duct failure + cabin pressure loss |

> [!warning] With EQUIP OVBD VLV AFT: do **not** pressurize the cabin — duct failure and cabin pressure loss possible.

---

## Lavatory / Galley Ventilation

Supplies ventilation air to lavatories and galleys · controls smoke in lavatories and optional crew rests. Also serves as secondary heat sink for PECS and drives cabin temperature sensors.

---

## Fluid Cooling Systems

### PECS — Power Electronics Cooling System

Liquid cooling for the large motor power distribution system (AFT E/E) and the ICS motor controllers.

- 2 independent loops · each with 1 pump package with **2 redundant pumps**
- Coolant temperature: **27 °C** (normal operation)
- Status on **STATUS page** (fluid quantity + status per loop)
- With only one external FWD power source: only 1 loop visible on EICAS
- No flight deck controls — fully automatic

> [!caution] PECS requires a **cooldown period** after pack and hydraulic EMP shutdown to dissipate residual heat from the liquid-cooled LRUs. Otherwise, damage to the components and coolant may occur.

### ICS — Integrated Cooling System

Central refrigeration system: cools **galley carts** + supports cooling of **recirculated cabin air** (lower recirculation ducts). Integrated with air conditioning + PECS for overall thermal load management. No flight deck controls.

---
title: Doors
tags: [systems, doors]
---

# Doors

## Overview

| Door                         |    Count    | Operation                               |
| :--------------------------- | :---------: | :-------------------------------------- |
| Passenger Entry Doors        | 8 (1L – 4R) | Manual / Automatic (Slide armed)        |
| Flight Deck Door             |      1      | Electronically secured + Deadbolt       |
| Flight Deck Overhead Door    |      1      | Ground only (depressurized)             |
| Cargo Door FWD / AFT         |      2      | Electric (external) or manual           |
| Bulk Cargo Door              |      1      | Manual                                  |
| Equipment / E/E Access Doors |      3      | Manual (no lock)                        |

<img src="/Bilder/door%20synoptics.webp" alt="Door Synoptics">

> [!caution] Wind Limits
> Entry and cargo doors: max. **40 kts** for operation · max. **65 kts** to hold open.

**EICAS logic:**
- Flight Deck Door, Passenger Entry Doors, Cargo Doors FWD/AFT → EICAS if not **closed + locked + secured**
- Bulk Cargo Door, Overhead Door, Access Doors → EICAS if not **closed + locked** (no latch)

## Flight Deck Door

- Ballistic and intrusion protection (door + rear wall)
- Opens into the cabin · Viewing window + security camera (EFB)

**Decompression Behavior:**

| Event | Effect |
|:---|:---|
| Rapid decompression on flight deck | Decompression panel opens (cabin → FD) |
| Rapid decompression in cabin | Full FD door opens (FD → cabin) |

The decompression panel serves as an escape route if the door is jammed (instructions on the inside of the door).

### Electronic Access System

**Cabin side (Keypad):**

| Keypad Light | Meaning |
|:---:|:---|
| <span class="c-red">Red</span> | Door secured (locked) |
| <span class="c-amber">Amber</span> | Emergency code entered – awaiting crew decision |
| <span class="c-green">Green</span> | Access granted – door unlocked |

- **Call button:** Press `1` + ENT → EICAS COMM: **FD DOOR CALL**
- Keypad dormant until first keystroke · returns to dormant state after 3 min without input

**Cockpit side (Aisle Stand):**

| FD DOOR ACCESS Selector | Effect |
|:---|:---|
| AUTO (spring-loaded) | Door locked · emergency access after time delay |
| UNLKD | Immediate opening |
| DENY | Access denied · keypad blocked for a defined period |

| EICAS | Level | Meaning |
|:---|:---:|:---|
| <span class="c-red">FD DOOR AUTO UNLOCK</span> | <span class="c-red">Warning</span> | Emergency code entered – no crew action → automatic access granted |
| <span class="c-amber">FD DOOR OPEN</span> | <span class="c-amber">Advisory</span> | Lock pin extended while door sensor shows open |
| <span class="c-amber">FD DOOR LOCK FAIL</span> | <span class="c-amber">Advisory</span> | Lock failed or FD DOOR POWER OFF |

### Deadbolt (mechanical, ground only)

| Position | Effect | Key from cabin |
|:---|:---|:---:|
| UNLOCKED | Deadbolt retracted | – |
| LOCKED – KEY OPERABLE | Deadbolt extended | Yes |
| LOCKED – KEY INOPERABLE | Deadbolt extended | No |

## Flight Deck Overhead Door

Emergency exit via Descent Devices – **ground only, depressurized**.

> [!warning] Door falls inward – risk of injury when opening.

| EICAS | Level | Meaning |
|:---|:---:|:---|
| <span class="c-amber">DOOR FD OVHD</span> | <span class="c-amber">Advisory</span> | Door not closed and secured |

## Passenger Entry Doors

- 8 doors: **1L – 4R**, in pairs along the fuselage
- Translating plug-type: first inward + upward, then outward + forward
- Each door: viewing window + gust lock (holds door open)
- **Vent panel** at door handle: prevents pressure buildup if door is not fully closed

**Flight Lock:** Door handle automatically locked above GS > **80 kts** · unlocked below **70 kts** or on power failure.

### Slide/Raft & Emergency Operation

| Mode Select Lever | Interior opening | Exterior opening |
|:---|:---|:---|
| **AUTO** (armed, red girt bar) | Door opens pneumatically · slide deploys automatically | Lever shifts auto → manual · no slide |
| **Manual** (green girt bar) | Door opens manually · no slide | Normal manual |

Each door system can be opened unassisted even with the aircraft in a gear-collapse attitude.

## Cargo Doors

| Door | Side | Operation |
|:---|:---:|:---|
| FWD Cargo | R | Electric (external panel) or manual · Lock: external lock handle |
| AFT Cargo | R | Electric (external panel) or manual · Lock: external lock handle |
| Bulk Cargo | L | Manual (counterbalanced) · no lock |

Opening the cargo doors does **not** deactivate Cargo Heating, Ventilation, or Fire Detection.

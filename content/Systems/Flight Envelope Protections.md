---
title: Flight Envelope Protections
tags: [systems, flight-controls, protections]
---

# Flight Envelope Protections

← [[Systems/Flight Controls|Flight Controls]]

## Pitch & Roll

| Protection | Triggered by | Effect |
|:---|:---|:---|
| **Stall Protection** | Approach to critical AOA | Trim limit · Increased column force |
| **Overspeed Protection** | Approach to v<sub>MO</sub> / M<sub>MO</sub> | Trim limit · Back pressure required |
| **Tail Strike Protection** | Critical pitch attitude (T/O & LDG) | Reduced elevator authority |
| **Bank Angle Protection** | > 35° bank | Restoring force · Auto roll back to < 30° |

## Asymmetry & Engine

| Protection | Triggered by | Effect |
|:---|:---|:---|
| **Thrust Asymmetry (TAP)** | Large thrust differential (T/O, GA) | EEC limits thrust on operating engine |
| **Roll/Yaw Asymmetry Comp.** | Asymmetric conditions (Normal mode) | Automatic compensation → reduced crew workload |
| **TCMA** | Asymm. idle condition on ground | Auto-shutdown of affected engine |

## High Lift (Flaps & Slats)

| Protection                    | Triggered by                                     | Effect                                                   |
| :---------------------------- | :----------------------------------------------- | :------------------------------------------------------- |
| **Flap/Slat Load Relief**     | Flaps extended at excessive speed                | Auto-retraction · Re-extension when speed decreases      |
| **Slat Autogap**              | High AOA + speed < 240 kts<br>(Normal mode only) | Slats: mid → fully extended · Retract when AOA decreases |
| **Asymmetry/Skew Protection** | Asymmetric extension / retraction                | Drive system deactivated                                 |

## Stall Protection

> [!info] Normal Flight Control Mode only
> Does not automatically correct – enhances crew awareness and imposes increasing deterrents.
>
> **Amber band upper limit = Minimum Maneuvering Speed** – provides 1.3g maneuvering margin to stick shaker (or low-speed buffet at high altitude).

| Configuration | Protection |
|:---|:---|
| **Manual (no A/P)** | Trim nose-up inhibited at ~Min. Man. Speed<br>Below Min. Man. Speed: 2× normal column force required<br>At stick shaker: FD pitch bar removed from PFD and HUD |
| **Autopilot engaged** | Will not fly below Min. Man. Speed<br>If violated: EICAS **AUTOPILOT** caution + FMA mode failure |
| **A/T armed (not active)** | Auto-engages (**SPD** mode) near stick shaker<br>Target: max(Min. Man. Speed, MCP window)<br>EICAS **AIRSPEED LOW** caution + aural beeper |

**A/T wake-up inhibited:** A/T OFF · pitch mode FLCH or TO/GA · < 400 ft RA after T/O · < 100 ft RA on approach

> [!warning] HOLD Mode Trap
> During VNAV SPD / FLCH SPD descent, the A/T may engage in **HOLD** mode – servos are inhibited, no stall protection. Only when stick shaker activates does the A/T override HOLD and command **THR** (climb thrust).

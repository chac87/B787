---
title: Flight Control Non-Normals
tags: [non-normal, flight-controls]
---

# Flight Control Non-Normals

## Flap / Slat System Modes

| | Primary | Secondary | Alternate |
|:---|:---:|:---:|:---:|
| **Power** | Center Hydraulic | Hydraulic + Electric | Electric only |
| **Flap Lever** | ✓ | ✓ | ✗ (inoperative) |
| **Flaps/Slats** | Together | Independent | Max Flaps 20 / Slats mid |
| **Protections** | Full | Full | ✗ (open loop) |

---

### Primary Mode

Normalbetrieb — Flaps und Slats gemeinsam über das Center Hydraulic System.

![[Bilder/flaps-primary.png]]

---

### Secondary Mode

Automatische Umschaltung bei:
- Center Hydraulic System ausgefallen
- Bewegung > 50 % langsamer als normal
- Disagree-Bedingung oder uncommanded motion
- Primary Control ausgefallen oder kann Zielposition nicht erreichen

![[Bilder/flaps-secondary.png]]

Electric Motor Control Unit unterstützt nun Flaps **oder** Slats — sie werden unabhängig voneinander bewegt. Flap Lever bleibt in Benutzung.

**EICAS:** Caution + Expanded Flap/Slat Position Indication (Slat-Balken füllen sich nach oben, Flap-Balken nach unten)

| EICAS | Landung | Hinweis |
|:---|:---|:---|
| **FLAPS PRIMARY FAIL** | Flaps 20 | Langsame Extension → langsame Retraktion → Full Flap würde GA-Performance gefährden |
| **SLATS PRIMARY FAIL** | Normal | Checklist Notes lesen, langsamere Extension einplanen — kein OPT-Eintrag unter NNC möglich |

---

### Alternate Mode

Wenn Flap/Slat-Elektronik komplett ausgefallen ist.

![[Bilder/flaps-alternate.png]]

- **ALTN FLAPS ARM** — schaltet Primary + Secondary aus, Flap Lever inoperativ
- Alle Hydraulik bypassed — nur Electric Motors
- Maximum: **Flaps 20**, Slats bis Mittelposition
- Schalter: RET / OFF / EXT (nicht federbelastet)
- **Kein Closed-Loop** → keine Asymmetrie- oder Uncommanded Motion Protection

> [!warning] Nur bei NNC-Anweisung
> Alternate Mode nur bei: **AIRSPEED UNRELIABLE** oder **FLAP/SLAT CONTROL**

**Flap/Slat Control NNC:** Extension dauert ca. 3 min — Anflug entsprechend früh planen. VREF 20. Flap Lever bleibt UP (per Checklist — er ist ohnehin inoperativ).

---

### Flaps / Slats Drive

FLAPS DRIVE oder SLATS DRIVE → Antriebsmechanismus defekt — kann durch **keinen** Modus bewegt werden. Checklist bereitet auf Partial Flap/Slat Landing vor.

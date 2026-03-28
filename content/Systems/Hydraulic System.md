# Hydraulics
![[hydraulic system.png]]![[hyd ovhd.png]]**Hydraulic System consists of:**
- 2 EDP (ENG driven pumps)
- 2 EMP (Electric motor pumps)
- 2 Reservoirs
- 2 CTR EMPs
- 1 RAT
- 4 ACCUs
## L/R Hydraulic Systems
- 5.000 psi, je 76 l
- 2 EDPs als primary source
- Demand Pumps sind electric motor pumps, die sich bei hoher Systemlast (large loads) automatisch zuschalten:
	- After the second engine start for 3 min
	- Takeoff thrust until flaps up
	- During descent: landing gear lever down, RA < 1.000 ft, GS < 40 kts
	- During thrust reverser operation
	- Low system pressure
## Center Hydraulic System
- 5.000 psi, 170 l
- 2 EMPs (C1 und C2)
- Eine agiert als primary pump, die andere als demand pump. Welche Pumpe die primäre Rolle übernimmt, wird durch den aktuellen Wochentag gesteuert. 
  (C1 odd day, C2 even day)
- Primary pump läuft nach second engine start kontinuierlich
- Demand pump automatisch bei:
	- For 3 min after second engine start
	- During flap or slat movement
	- Takeoff thrust until RA > 2.000 ft
	- During descent: landing gear lever down & RA < 2.000 ft until GS < 60 kts
	- Low system pressure
## RAT
- Liefert 3.000 psi hydraulic pressure für flight controls und center system
- operates an electrical generator and a hydraulic pump
- Kann nicht wieder eingefahren werden
- Siehe auch [[Electrical Power System#RAT|Electrical System - RAT]]

## Total Hydraulic Loss

Bei Ausfall **aller drei Hydrauliksysteme** (L + R + C) verbleiben folgende Steuerflächen:

| System | Verbleibend |
|:---|:---|
| **Flaps / Slats** | Alternate Electric Drive (Motor Operated Valves) |
| **Stabilizer** | Electric Stabilizer Trim (unabhängig von Hydraulik) |
| **Spoiler** | 2 Spoiler-Paare (RAT/elektrisch versorgt) |
| **Primäre Steuerflächen** | Eingeschränkt — Elevator, Aileron, Rudder via RAT-Druck |

> [!warning] Total Hydraulic Loss
> RAT liefert 3.000 psi für Center-System und elektrische Energie für Emergency-Systeme. Volle Steuerbarkeit ist stark eingeschränkt — Alternate Flaps/Slats und Electric Stabilizer sind die wichtigsten verbleibenden Konfigurations-Werkzeuge.

Siehe auch [[Hydraulic Non-Normals]]
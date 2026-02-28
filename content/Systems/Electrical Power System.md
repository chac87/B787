# Electrical

![[elec distr.png]]
![[elec ovhd.png]]
## Power Sources
### 4 Engine Starter/Generators (VFSGs)
- Jedes Triebwerk hat zwei direkt an die Engine Gearboxes angeschlossene 235V AC VFSGs (L1/L2 und R1/R2)
- Beim Engine Start agieren beide Starter Motors und arbeiten nach dem Start als Generators für die Main AC Buses.
### 2 APU Starter/Generators (ASGs)
- APU generiert nur Strom, keine bleed air
- Generatoren (L, R), die ebenfalls 235 VAC liefern
- Für den APU Start wird automatisch nur ein Generator als Starter Motor ausgewählt
- Wird der Start nur über die APU Battery durchgeführt, wird immer der rechte Starter genutzt.
- Im Flug liefert einer oder beide Generatoren Supplemental Power je nach Electrical Load Requirements.
- Max. altitude: FL 431
- No AC pumps, no DC pumps: APU start only < 14.000 ft
- Fuel feed: from left manifold by any AC fuel pump, or by a dedicated DC fuel pump in the left main tank
- APU automatic start: APU switch to START and then let it spring back to ON
- APU battery can handle 2 consecutive start attempts -> then wait 5 min
- Dual engine fail (3 or more generators fail) -> APU starts automatically
- Unattended Mode (at the gate, no engines running): 
	- APU will auto shut down for a list of failures (bspw. APU fire)
- Attended Mode:
	- Engine is starting or started, in flight
	- High EGT, high oil temperature, low oil pressure -> EICAS <strong><span class="c-amber">APU LIMIT</span></strong>
	- For all other faults -> auto shut down
### External Power
- FWD System (zwei Receptacles) für generelle Ground Operations
- AFT System (ein Receptacle)
- Ein Anschluss vorne aktiviert den Ground Handling Mode, zwei Anschlüsse vorne aktivieren den External Power On Mode, um Load Shedding zu minimieren. 
- AFT System wird primär genutzt, um das FWD System zu unterstützen, wenn bei nicht verfügbarer APU das rechte Triebwerk zuerst gestartet wird.
### Batteries
 - Main Battery für Airplane Power-up, APU Start, Towing, Electric Braking und liefert Notstrom für die Captain's Flight Instruments bis zum RAT Deployment.
 - APU battery liefert Strom für den APU Start am Boden und Navigation Lights, functions automatically
### RAT
- Emergency hydraulic and electric power
- Deploys, if:
	- DUAL ENG FAIL
	- 3 HYD SYS LOST
	- Loss of PWR to all instruments
	- Loss of all 4 EMPs (Electric Motor Pumps)
- Manual deployment: push button and hold for 1 sec
- EICAS <strong><span class="c-amber">RAT UNLOCKED</span></strong>
- No time or altitude restrictions (only: electrical output is reduced < 120 kts)
### PMGs, PMAs
- 3 Engine Driven PMGs liefern primären Strom für die Flight Control Electronics.
- 2 Engine Driven PMAs liefern primären Strom für die Electronic Engine Control (EEC).

## Power Distribution
Systems that use electrical power:
- Main engine start
- Pressurization / Air conditioning
- Wing anti ice protection
- Horizontal stabilizer trim
- 2 pair of spoilers
- Wheel brake systems
### 235V AC System
- 4 Main AC Buses befinden sich im Aft E/E Bay und verteilen den Hochspannungsstrom.
### 115V AC & 28V DC Systems
- Werden über Power Conversion Devices aus dem 235V AC System gespeist (oder direkt von External Power am Boden). 
- Hauptnutzer des 28V DC Systems sind z.B. die 4 Electrical Brake Power Supply Units.
### Large Motor Power Distribution System
- Speist große Lasten über Motor Controllers (z.B. für die Startvorgänge). 
- Hochspannungskomponenten werden hierbei durch das flüssigkeitsbasierte Power Electronics Cooling System (PECS) gekühlt, sobald Triebwerke, APU oder FWD External Power laufen.

## Operation Modes
- Towing Power Mode: 
  Towing Power sw ON, Main Battery OFF
- On Ground Battery Only Mode: 
  Battery sw ON only
- Ground Handling Mode: 
  1 FWD Ext Pwr AVAIL
- Ground Service Mode:
  Ground Service sw ON while in Ground Handling Mode
- External Power On Mode:
  At least 1 FWD Ext Pwr ON
- In-Air RAT Only Mode: 
  Essenzielle Flight Controls, Navigation und Kommunikation bei einem Stromausfall.
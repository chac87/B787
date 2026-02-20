# Electrical
## Power Generation
![[elec system.png]]
![[elec ovhd.jpeg]]
### Stromquellen
- 4 Engine Starter/Generators (VFSGs): Generatoren (L1, L2, R1, R2) mit variabler Frequenz (235 VAC), direkt an den Triebwerken.
- 2 APU Starter/Generators (ASGs): Generatoren (L, R), die ebenfalls 235 VAC liefern und auch zum Starten der Triebwerke genutzt werden.
- 3 External Power: zwei vorne, einer hinten für engine start.
- 2 Batterien: Main Battery und APU Battery.
- 1 RAT (Ram Air Turbine): Notstromquelle.

## RAT
- for emergency hydraulic and electric power
- deploys when:
	- DUAL ENG FAIL
	- 3 HYD SYS LOST
	- Loss of PWR to all instruments
	- Loss of all 4 EMPs (Electric Motor-driven Pumps)
- manual deployment: push button and hold for 1 sec
- EICAS <strong><span class="c-amber">RAT UNLOCKED</span></strong>
- no time or altitude restrictions (only: electrical output is reduced < 120 kts)

## APU
- APU generiert nur Strom, keine bleed air
- two starter-generators
- max. altitude: FL 431
- no AC pumps, no DC pumps: APU start only < 14.000 ft
- APU battery can only power the right starter
- fuel feed: from left manifold by any AC fuel pump, or by a dedicated DC fuel pump in the left main tank
- APU automatic start: APU switch to START and then let it spring back to ON
- APU battery can handle 2 consecutive start attempts -> then wait 5 min
- dual engine fail (3 or more generators fail) -> APU starts automatically
- Unattended Mode (at the gate, no engines running): 
	- APU will auto shut down for a list of failures (bspw. APU fire)
- Attended Mode:
	- engine is starting or started, in flight
	- high EGT, high oil temperature, low oil pressure -> EICAS <strong><span class="c-amber">APU LIMIT</span></strong>
	- for all other faults -> auto shut down
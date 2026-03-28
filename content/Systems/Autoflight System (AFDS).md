# Autoflight System (AFDS)
![[mcp.jpeg]]
## Mode Control Panel (MCP)
- Dient zum armieren (arm) und Aktivieren (engage) der lateralen und vertikalen Modi.

## Autopilot 
- AP wird über die A/P engage switches aktiviert. 
- Er kann über den Disconnect switch am Control Wheel, das Herunterziehen der A/P DISENGAGE bar am MCP oder durch manuelle Übersteuerung (override force) deaktiviert werden.
### Roll Modes (Lateral)
- LNAV: Folgt der im FMS aktiven Route.
- HDG SEL / TRK SEL: Das Flugzeug fliegt den im MCP-Fenster gewählten Steuerkurs oder Track.
- HDG HOLD / TRK HOLD: Hält den aktuellen Kurs oder Track flügelgleich.
- LOC / FAC / B/CRS: Dienen dem Erfassen und Verfolgen von lokalen Sendern (Localizer) oder Integrated Approach Navigation (IAN) Pfaden.
- ROLLOUT: Sorgt nach dem Aufsetzen bei einer automatischen Landung für die Führung auf der Mittellinie.
### Autoland Status: 
- Das System zeigt den Status der Redundanz an: LAND 3 (fail operational), LAND 2 (fail passive) oder NO AUTOLAND.
### Go-Around: 
- Ein Druck auf den TO/GA-Schalter kommandiert einen climb mit 2.000 fpm im THR-Mode. 
- Ein zweiter Druck aktiviert THR REF für vollen Schub.
### Pitch Modes (Vertikal)
- TO/GA: Liefert Pitch Guidance für Start und Go Around. Am Boden wird initial ein Pitch von 8° Up angezeigt s. auch [[Autoflight System (AFDS)#TO/GA|TO/GA]].
- VNAV: Koppelt die vertikale FMS-Führung (VNAV SPD, VNAV PTH, VNAV ALT). s. auch [[Autoflight System (AFDS)#VNAV|VNAV]]
- FLCH SPD: Steigt oder sinkt direkt auf die gewählte Höhe und hält dabei die eingestellte Geschwindigkeit.
- ALT HOLD: Hält die aktuelle Höhe bei Aktivierung des Schalters.
- V/S & FPA: Steuert eine gewählte vertikale Geschwindigkeit oder einen Flugpfadwinkel.
- G/S & G/P: Verfolgt den ILS-Gleitpfad oder den FMC-Gleitweg.
- FLARE: Aktiviert sich bei einer automatischen Landung (Land 2/3) zwischen 60 und 40 Fuß RA für den Flare.

## Autothrottle
- A/T Arm Switches: Schalten das System scharf. 
### A/T Engagement:
- Press TO/GA sw < 50 kts, with flaps extended
 - Press A/T sw > 400 ft
- Select FLCH in-flight
- Select VNAV in-flight
- A/T Auto Engagement:
	- AP or FD engaged in VNAV, FPA, V/S, ALT or G/S and:
	- Speed < FMC calculated speed or Thrust below reference thrust
### A/T Modes:
- THR REF: Setzt den Schub auf das berechnete Limit (during Takeoff/Climb in VNAV or after second push during Go Around). 
- THR: Passt den Schub an, um die vom Pitch-Modus geforderte Steig-/Sinkrate beizubehalten (during FLCH or Go Around).
- SPD: Hält die am MCP oder FMC gewählte Geschwindigkeit (during level flight).
- IDLE & HOLD: Im IDLE-Modus fahren die Schubhebel auf Leerlauf, gefolgt vom HOLD-Modus, in dem die Servos entkoppelt werden, um dem Piloten manuelles Eingreifen zu ermöglichen.

## VNAV
### Modes
- **VNAV SPD**: Commands pitch, maintains FMC speed. Dieser mode ist typisch für den climb.
- **VNAV PTH**: Commands pitch to maintain FMC altitude or calculated descent path. A/T manages speed.
- **VNAV ALT**: Commands pitch to maintain MCD altitude (wenn die am MCP selected altitude restriktiver ist als das FMC-Profil).
### Capture Criteria
above 400 ft RA -> MCP speed blanks
### Limitations
- QFE: Use of VNAV prohibited with QFE use
- no VNAV with triple FMC failure
- Disengages with selection of other pitch modes (FLCH, V/S, FPA, ALT), pushing VNAV twice or disconnecting AP/FD.

## TO/GA
 TO/GA (Takeoff/Go-Around) Pitch-Modus liefert die vertikale Führung für Takeoff und Go Around
### TO/GA am Boden (Ground Operation)
- Die Pitch-Bar auf dem PFD zeigt 8° Nose-up an.
- Die eigentliche Pitch-Command wird erst beim Liftoff aktiv.
### TO/GA after Takeoff
- Normalfall: higher of V2 + 15 kts oder der zum Zeitpunkt der Rotation erreichten speed.
- Speed Reset: Wenn die aktuelle speed für mehr als 5 Sekunden über diesem Zielwert bleibt, wird das target auf die aktuelle speed (begrenzt auf V2 + 25 Knoten) gesetzt.
- MCP-Eingabe: Wird die speed im MCP manuell auf einen Wert über dem aktuellen Zielwert erhöht, folgt der FD diesem neuen Wert.
### TO/GA with Engine Failure
- Before liftoff: higher of V2 oder actual vR.
- After liftoff: 
	- speed < V2 -> v2 wird kommandiert.
	- speed zwischen V2 und V2 + 15 -> actual speed wird kommandiert.
	- speed > V2 + 15 -> V2 + 15 wird kommandiert.
### TO/GA during Go-Around
- Erster Druck: AFDS erhöht den Pitch, um die actual speed oder die im MCP gewählte speed zu halten (maximal MCP-speed + 25 kts).
- A/T liefert im initialen Modus (THR) genügend thrust für eine climb rate von 2.000 fpm.
- Zweiter Druck: THR REF wird angelegt, max. thrust
### TO/GA bei Windshear (Windshear Recovery)
- AFDS kommandiert Pitch-up von 15° oder bleibt knapp unter dem Pitch Limit Indicator (PLI), je nachdem, welcher Wert niedriger ist.
- Sobald die Steigrate zunimmt, wechselt der Modus von einer reinen Pitch-Führung zu einer Airspeed-Führung, um die bestmögliche Performance aus der Situation zu ziehen.
### Terminierung des Modus
- TO/GA Pitch-Modus endet, wenn ein anderer vertikaler Modus (z. B. VNAV, FLCH oder V/S) gewählt wird oder wenn das Flugzeug die am MCP vorgewählte Höhe erreicht.
- Beim Erreichen der Zielhöhe wechselt der AFDS automatisch in Altitude Hold (ALT).

---

> [!limit] Limitations
> <div class="cl-item"><strong>AP — min. engagement altitude after T/O</strong><span class="cl-dots"></span><span>200 ft AGL</span></div>
> <div class="cl-item"><strong>Autoland — max. airport elevation</strong><span class="cl-dots"></span><span>8,400 ft MSL</span></div>
> <div class="cl-item"><strong>Autoland — wind limits</strong><span class="cl-dots"></span><span>HW 25 kts · TW 15 kts · CW 25 kts</span></div>
> <div class="cl-item"><strong>Autoland — glideslope</strong><span class="cl-dots"></span><span>2.5° – 3.25°</span></div>
> <div class="cl-item"><strong>Autoland — flaps</strong><span class="cl-dots"></span><span>20 · 25 · 30 (2-eng and OEI)</span></div>
> <div class="cl-item"><strong>Autoland — requirement</strong><span class="cl-dots"></span><span>LAND 2 or LAND 3</span></div>
> <div class="cl-item"><strong>Without LAND 2 / 3 — disengage</strong><span class="cl-dots"></span><span>below 135 ft</span></div>
> <div class="cl-item"><strong>LAND 2 / 3 + GS >3.25° — disengage</strong><span class="cl-dots"></span><span>below 100 ft</span></div>
> <div class="cl-item"><strong>GS >3.77° — disengage</strong><span class="cl-dots"></span><span>≤ 50 ft below DH / MDA</span></div>
> <div class="cl-item"><strong>FLCH</strong><span class="cl-dots"></span><span>not below 1,000 ft AFE</span></div>
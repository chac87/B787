# Engines
## Engine Indications
Primary Engine Indications: TPR (Turbofan Power Ratio) als primäre Schubreferenz, N1 und EGT (Exhaust Gas Temperature).
Secondary Engine Indications: N2, N3, Fuel Flow, Oil Pressure, Oil Temperature, Oil Quantity und Engine Vibration
## Electronic Engine Control (EEC) & Protection
- **Normal Mode**: Die EEC nutzt TPR als Parameter zur Schubeinstellung.
- **Alternate Mode**: Fällt das primäre Signal aus, wechselt die EEC in den Soft Alternate Mode (nutzt die letzten bekannten Umgebungsdaten zur N1-Berechnung). Durch manuelles Drücken des Switches wird in den Hard Alternate Mode gewechselt. In beiden Alternate Modes nutzt die EEC N1 als Parameter zur Schubeinstellung.
- Im Alternate Mode gibt es keine Thrust Protection (Schubbegrenzung). Ein volles Vorschieben der Thrust Lever kann zu einem Overboost führen.
- **Overspeed Protection**: Die EEC überwacht N1, N2 und N3. Bei Annäherung an das Limit wird der Fuel Flow reduziert (RPM Limiting). Schlägt dies fehl, wird das Triebwerk abgeschaltet.
- **TCMA** (Thrust Control Malfunction Accommodation): Schützt vor asymmetrischem Leerlaufschub am Boden. Die EEC schaltet das Triebwerk ab, wenn das Flugzeug am Boden ist, der Thrust Lever auf Idle steht, aber das Triebwerk nicht normal verzögert.
- **TAP** (Thrust Asymmetry Protection): Reduziert automatisch den Schub des funktionierenden Triebwerks bei einem Ausfall während Takeoff oder Go-Around, falls die Geschwindigkeit unter V2 (bzw. Vref) fällt. Dies stellt sicher, dass das Ruder ausreicht, um das Flugzeug (Directional Control) zu steuern.
## ENG START
- Jedes Triebwerk hat zwei Igniters, die mit DC-Power betrieben werden.
- Zwei Starter Motors sitzen an der Accessory Gearbox und werden elektrisch betrieben (via APU, alternativ via Forward External Power)
- Startsequence
	- N2 at 32 % for 18s -> IGN ON
	- N2 at 50 % >> IGN OFF
	- N2 at 65 % >> VFSG Starters OFF
- In-flight Starts: Ein In-flight Start Envelope zeigt die benötigte speed für einen Windmilling Start (ohne Starter) an. Ist das Flugzeug zu langsam, erscheint X-START als Hinweis für einen Starter Assist. Im Flug unternimmt das Autostart-System kontinuierliche Startversuche, bis der Pilot abbricht.
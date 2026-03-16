# Flight Controls & Protections

## Fly-by-Wire
### Normal Mode
Standardzustand, in dem alle drei Primary Flight Computers (PFCs) parallel arbeiten.
PFCs berechnen auf Basis von Luftdaten, Trägheitsdaten und Konfiguration optimierte Steuerbefehle, die über vier Actuator Control Electronics (ACEs) an die hydraulischen Aktuatoren der Steuerflächen gesendet werden.
In diesem Modus sind alle Flight Envelope Protections und der Autopilot verfügbar.
### Secondary Mode
Das System wechselt automatisch in diesen Modus, wenn wichtige Luft- oder Trägheitsdaten (IRS/ADRS) ausfallen oder Flap/Slat-Positionsdaten verloren gehen.
Reduced Protections: Der Autopilot, die automatischen Speedbrakes sowie sämtliche Schutzfunktionen (außer dem Lastvielfachenschutz) sind inaktiv.
### Direct Mode
Dieser Modus wird aktiviert, wenn alle drei PFCs ausfallen oder die Kommunikation zu ihnen unterbrochen ist; er kann auch manuell über den PFC Disconnect Switch gewählt werden.
In diesem Fall leiten die ACEs die Piloteneingaben direkt an die Steuerflächen weiter, ohne dass eine Software-Optimierung durch die PFCs erfolgt.
Das Flugverhalten ähnelt dem des Secondary Mode.

## Protections:
### Pitch&Roll Envelope Protections
#### Stall Protection
Verhindert, dass das Flugzeug den kritischen Anstellwinkel (Angle of Attack) überschreitet. Bei Annäherung an den Stall wird die Trimmschwelle begrenzt und der Pilot muss deutlich mehr Kraft am Steuerhorn aufbringen, um die Nase weiter anzuheben.
#### Overspeed Protection
Verhindert das versehentliche Überschreiten der Höchstgeschwindigkeiten VMO oder MMO. Trimmung wird begrenzt, sodass der Pilot aktiven Druck gegen das Steuerhorn ausüben muss, um schneller zu fliegen.
#### Tail Strike Protection
Berechnet während des Starts und der Landung, ob das Heck den Boden berühren könnte, und reduziert gegebenenfalls den Höhenruderausschlag.
#### Bank Angle Protection
Diese Funktion stellt sicher, dass das Flugzeug bei manueller Steuerung eine Querneigung von etwa 35 Grad nicht ohne stetigen Kraftaufwand des Piloten überschreitet. Wird das Steuerhorn losgelassen, rollt das Flugzeug automatisch in einen Bereich unter 30 Grad zurück.
### Asymmetry & Engine Protections
#### Thrust Asymmetry Protection (TAP)
Eine EEC-Funktion, die bei einem großen Schubunterschied (z. B. Triebwerksausfall) während des Starts oder Durchstartens automatisch den Schub des arbeitenden Triebwerks begrenzt, um die Richtungssteuerung zu gewährleisten.
#### Roll/Yaw Asymmetry Compensation
Gleicht asymmetrische Bedingungen (nicht nur triebwerksbedingt) im Normalmodus automatisch aus, sodass die Arbeitsbelastung für den Piloten sinkt.
#### Thrust Control Malfunction Accommodation (TCMA)
Bietet Schutz vor asymmetrischen Leerlaufbedingungen am Boden, indem ein betroffenes Triebwerk gegebenenfalls automatisch abgeschaltet wird.
### High Lift Protections (Flaps & Slats)
#### Flap/Slat Load Relief 
Schützt die Landeklappen vor strukturellen Schäden, indem sie bei zu hoher Geschwindigkeit automatisch ein- und bei Abnahme der Geschwindigkeit wieder ausgefahren werden.
#### Slat Autogap
Fährt die Slats bei hohem Anstellwinkel automatisch aus der Start- in die Landeposition aus, um den Auftrieb zu erhöhen.
#### Asymmetry/Skew Protection
Erkennt ungleichmäßiges Ausfahren oder Verkanten der Klappen und schaltet den Antrieb ab, um strukturelle Schäden zu verhindern.
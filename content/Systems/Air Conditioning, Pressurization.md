# Air Conditioning, Pressurization

## Air Conditioning Packs

![[air con ovhd.png]]

- **Kein Bleed Air** — Außenluft wird durch **4 elektrische CACs** (Cabin Air Compressors) angesaugt
- Einziges System mit Bleed Air ist **Engine Anti-Ice (EAI)** — Packs und Wing Anti-Ice (WAI) sind vollständig elektrisch
- 2 CACs pro Pack · 1 CAC reicht für vollen Pack-Betrieb
- 2 identische Pack Control Systems — bei Ausfall eines Systems automatischer Wechsel
- **7 Temperaturzonen**: Flight Deck + 6 Kabinenzonen (A/B enthalten Sub-Zonen A1/B1, nicht im Synoptic sichtbar)
- Pack-Steuerung, Temperaturregelung, Rezirkulation, Fehlererkennung und Überhitzungsschutz: vollautomatisch

**Deflector Doors** (CAC-Einlässe): aktiv bei Bodenoperationen + Landing — schützen vor Debris. Einfahren möglich bei OAT < 2°C oder > 35°C.

### Pack Ground Operation

- Beide Packs: **AUTO** für Bodenbetrieb
- **APU als Stromquelle**: je 1 CAC pro Pack
- **Kältebetrieb**: beide CACs pro Pack aktiv
- **3-CAC-Betrieb**: automatisch aktiviert **2 min nach Engine Start** (beide Triebwerke)
- External Air Conditioning: Packs + Lower Recirculation Fans vorher **OFF** schalten

**Engine Start:** Alle CACs während des Startvorgangs abgeschaltet · PACK L / PACK R inhibited. Packs starten frühestens **2 min nach Einleitung des Engine Starts** neu.

### Pack Non-Normal / Standby Cooling

**Pack-Ausfall:** Automatisches Shutdown bei CAC-Surge, Überhitzung oder schwerem Fault → EICAS **PACK L / R** (Advisory). Reset möglich mit **AIR COND RESET Switch** bei ≤ 34.000 ft.

> [!info] Reset oberhalb 34.000 ft nicht empfohlen — CACs nahe Surge-Margin. Reset kann operativen Pack zum Shutdown bringen.

**Standby Cooling Mode:** Automatisch bei bestimmten internen Fehlern → EICAS **PACK MODE L / R** (Advisory) + AIR Synoptic: **STBY COOLING** (amber). Reduzierte Kühlkapazität bei niedrigen Höhen/hohen OAT möglich.

**Go-Around mit OEI + Slat Autogap:** Beide Packs können kurzzeitig Load-Shed → **PACK L+R** erscheint momentan. Keine Crew-Action erforderlich.

| EICAS | Level | Bedeutung |
|:---|:---:|:---|
| <span class="c-amber">PACK L / R</span> | <span class="c-amber">Advisory</span> | Pack ausgefallen (Surge, Überhitzung, Fault) |
| <span class="c-amber">PACK MODE L / R</span> | <span class="c-amber">Advisory</span> | Pack im Standby Cooling Mode |

---

## Air Distribution

![[air recirculation.jpeg]]

- **Flight Deck**: 100 % konditionierte Außenluft (bei einem Pack OFF + Lower Recirc Fan ON: auch etwas Rezirkulationsluft)
- **Kabine**: Mix aus Außenluft + rezirkulierter Luft
- Recirculation Fans filtern Kabinenluft (HEPA) und führen sie wieder zu

> [!caution] Recirculation Fans müssen im Hitzebetrieb ON bleiben — ausser eine Non-Normal Checklist fordert OFF.

**Recirc Fans OFF** erhöht **nicht** den Frischluftanteil — reduziert nur den Gesamtluftdurchsatz.

**Zonal Dryer (FWD + AFT):** De-Humidifikation im Crown-Bereich — automatisch bei verfügbarer Stromversorgung.

**Alternate Ventilation System (AVS):** Bei Ausfall beider Packs — Switch → ALTN öffnet FWD + AFT Outflow Valves teilweise → Frischluft wird in Verteilsystem gezogen (nur unpressurized).

| EICAS | Level | Bedeutung |
|:---|:---:|:---|
| <span class="c-amber">RECIRC FAN UPR / LWR OFF</span> | <span class="c-amber">Advisory</span> | Upper / Lower Recirculation Fan ausgeschaltet |

---

## Temperaturregelung

- **CABIN TEMP Selector**: **18 – 29 °C**
- Jede Kabinenzone: ± 3 °C Offset via Cabin Management System (innerhalb 18 – 29 °C)
- **Flight Deck Temp Selector**: unabhängig, 18 – 29 °C
- Kühlste Zone bestimmt Pack-Outlet-Temperatur · Trim Air erwärmt einzelne Zonen
- Bei Ausfall des Temperature selectors: Pack hält letzte eingestellte Temp oder **24 °C** (Durchschnitt)

**Loss of Trim Air (L oder R):** Alle Zonen werden auf Durchschnittszieltemperatur geregelt. FD-Temperatur bleibt 18 – 29 °C — kann aber unbequem werden. Workaround: CABIN TEMP Selector anpassen.

---

## Pressurization

![[press ovhd.png]]

- **CPCS** (Cabin Pressure Control System) reguliert vollautomatisch via FMC-Daten + Umgebungsdruck
- **2 Outflow Valves** (FWD + AFT) — Abfluss normalerweise gleichmäßig aufgeteilt · jedes Valve allein ausreichend
- **Positive + Negative Relief Valves** schützen Struktur vor extremem Differential Pressure
- Vollautomatischer Betrieb — keine Crew-Action außer FMC-Dateneingabe erforderlich

### CPCS Automatikbetrieb

| Phase | Kabinenhöhe |
|:---|:---|
| Takeoff | Kleine positive Druckbeaufschlagung vor Rotation |
| Climb | Steigt auf Schedule (Climb Rate + FMC Cruise Alt) · bei VNAV off: konstant wenn Flugzeughöhe konstant |
| Cruise | Normal ≤ **6.000 ft** · bei degradiertem Betrieb (Pack/CAC Ausfall) bis **8.000 ft** |
| Descent | Sinkt auf knapp unter FMC Landing Alt · Baro-Korrektur via Captain Altimeter |
| Touchdown | Beide Outflow Valves öffnen vollständig → Kabine depressuriert |

**Default Cruise Alt** (FMC nicht verfügbar): **43.000 ft**

**High Altitude Takeoff** (Field > 8.000 ft): Kabine sinkt während Climb auf Zielkabinenhöhe.
**High Altitude Landing** (Dest > 8.000 ft): Kabinenhöhe steigt nach Takeoff auf 6.000 ft → bleibt dort → steigt rechtzeitig auf Zielflughöhe.

### Loss of Landing Altitude

FMC Landing Altitude nicht verfügbar + MAN nicht gesetzt → EICAS **LANDING ALTITUDE** (Advisory) → System nimmt **2.000 ft** als Landing Altitude an.

### Loss of Cabin Pressurization

Bei Druckabfall: Outflow Valves schließen → Druck erhalten. Ventile bleiben geschlossen bis Kabinenhöhenlimit erreicht:

| T/O-Landehöhe | Kabinenhöhenlimit |
|:---|:---:|
| < 9.500 ft | 11.500 ft |
| 9.500 – 14.000 ft | 14.500 ft |

Ab Erreichen des Limits: Outflow Valves öffnen vollständig für restlichen Flug.

> [!warning] Outflow Valves während descent nicht manuell schließen.

CPCS verhindert Cabin Altitude > **15.000 ft** bei jedem wahrscheinlichen Systemfehler.

### Manueller Betrieb

Aktivierung: **OUTFLOW VALVE Switches → MAN** + OUTFLOW VALVE MANUAL Switch halten (OPEN / CLOSE).

- Ventilposition auf EICAS sichtbar
- EICAS nicht verfügbar: Switch **30 sec** halten → Ventil fährt von vollständig offen/geschlossen in gewünschte Position

**LANDING ALTITUDE Selector** (MAN): Selector herausziehen → FMC Landing Altitude deaktiviert · Pressurization auf EICAS. Bereich: **−2.000 bis +14.000 ft**.

| EICAS | Level | Bedeutung |
|:---|:---:|:---|
| <span class="c-amber">LANDING ALTITUDE</span> | <span class="c-amber">Advisory</span> | Landehöhe nicht vom FMC verfügbar — System nutzt 2.000 ft |

---

## Air Non-Normals

s. [[Air, Pressurization Non-Normals]]

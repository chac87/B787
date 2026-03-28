# Engines

**GEnx-1B74/75** · 74.100 lbs Takeoff Thrust (BET) · 2-Wellen-Turbofan

| Welle | Komponenten |
|:---|:---|
| **N1** | Fan + Low Pressure Compressor + Low Pressure Turbine |
| **N2** | High Pressure Compressor + High Pressure Turbine |

N1 und N2 mechanisch unabhängig · Accessory Gearbox wird von N2 angetrieben.

**Engine Intermix**: Beide Triebwerke auf gleicher Schubbewertung betrieben. EGT-Amber-Band-Unterschied zwischen Triebwerken ist normal.

---

## Engine Indications

**Primary** (immer sichtbar): N1, EGT

**Secondary** (manuell via ENG-Switch oder automatisch): N2, Fuel Flow, Oil Pressure, Oil Temperature, Oil Quantity, Engine Vibration

### Automatische Secondary-Anzeige bei

| Auslöser |
|:---|
| Displays erhalten Strom |
| FUEL CONTROL → CUTOFF im Flug |
| Engine Fire Switch gezogen im Flug |
| Secondary-Parameter überschritten |
| N2 unter Idle im Flug |
| START Selector in START |
| <span class="c-amber">FUEL FLOW ENG L/R</span> Advisory aktiv |

Solange die Bedingung besteht, können Secondary Indications nicht weggecleared werden.

### Display Format

| Parameter | Format |
|:---|:---|
| N1, N2, EGT | Digital + Rundinstrument |
| Oil Pressure, Oil Temp, Vibration | Digital + Vertikalanzeige |
| Fuel Flow, Oil Quantity | Digital only |

**Farblogik:**
- Normaler Bereich: weiß
- Amber Band (EGT max continuous, Oil Temp/Press): → amber bei Erreichen
- Red Lines (N1, N2, EGT, Oil Press, Oil Temp): → rot bei Erreichen
- N1/N2/EGT Redline-Überschreitung: Box bleibt rot → Cancel/Recall via Display-Switch
- EGT-Amber-Inhibit: 5 min nach T/O oder G/A (10 min bei OEI)

---

## Electronic Engine Control (EEC)

Jeder EEC hat volle Autorität über sein Triebwerk. Steuerbasis: N1 RPM. EEC-Eigenversorgung ab ausreichendem PMA-Output; Flugzeugstrom als Backup.

### EEC Modi

| Modus | Auslösung | Verhalten |
|:---|:---|:---|
| **Normal** | Standard | EEC regelt N1 nach Thrust-Lever-Position |
| **Soft Alternate** | Auto-Switch (Switch bleibt NORM) | N1-Schedule nach Lever-Position · Schub bleibt bei fixem Lever konstant |
| **Hard Alternate** | Manuell ALTN gewählt | Schub kann sich ändern um N1-Command zu erfüllen |

- Autothrottle bleibt in Soft und Hard Alternate connected
- Alternate-Schedule liefert **gleichen oder mehr Schub** als Normal für dieselbe Lever-Position
- **Kein Thrust Protection** im Alternate Mode → Overboost bei voller Thrust Lever möglich

| EICAS | Level | Bedeutung |
|:---|:---:|:---|
| <span class="c-amber">ENG EEC MODE L / R</span> | <span class="c-amber">Advisory</span> | Auto- oder manueller Wechsel in Alternate Mode |
| <span class="c-amber">ENG LIMIT PROT L / R</span> | <span class="c-amber">Caution</span> | Lever-Position kommandiert N1 > Maximum (Alternate Mode) |

### Overspeed Protection

EEC überwacht N2. Bei Annäherung an Redline: Fuel Flow reduziert.

| EICAS | Level | Bedeutung |
|:---|:---:|:---|
| <span class="c-amber">ENG RPM LIMITED L / R</span> | <span class="c-amber">Advisory</span> | N2 RPM Limiting aktiv |
| <span class="c-amber">ENG LIMIT EXCEED L / R</span> | <span class="c-amber">Caution</span> | N2 Redline überschritten |
| <span class="c-amber">ENG FAIL L / R</span> | <span class="c-amber">Caution</span> | Triebwerk unter Idle (Aural Beeper) |

Schlägt RPM Limiting fehl → EEC kommandiert Fuel Shutoff.

### Thrust Ramping

Beim Takeoff steigert EEC den Schub langsam, um Fanblattstress bei Seitenwind und niedriger Groundspeed zu minimieren.

> [!info] Maximaler Takeoff-Schub kann bis **65 KIAS** nicht voll verfügbar sein. Nur am Boden im Normal Mode aktiv.

### TCMA — Thrust Control Malfunction Accommodation

Schutz gegen asymmetrischen Leerlaufschub **am Boden**. EEC schaltet Triebwerk ab wenn:
- Flugzeug am Boden **und**
- Thrust Lever auf Idle **und**
- Triebwerk über Idle ohne normale Dezeleration

→ <span class="c-amber">ENG FAIL L / R</span> (Caution) mit Aural Beeper.

### TAP — Thrust Asymmetry Protection

Automatische Schubminderung des laufenden Triebwerks bei Ausfall während T/O oder G/A:

| Phase | TAP aktiv wenn |
|:---|:---|
| Takeoff | Speed < V2 |
| Go-Around | Speed < VREF (außer leichtes Gewicht < 152.273 kg: leichte Minderung auch bei VREF) |

- Bei Speed ≥ V2/VREF: TAP erhöht Schub wieder
- Verfügbar nur bei FBW Normal Mode + EEC Normal oder Alternate Mode
- Climb Gradient bei TAP-Aktivierung **höher** als ohne TAP (zusätzliche Asymmetrie erzeugt mehr Drag als Schubgewinn)

| EICAS | Level | Bedeutung |
|:---|:---:|:---|
| <span class="c-amber">THRUST ASYM PROT</span> | <span class="c-amber">Advisory</span> | TAP inoperativ |

### Transient Bleed System (TBV)

1 kraftstoffbetriebenes TBV pro Triebwerk · öffnet beim Beschleunigen über Idle → erhöht Stall Margin.

| Zustand | EICAS | Level |
|:---|:---|:---:|
| TBV bleibt offen am Boden < 80 KCAS | <span class="c-amber">ENG TBV OPEN L / R</span> | <span class="c-amber">Advisory</span> |
| TBV öffnet nicht | ENG TBV CLOSED L / R | Status |
| TBV offen → Reverser inhibiert oder auf Idle begrenzt | <span class="c-amber">ENG REV LIMITED L / R</span> | <span class="c-amber">Advisory</span> |

> [!info] TBV stuck open kann EGT-Redline-Überschreitung verursachen.

### EEC Idle Selection

| Idle-Typ | Ausgewählt bei |
|:---|:---|
| **Minimum Idle** | Boden + Normalflug |
| **Approach Idle** | Flaps ≥ 25 **oder** Gear DN (im Flug) · bleibt bis nach TD |
| **Icing Idle** | Engine Anti-Ice eingeschaltet |

### ICA — Ice Crystal Anti-Ice Function

Automatischer Schutz gegen Ice Crystal Icing (ICI) · nur **> 30.000 ft**:
- Aktiviert für min. **30 min**, danach 15-min-Inkremente
- Terminiert bei < **28.500 ft**
- Anzeige: **ICA** auf N1-Display · N1/N2/EGT können fluktuieren — normal
- Jedes Triebwerk unabhängig
- Nach Engine/EEC-Tausch: ICA kann bis **75 min** in beliebigem Wetter erscheinen

---

## Engine Start & Ignition

Nur **Autostart** möglich. 2 Startermotoren an der N2-Accessory-Gearbox (elektrisch).

**Stromquellen**: APU (normal) · Forward External Power (alternativ)

**Simultanstart**: nur wenn APU läuft + **beide** APU-Starter/Generatoren verfügbar.

Load Shed immer während Engine Start.

**Startsequenz:** START Selector → START + FUEL CONTROL → RUN · EEC öffnet Fuel Valve + Zünder bei korrektem N2-RPM · EEC kommandiert Starter Cutout bei Idle-Erreichen → Selector → NORM.

### Autostart Abbruchgründe (Boden — kein Retry)

| Bedingung |
|:---|
| Beide Starter ausgefallen |
| Keine N1-Rotation |
| Kein Öldruck-Anstieg |

### Autostart Korrekturen (Boden — max. 3 Versuche)

| Bedingung |
|:---|
| Compressor Stall · Hot Start · Hung Start |
| High Residual EGT · No EGT Rise |
| Loss of one Starter |
| Start time exceeds Starter Duty Cycle |

| EICAS | Level | Bedeutung |
|:---|:---:|:---|
| <span class="c-amber">ENG AUTOSTART L / R</span> | <span class="c-amber">Caution</span> | Autostart abgebrochen |
| <span class="c-amber">ENG STARTERS L / R</span> | <span class="c-amber">Advisory</span> | Beide Starter des Triebwerks ausgefallen |

### In-Flight Start

- EICAS zeigt Start-Envelope (Airspeed-Bereich je Flight Level)
- **X-START**: Airspeed zu niedrig für Windmilling → Starter Assist erforderlich
- Autostart versucht kontinuierlich bis Pilot abbricht (FUEL CONTROL → CUTOFF)
- EGT kann während Windmilling-Start stark fluktuieren — normal

### Engine Ignition

- 2 Zünder pro Triebwerk · EEC wählt Zünder für sukzessive Ground Starts automatisch
- **Beide** Zünder immer bei In-Flight Starts
- Stromquelle: DC (normal) · Standby (Backup)

### Auto-Relight

Aktiv immer wenn Triebwerk ≤ Idle mit FUEL CONTROL in RUN:

| Ereignis | EEC-Reaktion |
|:---|:---|
| Flameout / Rollback | Beide Zünder an bis Idle erreicht |
| Sub-idle Stall | Fuel 1 Sek. abschalten → reduzierter Schedule bis Idle |
| Starker Regen/Hagel-Ingestion | Beide Zünder an bei Flameout |

---

## Engine Fuel System

Fuel-Pfad: Tanke → **Spar Valve** → 1. Stufenpumpe → **Fuel/Oil Heat Exchanger** → 2. Stufenpumpe → Fuel Filter → **FMU** → Engine Fuel Valve → Triebwerk

**Spar Valve** öffnet: Fire Switch IN + (START in START **oder** FUEL CONTROL in RUN)

**Engine Fuel Valve** öffnet: Fire Switch IN + FUEL CONTROL in RUN

**Beide Ventile schließen**: Fire Switch OUT **oder** FUEL CONTROL CUTOFF + START NORM

| EICAS | Level | Bedeutung |
|:---|:---:|:---|
| <span class="c-amber">FUEL FLOW ENG L / R</span> | <span class="c-amber">Advisory</span> | Fuel Flow anomal → Secondary-Anzeige auto |

---

## Engine Oil System

Ölpfad: Engine-Pump → Ölfilter → Fuel/Oil HX (primär) + Air/Oil HX (sekundär bei niedrigem Fuel Flow / hohen Kraftstofftemperaturen) → Komponenten → Scavenge Pump zurück zum Tank

- Kein Minimum-Ölmengen-Limit → keine Crew-Procedure nur wegen niedrigem Ölstand
- Niedriger Ölstand: Secondary Display auto + Invertierte Anzeige (schwarz auf weiß)

| EICAS | Level | Bedeutung |
|:---|:---:|:---|
| <span class="c-amber">ENG OIL FILTER L / R</span> | <span class="c-amber">Advisory</span> | Ölfilter verstopft — Bypass aktiv |
| <span class="c-amber">ENG OIL TEMP L / R</span> | <span class="c-amber">Advisory</span> | Öltemperatur im Amber-Band |
| <span class="c-amber">ENG OIL PRESS L / R</span> | <span class="c-amber">Caution</span> | Öldruck nach Start zu niedrig |

---

## Thrust Reverser

Hydraulisch betätigter Fan-Air-Reverser · **nur am Boden** verfügbar.

- Reverse Lever nur hebbar wenn Forward Lever auf **Idle**
- EEC inhibiert Deployment wenn nicht am Boden mit laufendem Triebwerk
- **Mechanische Verrastung** im Aisle Stand: verhindert volle Rückwärtsschubstellung bis Cowl teilweise ausgefahren (taktiles Feedback)

**Beim Ziehen bis zur Verrastung:**
- Autothrottle trennt
- Auto Speedbrakes deployen

**REV-Anzeige:**
- Transit → **REV amber** über N1-Anzeige
- Fully deployed → **REV green**

**Einfahren:** Lever ganz nach unten → Reverser stowed + locked · Forward Lever blockiert bis Reverse Lever voll unten.

| EICAS | Level | Bedeutung |
|:---|:---:|:---|
| <span class="c-amber">ENG REV LIMITED L / R</span> | <span class="c-amber">Advisory</span> | Reverser kann nicht ausfahren oder nur bis Idle |
| <span class="c-amber">ENG REVERSER L / R</span> | <span class="c-amber">Advisory</span> | Reverser System Fault (am Boden) |
| <span class="c-amber">ENG REV AIR/GND</span> | <span class="c-amber">Caution</span> | Air/Ground-Logik für Reverser-Inhibit ausgefallen |
| <span class="c-amber">ENG REV COMMANDED L / R</span> | <span class="c-amber">Caution</span> | Reverse Lever nicht unten im Flug |

---

## Airborne Vibration Monitoring

Quelle wird angezeigt: **N1**, **N2**, oder **BB** (Broadband = Durchschnitt wenn Quelle unbekannt).

- Kein zertifiziertes Limit — keine spezifischen Crew-Procedures allein aufgrund Vibration
- Ab **4 Units**: Secondary Display auto + invertierte Anzeige
- N1-Vibration meist spürbar · N2-Vibration oft nicht fühlbar
- Beide reagieren typischerweise auf Thrust-Lever-Anpassung

---

## Engine Failure Alert System

| Situation | Alert | Level |
|:---|:---|:---:|
| T/O 65 kts bis 6 kts vor V1: Ist-Schub < Soll-Schub | **ENG FAIL** auf PFD + HUD · Voice „Engine Fail" · Master WARNING | <span class="c-red">Warning</span> |
| Triebwerk sinkt unbeabsichtigt unter Idle | <span class="c-amber">ENG FAIL L / R</span> (EICAS) | <span class="c-amber">Caution</span> |
| Schub weicht von Command ab und nähert sich nicht an (> 6 kts vor V1) | <span class="c-amber">ENG THRUST L / R</span> · Thrust-Arc amber · Master CAUTION | <span class="c-amber">Caution</span> |

---

> [!limit] Limitations
> <div class="cl-item"><strong>Engine Oil — Mindesttemperatur für Start</strong><span class="cl-dots"></span><span>−40°C</span></div>
> <div class="cl-item"><strong>T/O- und G/A-Schub — Zeitlimit</strong><span class="cl-dots"></span><span>10 Minuten</span></div>
> <div class="cl-item"><strong>Engine Start — CW >40 kts</strong><span class="cl-dots"></span><span>N1 ≥ 45% vor Brake Release</span></div>
> <div class="cl-item"><strong>Engine Start — TW >5 kts + Wind >35 kts</strong><span class="cl-dots"></span><span>N1 ≥ 45% vor Brake Release</span></div>
> <div class="cl-item"><strong>Engine Start — Wind >55 kts</strong><span class="cl-dots"></span><span>nur Idle</span></div>

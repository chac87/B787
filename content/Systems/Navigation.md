# Navigation

## Übersicht

| System | Anzahl | Tuning | Primäre Ausgabe |
|:---|:---:|:---:|:---|
| GPS | 2 (L/R) | Automatisch | Position → IRS → FMC |
| IRS (IRU + AHRU) | 2 IRU + 2 AHRU | — | Airspeed, Attitude, Heading, Position |
| ADRS | 1 (L/C/R Pitot) | — | Höhe + Geschwindigkeit für alle Systeme |
| VOR | 2 | FMC / manuell | Position updates, ND bearing |
| DME | 2 | FMC / manuell | Distanz, FMC position updates |
| ILS | 2 | FMC / manuell | LOC + GS Deviation |
| ADF | 2 | Manuell (CDU) | Bearing auf ND/PFD |
| Transponder | 2 | ATP / TCP | Mode S, ADS-B, TCAS |
| Weather Radar | 1 | TCP | ND (MAP) + Mini-Map bis 320 NM |

---

## GPS

L/R GPS-Empfänger arbeiten **unabhängig** — Position → IRS → hybrides GPS/Inertial → FMC.

- Bei IRS-Ausfall: GPS liefert Position + Track **direkt** an FMC (kein EICAS-Hinweis)
- GPS für **alle Approaches** nutzen, wenn FMC-Datenbank auf **WGS-84** referenziert
- Inhibit via GPS NAV prompt auf POS REF page 3/4

| EICAS | Level | Bedeutung |
|:---|:---:|:---|
| <span class="c-amber">GPS</span> | <span class="c-amber">Advisory</span> | Beide GPS-Systeme ausgefallen |

---

## ADRS — Air Data Reference System

Versorgt alle Systeme mit **Höhe + Geschwindigkeit** aus L/C/R Pitot-Static. **Unabhängig vom IRS.**

**Fallback-Hierarchie (AIR DATA/ATT switch AUTO):**

| Priorität | Quelle | Airspeed | Altitude |
|:---:|:---|:---:|:---:|
| 1 | ADRS (voted) | normal | normal |
| 2 | IRS + GPS (Backup) | AOA SPD | GPS ALT |
| 3 | ISFD (Center Pitot) | ISFD SPD | ISFD ALT |

ISFD ist vollständig unabhängig von IRU und AHRU.

---

## IRS — Inertial Reference System

Berechnet: Airspeed, Attitude, Heading, Position — für Displays, FMS, FBW, Engine Controls.

**Komponenten:**

| Einheit | Anzahl | Funktion |
|:---|:---:|:---|
| IRU (Inertial Reference Unit) | 2 | Hybrid GPS/Inertial Position + Navigation |
| AHRU (Attitude & Heading Reference Unit) | 2 | Attitude, Heading, Rate — kein eigenständiges Position |

### IRU Alignment

- Power-Up → Align Mode → EICAS Memo **IRU ALIGN MODE L+R**
- Dauer: **7–10 min** (mittlere Breiten) · bis **17 min** (hohe Breiten)
- Kein Bewegen des Flugzeugs bis Alignment abgeschlossen
- GPS verfügbar → **keine manuelle Position erforderlich**; GPS nicht verfügbar → Position manuell eingeben (POS INIT)
- Bei Flugunterbrechung: Automatic Realign Mode (Neuausrichtung bis Bewegung)
- In-flight Realignment möglich: Attitude in Sekunden, volle Navigation in **≈ 10 min** (GPS erforderlich)

> [!info] Empfehlung
> Position update empfohlen, wenn Navigation Mode > **18 Stunden**

### IRU Power

- Initial Power-Up: Batterie-Bus + IRS Switches ON
- Battery Switch OFF → Hot Battery Bus hält IRS weiter unter Strom
- **ON BAT** Light leuchtet + Horn im Gear Well → Maintenance-Warnung

### IRS Failure — EICAS

| EICAS | Level | Bedeutung | Konsequenz |
|:---|:---:|:---|:---|
| <span class="c-amber">NAV IRU</span> | <span class="c-amber">Advisory</span> | Beide IRUs ausgefallen | FMC nutzt AHRUs + GPS weiter |
| <span class="c-amber">NAV INERTIAL SYS</span> | <span class="c-amber">Caution</span> | Beide IRUs **und** AHRUs ausgefallen | GPS (INRs) übernimmt — LNAV/VNAV nicht verfügbar |

**Inoperativ nach IRS-Ausfall (NAV INERTIAL SYS):**

| Kategorie | Inoperativ |
|:---|:---|
| AFDS Modes | FPA, G/S, HDG HOLD/SEL\*, LNAV, LOC, TO/GA, TRK HOLD/SEL, VNAV |
| Navigation | FMC Performance Predictions, FMC VNAV pages, ND Wind Arrow |
| PFD | PFD Heading\* |
| Sonstiges | Autobrake |

\* *Operativ, wenn Standby Compass Heading auf POS INIT eingegeben wird.*

**Zusätzlich inoperativ nach IRS + GPS-Ausfall:**
CDU active leg, Direct-to, DIVERT NOW, Nav Radio Autotuning, ND Map (center + expanded)

---

## Radio Navigation

| System | Tuning | Besonderheit |
|:---|:---|:---|
| VOR (2) | FMC automatisch / manuell | Bearing auf ND, Position updates via DME/VOR pair |
| DME (2) | FMC automatisch / manuell | POS REF 2/4 zeigt genutzte DME-Stationen |
| ILS (2) | FMC automatisch / manuell | Autotune ab 50 NM TOD oder 150 NM Runway Threshold |
| ADF (2) | Manuell (CDU NAV RADIO) | Bearing auf PFD Mini-Map, cyan dargestellt |

**ILS Autotune Inhibit** — aktiv wenn:
- Autopilot engaged **oder** FD on + LOC/GS captured

**ILS Tuning wieder freigegeben** wenn:
- TO/GA gedrückt, **oder** AP disengaged + beide FDs off, **oder** APP mode deselected > 1500 ft RA

> [!caution] ILS Autotune — Inhibit nach Takeoff
> ILS Autotune ist nach dem **ersten Takeoff 10 Minuten** inhibited (PFD-Überlastung vermeiden). Ein neu ausgeführter Approach im aktiven Flugplan überschreibt diesen Inhibit.

| EICAS | Level | Bedeutung |
|:---|:---:|:---|
| <span class="c-amber">SINGLE SOURCE APPROACH</span> | <span class="c-amber">Caution</span> | Ein ILS-Empfänger ausgefallen — beide PFDs zeigen verbleibenden ILS |

**Navaid Identifier Decoding:** Morse → Klartext auf PFD/ND. Kann fehlerhaft sein — bei Zweifeln immer **Morse-Audio** zur Verifikation nutzen.

---

## Transponder & ADS-B

Zwei ATC-Transponder + TCAS — gesteuert über **ATP** (primär) oder **TCP** (Backup).

**Transponder Modes:**

| ATP Selection | Transponder | TCAS | ADS-B Out | ADS-B In |
|:---|:---:|:---:|:---:|:---:|
| STBY | Off | Off | Off | (\*) |
| ALT RPTG OFF | On (kein Mode C) | Off | On | Off |
| XPDR | On | Off | On | On |
| TA ONLY | On | TA only | On | On |
| TA/RA | On | TA/RA | On | On |

(\*) *Optional per Software aktivierbar.*

> [!info] Ground Tracking
> TCAS-Modes **nicht** für Ground Tracking verwenden — nur Transponder-Modus (nicht STBY).

| EICAS | Level | Bedeutung |
|:---|:---:|:---|
| <span class="c-amber">TRANSPONDER</span> | <span class="c-amber">Advisory</span> | Beide Transponder ausgefallen |
| <span class="c-amber">TRANSPONDER PANEL</span> | <span class="c-amber">Advisory</span> | ATP ausgefallen — Transponder/TCAS via TCP setzen |

**ATP Inoperativ:** ALERT/XPDR CTL page im TCP → MENU → ALERT/XPDR CTL ON (LSK 1R) → LSK 2R.

---

## Weather Radar

- Steuerung via **TCP** (SYS POWER ON erforderlich, bevor EFIS WXR-Switch funktioniert)
- Anzeige auf **ND (MAP mode)** und **Mini-Map**
- Max Darstellungsreichweite: **320 NM**
- Self-Test: Power-Up, jeden Sweep, beim Unterschreiten von **2.300 ft AGL**
- Turbulenz nur bei **ausreichend Niederschlag** erkennbar — **kein Clear-Air-Turbulence**-Nachweis
- Integrierte **Predictive Windshear**-Warnung (PWS)

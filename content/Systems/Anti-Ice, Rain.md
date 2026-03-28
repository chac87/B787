# Anti-Ice, Rain

## Ice Detection

- **2 Eisdetektoren** (Vibrating-Rod-Prinzip): messen TAT und Flüssigwassergehalt
- Beheizt nach Engine Start · inhibiert < **75 kts** am Boden
- Erkennung löst automatisch WAI/EAI im AUTO-Modus aus

| EICAS | Level | Bedeutung |
|:---|:---:|:---|
| <span class="c-amber">ICE DETECTORS</span> | <span class="c-amber">Advisory</span> | Beide Eisdetektoren ausgefallen |

---

## Engine Anti-Ice

- Enteist **Triebwerksinlets** mit Zapfluft (Hot-Air-Bleed) · Core + Cowl
- **L / R unabhängig**
- **EAI**-Annunciation im EICAS erscheint, wenn N1 oberhalb Leerlauf

### Betriebsmodi

| Switch | Betrieb | Wirkung |
|:---|:---|:---|
| **AUTO** | Nur im Flug | Automatisch bei Eiserkennung durch Detektoren |
| **ON** | Boden + Flug | Manuell dauerhaft ein |
| **OFF** | — | Aus |

**Auto-Close der Ventile** bei: beide Triebwerke aus · Flughöhe > Threshold · Thrust Lever Advance auf Takeoff-N1.

**EEC-Leerlaufkorrektur**: Bei aktivem EAI erhöht der EEC den Ground-Idle-N1, um ausreichend Zapfluftdruck sicherzustellen.

**Leak Detection**: Überhitzungssensoren im Inlet-Bereich erkennen Leckagen der Zapfluftleitungen.

| EICAS | Level | Bedeutung |
|:---|:---:|:---|
| <span class="c-amber">EAI L / R</span> | <span class="c-amber">Advisory</span> | Engine Anti-Ice aktiv (Annunciation) |
| <span class="c-amber">EAI VALVE L / R</span> | <span class="c-amber">Advisory</span> | EAI-Valve nicht in Sollposition |

---

## Wing Anti-Ice

- Elektrische Heizmatten auf den **Leading-Edge-Slats**
- Inhibiert < **75 kts** am Boden
- **WAI**-Annunciation erscheint ab einem N1-Schwellenwert

### Betriebsmodi

| Switch | Betrieb | Wirkung |
|:---|:---|:---|
| **AUTO** | Im Flug | Automatisch bei Eiserkennung · inkl. Clean-up-Zyklus nach Enteisen |
| **MAN** | Boden + Flug | Manuell bei TAT < **25 °C** (Detektoren ggf. nicht zuverlässig) |
| **OFF** | — | Aus |

**Symmetrieschutz**: Fällt eine Matte aus → gegenüberliegende Seite wird ebenfalls deaktiviert.

**Load Shedding**: Bei hoher Strombelastung werden Matten kurzzeitig abgeschaltet — max. **30 Sek.** Unterbrechung pro Zyklus.

| EICAS | Level | Bedeutung |
|:---|:---:|:---|
| <span class="c-amber">WAI</span> | <span class="c-amber">Advisory</span> | Wing Anti-Ice aktiv (Annunciation) |
| <span class="c-amber">WAI SYS</span> | <span class="c-amber">Advisory</span> | Wing Anti-Ice System-Fault |

---

## Maneuver Margin Effects

| Klappenkonfiguration | Wirkung bei aktivem Anti-Ice |
|:---|:---|
| **Flaps nicht UP** | Stick-Shaker-Geschwindigkeit erhöht · bleibt erhöht bis: kein Eis erkannt **und** TAT > **10 °C**, oder Landing |
| **Flaps UP** | Kein Effekt auf Maneuver Margin |

---

## Pack Inlet Anti-Ice

- Elektrische Heizung an den **CAC-Einlassvorderkanten**
- Vollautomatisch · **keine** Flight Deck Controls
- Inhibiert am Boden und bei TAT > **10 °C**

---

## Window Heat

| Scheibe | Beheizung | Typ |
|:---|:---|:---|
| **FWD Windows** (Capt + FO) | Anti-Ice (außen) + Anti-Fog (innen) | PRIMARY AUTO · BACKUP manuell |
| **Side Windows** | Anti-Fog (innen) | Automatisch |

- **PRIMARY AUTO**: Automatischer Betrieb · temperaturgeregelt
- **BACKUP**: Für FWD Windows bei Primary-Ausfall (manuell zuschaltbar)

| EICAS | Level | Bedeutung |
|:---|:---:|:---|
| <span class="c-amber">WINDOW HEAT</span> | <span class="c-amber">Advisory</span> | Window-Heat-System-Fault |

---

## Windshield Wipers

- **3 Geschwindigkeitsstufen** · Capt + FO unabhängig
- Fahren automatisch in Stow-Position bei **OFF**

- **Wascher**: Capt + FO je eigene Waschdüsen

---

## Probe Heat

| Sonde | Anzahl | Beheizung |
|:---|:---:|:---|
| Pitot Probes | 3 | Bei laufendem Engine (entweder) |
| AOA Vanes | 2 | Bei laufendem Engine (entweder) |
| TAT Probe | 1 | Nur im Flug |

- Automatische Aktivierung — keine manuelle Steuerung
- **PROBE HEAT**-EICAS bei Ausfall einer oder mehrerer Sonden

| EICAS | Level | Bedeutung |
|:---|:---:|:---|
| <span class="c-amber">PROBE HEAT</span> | <span class="c-amber">Advisory</span> | Probe Heat System-Fault |

---

> [!limit] Limitations
> <div class="cl-item"><strong>EAI — ground</strong><span class="cl-dots"></span><span>ON</span></div>
> <div class="cl-item"><strong>EAI — flight</strong><span class="cl-dots"></span><span>ON or AUTO</span></div>
> <div class="cl-item"><strong>EAI — not when</strong><span class="cl-dots"></span><span>OAT >10°C (ground) · TAT >15°C (flight) · OAT <−40°C</span></div>
> <div class="cl-item"><strong>WAI — flight</strong><span class="cl-dots"></span><span>ON or AUTO</span></div>
> <div class="cl-item"><strong>WAI — not when</strong><span class="cl-dots"></span><span>TAT >15°C · OAT <−40°C</span></div>
> <div class="cl-item"><strong>Ice Detection — flight</strong><span class="cl-dots"></span><span>TAT ≤15°C + visible moisture or clouds</span></div>
> <div class="cl-item"><strong>Ice Detection — ground</strong><span class="cl-dots"></span><span>OAT ≤10°C + contaminated surface + visible moisture</span></div>

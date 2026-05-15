# Anti-Ice, Rain

| Bleed Air | Electrical |
|:---|:---|
| <span style="font-weight:normal">Engine Anti-Ice (EAI)</span> | Wing Anti-Ice (WAI)<br>Flight deck windows<br>Air data probes<br>Pack ram air inlets |

## Automatic Ice Detection

- **2 Ice Detectors** on the left and right lower fuselage (vibrating rod principle)

When icing conditions are sensed, the following systems activate automatically in AUTO mode:

| System | Ground | Flight |
|:---|:---:|:---:|
| **WAI** | above 75 kts | yes |
| **EAI** | – | yes |
| **Pack Inlet Anti-Ice** | – | yes |

## Engine Anti-Ice

- Heats **engine inlets** using hot bleed air
- **L / R independent**
- **EAI** annunciation on EICAS when N1 is above idle

### Operating Modes

| Switch | Operation | Effect |
|:---|:---|:---|
| **AUTO** | In flight only | Automatic when icing detected |
| **ON** | Ground + flight | Manually on continuously |
| **OFF** | – | Off |

**Auto-close of valves** when: both engines shut down · altitude above threshold · thrust lever advance to takeoff N1.

**EEC idle compensation**: When EAI is active, the EEC increases ground idle N1 to ensure sufficient bleed air pressure.

**Leak detection**: Overheat sensors in the inlet area detect bleed air duct leaks.

## Wing Anti-Ice

- Electro-thermal heating mats on **4 leading-edge slats per wing**
- Slats are anti-iced in all positions
- Inhibited below **75 kts** on the ground
- **WAI** annunciation appears above an N1 threshold

### Operating Modes

| Switch | Operation | Effect |
|:---|:---|:---|
| **AUTO** | Ground (GS > 75 kts) + flight | Automatic when icing detected · includes clean-up cycle after de-icing |
| **MAN** | Ground + flight | Manual when TAT < **25 °C** (detectors may be unreliable) |
| **OFF** | – | Off |

**Symmetry protection**: If one mat fails → opposite side is also deactivated.

**Load shedding**: Mats are briefly shed during high electrical load – max. **30 sec** interruption per cycle.

## Pack Inlet Anti-Ice

- Electric heating on the **CAC inlet leading edges**
- Fully automatic · **no** flight deck controls
- Inhibited on the ground and when TAT > **10 °C**

## Window Heat

| Mode | Coverage |
|:---|:---|
| **Primary** | All windows anti-fogged · forward windows anti-iced |
| **Backup** | Forward windows anti-fogged only |

On primary system malfunction, the backup system automatically anti-fogs the forward windows.

## Windshield Wipers

- **3 speed settings** · Capt + F/O independent
- Automatically return to stow position when set to **OFF**
- **Washers**: Capt + F/O each have dedicated wash nozzles

## Probe Heat

| Probe | Count | Heating |
|:---|:---:|:---|
| Pitot Probes | 3 | With either engine running |
| AOA Vanes | 2 | With either engine running |
| TAT Probe | 1 | In flight only |

- Automatic activation – no manual control
- <span class="c-amber">**PROBE HEAT**</span> EICAS message on failure of one or more probes

---

> [!limit] Limitations
> <div class="cl-item"><strong>EAI – ground</strong><span class="cl-dots"></span><span>ON</span></div>
> <div class="cl-item"><strong>EAI – flight</strong><span class="cl-dots"></span><span>ON or AUTO</span></div>
> <div class="cl-item"><strong>EAI – not when</strong><span class="cl-dots"></span><span>OAT >10°C (ground) · TAT >15°C (flight) · OAT <−40°C</span></div>
> <div class="cl-item"><strong>WAI – flight</strong><span class="cl-dots"></span><span>ON or AUTO</span></div>
> <div class="cl-item"><strong>WAI – not when</strong><span class="cl-dots"></span><span>TAT >15°C · OAT <−40°C</span></div>
> <div class="cl-item"><strong>Ice Detection – flight</strong><span class="cl-dots"></span><span>TAT ≤15°C + visible moisture or clouds</span></div>
> <div class="cl-item"><strong>Ice Detection – ground</strong><span class="cl-dots"></span><span>OAT ≤10°C + contaminated surface + visible moisture</span></div>

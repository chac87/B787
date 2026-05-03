---
title: GPS Signal Interference
tags: [sop, supplementary, flight-management, navigation]
---

# GPS Signal Interference

<div class="nnc-condition">Condition: GPS Interference is expected, suspected, experienced or directed by NOTAM.<br>Objective: To update FMC position with the most appropriate source and to avoid false GPWS Look-Ahead terrain warnings.</div>

<div class="nnc-note"><strong>Note:</strong> Further information can be found in the OM-B: Refer to 12-11 Flight Management, Navigation and 12-15 Warning Systems.</div>

<div class="nnc-note"><strong>Note:</strong> Dispatch of aircraft with MEL Items of</div>
<div class="nnc-note">• Inertial Reference Units (IRUs),</div>
<div class="nnc-note">• Distance Measuring Equipment (DME)</div>
<div class="nnc-note">• VOR Navigation Systems,</div>
<div class="nnc-note">• Instrument Landing Systems (ILS),</div>
<div class="nnc-note">• Radio Altimeter Systems (RA),</div>
<div class="nnc-note">and the consequences of additional failures must be evaluated by the flight crew for flights into areas of known GPS/GNSS RFI.</div>

<div class="nnc-caution"><strong>Caution:</strong> Flight into known or expected GPS/GNSS RFI Areas with inoperative (Basic-) GPWS is not permitted.</div>

<div class="nnc-note"><strong>Note:</strong></div>
<div class="nnc-note">• Advise ATC as soon as practical when responding to alerts, signs, and symptoms of GPS interference of any degraded navigation capability and systems that have not recovered due to spoofing.</div>
<div class="nnc-note">• Use the following procedures in any area or phase of flight where GPS interference is expected, suspected, experienced or directed by NOTAM, Company NOTAM or other approved source. Once assured that GPS interference or spoofing is not a threat, revert to normal SOPs.</div>
<div class="nnc-note">• Check if GPS is required for airspace or approach.</div>
<div class="nnc-note">• Disabling of GPS updating for the entire flight is not recommended.</div>
<div class="nnc-note">• If systems such as LNAV path or VNAV path experience degraded performance or unsatisfactory performance due to interference, reduce the level of automation (e.g., HDG/TRK, FLCH, VS).</div>
<div class="nnc-note">• Cross-check terrain altitude using enroute charts if terrain depiction on ND appears unreasonable for the geographic location.</div>

---

<div class="nnc-step">• Preliminary Preflight Procedure: <span style="font-weight:400;">(only when departing from airports with known GPS Signal Interference as announced by NOTAM, COMPANY NOTAM or other approved source)</span></div>

<div class="cl-indent">

<div class="nnc-note"><strong>Note:</strong></div>
<div class="nnc-note">• When GPS update is turned off before dual IRSs alignment, the FMC will automatically set GPS update back to ON to avoid NO NAV mode.</div>
<div class="nnc-note">• When GPS update is turned OFF after alignment the FMC position will still include past GPS data that was valid during inertial alignment.</div>
<div class="nnc-note">• When FMC position is subsequently manually updated to the IRS position, GPS data will no longer affect the current and future FMC position.</div>

<div class="cl-item"><strong>IRS selectors</strong><span class="cl-dots"></span><strong>OFF 30 seconds, then ON</strong> <span class="nnc-role">F/O</span></div>
<div class="nnc-note"><strong>Note:</strong> Wait for additional 30 sec.</div>
<div class="cl-sub">POS INIT page:</div>
<div class="cl-sub">– Verify that the time is correct, otherwise call Maintenance</div>
<div class="cl-sub">– Enter the present position on the SET INERTIAL POS line. Use the most accurate latitude and longitude. Do not use GPS POS or last position.</div>
<div class="nnc-note"><strong>Note:</strong> Comparing the FMC position with the actual location of the gate or stand location will reveal if the FMC position is corrupted.</div>

<div class="cl-item"><strong>GPS UPDATE</strong><span class="cl-dots"></span><strong>OFF</strong> <span class="nnc-role">F/O</span></div>
<div class="cl-sub">Refer to OM-B 2-2-11 Navaid Inhibit.</div>
<div class="nnc-note"><strong>Note:</strong> Selecting GPS updating to OFF does not inhibit GPS, GPWS Look-Ahead terrain and time / date function.</div>

<div class="cl-item"><strong>FMC position</strong><span class="cl-dots"></span><strong>update to IRS position</strong> <span class="nnc-role">F/O</span></div>
<div class="cl-sub">Refer to OM-B 2-2-11 FMS Position Update.</div>

<div class="cl-item"><strong>DME/VOR/LOC UPDATE</strong><span class="cl-dots"></span><strong>as required</strong> <span class="nnc-role">F/O</span></div>
<div class="cl-sub">Refer to OM-B 2-2-11 Navaid Inhibit.</div>

<div class="cl-item"><strong>GND PROX TERR OVRD</strong><span class="cl-dots"></span><strong>OVRD</strong> <span class="nnc-role">PF</span></div>
<div class="cl-sub">On TCP/GPWS toggle TERR OVRD to OVRD (LSK 3R). This inhibits Look-Ahead obstacle and terrain alerts and display.</div>
<div class="nnc-note"><strong>Note:</strong> TERR OVRD Message is shown on ND and Mini Map, GPWS TERR OVRD is shown on EICAS.</div>

<div class="cl-item"><strong>ND drop-down menu POS</strong><span class="cl-dots"></span><strong>SELECT</strong> <span class="nnc-role">B</span></div>
<div class="cl-sub">When the POS on the ND drop-down menu is selected, the symbols for the GPS, IRS and radio positions relative to the FMC position are shown.</div>

</div>

---

<div class="nnc-step">• In Cruise Flight, prior entering area of suspected or known spoofing, <span style="font-weight:400;">as announced by NOTAM, COMPANY NOTAM or other approved source:</span></div>

<div class="cl-indent">

<div class="cl-item"><strong>ND drop-down menu POS</strong><span class="cl-dots"></span><strong>SELECT</strong> <span class="nnc-role">B</span></div>
<div class="cl-item"><strong>GPS UPDATE</strong><span class="cl-dots"></span><strong>OFF</strong> <span class="nnc-role">PM</span></div>
<div class="cl-item"><strong>DME/VOR/LOC UPDATE</strong><span class="cl-dots"></span><strong>as required</strong> <span class="nnc-role">PM</span></div>
<div class="cl-item"><strong>GND PROX TERR OVRD</strong><span class="cl-dots"></span><strong>OVRD</strong> <span class="nnc-role">PM</span></div>

</div>

---

<div class="nnc-step">• When clear of GPS interference and no further interference is expected or latest before top of descent:</div>

<div class="cl-indent">

<div class="nnc-note"><strong>Note:</strong></div>
<div class="nnc-note">• GPS data, communication, and surveillance functions are usually recovered as soon as the aircraft leaves the area affected by interference. Some spoofing events can impact the user system for the remainder of the flight.</div>
<div class="nnc-note">• If one GPS distance is greater than 0.1 or one GPS BRG / DIST is blank, this can be an indication that the GPS position is still affected by GPS interference.</div>

<div class="cl-item"><strong>Airplane system Time / Date</strong><span class="cl-dots"></span><strong>CHECK</strong> <span class="nnc-role">B</span></div>

<div class="cl-item"><strong>GPS L and R BRG / DIST</strong><span class="cl-dots"></span><strong>CHECK</strong> <span class="nnc-role">B</span></div>
<div class="cl-sub">Use CDU POS REF page 4/4 to check GPS Bearing and Distance.</div>
<div class="nnc-note"><strong>Note:</strong> If time / date is incorrect or one GPS BRG / DIST is blank this can be an indication that the GPS / INR did not recover from GPS interference.</div>
<div class="nnc-caution"><strong>Caution:</strong> Flight Crew cycling (pulling and resetting) of a circuit breaker is not recommended.</div>

</div>

---

<div class="nnc-step">• If Time / Date and GPS / INR does recover:</div>

<div class="cl-indent">

<div class="cl-item"><strong>GPS UPDATE</strong><span class="cl-dots"></span><strong>ON</strong> <span class="nnc-role">PM</span></div>
<div class="cl-item"><strong>DME/VOR/LOC UPDATE</strong><span class="cl-dots"></span><strong>as required</strong> <span class="nnc-role">PM</span></div>
<div class="cl-item"><strong>GND PROX TERR OVRD</strong><span class="cl-dots"></span><strong>NORM</strong> <span class="nnc-role">PM</span></div>
<div class="cl-sub">This enables Look-Ahead obstacle and terrain alerts and display.</div>

</div>

---

<div class="nnc-step">• If Time / Date and GPS / INR does not recover:</div>

<div class="cl-indent">

<div class="nnc-sub">– A thorough briefing of the terrain situation must be performed,</div>
<div class="nnc-sub">– the QNH / Altimeter Setting must be confirmed by all CM from written source (eDesk),</div>
<div class="nnc-sub">– the Pullup-Maneuver must be addressed in the approach briefing,</div>
<div class="nnc-sub">– OM-A 8.3.4.6 Flight below Minimum Altitudes is not recommended. If flight is conducted according OM-A 8.3.4.6 the maximum speed is Minimum Clean speed or 250 kts, whichever is lower,</div>
<div class="nnc-sub">– the A/C-position must be continuously checked by means of conventional navigation.</div>

<div class="cl-sub">Additional Briefing items:</div>
<div class="nnc-sub">– GPWS Look-Ahead warnings are missing</div>
<div class="nnc-sub">– GPWS Look-Ahead terrain and obstacle display is inhibited</div>
<div class="nnc-sub">– Immediate GPWS alerts are valid</div>
<div class="nnc-sub">– Own ship position in eRM maybe unreliable</div>

</div>

---

<div class="nnc-step">• After Landing:</div>

<div class="cl-indent">

<div class="nnc-note"><strong>Note:</strong></div>
<div class="nnc-note">• TERR OVRD resets automatically 10 min after cabin door is opened.</div>
<div class="nnc-note">• If Time / Date or GPS / INR does not recover a eTLB entry and an IQSMS report is mandatory.</div>

</div>

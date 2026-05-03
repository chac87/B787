---
cssclasses: [eicas-caution]
title: "[] ENG FAIL L, R"
tags: [non-normal, engine]
---

# <span class="h1-bracket">[]</span> ENG FAIL L, R

<a class="nnc-back" href="/Non-Normals/Non-Normal-Checklists">Non-Normal Checklists</a>

<div class="nnc-condition">Condition: Engine speed is below idle.<br>Objective: To restart the engine if needed, or configure for single engine operation.</div>

<div class="reg-selector-bar">
  <button class="reg-btn" data-variant="ABPF">−ABPF to −ABPU / −ABQA to −ABQG</button>
  <button class="reg-btn" data-variant="ABPA">−ABPA to −ABPE</button>
</div>

<div class="reg-variant-block" data-variant="ABPF">
<div class="cl-variant">B787 (-ABPF to -ABPU, -ABQA to -ABQG)</div>

<div class="nnc-text"><span class="nnc-num">1</span>If thrust is lost on <strong>both</strong> engines:</div>
<div class="nnc-cl">
<div class="nnc-goto">▶▶ <a href="/Non-Normals/Non-Normal-Checklists/Dual-Eng-Fail-Stall"><span>Go to the Dual Eng Fail-Stall checklist.</span></a></div>
</div>
<div class="nnc-complete">■ &nbsp; ■ &nbsp; ■ &nbsp; ■</div>

<div class="nnc-text"><span class="nnc-num">2</span>If airframe vibrations with abnormal engine indications exist:</div>
<div class="nnc-cl">
<div class="nnc-goto">▶▶ <a href="/Non-Normals/Non-Normal-Checklists/Eng-Svr-Damage-Sep-L,-R"><span>Go to the Eng Svr Damage/Sep L, R checklist.</span></a></div>
</div>
<div class="nnc-complete">■ &nbsp; ■ &nbsp; ■ &nbsp; ■</div>

<div class="nnc-text"><span class="nnc-num">3</span>If an engine has separated:</div>
<div class="nnc-cl">
<div class="nnc-goto">▶▶ <a href="/Non-Normals/Non-Normal-Checklists/Eng-Svr-Damage-Sep-L,-R"><span>Go to the Eng Svr Damage/Sep L, R checklist.</span></a></div>
</div>
<div class="nnc-complete">■ &nbsp; ■ &nbsp; ■ &nbsp; ■</div>

<div class="nnc-item"><span class="nnc-num">4</span><strong>A/T ARM switch (affected side)</strong><span class="cl-dots"></span><span class="nnc-confirm">Confirm</span><strong>OFF</strong></div>

<div class="nnc-item"><span class="nnc-num">5</span><strong>Thrust lever (affected side)</strong><span class="cl-dots"></span><span class="nnc-confirm">Confirm</span><strong>Idle</strong></div>

<div class="nnc-text"><span class="nnc-num">6</span>The engine automatically attempts to relight. If N2 is above 30% and steadily increasing, the engine is starting.</div>

<div class="nnc-step">7 &nbsp; Choose One:</div>

<div class="nnc-decision">The engine is <strong>starting</strong>:</div>
<div class="nnc-cl">
<div class="nnc-goto">▶▶ Go to step 14</div>
</div>

<div class="nnc-decision">After 1 minute, the engine stays <strong>failed</strong>:</div>
<div class="nnc-cl">
<div class="nnc-item"><span class="nnc-num"></span><strong>FUEL CONTROL switch (affected side)</strong><span class="cl-dots"></span><span class="nnc-confirm">Confirm</span><strong>CUTOFF</strong></div>
<div class="nnc-goto">▶▶ Go to step 8</div>
</div>

<div class="nnc-text"><span class="nnc-num">8</span>A restart can be attempted if there is no abnormal airframe vibration.</div>

<div class="nnc-step">9 &nbsp; Choose One:</div>

<div class="nnc-decision">Restart is <strong>needed</strong>:</div>
<div class="nnc-cl">
<div class="nnc-goto">▶▶ Go to step 10</div>
</div>

<div class="nnc-decision">Restart is <strong>not</strong> needed:</div>
<div class="nnc-cl">
<div class="nnc-goto">▶▶ Go to step 17</div>
</div>

<div class="nnc-text"><span class="nnc-num">10</span>The engine can accelerate to idle very slowly, especially at high altitudes.</div>

<div class="nnc-text"><span class="nnc-num">11</span>Do not interrupt the start attempts. Move the fuel control switch to CUTOFF only when no further start attempts are needed.</div>

<div class="nnc-step">12 &nbsp; Choose One:</div>

<div class="nnc-decision">X-START is <strong>shown</strong>:</div>
<div class="nnc-cl">
<div class="nnc-item"><span class="nnc-num"></span><strong>START selector (affected side)</strong><span class="cl-dots"></span><strong>START</strong></div>
<div class="nnc-goto">▶▶ Go to step 13</div>
</div>

<div class="nnc-decision">X-START is <strong>blank</strong>:</div>
<div class="nnc-cl">
<div class="nnc-goto">▶▶ Go to step 13</div>
</div>

<div class="nnc-item"><span class="nnc-num">13</span><strong>FUEL CONTROL switch (affected side)</strong><span class="cl-dots"></span><strong>RUN</strong></div>

<div class="nnc-step">14 &nbsp; Choose One:</div>

<div class="nnc-decision">Engine <strong>starts</strong> and runs normally:</div>
<div class="nnc-cl">
</div>
<div class="nnc-complete">■ &nbsp; ■ &nbsp; ■ &nbsp; ■</div>

<div class="nnc-decision">Engine stays <strong>failed</strong> or is <strong>damaged</strong>:</div>
<div class="nnc-cl">
<div class="nnc-goto">▶▶ Go to step 15</div>
</div>

<div class="nnc-item"><span class="nnc-num">15</span><strong>FUEL CONTROL switch (affected side)</strong><span class="cl-dots"></span><span class="nnc-confirm">Confirm</span><strong>CUTOFF</strong></div>

<div class="nnc-item"><span class="nnc-num">16</span><strong>START selector (affected side)</strong><span class="cl-dots"></span><strong>NORM</strong></div>

<div class="nnc-item"><span class="nnc-num">17</span><strong>APU selector (if APU available)</strong><span class="cl-dots"></span><strong>START, then ON</strong></div>

<div class="nnc-item"><span class="nnc-num">18</span><strong>TRANSPONDER MODE selector</strong><span class="cl-dots"></span><strong>TA ONLY</strong></div>

<div class="nnc-text"><span class="nnc-num">19</span>Plan to land at the nearest suitable airport.</div>

<div class="nnc-text"><span class="nnc-num">20</span>Do <strong>not</strong> accomplish the following checklists:</div>
<div class="nnc-sub">• AUTOTHROTTLE</div>
<div class="nnc-sub">• FUEL PUMP CTR L+R</div>

<div class="nnc-step">21 &nbsp; Choose One:</div>

<div class="nnc-decision">Landing using flaps <strong>20</strong>:</div>
<div class="nnc-cl">
<div class="nnc-item"><span class="nnc-num"></span><strong>Tuning and control panel GPWS FLAP OVRD</strong><span class="cl-dots"></span><strong>OVRD</strong></div>
<div class="nnc-note"><strong>Note:</strong> Use flaps 20 and v<sub>REF</sub> 20 for landing and flaps 5 for go-around. Buffet can be felt with flaps extended.</div>
<div class="nnc-note">Check the Non-Normal Configuration Landing Distance tables for ENG SHUTDOWN L, R in the Performance Inflight-QRH chapter or other approved source.</div>
<div class="nnc-goto">▶▶ Go to step 22</div>
</div>

<div class="nnc-decision">Landing using flaps <strong>30 (if performance allows)</strong>:</div>
<div class="nnc-cl">
<div class="nnc-note"><strong>Note:</strong> Use flaps 30 and v<sub>REF</sub> 30 for landing and flaps 20 for go-around. Buffet can be felt with flaps extended.</div>
<div class="nnc-note">Check the Non-Normal Configuration Landing Distance tables for ENG SHUTDOWN L, R in the Performance Inflight-QRH chapter or other approved source.</div>
</div>
<div class="nnc-complete">■ &nbsp; ■ &nbsp; ■ &nbsp; ■</div>

<div class="nnc-complete">22&ensp;&ensp;Checklist Complete Except Deferred Items</div>

<div class="nnc-deferred-header">DEFERRED ITEMS</div>

<div class="nnc-deferred-title">Descent Checklist</div>
<div class="nnc-item"><span class="nnc-num"></span><strong>Recall</strong><span class="cl-dots"></span><strong>Checked</strong></div>
<div class="nnc-item"><span class="nnc-num"></span><strong>Notes</strong><span class="cl-dots"></span><strong>Checked</strong></div>
<div class="nnc-item"><span class="nnc-num"></span><strong>Autobrake</strong><span class="cl-dots"></span><strong>—</strong></div>
<div class="nnc-item"><span class="nnc-num"></span><strong>Landing data</strong><span class="cl-dots"></span><strong>v<sub>REF</sub> 20 ___ Minimums ___</strong></div>
<div class="nnc-item"><span class="nnc-num"></span><strong>Approach briefing</strong><span class="cl-dots"></span><strong>Completed</strong></div>

<div class="nnc-deferred-title">Approach Checklist</div>
<div class="nnc-item"><span class="nnc-num"></span><strong>Altimeters</strong><span class="cl-dots"></span><strong>—</strong></div>

<div class="nnc-deferred-title">Landing Checklist</div>
<div class="nnc-item"><span class="nnc-num"></span><strong>Speedbrake</strong><span class="cl-dots"></span><strong>ARMED</strong></div>
<div class="nnc-item"><span class="nnc-num"></span><strong>Landing gear</strong><span class="cl-dots"></span><strong>DOWN</strong></div>
<div class="nnc-item"><span class="nnc-num"></span><strong>Flaps</strong><span class="cl-dots"></span><strong>20</strong></div>

<div class="nnc-complete">■ &nbsp; ■ &nbsp; ■ &nbsp; ■</div>

<div class="cl-variant-end">END B787 (-ABPF to -ABPU, -ABQA to -ABQG)</div>
</div>

<div class="reg-variant-block" data-variant="ABPA">
<div class="cl-variant">B787 (-ABPA to -ABPE)</div>

<div class="nnc-text"><span class="nnc-num">1</span>If thrust is lost on <strong>both</strong> engines:</div>
<div class="nnc-cl">
<div class="nnc-goto">▶▶ <a href="/Non-Normals/Non-Normal-Checklists/Dual-Eng-Fail-Stall"><span>Go to the Dual Eng Fail-Stall checklist.</span></a></div>
</div>
<div class="nnc-complete">■ &nbsp; ■ &nbsp; ■ &nbsp; ■</div>

<div class="nnc-text"><span class="nnc-num">2</span>If airframe vibrations with abnormal engine indications exist:</div>
<div class="nnc-cl">
<div class="nnc-goto">▶▶ <a href="/Non-Normals/Non-Normal-Checklists/Eng-Svr-Damage-Sep-L,-R"><span>Go to the Eng Svr Damage/Sep L, R checklist.</span></a></div>
</div>
<div class="nnc-complete">■ &nbsp; ■ &nbsp; ■ &nbsp; ■</div>

<div class="nnc-text"><span class="nnc-num">3</span>If an engine has separated:</div>
<div class="nnc-cl">
<div class="nnc-goto">▶▶ <a href="/Non-Normals/Non-Normal-Checklists/Eng-Svr-Damage-Sep-L,-R"><span>Go to the Eng Svr Damage/Sep L, R checklist.</span></a></div>
</div>
<div class="nnc-complete">■ &nbsp; ■ &nbsp; ■ &nbsp; ■</div>

<div class="nnc-item"><span class="nnc-num">4</span><strong>A/T ARM switch (affected side)</strong><span class="cl-dots"></span><span class="nnc-confirm">Confirm</span><strong>OFF</strong></div>

<div class="nnc-item"><span class="nnc-num">5</span><strong>Thrust lever (affected side)</strong><span class="cl-dots"></span><span class="nnc-confirm">Confirm</span><strong>Idle</strong></div>

<div class="nnc-text"><span class="nnc-num">6</span>The engine automatically attempts to relight. If N2 is above 30% and steadily increasing, the engine is starting.</div>

<div class="nnc-step">7 &nbsp; Choose One:</div>

<div class="nnc-decision">The engine is <strong>starting</strong>:</div>
<div class="nnc-cl">
<div class="nnc-goto">▶▶ Go to step 14</div>
</div>

<div class="nnc-decision">After 1 minute, the engine stays <strong>failed</strong>:</div>
<div class="nnc-cl">
<div class="nnc-item"><span class="nnc-num"></span><strong>FUEL CONTROL switch (affected side)</strong><span class="cl-dots"></span><span class="nnc-confirm">Confirm</span><strong>CUTOFF</strong></div>
<div class="nnc-goto">▶▶ Go to step 8</div>
</div>

<div class="nnc-text"><span class="nnc-num">8</span>A restart can be attempted if there is no abnormal airframe vibration.</div>

<div class="nnc-step">9 &nbsp; Choose One:</div>

<div class="nnc-decision">Restart is <strong>needed</strong>:</div>
<div class="nnc-cl">
<div class="nnc-goto">▶▶ Go to step 10</div>
</div>

<div class="nnc-decision">Restart is <strong>not</strong> needed:</div>
<div class="nnc-cl">
<div class="nnc-goto">▶▶ Go to step 17</div>
</div>

<div class="nnc-text"><span class="nnc-num">10</span>The engine can accelerate to idle very slowly, especially at high altitudes. The time from fuel control switch to RUN to stable idle can take up to two and a half minutes.</div>

<div class="nnc-text"><span class="nnc-num">11</span>Do not interrupt the start attempts. Move the fuel control switch to CUTOFF only when no further start attempts are needed.</div>

<div class="nnc-step">12 &nbsp; Choose One:</div>

<div class="nnc-decision">X-START is <strong>shown</strong>:</div>
<div class="nnc-cl">
<div class="nnc-item"><span class="nnc-num"></span><strong>START selector (affected side)</strong><span class="cl-dots"></span><strong>START</strong></div>
<div class="nnc-goto">▶▶ Go to step 13</div>
</div>

<div class="nnc-decision">X-START is <strong>blank</strong>:</div>
<div class="nnc-cl">
<div class="nnc-goto">▶▶ Go to step 13</div>
</div>

<div class="nnc-item"><span class="nnc-num">13</span><strong>FUEL CONTROL switch (affected side)</strong><span class="cl-dots"></span><strong>RUN</strong></div>

<div class="nnc-step">14 &nbsp; Choose One:</div>

<div class="nnc-decision">Engine <strong>starts</strong> and runs normally:</div>
<div class="nnc-cl">
</div>
<div class="nnc-complete">■ &nbsp; ■ &nbsp; ■ &nbsp; ■</div>

<div class="nnc-decision">Engine stays <strong>failed</strong> or is <strong>damaged</strong>:</div>
<div class="nnc-cl">
<div class="nnc-goto">▶▶ Go to step 15</div>
</div>

<div class="nnc-item"><span class="nnc-num">15</span><strong>FUEL CONTROL switch (affected side)</strong><span class="cl-dots"></span><span class="nnc-confirm">Confirm</span><strong>CUTOFF</strong></div>

<div class="nnc-item"><span class="nnc-num">16</span><strong>START selector (affected side)</strong><span class="cl-dots"></span><strong>NORM</strong></div>

<div class="nnc-item"><span class="nnc-num">17</span><strong>APU selector (if APU available)</strong><span class="cl-dots"></span><strong>START, then ON</strong></div>

<div class="nnc-item"><span class="nnc-num">18</span><strong>TRANSPONDER MODE selector</strong><span class="cl-dots"></span><strong>TA ONLY</strong></div>

<div class="nnc-text"><span class="nnc-num">19</span>Plan to land at the nearest suitable airport.</div>

<div class="nnc-text"><span class="nnc-num">20</span>Do <strong>not</strong> accomplish the following checklists:</div>
<div class="nnc-sub">• AUTOTHROTTLE</div>
<div class="nnc-sub">• FUEL PUMP CTR L+R</div>

<div class="nnc-step">21 &nbsp; Choose One:</div>

<div class="nnc-decision">Landing using flaps <strong>20</strong>:</div>
<div class="nnc-cl">
<div class="nnc-item"><span class="nnc-num"></span><strong>Tuning and control panel GPWS FLAP OVRD</strong><span class="cl-dots"></span><strong>OVRD</strong></div>
<div class="nnc-note"><strong>Note:</strong> Use flaps 20 and v<sub>REF</sub> 20 for landing and flaps 5 for go-around. Buffet can be felt with flaps extended.</div>
<div class="nnc-note">Check the Non-Normal Configuration Landing Distance tables for ENG SHUTDOWN L, R in the Performance Inflight-QRH chapter or other approved source.</div>
<div class="nnc-goto">▶▶ Go to step 22</div>
</div>

<div class="nnc-decision">Landing using flaps <strong>30 (if performance allows)</strong>:</div>
<div class="nnc-cl">
<div class="nnc-note"><strong>Note:</strong> Use flaps 30 and v<sub>REF</sub> 30 for landing and flaps 20 for go-around. Buffet can be felt with flaps extended.</div>
<div class="nnc-note">Check the Non-Normal Configuration Landing Distance tables for ENG SHUTDOWN L, R in the Performance Inflight-QRH chapter or other approved source.</div>
</div>
<div class="nnc-complete">■ &nbsp; ■ &nbsp; ■ &nbsp; ■</div>

<div class="nnc-complete">22&ensp;&ensp;Checklist Complete Except Deferred Items</div>

<div class="nnc-deferred-header">DEFERRED ITEMS</div>

<div class="nnc-deferred-title">Descent Checklist</div>
<div class="nnc-item"><span class="nnc-num"></span><strong>Recall</strong><span class="cl-dots"></span><strong>Checked</strong></div>
<div class="nnc-item"><span class="nnc-num"></span><strong>Notes</strong><span class="cl-dots"></span><strong>Checked</strong></div>
<div class="nnc-item"><span class="nnc-num"></span><strong>Autobrake</strong><span class="cl-dots"></span><strong>—</strong></div>
<div class="nnc-item"><span class="nnc-num"></span><strong>Landing data</strong><span class="cl-dots"></span><strong>v<sub>REF</sub> 20 ___ Minimums ___</strong></div>
<div class="nnc-item"><span class="nnc-num"></span><strong>Approach briefing</strong><span class="cl-dots"></span><strong>Completed</strong></div>

<div class="nnc-deferred-title">Approach Checklist</div>
<div class="nnc-item"><span class="nnc-num"></span><strong>Altimeters</strong><span class="cl-dots"></span><strong>—</strong></div>

<div class="nnc-deferred-title">Landing Checklist</div>
<div class="nnc-item"><span class="nnc-num"></span><strong>Speedbrake</strong><span class="cl-dots"></span><strong>ARMED</strong></div>
<div class="nnc-item"><span class="nnc-num"></span><strong>Landing gear</strong><span class="cl-dots"></span><strong>DOWN</strong></div>
<div class="nnc-item"><span class="nnc-num"></span><strong>Flaps</strong><span class="cl-dots"></span><strong>20</strong></div>

<div class="nnc-complete">■ &nbsp; ■ &nbsp; ■ &nbsp; ■</div>

<div class="cl-variant-end">END B787 (-ABPA to -ABPE)</div>
</div>

---
title: "Eng In-Flight Start L, R"
tags: [non-normal, engine]
---

# Eng In-Flight Start L, R

<a class="nnc-back" href="/Non-Normals/Non-Normal-Checklists">Non-Normal Checklists</a>

> [!info] Background
> **Start envelope** — shown on EICAS when an engine is not running in flight. Displays the valid airspeed range for an in-flight start at current FL. If above max start altitude, the max start altitude and its airspeed range are shown instead.
>
> **Secondary engine indications** — auto-display when N2 is below idle with FUEL CONTROL in RUN, or when FUEL CONTROL is moved to CUTOFF.
>
> **X-START** — shown below N2 when airspeed is below windmilling start speed.
>
> **Autostart** — makes continuous start attempts until the engine starts or the pilot aborts by setting FUEL CONTROL to CUTOFF (and positioning the START switch to NORM if it was a starter assisted attempt).
>
> **Auto-relight** — activated whenever an engine is at or below idle with FUEL CONTROL in RUN.

<div class="nnc-condition">Condition: An engine start is needed and both of these are true:<br>• There was no engine fire<br>• There is no abnormal airframe vibration</div>

<div class="reg-selector-bar">
  <button class="reg-btn" data-variant="ABPF">−ABPF to −ABPU / −ABQA to −ABQG</button>
  <button class="reg-btn" data-variant="ABPA">−ABPA to −ABPE</button>
</div>

<div class="reg-variant-block" data-variant="ABPA">
<div class="cl-variant">B787 (-ABPA to -ABPE)</div>

<div class="nnc-text"><span class="nnc-num">1</span>The engine can accelerate to idle very slowly, especially at high altitudes. The time from fuel control switch to RUN to stable idle can take up to two and a half minutes.</div>

<div class="nnc-text"><span class="nnc-num">2</span>Do not interrupt the start attempts. Move the fuel control switch to CUTOFF only when no further start attempts are needed.</div>

<div class="nnc-step">3 &nbsp; Choose One:</div>

<div class="nnc-decision">X-START is <strong>shown</strong>:</div>
<div class="nnc-cl">
<div class="nnc-sub">EICAS messages can show during the start due to load shed. Do the associated checklists only if the messages show after the engine start is complete.</div>
<div class="nnc-item"><span class="nnc-num"></span><strong>START selector (affected side)</strong><span class="cl-dots"></span><strong>START</strong></div>
<div class="nnc-goto">▶▶ Go to step 4</div>
</div>

<div class="nnc-decision">X-START is <strong>blank</strong>:</div>
<div class="nnc-cl">
<div class="nnc-goto">▶▶ Go to step 4</div>
</div>

<div class="nnc-item"><span class="nnc-num">4</span><strong>FUEL CONTROL switch (affected side)</strong><span class="cl-dots"></span><strong>RUN</strong></div>

<div class="nnc-step">5 &nbsp; Choose One:</div>

<div class="nnc-decision">Engine <strong>starts</strong> and runs normally:</div>
<div class="nnc-cl">
<div class="nnc-item"><span class="nnc-num"></span><strong>Tuning and control panel GPWS FLAP OVRD</strong><span class="cl-dots"></span><strong>NORM</strong></div>
<div class="nnc-item"><span class="nnc-num"></span><strong>TRANSPONDER MODE selector</strong><span class="cl-dots"></span><strong>TA/RA</strong></div>
</div>
<div class="nnc-complete">■ &nbsp; ■ &nbsp; ■ &nbsp; ■</div>

<div class="nnc-decision">Engine <strong>fails</strong> to start:</div>
<div class="nnc-cl">
<div class="nnc-item"><span class="nnc-num"></span><strong>FUEL CONTROL switch (affected side)</strong><span class="cl-dots"></span><span class="nnc-confirm">Confirm</span><strong>CUTOFF</strong></div>
<div class="nnc-item"><span class="nnc-num"></span><strong>START selector (affected side)</strong><span class="cl-dots"></span><strong>NORM</strong></div>
<div class="nnc-sub">Plan to land at the nearest suitable airport.</div>
<div class="nnc-note"><strong>Note:</strong> Check the Non-Normal Configuration Landing Distance tables for ENG SHUTDOWN L, R in the Performance Inflight-QRH chapter or other approved source.</div>
</div>
<div class="nnc-complete">■ &nbsp; ■ &nbsp; ■ &nbsp; ■</div>

<div class="cl-variant-end">END B787 (-ABPA to -ABPE)</div>
</div>

<div class="reg-variant-block" data-variant="ABPF">
<div class="cl-variant">B787 (-ABPF to -ABPU, -ABQA to -ABQG)</div>

<div class="nnc-text"><span class="nnc-num">1</span>The engine can accelerate to idle very slowly, especially at high altitudes.</div>

<div class="nnc-text"><span class="nnc-num">2</span>Do not interrupt the start attempts. Move the fuel control switch to CUTOFF only when no further start attempts are needed.</div>

<div class="nnc-step">3 &nbsp; Choose One:</div>

<div class="nnc-decision">X-START is <strong>shown</strong>:</div>
<div class="nnc-cl">
<div class="nnc-sub">EICAS messages can show during the start due to load shed. Do the associated checklists only if the messages show after the engine start is complete.</div>
<div class="nnc-item"><span class="nnc-num"></span><strong>START selector (affected side)</strong><span class="cl-dots"></span><strong>START</strong></div>
<div class="nnc-goto">▶▶ Go to step 4</div>
</div>

<div class="nnc-decision">X-START is <strong>blank</strong>:</div>
<div class="nnc-cl">
<div class="nnc-goto">▶▶ Go to step 4</div>
</div>

<div class="nnc-item"><span class="nnc-num">4</span><strong>FUEL CONTROL switch (affected side)</strong><span class="cl-dots"></span><strong>RUN</strong></div>

<div class="nnc-step">5 &nbsp; Choose One:</div>

<div class="nnc-decision">Engine <strong>starts</strong> and runs normally:</div>
<div class="nnc-cl">
<div class="nnc-item"><span class="nnc-num"></span><strong>Tuning and control panel GPWS FLAP OVRD</strong><span class="cl-dots"></span><strong>NORM</strong></div>
<div class="nnc-item"><span class="nnc-num"></span><strong>TRANSPONDER MODE selector</strong><span class="cl-dots"></span><strong>TA/RA</strong></div>
</div>
<div class="nnc-complete">■ &nbsp; ■ &nbsp; ■ &nbsp; ■</div>

<div class="nnc-decision">Engine <strong>fails</strong> to start:</div>
<div class="nnc-cl">
<div class="nnc-item"><span class="nnc-num"></span><strong>FUEL CONTROL switch (affected side)</strong><span class="cl-dots"></span><span class="nnc-confirm">Confirm</span><strong>CUTOFF</strong></div>
<div class="nnc-item"><span class="nnc-num"></span><strong>START selector (affected side)</strong><span class="cl-dots"></span><strong>NORM</strong></div>
<div class="nnc-sub">Plan to land at the nearest suitable airport.</div>
<div class="nnc-note"><strong>Note:</strong> Check the Non-Normal Configuration Landing Distance tables for ENG SHUTDOWN L, R in the Performance Inflight-QRH chapter or other approved source.</div>
</div>
<div class="nnc-complete">■ &nbsp; ■ &nbsp; ■ &nbsp; ■</div>

<div class="cl-variant-end">END B787 (-ABPF to -ABPU, -ABQA to -ABQG)</div>
</div>

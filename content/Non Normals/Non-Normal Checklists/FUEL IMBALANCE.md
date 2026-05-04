---
cssclasses: [eicas-advisory]
title: "FUEL IMBALANCE"
tags: [non-normal, fuel]
---

# FUEL IMBALANCE

<a class="nnc-back" href="/Non-Normals/Non-Normal-Checklists">Non-Normal Checklists</a>

<div class="nnc-condition">Condition: There is a fuel imbalance between the main tanks.<br>Objective: To balance main tank fuel if imbalance is not caused by fuel leak.</div>

<div class="nnc-text"><span class="nnc-num">1</span>A fuel leak can be suspected if either of the following occur:</div>
<div class="nnc-sub">Both engines are running and one has a higher fuel flow than the other.</div>
<div class="nnc-sub">On CDU PROGRESS page 2, the TOTALIZER fuel is less than the CALCULATED fuel.</div>

<div class="nnc-step">2&ensp;&ensp;Choose One:</div>

<div class="nnc-decision">A fuel leak is <strong>suspected</strong>:</div>
<div class="nnc-cl">
  <div class="nnc-goto">▶▶&ensp;<a href="/Non-Normals/Non-Normal-Checklists/Fuel-Leak">Go to the Fuel Leak checklist</a></div>
  <div class="nnc-complete">■ &thinsp; ■ &thinsp; ■ &thinsp; ■</div>
</div>

<div class="nnc-decision">No fuel leak is suspected:</div>
<div class="nnc-cl">
  <div class="nnc-goto">▶▶&ensp;Go to step 3</div>
</div>

<div class="nnc-item"><span class="nnc-num">3</span><strong>FUEL CENTER PUMPS switches (both)</strong><span class="cl-dots"></span><strong>Off</strong></div>

<div class="nnc-text"><span class="nnc-num">4</span>The fuel balance system is not available if any of these occur:</div>
<div class="nnc-sub">On the ground and one or both engines are running.</div>
<div class="nnc-sub">The fuel jettison system is active.</div>
<div class="nnc-sub">The FUEL DISAGREE or FUEL QTY LOW message shows.</div>

<div class="nnc-step">5&ensp;&ensp;Choose One:</div>

<div class="nnc-decision">Fuel balance system is <strong>available</strong>:</div>
<div class="nnc-cl">
  <div class="nnc-goto">▶▶&ensp;Go to step 6</div>
</div>

<div class="nnc-decision">Fuel balance system is <strong>not</strong> available:</div>
<div class="nnc-cl">
  <div class="nnc-goto">▶▶&ensp;Go to step 8</div>
</div>

<div class="nnc-item"><span class="nnc-num">6</span><strong>FUEL BALANCE switch</strong><span class="cl-dots"></span><strong>Push and hold for 1 second</strong></div>

<div class="nnc-text"><span class="nnc-num">7</span>The fuel balance system may take up to 30 seconds to activate.</div>
<div class="nnc-note"><strong>Note:</strong> With fuel in center tanks, after fuel is balanced, FUEL CENTER PUMPS switches (both) can be turned on.</div>

<div class="nnc-complete">■ &thinsp; ■ &thinsp; ■ &thinsp; ■</div>

<div class="nnc-item"><span class="nnc-num">8</span><strong>FUEL BALANCE switch</strong><span class="cl-dots"></span><strong>Push to Off</strong></div>
<div class="nnc-sub">Ensure the ON light is extinguished.</div>

<div class="nnc-item"><span class="nnc-num">9</span><strong>FUEL CROSSFEED switch</strong><span class="cl-dots"></span><strong>On</strong></div>

<div class="nnc-step">10&ensp;&ensp;Choose One:</div>

<div class="nnc-decision"><strong>Left</strong> main tank quantity is low:</div>
<div class="nnc-cl">
  <div class="nnc-sub-item"><strong>FUEL L PUMPS switches (both)</strong><span class="cl-dots"></span><strong>Off</strong></div>
  <div class="nnc-text"><span class="nnc-num"></span>Do <strong>not</strong> accomplish the following checklists:</div>
  <div class="nnc-sub">FUEL PUMP L AFT</div>
  <div class="nnc-sub">FUEL PUMP L FWD</div>
  <div class="nnc-goto">▶▶&ensp;Go to step 11</div>
</div>

<div class="nnc-decision"><strong>Right</strong> main tank quantity is low:</div>
<div class="nnc-cl">
  <div class="nnc-sub-item"><strong>FUEL R PUMPS switches (both)</strong><span class="cl-dots"></span><strong>Off</strong></div>
  <div class="nnc-text"><span class="nnc-num"></span>Do <strong>not</strong> accomplish the following checklists:</div>
  <div class="nnc-sub">FUEL PUMP R AFT</div>
  <div class="nnc-sub">FUEL PUMP R FWD</div>
  <div class="nnc-goto">▶▶&ensp;Go to step 11</div>
</div>

<div class="nnc-text"><span class="nnc-num">11</span><strong>When</strong> fuel balancing is complete:</div>
<div class="nnc-sub-item"><strong>FUEL L PUMPS and R PUMPS switches (all)</strong><span class="cl-dots"></span><strong>ON</strong></div>
<div class="nnc-sub-item"><strong>FUEL CROSSFEED switch</strong><span class="cl-dots"></span><strong>Off</strong></div>
<div class="nnc-note"><strong>Note:</strong> With fuel in center tanks, after fuel is balanced, FUEL CENTER PUMPS switches (both) can be turned on.</div>

<div class="nnc-complete">■ &thinsp; ■ &thinsp; ■ &thinsp; ■</div>

# Non-Normal Handling

Non-normal handling follows one priority: **fly the aircraft first**, then analyze and act in a coordinated way.

## TEM Prioritization

<div class="nn-flow">

<div style="margin:0.4rem 0 0.2rem;font-size:0.72rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#e74c3c;border-left:4px solid #e74c3c;padding-left:0.6em">RECOVER</div>

<div class="nn-flow-step nn-flow-step--red" style="display:block">
  <div class="nn-flow-copy">
    <div class="nn-flow-title">Aviate – Flight path under control</div>
    <div class="nn-flow-body">Upset / Stall / GPWS / Windshear / TCAS Recovery completed</div>
  </div>
</div>
<div class="nn-flow-step nn-flow-step--red" style="display:block">
  <div class="nn-flow-copy">
    <div class="nn-flow-title">Aviate – Complete Memory Items</div>
  </div>
</div>
<div class="nn-flow-step nn-flow-step--amber" style="display:block">
  <div class="nn-flow-copy">
    <div class="nn-flow-title">Navigate – Emergency Maneuver</div>
    <div class="nn-flow-body">Driftdown, EO SID …</div>
  </div>
</div>
<div class="nn-flow-step nn-flow-step--white" style="display:block">
  <div class="nn-flow-copy">
    <div class="nn-flow-title">Communicate – Declare an Emergency</div>
    <div class="nn-flow-body">"MAYDAY, Callsign, Nature of emergency, Standby" · XPDR 7700</div>
  </div>
</div>

<div style="margin:0.8rem 0 0.2rem;font-size:0.72rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#3257BC;border-left:4px solid #3257BC;padding-left:0.6em">SECURE</div>

<div class="nn-flow-step nn-flow-step--white" style="display:block">
  <div class="nn-flow-copy">
    <div class="nn-flow-title">Complete Non-Normal Checklists</div>
  </div>
</div>
<div class="nn-flow-step nn-flow-step--white" style="display:block">
  <div class="nn-flow-copy">
    <div class="nn-flow-title">Complete Normal Checklist</div>
  </div>
</div>
<div class="nn-flow-step nn-flow-step--blue" style="display:block">
  <div class="nn-flow-copy">
    <div class="nn-flow-title">Decision Making Process</div>
    <div class="nn-flow-body">Plan the diversion</div>
  </div>
</div>
<div class="nn-flow-step nn-flow-step--white" style="display:block">
  <div class="nn-flow-copy">
    <div class="nn-flow-title">Communicate – Inform</div>
    <div class="nn-flow-body">ATC · Company · Senior (Cabin) · Passengers</div>
  </div>
</div>
<div class="nn-flow-step nn-flow-step--white" style="display:block">
  <div class="nn-flow-copy">
    <div class="nn-flow-title">Review</div>
    <div class="nn-flow-body">Review your actions and consider new options</div>
  </div>
</div>

</div>

## Non-Normal Handling Flow

<div class="nn-flow">
  <div class="nn-flow-step nn-flow-step--white">
    <div class="nn-flow-num">1</div>
    <div class="nn-flow-copy">
      <div class="nn-flow-title">Notify</div>
      <div class="nn-flow-body">Any CM recognizes and announces the non-normal situation. The other CM acknowledges.</div>
    </div>
  </div>
  <div class="nn-flow-step nn-flow-step--red">
    <div class="nn-flow-num">2</div>
    <div class="nn-flow-copy">
      <div class="nn-flow-title">Fly</div>
      <div class="nn-flow-body">Maintain airplane control. Ensure the flight path is under control before starting checklist work.</div>
    </div>
  </div>
  <div class="nn-flow-step nn-flow-step--amber">
    <div class="nn-flow-num">3</div>
    <div class="nn-flow-copy">
      <div class="nn-flow-title">Analyze</div>
      <div class="nn-flow-body">PM reviews EICAS messages, identifies the primary failure, prioritizes alerts, and recommends course of action.<br>PF acknowledges and confirms the PM's identification or recommendation.<br>CP shall identify the applicable checklist.</div>
    </div>
  </div>
  <div class="nn-flow-step nn-flow-step--white">
    <div class="nn-flow-num">4</div>
    <div class="nn-flow-copy">
      <div class="nn-flow-title">Action</div>
      <div class="nn-flow-body">Do the NNC memory items.<br>PF calls for the appropriate NNC.<br>PM completes the NNC.<br><strong>Checklist complete:</strong> Review all EICAS alert messages, and do other NNCs as needed.</div>
    </div>
  </div>
  <div class="nn-flow-step nn-flow-step--blue">
    <div class="nn-flow-num">5</div>
    <div class="nn-flow-copy">
      <div class="nn-flow-title">FORDEC</div>
      <div class="nn-flow-body">Evaluate the need to land. Review options for diversion or continued flight.<br>Use RCL, Notes, LAPA for Facts.</div>
    </div>
  </div>
</div>

> [!warning] Start NNC only when ready
> PF calls the checklist when the flight path is under control and the aircraft is above **400 ft RA**.

## Confirm Step

The following items always require a confirm step before action (in-flight):

<div class="eicas-levels">
<div class="eicas-card eicas-card--red">
  <div class="eicas-card-title">Confirm Required <span class="eicas-card-badge">BEFORE ACTION</span></div>
  <div class="eicas-card-body">
    Autothrottle arm switch <span class="mi-role">PF</span><br>
    Engine thrust lever <span class="mi-role">PF</span><br>
    Fuel control switch <span class="mi-role mi-role--pm">PM</span><br>
    Engine or APU fire switch · Cargo fire arm switch <span class="mi-role mi-role--pm">PM</span><br>
    Generator drive disconnect switch <span class="mi-role mi-role--pm">PM</span><br>
    IRS selectors <span class="mi-role mi-role--pm">PM</span>
  </div>
</div>
</div>

> [!info] Exceptions
> - Confirm Steps do not apply to the Dual Eng Fail/Stall checklist.
> - On the ground, confirmation is not required for NNC items.
> - Stationary on ground: FUEL CONTROL switches → CP
> - Autothrottle arm switch in manual flight: PF may delegate switching

<div class="nnc-item"><span class="nnc-num">1</span><strong>Left A/T ARM switch</strong><span class="cl-dots"></span><span class="nnc-confirm">Confirm</span><strong>OFF</strong></div>
<div class="nnc-sub">PF places hand on the related component.</div>
<div class="nnc-sub"><strong>PM:</strong> "Left confirmed."</div>
<div class="nnc-sub"><strong>PF:</strong> "Off."</div>

## Checklist Reading

- `[]` means: Notes or Procedural Steps in NNC
- Read the checklist title
- Read white text
- "Inhibited Checklists" do not need to be read
- Green items do not need to be read
- Timer starts automatically
- "Precaution" must be read aloud
- Item and Checklist override must be confirmed

<div class="eicas-levels">
  <div class="eicas-card eicas-card--amber">
    <div class="eicas-card-title">Checklist title amber</div>
    <div class="eicas-card-body">Condition still exists.</div>
  </div>
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">Checklist title white</div>
    <div class="eicas-card-body">Condition no longer exists.</div>
  </div>
</div>

## Core Terms

<div class="eicas-levels">
  <div class="eicas-card eicas-card--red">
    <div class="eicas-card-title">Memory Items</div>
    <div class="eicas-card-body">Critical steps done from memory before reading the checklist. After execution, verify them with the checklist. See also [[Memory Items]].</div>
  </div>
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">Reference Items</div>
    <div class="eicas-card-body">Actions performed while reading the checklist. Read and do.</div>
  </div>
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">Annunciated Checklists</div>
    <div class="eicas-card-body">Checklists that correspond to an EICAS message.</div>
  </div>
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">Un-annunciated Checklists</div>
    <div class="eicas-card-body">Checklists without direct EICAS message, e.g. Ditching, Fuel Leak or Tail Strike. Select via Non-Normal Menu in the ECL.</div>
  </div>
  <div class="eicas-card eicas-card--amber">
    <div class="eicas-card-title">Confirmation Policy</div>
    <div class="eicas-card-body">Critical switches and levers require verbal confirm before action. Typical items: A/T ARM switches, thrust levers, fuel control switches, engine/APU fire switches, cargo fire arm switches, generator drive disconnect switches, IRS selectors in some checklists.</div>
  </div>
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">Electronic Checklist (ECL)</div>
    <div class="eicas-card-body">Closed loop items turn green automatically. Open loop items are manually checked by PM. Completion call: PM: "___ Checklist complete."</div>
  </div>
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">Consequential Alerts</div>
    <div class="eicas-card-body">Secondary alerts caused by the primary failure, e.g. PACK L after a fire checklist. Do not accomplish separate checklists for consequential alerts unless directed.</div>
  </div>
</div>

## Example 1: Engine Failure

The example below shows the call structure, not a replacement for the actual checklist.

<div class="checklist">
<div class="cl-item"><strong>Any CM</strong><span class="cl-dots"></span><strong>"Engine Fail Left"</strong></div>
<div class="cl-item"><strong>Other CM</strong><span class="cl-dots"></span><strong>Acknowledge</strong></div>
<div class="cl-item"><strong>CM1</strong><span class="cl-dots"></span><strong>"Engine Fail Left"</strong></div>
<div class="cl-sub">or: "Dann machen wir jetzt die Engine Fail Left Liste."</div>
</div>

<div class="nn-decision">
  <div class="nn-decision-question">Memory Items?</div>
  <div class="nn-decision-branches">
    <div class="nn-branch nn-branch--yes">
      <div class="nn-branch-label">YES</div>
      <div class="nn-step-pill">PF: "Memory Items"</div>
      <div class="nn-step-pill nn-step-pill--result">After memory items: applicable NNC</div>
    </div>
    <div class="nn-branch nn-branch--no">
      <div class="nn-branch-label">NO</div>
      <div class="nn-step-pill">PF: "Engine Fail Left Checklist"</div>
    </div>
  </div>
</div>

## Example 2: ENG SURGE L

<div class="eicas-levels">
<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title">Situation <span class="eicas-card-badge">EICAS CAUTION</span></div>
  <div class="eicas-card-body">An engine surge occurs on the left engine · System generates amber <strong>ENG SURGE L</strong> · Caution beeper sounds · Master CAUTION lights illuminate</div>
</div>
</div>

---

<div class="nnc-step">1 &nbsp; Recognize & Fly</div>

<div class="nnc-item"><span class="nnc-num"></span><strong>PM</strong><span class="cl-dots"></span><strong>"ENG SURGE LEFT"</strong></div>
<div class="nnc-sub">Reads the EICAS message aloud.</div>

<div class="nnc-item"><span class="nnc-num"></span><strong>PF</strong><span class="cl-dots"></span><strong>"Confirmed"</strong></div>
<div class="nnc-sub">Ensures the flight path is under control · verifies airplane is above 400 ft RA.</div>

---

<div class="nnc-step">2 &nbsp; Initiate Memory Items</div>

<div class="nnc-item"><span class="nnc-num"></span><strong>PF</strong><span class="cl-dots"></span><strong>"Memory Items"</strong></div>

---

<div class="nnc-step">3 &nbsp; Execute Memory Items – as Confirmed Items</div>

**Step 1 – Deactivate Autothrottle**

<div class="nnc-item"><span class="nnc-num"></span><strong>Left A/T ARM switch</strong><span class="cl-dots"></span><span class="nnc-confirm">Confirm</span><strong>OFF</strong></div>
<div class="nnc-sub"><strong>PF</strong> (places hand on the left A/T ARM switch): &nbsp;"LEFT A/T ARM SWITCH – CONFIRM – OFF"</div>
<div class="nnc-sub"><strong>PM</strong> (looks at the switch, verifies): &nbsp;"LEFT CONFIRMED"</div>
<div class="nnc-sub"><strong>PF</strong> (moves the switch to OFF): &nbsp;"OFF"</div>

**Step 2 – Reduce Thrust**

<div class="nnc-item"><span class="nnc-num"></span><strong>Left Thrust lever</strong><span class="cl-dots"></span><span class="nnc-confirm">Confirm</span><strong>Retard</strong></div>
<div class="nnc-sub"><strong>PF</strong> (places hand on the left thrust lever): &nbsp;"LEFT THRUST LEVER – CONFIRM – RETARD"</div>
<div class="nnc-sub"><strong>PM</strong> (looks at the lever, verifies): &nbsp;"LEFT CONFIRMED"</div>
<div class="nnc-sub"><strong>PF</strong> (slowly retards the lever until the ENG SURGE L message blanks or the lever is at idle): &nbsp;"RETARD"</div>

---

<div class="nnc-step">4 &nbsp; Call for Checklist</div>

<div class="nnc-item"><span class="nnc-num"></span><strong>PF</strong><span class="cl-dots"></span><strong>"ENG SURGE LEFT Checklist"</strong></div>

---

<div class="nnc-step">5 &nbsp; Read the NNC</div>

<div class="nnc-item"><span class="nnc-num"></span><strong>PM</strong><span class="cl-dots"></span><strong>"ENG SURGE LEFT Checklist"</strong></div>
<div class="nnc-sub">Reads the checklist title aloud to confirm context.</div>

<div class="nnc-item"><span class="nnc-num"></span><strong>PM</strong><span class="cl-dots"></span><strong>Verify Memory Items</strong></div>
<div class="nnc-sub">Reads the memory items aloud as verification. PF does not need to respond if everything is correct.</div>

<div class="nnc-item"><span class="nnc-num"></span><strong>PM</strong><span class="cl-dots"></span><strong>Read Reference Items</strong></div>
<div class="nnc-sub">Reads and actions the remaining reference items.</div>

<div class="nnc-item"><span class="nnc-num"></span><strong>PM</strong><span class="cl-dots"></span><strong>"Checklist Complete Except Deferred Items"</strong></div>
<div class="nnc-sub">This checklist has deferred items for the approach – the PM will return to them during descent.</div>

---

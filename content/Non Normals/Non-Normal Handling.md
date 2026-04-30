# Non-Normal Handling

Non-normal handling follows one priority: **fly the aircraft first**, then analyze and act in a coordinated way.

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
      <div class="nn-flow-body">Evaluate the need to land. Review options for diversion or continued flight.</div>
    </div>
  </div>
</div>

> [!warning] Start NNC only when ready
> PF calls the checklist when the flight path is under control and the aircraft is above **400 ft RA**.

## Engine Failure Example

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

## Confirm Step

<div class="media-split">
  <div class="eicas-levels">
    <div class="eicas-card eicas-card--white">
      <div class="eicas-card-title">Reference Items</div>
      <div class="eicas-card-body">Used while reading the checklist. PF reads the item, places hand on the related component, PM confirms, then PF acts.</div>
    </div>
  </div>
  <div class="eicas-levels">
    <div class="eicas-card eicas-card--amber">
      <div class="eicas-card-title">Memory Items</div>
      <div class="eicas-card-body">PF calls "Memory Items". Critical actions are performed from memory, with confirm steps when required, then verified with the checklist.</div>
    </div>
  </div>
</div>

<div class="nnc-item"><span class="nnc-num">1</span><strong>Left A/T ARM switch</strong><span class="cl-dots"></span><span class="nnc-confirm">Confirm</span><strong>OFF</strong></div>
<div class="nnc-sub">PF places hand on the related component.</div>
<div class="nnc-sub"><strong>PM:</strong> "Left confirmed."</div>
<div class="nnc-sub"><strong>PF:</strong> "Off."</div>

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

---
title: CDU Preflight Procedure – PF
tags: [sop, preflight, amplified-procedures, pf]
section: 2-1-2
role: PF
---

# CDU Preflight Procedure – PF

![[cdu triangle.webp|500]]

<div class="checklist">

<div class="cl-item"><strong>Initial Data</strong><span class="cl-dots"></span><strong>SET</strong></div>
<div class="cl-sub"><strong>IDENT</strong></div>
<div class="cl-sub">Verify that the MODEL, ENGINES, ENG RATING are correct</div>
<div class="cl-sub">Verify that the Nav database ACTIVE date range is current & DRAG/FF parameter is consistent with OFP</div>
<div class="cl-note">LSK 6R → POS INIT</div>
<div class="cl-sub"><strong>POS INIT</strong></div>
<div class="cl-sub">Verify that the time is correct</div>
<div class="cl-sub">Enter present position on the SET INERTIAL POS line, if needed</div>
<div class="cl-sub">Check RNP value on POS REF 2</div>

<div class="cl-item"><strong>Navigation Data</strong><span class="cl-dots"></span><strong>SET</strong></div>
<div class="cl-sub"><strong>RTE 1</strong></div>
<div class="cl-sub">Enter the route, FLT NO or ROUTE REQUEST or eDesk Uplink</div>
<div class="cl-sub">ACTIVATE and EXEC the route</div>
<div class="cl-sub"><strong>DEP/ARR</strong></div>
<div class="cl-sub">Enter RWY, SID</div>
<div class="cl-sub"><strong>DEP/ARR INDEX</strong></div>
<div class="cl-sub">Enter STAR, RWY (ohne Approach Procedure)</div>
<div class="cl-sub"><strong>LEGS</strong></div>
<div class="cl-sub">Enter/confirm constraints etc.</div>
<div class="cl-sub">Climb/Descent Winds: COMM page</div>
<div class="cl-sub">Cruise Winds: LEGS - RTE DATA</div>
<div class="cl-sub">RTE COPY</div>
<div class="cl-sub"><strong>NAV RAD</strong></div>
<div class="cl-sub">Enter/confirm Nav Radios</div>
<div class="cl-sub"><strong>FIX</strong></div>
<div class="cl-sub">Enter EOSID Fix</div>
<div class="cl-sub">Extended Center Line is displayed by default</div>

<div class="cl-item"><strong>Performance Data</strong><span class="cl-dots"></span><strong>SET</strong></div>
<div class="cl-sub"><strong>PERF INIT</strong></div>
<div class="cl-sub">Enter OFP ZFW</div>
<div class="cl-sub">Enter Reserve Fuel</div>
<div class="cl-sub">Enter CRZ ALT, CI, STEP</div>
<div class="cl-note">LSK 6R → THRUST LIM</div>
<div class="cl-sub"><strong>THRUST LIM</strong></div>
<div class="cl-sub">Check OAT</div>
<div class="cl-sub">Perform preliminary T/O Data calculation → nicht eingeben!</div>

<div class="cl-item"><strong>Required Briefings</strong><span class="cl-dots"></span><strong>PERFORM</strong></div>

</div>

> [!info] Note
> If an EOSID contained in the NAV-DB is used, refer to SP 2-2-11 Usage of EOSID contained in FMS-Database in FMS.

> [!info] Note (B787 -ABPA to -ABPE)
> If gross weight CG (%MAC) is at or aft of 23.1, refer to Aft CG Takeoff.

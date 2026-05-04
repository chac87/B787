---
title: Single Engine Taxi In (SETI)
tags: [sop, supplementary, engines]
---

# Single Engine Taxi In (SETI)

> [!info] Notes
> - APU must be running and both APU Generators available.
> - Single Engine Taxi **out** is not allowed!
> - Must not be used after both engines have been shut down (e.g. during longer waiting periods for parking position)!
> - Failed airplane systems (MEL or after failure during previous flight) shall be assessed for impact on EOT.
> - Not recommended during icing conditions.
> - All three hydraulic systems should remain pressurized for at least 45 seconds after the airplane speed drops below 30 knots, the flaps are in the up position, and the spoilers are retracted, to allow Flight Control Electronics system tests to complete. Engine shutdown during this time must be avoided to prevent status messages and dispatch impact.
> - When ramps or taxiways are covered with ice, snow, slush or standing water, taxi with all engines running.
> - Consider before taxiing with one engine shutdown: jet blast effects, the direction of turns, and the increased time needed to start moving the airplane.

<div class="checklist">

<div class="cl-item"><strong>APU</strong><span class="cl-dots"></span><strong>START</strong><span class="mi-role mi-role--pm">F/O</span></div>

<div class="cl-item"><strong>Engine Cooldown Time</strong><span class="cl-dots"></span><strong>Observe</strong><span class="mi-role mi-role--both">C, F/O</span></div>
<div class="cl-sub">A longer cooldown time is beneficial for the engine. The engine cooldown time starts once the engines reach idle rpm after reverse thrust has been used. The minimum cooldown time is:</div>

</div>

<div class="cl-variant">B787 (-ABPA to -ABPE)</div>

3 min.

<div class="cl-variant-end">END B787 (-ABPA to -ABPE)</div>

<div class="cl-variant">B787 (-ABPF to -ABPU, -ABQA to -ABQG)</div>

5 min.

<div class="cl-variant-end">END B787 (-ABPF to -ABPU, -ABQA to -ABQG)</div>

*The cooldown time starts:*
*– at touchdown, when idle reverse has been selected during landing roll,*
*– with thrust levers moved back to forward thrust, when reverse thrust above idle has been selected.*

> [!info] Note
> Engine RPM above 40% N1 should be avoided to reduce risk of FOD and damage caused by jet blast.

> [!warning] Caution
> Crews must ensure that all hydraulic systems are pressurized if flap operation is required.

After APU RUNNING Memo-message displayed and flaps are retracted:

<div class="checklist">

<div class="cl-item"><strong>"Shutdown left/right engine"</strong><span class="cl-dots"></span><strong>Announce</strong><span class="mi-role">C</span></div>

<div class="cl-item"><strong>FUEL CONTROL switch L, R</strong><span class="cl-dots"></span><strong>CUTOFF</strong><span class="mi-role mi-role--pm">F/O</span></div>

</div>

The following table lists the impact of an engine shutdown on the airplane systems:

| System | Impact |
|---|---|
| Electric | L1 and L2 or R1 and R2 respectively Starter/Generators not powered (ELEC GEN OFF and ELEC GEN DRIVE messages are inhibited when the engine is shutdown.) |
| Fuel | The fuel imbalance condition (FUEL IMBALANCE message) can occur when left and right tank fuel quantities differ by more than 1.300 lbs / 590 kg, depending on main tank quantity. |
| Hydraulic | The respective hydraulic system is depressurized. HYD PRESS SYS L or R message shows. HYD PRESS PRI L or R message is inhibited when the engine is shutdown. |
| Landing Gear | When shutting down an engine while taxiing, the wheel brakes on the affected side may release for approximately one second. This is due to a momentary loss of electrical power to the affected wheel brakes due to an electrical bus transfer. |

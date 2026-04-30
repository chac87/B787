---
title: Instrument Approach Using V/S or FPA
tags: [sop, landing, captain, first-officer]
section: 2-1-15
role: Both
---

# Instrument Approach Using V/S or FPA

Use this technique when VNAV or IAN is not suitable, or when no valid vertical path is available. The goal is a **CDFA** to MDA(H), with no level segment at minimums.

> [!warning] Below Path Alerting
> There is no below-path alerting. Keep **MDA(H)** set as long as practical to help prevent inadvertent descent below MDA(H).

> [!info]- Flap Extension Schedule
> | Current Flap Position | At Speed Tape "Display" | Select Flaps | Command Speed for Selected Flaps |
> |:---:|:---:|:---:|:---|
> | UP | "UP" | 1 | "1" |
> | 1 | "1" | 5 | "5" |
> | 5 | "5" | 20 | "20" |
> | 20 | "20" | 25 or 30 | (v<sub>REF25</sub> or v<sub>REF30</sub>) + wind additives |

<div class="eicas-levels">
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">Approach Preparation</div>
    <div class="eicas-card-body">Select approach from FMC arrivals page.<br>Tune and identify appropriate navaids.<br>Use FIX page for additional waypoint references.<br>Set MDA(H) with baro minimums selector.</div>
  </div>
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">Radar Vectors</div>
    <div class="eicas-card-body">Select a straight-in intercept course to the FAF to allow proper LNAV waypoint sequencing.</div>
  </div>
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">RNP</div>
    <div class="eicas-card-body">Verify or enter the appropriate RNP.</div>
  </div>
</div>

<div class="eicas-levels">
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">Intercept</div>
    <div class="eicas-card-body">Approaching intercept heading:<br>Select flaps 5.<br>Ensure LNAV or other appropriate roll mode is armed or engaged.</div>
  </div>
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">~2 NM Before FAF</div>
    <div class="eicas-card-body">Set MCP altitude to MDA.<br>Pre-Select FPA on MCP.</div>
  </div>
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">0.3 NM Before FAF</div>
    <div class="eicas-card-body">Select FPA, e.g. -3°.</div>
  </div>
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">Configure</div>
    <div class="eicas-card-body">Gear down.<br>Flaps 20.<br>Arm speedbrake.<br>Adjust speed.</div>
  </div>
</div>

<div class="eicas-levels">
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">Final Descent</div>
    <div class="eicas-card-body">Constantly check altitude against distance/altitude table.<br>Select landing flaps, slow to final approach speed, and do the Landing Checklist.</div>
  </div>
</div>

<div class="eicas-levels">
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">MCP Altitude</div>
    <div class="eicas-card-body">Approximately 300 ft above MDA(H), set missed approach altitude.<br>This preserves altitude range arc guidance and avoids altitude capture destabilizing the approach.</div>
  </div>
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">Leaving MDA(H)</div>
    <div class="eicas-card-body">Be prepared to land or go around at MDA(H).<br>Latest time to disconnect AP.<br>Turn both F/Ds OFF, then place the PM F/D ON.</div>
  </div>
</div>

**Path Monitoring**

| Technique | Use |
|---|---|
| VNAV path deviation | Most accurate when final path is properly defined on LEGS page and GPx.xx / RWxx / MXxx / suitable waypoint exists |
| Altitude range arc | Place arc at or near step-down fix or VDP; requires step-down fix or MDA(H) set in MCP |
| 300 ft / NM | PM calls recommended altitudes, e.g. 900 ft at 3 NM, 600 ft at 2 NM |


## LANDING CHECKLIST

| Item | Response | Who |
|:---|:---|:---:|
| <span class="c-green">**Speedbrake**</span> | <span class="c-green">ARMED</span> | PF |
| <span class="c-green">**Landing gear**</span> | <span class="c-green">DOWN</span> | B |
| <span class="c-green">**Flaps**</span> | <span class="c-green">\_\_</span> | B |

<div class="sop-entry-tags">
<span class="sop-tag-cl">PM: "Landing Checklist complete."</span>
</div>
<div class="sop-entry-tags" style="margin-top:0.5em">
<span class="sop-tag-cl">PF: "Checklist complete."</span>
</div>

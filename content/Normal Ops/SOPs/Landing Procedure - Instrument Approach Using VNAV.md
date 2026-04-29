---
title: Instrument Approach Using VNAV
tags: [sop, landing, captain, first-officer]
section: 2-1-14
role: Both
---

# Instrument Approach Using VNAV

Refer to 2-1-3 Instrument Approach Using VNAV (OM-B).

VNAV should be used only for approaches that have one of the following features:
- a published GP angle on the LEGS page for the final approach segment
- an RWxx waypoint at the approach end of the runway
- a missed approach waypoint before the approach end of the runway, (for example, MXxx)

<span class="c-red"><em>This procedure is not authorized using QFE.</em></span>

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
    <div class="eicas-card-body">Select approach from FMC arrivals page.<br>Tune and identify appropriate navaids.<br>Use FIX page for extra references.<br>Verify/enter RNP.<br>Set DA(H) or MDA(H) with baro minimums selector.</div>
  </div>
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">Radar Vectors</div>
    <div class="eicas-card-body">Select a straight-in intercept course to the FAF for proper LNAV waypoint sequencing.</div>
  </div>
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">RNP Source</div>
    <div class="eicas-card-body">RNP may come from manual entry, FMC default, or navigation database.<br>Manual entry overrides all others.</div>
  </div>
</div>

<div class="eicas-levels">
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">Recommended Roll Modes</div>
    <div class="eicas-card-body">Any recommended roll mode from the procedure may be used.<br><table style="width:100%;font-size:0.9em;margin-top:0.45em;border:none"><tr><td><strong>RNAV / GPS / VOR / NDB</strong></td><td style="color:var(--gray)">LNAV</td></tr><tr><td><strong>B/CRS</strong></td><td style="color:var(--gray)">LNAV or B/CRS</td></tr><tr><td><strong>LOC / SDF / LDA / ILS G/S off / IGS G/S off</strong></td><td style="color:var(--gray)">LNAV or LOC</td></tr></table></div>
  </div>
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">Localizer-Based Approaches</div>
    <div class="eicas-card-body">When on final approach course intercept heading for LOC, B/CRS, SDF, or LDA:<br>Verify localizer tuned and identified.<br>Verify LOC pointer shown.</div>
  </div>
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">Arm Mode</div>
    <div class="eicas-card-body">Arm the LNAV or LOC mode.</div>
  </div>
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">Intercept</div>
    <div class="eicas-card-body">Verify LNAV engaged or localizer captured.<br>Do not cross FAF or begin descent unless aircraft is on final approach course.</div>
  </div>
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">~2 NM Before FAF</div>
    <div class="eicas-card-body">After ALT, VNAV PTH, or VNAV ALT is annunciated, and FAF altitude protection is assured:<br>Set DA(H) or MDA(H) on MCP.<br>Select/verify VNAV.<br>Select/verify speed intervention.</div>
  </div>
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">VNAV SPD / VNAV ALT</div>
    <div class="eicas-card-body">VNAV SPD changes to VNAV PTH near FAF if on or below path.<br>If VNAV ALT engages beyond FAF, set DA(H) or MDA(H) and select altitude intervention without delay.</div>
  </div>
</div>

<div class="eicas-levels">
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">FAF</div>
    <div class="eicas-card-body">Verify crossing altitude.<br>Monitor the approach.</div>
  </div>
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">MCP Altitude</div>
    <div class="eicas-card-body">When at least 300 ft below missed approach altitude, set missed approach altitude on the MCP.<br>Some missed approach altitudes may be lower than FAF crossing altitude.</div>
  </div>
  <div class="eicas-card eicas-card--white">
    <div class="eicas-card-title">DA(H) / MDA(H) / MAP</div>
    <div class="eicas-card-body">If suitable visual reference is established, disengage the autopilot in accordance with regulatory requirements.<br>Below DA/MDA, visual guidance is primary; VNAV PTH is reference only.<br>Maintain the descent path to landing.<br>After missed approach fix, VNAV path guidance transitions to level flight.</div>
  </div>
</div>

---

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

---
title: TCAS
tags: [non-normal, maneuvers]
---

# TCAS

### Traffic Advisory
> [!proc]- TA Maneuver
> **PF** "TCAS, I have Control"
> ###### Identify Intruder **PM**

### Resolution Advisory
> [!proc]- RA Maneuver
>
> **PF** Disengage AP, A/T
> ###### Establish Visual Contact **PM**
>
> **PF** Smoothly adjust Pitch/Thrust to satisfy RA command
> ###### Callout any conflicting traffic **PM**
> ###### Inform ATC ("TCAS RA / unable") **PM**
> ---
>
> ##### Follow the planned lateral path unless visual contact with conflicting traffic requires other action.

<div class="cl-note">FD stays ON during the maneuver – strictly follow RA command</div>

<table class="data-table">
  <thead>
    <tr><th></th><th>Target</th><th>Time</th></tr>
  </thead>
  <tbody>
    <tr>
      <td class="data-table__row-label data-table__row-label--strong">RA</td>
      <td>1.500 ft/min</td>
      <td>5 sec</td>
    </tr>
    <tr>
      <td class="data-table__row-label data-table__row-label--strong">Increase RA</td>
      <td>2.500 ft/min</td>
      <td>2,5 sec</td>
    </tr>
  </tbody>
</table>

> [!info] RA Command satisfied when BOTH…
> - **RA Region** reached AND
> - **V/S out of RED** (V/S pointer turns white)

> [!proc]- AFDS Back On
> **PF** "Push FLCH / LNAV / HDG SEL – set target altitude / heading"
> ###### Confirm mode active **PM**
>
> **PF** Engage AP, A/T

---

### CLIMB RA in Landing Configuration

<div class="cl-caution">CAUTION: Do not mistake with procedure "Go-Around"!</div>

> [!proc]- CLIMB RA in LDG CONF
>
> **PF** Disengage Autopilot
>
> **PF** Disengage Autothrottle
>
> **PF** Manually advance TL full fwd – call for Flaps 20
> ###### "FLAPS 20, THRUST SET!" **PM**
>
> **PF** Smoothly adjust Pitch/Thrust to satisfy RA command
>
> **PF** Follow planned lateral flightpath
> ###### (during turn: do not roll wings level) **PM**
>
> **PF** Verify positive rate – call for Gear Up
> ###### "POSITIVE RATE!" **PM**
> ###### "GEAR UP!" **PM**

---

### TCAS Display Selection

> [!info]- TFC Button – ND Display Modes
> | Push | Mode | Anzeige |
> | :--- | :--- | :--- |
> | 1st | **TFC-ALL** | All traffic on ND + PFD mini map · ADS-B data on ND |
> | 2nd | **TFC-FLTR** | All traffic on ND + PFD mini map · ADS-B only near ownship |
> | 3rd | *(off)* | Traffic no longer shown – TAs and RAs still available |

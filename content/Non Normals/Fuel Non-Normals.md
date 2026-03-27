---
title: Fuel Non-Normals
tags: [non-normal, fuel]
---

# Fuel Non-Normals

## Fuel Leak

> [!info]- Fuel Leak Suspected — Indications
> - Visual observation of fuel spray
> - Total fuel quantity decreasing at abnormal rate
> - An engine has excessive fuel flow
> - FUEL DISAGREE message
> - FUEL IMBALANCE message
> - FUEL QTY LOW message
> - INSUFFICIENT FUEL message

<div class="flow">
  <div class="flow-node fn-start">FUEL LEAK SUSPECTED</div>
  <div class="flow-vline"></div>
  <div class="flow-col">
    <div class="flow-row">
      <div class="flow-node fn-q">Unexpected fuel transfer?</div>
      <span class="flow-arrow">──YES──▶</span>
      <div class="flow-node fn-action">FUEL TRANSFER NNC</div>
    </div>
    <div class="flow-vline"></div>
    <span class="flow-label">NO</span>
    <div class="flow-vline"></div>
  </div>
  <div class="flow-col">
    <div class="flow-row">
      <div class="flow-node fn-q">Leak in Engine or Main Tank?</div>
      <span class="flow-arrow">──NO──▶</span>
      <div class="flow-node fn-action">Check center tank</div>
    </div>
    <div class="flow-vline"></div>
    <span class="flow-label">YES</span>
    <div class="flow-vline"></div>
  </div>
  <div class="flow-node fn-action">Shut down engine</div>
  <div class="flow-vline"></div>
  <div class="flow-col">
    <div class="flow-row">
      <div class="flow-node fn-q">Main tank fuel level stable?</div>
      <span class="flow-arrow">──YES──▶</span>
      <div class="flow-node fn-result">Engine leak — engine stays shut down</div>
    </div>
    <div class="flow-vline"></div>
    <span class="flow-label">NO</span>
    <div class="flow-vline"></div>
    <div class="flow-node fn-result">Main tank leak — engine may be restarted</div>
  </div>
</div>


## Fuel Jettison

> [!caution] Fuel Jettison must be considered if…
> - **Stopping distance or G/A performance** is a concern
> - **Autoland** is required
>
> → Evaluate same or higher degree of safety
> → s. auch [[Non Normals/Abnormal Emergency Procedures|Overweight Landing]]

> [!info]- Requirements
> **OM-A 8.3.15.1**
> - In close coordination with ATC
> - \> 6000 ft AGL
> - Not in holding pattern
> - Clear of cities and towns
> - Away from thunderstorms
> - A flight report must be filed
>
> **FCTM B787:** If adequate time is available — ensure adequate weather minimums
>
> **OM-B 1-20-12-1:** Do not jettison fuel at Flaps 30

> [!info]- System Notes
> - Inhibited on GND
> - Jettison rate: Main tanks **570 kg/min** · Center tank **1360 kg/min**
> - At least **3900 kg** of fuel per main tank must remain

### Unannunciated Checklist

<div class="checklist">

<div class="cl-item"><strong>FUEL JETTISON ARM switch</strong><span class="cl-dots"></span><strong>ARMED</strong></div>
<div class="cl-sub">Do not jettison fuel at flap settings listed on the FUEL JETTISON control panel placard</div>

<div class="cl-item"><strong>FUEL TO REMAIN selector</strong><span class="cl-dots"></span><strong>PULL ON, set manually</strong></div>
<div class="cl-sub">Change FUEL TO REMAIN value if required before pulling selector</div>

<div class="cl-item"><strong>FUEL JETTISON NOZZLE valve switches (both)</strong><span class="cl-dots"></span><strong>ON</strong></div>

</div>

**When fuel jettison is complete:**

<div class="checklist">

<div class="cl-item"><strong>FUEL JETTISON NOZZLE valve switches (both)</strong><span class="cl-dots"></span><strong>OFF</strong></div>

<div class="cl-item"><strong>FUEL TO REMAIN selector</strong><span class="cl-dots"></span><strong>OFF</strong></div>

<div class="cl-item"><strong>FUEL JETTISON ARM switch</strong><span class="cl-dots"></span><strong>OFF</strong></div>

</div>

> Wenn <span class="c-amber">**FUEL AUTO JETTISON**</span> erscheint: Das System hat den Jettison automatisch gestartet, weil das Landegewicht überschritten wird. Checklist wie gewohnt — nur FUEL TO REMAIN prüfen/anpassen.

## Fuel Imbalance

<span class="c-amber">**FUEL IMBALANCE**</span> — Differenz zwischen Main Tank 1 und 2 zu groß.

**Ausgleichsmethoden (Reihenfolge nach Effektivität):**

| Methode | Kommentar |
|:---|:---|
| **Fuel Balance System** | Automatisch oder manuell — bevorzugte Methode |
| **Crossfeed** | Beide Triebwerke aus demselben Tank — Imbalance wächst nicht weiter |
| **Triebwerk drosseln** | Letztes Mittel — Performance-Einschränkung |

**EICAS-Meldungen:**

| EICAS | Bedeutung |
|:---|:---|
| <span class="c-amber">**FUEL IMBALANCE**</span> | Main-Tank-Differenz überschreitet Grenzwert |
| <span class="c-amber">**FUEL DISAGREE**</span> | Angezeigter vs. berechneter Kraftstoff weicht ab — möglicher Leak |
| <span class="c-amber">**FUEL QTY LOW**</span> | Haupttank unter Mindestmenge |
| <span class="c-amber">**FUEL BALANCE SYS**</span> | Fuel Balance System ausgefallen — manueller Ausgleich erforderlich |

---

## Fuel Balance System

Überträgt automatisch Kraftstoff zwischen den Haupttanks, um Imbalance zu korrigieren.

- Rate: **135 l/min** (≈ 107 kg/min)
- 1.000 kg Differenz ausgleichen: ca. **7 min**
- Schneller als Crossfeed-Methode
- Arbeitet unabhängig vom Crossfeed-System

---

## FUEL UNUSABLE CTR

<span class="c-amber">**FUEL UNUSABLE CTR**</span> — Kraftstoff im Centertank kann nicht mehr zur Triebwerksversorgung genutzt werden.

**Ursache:** Das Flugzeug ist außerhalb des CG-Envelopes — der verbleibende Centertank-Kraftstoff liegt hinter dem zulässigen Schwerpunkt.

**Konsequenz:** Kraftstoff ist physisch vorhanden, aber gesperrt. Die angezeigte Gesamtmenge täuscht — tatsächlich verfügbare Menge entspricht nur den Haupttanks.

> [!warning] Planung
> Landedistanz und Alternates auf Basis der **Haupttank-Menge** planen — nicht Gesamtmenge.

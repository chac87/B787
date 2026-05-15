---
title: Common Core System (CCS)
tags: [systems, avionics]
---

# Common Core System (CCS)

Most airplane systems use a common computing network and data exchange system – the **Common Core System (CCS)**. Operation is automatic; there are no controls or indications during normal operations.

## Common Computing Resource (CCR)

The **CCR** is the main CCS component. It has a **left and right cabinet**, each containing separate modules that perform distinct functions. Most faults can be isolated, allowing the affected cabinet to continue operation.

> [!info] Fault / Loss of Displays
> A CCR fault may result in loss of displays. An **unannunciated non-normal checklist** exists for this: **[LOSS OF ALL DISPLAYS](/Non-Normals/Non-Normal-Checklists/LOSS-OF-ALL-DISPLAYS)**. Two CCR RESET switches (L, R) are located on the overhead panel for use during this procedure.

---

## CCS Start-Up Sequence

The **left CCR always starts up first**.

> [!info]- Battery Power Start-Up
> - BATTERY switch pushed ON → left CCR start-up cycle begins (~2–3 min)
> - Left CCR is online when the Captain's inboard and lower display units show the **default CDU page format**
> - Right CCR start-up does **not** begin on battery alone – requires a power source other than the battery (APU or external power) to close the Electronic Circuit Breakers (ECBs)

> [!info]- External / APU Power Start-Up
> - When **AVAIL** is displayed on either forward EXT PWR switch → left CCR start-up cycle begins (~2–3 min), followed by the right CCR
> - Both CCRs are online when **all displays and HUD combiners show their default formats**

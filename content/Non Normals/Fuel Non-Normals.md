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

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryTextColor': '#1E2A44', 'lineColor': '#8A7F6B', 'edgeLabelBackground': '#F1EDE3'}}}%%
flowchart TD
    A["FUEL LEAK SUSPECTED"]
    A --> B{"Leak due to unexpected fuel xfer?"}
    B -->|YES| C["FUEL TRANSFER NNC"]
    B -->|NO| D{"Leak in Engine or Main Tank?"}
    D -->|NO| E["Check for center tank leak"]
    D -->|YES| F["Shut down engine"]
    F --> G{"Main tank fuel level remains the same?"}
    G -->|YES| H["Leak is an engine leak — Eng stays shut down"]
    G -->|NO| I["Leak is a main tank leak — Eng may be restarted"]

    classDef decision fill:#e8e0d0,stroke:#8A7F6B,color:#1E2A44
    classDef action fill:#f1ede3,stroke:#3E5FA8,color:#1E2A44
    classDef result fill:#dce8f0,stroke:#3E5FA8,color:#1E2A44
    classDef start fill:#d4e0f5,stroke:#3E5FA8,color:#1E2A44

    class B,D,G decision
    class C,E,F action
    class H,I result
    class A start
```

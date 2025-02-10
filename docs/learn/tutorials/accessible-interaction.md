--8<-- "api-reference-snippets.md"

<link rel="stylesheet" href="/css/examples.css">

# Accessible Interaction

!!! warning "Under Construction"
    This section and others in Getting Started with SceneryStack are under heavy revisement
    and will be updated in January 2025.

??? note "Prerequisites"
    Before setting up your development environment, ensure the following tools are installed:

    1. **Command Line Interface:** Use Terminal (macOS/Linux) or Command Prompt (Windows).
    2. **Git:** Download from [git-scm.com](https://git-scm.com/downloads) or install via Xcode command-line tools on macOS/Linux.
    3. **Node.js and npm:** Install the latest version from [Node.js](https://nodejs.org/).



TODOs:
    (show pdom output HTML)
    (iframe -- for headers?)

    EFAC BikerNode / Biker --- also remove the spokes from the front wheel for the frame, and animate that

    Component (accessibleName/helpText, maybe object responses)
    Headings
    Dynamic state description + context responses
    
    ... pan and zoom (should work with almost everything)
    ... interactive highlights

    Bicycle (moving left to right) FAMB style
        Energy Forms and Changes bike!!!!!
        "Accelerate" / "Brake" / "Change Direction" (disabled while in motion)
        Acceleration slider (or slope):
            -1m/s^2 ___ 0 ___ 1m/s^2
        Radio button group:
            bicycle color (change appearance)

        Headings:
            h1 (Demo Name)
                (simple static scene description)
                h2 Bicycle
                    p (dynamic bike description)
                        direction, speed (velocity) - whether it's stopped
                        acceleration?
                        color
                h2 Bicycle Controls
                    Accelerate button
                    Brake button
                    Change Direction button
                    Acceleration Slider
                    h3 Radio Button Group
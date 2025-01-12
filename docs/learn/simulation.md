# Simulation

!!! warning "Under Construction"
    This section and others in Getting Started with SceneryStack are under heavy revisement
    and will be updated by the end of 2024.

??? note "Prerequisites"
    Before setting up your development environment, ensure the following tools are installed:

    1. **Command Line Interface:** Use Terminal (macOS/Linux) or Command Prompt (Windows).
    2. **Git:** Download from [git-scm.com](https://git-scm.com/downloads) or install via Xcode command-line tools on macOS/Linux.
    3. **Node.js and npm:** Install the latest version from [Node.js](https://nodejs.org/).

If you're looking to create a STEM-focused, interactive simulation then you're in the right place.

## Setting Expectations

Developing a full simulation can be an extensive task. You will need (or need to learn) the development knowledge and skills to use the tools to create a simulation from scratch. **However**, we've seen many examples of success from community members. Small test projects, academic projects (e.g., education research for a Ph.D.), or open-source curriculum projects have all successfully developed custom simulations, leveraging SceneryStack (See [Simulation Examples](./examples/simulation-showcase.md)). It requires expertise in design and JavaScript/TypeScript, but it is very possible for dedicated developers and teams. Please reach out to us through the [community discussion forum](https://github.com/orgs/scenerystack/discussions) for support from the community and maintainers.

If your dream is to one day have your simulation hosted on the PhET website - then if you have made significant progress and you are committed to your STEM simulation, reach out to [phethelp@colorado.edu](mailto:phethelp@colorado.edu) to discuss opportunities.

!!! info inline end "If you are a commercial organization interested in making new simulations"
    See the [Source Code page of our website](https://phet.colorado.edu/en/about/source-code) for more information.

## Getting Started

It is recommended to start new simulation projects by using a template.

To create a new simulation, run the following command:

```shell
npm create scenerystack@latest
```

The prompts will guide you through the process of creating a new simulation, and will print out instructions
to be able to view the simulation in your browser.

It will ask about your choice of bundler ([Vite](https://vite.dev/) and [Parcel](https://parceljs.org/) are the two
options), and whether you would like to use [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/). The
project will be created under a directory with the same name as the picked project name.

## Documentation and Resources

- A [community-created guide from HNM Simulations](https://nm.mathforcollege.com/nmsims/HNM%20Simulations%20Documentation/_book/) provides a lot of helpful tips, though some information may be out of date.

- Look through [examples](./examples/simulation-showcase.md)! There are well over one hundred PhET simulations and many community-created simulations to use as resources and inspiration. We look forward to learning about your creations!

- The simulation [*Molarity*](https://github.com/phetsims/molarity) is a good sim to look at since it is simple and will give you a good overview of the guts of the SceneryStack, simulation architecture, and [accessibility implementation](../accessibility/a11y_guides.md).

- It may be helpful to check out the [Code Review Checklist](../reference/code_checklist.md) used by PhET Simulation developers before publishing a simulation. It contains a lot of checks and extra resources which should help improve the quality of your simulation!

If you have any questions or need further assistance, please head over to the [Discussions or chat platforms](../community/join.md).

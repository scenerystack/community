# Developing a Simulation

!!! warning "Under Construction"
    This section and others in Getting Started with SceneryStack are under heavy revisement and will be updated by the end of 2024.

If you're looking to create a STEM-focused, interactive simulation then you're in the right place.

## Setting Expectations

 Developing a full simulation can be an extensive task. You will need (or need to learn) the development knowledge and skills to use the tools to create a simulation from scratch. **However**, we've seen many examples of success from community members. Small test projects, academic projects (e.g., education research for a Ph.D.), or open-source curriculum projects have all successfully developed custom simulations, leveraging SceneryStack (See [Simulation Examples](simulation_examples.md)). It requires expertise in design and JavaScript/TypeScript, but it is very possible for dedicated developers and teams. Please reach out to us through the [community discussion forum](https://github.com/orgs/scenerystack/discussions) for support from the community and maintainers.

If your dream is to one day have your simulation hosted on the PhET website - then if you have made significant progress and you are committed to your STEM simulation, reach out to [phethelp@colorado.edu](mailto:phethelp@colorado.edu) to discuss opportunities.

!!! info inline end "If you are a commercial organization interested in making new simulations"
    See the [Source Code page of our website](https://phet.colorado.edu/en/about/source-code) for more information.

## Getting Started

For anyone interested in setting up a development environment, the [Development Overview](../../info_sync/simulation_development_overview.md) is the best place to start. It provides a comprehensive introduction to the processes, tools, and best practices for developing with the libraries contained in SceneryStack. It also serves as the best starting point for creating interactive simulations, specifically.

1. You will likely want to [check out some of the basics of Scenery and the libraries packaged in phet-lib](https://phetsims.github.io/scenery/doc/).
2. Don't forget to get up to speed on all the core [software design patterns](../../info_sync/software_design_patterns.md), including Model-View-Controller.
3. Try out some [introductory exercises](../../info_sync/scenerystack_exercises.md).
4. Check out the [Example Sim demo](example_sim.md) to see a simple simulation in action.

## Documentation and Resources

- A [community-created guide from HNM Simulations](https://nm.mathforcollege.com/nmsims/HNM%20Simulations%20Documentation/_book/) provides a lot of helpful tips, though some information may be out of date.

- Look through [examples](simulation_examples.md)! There are well over one hundred PhET simulations and many community-created simulations to use as resources and inspiration. We look forward to learning about your creations!

- The simulation [*Molarity*](https://github.com/phetsims/molarity) is a good sim to look at since it is simple and will give you a good overview of the guts of the SceneryStack, simulation architecture, and [accessibility implementation](../../accessibility/a11y_guides.md).

- It may be helpful to check out the [Code Review Checklist](../../reference/code_checklist.md) used by PhET Simulation developers before publishing a simulation. It contains a lot of checks and extra resources which should help improve the quality of your simulation!

If you have any questions or need further assistance, please head over to the [Discussions or chat platforms](../../community/join.md).

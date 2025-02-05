--8<-- "api-reference-snippets.md"

<link rel="stylesheet" href="/css/examples.css">

# Simulation

Here, you'll find info for starting up a STEM-focused, interactive simulation project. This guide will help you set up your development environment, create a new simulation, and provide resources to help you along the way.

??? note "Prerequisites"
    Before setting up your development environment, ensure the following tools are installed:

    1. **Command Line Interface:** Use Terminal (macOS/Linux), Command Prompt (Windows), or your preferred CLI.
    2. **Git:** Download from [git-scm.com](https://git-scm.com/downloads) or install via Xcode command-line tools on macOS/Linux.
    3. **Node.js and npm:** Install the latest version from [Node.js](https://nodejs.org/).

## Getting Started

It is recommended to start new simulation projects by using a template.

To create a new simulation, run the following command:

```shell
npm create scenerystack@latest
```

The prompts will guide you through the process of creating a new simulation, and will print out instructions
to be able to view the simulation in your browser.

It will ask about your choice of bundler ([Vite](https://vite.dev/), [Webpack](https://webpack.js.org/), [Esbuild](https://esbuild.github.io/), and [Parcel](https://parceljs.org/) are the 
options), and whether you would like to use [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/). The
project will be created under a directory with the same name as the picked project name.

## Resources

### Examples

- Look through [examples](./examples/simulation-showcase.md)! There are well over one hundred PhET simulations and many community-created simulations to use as resources and inspiration. We look forward to learning about your creations!

- The simulation [*Molarity*](https://github.com/phetsims/molarity) is a good sim to look at since it is simple and will give you a good overview of the guts of the SceneryStack, simulation architecture, and [accessibility implementation](../accessibility/a11y_guides.md).

### Community Guides

- A [community-created guide from HNM Simulations](https://nm.mathforcollege.com/nmsims/HNM%20Simulations%20Documentation/_book/) provides a lot of helpful tips, though information is outdated and does not include steps for using the npm package.

### PhET Resources

- It may be helpful to check out the [Code Review Checklist](../reference/code_checklist.md) used by PhET Simulation developers before publishing a simulation. It contains a lot of checks and extra resources which should help improve the quality of your simulation!

### Accessibility and Inclusive Features

- SceneryStack is designed to support rich and inclusive multimodal interaction, including the architecture to build robust alternative input and screen reader access when used in conjunction with an [Interactive Description Design Framework](https://www.coursera.org/learn/description-design-for-interactive-learning-resources).
- For more information on accessibility, see the [Accessibility Guides](../accessibility/a11y_guides.md).

If you have any questions or need further assistance, please head over to the [Discussions or chat platforms](../community/join.md).

## Setting Expectations

If you're using PhET Interactive Simulations as a model, it's important to understand that developing a full simulation can be an extensive task depending on the scope of the project you envision. Simpler simulations can be developed in a matter of weeks, while more complex simulations can take months or years to complete. SceneryStack's goals include easing development and providing tools to make those simulations flexible and accessible, as well as to provide a robust framework for creating interactive STEM simulations. However, it is not a "drag-and-drop" tool for creating simulations. It is a set of libraries and tools that require development knowledge and skills to use effectively.

Simulations on the scale PhET creates are developed by a team of experts (designers and developers) over a period of months or years. You will need (or need to learn) the development knowledge and skills to use the tools to create a simulation from scratch. **However**, there have been many examples of success from community members. Small test projects, academic projects (e.g., undergraduate projects or education research for a Ph.D.), or open-source curriculum projects have all successfully developed custom simulations, leveraging SceneryStack (See [Simulation Examples](./examples/simulation-showcase.md)). It requires expertise in design and JavaScript/TypeScript, but it is very possible for dedicated developers and/or teams.

Please reach out through the [community discussion forum](https://github.com/orgs/scenerystack/discussions) for support from the community and maintainers, and share your progress along the way!

Please see the [FAQs](../about/faqs.md) for more information about simulation development and the relationship between SceneryStack and PhET Interactive Simulations.

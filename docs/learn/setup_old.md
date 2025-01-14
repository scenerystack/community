# Setup Guide

!!! warning "Under Construction"
    This section and others in Getting Started with SceneryStack are under heavy revisement
    and will be updated in January 2025.

For creating general web interactive content with SceneryStack, it is recommended to use the
[SceneryStack npm package](https://www.npmjs.com/package/scenerystack) from the
[npm package repository](https://www.npmjs.com/), along with a build/bundling tool.

The guide below will set up a project structure that uses [Vite](https://vitejs.dev/) to serve and build some SceneryStack examples.

## Already set up?

Choose your development path below:

| Path A: Looking to take advantage of SceneryStack in your web project? | Path B: Want to leverage SceneryStack for a fullscreen project? | Path C: Want to leverage SceneryStack to make your own interactive simulation? |
|---|---|--------------------------------------------------------------------------------|
| [Integrate SceneryStack into your Project](./web/web_overview.md){ .md-button .md-button--secondary } | [Start a New SceneryStack Project](./web/web_overview.md){ .md-button .md-button--secondary } | [Make A Simulation](./simulation.md){ .md-button .md-button--secondary }       |

<!-- ### Path A: Using SceneryStack for Web Projects

Looking to take advantage of SceneryStack in your web project?

[Integrate SceneryStack into your Project](./web/web_overview.md){ .md-button .md-button--secondary }

### Path B: Using SceneryStack Framework to Make Highly Interactive Experiences

Want to leverage SceneryStack for a fullscreen project?

[Use the Full Framework](./web/web_overview.md){ .md-button .md-button--secondary }

### Path C: Using SceneryStack Framework to Make an Interactive Simulation

Want to leverage SceneryStack to make your own interactive simulation? Whether you plan to work with the PhET project or brand it yourself, you'll want to use the whole framework.

[Use the Full Framework](./simulation.md){ .md-button .md-button--secondary } -->

## THREE.js Integration

TODO: simplified mobius/three example

## React Integration

The Scenery `Display` can be used as a React component, allowing for Scenery content to be easily added to a React application.

```jsx
import { Rectangle } from 'scenerystack/scenery';
import { Scenery } from 'scenerystack/react';

const ExampleComponent = () => {
  return (
    <Scenery node={new Rectangle( 0, 0, 100, 30, { fill: 'red' } )}/>
  );
}
```

??? warning "React integration is in progress"
    This integration has not been widely tested or deployed.

A React Fiber renderer is planned for SceneryStack, somewhat akin to [React Three Fiber](https://r3f.docs.pmnd.rs/), which will allow writing SceneryStack visuals in a React-like style.

## I don't know JavaScript development, how can I get started?

Welcome to the wonderful world of interactive web development! There are many ways to get started and many resources on the internet to support you.

You will want to pick up a basic understanding of HTML web development and a good understanding of JavaScript before getting started with SceneryStack.

The internet is full of resources to help you on your journey and a quick search will turn up many. Consider resources like [freecodecamp.com](https://www.freecodecamp.org/), which has also begun providing [courses in Spanish](https://www.freecodecamp.org/news/javascript-course-in-spanish/). Take a look at the bottom of the page for other tips and resources!

As soon as you can, start tinkering with SceneryStack and building projects to become familiar with the framework and begin your goal project!

!!! warning
    Using TypeScript is recommended if possible. At this time, most of SceneryStack is written in [TypeScript](https://www.freecodecamp.org/news/learn-typescript-beginners-guide/#:~:text=cheat%20sheet%20PDF-,What%20is%20TypeScript%3F,-TypeScript%20is%20a) (TS), while some are still written in JavaScript (JS), with future updates to the libraries converting JS to TS. The [simulation tooling](../info_sync/simulation_development_overview.md#building-the-simulation-with-chipper) in use by PhET to create simulations assumes TS integration concerning type enforcement, and you may run into difficulties using JS. Please keep this in mind during your learning journey and do not be afraid to ask for help!

!!! tip "A few extra tips to get started"

    1. A good place to start with JavaScript is [*Eloquent JavaScript*](https://eloquentjavascript.net/) -- if you are not familiar with the language it has many quirks. It would be worth your time to go through as much of this resource as possible, but certainly the first 11 chapters or so.
       1. Other helpful resources are: [*Effective JavaScript* by Dave Herman](http://effectivejs.com/) (Chapters 1-3) and [Idiomatic JavaScript](https://github.com/rwaldron/idiomatic.js/).
    2. SceneryStack libraries are heavily based on MVC (model view controller) patterns, so probably a good idea to familiarize yourself with this general idea. See [Software Design Patterns](../info_sync/software_design_patterns.md#model-view-controller-mvc) for more.
    3. Familiarize yourself with version control, specifically [Git](https://www.freecodecamp.org/news/gitting-things-done-book/).
    4. As mentioned above, we have also switched to using TypeScript (with ~70% of SceneryStack code now converted) - so you might want to look at the power of that language, which works with JavaScript but has a lot of advantages. Some developers ordered and read this book *Effective TypeScript* ([amazon link](https://www.amazon.com/Effective-TypeScript-Specific-Ways-Improve-dp-1492053740/dp/1492053740/)).

# Development Pathways using SceneryStack

!!! info
    While the *SceneryStack community* is housed in the SceneryStack GitHub organization, **all libraries for development** using SceneryStack are in the **phetsims** GitHub organization found at <https://github.com/phetsims/>.

Ready to get started with SceneryStack? Choose your path:

## Path A: Using SceneryStack for Web Projects

[Integrate SceneryStack into your Project](scenery.md){ .md-button .md-button--primary }

Looking to take advantage of SceneryStack in your web project? You'll likely want to get started with the [the scenerystack npm distribution](scenery.md).

## Path B: Using SceneryStack Framework to Make Highly Interactive Experiences

[Use the Full Framework](./simulation/simulation-development.md){ .md-button .md-button--primary }

Want to leverage SceneryStack to its fullest? Perhaps itching to make your own interactive simulation? Whether you plan to work with the PhET project or brand it yourself. You will likely want to [check out some of the basics of Scenery and the libraries packaged in phet-lib](scenery.md), but then head over to [Simulation Development](./simulation/simulation-development.md) to set your environment up to make interactive sims. Don't forget to get up to speed on all the necessary [software design patterns](../info-sync/phet-software-design-patterns.md) and try out some [introductory exercises](../info-sync/scenerystack-exercises.md).

## Path C: I don't know JavaScript development, how can I get started?

Welcome to the wonderful world of interactive web development! There are many ways to get started and many resources on the internet to support you.

You will want to pick up a basic understanding of HTML web development and a good understanding of JavaScript before getting started with SceneryStack.

The internet is full of resources to help you on your journey and a quick search will turn up many. Consider resources like [freecodecamp.com](https://www.freecodecamp.org/), which has also begun providing [courses in Spanish](https://www.freecodecamp.org/news/javascript-course-in-spanish/). Take a look at the bottom of the page for other tips and resources!

As soon as you can, start tinkering with SceneryStack and building projects to become familiar with the framework and begin your goal project!

!!! warning
    Using TypeScript is recommended if possible. At this time, most of SceneryStack is written in [TypeScript](https://www.freecodecamp.org/news/learn-typescript-beginners-guide/#:~:text=cheat%20sheet%20PDF-,What%20is%20TypeScript%3F,-TypeScript%20is%20a) (TS), while some are still written in JavaScript (JS), with future updates to the libraries converting JS to TS. The [simulation tooling](../info-sync/simulation-development-overview.md#building-the-simulation-with-chipper) in use by PhET to create simulations assumes TS integration concerning type enforcement, and you may run into difficulties using JS. Please keep this in mind during your learning journey and do not be afraid to ask for help!

!!! tip "A few extra tips to get started"

    1. A good place to start with JavaScript is [*Eloquent JavaScript*](https://eloquentjavascript.net/) -- if you are not familiar with the language it has many quirks. It would be worth your time to go through as much of this resource as possible, but certainly the first 11 chapters or so.
       1. Other helpful resources are: [*Effective JavaScript* by Dave Herman](http://effectivejs.com/) (Chapters 1-3) and [Idiomatic JavaScript](https://github.com/rwaldron/idiomatic.js/).
    2. SceneryStack libraries are heavily based on MVC (model view controller) patterns, so probably a good idea to familiarize yourself with this general idea. See [Software Design Patterns](../info-sync/phet-software-design-patterns.md#model-view-controller-mvc) for more.
    3. Familiarize yourself with version control, specifically [Git](https://www.freecodecamp.org/news/gitting-things-done-book/).
    4. As mentioned above, we have also switched to using TypeScript (with ~70% of SceneryStack code now converted) - so you might want to look at the power of that language, which works with JavaScript but has a lot of advantages. Some developers ordered and read this book *Effective TypeScript* ([amazon link](https://www.amazon.com/Effective-TypeScript-Specific-Ways-Improve-dp-1492053740/dp/1492053740/)).
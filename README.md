# Welcome to the SceneryStack Developer Community! ![teal paper airplane icon](scenery-stack-icon.png)
 <!-- Any good ideas for images we can drop throughout this document? -->

 This repository houses discussions and resources for the developer community using the libraries within SceneryStack to create interactive simulations and other web interactives in HTML5.

## What is SceneryStack?

 They are a collection of libraries built around an MVC framework that can be used **together or separately** to support an interactive web project. PhET uses many or all of these libraries when creating an educational interactive simulation. Some libraries are more specific to our usage, including assets and branding, but most offer more generalizable use cases.

### Why use SceneryStack? 

 There are many libraries out there for creating and rendering interactive content on the web - why might you choose SceneryStack? We created and evolved the PhET Library because no existing platform met all of the needs for our simulations with enough scalability, flexibility, and robustness required to support our end-users. You may be interested in using SceneryStack if having all or most of the following features natively available to you is important:

- :star:  Cross Platform
- :star:  Pixel Perfect Design
- :star:  Swipe to snag
- :star:  Enhance touch areas/mouse areas
- :star:  Ready for internationalization
- :star:  Component Library, including building your own
- :star:  High pixel density devices
- :star:  TypeScript = type safety + autocomplete
- :star:  Parallel Document Object Model (PDOM) and screen reader accessibility
- :star:  Support for customizable, dynamic spoken content using Web Speech ([coined "Voicing"](https://youtu.be/mwCc_NDmqx4))
- :star:  In-app pinch to zoom and zoomed-in panning.
- :star:  Downloadable / fully offline / Single-File artifacts
- :star:  Render to SVG, canvas, or WebGL (partial)
- :star:  API for specifying keyboard traversal order
- :star:  Layout engine
- :star:  Abstraction over CSS
- :star:  Axon Property.link

- Abstract declarative APIs allow scenery to adjust performance/quality on demand, using whatever technology is best on the given browser (and to work around browser bugs)
- Clipping/filtering/positioning/layering works seamlessly across technologies used (SVG/Canvas/WebGL)
- Codebase is set up to support easy-to-read/maintain as a default, always with the option to customize for performance or quality (e.g., dot, mutable forms available for performance, immutable forms available for readability and ease-of-use)
- Able to serve the final product in a single HTML/XHTML with no external assets or servers (this is the largest constraint affecting what we do currently)
- Input system that supports extended/customizable touch handling and accessibility from the base up
- Advanced layout (based on customizable bounds) and accurate shape computations and CAG for interfaces and components
- Garbage collector friendly - pooling is used
- Library of UI components that are battle tested and flexible

## Common Code Libraries

<!-- a11y-research
axon
bamboo
community
dot
griddle
joist
kite
mobius
nitroglycerin
phet-core
phet-info
phetcommon
scenery-phet
scenery
sun
tambo
tandem
tangible
tappi
twixt
utterance-queue
vegas -->
Below you will find a list of the libraries that make up SceneryStack. Each library has a link to its repository, a brief description, and a link to its documentation. The libraries are organized into four categories: **View Libraries**, **Model Libraries**, **Tooling for Simulation Development**, and **Other**. Additional libraries that have been situationally used for development that are not mentioned here are also available and open for contribution and use in the [phetsims GitHub page](https://github.com/phetsims/).

### View Libraries

| Repository  | LOC | Description |
| ------------- | ------------- | ---------- |
| [scenery](https://github.com/phetsims/scenery/)  | 86,000  | Foundational library for representing graphics (rendering to SVG, canvas, or WebGL), handling input, and generally abstraction for the browser and cross-platform support. Shapes are represented using |[kite](https://github.com/phetsims/kite/). Observer and emitter patterns use [axon](https://github.com/phetsims/axon/). Support for alternative input (e.g., keyboard input) and accessibility features.
| [sun](https://github.com/phetsims/sun/) | 13,000  | Graphical user interface components, such as buttons and checkboxes, which could be useful in any application context. Built using [scenery](https://github.com/phetsims/scenery/).
| [joist](https://github.com/phetsims/joist/)  | 10,000  | Simulation loading, homescreen + navigation bar, screen management. Uses some user interface components from [sun](https://github.com/phetsims/sun/). Uses [scenery](https://github.com/phetsims/scenery/) to render and process input. Runs the animation loop.
| [scenery-phet](https://github.com/phetsims/scenery-phet/)  | 25,000  | Simulation-specific components, such as probes, sensors, buckets, magnifying glasses, etc. Built using [scenery](https://github.com/phetsims/scenery/).
| [tambo](https://github.com/phetsims/tambo/)  | 6,000  | Sound effects and sonification. Uses [axon](https://github.com/phetsims/axon/) for some observer/listeners support.
| [brand](https://github.com/phetsims/brand/)  | 100  | Provides support for the main supported brands "PhET" and "PhET-iO" and hooks for clients to develop their own branding.
| [twixt](https://github.com/phetsims/brand/)  | 2,000  | Support for tweening and animation. It can be used to animate user interface components or artwork in the view or model elements directly.

### Model Libraries

| Repository  | LOC | Description |
| ------------- | ------------- | ---------- |
| [kite](https://github.com/phetsims/kite/)  | 16,000  | Shapes and geometry. Mathematics implemented using [dot](https://github.com/phetsims/dot/)
| [dot](https://github.com/phetsims/dot/)  | 21,000  | Mathematical objects such as Vector, Matrix, and corresponding numerical algorithms
| [axon](https://github.com/phetsims/axon/)  | 8,000  | Data structures for the observer pattern (Property) and listener pattern (Emitters).
| [phet-core](https://github.com/phetsims/phet-core/)  | 4,000  | Basic utility & support data structures and algorithms
| [tandem](https://github.com/phetsims/tandem/)  | 5,000  | Simulation-side code to support PhET-iO instrumentation.
| [utterance-queue](https://github.com/phetsims/utterance-queue) | 1,000  | Queue for managing speech synthesis (text-to-speech) utterances. Uses [axon].

### Tooling for Simulation Development

| Repository  | LOC | Description |
| ------------- | ------------- | ---------- |
| [chipper](https://github.com/phetsims/chipper/)  | 10,000  | Tools for developing and building simulations. Uses code in [perennial-alias](https://github.com/phetsims/perennial-alias/) for some tasks.
| [perennial](https://github.com/phetsims/perennial/)  | 11,000  | Maintenance tools that won't change with different versions of chipper checked out (always runs in master).
| [perennial-alias](https://github.com/phetsims/perennial/)  | 11,000  | Copy of perennial that can run on non-master SHAs.
| [sherpa](https://github.com/phetsims/sherpa/)  | - | All of our 3rd-party dependencies. Some, such as font-awesome or lodash, are used in every simulation, and some, such as numeric or three.js, are used in only some simulations.

### Other

| Repository  | LOC | Description |
| ------------- | ------------- | ---------- |
| [community](https://github.com/phetsims/community) | - | This repository! Discussion forum and resources for the developer community using SceneryStack to create interactive simulations and other web interactives in HTML5.
| [a11y-research](https://github.com/phetsims/a11y-research) | - | Research and development of accessibility features and Inclusive Design for multimodal web interactives.
| [phet-info](https://github.com/phetsims/phet-info) | - | Documentation for the development of PhET Interactive Simulations, including helpful tips for using SceneryStack to create interactive simulations and web interactives in HTML5.

### phet-lib: Built version of the common code libraries 📚

 Looking for the core libraries in one build for your app? Download phet-lib from the [phet-lib repository](https://github.com/phetsims/phet-lib).

## Using SceneryStack to Make Web Interactives in HTML5 

### Development Overview

For anyone interested in setting up a development environment, the [PhET Development Overview](https://github.com/phetsims/phet-info/blob/master/doc/phet-development-overview.md) is the best place to start. It provides a comprehensive introduction to the processes, tools, and best practices for developing with the libraries contained in SceneryStack. It also serves as the best starting point for creating interactive simulations, specifically.

### Additional Resources

In the [PhET documentation directory](https://github.com/phetsims/phet-info/tree/master/doc), you'll find a range of helpful resources for different aspects of development, including:

- **Dev Exercises**: Enhance your SceneryStack development skills with these hands-on exercises. Check out the [PhET dev exercises document](https://github.com/phetsims/phet-info/blob/master/doc/phet-dev-exercises.md)
- **TypeScript Quickstart**: If you're new to TypeScript or need a refresher, you can follow our [TypeScript Quickstart guide](https://github.com/phetsims/phet-info/blob/master/doc/typescript-quick-start.md)
- **Coding Conventions**: Ensure your code is consistent and readable with our [coding conventions](https://github.com/phetsims/phet-info/blob/master/doc/coding-conventions.md)
- **Software Design Patterns**: Familiarize yourself with the [software design patterns](https://github.com/phetsims/phet-info/blob/master/doc/phet-software-design-patterns.md) used within PhET projects.
- **Accessibility Documentation**: Learn about designing accessibility features such as alternative input, screen-reader-friendly interactive description, and more through our development guidelines:
  - [Alternative Input Guide](https://github.com/phetsims/phet-info/blob/master/doc/alternative-input-quickstart-guide.md)
  - [Interactive Description Guide](https://github.com/phetsims/phet-info/blob/master/doc/interactive-description-technical-guide.md)

### In-Code Documentation

Often, the best documentation for each library is available in the code itself. As you navigate through the codebase, you'll find well-documented code with inline comments and annotations that explain how things work. We encourage you to explore the code as it can provide the most accurate and up-to-date information.

Feel free to explore these documents and the code itself to get a deeper understanding of the PhET development ecosystem and to get started on your project. If you have any questions or need further assistance, please refer to the community support section or contact us directly.

## Examples using SceneryStack

- [Numerical Method Simulations by Autar Kaw](https://nm.mathforcollege.com/numericalmethodssimulations/)
 <!-- - [Simple platformer game by @jessegreenberg](https://github.com/jessegreenberg/jessegreenberg.github.io/tree/main/christmas-cat) WAITING on JG to move into another repo and clean it up-->
- [Optimal Wordle Solutions by @jonathanolson](https://jonathanolson.net/experiments/optimal-wordle-solutions)
- [Cupcake Snake Game by @samreid](https://github.com/samreid/cupcake-snake)
- [Paper Playground - A multimodal, collaborative web interaction design tool using phetlib](https://github.com/phetsims/paper-land/)
- [Simple examples using Scenery](https://phetsims.github.io/scenery/examples/)
- [Paper Mario-like game for their partner, by @jonathanolson](https://jonathanolson.net/miscworks/build/ring-attack-solo.html)
- [4D visualization with 3D images, by @jonathanolson](https://jonathanolson.net/miscworks/build/fourtest.html)
- [Rubik's Cube searchable algorithms page, by @jonathanolson](https://jonathanolson.net/miscworks/build/rubik_algorithms.html)
- [Simplified manual for "Keep Talking and Nobody Explodes" game, by @jonathanolson](https://jonathanolson.net/miscworks/build/ktane.html)
- [Letterboxing Tool by @jonathanolson](https://jonathanolson.net/miscworks/build/boxing.html)
- For a simple demonstration using phet-lib, see [Scenery Lab Demo](https://github.com/phetsims/scenery-lab-demo)
- and of course, [all PhET Interactive Simulations](https://github.com/phetsims)

Creating something? Let us know, and let's get your example added here!

## Joining the Community and Contributing 🤝

 Join the SceneryStack community by participating in the [community discussion forum](https://github.com/orgs/phetsims/discussions). Share the progress of what you're working on, your ideas, and ask questions!

 We welcome many kinds of contributions to SceneryStack, from common code features/bug fixes to documentation updates.

 Please see our [CONTRIBUTING.md](./CONTRIBUTING.md) found in any common code repository.

## FAQ

### What is this repository for?

  Discussions, resources, and collaboration around the use and improvement of [SceneryStack](https://github.com/phetsims/phet-info/blob/master/doc/phet-development-overview.md#source-code-and-dependencies) created and maintained by the developers at the PhET Interactive Simulations project.

  This repository is not for discussions and help regarding PhET's educational, interactive simulations. For questions and comments regarding PhET's simulations, please keep reading or see the [PhET Interactive Simulations website](https://phet.colorado.edu/) for more information.

### What is the difference between SceneryStack and PhET Interactive Simulations?

 SceneryStack is the HTML5/JavaScript/TypeScript APIs (detailed above) that PhET Interactive Simulations are built on. The use of SceneryStack **is not limited to creating interactive science and math simulations!** It can be used to support the creation of all web interactives. PhET Common Code supports rich and inclusive multimodal interaction, including the architecture to build robust alternative input and screen reader access when used in conjunction with our [Interactive Description Design Framework](https://www.coursera.org/learn/description-design-for-interactive-learning-resources). 

 PhET Interactive Simulations are free educational science and math products created using SceneryStack by the designers and developers at the PhET Interactive Simulations Project. They are developed using [research-based, pedagogically-minded design methods](https://phet.colorado.edu/).

### Where can I get help or provide feedback for specific PhET Simulations?

For anything involving PhET-created simulations, see the [PhET website](https://phet.colorado.edu).

- To request **new PhET Simulations or new features in PhET Simulations**, follow the links on the [Getting Started section of the Help Center](https://phet.colorado.edu/en/help-center/getting-started#:~:text=I%20have%20a%20sim%20idea.%20Where%20can%20I%20send%20it%3F).
- **For help or questions related to using PhET Simulations**, please see our [website](https://phet.colorado.edu/en/help-center/getting-started) or e-mail [phethelp@colorado.edu](mailto:phethelp@colorado.edu).
- **To report a problem for a specific PhET Simulation**. Open the PhET menu on the navigation bar of the simulation and select “Report a Problem…” to submit a bug report using the provided form.

### What should I do to participate in the PhET Developer Community?

- Read our [CODE\_OF\_CONDUCT.md](https://github.com/phetsims/community/blob/master/CODE_OF_CONDUCT.md), [GitHub’s policies](https://docs.github.com/en/site-policy/github-terms/github-community-guidelines), and our [CONTRIBUTING.md](https://github.com/phetsims/community/blob/master/CONTRIBUTING.md) before creating or contributing to a discussion or to the codebase.
- When posting a question or problem, provide context. What problem are you trying to solve? What are the exact steps to recreate the problem for others to reproduce?
- Help and respond to others that post to the [Discussions forum](https://github.com/orgs/phetsims/discussions/). Have you encountered a similar problem or tried to implement a similar feature? Share your experiences!
- Share with us what you are using PhET code for! Share in the [Show and Tell category](https://github.com/orgs/phetsims/discussions/categories/show-and-tell) of the Discussion forum.
- Join our chat! We have a synchronized Slack, Discord, and Matrix channel for the community to discuss and collaborate. Choose whichever platform you prefer. 
  - [Join our Slack](PLACEHOLDER)
  - [Join our Discord](PLACEHOLDER)
  - [Join our Matrix server](PLACEHOLDER) (Element client recommended)

### I want to make an entirely new simulation using SceneryStack! What should I do?

#### If you are an individual or small group interested in or have made progress in making a new simulation

The best resources available to you can be found in the [PhET Development Overview](https://github.com/phetsims/phet-info/blob/master/doc/phet-development-overview.md) and [other documentation](https://github.com/phetsims/phet-info/tree/master/doc) found in the `phet-info` repository. We have seen small test projects, academic projects (e.g., education research for a Ph.D.), or open source curriculum projects successfully develop custom simulations, leveraging our code base (See [Examples](#examples-using-scenerystack) above). It requires expertise in design and in JavaScript/TypeScript, but it is very possible for dedicated developers and teams. If you have made significant progress and are committed to your STEM simulation, please reach out to us through the [community discussion forum](https://github.com/orgs/phetsims/discussions) to discuss any support we may be able to provide.

#### If you are a commercial organization interested in making new simulations 

See the [Source Code page of our website](https://phet.colorado.edu/en/about/source-code) for more information.

### What happens to my projects if these libraries stop being supported?

SceneryStack is the foundation of the PhET Interactive Simulations project. It is used in all of PhET's simulations and is actively maintained by the PhET team. PhET has no plans to stop supporting SceneryStack, so long as PhET Interactive Simulations continue to exist.

## Licensing

The libraries contained within the SceneryStack community are licensed through the MIT License and freely available for use by anyone, including this repository.

*PhET-created Simulations* differ in their licensing (e.g., GPLv3) depending on the details of their development cycle (e.g., funding, partnerships, and third-party libraries). See the LICENSE file in each repository for details.

PhET does not engage in licensing our *Simulation source code* to commercial entities at this time. Commercial partners interested in licensing our *Simulations* should see the PhET Interactive Simulations website for [partnership inquiries](https://phet.colorado.edu/en/partnerships).

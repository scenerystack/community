# <img src="assets/scenerystack-square.png" width="50"> Welcome to the SceneryStack Developer Community

<p>
    <a href="https://github.com/orgs/scenerystack/discussions">
        <img src="https://img.shields.io/github/discussions/scenerystack/community" alt="SceneryStack GitHub Discussions">
    </a>
    <a href="https://matrix.to/#/##scenerystack:matrix.org">
        <img src="https://img.shields.io/badge/chat-matrix-green" alt="invite link to Matrix chat">
    </a>
    <a href="https://join.slack.com/t/scenerystack/shared_invite/zt-22d2r9ruc-GnxYi37iPluFwVkt~LdzGA">
        <img src="https://img.shields.io/badge/chat-slack-purple" alt="invite link to Slack chat">
    </a>
</p>

![GitHub](https://img.shields.io/github/license/scenerystack/community)

 This repository houses discussions and resources for the developer community using the libraries within SceneryStack to create interactive simulations and other web interactives in HTML5.

## What is SceneryStack?

 SceneryStack is a collection of libraries built around a Model-View-Controller framework that can be used **together or separately** to support an interactive web project. PhET uses many or all of these libraries when creating an educational interactive simulation. Some libraries are more specific to our usage, including assets and branding, but most offer more generalizable use cases.

## Why use SceneryStack?

Wondering why SceneryStack might be your go-to choice for creating and rendering interactive content on the web? While there are numerous libraries available, SceneryStack stands out with its unique offerings. We pioneered the PhET Library to fill the gaps left by existing platforms. If you're looking for a comprehensive platform that scales, is flexible, and robust, SceneryStack is tailored for you!

#### 🌟 **Core Features**

- 🖥️ **Cross-Platform Capabilities**
- 🎨 **Pixel-Perfect Design**
- 👆 **Swipe-to-Snag Functionality**
- 🖱️ **Enhanced Touch and Mouse Areas**
- 🌍 **Ready for Internationalization** (with examples of implementation)
- 🛠️ **Rich Component Library** (with support to build your own)
- 📱 **Optimized for High Pixel Density Devices**
- 🔍 **TypeScript Integration** (ensuring type safety + autocomplete)
- 🎲 **Support for Multiple Rendering**: SVG, canvas, or WebGL
- 📐 **Innovative Layout Engine**
- 🎭 **CSS Abstraction**
- ⚡ **Real-Time Updates with Axon Property.link**
- ⬇️ **Downloadable, Fully Offline, Single-File Artifacts**

#### ♿ **Accessibility Features**

- 📖 **Parallel Document Object Model (PDOM)** ensuring screen reader accessibility
- 🗣️ **Customizable, Dynamic Spoken Content** through Web Speech ([Experience "Voicing"](https://youtu.be/mwCc_NDmqx4))
- ⌨️ **API to Determine Keyboard Traversal Order**
- 🔍 **In-App Zooming Features**: Pinch-to-zoom and panning

#### 💡 **Technical Excellence**

- 🔄 Declarative APIs for optimal performance/quality adjustments
- 🎬 Seamless functionality across SVG, Canvas, and WebGL
- ✋ An input system that upholds extended touch handling and foundational accessibility
- 📏 Advanced layouting, shape computations, and CAG for interface components
- 🗑️ A garbage collector-friendly design using pooling
- 📚 A library of UI components known for their reliability and adaptability

With SceneryStack, not only will your final product be streamlined and efficient (serving in single HTML/XHTML without any external assets), but you'll also benefit from a codebase that promotes readability and ease of maintenance.

**Choose SceneryStack** 🚀 for a blend of performance, quality, and user-centric design. Welcome to a world of seamless web interactivity! 🌐

## Common Code Libraries

See the [Stack List](./libraries/scenerystack_list.md) for all of the libraries that make up SceneryStack.

!!! note
    While the SceneryStack community is housed in the SceneryStack organization, all libraries for development using SceneryStack are in the **phetsims** GitHub organization found at <https://github.com/phetsims/>.

### phet-lib: Built version of the common code libraries 📚

 Looking for the core libraries in one build for your app? Download phet-lib from the [phet-lib repository](https://github.com/phetsims/phet-lib).

## Using SceneryStack to Make Web Interactives in HTML5

### Development Overview

For anyone interested in setting up a development environment, the [Development Overview](https://github.com/phetsims/phet-info/blob/main/doc/phet-development-overview.md) is the best place to start. It provides a comprehensive introduction to the processes, tools, and best practices for developing with the libraries contained in SceneryStack. It also serves as the best starting point for creating interactive simulations, specifically.

### Additional Resources

In the [PhET documentation directory](https://github.com/phetsims/phet-info/tree/main/doc), you'll find a range of helpful resources for different aspects of development, including:

- **Dev Exercises**: Enhance your SceneryStack development skills with these hands-on exercises. Check out the [PhET dev exercises document](https://github.com/phetsims/phet-info/blob/main/doc/phet-dev-exercises.md)
- **TypeScript Quickstart**: If you're new to TypeScript or need a refresher, you can follow our [TypeScript Quickstart guide](https://github.com/phetsims/phet-info/blob/main/doc/typescript-quick-start.md)
- **Coding Conventions**: Ensure your code is consistent and readable with our [coding conventions](https://github.com/phetsims/phet-info/blob/main/doc/coding-conventions.md)
- **Software Design Patterns**: Familiarize yourself with the [software design patterns](https://github.com/phetsims/phet-info/blob/main/doc/phet-software-design-patterns.md) used within PhET projects.
- **Accessibility Documentation**: Learn about designing accessibility features such as alternative input, screen-reader-friendly interactive description, and more through our development guidelines:
  - [Alternative Input Guide](https://github.com/phetsims/phet-info/blob/main/doc/alternative-input-quickstart-guide.md)
  - [Interactive Description Guide](https://github.com/phetsims/phet-info/blob/main/doc/interactive-description-technical-guide.md)

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
- [Instructional Interface for PhET Simulations](https://github.com/COMP-523-Team-D/PhysicsSimulation)
- For a simple demonstration using phet-lib, see [Scenery Lab Demo](https://github.com/phetsims/scenery-lab-demo)
- [Sound Waves simulation](https://github.com/phetsims/sound-waves) (created by )
- and of course, [all PhET Interactive Simulations](https://github.com/phetsims)

Creating something? Let us know, and let's get your example added here!

## Joining the Community and Contributing 🤝

 Join the SceneryStack community by participating in the [community discussion forum](https://github.com/orgs/scenerystack/discussions). Share the progress of what you're working on, your ideas, and ask questions!

Join our chat! We have synchronized Slack and Matrix channels for the community to discuss and collaborate. Choose whichever platform you prefer:

- [Join our Slack](https://join.slack.com/t/scenerystack/shared_invite/zt-22d2r9ruc-GnxYi37iPluFwVkt~LdzGA)
- [Join our Matrix server](https://matrix.to/#/#scenerystack:matrix.org) (Element client recommended)

 We welcome many kinds of contributions to SceneryStack, from common code features/bug fixes to documentation updates.

 Please see our [CONTRIBUTING.md](./CONTRIBUTING.md) found in any common code repository.

## FAQ

### What is this repository for?

  Discussions, resources, and collaboration around the use and improvement of **SceneryStack** and its [constituent libraries](https://github.com/phetsims/phet-info/blob/main/doc/phet-development-overview.md#source-code-and-dependencies), originally created and maintained by the software developers at the PhET Interactive Simulations project.

  This repository is not for discussions and help regarding PhET's educational, interactive simulations. For questions and comments regarding PhET's simulations, please keep reading or see the [PhET Interactive Simulations website](https://phet.colorado.edu/) for more information.

### What is the difference between SceneryStack and PhET Interactive Simulations?

 SceneryStack is the HTML5/JavaScript/TypeScript APIs (detailed above) that PhET Interactive Simulations are built on. The use of SceneryStack **is not limited to creating interactive science and math simulations!** It can be used to support the creation of all web interactives. SceneryStack supports rich and inclusive multimodal interaction, including the architecture to build robust alternative input and screen reader access when used in conjunction with our [Interactive Description Design Framework](https://www.coursera.org/learn/description-design-for-interactive-learning-resources).

 PhET Interactive Simulations are free educational science and math products created using SceneryStack by the designers and developers at the PhET Interactive Simulations Project. They are developed using [research-based, pedagogically-minded, and inclusive design methods](https://phet.colorado.edu/).

#### Where can I get help or provide feedback for using a PhET Interactive Simulation?

For anything involving PhET-created simulations, see the [PhET website](https://phet.colorado.edu).

- To request **new PhET Simulations or new features in PhET Simulations**, follow the links on the [Getting Started section of the Help Center](https://phet.colorado.edu/en/help-center/getting-started#:~:text=I%20have%20a%20sim%20idea.%20Where%20can%20I%20send%20it%3F).
- **For help or questions related to using PhET Simulations**, please see our [website](https://phet.colorado.edu/en/help-center/getting-started) or e-mail [phethelp@colorado.edu](mailto:phethelp@colorado.edu).
- **To report a problem for a specific PhET Simulation**. Open the PhET menu on the navigation bar of the simulation and select “Report a Problem…” to submit a bug report using the provided form.

### What should I do to participate in the PhET Developer Community?

- Read our [CODE\_OF\_CONDUCT.md](https://github.com/scenerystack/community/blob/main/CODE_OF_CONDUCT.md), [GitHub’s policies](https://docs.github.com/en/site-policy/github-terms/github-community-guidelines), and our [CONTRIBUTING.md](https://github.com/scenerystack/community/blob/main/CONTRIBUTING.md) before creating or contributing to a discussion or to the codebase.
- When posting a question or problem, provide context. What problem are you trying to solve? What are the exact steps to recreate the problem for others to reproduce?
- Help and respond to others that post to the [Discussions forum](https://github.com/orgs/scenerystack/discussions/). Have you encountered a similar problem or tried to implement a similar feature? Share your experiences!
- Share with us what you are using PhET code for! Share in the [Show and Tell category](https://github.com/orgs/scenerystack/discussions/categories/show-and-tell) of the Discussion forum.
- Join our chat! We have synchronized Slack and Matrix channels for the community to discuss and collaborate. Choose whichever platform you prefer:
  - [Join our Slack](https://join.slack.com/t/scenerystack/shared_invite/zt-22d2r9ruc-GnxYi37iPluFwVkt~LdzGA)
  - [Join our Matrix server](https://matrix.to/#/#scenerystack:matrix.org) (Element client recommended)

### I want to make an entirely new simulation using SceneryStack! What should I do?

#### If you are an individual or small group interested in or have made progress in making a new simulation

The best resources available to you can be found in the [PhET Development Overview](https://github.com/phetsims/phet-info/blob/main/doc/phet-development-overview.md) and [other documentation](https://github.com/phetsims/phet-info/tree/main/doc) found in the `phet-info` repository. We have seen small test projects, academic projects (e.g., education research for a Ph.D.), or open source curriculum projects successfully develop custom simulations, leveraging our code base (See [Examples](#examples-using-scenerystack) above). It requires expertise in design and in JavaScript/TypeScript, but it is very possible for dedicated developers and teams. If you have made significant progress and are committed to your STEM simulation, please reach out to us through the [community discussion forum](https://github.com/orgs/scenerystack/discussions) to discuss any support we may be able to provide.

#### If you are a commercial organization interested in making new simulations

See the [Source Code page of our website](https://phet.colorado.edu/en/about/source-code) for more information.

### What happens to my projects if these libraries stop being supported?

SceneryStack is the foundation of the PhET Interactive Simulations project. It is used in all of PhET's simulations and is actively maintained by the PhET team. PhET has no plans to stop supporting SceneryStack, so long as PhET Interactive Simulations continue to exist.

## Licensing

The libraries contained within the SceneryStack community are licensed through the MIT License and freely available for use by anyone, including this repository.

*PhET-created Simulations* differ in their licensing (e.g., GPLv3) depending on the details of their development cycle (e.g., funding, partnerships, and third-party libraries). See the LICENSE file in each repository for details.

PhET does not engage in licensing our *Simulation source code* to commercial entities at this time. Commercial partners interested in licensing our *Simulations* should see the PhET Interactive Simulations website for [partnership inquiries](https://phet.colorado.edu/en/partnerships).

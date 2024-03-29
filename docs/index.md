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

## What is SceneryStack?

 SceneryStack is a [collection of development libraries](./guides/scenerystack_list.md) built around a Model-View-Controller framework that can be used **together or separately** to create a multimodal and accessible, web interactive. The [PhET Project](https://phet.colorado.edu/) uses many or all of these libraries when creating an educational interactive simulation. SceneryStack offers libraries suitable for general web interactive development, as well as those specifically tailored to STEM interactive simulations and PhET Interactive Simulation development.

![Interactive in action with SceneryStack](assets/cck-bulb.gif)

## Why use SceneryStack?

Wondering why SceneryStack might be your go-to choice for creating and rendering interactive content on the web? While there are numerous libraries available, SceneryStack stands out with its unique offerings in flexibility and accessibility. If you're looking for a comprehensive, scalable, and up-to-date platform then SceneryStack is tailored for you!

=== "🌟 **Core Features**"

    - 🖥️ **Cross-Platform Capabilities**
    - 🎨 **Pixel-Perfect Design**
    - 👆 **Swipe-to-Snag Functionality**
    - 🖱️ **Enhanced Touch and Mouse Areas**
    - 🌍 **Ready for Internationalization** (with examples of implementation)
    - 🛠️ **Rich Component Library** (with support to build your own)
    - 📱 **Optimized for High Pixel Density Devices**
    - 🔍 **TypeScript Integration** (ensuring type safety + autocomplete)
    - 🎲 **Support for Multiple Rendering**: SVG, Canvas, or WebGL
    - 📐 **Innovative Layout Engine**
    - 🎭 **CSS Abstraction**
    - ⚡ **Real-Time Updates with Axon Property.link**
    - ⬇️ **Downloadable, Fully Offline, Single-File Artifacts**

=== "♿ **Accessibility Features**"

    - 📖 **Parallel Document Object Model (PDOM)** ensuring screen reader accessibility ([Experience "Interactive Description"](https://youtu.be/gj55KDRdhM8))
    - 🗣️ **Customizable, Dynamic Spoken Content** through Web Speech ([Experience "Voicing"](https://youtu.be/mwCc_NDmqx4))
    - ⌨️ **API to Determine Keyboard Traversal Order**
    - 🔍 **In-App Zooming Features**: Pinch-to-zoom and panning

=== "💡 **Technical Excellence**"

    - 🔄 Declarative APIs for optimal performance/quality adjustments
    - 🎬 Seamless functionality across SVG, Canvas, and WebGL
    - ✋ An input system that upholds extended touch handling and foundational accessibility
    - 📏 Advanced layout, shape computations, and CAG for interface components
    - 🗑️ A garbage collector-friendly design using pooling
    - 📚 A library of UI components known for their reliability and adaptability

With SceneryStack, not only will your final product be streamlined and efficient (serving in single HTML/XHTML without any external assets), but you'll also benefit from a codebase that promotes readability and ease of maintenance.

**Choose SceneryStack** 🚀 for a blend of performance, quality, and user-centric design. Welcome to a world of seamless web interactivity! 🌐

## Getting Started

Head over to [Guides](./guides/pathways.md) to choose your development path and get started.

## Joining the Community and Contributing 🤝

Looking to chat with others using SceneryStack, contribute to the community, or just need to ask some questions?

[🌍 Join the Community 🌍](community.md){ .md-button .md-button--primary }

## Frequently Asked Questions

??? info "What is this site and community for?"
    Discussions, resources, and collaboration around the use and improvement of **SceneryStack** and its [constituent libraries](./guides/scenerystack_list.md), maintained by the software developers at the PhET Interactive Simulations project.

    This repository is not for discussions and help regarding PhET's educational, interactive simulations. For questions and comments regarding PhET's simulations, please keep reading or see the [PhET Interactive Simulations website](https://phet.colorado.edu/) for more information.

??? info "What is the difference between SceneryStack and PhET Interactive Simulations?"
    SceneryStack is the HTML5/JavaScript/TypeScript APIs (detailed above) that PhET Interactive Simulations are built on. The use of SceneryStack **is not limited to creating interactive science and math simulations!** It can be used to support the creation of all web interactives. SceneryStack supports rich and inclusive multimodal interaction, including the architecture to build robust alternative input and screen reader access when used in conjunction with our [Interactive Description Design Framework](https://www.coursera.org/learn/description-design-for-interactive-learning-resources).

    PhET Interactive Simulations are free educational science and math products created using SceneryStack by the designers and developers at the PhET Interactive Simulations Project. They are developed using [research-based, pedagogically-minded, and inclusive design methods](https://phet.colorado.edu/).

??? info "Where can I get help or provide feedback for using a PhET Interactive Simulation?"
    For anything involving PhET-created simulations, see the [PhET website](https://phet.colorado.edu).

    - To request **new PhET Simulations or new features in PhET Simulations**, follow the links on the [Getting Started section of the Help Center](https://phet.colorado.edu/en/help-center/guides#:~:text=I%20have%20a%20sim%20idea.%20Where%20can%20I%20send%20it%3F).
    - **For help or questions related to using PhET Simulations**, please see our [website](https://phet.colorado.edu/en/help-center/guides) or e-mail [phethelp@colorado.edu](mailto:phethelp@colorado.edu).
    - **To report a problem for a specific PhET Simulation**. Open the PhET menu on the navigation bar of the simulation and select “Report a Problem…” to submit a bug report using the provided form.

??? info "I want to make an entirely new simulation using SceneryStack! What should I do?"
    **If you are an individual or small group interested in or have made progress in making a new simulation:**
    The best resources available to you can be found in the [Development Overview](./info-sync/simulation-development-overview.md) and other documentation found or linked to on this site. Small test projects, academic projects (e.g., education research for a Ph.D.), or open source curriculum projects have all successfully developed custom simulations, leveraging our code base (See [Simulation Examples](./guides/simulation-examples.md)). It requires expertise in design and JavaScript/TypeScript, but it is very possible for dedicated developers and teams. If you have made significant progress and are committed to your STEM simulation, please reach out to us through the [community discussion forum](https://github.com/orgs/scenerystack/discussions) to discuss any support we may be able to provide.

    **If you are a commercial organization interested in making new simulations:**
    See the [Source Code page of our website](https://phet.colorado.edu/en/about/source-code) for more information.

??? info "What happens to my projects if these libraries stop being supported?"
    SceneryStack is the foundation of the PhET Interactive Simulations project. It is used in all of PhET's simulations and is actively maintained by the PhET team. PhET has no plans to stop supporting SceneryStack, so long as PhET Interactive Simulations continue to exist.

??? info "Do I have to brand my projects with PhET?"
    No! If you are creating a simulation, you can brand it however you like, but please contact us before using any PhET branding. See [Licensing](#licensing) below for more information.

    See the [brand](https://github.com/phetsims/brand) library for help creating your brand, as well as looking at the [Development Overview](./info-sync/simulation-development-overview.md).

![Interactive Music Video made with SceneryStack](assets/cathedral.gif)

## Licensing

### SceneryStack
The libraries contained within the SceneryStack community are licensed through the MIT License and freely available for use by anyone, including the `scenerystack/community` repository.

### PhET Interactive Simulations
*PhET-created Simulations* differ in their licensing (e.g., GPLv3) depending on the details of their development cycle (e.g., funding, partnerships, and third-party libraries). See the LICENSE file in each repository for details.

PhET does not engage in licensing *Simulation source code* to commercial entities at this time. Commercial partners interested in licensing a *Simulation* should see the PhET Interactive Simulations website for [partnership inquiries](https://phet.colorado.edu/en/partnerships).
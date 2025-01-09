# Frequently Asked Questions

## Development Questions

??? question "How do I get started with SceneryStack?"
    Head over to the [Development Overview](../learn/setup.md).

??? question "How do I get started if I want to make a simulation?"
    Head over to the [Development Overview](../learn/setup.md).

    The best resources at this time can be found in the [Development Overview](../info_sync/simulation_development_overview.md) and other documentation found or linked to on this site. Small test projects, academic projects (e.g., education research for a Ph.D.), or open source curriculum projects have all successfully developed custom simulations, leveraging our code base (See [Simulation Examples](../learn/examples/simulation-showcase.md)). It requires expertise in design and JavaScript/TypeScript, but it is very possible for dedicated developers and teams. If you have made significant progress and are committed to your STEM simulation, please reach out to us through the [community discussion forum](https://github.com/orgs/scenerystack/discussions) to discuss any support we may be able to provide.

    **If you are a commercial organization interested in contracting with PhET to make simulations:**
    See the [PhET website page regarding simulation development](https://phet.colorado.edu/en/about/source-code) for more information.

??? question "How do I create my own brand for my simulation project?"
    Instructions for creating your own brand can be found in the [`brand` repository README](https://github.com/phetsims/brand?tab=readme-ov-file#readme).

    Note: The "phet" and "phet-io" brands are reserved for use by PhET Interactive Simulations only. The PhET logo is a registered trademark and is only permitted for use by the PhET team at the University of Colorado. The "adapted-from-phet" brand is encouraged for usage in simulations with minor modifications. It provides a black-and-white "Adapted from PhET" logo. This brand can also be used for new simulations based on the PhET libraries, but another option is to create your own brand, which will allow you to easily integrate your own splash screen, company logo and other features.

??? question "Do I have to brand my SceneryStack projects with PhET?"
    No! You can brand it however you like, but please contact [PhET Interactive Simulations](https://phet.colorado.edu/) before using any PhET branding.

    See the [brand](https://github.com/phetsims/brand) library for help creating your own brand.

??? question "Do I have to use TypeScript or can I use JavaScript only?"
    Using TypeScript is recommended if possible. At this time, most of SceneryStack is written in [TypeScript](https://www.freecodecamp.org/news/learn-typescript-beginners-guide/#:~:text=cheat%20sheet%20PDF-,What%20is%20TypeScript%3F,-TypeScript%20is%20a) (TS), while some are still written in JavaScript (JS), with future updates to the libraries converting JS to TS. The [simulation tooling](../info_sync/simulation_development_overview.md#building-the-simulation-with-chipper) in use by PhET to create simulations *assumes* TS integration concerning type enforcement, and you may run into difficulties using JS.

??? question "What is `tandem`?"
    Scenerystack provides a way of providing unique identifiers to different instances as they are created (i.e., a label for an instance of a class). There is a type named `Tandem.ts` that supports this in the `tandem` library: <https://github.com/phetsims/tandem/blob/main/js/Tandem.ts>

    You may see `tandem` used in other libraries in the stack.

    PhET Interactive Simulations uses `tandem` when creating the [PhET-iO feature set](https://phet-io.colorado.edu/) for clients.

## General Questions

??? question "What is this site and community for?"
    Discussions, resources, and collaboration around the use and improvement of **SceneryStack** and its [constituent libraries](../reference/scenerystack_list.md).

    This repository is not for discussions and help regarding the PhET Projects's educational, interactive simulations. For questions and comments regarding PhET Simulations, see the [PhET Interactive Simulations website](https://phet.colorado.edu/) for more information.

??? question "What is the relationship between SceneryStack and PhET Interactive Simulations?"
    SceneryStack is the web development framework that PhET Interactive Simulations are built on.

    The use of SceneryStack **is not limited to creating interactive science and math simulations!** It can be used to support the creation of all web interactives. SceneryStack supports rich and inclusive multimodal interaction, including the architecture to build robust alternative input and screen reader access when used in conjunction with an [Interactive Description Design Framework](https://www.coursera.org/learn/description-design-for-interactive-learning-resources).

    PhET Interactive Simulations are free educational science and math products created using SceneryStack by the designers and developers at the PhET Interactive Simulations Project. They are developed using [research-based, pedagogically-minded, and inclusive design methods](https://phet.colorado.edu/).

??? question "Who makes SceneryStack?"
    SceneryStack is intended to be a community driven project. SceneryStack was originally created by developers of PhET Interactive Simulations and they continue to maintain and develop it. The project is open source and contributions are encouraged.

??? question "What happens to my projects if SceneryStack stops being supported?"
    SceneryStack is the foundation of the [PhET Interactive Simulations](https://phet.colorado.edu/) project. It is used in all of PhET's simulations. Developers on the PhET team make up a core portion of the SceneryStack maintenance team. PhET has no plans to stop supporting SceneryStack, so long as PhET Interactive Simulations continue to exist.

??? question "Where can I get help or provide feedback for using a PhET Interactive Simulation?"
    For anything involving specific PhET Interactive Simulations, see the [PhET website](https://phet.colorado.edu).

    From PhET:
    - To request **new PhET Simulations or new features in PhET Simulations**, follow the links on the [Getting Started section of the Help Center](https://phet.colorado.edu/en/help-center/guides#:~:text=I%20have%20a%20sim%20idea.%20Where%20can%20I%20send%20it%3F).
    - **For help or questions related to using PhET Simulations**, please see our [website](https://phet.colorado.edu/en/help-center/guides) or e-mail [phethelp@colorado.edu](mailto:phethelp@colorado.edu).
    - **To report a problem for a specific PhET Simulation**. Open the PhET menu on the navigation bar of the simulation and select “Report a Problem…” to submit a bug report using the provided form.

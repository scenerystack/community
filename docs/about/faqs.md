# Frequently Asked Questions

## Development Questions

??? question "How do I get started with SceneryStack?"
    Head over to the [Getting Started](../learn/setup.md).

??? question "How do I get started if I want to make a simulation?"
    Head over to the [Getting Started](../learn/setup.md).

    The best resources at this time can be found in the [Development Overview](../learn/simulation.md) and other documentation found or linked to on this site. See [Setting Expectations](../learn/simulation.md#setting-expectations) for more information on the scope of creating a simulation.
    
    If you have made significant progress and are committed to your STEM simulation, please reach out to us through the [community discussion forum](https://github.com/orgs/scenerystack/discussions) to discuss any support we may be able to provide.

    **If you are a commercial organization interested in contracting with PhET to make simulations:**
    See the [PhET website page regarding simulation development](https://phet.colorado.edu/en/about/source-code) for more information.

??? question "How do I create my own brand for my simulation project?"
    Instructions for creating your own brand can be found in the [`brand` repository README](https://github.com/phetsims/brand?tab=readme-ov-file#readme).

    Note: The "phet" and "phet-io" brands are reserved for use by PhET Interactive Simulations only. The PhET logo is a registered trademark and is only permitted for use by the PhET team at the University of Colorado. The "adapted-from-phet" brand is encouraged for usage in simulations with minor modifications. It provides a black-and-white "Adapted from PhET" logo. This brand can also be used for new simulations based on the PhET libraries, but another option is to create your own brand, which will allow you to easily integrate your own splash screen, company logo and other features.

??? question "Do I have to brand my SceneryStack projects with PhET?"
    No! You can brand it however you like, but please contact [PhET Interactive Simulations](https://phet.colorado.edu/) before using any PhET branding.

    See the [brand](https://github.com/phetsims/brand) library for help creating your own brand.

??? question "Do I have to use TypeScript or can I use JavaScript only?"
    Using TypeScript is recommended if possible. At this time, most of SceneryStack is written in [TypeScript](https://www.freecodecamp.org/news/learn-typescript-beginners-guide/#:~:text=cheat%20sheet%20PDF-,What%20is%20TypeScript%3F,-TypeScript%20is%20a) (TS), while some are still written in JavaScript (JS), with future updates to the libraries converting JS to TS. The API doesn’t enforce runtime type checks, making JavaScript usage more challenging.

??? question "What is `tandem`?"
    Scenerystack provides a way of providing unique identifiers to different instances as they are created (i.e., a label for an instance of a class). There is a type named `Tandem.ts` that supports this in the `tandem` library: <https://github.com/phetsims/tandem/blob/main/js/Tandem.ts>

    You may see `tandem` used in other libraries in the stack.

    PhET Interactive Simulations uses `tandem` when creating the [PhET-iO feature set](https://phet-io.colorado.edu/) for clients.

??? question "I don't know JavaScript/TypeScript development, how can I get started?"

    Welcome to the wonderful world of interactive web development! There are many ways to get started and many resources on the internet to support you.

    You will want to pick up a basic understanding of HTML web development and a good understanding of JavaScript before getting started with SceneryStack.

    The internet is full of resources to help you on your journey and a quick search will turn up many. Consider resources like [freecodecamp.com](https://www.freecodecamp.org/), which has also begun providing [courses in Spanish](https://www.freecodecamp.org/news/javascript-course-in-spanish/). Take a look at the bottom of the page for other tips and resources!

    As soon as you can, start tinkering with SceneryStack and building projects to become familiar with the framework and begin your goal project!

    !!! warning
        Using TypeScript is recommended if possible. At this time, most of SceneryStack is written in [TypeScript](https://www.freecodecamp.org/news/learn-typescript-beginners-guide/#:~:text=cheat%20sheet%20PDF-,What%20is%20TypeScript%3F,-TypeScript%20is%20a) (TS), while some are still written in JavaScript (JS), with future updates to the libraries converting JS to TS. The [simulation tooling](../info_sync/simulation_development_overview.md#building-the-simulation-with-chipper) in build projects assumes TS integration concerning type enforcement, and you may run into difficulties using JS. Please keep this in mind during your learning journey and do not be afraid to ask for help!

    !!! tip "A few extra tips to get started"

        1. A good place to start with JavaScript is [*Eloquent JavaScript*](https://eloquentjavascript.net/) -- if you are not familiar with the language it has many quirks. It would be worth your time to go through as much of this resource as possible, but certainly the first 11 chapters or so.
        1. Other helpful resources are: [*Effective JavaScript* by Dave Herman](http://effectivejs.com/) (Chapters 1-3) and [Idiomatic JavaScript](https://github.com/rwaldron/idiomatic.js/).
        2. SceneryStack libraries are heavily based on MVC (model view controller) patterns, so probably a good idea to familiarize yourself with this general idea. See [Software Design Patterns](../info_sync/software_design_patterns.md#model-view-controller-mvc) for more.
        3. Familiarize yourself with version control, specifically [Git](https://www.freecodecamp.org/news/gitting-things-done-book/).
        4. As mentioned above, we have also switched to using TypeScript (with over 70% of SceneryStack code now converted) - so you might want to look at the power of that language, which works with JavaScript but has a lot of advantages. Some developers ordered and read this book *Effective TypeScript* ([amazon link](https://www.amazon.com/Effective-TypeScript-Specific-Ways-Improve-dp-1492053740/dp/1492053740/)).

## Community Questions

??? question "What is this site and community for?"
    Discussions, resources, and collaboration around the use and improvement of **SceneryStack** and its [constituent libraries](../reference/scenerystack_list.md).

    This repository is not for discussions and help regarding the PhET Projects's educational, interactive simulations. For questions and comments regarding PhET Simulations, see the [PhET Interactive Simulations website](https://phet.colorado.edu/) for more information.

??? question "Who makes SceneryStack?"
    SceneryStack is intended to be a community driven project. SceneryStack was originally created by developers of PhET Interactive Simulations and they continue to maintain and develop it. The project is open source and contributions are encouraged. See the [Contributing Guide](../contributing.md) for more information.

??? question "What is the relationship between SceneryStack and PhET Interactive Simulations?"
    SceneryStack is the web development framework that PhET Interactive Simulations are built on.

    The use of SceneryStack **is not limited to creating interactive science and math simulations!** It can be used to support the creation of all web interactives. SceneryStack supports rich and inclusive multimodal interaction, including the architecture to build robust alternative input and screen reader access when used in conjunction with an [Interactive Description Design Framework](https://www.coursera.org/learn/description-design-for-interactive-learning-resources).

    PhET Interactive Simulations are free educational science and math products created using SceneryStack by the designers and developers at the PhET Interactive Simulations Project. They are developed using [research-based, pedagogically-minded, and inclusive design methods](https://phet.colorado.edu/).

??? question "What happens to my projects if SceneryStack stops being supported?"
    SceneryStack is the foundation of the [PhET Interactive Simulations](https://phet.colorado.edu/) project. It is used in all of PhET's simulations. Developers on the PhET team make up a core portion of the SceneryStack maintenance team. PhET has no plans to stop supporting SceneryStack, so long as PhET Interactive Simulations continue to exist.

??? question "Where can I get help or provide feedback for using a PhET Interactive Simulation?"
    For anything involving PhET Interactive Simulations, see the [PhET website](https://phet.colorado.edu).

    From PhET:
    - To request **new PhET Simulations or new features in PhET Simulations**, follow the links on the [Getting Started section of the Help Center](https://phet.colorado.edu/en/help-center/guides#:~:text=I%20have%20a%20sim%20idea.%20Where%20can%20I%20send%20it%3F).
    - **For help or questions related to using PhET Simulations**, please see our [website](https://phet.colorado.edu/en/help-center/guides) or e-mail [phethelp@colorado.edu](mailto:phethelp@colorado.edu).
    - **To report a problem for a specific PhET Simulation**. Open the PhET menu on the navigation bar of the simulation and select “Report a Problem…” to submit a bug report using the provided form.

??? question "Can I put my simulation on the PhET Interactive Simulations website?"
    Dreaming to one day have your simulation hosted on the PhET website? If you have made significant progress and you are committed to your STEM simulation, reach out to PhET at [phethelp@colorado.edu](mailto:phethelp@colorado.edu) to discuss opportunities.

    If you are a commercial organization interested in making new simulations, see the [Source Code page of our website](https://phet.colorado.edu/en/about/source-code) for more information.

??? question "I want to modify an existing PhET Simulation. How do I do that?"
    All PhET simulations are open-source and licensed as GPLv3 (or similar copyleft). You are welcome to make modifications using the source code, but any resulting product must remain free and open with the same license. Additionally, please keep in mind that modifications typically require you to make a branch from the live simulations. Therefore, your new modified simulation will not receive future updates when we update the live PhET simulation. You will need to maintain your branched version independently. Modifying simulation source code is best suited for short-term variant of a simulation to use in a lesson or for practice for learning to code simulations.

    If this is still something you wish to pursue, you can find the source code for all of the simulations in the phetsims GitHub organization.
    PhET Simulations are built upon SceneryStack. SceneryStack provides the most comprehensive resources for working with the codebase, as well as resources for creating new simulations. All SceneryStack libraries are MIT licensed. If you are making any modifications to reusable components in your simulation, consider contributing back to the libraries. Learn more at scenerystack.org.

    Note: As of January 2025, PhET Interactive Simulations do not use the NPM package to create and build simulations. All SceneryStack repositories are checked out and build tools within the `perennial` and `chipper` repositories are used to build simulations. The best information available for this process is found at the [PhET Development Overview Guide](https://github.com/phetsims/phet-info/blob/main/doc/phet-development-overview.md).

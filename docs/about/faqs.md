# Frequently Asked Questions

- [Frequently Asked Questions](#frequently-asked-questions)
  - [Development Questions](#development-questions)
    - ["How do I get started with SceneryStack?"](#how-do-i-get-started-with-scenerystack)
    - ["How do I get started if I want to make a simulation?"](#how-do-i-get-started-if-i-want-to-make-a-simulation)
    - ["How do I create my own brand for my simulation project?"](#how-do-i-create-my-own-brand-for-my-simulation-project)
    - ["Do I have to brand my SceneryStack projects with PhET?"](#do-i-have-to-brand-my-scenerystack-projects-with-phet)
    - ["Do I have to use TypeScript or can I use JavaScript only?"](#do-i-have-to-use-typescript-or-can-i-use-javascript-only)
    - ["What is `tandem`?"](#what-is-tandem)
    - ["I don't know JavaScript/TypeScript development, how can I get started?"](#i-dont-know-javascripttypescript-development-how-can-i-get-started)
  - [Community Questions](#community-questions)
    - ["What is this site and community for?"](#what-is-this-site-and-community-for)
    - ["Who makes SceneryStack?"](#who-makes-scenerystack)
    - ["What is the relationship between SceneryStack and PhET Interactive Simulations?"](#what-is-the-relationship-between-scenerystack-and-phet-interactive-simulations)
    - ["What happens to my projects if SceneryStack stops being supported?"](#what-happens-to-my-projects-if-scenerystack-stops-being-supported)
    - ["Where can I get help or provide feedback for using a PhET Interactive Simulation?"](#where-can-i-get-help-or-provide-feedback-for-using-a-phet-interactive-simulation)
    - ["Can I put my simulation on the PhET Interactive Simulations website?"](#can-i-put-my-simulation-on-the-phet-interactive-simulations-website)
    - ["I want to modify an existing PhET Simulation. How do I do that?"](#i-want-to-modify-an-existing-phet-simulation-how-do-i-do-that)

## Development Questions

### "How do I get started with SceneryStack?"

Head over to the [Getting Started](../learn/setup.md).

### "How do I get started if I want to make a simulation?"

Head over to the [Getting Started](../learn/setup.md).

The best resources at this time can be found in the [Development Overview](../learn/simulation.md) and other documentation found or linked to on this site. See [Setting Expectations](../learn/simulation.md#setting-expectations) for more information on the scope of creating a simulation.

If you have made significant progress and are committed to your STEM simulation, please reach out to us through the [community discussion forum](https://github.com/orgs/scenerystack/discussions) to discuss any support we may be able to provide.

**If you are a commercial organization interested in contracting with PhET to make simulations:**
See the [PhET website page regarding simulation development](https://phet.colorado.edu/en/about/source-code) for more information.

### "How do I create my own brand for my simulation project?"

Instructions for creating your own brand can be found in the [`brand` repository README](https://github.com/phetsims/brand?tab=readme-ov-file#readme).

Note: The "phet" and "phet-io" brands are reserved for use by PhET Interactive Simulations only. The PhET logo is a registered trademark and is only permitted for use by the PhET team at the University of Colorado. The "adapted-from-phet" brand is encouraged for usage in simulations with minor modifications. It provides a black-and-white "Adapted from PhET" logo. This brand can also be used for new simulations based on the PhET libraries, but another option is to create your own brand, which will allow you to easily integrate your own splash screen, company logo and other features.

### "Do I have to brand my SceneryStack projects with PhET?"

No! You can brand it however you like, but please contact [PhET Interactive Simulations](https://phet.colorado.edu/) before using any PhET branding.

See the [brand](https://github.com/phetsims/brand) library for help creating your own brand.

### "Do I have to use TypeScript or can I use JavaScript only?"

Using TypeScript is recommended if possible. At this time, most of SceneryStack is written in [TypeScript](https://www.freecodecamp.org/news/learn-typescript-beginners-guide/#:~:text=cheat%20sheet%20PDF-,What%20is%20TypeScript%3F,-TypeScript%20is%20a) (TS), while some are still written in JavaScript (JS), with future updates to the libraries converting JS to TS. The API doesn’t enforce runtime type checks, making JavaScript usage more challenging.

### "What is `tandem`?"

Scenerystack provides a way of providing unique identifiers to different instances as they are created (i.e., a label for an instance of a class). There is a type named `Tandem.ts` that supports this in the `tandem` library: <https://github.com/phetsims/tandem/blob/main/js/Tandem.ts>

You may see `tandem` used in other libraries in the stack.

PhET Interactive Simulations uses `tandem` when creating the [PhET-iO feature set](https://phet-io.colorado.edu/) for clients.

### "I don't know JavaScript/TypeScript development, how can I get started?"

Welcome to the wonderful world of interactive web development! There are many ways to get started and many resources on the internet to support you.

You will want to pick up a basic understanding of HTML web development and a good understanding of JavaScript before getting started with SceneryStack.

The internet is full of resources to help you on your journey and a quick search will turn up many. Consider resources like [freecodecamp.com](https://www.freecodecamp.org/), which has also begun providing [courses in Spanish](https://www.freecodecamp.org/news/javascript-course-in-spanish/). Take a look at the bottom of the page for other tips and resources!

As soon as you can, start tinkering with SceneryStack and building projects to become familiar with the framework and begin your goal project!

!!! question "Do I have to use TypeScript or can I use JavaScript only?"
    Using TypeScript is recommended if possible. At this time, most of SceneryStack is written in [TypeScript](https://www.freecodecamp.org/news/learn-typescript-beginners-guide/#:~:text=cheat%20sheet%20PDF-,What%20is%20TypeScript%3F,-TypeScript%20is%20a) (TS), while some are still written in JavaScript (JS), with future updates to the libraries converting JS to TS. The API doesn’t enforce runtime type checks, making JavaScript usage more challenging.

!!! tip "A few extra tips to get started"

    1. A good place to start with JavaScript is [*Eloquent JavaScript*](https://eloquentjavascript.net/) -- if you are not familiar with the language it has many quirks. It would be worth your time to go through as much of this resource as possible, but certainly the first 11 chapters or so.
       1. Other helpful resources are: [*Effective JavaScript* by Dave Herman](http://effectivejs.com/) (Chapters 1-3) and [Idiomatic JavaScript](https://github.com/rwaldron/idiomatic.js/).
    2. SceneryStack libraries are heavily based on MVC (model view controller) patterns, so probably a good idea to familiarize yourself with this general idea. See [Software Design Patterns](../info-sync/software_design_patterns.md#model-view-controller-mvc) for more.
    3. Familiarize yourself with version control, specifically [Git](https://www.freecodecamp.org/news/gitting-things-done-book/).
    4. As mentioned above, we have also switched to using TypeScript (with over 70% of SceneryStack code now converted) - so you might want to look at the power of that language, which works with JavaScript but has a lot of advantages. Some developers ordered and read this book *Effective TypeScript* ([amazon link](https://www.amazon.com/Effective-TypeScript-Specific-Ways-Improve-dp-1492053740/dp/1492053740/)).

## Community Questions

### "What is this site and community for?"

Discussions, resources, and collaboration around the use and improvement of **SceneryStack** and its [constituent libraries](../reference/scenerystack_list.md).

This repository is not for discussions and help regarding the PhET Projects's educational, interactive simulations. For questions and comments regarding PhET Simulations, see the [PhET Interactive Simulations website](https://phet.colorado.edu/) for more information.

### "Who makes SceneryStack?"

SceneryStack is intended to be a community driven project. SceneryStack was originally created by developers of PhET Interactive Simulations at University of Colorado Boulder and they continue to maintain and develop it. The project is open source and contributions are encouraged. See the [Contributing Guide](../CONTRIBUTING.md) for more information.

### "What is the relationship between SceneryStack and PhET Interactive Simulations?"

SceneryStack is the web development framework that PhET Interactive Simulations are built on.

The use of SceneryStack **is not limited to creating interactive science and math simulations!** It can be used to support the creation of all web interactives. SceneryStack supports rich and inclusive multimodal interaction, including the architecture to build robust alternative input and screen reader access when used in conjunction with an [Interactive Description Design Framework](https://www.coursera.org/learn/description-design-for-interactive-learning-resources).

PhET Interactive Simulations are free educational science and math products created using SceneryStack by the designers and developers from PhET Interactive Simulations Project at University of Colorado Boulder. They are developed using [research-based, pedagogically-minded, and inclusive design methods](https://phet.colorado.edu/).

### "What happens to my projects if SceneryStack stops being supported?"

SceneryStack is the foundation of the [PhET Interactive Simulations](https://phet.colorado.edu/) project. It is used in all of PhET's simulations. Developers on the PhET team make up a core portion of the SceneryStack maintenance team. PhET has no plans to stop supporting SceneryStack, so long as PhET Interactive Simulations continue to exist.

### "Where can I get help or provide feedback for using a PhET Interactive Simulation?"

For anything involving PhET Interactive Simulations, see the [PhET website](https://phet.colorado.edu).

### "Can I put my simulation on the PhET Interactive Simulations website?"

Dreaming to one day have your simulation hosted on the PhET website? If you have made significant progress and you are committed to your STEM simulation, reach out to PhET at [phethelp@colorado.edu](mailto:phethelp@colorado.edu) to discuss opportunities.

Please note that PhET Interactive Simulations are developed using research-based, pedagogically-minded, and inclusive design methods. The PhET team will review your simulation to ensure that it meets the design standards of PhET. This includes ensuring that the simulation has a user-tested design, is pedagogically sound, and meets the accessibility standards of PhET with all current features.

If you are a commercial organization interested in making new simulations, see the [Source Code page of our website](https://phet.colorado.edu/en/about/source-code) for more information.

### "I want to modify an existing PhET Simulation. How do I do that?"

Are you planning on using the modified simulation or requesting modifications to be made to the live simulation?

If you are planning to use the modified simulation and host it yourself, you may do so with the consideration that all PhET simulations are open-source and licensed as GPLv3 (or similar copyleft). You are welcome to make modifications using the source code, but any resulting product must remain free and open with the same license. Please keep in mind that modifications typically require you to make a branch from the live simulations. Therefore, your new modified simulation will not receive future updates when we update the live PhET simulation. You will need to maintain your branched version independently. Modifying simulation source code is best suited for short-term variant of a simulation to use in a lesson or for practice for learning to code simulations.

If you would like to request your changes be made to the live simulation, please make an issue in the specific PhET sim's GitHub repository and the PhET team will review the request. Do not submit modifications until you have received feedback. Modifications to simulations require review and prioritization by a designer and developer to ensure that the simulation is still pedagogically sound and meets the design standards of PhET. If you are interested in making a significant contribution to a simulation, please reach out to PhET at [phethelp@colorado.edu](mailto:phethelp@colorado.edu).

You can find the source code for all of the simulations in the phetsims GitHub organization. PhET Simulations are built upon SceneryStack. SceneryStack provides the most comprehensive resources for working with the codebase, as well as resources for creating new simulations. All SceneryStack libraries are MIT licensed. If you are making any modifications to reusable components in your simulation, consider [contributing](../CONTRIBUTING.md) back to the libraries.

!!! note
    As of February 2025, PhET Interactive Simulations do not use the NPM package to create and build simulations. All SceneryStack repositories are checked out and build tools within the `perennial` and `chipper` repositories are used to build simulations.

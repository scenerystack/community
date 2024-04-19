# Frequently Asked Questions

??? question "How do I get started with SceneryStack?"
    Head over to the [Development Pathways Guide](pathways.md).

??? question "How do I get started making a simulation?"
    Head over to the [Development Pathways Guide for Path 2](pathways.md#path-2-using-scenerystack-to-make-interactive-stem-simulations).

??? question "What is `tandem`?"
    Scenerystack provides a way of providing unique identifiers to different instances as they are created (i.e., a label for an instance of a class). There is a type named `Tandem.ts` that supports this in the `tandem` library: https://github.com/phetsims/tandem/blob/main/js/Tandem.ts

    You may see `tandem` used in other libraries in the stack.

    PhET Interactive Simulations uses `tandem` when creating the [PhET-iO feature set](https://phet-io.colorado.edu/) for clients.

    Generally, it is advised that you avoid, ignore, or remove the use of `tandem` in your SceneryStack code, unless you are working with PhET to create a simulation.

??? question "How do I create my own brand for my simulation project?"
    Instructions for creating your own brand can be found in the [`brand` repository README](https://github.com/phetsims/brand?tab=readme-ov-file#readme).

    Note: The "phet" and "phet-io" brands are reserved for use by PhET Interactive Simulations only. The PhET logo is a registered trademark and is only permitted for use by the PhET team at the University of Colorado. The "adapted-from-phet" brand is encouraged for usage in simulations with minor modifications. It provides a black-and-white "Adapted from PhET" logo. This brand can also be used for new simulations based on the PhET libraries, but another option is to create your own brand, which will allow you to easily integrate your own splash screen, company logo and other features.

??? question "Do I have to use TypeScript or can I use JavaScript only?"
    Using TypeScript is recommended if possible. At this time, most of SceneryStack is written in [TypeScript](https://www.freecodecamp.org/news/learn-typescript-beginners-guide/#:~:text=cheat%20sheet%20PDF-,What%20is%20TypeScript%3F,-TypeScript%20is%20a) (TS), while some are still written in JavaScript (JS), with future updates to the libraries converting JS to TS. The [simulation tooling](../info-sync/simulation-development-overview.md#building-the-simulation-with-chipper) in use by PhET to create simulations *assumes* TS integration concerning type enforcement, and you may run into difficulties using JS.

...

More to come!

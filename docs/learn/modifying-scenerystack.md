--8<-- "api-reference-snippets.md"

<link rel="stylesheet" href="/css/examples.css">

# Modifying SceneryStack

This page outlines the process for checking out, modifying, and building SceneryStack, as well as how to use your
customized version effectively.

## Getting the Latest Code

To grab the latest code (from the `main` branches) for all SceneryStack source repositories, run the following in an
empty directory:

```sh
npx scenerystack checkout
```

This will clone all of the needed SceneryStack source repositories into the current directory, and will install NPM
packages. If run multiple times, it will update the checkout with newer sources.

## Getting a Specific Version

If you want to make modifications to a specific version of the SceneryStack package, can specify the version to check out:

```sh
npx scenerystack checkout 0.0.14
```

## Modifying the Code

Source files will exist under `$REPO/js/` for each repository. You can make modifications to any of these
files, and they will be picked up when you build SceneryStack.

The corresponding GitHub repositories for each module can be found under the `phetsims` organization, e.g.
[Scenery](https://github.com/phetsims/scenery).

## Building SceneryStack

To build SceneryStack, run:

```sh
npx scenerystack build
```

This will copy/patch source files into `scenerystack/src/`, and will build into `scenerystack/dist/`. The `scenerystack`
directory will function as a standalone NPM package, and `scenerystack/dist` will also have the bundled versions of the
build.

## Using Your Customized Version

You can refer to your built copy in your package.json's dependencies with:

```json
"scenerystack": "file:../scenerystack"
```

Use this instead of a version number to refer to your local copy of SceneryStack. After making this change, it is usually
best to run `npm install` to ensure that the dependencies are correctly linked.

## Contributing Changes

If you have made changes that you think would be beneficial to the community, consider contributing them back to the
SceneryStack project. See the [Contributing Guide](../CONTRIBUTING.md) for more information.
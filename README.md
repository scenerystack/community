# <img src="/docs/assets/scenerystack-square.png" width="50"> SceneryStack Community Website Repository

[![Website](https://img.shields.io/badge/scenerystack-website-blue)](http://scenerystack.org)
[![Discussions](https://img.shields.io/github/discussions/scenerystack/community)](https://github.com/orgs/scenerystack/discussions)
[![Slack chat](https://img.shields.io/badge/chat-slack-purple)](https://join.slack.com/t/scenerystack/shared_invite/zt-22d2r9ruc-GnxYi37iPluFwVkt~LdzGA)
[![Matrix chat](https://img.shields.io/badge/chat-matrix-green)](https://matrix.to/#/##scenerystack:matrix.org)
![GitHub](https://img.shields.io/github/license/scenerystack/community)

## Website for the SceneryStack developer community

This repository houses the documentation and files necessary to build the [SceneryStack](http://scenerystack.org/) website.

SceneryStack is an HTML5 development framework for creating multimodal, accessible web interactives. The [PhET Project](https://phet.colorado.edu/) uses many or all of these libraries when creating an educational interactive simulation. SceneryStack offers libraries suitable for general web interactive development, as well as those specifically tailored to STEM interactive simulations.

See below for instructions on editing or contributing to the SceneryStack documentation:

## MkDocs

The documentation uses Mkdocs and is statically deployed with a pre-configured plugin (mkdocs-gh-deploy) for Mkdocs to GitHub Pages.

The built website is created on the `gh-pages` branch.

`mkdocs.yml` is a required file and sets up the navigation tree, plugins, and theme for the website.

## MkDocs Theme

This build makes heavy use of the MkDocs theme, [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/setup/). Use the "Setup" and "Reference" pages to add customized content. Many thanks to squidfunk for creating and offering up so much of the theme for all to use!

## How to Make Changes

**Commiting to the docs branch will kick off GitHub Pages to run a deploy Action, automatically build, and push to the gh-pages branch. (see [workflow](./.github/workflows/page-deploy.yml))**

### GitHub Website

Make changes directly through GitHub with direct edits (maintainers) or fork the repo, make changes and submit a pull request (new contributors).

(See [Contributing Guidelines](./docs/CONTRIBUTING.md))

### General Mkdocs Setup and Workflow

Here are some steps for using Mkdocs in your local dev environment. NOTE: if you are not a maintainer, you will need to make a [pull request](./docs/CONTRIBUTING.md) and wait for review before it can be deployed.

To edit (and optionally deploy) to the documentation website from a local machine (same steps GitHub Actions does):

- Install Python (3.13 last supported at deploy)
  - (install `pip` and `venv` if not already installed)
- Create a new virtual environment
  - e.g., `python -m venv ss_env`
- From the `../community`, install module requirements using `pip install -r requirements.txt`.
- run `mkdocs serve` to locally host the directory and preview changes in real-time in your browser (command will provide a local server link to open). `mkdocs serve --dirtyreload` will run much faster, but will only update changed pages (which can break some plugins).
- Commit and push changes to `docs` branch
  - `git add .`
  - `git commit -m "your commit message"`
  - `git push origin docs`
- If deploying from your local machine: run `mkdocs gh-deploy` and it will automatically build and push to the `gh-pages` branch and kick off a workflow for GitHub Pages to run a deploy Action.

## License

The libraries contained within [SceneryStack](http://scenerystack.org/) are licensed through the MIT License and freely available for use/reuse by anyone, including the `scenerystack/community` repository.

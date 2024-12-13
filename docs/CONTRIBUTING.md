# Contribution Guide

We're excited to have you here! Your interest in contributing to SceneryStack is very welcome and quite appreciated. Please read the following carefully, according to how you'd like to contribute to the community. Make sure your participation aligns with the [Code of Conduct](CODE_OF_CONDUCT.md).

## How Can I Contribute?

### 0. Contributing to Open-Source Projects

Never participated in an open-source project? Just ask in any of [our community platforms](community/join.md)!

You'll find some good general advice in resources such as this [article from FreeCodeCamp](https://www.freecodecamp.org/news/how-to-contribute-to-open-source/).

### 1. Features and Bug Fixes

!!! warning
    Please note that while the documentation and npm package can be found at `scenerystack/community` and `scenerystack/scenerystack`, respectively, the latest library repositories currently exist in the `phetsims` organization (e.g., `phetsims/scenery` or `phetsims/kite`).

    Keep this in mind when submitting contributions and remember to check your current SceneryStack version against the latest on the `main` branches.

Our ecosystem comprises various common code libraries, each housed in their respective repositories under [phetsims](https://github.com/orgs/phetsims/repositories?q=topic%3Ascenerystack+sort%3Aname-asc). Some libraries depend on others; for instance, `Sun` is built upon `Scenery` to design UI components.

👉 If you're considering making an addition or a fix that isn't already documented,

1. initiate by opening an issue.
2. Once that's set, you can then submit a pull request with your changes.

### 2. Documentation Enhancements

We cherish improvements to our documentation, especially in the [community](https://github.com/scenerystack/community) repository. This includes:

- Adding new tutorial documentation, API documentation for any library, library READMEs, and more
- Refine or correct existing documentation
- Providing translations to existing documentation

### 3. Other Forms of Contribution

Got a unique idea or suggestion? We're all ears! Whether it's reaching out with your innovative ideas or making a [financial contribution](https://donatenow.networkforgood.org/scenerystack), every bit helps.

## Steps for Code Contribution

Contributing is streamlined with the following steps:

1. Start by raising an issue using the provided [BUG_REPORT_TEMPLATE](BUG_REPORT_TEMPLATE.md) or [FEATURE_REQUEST_TEMPLATE](FEATURE_REQUEST_TEMPLATE.md) in the appropriate repository. Unsure about the right repository? Ask on the [Discussion forum](https://github.com/orgs/scenerystack/discussions).
2. Familiarize yourself with our [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md).
3. Don't forget to sign the [Contributor License Agreement](./community/CLA.md) before diving in.
4. Fork the necessary repositories.
5. Maintain the integrity of the `dist/` in applicable common code — refrain from changing or committing to it.
6. Configure npm to prevent `package-log.json` commits - `npm config set save false`.
7. Run tests to ensure your contributions are regression-free.
8. Ready? Submit your pull request using the provided [PULL_REQUEST_TEMPLATE](pull_request_template.md).

!!! warning "Multiple-repository spanning contributions"
    For contributions that span multiple repositories (e.g., `Scenery` and `Sun`), please [reach out to the maintainers](community/join.md) to verify compatibility and avoid any problems you might encounter in the process.

### Review Process

After your PR submission, a maintainer will conduct a review:

- They might suggest tweaks for better alignment with the SceneryStack codebase.
- Due to the evolving nature of SceneryStack APIs, double check that your PR changes are in sync with the latest changes.

## Questions? Get in Touch

Your feedback, questions, and suggestions are invaluable. Connect with our community on the [Discussions forum](https://github.com/orgs/scenerystack/discussions) or through [Slack/Matrix](community/join.md).

??? note "How do I contribute to PhET Interactive Simulations?"

    PhET has its own community and ecosystem of simulations, teacher activities, translators and more. See the [PhET website](https://phet.colorado.edu/) for more information.

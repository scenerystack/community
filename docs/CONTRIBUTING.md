# Contribution Guide

We're genuinely excited to have you here. Your interest in contributing to SceneryStack is appreciated, and this guide is here to assist you every step of the way. If you're curious about the differences between SceneryStack and PhET Interactive Simulations, we've covered that too!

## How Can I Contribute?

### 0. Contributing to Open Source

Never participated in an open source project? Just ask in any of [our community platforms](community.md)!

You'll find some good general advice in resources such as this [article from FreeCodeCamp](https://www.freecodecamp.org/news/how-to-contribute-to-open-source/).

### 1. Features and Bug Fixes

!!! info
    Please note that while documentation exists inside `scenerystack/community`, all library repositories currently exist in the `phetsims` organization (e.g., `phetsims/scenery` or `phetsims/kite`). Keep this in mind when submitting contributions.

Our ecosystem comprises various common code libraries, each housed in their respective repositories under [phetsims](https://github.com/phetsims/). Some libraries depend on others; for instance, `sun` is built upon `scenery` to design UI components.

👉 If you're considering making an addition or a fix that isn't already documented, initiate by opening an issue. Once that's set, you can then submit a pull request with your changes.

### 2. Documentation Enhancements

We cherish improvements to our documentation, especially in the [community](https://github.com/scenerystack/community) repository. This includes:

- Adding new tutorial documentation, API documentation for any library, library READMEs, and more
- Refine or correct existing documentation
- Providing translations to existing documentation

### 3. Other Forms of Contribution

Got a unique idea or suggestion? We're all ears! Whether it's reaching out with your innovative ideas or making a [financial contribution](https://donatenow.networkforgood.org/1437859), every bit helps.

## Steps for Code Contribution

Contributing is streamlined with the following steps:

1. Start by raising an issue using the provided [BUG_REPORT_TEMPLATE](BUG_REPORT_TEMPLATE.md) or [FEATURE_REQUEST_TEMPLATE](FEATURE_REQUEST_TEMPLATE.md) in the appropriate repository. Unsure about the right repository? Share your thoughts on the [Discussion forum](https://github.com/orgs/scenerystack/discussions).
2. Familiarize yourself with our [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md).
3. Don't forget to sign the [Contributor License Agreement](CLA.md) before diving in.
4. Fork the necessary repositories.
5. Maintain the integrity of the `dist/` in applicable common code — refrain from changing or committing to it.
6. Configure npm to prevent `package-log.json` commits: `npm config set save false`.
7. Run tests to ensure your contributions are regression-free.
8. Ready? Submit your pull request with the [PULL_REQUEST_TEMPLATE](pull_request_template.md).

### Review Process

After your PR submission, our dedicated maintainers will conduct a review:

- They might suggest tweaks for better alignment with our codebase.
- Due to the evolving nature of SceneryStack APIs, ensure your PR is always in sync with the latest changes.

## Questions? Get in Touch

Your feedback, queries, and suggestions are invaluable. Connect with our community on the [central Discussions forum](https://github.com/orgs/scenerystack/discussions).

## Understanding SceneryStack vs. PhET Interactive Simulations

SceneryStack provides the robust HTML5/JavaScript/TypeScript foundation upon which PhET Interactive Simulations are constructed. Not just limited to science and math simulations, SceneryStack can power all web interactives, boasting a rich interaction experience. Dive into our [Interactive Description Design Framework](https://www.coursera.org/learn/description-design-for-interactive-learning-resources) to understand better.

Licensing? SceneryStack is under the MIT License. However, the licensing for *Simulations* varies. For specifics, check the LICENSE file in the respective repositories. For commercial entities, while we don't license our Simulation source code, they can explore partnership opportunities on the PhET Interactive Simulations [website](https://phet.colorado.edu/en/partnerships).

### Enhancements to Existing Simulations

**Bug Fixes**: For bug fixes in existing simulations, employ the same process as for common code contributions within the [specific simulation repository](https://github.com/orgs/phetsims/repositories).

**Significant New Features**: We currently prioritize our resources. Although we might not immediately review large new features, please submit your suggestions and code changes. They could be instrumental in future reviews.

### Crafting a New Simulation?

**Individuals & Small Groups**: Our [PhET Development Overview](https://github.com/phetsims/phet-info/blob/main/doc/phet-development-overview.md) and additional [documentation](https://github.com/phetsims/phet-info/tree/main/doc) are invaluable resources. For committed and progressing projects, reach out to us at <phethelp@colorado.edu> or via the [community discussion forum](https://github.com/orgs/scenerystack/discussions).

**Commercial Organizations**: For detailed information, check the [Source Code page](https://phet.colorado.edu/en/about/source-code) on our website.

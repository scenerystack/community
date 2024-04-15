# Contribution Guide

We're genuinely excited to have you here. Your interest in contributing to SceneryStack is appreciated, and this guide is here to assist you every step of the way. If you're curious about the differences between SceneryStack and PhET Interactive Simulations, we've covered that too!

## How Can I Contribute?

### 0. Contributing to Open Source

Never participated in an open-source project? Just ask in any of [our community platforms](community.md)!

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

Got a unique idea or suggestion? We're all ears! Whether it's reaching out with your innovative ideas or making a [financial contribution](https://donatenow.networkforgood.org/scenerystack), every bit helps.

## Steps for Code Contribution

Contributing is streamlined with the following steps:

1. Start by raising an issue using the provided [BUG_REPORT_TEMPLATE](BUG_REPORT_TEMPLATE.md) or [FEATURE_REQUEST_TEMPLATE](FEATURE_REQUEST_TEMPLATE.md) in the appropriate repository. Unsure about the right repository? Share your thoughts on the [Discussion forum](https://github.com/orgs/scenerystack/discussions).
2. Familiarize yourself with our [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md).
3. Don't forget to sign the [Contributor License Agreement](CLA.md) before diving in.
4. Fork the necessary repositories.
5. Maintain the integrity of the `dist/` in applicable common code — refrain from changing or committing to it.
6. Configure npm to prevent `package-log.json` commits - `npm config set save false`.
7. Run tests to ensure your contributions are regression-free.
8. Ready? Submit your pull request using the provided [PULL_REQUEST_TEMPLATE](pull_request_template.md).

### Review Process

After your PR submission, our dedicated maintainers will conduct a review:

- They might suggest tweaks for better alignment with our codebase.
- Due to the evolving nature of SceneryStack APIs, ensure your PR is always in sync with the latest changes.

## Questions? Get in Touch

Your feedback, queries, and suggestions are invaluable. Connect with our community on the [central Discussions forum](https://github.com/orgs/scenerystack/discussions).

??? info "How do I contribute to PhET Interactive Simulations?"

    While outside the scope of the SceneryStack community, PhET does have avenues for contribution if you are interested in contributing to specific PhET Interactive Simulations:

    **Bug Fixes**: For bug fixes in existing simulations, employ the same process as for common code contributions within the [specific simulation repository](https://github.com/orgs/phetsims/repositories).

    **Significant New Features**: PhET currently prioritizes resources. Although we might not immediately review large new features, please submit your suggestions and code changes. They could be instrumental in future reviews.

??? info "I want to make an interactive simulation using SceneryStack! What should I do?"
    **If you are an individual or small group interested in or have made progress in making a new simulation:**
    The best resources available to you can be found in the [Development Overview](./info-sync/simulation-development-overview.md) and other documentation found or linked to on this site. Small test projects, academic projects (e.g., education research for a Ph.D.), or open source curriculum projects have all successfully developed custom simulations, leveraging our code base (See [Simulation Examples](./guides/simulation-examples.md)). It requires expertise in design and JavaScript/TypeScript, but it is very possible for dedicated developers and teams. If you have made significant progress and are committed to your STEM simulation, please reach out to us through the [community discussion forum](https://github.com/orgs/scenerystack/discussions) to discuss any support we may be able to provide.

    **If you are a commercial organization interested in making new simulations:**
    See the [PhET website page regarding simulation development](https://phet.colorado.edu/en/about/source-code) for more information.

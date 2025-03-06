# Contribution Guide

We're excited to have you here! Your interest in contributing to SceneryStack is very welcome and quite appreciated. Please read the following carefully, according to how you'd like to contribute to the community. Make sure your participation aligns with the [Code of Conduct](CODE_OF_CONDUCT.md).

## How Can I Contribute?

### 0. Contributing to Open-Source Projects

Never participated in an open-source project? Just ask in any of [our community platforms](community/join.md)!

You'll find some good general advice in resources such as this [article from FreeCodeCamp](https://www.freecodecamp.org/news/how-to-contribute-to-open-source/).

### 1. Code Contributions (Bug Fixes, Features, etc.)

!!! warning ""
    Please note that while the documentation and npm package can be found at `scenerystack/community` and `scenerystack/scenerystack`, respectively, the latest library repositories currently exist in the `phetsims` organization (e.g., `phetsims/scenery` or `phetsims/kite`).

    Keep this in mind when submitting contributions and remember to check your current SceneryStack version against the latest on the `main` branches.

Our ecosystem comprises various common code libraries, each housed in their respective repositories under [phetsims](https://github.com/orgs/phetsims/repositories?q=topic%3Ascenerystack+sort%3Aname-asc). Some libraries depend on others; for instance, `Sun` is built upon `Scenery` to design UI components.

!!! tip inline end ""
    Check out the [SceneryStack:Help Wanted](https://github.com/orgs/scenerystack/projects/4/views/1) board for some issues that are ready for contributions.
👉 If you're considering making an addition or a fix that isn't already documented, initiate by opening an issue and getting community feedback.

Get started with code contributions by following the [steps outlined below](#steps-for-code-contribution).

### 2. Documentation Enhancements

We welcome improvements to our documentation, including in the website repository [scenerystack/community](https://github.com/scenerystack/community). This includes:

- Adding new tutorial documentation, API documentation for any library, library READMEs, and more
- Refine or correct existing documentation
- Providing translations to existing documentation

### 3. Partnerships or Financial Contributions

Got a unique idea or suggestion? Interested in partnering with SceneryStack? We're all ears!

- Reach out to us on the [Discussions forum or chat platforms](community/join.md).

Individuals or groups interested in making a financial contribution can do so at our [SceneryStack Network For Good page](https://donatenow.networkforgood.org/scenerystack), every bit helps!

## Steps for Code Contribution

Contributing is streamlined with the following steps:

### 1. Make an Issue and Review Contribution Guidelines

1. Start by raising an issue using the provided [BUG_REPORT_TEMPLATE](https://github.com/scenerystack/community/blob/main/.github/BUG_REPORT_TEMPLATE.md) or [FEATURE_REQUEST_TEMPLATE](https://github.com/scenerystack/community/blob/main/.github/FEATURE_REQUEST_TEMPLATE.md) in the appropriate repository.
   - Unsure about the right repository? Ask on the [Discussion forum](https://github.com/orgs/scenerystack/discussions).
2. Familiarize yourself with the standard [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md).
3. Don't forget to sign the [Contributor License Agreement](./community/CLA.md) before diving in.

### 2. Checkout SceneryStack and Make Changes

1. Get the latest code for SceneryStack and checkout each SceneryStack repository (See [Modifying SceneryStack](learn/modifying-scenerystack.md#getting-the-latest-code) for more details or for checking out specific versions:
        ```sh
        npx scenerystack checkout
        ```
2. Make your changes in the appropriate repository.
3. Ensure that your changes are in sync with the latest changes in the `main` branch.
4. Run tests to ensure that your changes don't break anything, include any testing you did in the PR description.
5. Update the documentation if necessary (fork `scenerystack/community` and make changes there, submit pull request as outlined below).
6. Make sure your code is well-documented and follows the [code style guide](./info-sync/coding-conventions.md).

### 3. Submit a Pull Request

1. **Fork the repository on GitHub**:
    - Go to the original repository on GitHub.
    - Click the "Fork" button at the top right of the page.
    - This will create a copy of the repository under your GitHub account.

!!! warning "Multiple-repository spanning contributions"
    For contributions that span multiple repositories (e.g., `Scenery` and `Sun`), please [reach out to the maintainers](community/join.md) to verify compatibility and avoid any problems you might encounter in the process.

2. **Add your fork as a remote**:
    - Open your terminal and navigate to the local clone of the repository.
    - Add your fork as a new remote:
          ```sh
          git remote add fork https://github.com/<your-username>/<forked-repo>.git
          ```

3. **Push your local changes to your fork**:
    - Push your local branch to your fork:
          ```sh
          git push fork <branch-name>
          ```

4. **Create a pull request**:
    - Go to your forked repository on GitHub.
    - You should see a prompt to create a pull request for the recently pushed branch.
    - Click "Compare & pull request".
    - Fill out the pull request form with a descriptive title and detailed description of your change using the provided [PULL_REQUEST_TEMPLATE](https://github.com/scenerystack/community/blob/main/.github/PULL_REQUEST_TEMPLATE.md).
    - Submit the pull request.

5. **Respond to feedback**:
    - A maintainer will review your pull request and may provide feedback.
    - Make any necessary changes and push them to your fork:
            ```sh
            git push fork <branch-name>
            ```

    - Due to the evolving nature of SceneryStack APIs, double check that your PR changes are still in sync with the latest changes.

6. **Merge the pull request**:
    - Once your pull request is approved, it will be merged into the main branch of the original repository and your changes will be included in the next release of SceneryStack.

Replace `<your-username>` with your GitHub username and `<forked-repo>` with the name of the forked repository. Replace `<branch-name>` with the name of the branch you are working on.

Celebrate your contribution and post about it on the [Discussions forum](https://github.com/orgs/scenerystack/discussions)!

If you're interested in contributing further, check out the [open issues](https://github.com/orgs/scenerystack/projects/4/views/1).

## Questions? Get in Touch

Connect with our community on the [Discussions forum](https://github.com/orgs/scenerystack/discussions) or through [Matrix](community/join.md).

??? note "How do I contribute to PhET Interactive Simulations?"

    PhET has its own community and ecosystem of simulations, teacher activities, translations and more. See the [PhET website](https://phet.colorado.edu/) for more information.

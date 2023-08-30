# Welcome and thank you!

First off, thank you for consideration in contributing to PhET Common Code Libraries! We are so excited to have you as part of our community. Below you will find the different ways you can contribute to the PhET Common Code Libraries and the resources for how to contribute. Are you unsure of how PhET Common Code Libraries differs from PhET Interactive Simulations? Read below at the "PhET Common Code vs. PhET Interactive Simulations" header.

# What ways can I contribute to PhET Common Code Libraries?

## Features and bug fixes to the PhET Common Code Libraries

There are a number of common code libraries (each with their own repository under [phetsims](https://github.com/phetsims/), some which depend on others (e.g., `sun` relies on `scenery` to create UI components). We welcome additions or fixes to any of the repositories that fall under our [Common Code umbrella](https://github.com/phetsims/phet-info/blob/master/doc/phet-development-overview.md#source-code-and-dependencies).

To make any contributions, please open an issue if one does not exist and then open a pull request with your changes.

## Documentation improvements or fixes found within the Common Code repositories
<!--  What documentation would be helpful to update? Are their specific API needs? Binder? -->
- 
- Including the [community](https://github.com/phetsims/community)) repository!
- Translations to documentation found within the Common Code repositories (including [community](https://github.com/phetsims/community)).

## OTHER
Do you have other 

and [financial contributions](https://donatenow.networkforgood.org/1437859).

# Code Contribution Steps

We encourage you to make use of GitHub's Pull Request (PR) feature to submit your contributions.

1.  Make an issue using an [ISSUE_TEMPLATE](/C:/Users/Brett/AppData/Local/Programs/Joplin/resources/app.asar/ISSUE_TEMPLATE.md "./ISSUE_TEMPLATE.md") in the relevant repository. Not sure which repository to use? Make a post in the [central Discussion forum](https://github.com/orgs/phetsims/discussions).
2.  Read this document carefully, as well as our [CODE\_OF\_CONDUCT](/C:/Users/Brett/AppData/Local/Programs/Joplin/resources/CODE_OF_CONDUCT.md "../CODE_OF_CONDUCT.md").
3.  See the instructions for signing the [Contributor License Agreement](/C:/Users/Brett/AppData/Local/Programs/Joplin/resources/CLA.md "../CLA.md") before contributing.
4.  Fork the repo(s) required.
5.  For common code where it applies, please **do not** change or commit to `dist/`, these stable built versions are updated less regularly.
6.  Use `npm config set save false` to avoid committing `package-log.json` files to version control.
7.  Run appropriate browser unit tests and simulation tests to ensure no regressions.
8.  Make a PR with a [PULL\_REQUEST\_TEMPLATE](/C:/Users/Brett/AppData/Local/Programs/Joplin/resources/PULL_REQUEST_TEMPLATE.md "../PULL_REQUEST_TEMPLATE.md").

## Review Process

Upon submitting a PR, a `phetsims` maintainer will do a code review.

- They might ask you to make changes, before accepting the merge.
- PhET APIs are constantly evolving, so it is also possible you will need to rebase your PR and verify there are no conflicts with the latest codebase.

# Reach out

Questions? Suggestions? Have other ideas on how to contribute? Head to our [central Discussions forum](https://github.com/orgs/phetsims/discussions) and make a post!

# PhET Common Code Libraries vs. PhET Interactive Simulations

PhET Common Code Libraries are the HTML5/JavaScript/TypeScript APIs (detailed above) that PhET Interactive Simulations are built on. The use of PhET Common Code Libraries **is not limited to creating interactive science and math simulations!** It can be used to support the creation of all web interactives. PhET Common Code supports rich and inclusive multimodal interaction, including the architecture to build robust screen reader access when used in conjunction with our [Interactive Description Design Framework](https://www.coursera.org/learn/description-design-for-interactive-learning-resources)

PhET Common Code Libraries are licensed through the MIT License, freely available for use by anyone. *Simulations* differ in their licensing depending on the details of their development cycle (e.g., funding, partnerships, and third-party libraries). See the LICENSE file in each repository for details.

PhET does not engage in licensing our Simulation source code to commercial entities. Commercial partners interested in licensing our *Simulations* should see the PhET Interactive Simulations website for [partnership inquiries](https://phet.colorado.edu/en/partnerships) 

## But wait, I want to submit a bug fix or new feature to the code of an existing simulation!

That's great! Thank you so much for taking the initiative to help make our simulations even better.

**At this time, we are not able to allocate resources to the review of *significant new features* to an existing simulation**, as this would likely require review from multiple developers, designers, and partners, including possible user interviews with students and teachers. However, please do open up an issue in the [specific simulation repository found under phetsims](https://github.com/orgs/phetsims/repositories) with your feature and the code changes necessary in the event the simulation comes under later review.

**If you have a bug fix for an existing simulation**, then please follow the same process outlined above for common code contributions, but apply it to the [specific simulation repository found under phetsims](https://github.com/orgs/phetsims/repositories).

## I want to make an entirely new simulation! What should I do?

### If you are an individual or small group interested in or have made progress in making a new simulation
The best resources available to you can be found in the [PhET Development Overview](https://github.com/phetsims/phet-info/blob/master/doc/phet-development-overview.md) and [other documentation](https://github.com/phetsims/phet-info/tree/master/doc) found in the `phet-info` repository. We have seen small test projects, academic projects (e.g. education research for a PhD), or open source curriculum projects successfully develop custom simulations, leveraging our code base. It requires expertise in design and in JavaScript/TypeScript, but is very possible for dedicated developers and teams. If you have made significant progress and are committed to your STEM simulation, please reach out to us at phethelp@colorado.edu or through the [community discussion forum](https://github.com/orgs/phetsims/discussions) to discuss any support we may be able to provide.

### If you are a commercial organization interested in making new simulations 
See the [Source Code page of our website](https://phet.colorado.edu/en/about/source-code) for more information.
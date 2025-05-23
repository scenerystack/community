# Project Ideas List

This is a list of projects suggested by SceneryStack and PhET Interactive Simulations developers for interested contributors or for participants of programs like [Google Summer of Code](https://summerofcode.withgoogle.com/) or [Outreachy](https://outreachy.org/).

Potential contributions are not limited to the specific project ideas or the scope of the projects as detailed below. If you have ideas, please share them on the [Discussions forum](https://github.com/orgs/scenerystack/discussions) or in the specific thread linked beside each project.

<!-- ## What we look for from a contributor

- Discussion and engagement with the community on the project you are interested in (see the threads linked below each project or [start your own](https://github.com/orgs/scenerystack/discussions))
- Clear and detailed application explaining how you think the project could be done
- Relevant prior experience
- Understanding of Git and/or GitHub

## How to apply

1. Read the [GSoC Contributor Guide](https://google.github.io/gsocguides/student/). It has a lot of useful information on how to write a good proposal.
2. Participate in the [Discussions forum](https://github.com/orgs/scenerystack/discussions) for the project you are interested in or start your own for a new project and engage with the mentors and community in planning your project.
3. Please e-mail a brief CV to `scenerystackts at gmail dot com` along with answers to these questions:
      - What aspects of our project capture your interest the most?
      - Could you describe your background with the specific technologies we use?
      - Have you contributed to any other open-source initiatives, and if so, which ones?
      - As mentors and project coordinators, how can we best support you to excel?
      - Are there any other studies or projects you’ll be pursuing alongside this work?
      - What methods or tools do you use to stay organized and on track?
4. If your project idea is approved, you will be asked to complete a qualification task to demonstrate your skills and understanding of the project, which will be sent to you by email and reviewed by the mentors.
5. If the project seems like a match, you'll received an affirmative response from the mentor(s) regarding your project. You can then submit your application to the [GSoC website](https://summerofcode.withgoogle.com/). -->

## Project Ideas (updated February 2025)
  
### Project 1: Develop a Simple Accessible Game using SceneryStack

**Project Size:** medium

**Estimated Difficulty:** intermediate  

**Recommended Skills:**  

- **JavaScript:** Proficient in JavaScript for implementing interactive features and how it interacts with the DOM.
- **TypeScript:** Basic knowledge of TypeScript to work with existing codebases and enhance type safety.  
- **Git/GitHub:** Skills to contribute code and communicate effectively within the development team.
- (helpful) **Accessibility (a11y) Concepts:** Familiarity with ARIA roles, keyboard navigation, and screen reader compatibility.

[Project Discussion Thread](https://github.com/orgs/scenerystack/discussions/123)  

#### Description

SceneryStack supports the creation of accessible, flexible web interactives by providing keyboard access, screen reader compatibility, and other accessibility features. While these features are well integrated into PhET Interactive Simulations, there is a lack of practical examples demonstrating their use in interactive games.  

This project aims to develop a *fully accessible web-based game demo* using SceneryStack, showcasing keyboard navigation, screen reader-compatible interactions, and customizable visual/audio features. The game will serve as a template and proof-of-concept for making browser-based games more inclusive.  

#### Key Tasks

- **Game Concept and Design:** Select a game genre (e.g., board game, puzzle, card game, turn-based strategy). We recommend a simple game, but with sufficient complexity to demonstrate accessibility features, such as Chess.

- **Develop an Interactive Game with Accessibility Features:**  
  - Use [**SceneryStack**](https://scenerystack.org/) to create a working prototype with full accessibility support.  
    - Implement **keyboard navigation**, including arrow-key and shortcut controls.  
    - Support **interactive screen reader descriptions [(Interactive Description)](https://phet.colorado.edu/en/inclusive-design/features?section=interactive-description)** via a Parallel DOM, ensuring proper navigation and feedback.
    - Incorporate **[Voicing](https://phet.colorado.edu/en/inclusive-design/features?section=voicing) features**, enabling auditory game feedback.  
    - Add **color customization options** to improve contrast for low-vision users.  
    - Implement **pan and zoom functionality** for adjustable views.  
  - **Collaborate with Designers:** Work with designers to create spoken descriptions that you will implement.

#### Expected Outcomes/Benefits/Deliverables

**Fully Functional Accessible Game** – A playable, if simple, web-based game with comprehensive a11y support, serving as a model for future projects.  

**Showcase of SceneryStack's Accessibility Features** – Demonstrating how developers can integrate a11y-first principles into game development.  

**Improved Web Gaming Accessibility** – Addressing the current lack of keyboard-accessible and screen reader-friendly online games.

#### Why This Project?

Many popular online games are not keyboard or screen reader accessible, making them unusable for many people with disabilities. For example, the most popular online Chess platforms do not offer keyboard navigation or screen reader support, or only offer the most mimimal support - not enough for a rich interactive experience.  

This project will serve as an accessible alternative and prove that web games can be both engaging and inclusive from the start. Unlike most games that require users to find and activate accessibility settings, SceneryStack aims to provide clear accessibility features from the moment the page loads—removing barriers to entry for all players.  

#### Contributing to the Project

Interested contributors should begin by participating in the [Project 1 Discussion Thread](https://github.com/orgs/scenerystack/discussions/123) to express their interest, ask questions, and engage with the SceneryStack community. Don't forget to read the [Contribution Guidelines](../CONTRIBUTING.md) before starting your work.

---

### Project 2: Implement Accessibility View for All SceneryStack Projects

**Project Size:** medium

**Estimated difficulty:** hard

**Recommended Skills:**

- JavaScript: Proficient in JavaScript for implementing interactive features.
- TypeScript: Basic knowledge of TypeScript to work with existing codebases and enhance type safety.
- Git/GitHub: Skills to contribute code and communicate
- (helpful) **Accessibility (a11y) Concepts:** Familiarity with ARIA roles, keyboard navigation, and screen reader compatibility.

[Project Discussion Thread](https://github.com/orgs/scenerystack/discussions/124)

#### Description

Designing spoken descriptions for interactive web projects can be challenging, especially when iteration requires interacting with the screen reader to assess changes in real time. It is also difficult to communicate the intended experience to designers and developers who are not familiar with screen readers. The PhET Project has developed an "A11y (Accessibility) View" for interactive screen reader descriptions for PhET simulations. This view allows developers to see the spoken descriptions for interactive elements in real time, facilitating the design and implementation of accessible features. However, the current A11y View is specific to the PhET simulation context and does not work for other Scenery displays. This project in feature developments aims to generalize the A11y View to work for any Scenery display, enabling developers to create accessible web projects more efficiently.

#### Key Tasks

- Get Familiar with PDOM and Scenery: Learn about the Parallel DOM (PDOM) and Scenery frameworks used in PhET simulations.
- Understand the Current A11y View: Familiarize yourself with the existing a11y view in PhET simulations and how it interacts with the screen reader (e.g., [Greenhouse Effect A11y View](https://phet-dev.colorado.edu/html/greenhouse-effect/1.3.0-dev.6/phet/greenhouse-effect_a11y_view.html))
- Understand the basics of the description design framework: Understand the basics of the description design framework.
- Implement [a new instantiation of the A11y View](https://github.com/phetsims/chipper/issues/1512) from scratch in the [Scenery](https://github.com/phetsims/scenery/) library.
- Develop a very simple interactive example to highlight the A11y view in action.

#### Expected Outcomes/Benefits/Deliverables

- Generalized A11y View: A new A11y View that works for any Scenery display, enabling developers to create accessible web projects more efficiently.
- Interactive Example: A simple interactive example demonstrating the A11y View in action.
- Improved Accessibility: Enhanced accessibility for web projects developed using Scenery, making them more inclusive and user-friendly.

#### Why This Project?

Implementing an accessibility view for all SceneryStack projects is a crucial step towards making web projects more inclusive and user-friendly. This project contributes to the accessibility of educational tools and offers valuable experience in front-end development, accessibility standards implementation, and user experience design.

#### Contributing to the Project

Interested contributors should begin by participating in the [Project 2 Discussion Thread](https://github.com/orgs/scenerystack/discussions/124) to express their interest, ask questions, and engage with the SceneryStack community. Don't forget to read the [Contribution Guidelines](../CONTRIBUTING.md) before starting your work.

---

### Project 3: Optimizing Shape Operations in the Kite Library

**Project Size:** small to medium

**Estimated Difficulty:** beginner to intermediate

**Recommended Skills:**

- **JavaScript:** Proficiency in JavaScript for implementing and optimizing algorithms.
- **Computational Geometry:** Understanding of geometric algorithms and their computational complexities.
- **Performance Profiling:** Experience with profiling tools to identify and resolve performance bottlenecks.
- **Git/GitHub:** Familiarity with version control and collaborative development workflows.

[Project Discussion Thread](https://github.com/orgs/scenerystack/discussions/125)

#### Description

This project aims to enhance the performance and accuracy of SceneryStack's shape library, Kite, and its shape operations. Key areas of focus could include, depending on the scope of the contributor's interests and expertise:

1. **Optimizing Intersection Calculations:** Address inefficiencies in functions like `getLocalShape` to prevent excessive computations during shape intersections.
2. **Refining Shape Union Operations:** Improve the `Shape.union` method to handle complex cases more efficiently and eliminate errors related to advanced disambiguation.
3. **Reducing External Dependencies:** Evaluate and minimize reliance on external libraries, such as Paper.js, to decrease the overall size of simulations without compromising functionality.
4. **Enhancing Robustness of Shape Functions:** Resolve issues in functions like `getStrokedShape` and `getOffsetShape` to ensure accurate rendering, especially in edge cases involving small or intricate shapes.

Relevant Issues:
<https://github.com/phetsims/kite/issues/105>
<https://github.com/phetsims/kite/issues/101>
<https://github.com/phetsims/kite/issues/98>
<https://github.com/phetsims/kite/issues/97>
<https://github.com/phetsims/kite/issues/91>
<https://github.com/phetsims/kite/issues/83>
<https://github.com/phetsims/kite/issues/82>

#### Key Tasks

- **Performance Profiling:** Analyze current shape operations to identify and document performance bottlenecks.
- **Algorithm Optimization:** Revise existing algorithms to enhance efficiency, particularly in intersection and union computations.
- **Dependency Analysis:** Assess the necessity of external libraries and refactor code to reduce dependencies where possible.
- **Robustness Improvements:** Test and refine shape functions to handle edge cases gracefully, ensuring accurate and artifact-free rendering.

#### Expected Outcomes/Deliverables

- **Enhanced Performance:** Significant reduction in computation times for shape operations, leading to smoother simulations.
- **Improved Accuracy:** Elimination of rendering artifacts and errors in shape manipulations.
- **Reduced Project Size:** Lowered dependency on external libraries, resulting in smaller file sizes for SceneryStack projects.
- **Robust Test Suite:** A suite of test cases covering various scenarios to ensure the reliability of shape operations.

#### Why This Project?

Optimizing the Kite library's shape operations is essential for delivering high-performance, accurate, and efficient simulations. By addressing current limitations, this project will enhance the user experience and broaden the applicability of the SceneryStack framework.

#### Contributing to the Project

Interested contributors should begin by participating in the [Project 3 Discussion Thread](https://github.com/orgs/scenerystack/discussions/125) to express their interest, ask questions, and engage with the SceneryStack community. Don't forget to read the [Contribution Guidelines](../CONTRIBUTING.md) before starting your work.

---

### Project 4: Develop a Glass Panel and Dialog Layer for SceneryStack’s UI Library

**Project Size:** small

**Estimated Difficulty:** intermediate  

**Recommended Skills:**  

- **JavaScript:** Proficiency in JavaScript for building interactive UI components.  
- **TypeScript:** Basic knowledge for enhancing type safety and contributing to an existing codebase.  
- **Git/GitHub:** Skills to contribute code, manage pull requests, and communicate effectively within the development team.
- (helpful) **Accessibility (a11y) Concepts:** Familiarity with ARIA roles, keyboard navigation, and screen reader compatibility.  

[Project Discussion Thread](https://github.com/orgs/scenerystack/discussions/126)

#### Description

SceneryStack is an open-source web development framework designed for creating interactive, accessible web interfaces. We would like to improve the core functionality of SceneryStack by introducing a glass pane layer to help with interaction. The glass pane layer will be used to intercept mouse and touch events when a modal dialog, combo box, or menu popup is shown. The glass pane should be automatically used, for instance, so that a ComboBox can be created without knowledge of its container. Likewise, a non-modal dialog should remain in front while allowing interaction with the rest of the page.

- **Glass Pane** A layer that manages z-ordering and/or interaction for the page.
- **Non-Modal Dialog:** Allows the user to interact with the rest of the page while the dialog is open.
- **Modal Dialog** This dialog is dismissed when closed or when the user taps away from it.
- **Enhanced ComboBox / DropDown with a Refined Glass Pane Layer:** Improves the layering system so components like combo boxes can be used anywhere in the scene tree.  

By adding these facets to SceneryStack—with a focus on accessibility—you will help grow the library’s functionality and empower developers to create more robust, inclusive interfaces.  We have initial prototype implementations in phetsims/joist that we would like to generalize and improve.

Project scope depends on the complexity of the components chosen and the desired level of polish. Contributors are encouraged to discuss their ideas with the mentor and community to ensure alignment with SceneryStack’s goals.

#### Key Tasks

1. **Research and Planning:** Investigate how glass panes, dialog systems, combo boxes and popups are implemented in other popular UI libraries.

1. **Design and Prototyping:**  
    - Create initial design specifications for the glass pane layer and how it will be used by modal dialogs, popups, menus, and combo boxes.
    - Collaborate with the mentor and community to ensure designs meet SceneryStack’s coding standards and accessibility guidelines.  

2. **Implementation with Accessibility in Mind:** Implement components with SceneryStack's accessibility features, such as keyboard navigation and screen reader support.  

3. **Integration and Refactoring:**
    - Ensure new components integrate seamlessly into SceneryStack’s existing architecture.  
    - If needed, refactor relevant sections of the codebase (e.g., the glass pane layer) to improve maintainability and performance.
    - Create developer-friendly documentation, including code examples and usage guidelines.
    - Adjust some or all PhET simulations that exercise this functionality to use the new strategy.

4. **Testing and QA:** Write unit and integration tests to verify component functionality and prevent regressions.

#### Expected Outcomes/Benefits/Deliverables

- **New Glass Pane Layer:** Implementation and usage of a glass pane layer that can be used for showing modal dialogs,
- **Accessibility Enhancements:** Improved assistive technology support for common UI components (keyboard navigation, screen reader announcements, etc.).  
- **Refined Codebase:** Potential refactoring of underlying infrastructure (e.g., glass pane layer) for easier maintenance and future component development.
- **Community Growth:** Contributions will encourage more developers to adopt SceneryStack, seeing that it supports core UI features with robust accessibility.  

#### Why This Project?

Despite the growing focus on inclusive design, many open-source libraries either lack key UI components or provide them with inconsistent accessibility features. Filling these gaps in SceneryStack will:  

- **Accelerate Development:** Reduce the need for custom-coded solutions, streamlining the creation of new projects.  
- **Ensure Accessibility from the Start:** Provide built-in best practices that automatically offer keyboard, screen reader, and other essential support.  
- **Promote Inclusivity:** Expand the range of accessible user interfaces, benefitting both developers who want to build inclusive apps and end-users with diverse needs.  
- **Showcase Good A11y Practices:** Demonstrate how to implement components “accessibility-first,” serving as a reference for other open-source projects.  

#### Contributing to the Project

Interested contributors should begin by participating in the [Project 4 Discussion Thread](https://github.com/orgs/scenerystack/discussions/126) to express their interest, ask questions, and engage with the SceneryStack community. Don't forget to read the [Contribution Guidelines](../CONTRIBUTING.md) before starting your work.

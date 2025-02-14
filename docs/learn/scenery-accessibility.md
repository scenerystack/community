--8<-- "api-reference-snippets.md"

# Scenery Accessibility

!!! warning "Under Construction"
    This section and others in Getting Started with SceneryStack are under heavy revisement
    and will be updated in February 2025.

## Scenery's Accessibility Features

Scenery includes a variety of accessibility features to ensure interactive content is usable by a wide range of users. 
This document focuses on the **Parallel DOM**, which enables screen reader accessibility. Scenery also provides 
additional accessibility-related features:

- **Parallel DOM** – A parallel HTML tree that mirrors the Scenery scene graph, allowing screen readers to interpret visual content.  
- **Pan and Zoom** – Built-in support for zooming and panning within a Scenery display, with multiple input methods for control.  
- **Voicing** – Application-generated speech using SpeechSynthesis for dynamic spoken feedback.

## Background Information

Before diving into the documentation, it's important to understand key accessibility concepts such as accessible HTML, the accessibility tree, accessible names, and ARIA. The following resources provide essential background knowledge:

- **[Accessible HTML](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)** – An introduction to accessible, semantic HTML. Since Scenery's accessibility support relies on the HTML it generates, understanding semantic HTML is crucial.  
- **[The Accessibility Tree](https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/the-accessibility-tree)** – Learn how browsers interpret HTML into a structured "Accessibility Tree." Key concepts include **accessible names** and **roles**, which define how screen readers perceive elements.  
- **[Accessible Name](https://developer.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/)** – Discover multiple strategies for assigning accessible names to elements, ensuring flexibility in your code.  
- **[ARIA (Accessible Rich Internet Applications)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)** – ARIA extends semantic HTML to improve accessibility for dynamic content and complex interactions. However, remember the **first rule of ARIA**: *Don’t use ARIA unless necessary!*  

## The Parallel DOM

Scenery uses HTML5 technologies (`svg`, `canvas`, `webgl`) for rendering, but these provide little to no built-in
semantic information for assistive technologies (AT). The **Parallel DOM (PDOM)** extracts semantic data from the scene
graph and generates a separate, structured HTML representation that is accessible to screen readers and other AT.

Think of the **PDOM** as *the HTML equivalent of the graphical `Node.js` content in the display*. It remains invisible
on the screen but dynamically updates to reflect changes in the scene, ensuring accessibility support for interactive
content. By leveraging HTML, Scenery benefits from built-in accessibility features like keyboard navigation and
screen-reader descriptions, offloading much of the work to the browser and AT.

Any Scenery `Node` can have accessible content, which will be reflected in the PDOM. However, the PDOM only includes
nodes that explicitly specify accessible content.

## Scenery's Accessibility API (Powered by the PDOM)

Scenery's accessibility features are enabled by creating a `Display` with the `accessibility: true` option. Most of
these features are implemented in `ParallelDOM.js`, a trait mixed into `Node.js`, providing getters and setters for
PDOM-related properties. Developers can configure accessibility options in `super()` or `mutate()` function calls.

For more details and up-to-date API documentation, refer to
the [ParallelDOM.js source code](https://github.com/phetsims/scenery/blob/main/js/accessibility/pdom/ParallelDOM.js#L4).
The sidebar categorizes accessibility options, with an emphasis on example-based explanations rather than traditional
documentation.

### A Basic Example

The primary way to implement accessibility in Scenery is by passing options to `Node.js`. To ensure a node appears in
the PDOM, it needs an associated HTML element, which can be defined using the `tagName` option:

<div id="accessible-tag-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-accessibility/accessible-tag-example.js"></script>

### Using `innerContent`

The example above shows a simple Scenery [Rectangle] represented as a `<p>` tag in the PDOM. In addition to specifying a
`tagName`, the `innerContent` option can be used to add text content inside the `<p>` element.

## Multiple DOM Elements per Node

The basic example demonstrates a single DOM element representing a node in the PDOM. However, **ParallelDOM.js**
supports a more structured HTML representation. Each node can have multiple DOM elements. At minimum, a node must
specify a **primary element** with `tagName`, but it can also include:

- **Label Element** (`labelTagName`) – Used for labeling the primary element.  
- **Description Element** (`descriptionTagName`) – Provides additional explanatory text.  
- **Container Element** (`containerTagName`) – Groups the primary, label, and description elements together.  

### Terminology

Understanding key terminology helps clarify how elements are structured within the PDOM:

- **Sibling Elements** – The primary, label, and description elements of a node are "siblings" within the PDOM structure. These elements are not siblings of the original node but rather siblings to each other under a shared **containerParent**.
- **PDOMPeer (Peer)** – Each node has a `PDOMPeer`, which manages the `HTMLElement`s associated with that node in the PDOM.
- **Primary Element** – The core element that represents the node (`tagName`).
- **Supplementary Elements** – Additional elements such as labels and descriptions (`labelTagName` and `descriptionTagName`).
- **Container Element** – If multiple elements exist, they can be grouped together inside a container (`containerTagName`).

### Example

Below is an example of a node using all its elements to provide the fullest semantic representation of a simulation
component in the PDOM.

<div id="siblings-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-accessibility/siblings-example.js"></script>

In this example, the rectangle's **primary sibling** is a button with an Accessible Name of **"Grab Magnet"**. It has:

- A **label sibling** with an `<h3>` tag containing the text **"Grab Magnet"**.  
- A **description sibling** with a `<p>` tag containing a descriptive sentence.  

### Notes

- All supplemental HTML elements (container, description, and label) have **default tag names** in the PDOM API. If a `*Content` option is provided without specifying `*TagName`, a default tag is used. See `PDOMUtils` for the defaults.  
- By default, **description and label elements appear before the primary sibling** in the PDOM. This behavior can be adjusted using the `appendLabel` and `appendDescription` options.  
- Nodes without accessible content, such as the `Text` node **"North South Magnet"**, do not appear in the PDOM.  

## The Structure of the PDOM

By default, the **PDOM hierarchy** mirrors the scene graph hierarchy. This means that if both a parent node and child
node have accessible content, the child's accessible HTML will be **nested inside** the parent's primary sibling in the
PDOM.

Scenery handles this structure using `PDOMPeer`, which manages and controls all HTML elements associated with a node.

### Leveraging the Scene Graph

Consider an example where we have a box filled with circles, and we want the PDOM representation to be an unordered
list (`<ul>`) with list items (`<li>`).

<div id="graph-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-accessibility/graph-example.js"></script>

In this example, Scenery automatically structures the PDOM so that the list items (`<li>`) are children of the unordered
list (`<ul>`), aligning with the hierarchy of the scene graph.

### Flexibility

The PDOM API offers significant flexibility in how content is structured in the PDOM. Each **sibling element** (such as
a label or description) has a defined role, but at its core, it is simply an HTML element, and its tag name can be
customized.

For example, a node can be used solely to add **text content** to the PDOM. By default, supplementary peer elements have
predefined tag names. *(Note: As of writing, sibling tag names default to `<p>`.)*

<div id="lots-of-text-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-accessibility/lots-of-text-example.js"></script>

In this sense, the naming of options to control each sibling is somewhat *arbitrary*—the API is designed to be flexible,
allowing you to choose what works best for each situation. Not every node needs all four HTML elements in its PDOM
representation, so use your judgment when structuring accessible content.

## Keyboard Navigation

The PDOM API supports keyboard navigation **only** on a node’s **primary sibling**. A key principle is to make the DOM
element as **semantically meaningful** as possible.

For example, if a button exists in the simulation, the best choice for its primary sibling’s `tagName` is `"button"`. A
less accessible alternative would be using a `<div>` and manually adding event listeners to mimic button behavior.
However, an assistive technology (AT) cannot infer a `<div>`’s intended function, making the experience worse for users.

In general, always **favor semantic HTML elements** that convey meaning directly to users. While ARIA can improve
accessibility in some cases, it should be used sparingly. *Remember: The first rule of ARIA is to not use ARIA!*
Instead, prioritize using native HTML semantics whenever possible.

## Input Types

If `tagName: 'input'` is specified, additional options allow further customization:

- **`inputType`** – Sets the `"type"` attribute of the input element (e.g., `"text"`, `"checkbox"`, `"radio"`).  
- **`inputValue`** – Controls the input’s value.  
- **`pdomChecked`** – Manages the `"checked"` state for checkboxes or radio buttons.  
- **`Node.setPDOMAttribute()`** – Allows manual control over additional attributes on the primary DOM element.  

These options provide a way to ensure form elements are both interactive and accessible.

<div id="input-type-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-accessibility/input-type-example.js"></script>

The example above shows a node whose PDOM representation is a **basic checkbox**. To make it interactive, use
`Node.addInputListener()`, which accepts an object where keys are DOM event names and values are callback functions.

For a full list of supported Scenery events, including those originating from the PDOM, refer to
the [Input.js documentation](https://github.com/phetsims/scenery/blob/main/js/input/Input.js#L4).  
⚠️ *Note:* PDOM event listeners often differ from mouse event listeners. Be sure to remove listeners when disposing of a
node using `Node.removeInputListener()`.

Additionally, specifying a `"label"` tag name for the **label sibling** will automatically set the `for` attribute,
ensuring a proper **Accessible Name**. See [this section](#accessible-name) for more details on accessible naming in the
PDOM.

## Focus

All **interactive elements** in the PDOM receive keyboard focus. However, not all objects in the display should be
interactive.  
For example, in *PhET Interactive Simulations*, the sweater in *Balloons and Static Electricity* is a **dynamic**
element (it transfers electrons to a balloon) but is **not directly interacted with**. As a result, it **never receives
focus**.

### Focus Handling

When an element in the PDOM is focused, a **focus highlight** is automatically rendered in the display to support
keyboard navigation. This happens when:

- The `tagName` is an inherently focusable element (e.g., `"button"`).  
- The `focusable` option is used to make other elements focusable.  
- A custom **focus highlight** is specified using the `focusHighlight` option, which accepts a `Node` or `Shape`.

### Visibility and Focus Order

- An element’s **visibility in the PDOM** and its position in the **focus order** are affected by `Node.visible`.  
- Visibility can also be toggled **independently** for assistive technologies using `Node.pdomVisible`.  
  - When `pdomVisible: false`, the element is hidden from screen readers and removed from the focus order.  

### Interactive Content

The PDOM provides the same input capabilities as standard HTML elements, so understanding HTML interactions is
beneficial when designing accessible content.

A prerequisite for any interactive node in the PDOM is the `focusable` option. Setting `focusable: true` allows
keyboard (or assistive technology) input to reach the node. The **events a node's primary sibling receives** depend on
its **accessible name** and **role**.

- The ARIA `role` attribute (set via `ariaRole`) can help convey custom interactions.  
- For example, assigning the `"application"` role allows screen readers to pass all input events—such as `"keyup"` and `"keydown"`—to the DOM element, which are **not** typically available for buttons in some assistive technologies (AT).  
- Focusable elements can be manually controlled with `Node.focus()` and `Node.blur()`.  

Once the PDOM structure is defined and the expected interaction events are known, use `Node.addInputListener()` to
attach event listeners for PDOM interactions.  
For a complete list of supported events (`keydown`, `keyup`, `click`, `input`, `change`, `focus`, `blur`), see
the [Input.js documentation](https://github.com/phetsims/scenery/blob/main/js/input/Input.js).

## Manipulating the PDOM

Most properties of the `ParallelDOM.js` trait are mutable, allowing the PDOM to dynamically update alongside the
graphical scene. Common properties include:

- **`tagName`** – Set/get the tag name of the primary DOM sibling.  
- **`labelTagName`** – Set/get the tag name of the label sibling.  
- **`descriptionTagName`** – Set/get the tag name of the description sibling.  
- **`innerContent`** – Set/get the text content of the primary sibling.  
- **`labelContent`** – Set/get the text content of the label sibling.  
- **`descriptionContent`** – Set/get the text content of the description sibling.  
- **`ariaRole`** – Set/get the ARIA role for the primary DOM sibling.  

These properties can be **dynamically updated**, not just set as options.  
- Setting any `*[tT]agName` property to `null` removes that element from the PDOM.  
- Setting `Node.tagName = null` clears all accessible content from the node.  

For a full list of getters and setters, refer to
the [ParallelDOM.js source code](https://github.com/phetsims/scenery/blob/main/js/accessibility/pdom/ParallelDOM.js).

### A Note About Accessible Name

The **Accessible Name** of an element is how assistive technologies (AT) identify it within the browser's accessibility
tree. Understanding this concept is **critical** for creating an accessible PDOM. While a deep dive into this topic is
beyond the scope of this document, you can refer to [background reading](#accessible-name-link) for more details.

Below is an overview of the different ways to set an **Accessible Name** using the Scenery PDOM API.

- **Element's Content**  
  Example: `<button>My Button</button>`  
  - Use `innerContent` to set the element's content as its Accessible Name.  

- **`label` Element**  
  - A `<label>` element can provide an Accessible Name for an `input` element that lacks inner content.  
  - Labels are the preferred method when **visible text already identifies the element** in the display.  
  - A `<label>` can only be associated with **labelable elements** like those described in the [HTML specification](https://html.spec.whatwg.org/multipage/forms.html#the-label-element).  
  - Set `labelTagName: "label"`, and the `"for"` attribute will **automatically link** to the primary sibling.  

- **`aria-label` Attribute**  
  - The `aria-label` attribute can be used to provide an Accessible Name.  
  - Use the `ariaLabel` option to set this attribute on the **primary DOM element**.  

- **`aria-labelledby` Attribute**  
  - This attribute associates an element's name with another HTML element, even if they are not adjacent in the DOM.  
  - Use `addAriaLabelledbyAssociation()` to set up this association:  

  ```js
  this.addAriaLabelledbyAssociation({
    thisElementName: PDOMPeer.PRIMARY_SIBLING,
    otherNode: nodeWithAccessibleName,
    otherElementName: PDOMPeer.PRIMARY_SIBLING
  });
  
  This method lets you specify which PDOM element to associate, though it is typically the primary sibling.
  A similar function, addAriaDescribedbyAssociation(), is available for aria-describedby, see `addAriaDescribedbyAssociation`.
  
### Ordering

To manipulate the order in the PDOM, use `Node.pdomOrder = []`. Scenery supports a fully independent tree of
`PDOMInstance`s to order the PDOM versus the ordering based on the nodes into the `Instance` tree. Because of this, you
can use `Node.pdomOrder` to largely remap the scene graph (for rendering into the PDOM) without affecting the visually
rendered output.

`Node.pdomOrder` takes any array of nodes, even if they aren't children to that node. Note that a node must be connected
to the main scene graph (via children) in order to support being in a `pdomOrder`. Thus, you cannot only add a node to a
`pdomOrder` and expect it to render to the PDOM.

### Interactive Alerts

All interactive alerts are powered by the [
`aria-live` attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions). PhET manages
alerts using a custom queue, see [
`utteranceQueue.js`](https://github.com/phetsims/utterance-queue/blob/main/js/utteranceQueue.js).

Each accessible display is equipped with an `UtteranceQueue` that can receive alerts. **All PhET alerts should be
processed through `utteranceQueue`**—`aria-live` should not be manually added to elements in the PDOM.

### Performance Considerations

Manipulating the DOM can be performance-intensive. Frequent updates, especially every animation frame, can degrade
performance on slower devices like tablets and phones. To optimize performance:

- **Minimize the frequency of setting accessible content and attributes** whenever possible.  
- **Avoid unnecessary updates** to the DOM to prevent excessive rendering overhead.  
- **Future improvements**: Work is in progress to batch updates to the DOM, reducing the number of changes per animation frame.  

For more details and ongoing discussions, see:  

- [Batching PDOM changes](https://github.com/phetsims/scenery/issues/663)

## Next Steps for Understanding

For developer-related questions or issues, please reach out to **@jessegreenberg** or **@zepumph**, and update this
document as needed to assist future developers. Additionally, **@terracoda** is a great resource for questions regarding
ARIA and web accessibility.

### PhET Published Resources

- [Screen Reader Support for a Complex Interactive Science Simulation](https://drive.google.com/file/d/0B44Uycdx6JGdRFpXcDJqZl9BUk0/view)  
- [Description Strategies to Make an Interactive Science Simulation Accessible](http://scholarworks.csun.edu/handle/10211.3/190214)  

### Source Code

For up-to-date documentation and the latest API details for accessibility in Scenery, see
the [ParallelDOM.js source code](https://github.com/phetsims/scenery/blob/main/js/accessibility/pdom/ParallelDOM.js).

Good luck and happy coding! 🚀

## Voicing

### Introduction

**Voicing** is an accessibility feature developed by PhET that enables speech output directly from the browser, without
relying on third-party screen-reading software. Speech is generated
using [Speech Synthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis), making it accessible to
users who may benefit from spoken content but do not use or have access to traditional screen readers.

While primarily designed to describe interactive content, Voicing has potential applications beyond accessibility.

Speech output is generally triggered in response to **user input**, and the API is designed to support this interaction
model. Voicing content can be defined on a **node-by-node** basis, allowing interactive components within a Scenery
application to generate speech as needed.

### Responses

Voicing content is categorized into **Responses**, which shape the API design.

- **Name Response:** The label for the component using Voicing, similar to an "Accessible Name" in digital accessibility.  
- **Object Response:** The state information related to the component, typically describing the object receiving input.  
- **Context Response:** Describes the result of an interaction that affects the broader application state, rather than just the component itself.  
- **Hint Response:** Provides guidance on how to interact with the component using Voicing.  

#### Example

For a **Scenery object representing a magnet**, the assigned responses might be:

- **Name Response:** Magnet  
- **Object Response:** Weak strength.  
- **Context Response:** Creating a weak magnetic field for other magnetic objects.  
- **Hint Response:** Move me to modify the magnetic field.

As shown in this example:  

- **Name Response** labels the component.  
- **Object Response** describes the component’s state.  
- **Context Response** explains its impact on the surrounding application.  
- **Hint Response** provides guidance on how to interact with the component.  

### Responses Implemented with `Voicing.ts`

Voicing is implemented as a **trait** called `Voicing.ts`, which can be composed with Scenery’s `Node`.  
This trait allows setting different responses on a `Node` and making a request to **speak one or more of them**.  
The API of `Voicing.ts` is described in more detail later in this document.  

### Responses Collected with `responseCollector.js`

The flow of responses is managed by a **singleton** called `responseCollector.js`.  

- Responses of a specific type can be **globally enabled or disabled**, allowing user preferences to control verbosity.  
- This enables applications to **toggle certain responses** if they are too verbose or unhelpful.  
- `responseCollector.js` maintains **Properties** that manage response states and contains **utility functions** for assembling final Voicing content based on these states.  

## Voicing.ts API

The following enumerates the `Voicing.ts` API.

### `voicingNameResponse`

A getter/setter for the `{string|null}` name response for the `Node`.

### `voicingObjectResponse`

A getter/setter for the `{string|null}` object response for the `Node`.

### `voicingContextResponse`

A getter/setter for the `{string|null}` context response for the `Node`.

### `voicingHintResponse`

A getter/setter for the `{string|null}` hint response for the `Node`.

### `voicingUtterance`

A getter/setter for the `{Utterance|null}` used to speak Voicing content.

By default, a unique `Utterance` is created and assigned when using the Voicing trait. This allows speech output to leverage the **UtteranceQueue**, ensuring that an Utterance is not announced until it has "stabilized." If multiple responses are triggered rapidly, **only the last response will be spoken**.

To override this behavior, you can assign a custom `Utterance` to the `Node`.

### `voicingUtteranceQueue`

A getter/setter for the `{UtteranceQueue|null}` used to manage Voicing content.  

By default, a global singleton called `voicingUtteranceQueue.js` is used to handle speech output. However, you can assign a different or multiple `UtteranceQueue`s if more control over speech behavior is needed.

### `voicingSpeakFullResponse`

A function that requests speech for **all responses** associated with the `Node`.  
Only responses **enabled** by `responseCollector.js` will be spoken. Typically, this is called in response to user input or application state changes.

### `voicingSpeakResponse`

A function that speaks **only the specified responses**, as determined by options.  
Only responses **enabled** by `responseCollector.js` will be spoken. Typically, this is called in response to user input or application state changes.

### `voicingSpeakNameResponse`

A function that speaks **only the name response**.  
Only responses **enabled** by `responseCollector.js` will be spoken. Typically, this is called in response to user input or application state changes.

### `voicingSpeakObjectResponse`

A function that speaks **only the object response**.  
Only responses **enabled** by `responseCollector.js` will be spoken. Typically, this is called in response to user input or application state changes.

### `voicingSpeakContextResponse`

A function that speaks **only the context response**.  
Only responses **enabled** by `responseCollector.js` will be spoken. Typically, this is called in response to user input or application state changes.

### `voicingSpeakHintResponse`

A function that speaks **only the hint response**.  
Only responses **enabled** by `responseCollector.js` will be spoken. Typically, this is called in response to user input or application state changes.

### `voicingFocusListener`

A function called whenever the `Node` that mixes `Voicing` receives focus.  
By default, **every response except the context response** is spoken on focus, but this behavior can be overridden if necessary.

### `voicingIgnoreVoicingManagerProperties`

A `{boolean}` getter/setter that determines whether **voicingManager Properties** are applied when making speech requests.  

- If `true`, **voicingManager Properties are ignored**, and all responses will be spoken regardless of settings.  
- If `false`, **voicingManager Properties control which responses are spoken**.

### `voicingResponsePatternCollection`

Sets the **collection of patterns** to use for `voicingManager.collectResponses`.  
This allows control over:  
- The **order** of responses in `Voicing.ts`  
- **Punctuation and formatting** of spoken content  

For more details or to create custom patterns, see `ResponsePatternCollection.js`.

---

## Code Examples

### Simple Example

The following illustrates a **basic example** of using `Voicing.ts` with a `Node`.  
Click the **Rectangle** to hear speech.

<div id="voicing-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-accessibility/voicing-example.js"></script>

### Controlled Responses

The following is a **more advanced example** that demonstrates direct control over spoken responses.  

In this example, you can **drag the rectangle** within the bounds:  
- **On pickup**, the **name response** is spoken.  
- **On release**, the **horizontal position (object response)** is spoken.  

This example also demonstrates **enabling/disabling the object response globally** using a checkbox.

<div>
  <input type="checkbox" id="object-responses" name="object-responses"
         checked>
  <label for="object-responses">Object Responses</label>
</div>

<div id="controlled-responses-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-accessibility/controlled-responses-example.js"></script>

## Reading Blocks

**Reading Blocks** are `Nodes` that use **Voicing**, but with special behavior and a common set of Voicing options.  
They are typically used for **graphical objects that are not otherwise interactive**, but still contain Voicing content (e.g., `Text`).  

### Characteristics of Reading Blocks:
- **Unique focus highlight** to indicate they can be clicked to hear Voicing content.  
- **Added to the focus order** when Voicing is enabled.  
- **Special highlight** appears around the content while it is being spoken.  

Reading Blocks are implemented as a **trait** called `ReadingBlock.ts`, which **extends** `Voicing.ts`.  
Since `ReadingBlock.ts` is a trait, it can be used with Scenery `Node`s.

## Mouse Highlighting

The **Voicing** feature supports **highlights that appear on mouse hover**.  
This highlights elements that **can receive input**, either because they are **naturally interactive** or because they support **Voicing content**, like **Reading Blocks**.

### Implementation:
Mouse Highlighting is handled by the **`InteractiveHighlighting.js`** trait, which can be composed with Scenery `Node`s.

- `InteractiveHighlighting.js` adds an **input listener** to activate the Display’s **FocusOverlay** when a highlight should be shown.  
- Since **`InteractiveHighlighting.js` is extended by `Voicing.ts`**, **all Nodes using Voicing automatically support Mouse Highlighting**.

## Other Guides

See our [Accessibility Guides](https://scenerystack.org/accessibility/a11y_guides/) for more information on accessibility in Scenery.
This contains information from the [PhET Accessibility Team](https://phet.colorado.edu/en/about/accessibility), and may be relevant to your work.
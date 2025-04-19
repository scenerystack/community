--8<-- "api-reference-snippets.md"

# Scenery Accessibility Basics

## Overview

This is a quick guide for adding basic screen reader accessibility to a SceneryStack application.

This guide covers critical screen reader accessibility features, including:

- Making a scenery Node accessible
- Traversal order for accessible content
- Accessible names for interactive objects
- Accessible help text for interactive objects
- Screen summary information
- Descriptions for non-interactive visual content
- Alerts for real-time feedback.

These features significantly improve an application's accessibility. This guide introduces the fundamental options and
tools for the implementation. Refer to the source code documentation for more detailed information.

TODO: Can SceneryStack developers refer to source code? 

## Getting Started

TODO: What should go here? How does one enable accessibility in their app (equivalent to package.json)

## Testing

To test, run your application with a screen reader. For details on installing and using screen readers, see our
[accessibility resources](../../accessibility/a11y_guides/#how-to-use-screen-readers).

Accessible elements can be found in the DOM. You can inspect the page to find accessible content.

!!! note
    In the future, there may be better debugging and visualization tools for the accessible content.

## Making a Node Accessible

Scenery Nodes support accessibility through the ParallelDOM. To create accessible content for a Node, use `tagName`

```ts
const node = new Node( { tagName: 'button' } );
```

Form-like elements (such as `button` and `input` ) are automatically added to the traversal order.
To manually control whether a Node is in the traversal order, you can use `focusable`.

```ts
const node = new Node( { tagName: 'div', focusable: 'true' } );
```

## Traversal Order

The traversal order includes the tab navigation order and the reading order for a screen reader. By default,
Scenery uses the scene graph to order the accessible content. That usually works well for layout containers.
For more complicated scenes you can control the order with `pdomOrder`.

```ts
const a = new Node( { tagName: 'button' } );
const b = new Node( { tagName: 'button' } );
const c = new Node( { tagName: 'button' } );

// Add children to the scene
scene.children = [ a, b, c ];

// Sets the order of accessible content in the scene.
scene.pdomOrder = [ c, b, a ];
```

Use `pdomOrder` to define the navigation order for both focusable and non-focusable elements. This ensures that items
using `accessibleParagraph` or `accessibleHeading` appear in the correct reading sequence and follow a logical structure in
the DOM.

## Screen Summary

The screen summary outlines important information about your application and its current state, such as

- Descriptions about the application play area.
- Descriptions about controls that are available on the screen.
- Current details describing the current state of the simulation.
- Interaction hints to guide the user toward using the sim.

TODO: How can SceneryStack developers find more information about ScreenSummaryContent? 

Use `ScreenSummaryContent.ts` in joist to implement the screen summary.

TODO: Do SceneryStack developers use ScreenView?

If you are using ScreenView.js in joist, provide the ScreenSummaryContent as an option to ScreenView.
Otherwise, `ScreenSummaryContent` extends Node and can be added to your scene graph.
Put it where you wish in the reading order with `pdomOrder`.

## Basic Options

The most fundamental options for accessibility are

- `accessibleName`
- `accessibleHelpText`
- `accessibleParagraph`
- `accessibleHeading`
- `accessibleRoleDescription`

There are many more options available for screen reader accessibility. See ParallelDOM.ts source for documentation. 

### accessibleName and accessibleHelpText

Each interactive component needs to have an `accessibleName`, which is how screen readers identify the UI element. Some
components may benefit from `accessibleHelpText`, which explains how to use the UI component or give the user more context.

For components that can be found in SceneryStack libraries like sun and scenery-phet, these can be set easily as options or via setters:

```ts
const myCheckBox = new Checkbox( checkedProperty, {
  accessibleName: myAccessibleNameStringProperty,
  accessibleHelpText: myAccessibleHelpTextStringProperty
} );
```

!!! note
    We are working to add support for these options. Not all components implement `accessibleName` and `accessibleHelpText` yet.

For custom interactive components, you need to also provide a `tagName` to enable accessibility. If the component is in the
traversal order, make it `focusable: true`.

```ts
const interactiveCircle = new Circle( 25, {
  tagName: 'div',
  focusable: true,
  accessibleName: myAccessibleNameStringProperty,
  accessibleHelpText: myAccessibleHelpTextStringProperty
} );
```

### accessibleParagraph

Use `accessibleParagraph` to describe non-interactive graphical content (images, graphs, text, etc.).

```ts
const myImage = new Image( imageData, {
  accessibleParagraph: myAccessibleParagraphStringProperty
} );
```

### accessibleHeading

Use `accessibleHeading` to define headings within the simulation. Headings help users navigate sections easily and
maintain accessible structure. Scenery automatically determines the heading level based on the scene graph and
`pdomOrder`.

```ts
const controlsContainer = new VBox( {
  children: controls,
  accessibleHeading: accessibleHeadingStringProperty
} ); 
```

### accessibleRoleDescription

Certain components benefit from a custom role description, which explains their purpose and how to interact with them.
You can set it with the option `accessibleRoleDescription`:

```ts
const movableCircle = new Circle( 5, {
  accessibleRoleDescription: 'movable',

  tagName: 'div',
  focusable: true,
  accessibleName: 'Circle'
} );
```

## Alerts
 
You can alert important information that will be read to the user regardless of where
their focus is in the page. This is useful for real-time feedback.

Alerts are made through a Node with `addAccessibleResponse`. The alert will only be spoken
if the Node is visible and added to a Display.

```ts
import RectangularPushButton from './RectangularPushButton.js';

const button = new RectangularPushButton( {
  listener: () => {
    button.addAccessibleResponse( 'You just pressed a button.' );
  }
} );
```
# ParallelDOM

## Overview

A superclass for Node, adding accessibility by defining content for the Parallel DOM. Please note that Node and
ParallelDOM are closely intertwined, though they are separated into separate files in the type hierarchy.

The Parallel DOM is an HTML structure that provides semantics for assistive technologies. For web content to be
accessible, assistive technologies require HTML markup, which is something that pure graphical content does not
include. This adds the accessible HTML content for any Node in the scene graph.

Any Node can have pdom content, but they have to opt into it. The structure of the pdom content will
match the structure of the scene graph.

Say we have the following scene graph:

  A
 / \
B   C
   / \
  D   E
       \
        F

And say that nodes A, B, C, D, and F specify pdom content for the DOM.  Scenery will render the pdom
content like so:

&lt;div id="node-A"&gt;
  &lt;div id="node-B"&gt;&lt;/div&gt;
  &lt;div id="node-C"&gt;
    &lt;div id="node-D"&gt;&lt;/div&gt;
    &lt;div id="node-F"&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

In this example, each element is represented by a div, but any HTML element could be used. Note that in this example,
node E did not specify pdom content, so node F was added as a child under node C.  If node E had specified
pdom content, content for node F would have been added as a child under the content for node E.

--------------------------------------------------------------------------------------------------------------------
#BASIC EXAMPLE

In a basic example let's say that we want to make a Node an unordered list. To do this, add the `tagName` option to
the Node, and assign it to the string "ul". Here is what the code could look like:

var myUnorderedList = new Node( { tagName: 'ul' } );

To get the desired list html, we can assign the `li` `tagName` to children Nodes, like:

var listItem1 = new Node( { tagName: 'li' } );
myUnorderedList.addChild( listItem1 );

Now we have a single list element in the unordered list. To assign content to this &lt;li&gt;, use the `innerContent`
option (all of these Node options have getters and setters, just like any other Node option):

listItem1.innerContent = 'I am list item number 1';

The above operations will create the following PDOM structure (note that actual ids will be different):

&lt;ul id='myUnorderedList'&gt;
  &lt;li&gt;I am a list item number 1&lt;/li&gt;
&lt;/ul

--------------------------------------------------------------------------------------------------------------------
#DOM SIBLINGS

The API in this class allows you to add additional structure to the accessible DOM content if necessary. Each node
can have multiple DOM Elements associated with it. A Node can have a label DOM element, and a description DOM element.
These are called siblings. The Node's direct DOM element (the DOM element you create with the `tagName` option)
is called the "primary sibling." You can also have a container parent DOM element that surrounds all of these
siblings. With three siblings and a container parent, each Node can have up to 4 DOM Elements representing it in the
PDOM. Here is an example of how a Node may use these features:

&lt;div&gt;
  &lt;label for="myInput"&gt;This great label for input&lt;/label
  &lt;input id="myInput"/&gt;
  &lt;p&gt;This is a description for the input&lt;/p&gt;
&lt;/div&gt;

Although you can create this structure with four nodes (`input` A, `label B, and `p` C children to `div` D),
this structure can be created with one single Node. It is often preferable to do this to limit the number of new
Nodes that have to be created just for accessibility purposes. To accomplish this we have the following Node code.

new Node( {
 tagName: 'input'
 labelTagName: 'label',
 labelContent: 'This great label for input'
 descriptionTagName: 'p',
 descriptionContent: 'This is a description for the input',
 containerTagName: 'div'
});

A few notes:
1. Only the primary sibling (specified by tagName) is focusable. Using a focusable element through another element
   (like labelTagName) will result in buggy behavior.
2. Notice the names of the content setters for siblings parallel the `innerContent` option for setting the primary
   sibling.
3. To make this example actually work, you would need the `inputType` option to set the "type" attribute on the `input`.
4. When you specify the  &lt;label&gt; tag for the label sibling, the "for" attribute is automatically added to the sibling.
5. Finally, the example above doesn't utilize the default tags that we have in place for the parent and siblings.
     default labelTagName: 'p'
     default descriptionTagName: 'p'
     default containerTagName: 'div'
   so the following will yield the same PDOM structure:

   new Node( {
    tagName: 'input',
    labelTagName: 'label',
    labelContent: 'This great label for input'
    descriptionContent: 'This is a description for the input',
   });

The ParallelDOM class is smart enough to know when there needs to be a container parent to wrap multiple siblings,
it is not necessary to use that option unless the desired tag name is  something other than 'div'.

--------------------------------------------------------------------------------------------------------------------
#Input listeners
ParallelDOM is the primary way we listen to keyboard events in scenery. See TInputListener for supported keyboard
events that you can add. Note that the input events from the DOM that your ParallelDOM instance will receive is
dependent on what the DOM Element is (see tagName).

NOTE: Be VERY careful about mutating ParallelDOM content in input listeners, this can result in events being dropped.
For example, if you press enter on a 'button', you would expect a keydown event followed by a click event, but if the
keydown listener changes the tagName to 'div', the click event will not occur.
--------------------------------------------------------------------------------------------------------------------

For additional accessibility options, please see the options listed in ACCESSIBILITY_OPTION_KEYS. To understand the
PDOM more, see PDOMPeer, which manages the DOM Elements for a Node. For more documentation on Scenery, Nodes,
and the scene graph, please see http://phetsims.github.io/scenery/

@author Jesse Greenberg (PhET Interactive Simulations)
@author Sam Reid (PhET Interactive Simulations)
@author Michael Kauzmann (PhET Interactive Simulations)

## Class ParallelDOM {: #ParallelDOM }


```js
import { ParallelDOM } from 'scenerystack/scenery';
```
### Constructor

#### new ParallelDOM( options? : <span style="font-weight: 400;">[PhetioObjectOptions](../tandem/PhetioObject.md#PhetioObjectOptions)</span> ) {: #ParallelDOM-constructor data-toc-label='new ParallelDOM' }

### Instance Methods

#### isFocused() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isFocused data-toc-label='isFocused' }

Get whether this Node's primary DOM element currently has focus.

#### focus() {: #focus data-toc-label='focus' }

Focus this Node's primary dom element. The element must not be hidden, and it must be focusable. If the Node
has more than one instance, this will fail because the DOM element is not uniquely defined. If accessibility
is not enabled, this will be a no op. When ParallelDOM is more widely used, the no op can be replaced
with an assertion that checks for pdom content.

#### blur() {: #blur data-toc-label='blur' }

Remove focus from this Node's primary DOM element.  The focus highlight will disappear, and the element will not receive
keyboard events when it doesn't have focus.

#### pdomAudit() {: #pdomAudit data-toc-label='pdomAudit' }

Called when assertions are enabled and once the Node has been completely constructed. This is the time to
make sure that options are set up the way they are expected to be. For example. you don't want accessibleName
and labelContent declared.
(only called by Screen.js)

#### setAccessibleName( accessibleName : <span style="font-weight: 400;">[PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setAccessibleName data-toc-label='setAccessibleName' }

Sets the accessible name that describes this Node. The accessible name is the semantic title for the Node. It is
the content that will be read by a screen reader when the Node is discovered by the virtual cursor.

For more information about accessible names in web accessibility see
https://developer.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/.

Part of the higher level API, the accessibleNameBehavior function will set the appropriate options on this Node
to create the desired accessible name. See the documentation for setAccessibleNameBehavior() for more information.

#### getAccessibleName() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getAccessibleName data-toc-label='getAccessibleName' }

Get the accessible name that describes this Node.

#### setAccessibleParagraph( accessibleParagraph : <span style="font-weight: 400;">[PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setAccessibleParagraph data-toc-label='setAccessibleParagraph' }

Sets this Node as a paragraph with the provided content. This lets you easily describe Nodes for screen readers. This
is most useful for non-interactive elements that need to be described.

myImageNode.setAccessibleParagraph( 'This is a picture of a cat' );

This is part of the "Higher level API", but there is no customizing behavior function for this function.

#### getAccessibleParagraph() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getAccessibleParagraph data-toc-label='getAccessibleParagraph' }

Get the accessible paragraph that represents/describe.

#### removeFromPDOM() {: #removeFromPDOM data-toc-label='removeFromPDOM' }

Remove this Node from the PDOM by clearing its pdom content. This can be useful when creating icons from
pdom content.

#### setAccessibleNameBehavior( accessibleNameBehavior : <span style="font-weight: 400;">[PDOMBehaviorFunction](../scenery/ParallelDOM.md#PDOMBehaviorFunction)</span> ) {: #setAccessibleNameBehavior data-toc-label='setAccessibleNameBehavior' }

accessibleNameBehavior is a function that will set the appropriate options on this Node to get the desired
accessible name.

The default value does the best it can to create an accessible name for a variety of different ParallelDOM
options and tag names. If a Node uses more complicated markup, you can provide your own function to
meet your requirements. If you do this, it is up to you to make sure that the Accessible Name is properly
being set and conveyed to AT, as it is very hard to validate this function.

#### getAccessibleNameBehavior() : <span style="font-weight: 400;">[PDOMBehaviorFunction](../scenery/ParallelDOM.md#PDOMBehaviorFunction)</span> {: #getAccessibleNameBehavior data-toc-label='getAccessibleNameBehavior' }

Get the help text of the interactive element.

#### setPDOMHeading( pdomHeading : <span style="font-weight: 400;">[PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setPDOMHeading data-toc-label='setPDOMHeading' }

Set the Node heading content. This by default will be a heading tag whose level is dependent on how many parents
Nodes are heading Nodes. See computeHeadingLevel() for more info

@experimental - NOTE: use with caution, a11y team reserves the right to change API (though unlikely).
                Not yet fully implemented, see https://github.com/phetsims/scenery/issues/867

#### getPDOMHeading() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getPDOMHeading data-toc-label='getPDOMHeading' }

Get the value of this Node's heading. Use null to clear the heading

@experimental - NOTE: use with caution, a11y team reserves the right to change API (though unlikely).
                Not yet fully implemented, see https://github.com/phetsims/scenery/issues/867

#### setPDOMHeadingBehavior( pdomHeadingBehavior : <span style="font-weight: 400;">[PDOMBehaviorFunction](../scenery/ParallelDOM.md#PDOMBehaviorFunction)</span> ) {: #setPDOMHeadingBehavior data-toc-label='setPDOMHeadingBehavior' }

Set the behavior of how `this.pdomHeading` is set in the PDOM. See default behavior function for more
information.

@experimental - NOTE: use with caution, a11y team reserves the right to change API (though unlikely).
                Not yet fully implemented, see https://github.com/phetsims/scenery/issues/867

#### getPDOMHeadingBehavior() : <span style="font-weight: 400;">[PDOMBehaviorFunction](../scenery/ParallelDOM.md#PDOMBehaviorFunction)</span> {: #getPDOMHeadingBehavior data-toc-label='getPDOMHeadingBehavior' }

Get the help text of the interactive element.

@experimental - NOTE: use with caution, a11y team reserves the right to change API (though unlikely).
                Not yet fully implemented, see https://github.com/phetsims/scenery/issues/867

#### getHeadingLevel() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getHeadingLevel data-toc-label='getHeadingLevel' }

Get the tag name of the DOM element representing this Node for accessibility.

@experimental - NOTE: use with caution, a11y team reserves the right to change API (though unlikely).
                Not yet fully implemented, see https://github.com/phetsims/scenery/issues/867

#### setHelpText( helpText : <span style="font-weight: 400;">[PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setHelpText data-toc-label='setHelpText' }

Sets the help text for this Node. Help text usually provides additional information that describes what a Node
is or how to interact with it. It will be read by a screen reader when discovered by the virtual cursor.

Part of the higher level API, the helpTextBehavior function will set the appropriate options on this Node
to create the desired help text. See the documentation for setHelpTextBehavior() for more information.

#### getHelpText() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getHelpText data-toc-label='getHelpText' }

Get the help text for this Node.

#### setHelpTextBehavior( helpTextBehavior : <span style="font-weight: 400;">[PDOMBehaviorFunction](../scenery/ParallelDOM.md#PDOMBehaviorFunction)</span> ) {: #setHelpTextBehavior data-toc-label='setHelpTextBehavior' }

helpTextBehavior is a function that will set the appropriate options on this Node to get the desired help text.

The default value does the best it can to create the help text based on the values for other ParallelDOM options.
Usually, this is a paragraph element that comes after the Node's primary sibling in the PDOM. If you need to
customize this behavior, you can provide your own function to meet your requirements. If you provide your own
function, it is up to you to make sure that the help text is properly being set and is discoverable by AT.

#### getHelpTextBehavior() : <span style="font-weight: 400;">[PDOMBehaviorFunction](../scenery/ParallelDOM.md#PDOMBehaviorFunction)</span> {: #getHelpTextBehavior data-toc-label='getHelpTextBehavior' }

Get the help text of the interactive element.

#### setTagName( tagName : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setTagName data-toc-label='setTagName' }

Set the tag name for the primary sibling in the PDOM. DOM element tag names are read-only, so this
function will create a new DOM element each time it is called for the Node's PDOMPeer and
reset the pdom content.

This is the "entry point" for Parallel DOM content. When a Node has a tagName it will appear in the Parallel DOM
and other attributes can be set. Without it, nothing will appear in the Parallel DOM.

#### getTagName() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getTagName data-toc-label='getTagName' }

Get the tag name of the DOM element representing this Node for accessibility.

#### setLabelTagName( tagName : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setLabelTagName data-toc-label='setLabelTagName' }

Set the tag name for the accessible label sibling for this Node. DOM element tag names are read-only,
so this will require creating a new PDOMPeer for this Node (reconstructing all DOM Elements). If
labelContent is specified without calling this method, then the DEFAULT_LABEL_TAG_NAME will be used as the
tag name for the label sibling. Use null to clear the label sibling element from the PDOM.

#### getLabelTagName() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getLabelTagName data-toc-label='getLabelTagName' }

Get the label sibling HTML tag name.

#### setDescriptionTagName( tagName : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setDescriptionTagName data-toc-label='setDescriptionTagName' }

Set the tag name for the description sibling. HTML element tag names are read-only, so this will require creating
a new HTML element, and inserting it into the DOM. The tag name provided must support
innerHTML and textContent. If descriptionContent is specified without this option,
then descriptionTagName will be set to DEFAULT_DESCRIPTION_TAG_NAME.

Passing 'null' will clear away the description sibling.

#### getDescriptionTagName() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getDescriptionTagName data-toc-label='getDescriptionTagName' }

Get the HTML tag name for the description sibling.

#### setInputType( inputType : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setInputType data-toc-label='setInputType' }

Sets the type for an input element.  Element must have the INPUT tag name. The input attribute is not
specified as readonly, so invalidating pdom content is not necessary.

#### getInputType() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getInputType data-toc-label='getInputType' }

Get the input type. Input type is only relevant if this Node's primary sibling has tag name "INPUT".

#### setAppendLabel( appendLabel : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setAppendLabel data-toc-label='setAppendLabel' }

By default the label will be prepended before the primary sibling in the PDOM. This
option allows you to instead have the label added after the primary sibling. Note: The label will always
be in front of the description sibling. If this flag is set with `appendDescription`, the order will be

&lt;container&gt;
  &lt;primary sibling/&gt;
  &lt;label sibling/&gt;
  &lt;description sibling/&gt;
&lt;/container&gt;

#### getAppendLabel() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #getAppendLabel data-toc-label='getAppendLabel' }

Get whether the label sibling should be appended after the primary sibling.

#### setAppendDescription( appendDescription : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setAppendDescription data-toc-label='setAppendDescription' }

By default the label will be prepended before the primary sibling in the PDOM. This
option allows you to instead have the label added after the primary sibling. Note: The label will always
be in front of the description sibling. If this flag is set with `appendLabel`, the order will be

&lt;container&gt;
  &lt;primary sibling/&gt;
  &lt;label sibling/&gt;
  &lt;description sibling/&gt;
&lt;/container&gt;

#### getAppendDescription() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #getAppendDescription data-toc-label='getAppendDescription' }

Get whether the description sibling should be appended after the primary sibling.

#### setContainerTagName( tagName : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setContainerTagName data-toc-label='setContainerTagName' }

Set the container parent tag name. By specifying this container parent, an element will be created that
acts as a container for this Node's primary sibling DOM Element and its label and description siblings.
This containerTagName will default to DEFAULT_LABEL_TAG_NAME, and be added to the PDOM automatically if
more than just the primary sibling is created.

For instance, a button element with a label and description will be contained like the following
if the containerTagName is specified as 'section'.

&lt;section id='parent-container-trail-id'&gt;
  &lt;button&gt;Press me!&lt;/button&gt;
  &lt;p&gt;Button label&lt;/p&gt;
  &lt;p&gt;Button description&lt;/p&gt;
&lt;/section&gt;

#### getContainerTagName() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getContainerTagName data-toc-label='getContainerTagName' }

Get the tag name for the container parent element.

#### setLabelContent( labelContent : <span style="font-weight: 400;">[PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setLabelContent data-toc-label='setLabelContent' }

Set the content of the label sibling for the this Node.  The label sibling will default to the value of
DEFAULT_LABEL_TAG_NAME if no `labelTagName` is provided. If the label sibling is a `LABEL` html element,
then the `for` attribute will automatically be added, pointing to the Node's primary sibling.

This method supports adding content in two ways, with HTMLElement.textContent and HTMLElement.innerHTML.
The DOM setter is chosen based on if the label passes the `containsFormattingTags`.

Passing a null label value will not clear the whole label sibling, just the inner content of the DOM Element.

#### getLabelContent() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getLabelContent data-toc-label='getLabelContent' }

Get the content for this Node's label sibling DOM element.

#### setInnerContent( innerContent : <span style="font-weight: 400;">[PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setInnerContent data-toc-label='setInnerContent' }

Set the inner content for the primary sibling of the PDOMPeers of this Node. Will be set as textContent
unless content is html which uses exclusively formatting tags. A Node with inner content cannot
have accessible descendants because this content will override the HTML of descendants of this Node.

#### getInnerContent() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getInnerContent data-toc-label='getInnerContent' }

Get the inner content, the string that is the innerHTML or innerText for the Node's primary sibling.

#### setDescriptionContent( descriptionContent : <span style="font-weight: 400;">[PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setDescriptionContent data-toc-label='setDescriptionContent' }

Set the description content for this Node's primary sibling. The description sibling tag name must support
innerHTML and textContent. If a description element does not exist yet, a default
DEFAULT_LABEL_TAG_NAME will be assigned to the descriptionTagName.

#### getDescriptionContent() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getDescriptionContent data-toc-label='getDescriptionContent' }

Get the content for this Node's description sibling DOM Element.

#### setAriaRole( ariaRole : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setAriaRole data-toc-label='setAriaRole' }

Set the ARIA role for this Node's primary sibling. According to the W3C, the ARIA role is read-only for a DOM
element.  So this will create a new DOM element for this Node with the desired role, and replace the old
element in the DOM. Note that the aria role can completely change the events that fire from an element,
especially when using a screen reader. For example, a role of `application` will largely bypass the default
behavior and logic of the screen reader, triggering keydown/keyup events even for buttons that would usually
only receive a "click" event.

@param ariaRole - role for the element, see
                           https://www.w3.org/TR/html-aria/#allowed-aria-roles-states-and-properties
                           for a list of roles, states, and properties.

#### getAriaRole() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getAriaRole data-toc-label='getAriaRole' }

Get the ARIA role representing this Node.

#### setContainerAriaRole( ariaRole : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setContainerAriaRole data-toc-label='setContainerAriaRole' }

Set the ARIA role for this Node's container parent element.  According to the W3C, the ARIA role is read-only
for a DOM element. This will create a new DOM element for the container parent with the desired role, and
replace it in the DOM.

@param ariaRole - role for the element, see
                           https://www.w3.org/TR/html-aria/#allowed-aria-roles-states-and-properties
                           for a list of roles, states, and properties.

#### getContainerAriaRole() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getContainerAriaRole data-toc-label='getContainerAriaRole' }

Get the ARIA role assigned to the container parent element.

#### setAriaValueText( ariaValueText : <span style="font-weight: 400;">[PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setAriaValueText data-toc-label='setAriaValueText' }

Set the aria-valuetext of this Node independently from the changing value, if necessary. Setting to null will
clear this attribute.

#### getAriaValueText() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getAriaValueText data-toc-label='getAriaValueText' }

Get the value of the aria-valuetext attribute for this Node's primary sibling. If null, then the attribute
has not been set on the primary sibling.

#### setPDOMNamespace( pdomNamespace : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setPDOMNamespace data-toc-label='setPDOMNamespace' }

Sets the namespace for the primary element (relevant for MathML/SVG/etc.)

For example, to create a MathML element:
{ tagName: 'math', pdomNamespace: 'http://www.w3.org/1998/Math/MathML' }

or for SVG:
{ tagName: 'svg', pdomNamespace: 'http://www.w3.org/2000/svg' }

@param pdomNamespace - Null indicates no namespace.

#### getPDOMNamespace() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getPDOMNamespace data-toc-label='getPDOMNamespace' }

Returns the accessible namespace (see setPDOMNamespace for more information).

#### setAriaLabel( ariaLabel : <span style="font-weight: 400;">[PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setAriaLabel data-toc-label='setAriaLabel' }

Sets the 'aria-label' attribute for labelling the Node's primary sibling. By using the
'aria-label' attribute, the label will be read on focus, but can not be found with the
virtual cursor. This is one way to set a DOM Element's Accessible Name.

@param ariaLabel - the text for the aria label attribute

#### getAriaLabel() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getAriaLabel data-toc-label='getAriaLabel' }

Get the value of the aria-label attribute for this Node's primary sibling.

#### setFocusHighlight( focusHighlight : <span style="font-weight: 400;">[Highlight](../scenery/Highlight.md)</span> ) {: #setFocusHighlight data-toc-label='setFocusHighlight' }

Set the focus highlight for this Node. By default, the focus highlight will be a pink rectangle that
surrounds the Node's local bounds.  If focus highlight is set to 'invisible', the Node will not have
any highlighting when it receives focus.

Use the local coordinate frame when drawing a custom highlight for this Node.

#### getFocusHighlight() : <span style="font-weight: 400;">[Highlight](../scenery/Highlight.md)</span> {: #getFocusHighlight data-toc-label='getFocusHighlight' }

Get the focus highlight for this Node.

#### setFocusHighlightLayerable( focusHighlightLayerable : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setFocusHighlightLayerable data-toc-label='setFocusHighlightLayerable' }

Setting a flag to break default and allow the focus highlight to be (z) layered into the scene graph.
This will set the visibility of the layered focus highlight, it will always be invisible until this Node has
focus.

#### getFocusHighlightLayerable() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #getFocusHighlightLayerable data-toc-label='getFocusHighlightLayerable' }

Get the flag for if this Node is layerable in the scene graph (or if it is always on top, like the default).

#### setGroupFocusHighlight( groupHighlight : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setGroupFocusHighlight data-toc-label='setGroupFocusHighlight' }

Set whether or not this Node has a group focus highlight. If this Node has a group focus highlight, an extra
focus highlight will surround this Node whenever a descendant Node has focus. Generally
useful to indicate nested keyboard navigation. If true, the group focus highlight will surround
this Node's local bounds. Otherwise, the Node will be used.

TODO: Support more than one group focus highlight (multiple ancestors could have groupFocusHighlight), see https://github.com/phetsims/scenery/issues/1608

#### getGroupFocusHighlight() : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #getGroupFocusHighlight data-toc-label='getGroupFocusHighlight' }

Get whether or not this Node has a 'group' focus highlight, see setter for more information.

#### setAriaLabelledbyAssociations( ariaLabelledbyAssociations : <span style="font-weight: 400;">[Association](../scenery/ParallelDOM.md#Association)[]</span> ) {: #setAriaLabelledbyAssociations data-toc-label='setAriaLabelledbyAssociations' }

Very similar algorithm to setChildren in Node.js
@param ariaLabelledbyAssociations - list of associationObjects, see this._ariaLabelledbyAssociations.

#### getAriaLabelledbyAssociations() : <span style="font-weight: 400;">[Association](../scenery/ParallelDOM.md#Association)[]</span> {: #getAriaLabelledbyAssociations data-toc-label='getAriaLabelledbyAssociations' }

#### addAriaLabelledbyAssociation( associationObject : <span style="font-weight: 400;">[Association](../scenery/ParallelDOM.md#Association)</span> ) {: #addAriaLabelledbyAssociation data-toc-label='addAriaLabelledbyAssociation' }

Add an aria-labelledby association to this Node. The data in the associationObject will be implemented like
"a peer's HTMLElement of this Node (specified with the string constant stored in `thisElementName`) will have an
aria-labelledby attribute with a value that includes the `otherNode`'s peer HTMLElement's id (specified with
`otherElementName`)."

There can be more than one association because an aria-labelledby attribute's value can be a space separated
list of HTML ids, and not just a single id, see https://www.w3.org/WAI/GL/wiki/Using_aria-labelledby_to_concatenate_a_label_from_several_text_nodes

#### removeAriaLabelledbyAssociation( associationObject : <span style="font-weight: 400;">[Association](../scenery/ParallelDOM.md#Association)</span> ) {: #removeAriaLabelledbyAssociation data-toc-label='removeAriaLabelledbyAssociation' }

Remove an aria-labelledby association object, see addAriaLabelledbyAssociation for more details

#### updateAriaLabelledbyAssociationsInPeers() {: #updateAriaLabelledbyAssociationsInPeers data-toc-label='updateAriaLabelledbyAssociationsInPeers' }

Trigger the view update for each PDOMPeer

#### getNodesThatAreAriaLabelledbyThisNode() : <span style="font-weight: 400;">[Node](../scenery/Node.md)[]</span> {: #getNodesThatAreAriaLabelledbyThisNode data-toc-label='getNodesThatAreAriaLabelledbyThisNode' }

The list of Nodes that are aria-labelledby this Node (other Node's peer element will have this Node's Peer element's
id in the aria-labelledby attribute

#### setAriaDescribedbyAssociations( ariaDescribedbyAssociations : <span style="font-weight: 400;">[Association](../scenery/ParallelDOM.md#Association)[]</span> ) {: #setAriaDescribedbyAssociations data-toc-label='setAriaDescribedbyAssociations' }

#### getAriaDescribedbyAssociations() : <span style="font-weight: 400;">[Association](../scenery/ParallelDOM.md#Association)[]</span> {: #getAriaDescribedbyAssociations data-toc-label='getAriaDescribedbyAssociations' }

#### addAriaDescribedbyAssociation( associationObject : <span style="font-weight: 400;">[Association](../scenery/ParallelDOM.md#Association)</span> ) {: #addAriaDescribedbyAssociation data-toc-label='addAriaDescribedbyAssociation' }

Add an aria-describedby association to this Node. The data in the associationObject will be implemented like
"a peer's HTMLElement of this Node (specified with the string constant stored in `thisElementName`) will have an
aria-describedby attribute with a value that includes the `otherNode`'s peer HTMLElement's id (specified with
`otherElementName`)."

There can be more than one association because an aria-describedby attribute's value can be a space separated
list of HTML ids, and not just a single id, see https://www.w3.org/WAI/GL/wiki/Using_aria-labelledby_to_concatenate_a_label_from_several_text_nodes

#### hasAriaDescribedbyAssociation( associationObject : <span style="font-weight: 400;">[Association](../scenery/ParallelDOM.md#Association)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasAriaDescribedbyAssociation data-toc-label='hasAriaDescribedbyAssociation' }

Is this object already in the describedby association list

#### removeAriaDescribedbyAssociation( associationObject : <span style="font-weight: 400;">[Association](../scenery/ParallelDOM.md#Association)</span> ) {: #removeAriaDescribedbyAssociation data-toc-label='removeAriaDescribedbyAssociation' }

Remove an aria-describedby association object, see addAriaDescribedbyAssociation for more details

#### updateAriaDescribedbyAssociationsInPeers() {: #updateAriaDescribedbyAssociationsInPeers data-toc-label='updateAriaDescribedbyAssociationsInPeers' }

Trigger the view update for each PDOMPeer

#### getNodesThatAreAriaDescribedbyThisNode() : <span style="font-weight: 400;">[Node](../scenery/Node.md)[]</span> {: #getNodesThatAreAriaDescribedbyThisNode data-toc-label='getNodesThatAreAriaDescribedbyThisNode' }

The list of Nodes that are aria-describedby this Node (other Node's peer element will have this Node's Peer element's
id in the aria-describedby attribute

#### setActiveDescendantAssociations( activeDescendantAssociations : <span style="font-weight: 400;">[Association](../scenery/ParallelDOM.md#Association)[]</span> ) {: #setActiveDescendantAssociations data-toc-label='setActiveDescendantAssociations' }

#### getActiveDescendantAssociations() : <span style="font-weight: 400;">[Association](../scenery/ParallelDOM.md#Association)[]</span> {: #getActiveDescendantAssociations data-toc-label='getActiveDescendantAssociations' }

#### addActiveDescendantAssociation( associationObject : <span style="font-weight: 400;">[Association](../scenery/ParallelDOM.md#Association)</span> ) {: #addActiveDescendantAssociation data-toc-label='addActiveDescendantAssociation' }

Add an aria-activeDescendant association to this Node. The data in the associationObject will be implemented like
"a peer's HTMLElement of this Node (specified with the string constant stored in `thisElementName`) will have an
aria-activeDescendant attribute with a value that includes the `otherNode`'s peer HTMLElement's id (specified with
`otherElementName`)."

#### removeActiveDescendantAssociation( associationObject : <span style="font-weight: 400;">[Association](../scenery/ParallelDOM.md#Association)</span> ) {: #removeActiveDescendantAssociation data-toc-label='removeActiveDescendantAssociation' }

Remove an aria-activeDescendant association object, see addActiveDescendantAssociation for more details

#### setPDOMOrder( pdomOrder : <span style="font-weight: 400;">( [Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> )[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setPDOMOrder data-toc-label='setPDOMOrder' }

Sets the PDOM/DOM order for this Node. This includes not only focused items, but elements that can be
placed in the Parallel DOM. If provided, it will override the focus order between children (and
optionally arbitrary subtrees). If not provided, the focus order will default to the rendering order
(first children first, last children last), determined by the children array. A Node must be connected to a scene
graph (via children) in order for pdomOrder to apply. Thus, `setPDOMOrder` cannot be used in exchange for
setting a Node as a child.

In the general case, when pdomOrder is specified, it's an array of Nodes, with optionally one
element being a placeholder for "the rest of the children", signified by null. This means that, for
accessibility, it will act as if the children for this Node WERE the pdomOrder (potentially
supplemented with other children via the placeholder).

For example, if you have the tree:
  a
    b
      d
      e
    c
      g
      f
        h

and we specify b.pdomOrder = [ e, f, d, c ], then the pdom structure will act as if the tree is:
 a
   b
     e
     f &lt;--- the entire subtree of `f` gets placed here under `b`, pulling it out from where it was before.
       h
     d
     c &lt;--- note that `g` is NOT under `c` anymore, because it got pulled out under b directly
       g

The placeholder (`null`) will get filled in with all direct children that are NOT in any pdomOrder.
If there is no placeholder specified, it will act as if the placeholder is at the end of the order.
The value `null` (the default) and the empty array (`[]`) both act as if the only order is the placeholder,
i.e. `[null]`.

Some general constraints for the orders are:
- Nodes must be attached to a Display (in a scene graph) to be shown in a pdom order.
- You can't specify a Node in more than one pdomOrder, and you can't specify duplicates of a value
  in a pdomOrder.
- You can't specify an ancestor of a Node in that Node's pdomOrder
  (e.g. this.pdomOrder = this.parents ).

Note that specifying something in a pdomOrder will effectively remove it from all of its parents for
the pdom tree (so if you create `tmpNode.pdomOrder = [ a ]` then toss the tmpNode without
disposing it, `a` won't show up in the parallel DOM). If there is a need for that, disposing a Node
effectively removes its pdomOrder.

See https://github.com/phetsims/scenery-phet/issues/365#issuecomment-381302583 for more information on the
decisions and design for this feature.

#### getPDOMOrder() : <span style="font-weight: 400;">( [Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> )[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getPDOMOrder data-toc-label='getPDOMOrder' }

Returns the pdom (focus) order for this Node.

Making changes to the returned array will not affect this Node's order. It returns a defensive copy.

#### hasPDOMOrder() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasPDOMOrder data-toc-label='hasPDOMOrder' }

Returns whether this Node has a pdomOrder that is effectively different than the default.

NOTE: `null`, `[]` and `[null]` are all effectively the same thing, so this will return true for any of
those. Usage of `null` is recommended, as it doesn't create the extra object reference (but some code
that generates arrays may be more convenient).

#### getPDOMParent() : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getPDOMParent data-toc-label='getPDOMParent' }

Returns our "PDOM parent" if available: the Node that specifies this Node in its pdomOrder.

#### setPdomVisibleProperty( newTarget : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setPdomVisibleProperty data-toc-label='setPdomVisibleProperty' }

Sets what Property our pdomVisibleProperty is backed by, so that changes to this provided Property will change this
Node's pdom visibility, and vice versa. This does not change this._pdomVisibleProperty. See TinyForwardingProperty.setTargetProperty()
for more info.

#### getPdomVisibleProperty() : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #getPdomVisibleProperty data-toc-label='getPdomVisibleProperty' }

Get this Node's pdomVisibleProperty. See Node.getVisibleProperty for more information

#### setPDOMVisible( visible : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setPDOMVisible data-toc-label='setPDOMVisible' }

Hide completely from a screen reader and the browser by setting the hidden attribute on the Node's
representative DOM element. If the sibling DOM Elements have a container parent, the container
should be hidden so that all PDOM elements are hidden as well.  Hiding the element will remove it from the focus
order.

#### isPDOMVisible() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isPDOMVisible data-toc-label='isPDOMVisible' }

Get whether or not this Node's representative DOM element is visible.

#### isPDOMDisplayed() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isPDOMDisplayed data-toc-label='isPDOMDisplayed' }

Returns true if any of the PDOMInstances for the Node are globally visible and displayed in the PDOM. A
PDOMInstance is globally visible if Node and all ancestors are pdomVisible. PDOMInstance visibility is
updated synchronously, so this returns the most up-to-date information without requiring Display.updateDisplay

#### setInputValue( inputValue : <span style="font-weight: 400;">[PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setInputValue data-toc-label='setInputValue' }

Set the value of an input element.  Element must be a form element to support the value attribute. The input
value is converted to string since input values are generally string for HTML.

#### getInputValue() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getInputValue data-toc-label='getInputValue' }

Get the value of the element. Element must be a form element to support the value attribute.

#### setPDOMChecked( checked : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setPDOMChecked data-toc-label='setPDOMChecked' }

Set whether or not the checked attribute appears on the dom elements associated with this Node's
pdom content.  This is only useful for inputs of type 'radio' and 'checkbox'. A 'checked' input
is considered selected to the browser and assistive technology.

#### getPDOMChecked() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #getPDOMChecked data-toc-label='getPDOMChecked' }

Get whether or not the pdom input is 'checked'.

#### getPDOMAttributes() : <span style="font-weight: 400;">PDOMAttribute[]</span> {: #getPDOMAttributes data-toc-label='getPDOMAttributes' }

Get an array containing all pdom attributes that have been added to this Node's primary sibling.

#### setPDOMAttributes( attributes : <span style="font-weight: 400;">PDOMAttribute[]</span> ) {: #setPDOMAttributes data-toc-label='setPDOMAttributes' }

Sets all of the attributes for this Node's accessible content at once. See setPDOMAttribute for more information.

Clears the old list of attributes before setting to this attribute list.

#### setPDOMAttribute( attribute : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, value : <span style="font-weight: 400;">[PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, providedOptions? : <span style="font-weight: 400;">SetPDOMAttributeOptions</span> ) {: #setPDOMAttribute data-toc-label='setPDOMAttribute' }

Set a particular attribute or property for this Node's primary sibling, generally to provide extra semantic information for
a screen reader.

@param attribute - string naming the attribute
@param value - the value for the attribute, if boolean, then it will be set as a javascript property on the HTMLElement rather than an attribute
@param [providedOptions]

#### removePDOMAttribute( attribute : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, providedOptions? : <span style="font-weight: 400;">RemovePDOMAttributeOptions</span> ) {: #removePDOMAttribute data-toc-label='removePDOMAttribute' }

Remove a particular attribute, removing the associated semantic information from the DOM element.

It is HIGHLY recommended that you never call this function from an attribute set with `type:'property'`, see
setPDOMAttribute for the option details.

@param attribute - name of the attribute to remove
@param [providedOptions]

#### removePDOMAttributes() {: #removePDOMAttributes data-toc-label='removePDOMAttributes' }

Remove all attributes from this Node's dom element.

#### hasPDOMAttribute( attribute : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, providedOptions? : <span style="font-weight: 400;">HasPDOMAttributeOptions</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasPDOMAttribute data-toc-label='hasPDOMAttribute' }

Remove a particular attribute, removing the associated semantic information from the DOM element.

@param attribute - name of the attribute to remove
@param [providedOptions]

#### setPDOMClass( className : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, providedOptions? : <span style="font-weight: 400;">SetPDOMClassOptions</span> ) {: #setPDOMClass data-toc-label='setPDOMClass' }

Add the class to the PDOM element's classList. The PDOM is generally invisible,
but some styling occasionally has an impact on semantics so it is necessary to set styles.
Add a class with this function and define the style in stylesheets (likely SceneryStyle).

#### removePDOMClass( className : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, providedOptions? : <span style="font-weight: 400;">RemovePDOMClassOptions</span> ) {: #removePDOMClass data-toc-label='removePDOMClass' }

Remove a class from the classList of one of the elements for this Node.

#### getPDOMClasses() : <span style="font-weight: 400;">PDOMClass[]</span> {: #getPDOMClasses data-toc-label='getPDOMClasses' }

Get the list of classes assigned to PDOM elements for this Node.

#### setFocusable( focusable : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setFocusable data-toc-label='setFocusable' }

Make the DOM element explicitly focusable with a tab index. Native HTML form elements will generally be in
the navigation order without explicitly setting focusable.  If these need to be removed from the navigation
order, call setFocusable( false ).  Removing an element from the focus order does not hide the element from
assistive technology.

@param focusable - null to use the default browser focus for the primary element

#### isFocusable() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isFocusable data-toc-label='isFocusable' }

Get whether or not the Node is focusable. Use the focusOverride, and then default to browser defined
focusable elements.

#### setPDOMTransformSourceNode( node : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setPDOMTransformSourceNode data-toc-label='setPDOMTransformSourceNode' }

Sets the source Node that controls positioning of the primary sibling. Transforms along the trail to this
Node are observed so that the primary sibling is positioned correctly in the global coordinate frame.

The transformSourceNode cannot use DAG for now because we need a unique trail to observe transforms.

By default, transforms along trails to all of this Node's PDOMInstances are observed. But this
function can be used if you have a visual Node represented in the PDOM by a different Node in the scene
graph but still need the other Node's PDOM content positioned over the visual Node. For example, this could
be required to catch all fake pointer events that may come from certain types of screen readers.

#### getPDOMTransformSourceNode() : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getPDOMTransformSourceNode data-toc-label='getPDOMTransformSourceNode' }

Get the source Node that controls positioning of the primary sibling in the global coordinate frame. See
setPDOMTransformSourceNode for more in depth information.

#### setFocusPanTargetBoundsProperty( boundsProperty : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Bounds2](../dot/Bounds2.md)&gt;</span> ) {: #setFocusPanTargetBoundsProperty data-toc-label='setFocusPanTargetBoundsProperty' }

Used by the animatedPanZoomSingleton. It will try to keep these bounds visible in the viewport when this Node
(or any ancestor) has a transform change while focused. This is useful if the bounds of your focusable
Node do not accurately surround the conceptual interactive component. If null, this Node's local bounds
are used.

At this time, the Property cannot be changed after it is set.

#### getFocusPanTargetBoundsProperty() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Bounds2](../dot/Bounds2.md)&gt;</span> {: #getFocusPanTargetBoundsProperty data-toc-label='getFocusPanTargetBoundsProperty' }

Returns the function for creating global bounds to keep in the viewport while the component has focus, see the
setFocusPanTargetBoundsProperty function for more information.

#### setLimitPanDirection( limitPanDirection : <span style="font-weight: 400;">[LimitPanDirection](../scenery/ParallelDOM.md#LimitPanDirection) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setLimitPanDirection data-toc-label='setLimitPanDirection' }

Sets the direction that the global AnimatedPanZoomListener will pan while interacting with this Node. Pan will ONLY
occur in this dimension. This is especially useful for panning to large Nodes where panning to the center of the
Node would move other Nodes out of the viewport.

Set to null for default behavior (panning in all directions).

#### getLimitPanDirection() : <span style="font-weight: 400;">[LimitPanDirection](../scenery/ParallelDOM.md#LimitPanDirection) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getLimitPanDirection data-toc-label='getLimitPanDirection' }

See setLimitPanDirection for more information.

#### setPositionInPDOM( positionInPDOM : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setPositionInPDOM data-toc-label='setPositionInPDOM' }

Sets whether the PDOM sibling elements are positioned in the correct place in the viewport. Doing so is a
requirement for custom gestures on touch based screen readers. However, doing this DOM layout is expensive so
only do this when necessary. Generally only needed for elements that utilize a "double tap and hold" gesture
to drag and drop.

Positioning the PDOM element will caused some screen readers to send both click and pointer events to the
location of the Node in global coordinates. Do not position elements that use click listeners since activation
will fire twice (once for the pointer event listeners and once for the click event listeners).

#### getPositionInPDOM() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #getPositionInPDOM data-toc-label='getPositionInPDOM' }

Gets whether or not we are positioning the PDOM sibling elements. See setPositionInPDOM().

#### setExcludeLabelSiblingFromInput() {: #setExcludeLabelSiblingFromInput data-toc-label='setExcludeLabelSiblingFromInput' }

This function should be used sparingly as a workaround. If used, any DOM input events received from the label
sibling will not be dispatched as SceneryEvents in Input.js. The label sibling may receive input by screen
readers if the virtual cursor is over it. That is usually fine, but there is a bug with NVDA and Firefox where
both the label sibling AND primary sibling receive events in this case, and both bubble up to the root of the
PDOM, and so we would otherwise dispatch two SceneryEvents instead of one.

See https://github.com/phetsims/a11y-research/issues/156 for more information.

#### isInsidePhetioArchetype( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isInsidePhetioArchetype data-toc-label='isInsidePhetioArchetype' }

Return true if this Node is a PhET-iO archetype or it is a Node descendant of a PhET-iO archetype.
See https://github.com/phetsims/joist/issues/817

#### alertDescriptionUtterance( utterance : <span style="font-weight: 400;">[TAlertable](../utterance-queue/Utterance.md#TAlertable)</span> ) {: #alertDescriptionUtterance data-toc-label='alertDescriptionUtterance' }

Alert on all interactive description utteranceQueues located on each connected Display. See
Node.getConnectedDisplays. Note that if your Node is not connected to a Display, this function will have
no effect.

#### forEachUtteranceQueue( callback : <span style="font-weight: 400;">( queue: [UtteranceQueue](../utterance-queue/UtteranceQueue.md) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #forEachUtteranceQueue data-toc-label='forEachUtteranceQueue' }

Apply a callback on each utteranceQueue that this Node has a connection to (via Display). Note that only
accessible Displays have utteranceQueues that this function will interface with.

#### onPDOMAddChild( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) {: #onPDOMAddChild data-toc-label='onPDOMAddChild' }

(protected)

Called when the Node is added as a child to this Node AND the Node's subtree contains pdom content.
We need to notify all Displays that can see this change, so that they can update the PDOMInstance tree.

#### onPDOMRemoveChild( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) {: #onPDOMRemoveChild data-toc-label='onPDOMRemoveChild' }

(protected)

Called when the Node is removed as a child from this Node AND the Node's subtree contains pdom content.
We need to notify all Displays that can see this change, so that they can update the PDOMInstance tree.

#### onPDOMReorderedChildren() {: #onPDOMReorderedChildren data-toc-label='onPDOMReorderedChildren' }

(protected)

Called when this Node's children are reordered (with nothing added/removed).

#### updateLinkedElementForProperty( tandemName : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, oldProperty? : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;T&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, newProperty? : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;T&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #updateLinkedElementForProperty data-toc-label='updateLinkedElementForProperty' }

Handles linking and checking child PhET-iO Properties such as Node.visibleProperty and Node.enabledProperty.

### Instance Properties

#### focusHighlightChangedEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)</span> {: #focusHighlightChangedEmitter data-toc-label='focusHighlightChangedEmitter' }

(readonly)

Emits an event when the focus highlight is changed.

#### pdomParentChangedEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)</span> {: #pdomParentChangedEmitter data-toc-label='pdomParentChangedEmitter' }

(readonly)

Emits an event when the pdom parent of this Node has changed

#### pdomDisplaysEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)</span> {: #pdomDisplaysEmitter data-toc-label='pdomDisplaysEmitter' }

(readonly)

Fired when the PDOM Displays for this Node have changed (see PDOMInstance)

#### pdomBoundInputEnabledListener : <span style="font-weight: 400;">( enabled: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> {: #pdomBoundInputEnabledListener data-toc-label='pdomBoundInputEnabledListener' }

(protected)

PDOM specific enabled listener

### Static Methods

#### BASIC_ACCESSIBLE_NAME_BEHAVIOR( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, options : <span style="font-weight: 400;">[ParallelDOMOptions](../scenery/ParallelDOM.md#ParallelDOMOptions)</span>, accessibleName : <span style="font-weight: 400;">[PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType)</span> ) : <span style="font-weight: 400;">[ParallelDOMOptions](../scenery/ParallelDOM.md#ParallelDOMOptions)</span> {: #BASIC_ACCESSIBLE_NAME_BEHAVIOR data-toc-label='BASIC_ACCESSIBLE_NAME_BEHAVIOR' }

#### forwardAccessibleName( node : <span style="font-weight: 400;">[ParallelDOM](../scenery/ParallelDOM.md)</span>, otherNode : <span style="font-weight: 400;">[ParallelDOM](../scenery/ParallelDOM.md)</span> ) {: #forwardAccessibleName data-toc-label='forwardAccessibleName' }

A behavior function for accessible name so that when accessibleName is set on the provided Node, it will be forwarded
to otherNode. This is useful when a component is composed of other Nodes that implement the accessibility,
but the high level API should be available for the entire component.

#### forwardHelpText( node : <span style="font-weight: 400;">[ParallelDOM](../scenery/ParallelDOM.md)</span>, otherNode : <span style="font-weight: 400;">[ParallelDOM](../scenery/ParallelDOM.md)</span> ) {: #forwardHelpText data-toc-label='forwardHelpText' }

A behavior function for help text so that when helpText is set on the provided 'node', it will be forwarded `otherNode`.
This is useful when a component is composed of other Nodes that implement the accessibility, but the high level API
should be available for the entire component.

#### HELP_TEXT_BEFORE_CONTENT( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, options : <span style="font-weight: 400;">[ParallelDOMOptions](../scenery/ParallelDOM.md#ParallelDOMOptions)</span>, helpText : <span style="font-weight: 400;">[PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType)</span> ) : <span style="font-weight: 400;">[ParallelDOMOptions](../scenery/ParallelDOM.md#ParallelDOMOptions)</span> {: #HELP_TEXT_BEFORE_CONTENT data-toc-label='HELP_TEXT_BEFORE_CONTENT' }

#### HELP_TEXT_AFTER_CONTENT( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, options : <span style="font-weight: 400;">[ParallelDOMOptions](../scenery/ParallelDOM.md#ParallelDOMOptions)</span>, helpText : <span style="font-weight: 400;">[PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType)</span> ) : <span style="font-weight: 400;">[ParallelDOMOptions](../scenery/ParallelDOM.md#ParallelDOMOptions)</span> {: #HELP_TEXT_AFTER_CONTENT data-toc-label='HELP_TEXT_AFTER_CONTENT' }



## Type Association {: #Association }


```js
import type { Association } from 'scenerystack/scenery';
```


- **otherNode**: [Node](../scenery/Node.md)
- **otherElementName**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **thisElementName**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>




## Type LimitPanDirection {: #LimitPanDirection }


```js
import type { LimitPanDirection } from 'scenerystack/scenery';
```


"horizontal" | "vertical"



## Type ParallelDOMOptions {: #ParallelDOMOptions }


Most options use null for their default behavior, see the setters for each option for a description of how null
behaves as a default.

```js
import type { ParallelDOMOptions } from 'scenerystack/scenery';
```


- **focusable**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **tagName**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **accessibleName**?: [PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Higher Level API Functions
- **accessibleParagraph**?: [PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **helpText**?: [PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **pdomHeading**?: [PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **accessibleNameBehavior**?: [PDOMBehaviorFunction](../scenery/ParallelDOM.md#PDOMBehaviorFunction)
<br>  Lower Level API Functions
- **helpTextBehavior**?: [PDOMBehaviorFunction](../scenery/ParallelDOM.md#PDOMBehaviorFunction)
- **pdomHeadingBehavior**?: [PDOMBehaviorFunction](../scenery/ParallelDOM.md#PDOMBehaviorFunction)
- **containerTagName**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **containerAriaRole**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **innerContent**?: [PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **inputType**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **inputValue**?: [PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **pdomChecked**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **pdomNamespace**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **ariaLabel**?: [PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **ariaRole**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **ariaValueText**?: [PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **labelTagName**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **labelContent**?: [PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **appendLabel**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **descriptionTagName**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **descriptionContent**?: [PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **appendDescription**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **focusHighlight**?: [Highlight](../scenery/Highlight.md)
- **focusHighlightLayerable**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **groupFocusHighlight**?: [Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **pdomVisibleProperty**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **pdomVisible**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **pdomOrder**?: ( [Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> )[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **pdomAttributes**?: PDOMAttribute[]
- **ariaLabelledbyAssociations**?: [Association](../scenery/ParallelDOM.md#Association)[]
- **ariaDescribedbyAssociations**?: [Association](../scenery/ParallelDOM.md#Association)[]
- **activeDescendantAssociations**?: [Association](../scenery/ParallelDOM.md#Association)[]
- **focusPanTargetBoundsProperty**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Bounds2](../dot/Bounds2.md)&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **limitPanDirection**?: [LimitPanDirection](../scenery/ParallelDOM.md#LimitPanDirection) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **positionInPDOM**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **pdomTransformSourceNode**?: [Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- &amp; [PhetioObjectOptions](../tandem/PhetioObject.md#PhetioObjectOptions)




## Type PDOMBehaviorFunction {: #PDOMBehaviorFunction }



@param node - the Node that the pdom behavior is being applied to
@param options - options to mutate within the function
@param value - the value that you are setting the behavior of, like the accessibleName
@param callbacksForOtherNodes - behavior function also support taking state from a Node and using it to
set the accessible content for another Node. If this is the case, that logic should be set in a closure and added to
this list for execution after this Node is fully created. See discussion in https://github.com/phetsims/sun/issues/503#issuecomment-676541373
@returns the options that have been mutated by the behavior function.

```js
import type { PDOMBehaviorFunction } from 'scenerystack/scenery';
```


( node: [Node](../scenery/Node.md), options: [ParallelDOMOptions](../scenery/ParallelDOM.md#ParallelDOMOptions), value: [PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType), callbacksForOtherNodes: ( () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span> )[] ) =&gt; [ParallelDOMOptions](../scenery/ParallelDOM.md#ParallelDOMOptions)



## Type PDOMValueType {: #PDOMValueType }


```js
import type { PDOMValueType } from 'scenerystack/scenery';
```


<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;



## Type RemoveParallelDOMOptions {: #RemoveParallelDOMOptions }


Removes all options from T that are in ParallelDOMSelfOptions.

```js
import type { RemoveParallelDOMOptions } from 'scenerystack/scenery';
```


[StrictOmit](../phet-core/StrictOmit.md)&lt;T, keyof ParallelDOMSelfOptions&gt;



## Type TrimParallelDOMOptions {: #TrimParallelDOMOptions }


Removes all options from T that are in ParallelDOMSelfOptions, except for the most fundamental ones.
This is useful for creating a ParallelDOM subclass that only exposes these high-level options while implementing
accessibility with the lower-level API.

```js
import type { TrimParallelDOMOptions } from 'scenerystack/scenery';
```


[RemoveParallelDOMOptions](../scenery/ParallelDOM.md#RemoveParallelDOMOptions)&lt;T&gt; &amp; [PickOptional](../phet-core/PickOptional.md)&lt;ParallelDOMSelfOptions, "accessibleName" | "helpText" | "accessibleParagraph" | "focusable" | "pdomVisible"&gt;



## Source Code

See the source for [ParallelDOM.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/pdom/ParallelDOM.ts) in the [scenery](https://github.com/phetsims/scenery) repository.

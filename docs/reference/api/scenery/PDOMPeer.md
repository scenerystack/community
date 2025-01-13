# PDOMPeer

## Overview

An accessible peer controls the appearance of an accessible Node's instance in the parallel DOM. A PDOMPeer can
have up to four self.Elements displayed in the PDOM, see ftructor for details.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;
@author Jesse Greenberg

## Class PDOMPeer {: #PDOMPeer }


```js
import { PDOMPeer } from 'scenerystack/scenery';
```
### Constructor

#### new PDOMPeer( pdomInstance, options ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### initializePDOMPeer( pdomInstance, options ) {: #initializePDOMPeer data-toc-label='initializePDOMPeer' }

Initializes the object (either from a freshly-created state, or from a "disposed" state brought back from a
pool).

NOTE: the PDOMPeer is not fully constructed until calling PDOMPeer.update() after creating from pool.
@private

@param {PDOMInstance} pdomInstance
@param {Object} [options]
@returns {PDOMPeer} - Returns 'this' reference, for chaining

#### orderElements( config ) {: #orderElements data-toc-label='orderElements' }

Handle the internal ordering of the elements in the peer, this involves setting the proper value of
this.topLevelElements
@param {Object} config - the computed mixin options to be applied to the peer. (select ParallelDOM mutator keys)
@private

#### getPrimarySibling() {: #getPrimarySibling data-toc-label='getPrimarySibling' }

Get the primary sibling element for the peer
@public
@returns {HTMLElement|null}

#### getLabelSibling() {: #getLabelSibling data-toc-label='getLabelSibling' }

Get the primary sibling element for the peer
@public
@returns {HTMLElement|null}

#### getDescriptionSibling() {: #getDescriptionSibling data-toc-label='getDescriptionSibling' }

Get the primary sibling element for the peer
@public
@returns {HTMLElement|null}

#### getContainerParent() {: #getContainerParent data-toc-label='getContainerParent' }

Get the primary sibling element for the peer
@public
@returns {HTMLElement|null}

#### getTopLevelElementContainingPrimarySibling() {: #getTopLevelElementContainingPrimarySibling data-toc-label='getTopLevelElementContainingPrimarySibling' }

Returns the top-level element that contains the primary sibling. If there is no container parent, then the primary
sibling is returned.
@public

@returns {HTMLElement|null}

#### onAriaLabelledbyAssociationChange() {: #onAriaLabelledbyAssociationChange data-toc-label='onAriaLabelledbyAssociationChange' }

Recompute the aria-labelledby attributes for all of the peer's elements
@public

#### onAriaDescribedbyAssociationChange() {: #onAriaDescribedbyAssociationChange data-toc-label='onAriaDescribedbyAssociationChange' }

Recompute the aria-describedby attributes for all of the peer's elements
@public

#### onActiveDescendantAssociationChange() {: #onActiveDescendantAssociationChange data-toc-label='onActiveDescendantAssociationChange' }

Recompute the aria-activedescendant attributes for all of the peer's elements
@public

#### handleAttributeWithPDOMOption( key, value ) {: #handleAttributeWithPDOMOption data-toc-label='handleAttributeWithPDOMOption' }

Set the new attribute to the element if the value is a string. It will otherwise be null or undefined and should
then be removed from the element. This allows empty strings to be set as values.

@param {string} key
@param {string|null|undefined} value
@private

#### onAttributeChange( pdomOptions ) {: #onAttributeChange data-toc-label='onAttributeChange' }

Set all pdom attributes onto the peer elements from the model's stored data objects
@private

@param {Object} [pdomOptions] - these can override the values of the node, see this.update()

#### onClassChange() {: #onClassChange data-toc-label='onClassChange' }

Set all classes onto the peer elements from the model's stored data objects
@private

#### setClassToElement( className, options ) {: #setClassToElement data-toc-label='setClassToElement' }

Add the provided className to the element's classList.

@public
@param {string} className
@param {Object} [options]

#### removeClassFromElement( className, options ) {: #removeClassFromElement data-toc-label='removeClassFromElement' }

Remove the specified className from the element.
@public

@param {string} className
@param {Object} [options]

#### arrangeContentElement( contentElement, appendElement ) {: #arrangeContentElement data-toc-label='arrangeContentElement' }

The contentElement will either be a label or description element. The contentElement will be sorted relative to
the primarySibling. Its placement will also depend on whether or not this node wants to append this element,
see setAppendLabel() and setAppendDescription(). By default, the "content" element will be placed before the
primarySibling.

NOTE: This function assumes it is called on label sibling before description sibling for inserting elements
into the correct order.

@private

@param {HTMLElement} contentElement
@param {boolean} appendElement

#### isVisible() {: #isVisible data-toc-label='isVisible' }

Is this peer hidden in the PDOM
@public

@returns {boolean}

#### setVisible( visible ) {: #setVisible data-toc-label='setVisible' }

Set whether or not the peer is visible in the PDOM
@public

@param {boolean} visible

#### setFocusable( focusable ) {: #setFocusable data-toc-label='setFocusable' }

Make the peer focusable. Only the primary sibling is ever considered focusable.
@public
@param {boolean} focusable

#### setPDOMTransformSourceNode( node ) {: #setPDOMTransformSourceNode data-toc-label='setPDOMTransformSourceNode' }

Sets the pdomTransformSourceNode so that the primary sibling will be transformed with changes to along the
unique trail to the source node. If null, repositioning happens with transform changes along this
pdomInstance's trail.
@public

@param {../nodes/Node|null} node

#### getElementId( siblingName, stringId ) {: #getElementId data-toc-label='getElementId' }

@private

#### updateIndicesStringAndElementIds() {: #updateIndicesStringAndElementIds data-toc-label='updateIndicesStringAndElementIds' }

@public

#### invalidateCSSPositioning( forceReflowWorkaround ) {: #invalidateCSSPositioning data-toc-label='invalidateCSSPositioning' }

Mark that the siblings of this PDOMPeer need to be updated in the next Display update. Possibly from a
change of accessible content or node transformation. Does nothing if already marked dirty.

@param [forceReflowWorkaround] - In addition to repositioning, force a reflow next animation frame? See
                                 this.forceReflowWorkaround for more information.
@private

#### positionElements( positionInPDOM ) {: #positionElements data-toc-label='positionElements' }

Update the CSS positioning of the primary and label siblings. Required to support accessibility on mobile
devices. On activation of focusable elements, certain AT will send fake pointer events to the browser at
the center of the client bounding rectangle of the HTML element. By positioning elements over graphical display
objects we can capture those events. A transformation matrix is calculated that will transform the position
and dimension of the HTML element in pixels to the global coordinate frame. The matrix is used to transform
the bounds of the element prior to any other transformation so we can set the element's left, top, width, and
height with CSS attributes.

For now we are only transforming the primary and label siblings if the primary sibling is focusable. If
focusable, the primary sibling needs to be transformed to receive user input. VoiceOver includes the label bounds
in its calculation for where to send the events, so it needs to be transformed as well. Descriptions are not
considered and do not need to be positioned.

Initially, we tried to set the CSS transformations on elements directly through the transform attribute. While
this worked for basic input, it did not support other AT features like tapping the screen to focus elements.
With this strategy, the VoiceOver "touch area" was a small box around the top left corner of the element. It was
never clear why this was this case, but forced us to change our strategy to set the left, top, width, and height
attributes instead.

This function assumes that elements have other style attributes so they can be positioned correctly and don't
interfere with scenery input, see SceneryStyle in PDOMUtils.

Additional notes were taken in https://github.com/phetsims/scenery/issues/852, see that issue for more
information.

Review: This function could be simplified by setting the element width/height a small arbitrary shape
at the center of the node's global bounds. There is a drawback in that the VO default highlight won't
surround the Node anymore. But it could be a performance enhancement and simplify this function.
Or maybe a big rectangle larger than the Display div still centered on the node so we never
see the VO highlight?

@private

#### recursiveDisable( disabled ) {: #recursiveDisable data-toc-label='recursiveDisable' }

Recursively set this PDOMPeer and children to be disabled. This will overwrite any previous value of disabled
that may have been set, but will keep track of the old value, and restore its state upon re-enabling.
@param {boolean} disabled
@public



## Source Code

See the source for [PDOMPeer.js](https://github.com/phetsims/scenery/blob/main/js/accessibility/pdom/PDOMPeer.js) in the [scenery](https://github.com/phetsims/scenery) repository.

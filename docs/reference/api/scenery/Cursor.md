# Cursor

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/accessibility/reader/Cursor.js](https://github.com/phetsims/scenery/blob/main/js/accessibility/reader/Cursor.js) for the most up-to-date information.

## Overview

Prototype for a cursor that implements the typical navigation strategies of a screen reader.  The output
text is meant to be read to a user by the Web Speech API synthesizer.

NOTE: This is a prototype for screen reader behavior, and is an initial implementation for
a cursor that is to be used together with the web speech API, see
https://github.com/phetsims/scenery/issues/538

NOTE: We are no longer actively developing this since we know that users would much rather use their own
dedicated software. But we are keeping it around for when we want to explore any other voicing features
using the web speech API.

@author Jesse Greenberg

## Class Cursor {: #Cursor }


```js
import { Cursor } from 'scenerystack/scenery';
```
### Constructor

#### new Cursor( domElement ) {: #Cursor-constructor data-toc-label='new Cursor' }

### Instance Methods

#### getLinearDOMElements( domElement ) {: #getLinearDOMElements data-toc-label='getLinearDOMElements' }

Get all 'element' nodes off the parent element, placing them in an array
for easy traversal.  Note that this includes all elements, even those
that are 'hidden' or purely for structure.
@private

@param  {HTMLElement} domElement - the parent element to linearize
@returns {Array.&lt;HTMLElement&gt;}

#### getLiveRole( domElement ) {: #getLiveRole data-toc-label='getLiveRole' }

Get the live role from the DOM element.  If the element is not live, return null.
@private

@param {HTMLElement} domElement
@returns {string}

#### getNextPreviousElement( direction ) {: #getNextPreviousElement data-toc-label='getNextPreviousElement' }

Get the next or previous element in the DOM, depending on the desired direction.
@private

@param {[type]} direction - NEXT || PREVIOUS
@returns {HTMLElement}

#### getLabel( id ) {: #getLabel data-toc-label='getLabel' }

Get the label for a particular id
@private

@param {string} id
@returns {HTMLElement}

#### getAccessibleText( element, withApplicationContent ) {: #getAccessibleText data-toc-label='getAccessibleText' }

Get the accessible text from the element.  Depending on the navigation strategy,
we may or may not want to include all application content text from the markup.
@private

@param {HTMLElement} element
@param {boolean} withApplicationContent - do you want to include all aria text content?
@returns {string}

#### getNextPreviousElementWithPDOMContent( direction ) {: #getNextPreviousElementWithPDOMContent data-toc-label='getNextPreviousElementWithPDOMContent' }

Get the next or previous element in the DOM that has accessible text content, relative to the current
active element.
@private

@param  {string} direction - NEXT || PREVIOUS
@returns {HTMLElement}

#### getNextPreviousElementWithRole( roles, direction ) {: #getNextPreviousElementWithRole data-toc-label='getNextPreviousElementWithRole' }

Get the next element in the DOM with on of the desired tagNames, types, or roles.  This does not set the active element, it
only traverses the document looking for elements.
@private

@param  {Array.&lt;string&gt;} roles - list of desired DOM tag names, types, or aria roles
@param  {[type]} direction - direction flag for to search through the DOM - NEXT || PREVIOUS
@returns {HTMLElement}

#### readNextPreviousLine( direction ) {: #readNextPreviousLine data-toc-label='readNextPreviousLine' }

@private

@param {string} direction
@returns {string}

#### readActiveLine() {: #readActiveLine data-toc-label='readActiveLine' }

Read the active line without incrementing the word count.
@private

@returns {[type]} [description]

#### readNextPreviousWord( direction ) {: #readNextPreviousWord data-toc-label='readNextPreviousWord' }

@private

@param {string} direction
@returns {string}

#### readNextPreviousHeading( headingLevels, direction ) {: #readNextPreviousHeading data-toc-label='readNextPreviousHeading' }

Read the next or previous heading with one of the levels specified in headingLevels and in the direction
specified by the direction flag.
@private

@param  {Array.&lt;string&gt;} headingLevels
@param  {[type]} direction - direction of traversal through the DOM - NEXT || PREVIOUS
@returns {string}

#### readNextPreviousButton( direction ) {: #readNextPreviousButton data-toc-label='readNextPreviousButton' }

Read the next/previous button element.  A button can have the tagname button, have the aria button role, or
or have one of the following types: submit, button, reset
@private

@param  {string}} direction
@returns {HTMLElement}

#### readNextPreviousFormElement( direction ) {: #readNextPreviousFormElement data-toc-label='readNextPreviousFormElement' }

@private

@param {string} direction
@returns {string}

#### readNextPreviousListItem( direction ) {: #readNextPreviousListItem data-toc-label='readNextPreviousListItem' }

@private

@param {string} direction
@returns {string}

#### readNextPreviousList( direction ) {: #readNextPreviousList data-toc-label='readNextPreviousList' }

@private

@param {string} direction
@returns {string}

#### readNextPreviousCharacter( direction ) {: #readNextPreviousCharacter data-toc-label='readNextPreviousCharacter' }

@private

@param {string} direction
@returns {string}

#### updateLiveElementList() {: #updateLiveElementList data-toc-label='updateLiveElementList' }

Update the list of elements, and add Mutation Observers to each one.  MutationObservers
provide a way to listen to changes in the DOM,
see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
@private

#### readEntireDocument() {: #readEntireDocument data-toc-label='readEntireDocument' }

Read continuously from the current active element.  Accessible content is read by reader with a 'polite'
utterance so that new text is added to the queue line by line.
@private

TODO: If the read is cancelled, the active element should be set appropriately. https://github.com/phetsims/scenery/issues/1581

@returns {string}

#### isFocusable( domElement ) {: #isFocusable data-toc-label='isFocusable' }

Return true if the element is focusable.  A focusable element has a tab index, is a
form element, or has a role which adds it to the navigation order.
@private

TODO: Populate with the rest of the focusable elements. https://github.com/phetsims/scenery/issues/1581
@param  {HTMLElement} domElement
@returns {boolean}



## Source Code

See the source for [Cursor.js](https://github.com/phetsims/scenery/blob/main/js/accessibility/reader/Cursor.js) in the [scenery](https://github.com/phetsims/scenery) repository.

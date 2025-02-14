# MutableOptionsNode

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/sun/blob/main/js/MutableOptionsNode.js](https://github.com/phetsims/sun/blob/main/js/MutableOptionsNode.js) for the most up-to-date information.

## Overview

Assists "changing" options for types of nodes where the node does not support modifying the option.
This will create a new copy of the node whenever the options change, and will swap it into place.

Given a type that has an option that can only be provided on construction (e.g. 'color' option for NumberPicker),
MutableOptionsNode can act like a mutable form of that Node. For example, if you have a color property:

var colorProperty = new Property( 'red' );

You can create a NumberPicker equivalent:

var pickerContainer = new MutableOptionsNode( NumberPicker, [ arg1, arg2 ], {
  font: new PhetFont( 30 ) // normal properties that are passed in directly
}, {
  color: colorProperty // values wrapped with Property. When these change, a new NumberPicker is created and swapped.
}, {
  // Options passed to the wrapper node.
} );

Now pickerContainer will have a child that is a NumberPicker, and pickerContainer.nodeProperty will point to the
current NumberPicker instance. The NumberPicker above will be created with like:

new NumberPicker( arg1, arg2, {
  font: new PhetFont( 30 ),
  color: colorProperty.value
} )

@author Jonathan Olson (PhET Interactive Simulations)

## Class MutableOptionsNode {: #MutableOptionsNode }


@deprecated Not a good fit for PhET-iO. Please design your component so that the item is mutable.

```js
import { MutableOptionsNode } from 'scenerystack/sun';
```
### Constructor

#### new MutableOptionsNode( nodeSubtype, parameters, staticOptions, dynamicOptions, wrapperOptions ) {: #MutableOptionsNode-constructor data-toc-label='new MutableOptionsNode' }

### Instance Methods

#### replaceCopy() {: #replaceCopy data-toc-label='replaceCopy' }

Creates a copy of our type of node, and replaces any existing copy.
@private

#### disposeCopy( copy ) {: #disposeCopy data-toc-label='disposeCopy' }

Attempt to dispose an instance of our node.
@private

@param {Node} copy

#### dispose() {: #dispose data-toc-label='dispose' }

@public
@override



## Source Code

See the source for [MutableOptionsNode.js](https://github.com/phetsims/sun/blob/main/js/MutableOptionsNode.js) in the [sun](https://github.com/phetsims/sun) repository.

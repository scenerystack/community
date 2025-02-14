# PaintableStatefulDrawable

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/display/drawables/PaintableStatefulDrawable.js](https://github.com/phetsims/scenery/blob/main/js/display/drawables/PaintableStatefulDrawable.js) for the most up-to-date information.

## Overview

A trait for drawables for nodes that mix in Paintable that need to store state about what the current display is
currently showing, so that updates to the node's fill/stroke will only be made on attributes that specifically
changed (and no change will be necessary for an attribute that changed back to its original/currently-displayed
value). Generally, this is used for DOM and SVG drawables.

Given the type (constructor) of a drawable, we'll mix in a combination of:
- initialization/disposal with the *State suffix
- mark* methods to be called on all drawables of nodes of this type, that set specific dirty flags
@public

This will allow drawables that mix in this type to do the following during an update:
1. Check specific dirty flags (e.g. if the fill changed, update the fill of our SVG element).
2. Call setToCleanState() once done, to clear the dirty flags.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;



## Source Code

See the source for [PaintableStatefulDrawable.js](https://github.com/phetsims/scenery/blob/main/js/display/drawables/PaintableStatefulDrawable.js) in the [scenery](https://github.com/phetsims/scenery) repository.

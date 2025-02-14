# RectangleStatefulDrawable

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/display/drawables/RectangleStatefulDrawable.js](https://github.com/phetsims/scenery/blob/main/js/display/drawables/RectangleStatefulDrawable.js) for the most up-to-date information.

## Overview

A trait for drawables for Rectangle that need to store state about what the current display is currently showing,
so that updates to the Rectangle will only be made on attributes that specifically changed (and no change will be
necessary for an attribute that changed back to its original/currently-displayed value). Generally, this is used
for DOM and SVG drawables.

This will also mix in PaintableStatefulDrawable

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;



## Source Code

See the source for [RectangleStatefulDrawable.js](https://github.com/phetsims/scenery/blob/main/js/display/drawables/RectangleStatefulDrawable.js) in the [scenery](https://github.com/phetsims/scenery) repository.

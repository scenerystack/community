# LineStatefulDrawable

## Overview

A trait for drawables for Line that need to store state about what the current display is currently showing,
so that updates to the Line will only be made on attributes that specifically changed (and no change will be
necessary for an attribute that changed back to its original/currently-displayed value). Generally, this is used
for DOM and SVG drawables.

This will also mix in PaintableStatefulDrawable

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;



## Source Code

See the source for [LineStatefulDrawable.js](https://github.com/phetsims/scenery/blob/main/js/display/drawables/LineStatefulDrawable.js) in the [scenery](https://github.com/phetsims/scenery) repository.

# ImageStatefulDrawable

## Overview

A trait for drawables for Image that need to store state about what the current display is currently showing,
so that updates to the Image will only be made on attributes that specifically changed (and no change will be
necessary for an attribute that changed back to its original/currently-displayed value). Generally, this is used
for DOM and SVG drawables.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;



## Source Code

See the source for [ImageStatefulDrawable.js](https://github.com/phetsims/scenery/blob/main/js/display/drawables/ImageStatefulDrawable.js) in the [scenery](https://github.com/phetsims/scenery) repository.

# Renderer

## Overview

An enumeration of different back-end technologies used for rendering. It also essentially represents the API that
nodes need to implement to be used with this specified back-end.

We use a bitmask to represent renderers currently, in a way that can be logically-ANDed in order to obtain
information about "what renderer can support all of these Nodes?"

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;



## Source Code

See the source for [Renderer.js](https://github.com/phetsims/scenery/blob/main/js/display/Renderer.js) in the [scenery](https://github.com/phetsims/scenery) repository.

# assertNoAdditionalChildren

## Overview

A utility function that enforces that no additional Children are added to a Node.

In particular, useful for making sure that Nodes are not decorated with other content which can be
problematic for dynamic layout. See https://github.com/phetsims/sun/issues/860.

Usage:

const myNode = new Node();
myNode.children = [ new Node(), new Node() ]; // fill in with your own content
assertNoAdditionalChildren( myNode ); // prevent new children

Note that removals need to be allowed for disposal.

@author Jesse Greenberg



## Source Code

See the source for [assertNoAdditionalChildren.ts](https://github.com/phetsims/scenery/blob/main/js/util/assertNoAdditionalChildren.ts) in the [scenery](https://github.com/phetsims/scenery) repository.

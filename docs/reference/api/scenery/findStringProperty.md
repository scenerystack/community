# findStringProperty

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/accessibility/pdom/findStringProperty.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/pdom/findStringProperty.ts) for the most up-to-date information.

## Overview

Given a Node, search for a stringProperty in the Node or its children, recursively. This
is useful for finding a string to set as ParallelDOM content.

This uses a depth first search to find the first instance of Text or RichText under the Node.
It won't necessarily be the closest to the root of the Node or most "prominent" Text/RichText
if there are multiple Text/RichText nodes.

@author Jesse Greenberg



## Source Code

See the source for [findStringProperty.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/pdom/findStringProperty.ts) in the [scenery](https://github.com/phetsims/scenery) repository.

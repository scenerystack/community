# UNIQUE_ID_STRATEGY

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/accessibility/pdom/UNIQUE_ID_STRATEGY.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/pdom/UNIQUE_ID_STRATEGY.ts) for the most up-to-date information.

## Overview

This constant is set up to allow us to change our unique id strategy. Both strategies have trade-offs that are
described in https://github.com/phetsims/phet-io/issues/1847#issuecomment-1068377336. TRAIL_ID is our path forward
currently, but will break PhET-iO playback if any Nodes are created in the recorded sim OR playback sim but not
both. Further information in the above issue and https://github.com/phetsims/phet-io/issues/1851.

@author Jesse Greenberg



## Source Code

See the source for [UNIQUE_ID_STRATEGY.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/pdom/UNIQUE_ID_STRATEGY.ts) in the [scenery](https://github.com/phetsims/scenery) repository.

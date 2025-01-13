# mobius

## Overview

The main 'mobius' namespace object for the exported (non-Require.js) API. Used internally
since it prevents Require.js issues with circular dependencies.

The returned mobius object namespace may be incomplete if not all modules are listed as
dependencies. Please use the 'main' module for that purpose if all of Scenery is desired.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;



## Source Code

See the source for [mobius.ts](https://github.com/phetsims/mobius/blob/main/js/mobius.ts) in the [mobius](https://github.com/phetsims/mobius) repository.

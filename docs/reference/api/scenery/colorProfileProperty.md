# colorProfileProperty

## Overview

Singleton Property&lt;string&gt; which chooses between the available color profiles of a simulation, such as 'default',
'project', 'basics', etc.

The color profile names available to a simulation are specified in package.json under phet.colorProfiles (or, if not
specified, defaults to [ "default" ].  The first color profile that is listed will appear in the sim on startup,
unless overridden by the sim or the colorProfile query parameter.

@author Sam Reid (PhET Interactive Simulations)



## Source Code

See the source for [colorProfileProperty.js](https://github.com/phetsims/scenery/blob/main/js/util/colorProfileProperty.js) in the [scenery](https://github.com/phetsims/scenery) repository.

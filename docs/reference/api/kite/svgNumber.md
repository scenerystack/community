# svgNumber

## Overview

Since SVG doesn't support parsing scientific notation (e.g. 7e5), we need to output fixed decimal-point strings.
Since this needs to be done quickly, and we don't particularly care about slight rounding differences (it's
being used for display purposes only, and is never shown to the user), we use the built-in JS toFixed instead of
Dot's version of toFixed. See https://github.com/phetsims/kite/issues/50

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;



## Source Code

See the source for [svgNumber.ts](https://github.com/phetsims/kite/blob/main/js/util/svgNumber.ts) in the [kite](https://github.com/phetsims/kite) repository.

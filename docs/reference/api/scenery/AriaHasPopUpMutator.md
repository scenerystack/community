# AriaHasPopUpMutator

## Overview

Sets ParallelDOM.js fields for an Node that uses aria-haspopup. It was discovered that
this attribute changes how iOS 14 VoiceOver interacts with elements - elements with
aria-haspopup must be positioned in the viewport to receive pointer and click
events.

See https://github.com/phetsims/scenery/issues/1094 for more information.

@author Jesse Greenberg



## Source Code

See the source for [AriaHasPopUpMutator.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/pdom/AriaHasPopUpMutator.ts) in the [scenery](https://github.com/phetsims/scenery) repository.

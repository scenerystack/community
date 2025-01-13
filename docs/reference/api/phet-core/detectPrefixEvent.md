# detectPrefixEvent

## Overview

/* eslint-disable no-useless-concat */
Scans through potential event properties on an object to detect prefixed forms, and returns the first match.

E.g. currently:
phet.phetCore.detectPrefixEvent( document, 'fullscreenchange' ) === 'webkitfullscreenchange'

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;



## Source Code

See the source for [detectPrefixEvent.ts](https://github.com/phetsims/phet-core/blob/main/js/detectPrefixEvent.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.

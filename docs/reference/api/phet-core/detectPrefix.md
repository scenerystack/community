# detectPrefix

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/phet-core/blob/main/js/detectPrefix.ts](https://github.com/phetsims/phet-core/blob/main/js/detectPrefix.ts) for the most up-to-date information.

## Overview

Scans through potential properties on an object to detect prefixed forms, and returns the first match.

E.g. currently:
phet.phetCore.detectPrefix( document.createElement( 'div' ).style, 'transform' ) === 'webkitTransform'

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;



## Source Code

See the source for [detectPrefix.ts](https://github.com/phetsims/phet-core/blob/main/js/detectPrefix.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.

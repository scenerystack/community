# logGlobal

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/phet-core/blob/main/js/logGlobal.ts](https://github.com/phetsims/phet-core/blob/main/js/logGlobal.ts) for the most up-to-date information.

## Overview

Logs a global variable by converting it to JSON, then writing to phet.log. If the global is undefined,
the log will show 'undefined'.  This is currently used to log a collection of query parameters (which exist
as globals), but could be applied to other globals.  If phet.log is undefined, this is a no-op.

@author Chris Malley (PixelZoom, Inc.)



## Source Code

See the source for [logGlobal.ts](https://github.com/phetsims/phet-core/blob/main/js/logGlobal.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.

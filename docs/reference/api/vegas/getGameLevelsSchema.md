# getGameLevelsSchema

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/vegas/blob/main/js/getGameLevelsSchema.ts](https://github.com/phetsims/vegas/blob/main/js/getGameLevelsSchema.ts) for the most up-to-date information.

## Overview

Gets the QueryStringMachine schema for the gameLevels query parameter.
Note that game levels are numbered starting from 1.

History:
- The `gameLevels` query parameter was first proposed and discussed in https://github.com/phetsims/vegas/issues/86.
- The design of the gameLevels query parameter was solidified, and it was first implemented in Equality Explorer,
  see https://github.com/phetsims/equality-explorer/issues/165.
- When gameLevels was needed in Fourier, the schema was then copied from Fourier to Equality Explorer,
  see https://github.com/phetsims/fourier-making-waves/issues/145.
- During code review of Number Play in https://github.com/phetsims/number-play/issues/92, yet-another implementation
  was discovered. That motivated factoring out this function, to prevent further duplication and inconsistency.

@author Chris Malley (PixelZoom, Inc.)



## Source Code

See the source for [getGameLevelsSchema.ts](https://github.com/phetsims/vegas/blob/main/js/getGameLevelsSchema.ts) in the [vegas](https://github.com/phetsims/vegas) repository.

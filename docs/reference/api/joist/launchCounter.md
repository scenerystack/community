# launchCounter

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/joist/blob/main/js/launchCounter.ts](https://github.com/phetsims/joist/blob/main/js/launchCounter.ts) for the most up-to-date information.

## Overview

Utility for counting the launches of a simulation, which is helpful when counting crashes during
extended fuzzing. Replaces the sim name with a title that indicates the run number.

NOTE: There is no easy way to clear the local storage for this value, so correct usage would focus on the differences
in values rather than the absolute values.

@author Sam Reid (PhET Interactive Simulations)



## Source Code

See the source for [launchCounter.ts](https://github.com/phetsims/joist/blob/main/js/launchCounter.ts) in the [joist](https://github.com/phetsims/joist) repository.

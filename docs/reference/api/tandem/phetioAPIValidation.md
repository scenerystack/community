# phetioAPIValidation

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/tandem/blob/main/js/phetioAPIValidation.ts](https://github.com/phetsims/tandem/blob/main/js/phetioAPIValidation.ts) for the most up-to-date information.

## Overview

This singleton is responsible for ensuring that the PhET-iO API is correct through the lifetime of the simulation.
The PhET-iO API is defined through multiple preloaded files. The "elements baseline" API holds an exact match of
what PhetioObject instances/metadata the sim should create on startup, where the "elements overrides" file is a
sparse list that can overwrite metadata without changing the code. See `grunt generate-phet-io-api` for
more information. The complete list of checks was decided on in https://github.com/phetsims/phet-io/issues/1453
(and later trimmed down) and is as follows:

1. After startup, only dynamic instances prescribed by the baseline API can be registered.
2. Any static, registered PhetioObject can never be deregistered.
3. Any schema entries in the overrides file must exist in the baseline API
4. Any schema entries in the overrides file must be different from its baseline counterpart
5. Dynamic element metadata should match the archetype in the API.
6. All entries in the API should be instrumented (no usages of optional/requiredTandem as phetioIDs)

Terminology:
schema: specified through preloads. The full schema is the baseline plus the overrides, but those parts can be
        referred to separately.
registered: the process of instrumenting a PhetioObject and it "becoming" a PhET-iO Element on the wrapper side.
static PhetioObject: A registered PhetioObject that exists for the lifetime of the sim. It should not be removed
                     (even intermittently) and must be created during startup so that it is immediately interoperable.
dynamic PhetioObject: A registered PhetioObject that can be created and/or destroyed at any point. Only dynamic
                      PhetioObjects can be created after startup.

See https://github.com/phetsims/phet-io/issues/1443#issuecomment-484306552 for an explanation of how to maintain the
PhET-iO API for a simulation.

@author Sam Reid (PhET Interactive Simulations)
@author Michael Kauzmann (PhET Interactive Simulations)
@author Chris Klusendorf (PhET Interactive Simulations)



## Source Code

See the source for [phetioAPIValidation.ts](https://github.com/phetsims/tandem/blob/main/js/phetioAPIValidation.ts) in the [tandem](https://github.com/phetsims/tandem) repository.

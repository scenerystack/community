# merge

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/phet-core/blob/main/js/merge.ts](https://github.com/phetsims/phet-core/blob/main/js/merge.ts) for the most up-to-date information.

## Overview

Like Lodash's _.merge, this will recursively merge nested options objects provided that the keys end in 'Options'
(case-sensitive) and they are pure object literals.
That is, they must be defined by `... = { ... }` or `somePropOptions: { ... }`.
Non object literals (arrays, functions, and inherited types) or anything with an extra prototype will all throw
assertion errors if passed in as an arg or as a value to a `*Options` field.

@author Michael Barlow (PhET Interactive Simulations)
@author Michael Kauzmann (PhET Interactive Simulations)



## Source Code

See the source for [merge.ts](https://github.com/phetsims/phet-core/blob/main/js/merge.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.

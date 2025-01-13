# Poolable

## Overview

Object pooling mixin, for cases where creating new objects is expensive, and we'd rather mark some objects as able
to be reused (i.e. 'in the pool'). This provides a pool of objects for each type it is invoked on. It allows for
getting "new" objects that can either be constructed OR pulled in from a pool, and requires that the objects are
essentially able to "re-run" the constructor. Then when putting the object back in the pool, references should be
released, so memory isn't leaked.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;



## Source Code

See the source for [Poolable.ts](https://github.com/phetsims/phet-core/blob/main/js/Poolable.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.

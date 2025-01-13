# Pool

## Overview

PROTOTYPE version for better support

Object pooling mixin, for cases where creating new objects is expensive, and we'd rather mark some objects as able
to be reused (i.e. 'in the pool'). This provides a pool of objects for each type it is invoked on. It allows for
getting "new" objects that can either be constructed OR pulled in from a pool, and requires that the objects are
essentially able to "re-run" the constructor. Then when putting the object back in the pool, references should be
released, so memory isn't leaked.

With this style of pooling, the following should be standard boilerplate within the class:

 public freeToPool(): void {
 MyType.pool.freeToPool( this );
 }

 public static readonly pool = new Pool( MyType );

and can additionally implement TPoolable to make it clear that the type is pooled

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Pool {: #Pool }


```js
import { Pool } from 'scenerystack/phet-core';
```
### Constructor

#### new Pool( type : <span style="font-weight: 400;">T</span>, ...providedOptionsSpread : <span style="font-weight: 400;">[PossiblyRequiredParameterSpread](../phet-core/Pool.md#PossiblyRequiredParameterSpread)&lt;[PoolableOptions](../phet-core/Pool.md#PoolableOptions)&lt;T&gt;&gt;</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### fetch() : <span style="font-weight: 400;">InstanceType&lt;T&gt;</span> {: #fetch data-toc-label='fetch' }

Returns an object with arbitrary state (possibly constructed with the default arguments).

#### create( ...args : <span style="font-weight: 400;">ConstructorParameters&lt;T&gt;</span> ) : <span style="font-weight: 400;">InstanceType&lt;T&gt;</span> {: #create data-toc-label='create' }

Returns an object that behaves as if it was constructed with the given arguments. May result in a new object
being created (if the pool is empty), or it may use the constructor to mutate an object from the pool.

#### freeToPool( object : <span style="font-weight: 400;">InstanceType&lt;T&gt;</span> ) {: #freeToPool data-toc-label='freeToPool' }

#### forEach( callback : <span style="font-weight: 400;">( object: InstanceType&lt;T&gt; ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #forEach data-toc-label='forEach' }



## Source Code

See the source for [Pool.ts](https://github.com/phetsims/phet-core/blob/main/js/Pool.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.

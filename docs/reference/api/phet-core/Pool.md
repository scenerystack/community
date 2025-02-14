# Pool

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/phet-core/blob/main/js/Pool.ts](https://github.com/phetsims/phet-core/blob/main/js/Pool.ts) for the most up-to-date information.

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

#### new Pool( type : <span style="font-weight: 400;">T</span>, ...providedOptionsSpread : <span style="font-weight: 400;">[PossiblyRequiredParameterSpread](../phet-core/Pool.md#PossiblyRequiredParameterSpread)&lt;[PoolOptions](../phet-core/Pool.md#PoolOptions)&lt;T&gt;&gt;</span> ) {: #Pool-constructor data-toc-label='new Pool' }

### Instance Methods

#### fetch() : <span style="font-weight: 400;">InstanceType&lt;T&gt;</span> {: #fetch data-toc-label='fetch' }

Returns an object with arbitrary state (possibly constructed with the default arguments).

#### create( ...args : <span style="font-weight: 400;">ConstructorParameters&lt;T&gt;</span> ) : <span style="font-weight: 400;">InstanceType&lt;T&gt;</span> {: #create data-toc-label='create' }

Returns an object that behaves as if it was constructed with the given arguments. May result in a new object
being created (if the pool is empty), or it may use the constructor to mutate an object from the pool.

#### freeToPool( object : <span style="font-weight: 400;">InstanceType&lt;T&gt;</span> ) {: #freeToPool data-toc-label='freeToPool' }

#### forEach( callback : <span style="font-weight: 400;">( object: InstanceType&lt;T&gt; ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #forEach data-toc-label='forEach' }



## Type PoolOptions {: #PoolOptions }


```js
import type { PoolOptions } from 'scenerystack/phet-core';
```


- **defaultArguments**?: ConstructorParameters&lt;T&gt;
<br>  If an object needs to be created without a direct call (say, to fill the pool initially), these are the arguments
  that will be passed into the constructor
- **initialize**?: PoolableInitializer&lt;T&gt;
<br>  The function to call on the objects to reinitialize them (that is either the constructor, or acts like the
  constructor). NOTE: This should return the object itself!
- **maxSize**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  A limit for the pool size (so we don't leak memory by growing the pool faster than we take things from it). Can be
  customized by setting Type.maxPoolSize
- **initialSize**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  The initial size of the pool. To fill it, objects will be created with the default arguments.
- **useDefaultConstruction**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If true, when constructing the default arguments will always be used (and then initialized with the initializer)
  instead of just providing the arguments straight to the constructor.
- &amp; ( InstanceType&lt;T&gt; extends { initialize: PoolableInitializer&lt;T&gt; } ? <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span> : {
  // Require initialize if our type doesn't have a compatible initialize method.
  initialize: PoolableInitializer&lt;T&gt;;
} )




## Type PossiblyRequiredParameterSpread {: #PossiblyRequiredParameterSpread }


Our linter complains that {} should be either Record&lt;string, unknown&gt;, unknown, or Record&lt;string, never&gt;. However in
this case, we actually want it to be any type of non-nullish structural type, to see if there is anything required.

```js
import type { PossiblyRequiredParameterSpread } from 'scenerystack/phet-core';
```


( {} extends T ? [ T? ] : [ T ] )



## Type TPoolable {: #TPoolable }


```js
import type { TPoolable } from 'scenerystack/phet-core';
```


- **freeToPool**: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
<br>  Adds this object into the pool, so that it can be reused elsewhere. Generally when this is done, no other
  references to the object should be held (since they should not be used at all).




## Source Code

See the source for [Pool.ts](https://github.com/phetsims/phet-core/blob/main/js/Pool.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.

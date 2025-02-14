# Namespace

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/phet-core/blob/main/js/Namespace.ts](https://github.com/phetsims/phet-core/blob/main/js/Namespace.ts) for the most up-to-date information.

## Overview



## Class Namespace {: #Namespace }


For debugging or usage in the console, Namespace associates modules with a namespaced global for use in the browser.
This does not work in Node.js.

@author Jonathan Olson
@author Chris Malley (PixelZoom, Inc.)

```js
import { Namespace } from 'scenerystack/phet-core';
```
### Constructor

#### new Namespace( name : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) {: #Namespace-constructor data-toc-label='new Namespace' }

### Instance Methods

#### register( key : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, value : <span style="font-weight: 400;">T</span> ) : <span style="font-weight: 400;">T</span> {: #register data-toc-label='register' }

Registers a key-value pair with the namespace.

If there are no dots ('.') in the key, it will be assigned to the namespace. For example:
- x.register( 'A', A );
will set x.A = A.

If the key contains one or more dots ('.'), it's treated somewhat like a path expression. For instance, if the
following is called:
- x.register( 'A.B.C', C );
then the register function will navigate to the object x.A.B and add x.A.B.C = C.

### Instance Properties

#### name : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #name data-toc-label='name' }

(readonly)



## Source Code

See the source for [Namespace.ts](https://github.com/phetsims/phet-core/blob/main/js/Namespace.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.

# Transform1

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/dot/blob/main/js/Transform1.js](https://github.com/phetsims/dot/blob/main/js/Transform1.js) for the most up-to-date information.

## Overview

One dimensional (scalar) transforms, which are invertible. Unlike Transform3 and Transform4, Transform1
may be nonlinear.

@author Sam Reid (PhET Interactive Simulations)

## Class Transform1 {: #Transform1 }


```js
import { Transform1 } from 'scenerystack/dot';
```
### Constructor

#### new Transform1( evaluationFunction, inverseFunction, options ) {: #Transform1-constructor data-toc-label='new Transform1' }

### Instance Methods

#### evaluate( x ) {: #evaluate data-toc-label='evaluate' }

Evaluate the transform at the specified scalar.
@param {number} x
@returns {number}
@public

#### inverse( x ) {: #inverse data-toc-label='inverse' }

Evaluate the inverse at the specified scalar.
@param {number} x
@returns {number}
@public



## Source Code

See the source for [Transform1.js](https://github.com/phetsims/dot/blob/main/js/Transform1.js) in the [dot](https://github.com/phetsims/dot) repository.

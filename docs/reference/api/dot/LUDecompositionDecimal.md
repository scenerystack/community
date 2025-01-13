# LUDecompositionDecimal

## Overview

Arbitrary-precision LU Decomposition using decimal.js and copy-pasted from LUDecomposition.
This is a copy-paste implementation so that the performance characteristics of LUDecomposition are not disturbed.
This file should be maintained with LUDecomposition.js

This module requires the presence of the preload Decimal.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;
@author Sam Reid (PhET Interactive Simulations)

## Class LUDecompositionDecimal {: #LUDecompositionDecimal }


```js
import { LUDecompositionDecimal } from 'scenerystack/dot';
```
### Constructor

#### new LUDecompositionDecimal( matrix, Decimal ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### isNonsingular() {: #isNonsingular data-toc-label='isNonsingular' }

@public

@returns {boolean}

#### solve( matrix, Decimal ) {: #solve data-toc-label='solve' }

@public

@param {Matrix} matrix
@param {constructor} Decimal - from decimal library
@returns {Matrix}



## Source Code

See the source for [LUDecompositionDecimal.js](https://github.com/phetsims/dot/blob/main/js/LUDecompositionDecimal.js) in the [dot](https://github.com/phetsims/dot) repository.

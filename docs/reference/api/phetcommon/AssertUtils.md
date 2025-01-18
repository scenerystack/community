# AssertUtils

## Overview

AssertUtils is a collection of utility functions for common assertions. Many of these assertions are related to
type-checking, useful in a weakly-typed language like JavaScript.

To minimize performance impact, these methods should generally be called after testing for the presence of assert,
for example: assert &amp;&amp; AssertUtils.assertPropertyOf( someProperty, 'number' );

@author Chris Malley (PixelZoom, Inc.)



## Source Code

See the source for [AssertUtils.js](https://github.com/phetsims/phetcommon/blob/main/js/AssertUtils.js) in the [phetcommon](https://github.com/phetsims/phetcommon) repository.

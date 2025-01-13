# MathSymbols

## Overview

Standard math symbols used in PhET sims.
Sims should use these so that they are easy to change in the future.
Do NOT inline characters in string concatenations.

E.g. for an expression that involves the multiplication of 2 values:
Good:  var expressionString = value1 + ' ' + MathSymbols.TIMES + ' ' +  value2;
Bad:   var expressionString = value1 + ' \u00d7 ' + value2;
Wrong: var expressionString = value1 + ' x ' + value2;

Note: These are all 'as const' to support strong typing. See NUMBER_SUITE_COMMON/SymbolType for an example.

@author Chris Malley (PixelZoom, Inc.)



## Source Code

See the source for [MathSymbols.ts](https://github.com/phetsims/scenery-phet/blob/main/js/MathSymbols.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.

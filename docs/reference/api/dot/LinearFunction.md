# LinearFunction

## Overview

Function for doing a linear mapping between two domains ('a' and 'b').
&lt;p&gt;
Example usage:
&lt;code&gt;
var f = new LinearFunction( 0, 100, 0, 200 );
f.evaluate( 50 ); // 100
f.inverse( 100 ); // 50
&lt;/code&gt;

@author Chris Malley (PixelZoom, Inc.)

## Class LinearFunction {: #LinearFunction }


```js
import { LinearFunction } from 'scenerystack/dot';
```
### Constructor

#### new LinearFunction( a1 : <span style="font-weight: 400; opacity: 80%;">number</span>, a2 : <span style="font-weight: 400; opacity: 80%;">number</span>, b1 : <span style="font-weight: 400; opacity: 80%;">number</span>, b2 : <span style="font-weight: 400; opacity: 80%;">number</span>, clamp ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### evaluate( a3 : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #evaluate data-toc-label='evaluate' }

Maps from a to b.

#### inverse( b3 : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #inverse data-toc-label='inverse' }

Maps from b to a



## Source Code

See the source for [LinearFunction.ts](https://github.com/phetsims/dot/blob/main/js/LinearFunction.ts) in the [dot](https://github.com/phetsims/dot) repository.

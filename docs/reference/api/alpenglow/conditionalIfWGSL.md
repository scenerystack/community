# conditionalIfWGSL

## Overview

Support for code where we sometimes want an if-statement, and sometimes we don't.

E.g. conditional_if( null, 'was_truthy();', 'was_falsy();' ) will return:
 was_truthy();

E.g. conditional_if( is_truthy, 'was_truthy()', 'was_falsy()' ) will return:
 if ( is_truthy ) {
   was_truthy()
 }
 else {
   was_falsy()
 }

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;



## Source Code

See the source for [conditionalIfWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/conditionalIfWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.

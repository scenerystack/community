# FluentLibrary

## Overview

/* eslint-disable phet/default-export-class-should-register-namespace */
An entry point for the Fluent library. In the browser-and-node directory, it lets Fluent be used by
both simulation code and during the grunt modulify process. Follow tsconfig-dependencies.json to see
how Fluent code is referenced for typescript. See the README in the sherpa/lib/fluent directory
for more information on how Fluent is set up for PhET simulations.

@author Jesse Greenberg (PhET Interactive Simulations)

## Class FluentLibrary {: #FluentLibrary }


```js
import { FluentLibrary } from 'scenerystack/chipper';
```
### Static Methods

#### getFluentMessageKeys( fluentFileString : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>[]</span> {: #getFluentMessageKeys data-toc-label='getFluentMessageKeys' }

Gets all message keys (excluding terms) from a Fluent file string. This exists in
FluentLiberary (instead of FluentUtils) because it needs to be used outside of simulation
code.

#### verifyFluentFile( fluentFileString : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) {: #verifyFluentFile data-toc-label='verifyFluentFile' }

Verify syntax in the fluent file. Right now it checks for:
  - Message keys should use camelCase instead of dashes.
  - All terms used in the file should be defined.



## Type FluentPattern {: #FluentPattern }


```js
import type { FluentPattern } from 'scenerystack/chipper';
```


<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | ComplexPattern



## Source Code

See the source for [FluentLibrary.ts](https://github.com/phetsims/chipper/blob/main/js/browser-and-node/FluentLibrary.ts) in the [chipper](https://github.com/phetsims/chipper) repository.

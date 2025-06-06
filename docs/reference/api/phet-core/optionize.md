# optionize

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/phet-core/blob/main/js/optionize.ts](https://github.com/phetsims/phet-core/blob/main/js/optionize.ts) for the most up-to-date information.

## Overview

Optionize is a TypeScript layer built on PHET_CORE/merge. Its goal is to satisfy type safety within PhET's "options"
pattern.

For up-to-date examples on how to use this file, see WILDER/WilderOptionsPatterns.ts

This pattern is still being solidified. Although the long term location of PhET's options pattern documentation
can be found at https://github.com/phetsims/phet-info/blob/main/doc/phet-software-design-patterns.md#options-and-config,
that document is currently out of date. Please see https://github.com/phetsims/phet-core/issues/128 for current
progress on this pattern.

@author Sam Reid (PhET Interactive Simulations)
@author Michael Kauzmann (PhET Interactive Simulations)

## Type EmptySelfOptions {: #EmptySelfOptions }


```js
import type { EmptySelfOptions } from 'scenerystack/phet-core';
```


- **_emptySelfOptionsKey**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">never</span>




## Source Code

See the source for [optionize.ts](https://github.com/phetsims/phet-core/blob/main/js/optionize.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.

# ValueChangeUtterance

## Overview

An utterance that should generally be used for announcing a change in value after interacting with a slider
or number type input. Often, changes to a value are announced with aria-valuetext, but additional information about
the change is conveyed by a supplemental Utterance. The delay ensures that VoiceOver and JAWS will announce the
alert after reading the aria-valuetext in full. See https://github.com/phetsims/scenery-phet/issues/491 and
https://github.com/phetsims/john-travoltage/issues/315 for testing notes.

@author Jesse Greenberg

## Class ValueChangeUtterance {: #ValueChangeUtterance }


```js
import { ValueChangeUtterance } from 'scenerystack/utterance-queue';
```
### Constructor

#### new ValueChangeUtterance( providedOptions? : <span style="font-weight: 400;">[ValueChangeUtteranceOptions](../utterance-queue/ValueChangeUtterance.md#ValueChangeUtteranceOptions)</span> ) {: #ValueChangeUtterance-constructor data-toc-label='new ValueChangeUtterance' }

### Instance Methods





## Type ValueChangeUtteranceOptions {: #ValueChangeUtteranceOptions }


```js
import type { ValueChangeUtteranceOptions } from 'scenerystack/utterance-queue';
```


[UtteranceOptions](../utterance-queue/Utterance.md#UtteranceOptions)



## Source Code

See the source for [ValueChangeUtterance.ts](https://github.com/phetsims/utterance-queue/blob/main/js/ValueChangeUtterance.ts) in the [utterance-queue](https://github.com/phetsims/utterance-queue) repository.

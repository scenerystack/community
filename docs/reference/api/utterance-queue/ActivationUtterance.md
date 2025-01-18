# ActivationUtterance

## Overview

An utterance that should generally be used for announcing a change after an "activation" interaction such
as clicking a button or a checkbox. The delay for waiting for utterance stability is chosen such that the alert won't
become stable and be spoken faster than the press and hold delay for continuous clicking with the "enter" key. See
Utterance.js for a description of utterance "stability". The result is that pressing and holding "enter" on a
button will result in only a single utterance.

@author Jesse Greenberg

## Class ActivationUtterance {: #ActivationUtterance }


```js
import { ActivationUtterance } from 'scenerystack/utterance-queue';
```
### Constructor

#### new ActivationUtterance( providedOptions? : <span style="font-weight: 400;">[ActivationUtteranceOptions](../utterance-queue/ActivationUtterance.md#ActivationUtteranceOptions)</span> ) {: #ActivationUtterance-constructor data-toc-label='new ActivationUtterance' }

### Instance Methods





## Type ActivationUtteranceOptions {: #ActivationUtteranceOptions }


```js
import type { ActivationUtteranceOptions } from 'scenerystack/utterance-queue';
```


[UtteranceOptions](../utterance-queue/Utterance.md#UtteranceOptions)



## Source Code

See the source for [ActivationUtterance.ts](https://github.com/phetsims/utterance-queue/blob/main/js/ActivationUtterance.ts) in the [utterance-queue](https://github.com/phetsims/utterance-queue) repository.

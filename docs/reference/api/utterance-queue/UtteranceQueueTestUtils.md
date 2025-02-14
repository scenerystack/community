# UtteranceQueueTestUtils

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/utterance-queue/blob/main/js/UtteranceQueueTestUtils.ts](https://github.com/phetsims/utterance-queue/blob/main/js/UtteranceQueueTestUtils.ts) for the most up-to-date information.

## Overview

A set of utility functions that are useful for all utterance-queue tests.

@author Jesse Greenberg (PhET Interactive Simulations)

## Class UtteranceQueueTestUtils {: #UtteranceQueueTestUtils }


```js
import { UtteranceQueueTestUtils } from 'scenerystack/utterance-queue';
```
### Static Methods

#### timeout( ms : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;</span> {: #timeout data-toc-label='timeout' }

Helper es6 promise timeout function.
@param ms

#### beforeEachTimingWorkarounds() : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>&gt;</span> {: #beforeEachTimingWorkarounds data-toc-label='beforeEachTimingWorkarounds' }

Workarounds that need to be done before each test to let the Utterance Queue finish an timed operation before
the next test. This is not needed when running manually, but I believe will fix problems when running on
CT/Puppeteer where resource availablility, running headless, or other factors may cause differences.



## Source Code

See the source for [UtteranceQueueTestUtils.ts](https://github.com/phetsims/utterance-queue/blob/main/js/UtteranceQueueTestUtils.ts) in the [utterance-queue](https://github.com/phetsims/utterance-queue) repository.

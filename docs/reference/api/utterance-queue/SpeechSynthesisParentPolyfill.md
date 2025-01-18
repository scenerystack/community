# SpeechSynthesisParentPolyfill

## Overview

A polyfill for SpeechSynthesis that tries to pull a working implementation from a parent self. Assumes that
this code is running in an iframe hosted by a parent self and that the parent has a working implementation
of SpeechSynthesis. In particular, this is used in fenster as a way to get SpeechSynthesis in an Android WebView
where SpeechSynthesis is not currently supported. See fenster for more information about an example use case.

@author Jesse Greenberg (PhET Interactive Simulations)



## Source Code

See the source for [SpeechSynthesisParentPolyfill.ts](https://github.com/phetsims/utterance-queue/blob/main/js/SpeechSynthesisParentPolyfill.ts) in the [utterance-queue](https://github.com/phetsims/utterance-queue) repository.

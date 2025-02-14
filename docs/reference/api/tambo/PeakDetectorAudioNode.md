# PeakDetectorAudioNode

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/tambo/blob/main/js/PeakDetectorAudioNode.ts](https://github.com/phetsims/tambo/blob/main/js/PeakDetectorAudioNode.ts) for the most up-to-date information.

## Overview

PeakDetectorAudioNode is a Web Audio node that can be used to detect peak audio output values in an audio signal
chain.  The detected peak audio values are output to the console.  This file contains the portion that runs in the
main JavaScript thread, which is referred to as the "AudioWorklet Node" in the online documentation.  There is a
counterpart portion that runs in the Web Audio rendering thread that is referred to as the "AudioWorklet Processor".

This is intended for diagnostic purposes only, and should not be included in production code.  It likely won't work
in built code anyway, since it makes a direct file reference for including the worklet processor code.

Also note that as of this writing (Apr 2021), audio worklets are not supported in Safari.

To use, create an instance and connect the node whose output you want to measure.  Example:

   const peakDetector = new PeakDetectorAudioNode();
   this.mainGainNode.connect( peakDetector );

TODO: !!! This does not work on all of PhET's supported platforms, so it should not be incorporated into any
      production code.  It should be used for debugging only.  See https://github.com/phetsims/tambo/issues/133#issuecomment-861042659.

@author John Blanco (PhET Interactive Simulations)

## Class PeakDetectorAudioNode {: #PeakDetectorAudioNode }


```js
import { PeakDetectorAudioNode } from 'scenerystack/tambo';
```
### Constructor

#### new PeakDetectorAudioNode( providedOptions? : <span style="font-weight: 400;">[PeakDetectorAudioNodeOptions](../tambo/PeakDetectorAudioNode.md#PeakDetectorAudioNodeOptions)</span> ) {: #PeakDetectorAudioNode-constructor data-toc-label='new PeakDetectorAudioNode' }

### Instance Methods





## Type PeakDetectorAudioNodeOptions {: #PeakDetectorAudioNodeOptions }


```js
import type { PeakDetectorAudioNodeOptions } from 'scenerystack/tambo';
```


- **logZeroValues**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If true, zero values will be output, otherwise no output will occur if the peak value detected for a given time
  interval is zero.




## Source Code

See the source for [PeakDetectorAudioNode.ts](https://github.com/phetsims/tambo/blob/main/js/PeakDetectorAudioNode.ts) in the [tambo](https://github.com/phetsims/tambo) repository.

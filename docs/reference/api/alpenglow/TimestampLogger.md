# TimestampLogger

## Overview

Assists in logging out timestamps for WebGPU profiling.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class TimestampLogger {: #TimestampLogger }


```js
import { TimestampLogger } from 'scenerystack/alpenglow';
```
### Constructor

#### new TimestampLogger( deviceContext : <span style="font-weight: 400;">[DeviceContext](../alpenglow/DeviceContext.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, capacity : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #TimestampLogger-constructor data-toc-label='new TimestampLogger' }

### Instance Methods

#### getGPUComputePassTimestampWrites( name : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;">GPUComputePassTimestampWrites | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getGPUComputePassTimestampWrites data-toc-label='getGPUComputePassTimestampWrites' }

#### resolve( encoder : <span style="font-weight: 400;">GPUCommandEncoder</span>, bufferLogger : <span style="font-weight: 400;">[BufferLogger](../alpenglow/BufferLogger.md)</span> ) : <span style="font-weight: 400;">Promise&lt;[TimestampLoggerResult](../alpenglow/TimestampLogger.md#TimestampLoggerResult) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span> {: #resolve data-toc-label='resolve' }

#### dispose() {: #dispose data-toc-label='dispose' }



## Class TimestampLoggerResult {: #TimestampLoggerResult }


```js
import { TimestampLoggerResult } from 'scenerystack/alpenglow';
```
### Constructor

#### new TimestampLoggerResult( timestamps : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span>, timestampNames : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>[]</span> ) {: #TimestampLoggerResult-TimestampLoggerResult-constructor data-toc-label='new TimestampLoggerResult-TimestampLoggerResult' }

### Instance Methods

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #TimestampLoggerResult-toString data-toc-label='TimestampLoggerResult-toString' }

### Instance Properties

#### deltas : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> {: #TimestampLoggerResult-deltas data-toc-label='TimestampLoggerResult-deltas' }

(readonly)

### Static Methods

#### averageTimestamps( results : <span style="font-weight: 400;">[TimestampLoggerResult](../alpenglow/TimestampLogger.md#TimestampLoggerResult)[]</span> ) : <span style="font-weight: 400;">[TimestampLoggerResult](../alpenglow/TimestampLogger.md#TimestampLoggerResult)</span> {: #TimestampLoggerResult-averageTimestamps data-toc-label='TimestampLoggerResult-averageTimestamps' }



## Source Code

See the source for [TimestampLogger.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/TimestampLogger.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.

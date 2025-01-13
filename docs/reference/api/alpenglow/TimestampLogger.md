# TimestampLogger

## Overview

Assists in logging out timestamps for WebGPU profiling.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class TimestampLogger {: #TimestampLogger }


```js
import { TimestampLogger } from 'scenerystack/alpenglow';
```
### Constructor

#### new TimestampLogger( deviceContext : <span style="font-weight: 400; opacity: 80%;">DeviceContext | null</span>, capacity : <span style="font-weight: 400; opacity: 80%;">number</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getGPUComputePassTimestampWrites( name : <span style="font-weight: 400; opacity: 80%;">string</span> ) : <span style="font-weight: 400; opacity: 80%;">GPUComputePassTimestampWrites | null</span> {: #getGPUComputePassTimestampWrites data-toc-label='getGPUComputePassTimestampWrites' }

#### resolve( encoder : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, bufferLogger : <span style="font-weight: 400; opacity: 80%;">BufferLogger</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;TimestampLoggerResult | null&gt;</span> {: #resolve data-toc-label='resolve' }

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }



## Class TimestampLoggerResult {: #TimestampLoggerResult }


```js
import { TimestampLoggerResult } from 'scenerystack/alpenglow';
```
### Constructor

#### new TimestampLoggerResult( timestamps : <span style="font-weight: 400; opacity: 80%;">number[]</span>, timestampNames : <span style="font-weight: 400; opacity: 80%;">string[]</span> ) {: #TimestampLoggerResult-constructor data-toc-label='TimestampLoggerResult-constructor' }

### Instance Methods

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #TimestampLoggerResult-toString data-toc-label='TimestampLoggerResult-toString' }

### Instance Properties

#### deltas : <span style="font-weight: 400; opacity: 80%;">number[]</span> {: #TimestampLoggerResult-deltas data-toc-label='TimestampLoggerResult-deltas' }

(readonly)

### Static Methods

#### averageTimestamps( results : <span style="font-weight: 400; opacity: 80%;">TimestampLoggerResult[]</span> ) : <span style="font-weight: 400; opacity: 80%;">TimestampLoggerResult</span> {: #TimestampLoggerResult-averageTimestamps data-toc-label='TimestampLoggerResult-averageTimestamps' }



## Source Code

See the source for [TimestampLogger.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/TimestampLogger.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.

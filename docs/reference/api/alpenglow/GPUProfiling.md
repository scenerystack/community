# GPUProfiling

## Overview

GPU profiling of tests.

NOTE: Launch Chrome with the below command line parameters to enable the timestamp query feature:

open -a "Google Chrome Canary" --args --enable-dawn-features=allow_unsafe_apis --enable-webgpu-developer-features --disable-dawn-features=timestamp_quantization

or to dump shaders also:
open -a "Google Chrome Canary" --args --enable-dawn-features=allow_unsafe_apis,dump_shaders --enable-webgpu-developer-features --disable-dawn-features=timestamp_quantization

NOTE: Potentially add dump_shaders - Dumped shaders will be log via EmitLog, thus printed "
      "in Chrome console or consumed by user-defined callback function.",
      "https://crbug.com/dawn/792"

TODO: try disable_workgroup_init sometime, to see if we can get more parallelism, maybe record_detailed_timing_in_trace_events, disable_timestamp_query_conversion
TODO: --disable-dawn-features=timestamp_quantization

Note: Dawn toggles at https://dawn.googlesource.com/dawn/+/refs/heads/main/src/dawn/native/Toggles.cpp

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class GPUProfiling {: #GPUProfiling }


```js
import { GPUProfiling } from 'scenerystack/alpenglow';
```
### Static Methods

#### test() : <span style="font-weight: 400; opacity: 80%;">Promise&lt;void&gt;</span> {: #test data-toc-label='test' }

#### loopingTest( profilerFactories : <span style="font-weight: 400; opacity: 80%;">( ( deviceContext: DeviceContext ) =&gt; Promise&lt;GPUProfiler&gt; )[]</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;void&gt;</span> {: #loopingTest data-toc-label='loopingTest' }

#### getRadixProfiler( deviceContext : <span style="font-weight: 400; opacity: 80%;">DeviceContext</span>, numbers : <span style="font-weight: 400; opacity: 80%;">number[]</span>, options : <span style="font-weight: 400; opacity: 80%;">{
      combineStrategy: boolean;
      radixWorkgroupSize: number;
      radixGrainSize: number;
      scanWorkgroupSize: number;
      scanGrainSize: number;
      bitsPerPass: number;
      bitsPerInnerPass: number;
    }</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;GPUProfiler&gt;</span> {: #getRadixProfiler data-toc-label='getRadixProfiler' }



## Source Code

See the source for [GPUProfiling.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/GPUProfiling.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.

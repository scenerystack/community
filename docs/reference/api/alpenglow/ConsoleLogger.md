# ConsoleLogger

## Overview

Supports "console logging" from shaders. See log.wgsl.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ConsoleLogger {: #ConsoleLogger }


```js
import { ConsoleLogger } from 'scenerystack/alpenglow';
```
### Static Methods

#### register( info : <span style="font-weight: 400; opacity: 80%;">StrictOmit&lt;ConsoleLogInfo&lt;T&gt;, 'id'&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #register data-toc-label='register' }

#### analyze( arrayBuffer : <span style="font-weight: 400; opacity: 80%;">ArrayBuffer</span> ) : <span style="font-weight: 400; opacity: 80%;">ConsoleLoggedShader[]</span> {: #analyze data-toc-label='analyze' }



## Class ConsoleLoggedEntry {: #ConsoleLoggedEntry }


```js
import { ConsoleLoggedEntry } from 'scenerystack/alpenglow';
```
### Constructor

#### new ConsoleLoggedEntry( info : <span style="font-weight: 400; opacity: 80%;">ConsoleLogInfo</span>, data : <span style="font-weight: 400; opacity: 80%;">T</span>, additionalIndex : <span style="font-weight: 400; opacity: 80%;">number | null</span>, otherEntries : <span style="font-weight: 400; opacity: 80%;">ConsoleLoggedEntry[]</span> ) {: #ConsoleLoggedEntry-constructor data-toc-label='ConsoleLoggedEntry-constructor' }

### Instance Methods



### Instance Properties

#### uniqueId : <span style="font-weight: 400; opacity: 80%;">string</span> {: #ConsoleLoggedEntry-uniqueId data-toc-label='ConsoleLoggedEntry-uniqueId' }

(readonly)



## Class ConsoleLoggedLine {: #ConsoleLoggedLine }


```js
import { ConsoleLoggedLine } from 'scenerystack/alpenglow';
```
### Constructor

#### new ConsoleLoggedLine( info : <span style="font-weight: 400; opacity: 80%;">ConsoleLogInfo</span>, additionalIndex : <span style="font-weight: 400; opacity: 80%;">number | null</span>, dataArray : <span style="font-weight: 400; opacity: 80%;">T[]</span>, threads : <span style="font-weight: 400; opacity: 80%;">ConsoleLoggedThread[]</span> ) {: #ConsoleLoggedLine-constructor data-toc-label='ConsoleLoggedLine-constructor' }

### Instance Methods



### Static Methods

#### toLogNull( line : <span style="font-weight: 400; opacity: 80%;">ConsoleLoggedLine</span> ) : <span style="font-weight: 400; opacity: 80%;">unknown</span> {: #ConsoleLoggedLine-toLogNull data-toc-label='ConsoleLoggedLine-toLogNull' }

#### toLogRaw( line : <span style="font-weight: 400; opacity: 80%;">ConsoleLoggedLine</span> ) : <span style="font-weight: 400; opacity: 80%;">unknown</span> {: #ConsoleLoggedLine-toLogRaw data-toc-label='ConsoleLoggedLine-toLogRaw' }

#### toLogExisting( line : <span style="font-weight: 400; opacity: 80%;">ConsoleLoggedLine</span> ) : <span style="font-weight: 400; opacity: 80%;">unknown</span> {: #ConsoleLoggedLine-toLogExisting data-toc-label='ConsoleLoggedLine-toLogExisting' }

#### toLogExistingFlat( line : <span style="font-weight: 400; opacity: 80%;">ConsoleLoggedLine</span> ) : <span style="font-weight: 400; opacity: 80%;">unknown</span> {: #ConsoleLoggedLine-toLogExistingFlat data-toc-label='ConsoleLoggedLine-toLogExistingFlat' }



## Class ConsoleLoggedShader {: #ConsoleLoggedShader }


```js
import { ConsoleLoggedShader } from 'scenerystack/alpenglow';
```
### Instance Methods

#### add( info : <span style="font-weight: 400; opacity: 80%;">ConsoleLogInfo</span>, workgroupIndex : <span style="font-weight: 400; opacity: 80%;">Vector3</span>, localIndex : <span style="font-weight: 400; opacity: 80%;">Vector3</span>, data : <span style="font-weight: 400; opacity: 80%;">unknown</span>, additionalIndex : <span style="font-weight: 400; opacity: 80%;">number | null</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #ConsoleLoggedShader-add data-toc-label='ConsoleLoggedShader-add' }

#### isEmpty() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #ConsoleLoggedShader-isEmpty data-toc-label='ConsoleLoggedShader-isEmpty' }

#### finalize() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #ConsoleLoggedShader-finalize data-toc-label='ConsoleLoggedShader-finalize' }

### Instance Properties

#### shaderName : <span style="font-weight: 400; opacity: 80%;">string | null</span> {: #ConsoleLoggedShader-shaderName data-toc-label='ConsoleLoggedShader-shaderName' }

#### threads : <span style="font-weight: 400; opacity: 80%;">ConsoleLoggedThread[]</span> {: #ConsoleLoggedShader-threads data-toc-label='ConsoleLoggedShader-threads' }

(readonly)

#### threadMap : <span style="font-weight: 400; opacity: 80%;">Record&lt;string, ConsoleLoggedThread&gt;</span> {: #ConsoleLoggedShader-threadMap data-toc-label='ConsoleLoggedShader-threadMap' }

(readonly)

#### logLines : <span style="font-weight: 400; opacity: 80%;">ConsoleLoggedLine[]</span> {: #ConsoleLoggedShader-logLines data-toc-label='ConsoleLoggedShader-logLines' }

(readonly)



## Class ConsoleLoggedThread {: #ConsoleLoggedThread }


TODO: Should we create ConsoleLoggedWorkgroup?

```js
import { ConsoleLoggedThread } from 'scenerystack/alpenglow';
```
### Constructor

#### new ConsoleLoggedThread( workgroupIndex : <span style="font-weight: 400; opacity: 80%;">Vector3</span>, localIndex : <span style="font-weight: 400; opacity: 80%;">Vector3</span> ) {: #ConsoleLoggedThread-constructor data-toc-label='ConsoleLoggedThread-constructor' }

### Instance Methods

#### add( info : <span style="font-weight: 400; opacity: 80%;">ConsoleLogInfo</span>, data : <span style="font-weight: 400; opacity: 80%;">unknown</span>, additionalIndex : <span style="font-weight: 400; opacity: 80%;">number | null</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #ConsoleLoggedThread-add data-toc-label='ConsoleLoggedThread-add' }

#### compare( other : <span style="font-weight: 400; opacity: 80%;">ConsoleLoggedThread</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #ConsoleLoggedThread-compare data-toc-label='ConsoleLoggedThread-compare' }

### Instance Properties

#### entries : <span style="font-weight: 400; opacity: 80%;">ConsoleLoggedEntry[]</span> {: #ConsoleLoggedThread-entries data-toc-label='ConsoleLoggedThread-entries' }

(readonly)



## Source Code

See the source for [ConsoleLogger.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/ConsoleLogger.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.

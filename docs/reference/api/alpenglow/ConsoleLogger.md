# ConsoleLogger

## Overview

Supports "console logging" from shaders. See log.wgsl.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ConsoleLoggedEntry {: #ConsoleLoggedEntry }


```js
import { ConsoleLoggedEntry } from 'scenerystack/alpenglow';
```
### Constructor

#### new ConsoleLoggedEntry( info : <span style="font-weight: 400;">[ConsoleLogInfo](../alpenglow/ConsoleLogger.md#ConsoleLogInfo)</span>, data : <span style="font-weight: 400;">T</span>, additionalIndex : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, otherEntries : <span style="font-weight: 400;">[ConsoleLoggedEntry](../alpenglow/ConsoleLogger.md#ConsoleLoggedEntry)[]</span> ) {: #ConsoleLoggedEntry-ConsoleLoggedEntry-constructor data-toc-label='new ConsoleLoggedEntry-ConsoleLoggedEntry' }

### Instance Methods



### Instance Properties

#### uniqueId : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #ConsoleLoggedEntry-uniqueId data-toc-label='ConsoleLoggedEntry-uniqueId' }

(readonly)



## Class ConsoleLoggedLine {: #ConsoleLoggedLine }


```js
import { ConsoleLoggedLine } from 'scenerystack/alpenglow';
```
### Constructor

#### new ConsoleLoggedLine( info : <span style="font-weight: 400;">[ConsoleLogInfo](../alpenglow/ConsoleLogger.md#ConsoleLogInfo)</span>, additionalIndex : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, dataArray : <span style="font-weight: 400;">T[]</span>, threads : <span style="font-weight: 400;">[ConsoleLoggedThread](../alpenglow/ConsoleLogger.md#ConsoleLoggedThread)[]</span> ) {: #ConsoleLoggedLine-ConsoleLoggedLine-constructor data-toc-label='new ConsoleLoggedLine-ConsoleLoggedLine' }

### Instance Methods



### Static Methods

#### toLogNull( line : <span style="font-weight: 400;">[ConsoleLoggedLine](../alpenglow/ConsoleLogger.md#ConsoleLoggedLine)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span></span> {: #ConsoleLoggedLine-toLogNull data-toc-label='ConsoleLoggedLine-toLogNull' }

#### toLogRaw( line : <span style="font-weight: 400;">[ConsoleLoggedLine](../alpenglow/ConsoleLogger.md#ConsoleLoggedLine)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span></span> {: #ConsoleLoggedLine-toLogRaw data-toc-label='ConsoleLoggedLine-toLogRaw' }

#### toLogExisting( line : <span style="font-weight: 400;">[ConsoleLoggedLine](../alpenglow/ConsoleLogger.md#ConsoleLoggedLine)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span></span> {: #ConsoleLoggedLine-toLogExisting data-toc-label='ConsoleLoggedLine-toLogExisting' }

#### toLogExistingFlat( line : <span style="font-weight: 400;">[ConsoleLoggedLine](../alpenglow/ConsoleLogger.md#ConsoleLoggedLine)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span></span> {: #ConsoleLoggedLine-toLogExistingFlat data-toc-label='ConsoleLoggedLine-toLogExistingFlat' }



## Class ConsoleLoggedShader {: #ConsoleLoggedShader }


```js
import { ConsoleLoggedShader } from 'scenerystack/alpenglow';
```
### Instance Methods

#### add( info : <span style="font-weight: 400;">[ConsoleLogInfo](../alpenglow/ConsoleLogger.md#ConsoleLogInfo)</span>, workgroupIndex : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span>, localIndex : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span>, data : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span></span>, additionalIndex : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #ConsoleLoggedShader-add data-toc-label='ConsoleLoggedShader-add' }

#### isEmpty() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #ConsoleLoggedShader-isEmpty data-toc-label='ConsoleLoggedShader-isEmpty' }

#### finalize() {: #ConsoleLoggedShader-finalize data-toc-label='ConsoleLoggedShader-finalize' }

### Instance Properties

#### shaderName : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #ConsoleLoggedShader-shaderName data-toc-label='ConsoleLoggedShader-shaderName' }

#### threads : <span style="font-weight: 400;">[ConsoleLoggedThread](../alpenglow/ConsoleLogger.md#ConsoleLoggedThread)[]</span> {: #ConsoleLoggedShader-threads data-toc-label='ConsoleLoggedShader-threads' }

(readonly)

#### threadMap : <span style="font-weight: 400;">Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>, [ConsoleLoggedThread](../alpenglow/ConsoleLogger.md#ConsoleLoggedThread)&gt;</span> {: #ConsoleLoggedShader-threadMap data-toc-label='ConsoleLoggedShader-threadMap' }

(readonly)

#### logLines : <span style="font-weight: 400;">[ConsoleLoggedLine](../alpenglow/ConsoleLogger.md#ConsoleLoggedLine)[]</span> {: #ConsoleLoggedShader-logLines data-toc-label='ConsoleLoggedShader-logLines' }

(readonly)



## Class ConsoleLoggedThread {: #ConsoleLoggedThread }


TODO: Should we create ConsoleLoggedWorkgroup?

```js
import { ConsoleLoggedThread } from 'scenerystack/alpenglow';
```
### Constructor

#### new ConsoleLoggedThread( workgroupIndex : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span>, localIndex : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> ) {: #ConsoleLoggedThread-ConsoleLoggedThread-constructor data-toc-label='new ConsoleLoggedThread-ConsoleLoggedThread' }

### Instance Methods

#### add( info : <span style="font-weight: 400;">[ConsoleLogInfo](../alpenglow/ConsoleLogger.md#ConsoleLogInfo)</span>, data : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span></span>, additionalIndex : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #ConsoleLoggedThread-add data-toc-label='ConsoleLoggedThread-add' }

#### compare( other : <span style="font-weight: 400;">[ConsoleLoggedThread](../alpenglow/ConsoleLogger.md#ConsoleLoggedThread)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #ConsoleLoggedThread-compare data-toc-label='ConsoleLoggedThread-compare' }

### Instance Properties

#### entries : <span style="font-weight: 400;">[ConsoleLoggedEntry](../alpenglow/ConsoleLogger.md#ConsoleLoggedEntry)[]</span> {: #ConsoleLoggedThread-entries data-toc-label='ConsoleLoggedThread-entries' }

(readonly)



## Class ConsoleLogger {: #ConsoleLogger }


```js
import { ConsoleLogger } from 'scenerystack/alpenglow';
```
### Static Methods

#### register( info : <span style="font-weight: 400;">[StrictOmit](../phet-core/StrictOmit.md)&lt;[ConsoleLogInfo](../alpenglow/ConsoleLogger.md#ConsoleLogInfo)&lt;T&gt;, 'id'&gt;</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #register data-toc-label='register' }

#### analyze( arrayBuffer : <span style="font-weight: 400;">ArrayBuffer</span> ) : <span style="font-weight: 400;">[ConsoleLoggedShader](../alpenglow/ConsoleLogger.md#ConsoleLoggedShader)[]</span> {: #analyze data-toc-label='analyze' }



## Type ConsoleLogInfo {: #ConsoleLogInfo }


```js
import type { ConsoleLogInfo } from 'scenerystack/alpenglow';
```


- **id**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Filled in when registered
- **logName**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
<br>  Provided by the registering code
- **shaderName**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **hasAdditionalIndex**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **type**: [ConcreteType](../alpenglow/ConcreteType.md)&lt;T&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **dataCount**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **lineToLog**: ( line: [ConsoleLoggedLine](../alpenglow/ConsoleLogger.md#ConsoleLoggedLine) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>




## Source Code

See the source for [ConsoleLogger.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/ConsoleLogger.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.

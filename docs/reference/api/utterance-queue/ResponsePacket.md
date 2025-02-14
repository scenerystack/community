# ResponsePacket

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/utterance-queue/blob/main/js/ResponsePacket.ts](https://github.com/phetsims/utterance-queue/blob/main/js/ResponsePacket.ts) for the most up-to-date information.

## Overview

The ResponsePacket collects the categories of a single "response" into the following sections:
"Name Response" - A response that labels (names) some element to describe.
"Object Response" - A response directly describing the state of the named element.
"Context Response" - A response that describes surrounding context related to the named element or changes to it.
"Hint Response" - A response that gives a hint about what en element is for or how to interact with it.

A response is most often tied to an element, or an object that is being described/voiced.

Individual categories of responses can be enabled or disabled. The ResponsePacket keeps track of all these
responses. When it is time to alert the responses of this ResponsePacket, the ResponseCollector will assemble
a final string depending on which categories of responses are enabled.

@author Jesse Greenberg
@author Michael Kauzmann (PhET Interactive Simulations)

## Class ResponsePacket {: #ResponsePacket }


```js
import { ResponsePacket } from 'scenerystack/utterance-queue';
```
### Constructor

#### new ResponsePacket( providedOptions? : <span style="font-weight: 400;">[ResponsePacketOptions](../utterance-queue/ResponsePacket.md#ResponsePacketOptions)</span> ) {: #ResponsePacket-constructor data-toc-label='new ResponsePacket' }

### Instance Methods

#### getNameResponse() : <span style="font-weight: 400;">[ResolvedResponse](../utterance-queue/ResponsePacket.md#ResolvedResponse)</span> {: #getNameResponse data-toc-label='getNameResponse' }

#### setNameResponse( nameResponse : <span style="font-weight: 400;">[VoicingResponse](../utterance-queue/ResponsePacket.md#VoicingResponse)</span> ) {: #setNameResponse data-toc-label='setNameResponse' }

#### getObjectResponse() : <span style="font-weight: 400;">[ResolvedResponse](../utterance-queue/ResponsePacket.md#ResolvedResponse)</span> {: #getObjectResponse data-toc-label='getObjectResponse' }

#### setObjectResponse( objectResponse : <span style="font-weight: 400;">[VoicingResponse](../utterance-queue/ResponsePacket.md#VoicingResponse)</span> ) {: #setObjectResponse data-toc-label='setObjectResponse' }

#### getContextResponse() : <span style="font-weight: 400;">[ResolvedResponse](../utterance-queue/ResponsePacket.md#ResolvedResponse)</span> {: #getContextResponse data-toc-label='getContextResponse' }

#### setContextResponse( contextResponse : <span style="font-weight: 400;">[VoicingResponse](../utterance-queue/ResponsePacket.md#VoicingResponse)</span> ) {: #setContextResponse data-toc-label='setContextResponse' }

#### getHintResponse() : <span style="font-weight: 400;">[ResolvedResponse](../utterance-queue/ResponsePacket.md#ResolvedResponse)</span> {: #getHintResponse data-toc-label='getHintResponse' }

#### setHintResponse( hintResponse : <span style="font-weight: 400;">[VoicingResponse](../utterance-queue/ResponsePacket.md#VoicingResponse)</span> ) {: #setHintResponse data-toc-label='setHintResponse' }

#### copy() : <span style="font-weight: 400;">[ResponsePacket](../utterance-queue/ResponsePacket.md)</span> {: #copy data-toc-label='copy' }

#### serialize() : <span style="font-weight: 400;">Required&lt;[SpeakableNullableResolvedOptions](../utterance-queue/ResponsePacket.md#SpeakableNullableResolvedOptions)&gt;</span> {: #serialize data-toc-label='serialize' }

### Instance Properties

#### ignoreProperties : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #ignoreProperties data-toc-label='ignoreProperties' }

#### responsePatternCollection : <span style="font-weight: 400;">[ResponsePatternCollection](../utterance-queue/ResponsePatternCollection.md)</span> {: #responsePatternCollection data-toc-label='responsePatternCollection' }

### Static Methods

#### getResponseText( response : <span style="font-weight: 400;">[VoicingResponse](../utterance-queue/ResponsePacket.md#VoicingResponse)</span> ) : <span style="font-weight: 400;">[ResolvedResponse](../utterance-queue/ResponsePacket.md#ResolvedResponse)</span> {: #getResponseText data-toc-label='getResponseText' }

Map VoicingResponse -&gt; ResolvedResponse (resolve functions and Properties to their values)

### Static Properties

#### DEFAULT_OPTIONS {: #DEFAULT_OPTIONS data-toc-label='DEFAULT_OPTIONS' }

(readonly)



## Type ResolvedResponse {: #ResolvedResponse }


The text sent to an Announcer technology, after resolving it from potentially more complicated structures holding a response

```js
import type { ResolvedResponse } from 'scenerystack/utterance-queue';
```


<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;



## Type ResponsePacketOptions {: #ResponsePacketOptions }


```js
import type { ResponsePacketOptions } from 'scenerystack/utterance-queue';
```


- **nameResponse**?: [VoicingResponse](../utterance-queue/ResponsePacket.md#VoicingResponse)
<br>  spoken when name responses are enabled
- **objectResponse**?: [VoicingResponse](../utterance-queue/ResponsePacket.md#VoicingResponse)
<br>  spoken when object responses are enabled
- **contextResponse**?: [VoicingResponse](../utterance-queue/ResponsePacket.md#VoicingResponse)
<br>  spoken when context responses are enabled
- **hintResponse**?: [VoicingResponse](../utterance-queue/ResponsePacket.md#VoicingResponse)
<br>  spoken when interaction hints are enabled
- **ignoreProperties**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Whether this response should ignore the Properties of responseCollector. If true, the nameResponse, objectResponse,
  contextResponse, and interactionHint will all be spoken regardless of the values of the Properties of responseCollector
- **responsePatternCollection**?: [ResponsePatternCollection](../utterance-queue/ResponsePatternCollection.md)
<br>  Collection of string patterns to use with responseCollector.collectResponses, see ResponsePatternCollection for
  more information.




## Type SpeakableNullableResolvedOptions {: #SpeakableNullableResolvedOptions }


Add null support for certain cases

```js
import type { SpeakableNullableResolvedOptions } from 'scenerystack/utterance-queue';
```


{
  [PropertyName in keyof [SpeakableResolvedOptions](../utterance-queue/ResponsePacket.md#SpeakableResolvedOptions)]: [SpeakableResolvedOptions](../utterance-queue/ResponsePacket.md#SpeakableResolvedOptions)[PropertyName] extends [SpeakableResolvedResponse](../utterance-queue/ResponsePacket.md#SpeakableResolvedResponse) ?
                                                    [SpeakableResolvedResponse](../utterance-queue/ResponsePacket.md#SpeakableResolvedResponse) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> :
                                                    [SpeakableResolvedOptions](../utterance-queue/ResponsePacket.md#SpeakableResolvedOptions)[PropertyName];
}



## Type SpeakableResolvedOptions {: #SpeakableResolvedOptions }


```js
import type { SpeakableResolvedOptions } from 'scenerystack/utterance-queue';
```


{

  // In speaking options, we don't allow a ResponseCreator function, but just a <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>|<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>. The `<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">undefined</span>` is to
  // match on the properties because they are optional (marked with `?`)
  [PropertyName in keyof [ResponsePacketOptions](../utterance-queue/ResponsePacket.md#ResponsePacketOptions)]: [ResponsePacketOptions](../utterance-queue/ResponsePacket.md#ResponsePacketOptions)[PropertyName] extends ( [VoicingResponse](../utterance-queue/ResponsePacket.md#VoicingResponse) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">undefined</span> ) ?
                                                 [SpeakableResolvedResponse](../utterance-queue/ResponsePacket.md#SpeakableResolvedResponse) :
                                                 [ResponsePacketOptions](../utterance-queue/ResponsePacket.md#ResponsePacketOptions)[PropertyName];
}



## Type SpeakableResolvedResponse {: #SpeakableResolvedResponse }


No function creator because we don't want to support the execution of that function.

```js
import type { SpeakableResolvedResponse } from 'scenerystack/utterance-queue';
```


[ResolvedResponse](../utterance-queue/ResponsePacket.md#ResolvedResponse) | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;



## Type VoicingResponse {: #VoicingResponse }


```js
import type { VoicingResponse } from 'scenerystack/utterance-queue';
```


ResponseCreator | [ResolvedResponse](../utterance-queue/ResponsePacket.md#ResolvedResponse)



## Source Code

See the source for [ResponsePacket.ts](https://github.com/phetsims/utterance-queue/blob/main/js/ResponsePacket.ts) in the [utterance-queue](https://github.com/phetsims/utterance-queue) repository.

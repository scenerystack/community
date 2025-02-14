# DescriptionContext

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/joist/blob/main/js/DescriptionContext.ts](https://github.com/phetsims/joist/blob/main/js/DescriptionContext.ts) for the most up-to-date information.

## Overview

API Context for description plugins.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class DescriptionContext {: #DescriptionContext }


```js
import { DescriptionContext } from 'scenerystack/joist';
```
### Instance Methods

#### get( tandemID : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;">[PhetioObject](../tandem/PhetioObject.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #get data-toc-label='get' }

#### link( property : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;</span>, listener : <span style="font-weight: 400;">[PropertyLinkListener](../axon/TReadOnlyProperty.md#PropertyLinkListener)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;</span> ) {: #link data-toc-label='link' }

#### lazyLink( property : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;</span>, listener : <span style="font-weight: 400;">[PropertyLazyLinkListener](../axon/TReadOnlyProperty.md#PropertyLazyLinkListener)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;</span> ) {: #lazyLink data-toc-label='lazyLink' }

#### unlink( property : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;</span>, listener : <span style="font-weight: 400;">[PropertyLazyLinkListener](../axon/TReadOnlyProperty.md#PropertyLazyLinkListener)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;</span> ) {: #unlink data-toc-label='unlink' }

#### createDerivedProperty( dependencies : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;[]</span>, derivation : <span style="font-weight: 400;">( ...args: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>[] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span></span> ) : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;</span> {: #createDerivedProperty data-toc-label='createDerivedProperty' }

#### multilink( dependencies : <span style="font-weight: 400;">Readonly&lt;[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;[]&gt;</span>, callback : <span style="font-weight: 400;">() =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[UnknownMultilink](../axon/Multilink.md#UnknownMultilink)</span> {: #multilink data-toc-label='multilink' }

#### addListener( emitter : <span style="font-weight: 400;">[TReadOnlyEmitter](../axon/TEmitter.md#TReadOnlyEmitter)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>[]&gt;</span>, listener : <span style="font-weight: 400;">[TEmitterListener](../axon/TEmitter.md#TEmitterListener)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>[]&gt;</span> ) {: #addListener data-toc-label='addListener' }

#### removeListener( emitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>[]&gt;</span>, listener : <span style="font-weight: 400;">[TEmitterListener](../axon/TEmitter.md#TEmitterListener)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>[]&gt;</span> ) {: #removeListener data-toc-label='removeListener' }

#### nodeSet( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, property : <span style="font-weight: 400;">keyof [Node](../scenery/Node.md)</span>, value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span></span> ) {: #nodeSet data-toc-label='nodeSet' }

#### propertySet( property : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;</span>, value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span></span> ) {: #propertySet data-toc-label='propertySet' }

#### createCallbackTimer( options? : <span style="font-weight: 400;">[CallbackTimerOptions](../axon/CallbackTimer.md#CallbackTimerOptions)</span> ) : <span style="font-weight: 400;">[CallbackTimer](../axon/CallbackTimer.md)</span> {: #createCallbackTimer data-toc-label='createCallbackTimer' }

#### createUtterance( options? : <span style="font-weight: 400;">[UtteranceOptions](../utterance-queue/Utterance.md#UtteranceOptions)</span> ) : <span style="font-weight: 400;">[Utterance](../utterance-queue/Utterance.md)</span> {: #createUtterance data-toc-label='createUtterance' }

#### createNode( options? : <span style="font-weight: 400;">[NodeOptions](../scenery/Node.md#NodeOptions)</span> ) : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #createNode data-toc-label='createNode' }

Creates a Node through the context.

TODO: Consider making the tagName required for this context? See https://github.com/phetsims/joist/issues/941

#### dispose() {: #dispose data-toc-label='dispose' }

### Static Methods

#### startupComplete() {: #startupComplete data-toc-label='startupComplete' }

#### registerStrings( strings : <span style="font-weight: 400;">[DescriptionStrings](../joist/DescriptionContext.md#DescriptionStrings)</span> ) : <span style="font-weight: 400;">[DescriptionStrings](../joist/DescriptionContext.md#DescriptionStrings)</span> {: #registerStrings data-toc-label='registerStrings' }

#### registerLogic( logic : <span style="font-weight: 400;">[DescriptionLogic](../joist/DescriptionContext.md#DescriptionLogic)</span> ) : <span style="font-weight: 400;">[DescriptionLogic](../joist/DescriptionContext.md#DescriptionLogic)</span> {: #registerLogic data-toc-label='registerLogic' }

#### externalLoad( str : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;">Promise&lt;Error | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span> {: #externalLoad data-toc-label='externalLoad' }



## Type DescriptionLogic {: #DescriptionLogic }


```js
import type { DescriptionLogic } from 'scenerystack/joist';
```






## Type DescriptionStrings {: #DescriptionStrings }


```js
import type { DescriptionStrings } from 'scenerystack/joist';
```


- **locale**: [Locale](../joist/localeProperty.md#Locale)




## Class ExternalLoadError {: #ExternalLoadError }


```js
import { ExternalLoadError } from 'scenerystack/joist';
```
### Constructor

#### new ExternalLoadError( error : <span style="font-weight: 400;">Error</span>, dataURI : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) {: #ExternalLoadError-ExternalLoadError-constructor data-toc-label='new ExternalLoadError-ExternalLoadError' }

### Instance Methods



### Instance Properties

#### line : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #ExternalLoadError-line data-toc-label='ExternalLoadError-line' }

(readonly)

#### column : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #ExternalLoadError-column data-toc-label='ExternalLoadError-column' }

(readonly)



## Source Code

See the source for [DescriptionContext.ts](https://github.com/phetsims/joist/blob/main/js/DescriptionContext.ts) in the [joist](https://github.com/phetsims/joist) repository.

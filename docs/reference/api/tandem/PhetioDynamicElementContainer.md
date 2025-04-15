# PhetioDynamicElementContainer

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/tandem/blob/main/js/PhetioDynamicElementContainer.ts](https://github.com/phetsims/tandem/blob/main/js/PhetioDynamicElementContainer.ts) for the most up-to-date information.

## Overview

Supertype for containers that hold dynamic elements that are PhET-iO instrumented. This type handles common
features like creating the archetype for the PhET-iO API, and managing created/disposed data stream events.

"Dynamic" is an overloaded term, so allow me to explain what it means in the context of this type. A "dynamic element"
is an instrumented PhET-iO Element that is conditionally in the PhET-iO API. Most commonly this is because elements
can be created and destroyed during the runtime of the sim. Another "dynamic element" for the PhET-iO project is when
an element may or may not be created based on a query parameter. In this case, even if the object then exists for the
lifetime of the sim, we may still call this "dynamic" as it pertains to this type, and the PhET-iO API.

@author Michael Kauzmann (PhET Interactive Simulations)

## Class PhetioDynamicElementContainer {: #PhetioDynamicElementContainer }


```js
import { PhetioDynamicElementContainer } from 'scenerystack/tandem';
```
### Constructor

#### new PhetioDynamicElementContainer( createElement : <span style="font-weight: 400;">( t: [Tandem](../tandem/Tandem.md), ...args: CreateElementArguments ) =&gt; T</span>, defaultArguments : <span style="font-weight: 400;">CreateElementArguments | ( () =&gt; CreateElementArguments )</span>, providedOptions? : <span style="font-weight: 400;">[PhetioDynamicElementContainerOptions](../tandem/PhetioDynamicElementContainer.md#PhetioDynamicElementContainerOptions)</span> ) {: #PhetioDynamicElementContainer-constructor data-toc-label='new PhetioDynamicElementContainer' }

### Instance Methods

#### createArchetype( archetypeTandem, createElementArgs : <span style="font-weight: 400;">( CreateElementArguments | ( () =&gt; CreateElementArguments ) )</span> ) : <span style="font-weight: 400;">T | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #createArchetype data-toc-label='createArchetype' }

Archetypes are created to generate the baseline file, or to validate against an existing baseline file.  They are
PhetioObjects and registered with the phetioEngine, but not send out via notifications from PhetioEngine.phetioElementAddedEmitter(),
because they are intended for internal usage only.  Archetypes should not be created in production code.

PhetioDynamicElementContainer calls this method internally to create and assign its own archetype, but this method
can additionally be called with alternate archetypeTandem and/or createElementArgs to create alternate archetypes.
This can be necessary in situations that require archetypes provided to other archetypes, or with other forms
of dependency injection, such as in https://github.com/phetsims/tandem/issues/312

#### createDynamicElement( componentName : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, argsForCreateFunction : <span style="font-weight: 400;">CreateElementArguments</span>, containerParameterType : <span style="font-weight: 400;">[AnyIOType](../tandem/IOType.md#AnyIOType) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) : <span style="font-weight: 400;">T</span> {: #createDynamicElement data-toc-label='createDynamicElement' }

Create a dynamic PhetioObject element for this container
@param componentName
@param argsForCreateFunction
@param containerParameterType - null in PhET brand

#### dispose() {: #dispose data-toc-label='dispose' }

#### disposeElement( element : <span style="font-weight: 400;">T</span> ) {: #disposeElement data-toc-label='disposeElement' }

(protected)

Dispose a contained element

#### clear( clearOptions? : <span style="font-weight: 400;">[ClearOptions](../tandem/PhetioDynamicElementContainer.md#ClearOptions)</span> ) {: #clear data-toc-label='clear' }

Called when clearing the contents of this container to ready things for setting its state. In general, this class
is set up to destroy and then recreate all of its elements instead of mutating them.

#### notifyElementCreated( createdElement : <span style="font-weight: 400;">T</span> ) {: #notifyElementCreated data-toc-label='notifyElementCreated' }

(protected)

Should be called by subtypes upon element creation, see PhetioGroup as an example.

#### notifyElementCreatedWhileDeferred( createdElement : <span style="font-weight: 400;">T</span> ) {: #notifyElementCreatedWhileDeferred data-toc-label='notifyElementCreatedWhileDeferred' }

Flush a single element from the list of deferred creations that have not yet notified about the disposal. This
is only public to support specific order dependencies in the PhetioStateEngine, otherwise see `this.notifyElementCreated()`
(PhetioGroupTests, phet-io) - only the PhetioStateEngine should notify individual elements created.

#### setNotificationsDeferred( notificationsDeferred : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setNotificationsDeferred data-toc-label='setNotificationsDeferred' }

When set to true, creation and disposal notifications will be deferred until set to false. When set to false,
this function will flush all the notifications for created and disposed elements (in that order) that occurred
while this container was deferring its notifications.

#### getMetadata( object : <span style="font-weight: 400;">[PhetioObjectMetadataInput](../tandem/PhetioObject.md#PhetioObjectMetadataInput)</span> ) : <span style="font-weight: 400;">[PhetioElementMetadata](../tandem/phet-io-types.md#PhetioElementMetadata)</span> {: #getMetadata data-toc-label='getMetadata' }

Add the phetioDynamicElementName for API tracking

### Instance Properties

#### elementCreatedEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)&lt;[ T, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> ]&gt;</span> {: #elementCreatedEmitter data-toc-label='elementCreatedEmitter' }

(readonly)

#### elementDisposedEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)&lt;[ T, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> ]&gt;</span> {: #elementDisposedEmitter data-toc-label='elementDisposedEmitter' }

(readonly)

#### supportsDynamicState : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #supportsDynamicState data-toc-label='supportsDynamicState' }

(readonly)

#### phetioDynamicElementName : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #phetioDynamicElementName data-toc-label='phetioDynamicElementName' }

(protected)

#### createElement : <span style="font-weight: 400;">( t: [Tandem](../tandem/Tandem.md), ...args: CreateElementArguments ) =&gt; T</span> {: #createElement data-toc-label='createElement' }

(protected)

#### defaultArguments : <span style="font-weight: 400;">CreateElementArguments | ( () =&gt; CreateElementArguments )</span> {: #defaultArguments data-toc-label='defaultArguments' }

(protected)

Arguments passed to the archetype when creating it.



## Type ClearOptions {: #ClearOptions }


```js
import type { ClearOptions } from 'scenerystack/tandem';
```


- **phetioState**?: [PhetioState](../tandem/phet-io-types.md#PhetioState) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>




## Type PhetioDynamicElementContainerOptions {: #PhetioDynamicElementContainerOptions }


```js
import type { PhetioDynamicElementContainerOptions } from 'scenerystack/tandem';
```


- **supportsDynamicState**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  By default, a PhetioDynamicElementContainer's elements are included in state such that on every setState call,
  the elements are cleared out by the phetioStateEngine so elements in the state can be added to the empty group.
  This option is for opting out of that behavior. When false, this container will not have its elements cleared
  when beginning to set PhET-iO state. Furthermore, view elements following the "only the models are stateful"
  pattern must mark this as false, otherwise the state engine will try to create these elements instead of letting
  the model notifications handle this.
- **containerSuffix**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
<br>  The container's tandem name must have this suffix, and the base tandem name for elements in
  the container will consist of the group's tandem name with this suffix stripped off.
- **phetioDynamicElementName**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
<br>  tandem name for elements in the container is the container's tandem name without containerSuffix
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[PhetioObjectOptions](../tandem/PhetioObject.md#PhetioObjectOptions), "phetioDynamicElement"&gt; &amp; [PickRequired](../phet-core/PickRequired.md)&lt;[PhetioObjectOptions](../tandem/PhetioObject.md#PhetioObjectOptions), "phetioType"&gt;




## Source Code

See the source for [PhetioDynamicElementContainer.ts](https://github.com/phetsims/tandem/blob/main/js/PhetioDynamicElementContainer.ts) in the [tandem](https://github.com/phetsims/tandem) repository.

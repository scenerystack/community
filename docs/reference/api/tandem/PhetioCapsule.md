# PhetioCapsule

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/tandem/blob/main/js/PhetioCapsule.ts](https://github.com/phetsims/tandem/blob/main/js/PhetioCapsule.ts) for the most up-to-date information.

## Overview

A PhET-iO class that encapsulates a PhetioObject that is not created during sim startup to provide PhET-iO API
validation, API communication (like to view in studio before creation), and to support PhET-iO state if applicable.

Constructing a PhetioCapsule creates a container encapsulating a wrapped element that can be of any type.

Clients should use myCapsule.getElement() instead of storing the element value itself.

NOTE: Be careful about treating the dynamic element as a singleton. When creating the archetype, problems can arise
because the capsule creates two instances of the element: one as the archetype and one as the instance. This can
result in trouble like in https://github.com/phetsims/joist/issues/821.

@author Michael Kauzmann (PhET Interactive Simulations)
@author Sam Reid (PhET Interactive Simulations)
@author Chris Klusendorf (PhET Interactive Simulations)

## Class PhetioCapsule {: #PhetioCapsule }


```js
import { PhetioCapsule } from 'scenerystack/tandem';
```
### Constructor

#### new PhetioCapsule( createElement : <span style="font-weight: 400;">( t: [Tandem](../tandem/Tandem.md), ...p: P ) =&gt; T</span>, defaultArguments : <span style="font-weight: 400;">P | ( () =&gt; P )</span>, providedOptions? : <span style="font-weight: 400;">[PhetioCapsuleOptions](../tandem/PhetioCapsule.md#PhetioCapsuleOptions)</span> ) {: #PhetioCapsule-constructor data-toc-label='new PhetioCapsule' }

### Instance Methods

#### disposeElement() {: #disposeElement data-toc-label='disposeElement' }

Dispose the underlying element.  Called by the PhetioStateEngine so the capsule element can be recreated with the
correct state.

#### hasElement() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasElement data-toc-label='hasElement' }

#### getElement( ...argsForCreateFunction : <span style="font-weight: 400;">P</span> ) : <span style="font-weight: 400;">T</span> {: #getElement data-toc-label='getElement' }

Creates the element if it has not been created yet, and returns it.

#### clear( providedOptions? : <span style="font-weight: 400;">[ClearOptions](../tandem/PhetioDynamicElementContainer.md#ClearOptions)</span> ) {: #clear data-toc-label='clear' }

PhetioCapsule will dispose its element, clearing things up and getting ready for setState, unless
this.disposeOnClear opts out of this behavior, in which case the element should fully support mutating itself
during state setting.

#### create( argsForCreateFunction : <span style="font-weight: 400;">P</span>, fromStateSetting ) : <span style="font-weight: 400;">T</span> {: #create data-toc-label='create' }

Primarily for internal use, clients should usually use getElement().
@param argsForCreateFunction
@param [fromStateSetting] - used for validation during state setting, see PhetioDynamicElementContainer.disposeElement() for documentation
(phet-io)

### Static Properties

#### PhetioCapsuleIO {: #PhetioCapsuleIO data-toc-label='PhetioCapsuleIO' }

Parametric IOType constructor.  Given an element type, this function returns a PhetioCapsule IOType.
This caching implementation should be kept in sync with the other parametric IOType caching implementations.
@param parameterType
@constructor



## Type PhetioCapsuleOptions {: #PhetioCapsuleOptions }


The container suffix has to be "Capsule" or we need to change some logic in PhetioIDUtils.getArchetypalPhetioID

```js
import type { PhetioCapsuleOptions } from 'scenerystack/tandem';
```


- **disposeOnClear**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Some elements like AboutDialog and PreferencesDialog persist for the lifetime of the sim, and once created
  are never disposed. This allows us to avoid extensive unnecessary work implementing dispose for these elements.
  If true, dispose the element when cleared. If set to false, clear() will basically be a no-op, which can be
  useful if you want to support lazy creation, but if this is not a true "dynamic element". This will also cause an
  assertion if ever trying to call disposeElement on this. https://github.com/phetsims/phet-io/issues/1810
- **disposeCreatedOnStateSet**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Only applicable if disposing during clear. This is an optimization to prevent the need to recreate the element each
  time PhET-iO state is set. Defaults to false. This should only be true if your dynamic element can be mutated
  with state, and doesn't need construction to be run during state set. This should be set to true when supporting
  heterogeneous capsules. https://github.com/phetsims/phet-io/issues/1810
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[PhetioDynamicElementContainerOptions](../tandem/PhetioDynamicElementContainer.md#PhetioDynamicElementContainerOptions), "containerSuffix"&gt;




## Source Code

See the source for [PhetioCapsule.ts](https://github.com/phetsims/tandem/blob/main/js/PhetioCapsule.ts) in the [tandem](https://github.com/phetsims/tandem) repository.

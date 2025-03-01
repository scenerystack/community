# GatedBooleanProperty

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/axon/blob/main/js/GatedBooleanProperty.ts](https://github.com/phetsims/axon/blob/main/js/GatedBooleanProperty.ts) for the most up-to-date information.

## Overview

The GatedBooleanProperty class abstracts the process of creating a boolean Property with an extra controlling Property.
Partially designed for its primary use case, PhET-iO instrumented Properties. This pattern comes in handy when an
object's boolean value is already controlled within the simulation, but there is a need to grant additional control
to an external entity such as a studio or a PhET-iO client. Here "gate" is an extra level of control (via the
composed Property). The class is a DerivedProperty that listens correctly to convey the boolean with
respect to all inputs.

Subclasses GatedVisibleProperty and GatedEnabledProperty should be used when your Property fills the role
of a visibleProperty or enabledProperty respectively. These subclasses provide standardized tandem names
and PhET-iO metadata.

@author Marla Schulz (PhET Interactive Simulations)
@author Michael Kauzmann (PhET Interactive Simulations)
@author Sam Reid (PhET Interactive Simulations)

## Class GatedBooleanProperty {: #GatedBooleanProperty }


```js
import { GatedBooleanProperty } from 'scenerystack/axon';
```
### Constructor

#### new GatedBooleanProperty( providedBooleanProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span>, parentTandem : <span style="font-weight: 400;">[Tandem](../tandem/Tandem.md)</span>, providedOptions? : <span style="font-weight: 400;">GatedBooleanPropertyOptions</span> ) {: #GatedBooleanProperty-constructor data-toc-label='new GatedBooleanProperty' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### selfBooleanProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #selfBooleanProperty data-toc-label='selfBooleanProperty' }

(readonly)



## Class GatedEnabledProperty {: #GatedEnabledProperty }


```js
import { GatedEnabledProperty } from 'scenerystack/axon';
```
### Constructor

#### new GatedEnabledProperty( providedBooleanProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span>, parentTandem : <span style="font-weight: 400;">[Tandem](../tandem/Tandem.md)</span>, providedOptions? : <span style="font-weight: 400;">GatedBooleanPropertyOptions</span> ) {: #GatedEnabledProperty-GatedEnabledProperty-constructor data-toc-label='new GatedEnabledProperty-GatedEnabledProperty' }

### Instance Methods





## Class GatedVisibleProperty {: #GatedVisibleProperty }


Provides PhET-iO clients with a way to permanently hide this Node via 'selfVisibleProperty'

```js
import { GatedVisibleProperty } from 'scenerystack/axon';
```
### Constructor

#### new GatedVisibleProperty( providedBooleanProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span>, parentTandem : <span style="font-weight: 400;">[Tandem](../tandem/Tandem.md)</span>, providedOptions? : <span style="font-weight: 400;">GatedBooleanPropertyOptions</span> ) {: #GatedVisibleProperty-GatedVisibleProperty-constructor data-toc-label='new GatedVisibleProperty-GatedVisibleProperty' }

### Instance Methods





## Source Code

See the source for [GatedBooleanProperty.ts](https://github.com/phetsims/axon/blob/main/js/GatedBooleanProperty.ts) in the [axon](https://github.com/phetsims/axon) repository.

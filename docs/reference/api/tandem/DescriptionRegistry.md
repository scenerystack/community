# DescriptionRegistry

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/tandem/blob/main/js/DescriptionRegistry.ts](https://github.com/phetsims/tandem/blob/main/js/DescriptionRegistry.ts) for the most up-to-date information.

## Overview

Registry for all objects with a tandem/descriptionTandem set, for use by the description system.

NOTE: Experimental currently, see https://github.com/phetsims/joist/issues/941

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class DescriptionRegistry {: #DescriptionRegistry }


```js
import { DescriptionRegistry } from 'scenerystack/tandem';
```
### Static Methods

#### add( tandem : <span style="font-weight: 400;">[Tandem](../tandem/Tandem.md)</span>, settable : <span style="font-weight: 400;">Settable</span> ) {: #add data-toc-label='add' }

Called when a PhetioObject is created with a tandem, or when a tandem is set on a PhetioObject.
Can also be called with a custom tandem that is not part of the PhET-iO API.

#### remove( settable : <span style="font-weight: 400;">Settable</span> ) {: #remove data-toc-label='remove' }

Called when a PhetioObject is disposed, or when you want to remove a custom tandem that is not part of the PhET-iO API.

### Static Properties

#### ENABLED {: #ENABLED data-toc-label='ENABLED' }

(readonly)

Feature flag, disabled until is ready for production, see https://github.com/phetsims/joist/issues/941

#### root : <span style="font-weight: 400;">DescriptionEntry</span> {: #root data-toc-label='root' }

(readonly)

Provides an object-structure matching the tandem hierarchy. On anything with a tandem with a matching
PhetioObject, it will be set as the _value property.
E.g. root.density.introScreen.model._value will be the IntroScreen object.

#### map : <span style="font-weight: 400;">Map&lt;TandemID, Settable&gt;</span> {: #map data-toc-label='map' }

(readonly)

Map from TandemID to the settable object, so we can find the object from a given tandemID. This
will often be a PhetioObject, but may be other objects with a custom tandem (that are not part of the PhET-iO API).

#### addedEmitter : <span style="font-weight: 400;">[TinyEmitter](../axon/TinyEmitter.md)</span> {: #addedEmitter data-toc-label='addedEmitter' }

(readonly)

Emits with (tandemID, phetioObject) on PhetioObject addition/removal.

#### removedEmitter : <span style="font-weight: 400;">[TinyEmitter](../axon/TinyEmitter.md)</span> {: #removedEmitter data-toc-label='removedEmitter' }

(readonly)



## Source Code

See the source for [DescriptionRegistry.ts](https://github.com/phetsims/tandem/blob/main/js/DescriptionRegistry.ts) in the [tandem](https://github.com/phetsims/tandem) repository.

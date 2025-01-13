# DescriptionRegistry

## Overview

Registry for all objects with a tandem/descriptionTandem set, for use by the description system.

NOTE: Experimental currently, see https://github.com/phetsims/joist/issues/941

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class DescriptionRegistry {: #DescriptionRegistry }


```js
import { DescriptionRegistry } from 'scenerystack/tandem';
```
### Static Methods

#### add( tandem : <span style="font-weight: 400; opacity: 80%;">Tandem</span>, settable : <span style="font-weight: 400; opacity: 80%;">Settable</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #add data-toc-label='add' }

Called when a PhetioObject is created with a tandem, or when a tandem is set on a PhetioObject.
Can also be called with a custom tandem that is not part of the PhET-iO API.

#### remove( settable : <span style="font-weight: 400; opacity: 80%;">Settable</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #remove data-toc-label='remove' }

Called when a PhetioObject is disposed, or when you want to remove a custom tandem that is not part of the PhET-iO API.

### Static Properties

#### ENABLED {: #ENABLED data-toc-label='ENABLED' }

(readonly)

Feature flag, disabled until is ready for production, see https://github.com/phetsims/joist/issues/941

#### root : <span style="font-weight: 400; opacity: 80%;">DescriptionEntry</span> {: #root data-toc-label='root' }

(readonly)

Provides an object-structure matching the tandem hierarchy. On anything with a tandem with a matching
PhetioObject, it will be set as the _value property.
E.g. root.density.introScreen.model._value will be the IntroScreen object.

#### map : <span style="font-weight: 400; opacity: 80%;">Map&lt;TandemID, Settable&gt;</span> {: #map data-toc-label='map' }

(readonly)

Map from TandemID to the settable object, so we can find the object from a given tandemID. This
will often be a PhetioObject, but may be other objects with a custom tandem (that are not part of the PhET-iO API).

#### addedEmitter : <span style="font-weight: 400; opacity: 80%;">TinyEmitter</span> {: #addedEmitter data-toc-label='addedEmitter' }

(readonly)

Emits with (tandemID, phetioObject) on PhetioObject addition/removal.

#### removedEmitter : <span style="font-weight: 400; opacity: 80%;">TinyEmitter</span> {: #removedEmitter data-toc-label='removedEmitter' }

(readonly)



## Source Code

See the source for [DescriptionRegistry.ts](https://github.com/phetsims/tandem/blob/main/js/DescriptionRegistry.ts) in the [tandem](https://github.com/phetsims/tandem) repository.

# DisplayedTrailsProperty

## Overview

A Property that will contain a list of Trails where the root of the trail is a root Node of a Display, and the leaf
node is the provided Node.

// REVIEW: This is a very complicated component and deserves a bit more doc. Some ideas about what to explain:
// REVIEW:   1. That this is synchronously updated and doesn't listen to instances.
// REVIEW:   2.
// REVIEW:   2.
// REVIEW:   2.

// REVIEW: can you describe this a bit more. Do you mean any Node in a trail? What about if the provided Node is disposed?
NOTE: If a Node is disposed, it will be removed from the trails.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class DisplayedTrailsProperty {: #DisplayedTrailsProperty }


```js
import { DisplayedTrailsProperty } from 'scenerystack/scenery';
```
### Constructor

#### new DisplayedTrailsProperty( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">[DisplayedTrailsPropertyOptions](../scenery/DisplayedTrailsProperty.md#DisplayedTrailsPropertyOptions)</span> ) {: #DisplayedTrailsProperty-constructor data-toc-label='new DisplayedTrailsProperty' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

REVIEW: I always forget why you don't need to also clear your reference to the provided Node. Do you?
REVIEW: Also maybe assert here that your provided node is in this listened to Node set?

### Instance Properties

#### node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #node data-toc-label='node' }

(readonly)

REVIEW: How about a rename like "targetNode", no strong preference if you don't want to.

#### listenedNodeSet : <span style="font-weight: 400;">Set&lt;[Node](../scenery/Node.md)&gt;</span> {: #listenedNodeSet data-toc-label='listenedNodeSet' }

(readonly)

REVIEW: Please add doc why we only need to listen to a Node once, even if it is in multiple trails?



## Type DisplayedTrailsPropertyOptions {: #DisplayedTrailsPropertyOptions }


```js
import type { DisplayedTrailsPropertyOptions } from 'scenerystack/scenery';
```


- **display**?: DisplayPredicate
- **followPDOMOrder**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **requireVisible**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **requirePDOMVisible**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **requireEnabled**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **requireInputEnabled**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>




## Source Code

See the source for [DisplayedTrailsProperty.ts](https://github.com/phetsims/scenery/blob/main/js/util/DisplayedTrailsProperty.ts) in the [scenery](https://github.com/phetsims/scenery) repository.

# Bucket

## Overview

Class that defines the shape and common functionality for a 'bucket', which is a container into which some sort of
model objects may be placed.  This is a model object in the Model-View-Controller paradigm, and requires a
counterpart in the view in order to be presented to the user.

In general, this is intended to be a base class, and subclasses should be used to add specific functionality, such as
how other model objects are added to and removed from the bucket.

One other important note: The position of the bucket in model space is based on the center of the bucket's opening.

@author John Blanco
@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Bucket {: #Bucket }


```js
import { Bucket } from 'scenerystack/phetcommon';
```
### Constructor

#### new Bucket( providedOptions? : <span style="font-weight: 400;">[BucketOptions](../phetcommon/Bucket.md#BucketOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods



### Instance Properties

#### position : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #position data-toc-label='position' }

The position is defined to be where the center of the hole is.

#### baseColor : <span style="font-weight: 400;">[TColor](../scenery/TColor.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #baseColor data-toc-label='baseColor' }

(readonly)

Base color of the bucket.

#### captionText : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #captionText data-toc-label='captionText' }

(readonly)

Caption to be shown on the bucket.

#### captionColor : <span style="font-weight: 400;">[TColor](../scenery/TColor.md)</span> {: #captionColor data-toc-label='captionColor' }

(readonly)

Color for the caption.

#### size : <span style="font-weight: 400;">[Dimension2](../dot/Dimension2.md)</span> {: #size data-toc-label='size' }

(readonly)

The size of the bucket.

#### holeShape : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #holeShape data-toc-label='holeShape' }

(readonly)

Create the shape of the bucket's hole.

#### containerShape : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #containerShape data-toc-label='containerShape' }

(readonly)

The shape of the front portion of the bucket.



## Type BucketOptions {: #BucketOptions }


```js
import type { BucketOptions } from 'scenerystack/phetcommon';
```
- **position**?: [Vector2](../dot/Vector2.md)
- **size**?: [Dimension2](../dot/Dimension2.md)
- **baseColor**?: [TColor](../scenery/TColor.md)
- **captionText**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **captionColor**?: [TColor](../scenery/TColor.md)
- **invertY**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- &amp; [PhetioObjectOptions](../tandem/PhetioObject.md#PhetioObjectOptions)




## Source Code

See the source for [Bucket.ts](https://github.com/phetsims/phetcommon/blob/main/js/model/Bucket.ts) in the [phetcommon](https://github.com/phetsims/phetcommon) repository.

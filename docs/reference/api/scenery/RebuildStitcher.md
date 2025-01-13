# RebuildStitcher

## Overview

Stitcher that rebuilds all of the blocks and reattaches drawables. Simple, but inefficient.

Kept for now as a run-time comparison and baseline for the GreedyStitcher or any other more advanced (but
more error-prone) stitching process.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RebuildStitcher {: #RebuildStitcher }


```js
import { RebuildStitcher } from 'scenerystack/scenery';
```
### Instance Methods

#### stitch( backbone, firstDrawable, lastDrawable, oldFirstDrawable, oldLastDrawable, firstChangeInterval, lastChangeInterval ) {: #stitch data-toc-label='stitch' }

Main stitch entry point, called directly from the backbone or cache. We are modifying our backbone's blocks and
their attached drawables.
@public

@param {BackboneDrawable} backbone
@param {Drawable|null} firstStitchDrawable
@param {Drawable|null} lastStitchDrawable
@param {Drawable|null} oldFirstStitchDrawable
@param {Drawable|null} oldLastStitchDrawable
@param {ChangeInterval} firstChangeInterval
@param {ChangeInterval} lastChangeInterval



## Source Code

See the source for [RebuildStitcher.js](https://github.com/phetsims/scenery/blob/main/js/display/RebuildStitcher.js) in the [scenery](https://github.com/phetsims/scenery) repository.

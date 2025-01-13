# SphereBucket

## Overview

SphereBucket is a model of a bucket that can be used to store spherical objects.  It manages the addition and removal
of the spheres, stacks them as they are added, and manages the stack as spheres are removed.

This expects the spheres to have certain properties, please inspect the code to understand the 'contract' between the
bucket and the spheres.

@author John Blanco

## Class SphereBucket {: #SphereBucket }


```js
import { SphereBucket } from 'scenerystack/phetcommon';
```
### Constructor

#### new SphereBucket( providedOptions? : <span style="font-weight: 400;">SphereBucketOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### addParticleFirstOpen( particle : <span style="font-weight: 400;">Particle</span>, animate : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #addParticleFirstOpen data-toc-label='addParticleFirstOpen' }

add a particle to the first open position in the stacking order

#### addParticleNearestOpen( particle : <span style="font-weight: 400;">Particle</span>, animate : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #addParticleNearestOpen data-toc-label='addParticleNearestOpen' }

add a particle to the nearest open position in the particle stack

#### removeParticle( particle : <span style="font-weight: 400;">ParticleWithBucketRemovalListener&lt;Particle&gt;</span>, skipLayout ) {: #removeParticle data-toc-label='removeParticle' }

remove a particle from the bucket, updating listeners as necessary

#### containsParticle( particle : <span style="font-weight: 400;">Particle</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #containsParticle data-toc-label='containsParticle' }

#### extractClosestParticle( position : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">Particle | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #extractClosestParticle data-toc-label='extractClosestParticle' }

extract the particle that is closest to the provided position from the bucket

#### getParticleList() : <span style="font-weight: 400;">Particle[]</span> {: #getParticleList data-toc-label='getParticleList' }

get the list of particles currently contained within this bucket

#### reset() {: #reset data-toc-label='reset' }

### Instance Properties

#### sphereBucketTandem : <span style="font-weight: 400;">[Tandem](../tandem/Tandem.md)</span> {: #sphereBucketTandem data-toc-label='sphereBucketTandem' }

(readonly)

### Static Properties

#### SphereBucketIO : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)</span> {: #SphereBucketIO data-toc-label='SphereBucketIO' }



## Source Code

See the source for [SphereBucket.ts](https://github.com/phetsims/phetcommon/blob/main/js/model/SphereBucket.ts) in the [phetcommon](https://github.com/phetsims/phetcommon) repository.

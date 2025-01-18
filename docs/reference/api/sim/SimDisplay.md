# SimDisplay

## Overview

Wrap the Display class in sim-specific logic. This includes fuzzing support, browser workarounds that have come up
over the years, and many listeners added the Display Instance.

@author Sam Reid (PhET Interactive Simulations)
@author Chris Malley (PixelZoom, Inc.)
@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;
@author Michael Kauzmann (PhET Interactive Simulations)
@author Jesse Greenberg (PhET Interactive Simulations)

## Class SimDisplay {: #SimDisplay }


```js
import { SimDisplay } from 'scenerystack/sim';
```
### Constructor

#### new SimDisplay( providedOptions : <span style="font-weight: 400;">[SimDisplayOptions](../sim/SimDisplay.md#SimDisplayOptions)</span> ) {: #SimDisplay-constructor data-toc-label='new SimDisplay' }

### Instance Methods

#### fuzzInputEvents() {: #fuzzInputEvents data-toc-label='fuzzInputEvents' }

Handle synthetic input event fuzzing

#### step( dt : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #step data-toc-label='step' }

### Instance Properties

#### simulationRoot : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #simulationRoot data-toc-label='simulationRoot' }

(readonly)

root for the simulation and the target for AnimatedPanZoomListener to support magnification since the Display rootNode
cannot be transformed

### Static Properties

#### DEFAULT_WEBGL {: #DEFAULT_WEBGL data-toc-label='DEFAULT_WEBGL' }

(readonly)

For consistent option defaults



## Type SimDisplayOptions {: #SimDisplayOptions }


```js
import type { SimDisplayOptions } from 'scenerystack/sim';
```


- **webgl**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **rootRenderer**?: [RendererType](../scenery/Node.md#RendererType)
- **preferencesModel**: [PreferencesModel](../sim/PreferencesModel.md)
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[DisplayOptions](../scenery/Display.md#DisplayOptions), "supportsInteractiveHighlights"&gt;




## Source Code

See the source for [SimDisplay.ts](https://github.com/phetsims/joist/blob/main/js/SimDisplay.ts) in the [joist](https://github.com/phetsims/joist) repository.

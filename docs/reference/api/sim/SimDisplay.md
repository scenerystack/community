# SimDisplay

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/joist/blob/main/js/SimDisplay.ts](https://github.com/phetsims/joist/blob/main/js/SimDisplay.ts) for the most up-to-date information.

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

#### getFocusablePlaceholder() : <span style="font-weight: 400;">[HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getFocusablePlaceholder data-toc-label='getFocusablePlaceholder' }

In simulations that do not support Interactive Description or any keyboard-focusable content, the simulation is a
black box that cannot even receive browser focus. In some cases, this can be buggy.

For example using global
keyboard listeners without any ability to focus in the sim is buggy in iframes: https://github.com/phetsims/circuit-construction-kit-common/issues/1027

This function will return null when the simDisplay is accessible because this element is not needed when there
are any other focusable elements in the sim (which is assumed to be true in any simulation PDOM).

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
- &amp; [DisplayOptions](../scenery/Display.md#DisplayOptions)




## Source Code

See the source for [SimDisplay.ts](https://github.com/phetsims/joist/blob/main/js/SimDisplay.ts) in the [joist](https://github.com/phetsims/joist) repository.

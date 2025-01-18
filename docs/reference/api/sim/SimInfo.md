# SimInfo

## Overview

Return an object of data about the simulation and the browser
much of the code was largely copied and expanded on from SimTroubleshootPage.html in the website repo. Note that
key names in the info object are used by the PhET-iO API, do not change without great consideration.

@author Michael Kauzmann (PhET Interactive Simulations)

## Class SimInfo {: #SimInfo }


```js
import { SimInfo } from 'scenerystack/sim';
```
### Constructor

#### new SimInfo( sim : <span style="font-weight: 400;">[Sim](../sim/Sim.md)</span> ) {: #SimInfo-constructor data-toc-label='new SimInfo' }

### Instance Methods



### Instance Properties

#### info : <span style="font-weight: 400;">[SimInfoState](../sim/SimInfo.md#SimInfoState)</span> {: #info data-toc-label='info' }

(readonly)

### Static Properties

#### SimInfoIO : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)</span> {: #SimInfoIO data-toc-label='SimInfoIO' }



## Type ScreenState {: #ScreenState }


```js
import type { ScreenState } from 'scenerystack/sim';
```


- **name**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **phetioID**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>




## Type SimInfoState {: #SimInfoState }


```js
import type { SimInfoState } from 'scenerystack/sim';
```


- **simName**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **screens**: [ScreenState](../sim/SimInfo.md#ScreenState)[]
- **repoName**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **screenPropertyValue**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **wrapperMetadata**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> | Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>, [IntentionalAny](../phet-core/IntentionalAny.md)&gt;
- **dataStreamVersion**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **phetioCommandProcessorProtocol**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **simVersion**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **randomSeed**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **url**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **userAgent**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **window**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **referrer**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **language**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **pixelRatio**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **isWebGLSupported**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **checkIE11StencilSupport**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **flags**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>




## Source Code

See the source for [SimInfo.ts](https://github.com/phetsims/joist/blob/main/js/SimInfo.ts) in the [joist](https://github.com/phetsims/joist) repository.

# Screen

## Overview

A Screen is the largest chunk of a simulation. (Java sims used the term Module, but that term
is too overloaded to use with JavaScript and Git.)

When creating a Sim, Screens are supplied as the arguments. They can be specified as object literals or through
instances of this class. This class may centralize default behavior or state for Screens in the future, but right
now it only allows you to create Sims without using named parameter object literals.

@author Sam Reid (PhET Interactive Simulations)

## Class Screen {: #Screen }


Parameterized on M=Model and V=View

```js
import { Screen } from 'scenerystack/sim';
```
### Constructor

#### new Screen( createModel : <span style="font-weight: 400;">() =&gt; M</span>, createView : <span style="font-weight: 400;">( model: M ) =&gt; V</span>, providedOptions : <span style="font-weight: 400;">[ScreenOptions](../sim/Screen.md#ScreenOptions)</span> ) {: #Screen-constructor data-toc-label='new Screen' }

### Instance Methods

#### hasModel() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasModel data-toc-label='hasModel' }

#### hasView() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasView data-toc-label='hasView' }

#### reset() {: #reset data-toc-label='reset' }

### Instance Properties

#### backgroundColorProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;[Color](../scenery/Color.md)&gt; | [Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt; | [Property](../axon/Property.md)&lt;[Color](../scenery/Color.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span> {: #backgroundColorProperty data-toc-label='backgroundColorProperty' }

#### maxDT : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #maxDT data-toc-label='maxDT' }

(readonly)

dt cap in seconds, see https://github.com/phetsims/joist/issues/130

#### activeProperty : <span style="font-weight: 400;">[BooleanProperty](../axon/BooleanProperty.md)</span> {: #activeProperty data-toc-label='activeProperty' }

(readonly)

#### screenButtonsHelpText : <span style="font-weight: 400;">[PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType)</span> {: #screenButtonsHelpText data-toc-label='screenButtonsHelpText' }

(readonly)

Help text used on the screen buttons, see options above.

#### nameProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span> {: #nameProperty data-toc-label='nameProperty' }

(readonly)

#### showScreenIconFrameForNavigationBarFill : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #showScreenIconFrameForNavigationBarFill data-toc-label='showScreenIconFrameForNavigationBarFill' }

(readonly)

#### homeScreenIcon : <span style="font-weight: 400;">[ScreenIcon](../sim/ScreenIcon.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #homeScreenIcon data-toc-label='homeScreenIcon' }

(readonly)

#### navigationBarIcon : <span style="font-weight: 400;">[ScreenIcon](../sim/ScreenIcon.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #navigationBarIcon data-toc-label='navigationBarIcon' }

#### showUnselectedHomeScreenIconFrame : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #showUnselectedHomeScreenIconFrame data-toc-label='showUnselectedHomeScreenIconFrame' }

(readonly)

#### createKeyboardHelpNode : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> | ( ( tandem: [Tandem](../tandem/Tandem.md) ) =&gt; [Node](../scenery/Node.md) )</span> {: #createKeyboardHelpNode data-toc-label='createKeyboardHelpNode' }

(readonly)

#### pdomDisplayNameProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span> {: #pdomDisplayNameProperty data-toc-label='pdomDisplayNameProperty' }

(readonly)

### Static Properties

#### HOME_SCREEN_ICON_ASPECT_RATIO {: #HOME_SCREEN_ICON_ASPECT_RATIO data-toc-label='HOME_SCREEN_ICON_ASPECT_RATIO' }

(readonly)

#### MINIMUM_HOME_SCREEN_ICON_SIZE {: #MINIMUM_HOME_SCREEN_ICON_SIZE data-toc-label='MINIMUM_HOME_SCREEN_ICON_SIZE' }

(readonly)

#### MINIMUM_NAVBAR_ICON_SIZE {: #MINIMUM_NAVBAR_ICON_SIZE data-toc-label='MINIMUM_NAVBAR_ICON_SIZE' }

(readonly)

#### ScreenIO : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)</span> {: #ScreenIO data-toc-label='ScreenIO' }

(readonly)



## Type ScreenOptions {: #ScreenOptions }


```js
import type { ScreenOptions } from 'scenerystack/sim';
```


- **name**?: [PhetioProperty](../axon/PhetioProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **instrumentNameProperty**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **backgroundColorProperty**?: [Property](../axon/Property.md)&lt;[Color](../scenery/Color.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt; | [Property](../axon/Property.md)&lt;[Color](../scenery/Color.md)&gt; | [Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt; | [ProfileColorProperty](../scenery/ProfileColorProperty.md)
<br>  It would be preferable to support Property&lt;Color | string&gt; solely, but many subtypes are hardcoded to be Color only
  or string only, so we support this polymorphic form
- **homeScreenIcon**?: [ScreenIcon](../sim/ScreenIcon.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **showUnselectedHomeScreenIconFrame**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **navigationBarIcon**?: [ScreenIcon](../sim/ScreenIcon.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **showScreenIconFrameForNavigationBarFill**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **maxDT**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  dt cap in seconds, see https://github.com/phetsims/joist/issues/130
- **createKeyboardHelpNode**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> | ( ( tandem: [Tandem](../tandem/Tandem.md) ) =&gt; [Node](../scenery/Node.md) )
- **screenButtonsHelpText**?: [PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Help text that will be added to the Home screen button and navigation bar button for this screen.
  This is often a full but short sentence with a period at the end of it. This is also used as the
  hint response for these buttons with the Voicing feature.
- &amp; StrictOmit&lt;[PhetioObjectOptions](../tandem/PhetioObject.md#PhetioObjectOptions), "tandemNameSuffix"&gt; &amp; PickRequired&lt;[PhetioObjectOptions](../tandem/PhetioObject.md#PhetioObjectOptions), "tandem"&gt;




## Source Code

See the source for [Screen.ts](https://github.com/phetsims/joist/blob/main/js/Screen.ts) in the [joist](https://github.com/phetsims/joist) repository.

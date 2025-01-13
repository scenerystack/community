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

#### new Screen( createModel : <span style="font-weight: 400; opacity: 80%;">() =&gt; M</span>, createView : <span style="font-weight: 400; opacity: 80%;">( model: M ) =&gt; V</span>, providedOptions : <span style="font-weight: 400; opacity: 80%;">ScreenOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### hasModel() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #hasModel data-toc-label='hasModel' }

#### hasView() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #hasView data-toc-label='hasView' }

#### reset() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #reset data-toc-label='reset' }

### Instance Properties

#### backgroundColorProperty : <span style="font-weight: 400; opacity: 80%;">Property&lt;Color&gt; | Property&lt;string&gt; | Property&lt;Color | string&gt;</span> {: #backgroundColorProperty data-toc-label='backgroundColorProperty' }

#### maxDT : <span style="font-weight: 400; opacity: 80%;">number</span> {: #maxDT data-toc-label='maxDT' }

(readonly)

dt cap in seconds, see https://github.com/phetsims/joist/issues/130

#### activeProperty : <span style="font-weight: 400; opacity: 80%;">BooleanProperty</span> {: #activeProperty data-toc-label='activeProperty' }

(readonly)

#### screenButtonsHelpText : <span style="font-weight: 400; opacity: 80%;">PDOMValueType</span> {: #screenButtonsHelpText data-toc-label='screenButtonsHelpText' }

(readonly)

Help text used on the screen buttons, see options above.

#### nameProperty : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;string&gt;</span> {: #nameProperty data-toc-label='nameProperty' }

(readonly)

#### showScreenIconFrameForNavigationBarFill : <span style="font-weight: 400; opacity: 80%;">string | null</span> {: #showScreenIconFrameForNavigationBarFill data-toc-label='showScreenIconFrameForNavigationBarFill' }

(readonly)

#### homeScreenIcon : <span style="font-weight: 400; opacity: 80%;">ScreenIcon | null</span> {: #homeScreenIcon data-toc-label='homeScreenIcon' }

(readonly)

#### navigationBarIcon : <span style="font-weight: 400; opacity: 80%;">ScreenIcon | null</span> {: #navigationBarIcon data-toc-label='navigationBarIcon' }

#### showUnselectedHomeScreenIconFrame : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #showUnselectedHomeScreenIconFrame data-toc-label='showUnselectedHomeScreenIconFrame' }

(readonly)

#### createKeyboardHelpNode : <span style="font-weight: 400; opacity: 80%;">null | ( ( tandem: Tandem ) =&gt; Node )</span> {: #createKeyboardHelpNode data-toc-label='createKeyboardHelpNode' }

(readonly)

#### pdomDisplayNameProperty : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;string&gt;</span> {: #pdomDisplayNameProperty data-toc-label='pdomDisplayNameProperty' }

(readonly)

### Static Properties

#### HOME_SCREEN_ICON_ASPECT_RATIO {: #HOME_SCREEN_ICON_ASPECT_RATIO data-toc-label='HOME_SCREEN_ICON_ASPECT_RATIO' }

(readonly)

#### MINIMUM_HOME_SCREEN_ICON_SIZE {: #MINIMUM_HOME_SCREEN_ICON_SIZE data-toc-label='MINIMUM_HOME_SCREEN_ICON_SIZE' }

(readonly)

#### MINIMUM_NAVBAR_ICON_SIZE {: #MINIMUM_NAVBAR_ICON_SIZE data-toc-label='MINIMUM_NAVBAR_ICON_SIZE' }

(readonly)

#### ScreenIO : <span style="font-weight: 400; opacity: 80%;">IOType</span> {: #ScreenIO data-toc-label='ScreenIO' }

(readonly)



## Source Code

See the source for [Screen.ts](https://github.com/phetsims/joist/blob/main/js/Screen.ts) in the [joist](https://github.com/phetsims/joist) repository.

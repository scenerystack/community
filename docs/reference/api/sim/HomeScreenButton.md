# HomeScreenButton

## Overview

A HomeScreenButton is displayed on the HomeScreen for choosing a screen. The button can be in a selected or
unselected state - it's large with a yellow frame in its selected state, and small in its unselected state.
Selecting the button when in its "selected" state will result in that screen being chosen.

@author Michael Kauzmann (PhET Interactive Simulations)
@author Chris Klusendorf (PhET Interactive Simulations)

## Class HomeScreenButton {: #HomeScreenButton }


```js
import { HomeScreenButton } from 'scenerystack/sim';
```
### Constructor

#### new HomeScreenButton( screen : <span style="font-weight: 400;">[Screen](../sim/Screen.md)&lt;[IntentionalAny](../phet-core/IntentionalAny.md), [IntentionalAny](../phet-core/IntentionalAny.md)&gt;</span>, homeScreenModel : <span style="font-weight: 400;">[HomeScreenModel](../sim/HomeScreenModel.md)</span>, providedOptions? : <span style="font-weight: 400;">[HomeScreenButtonOptions](../sim/HomeScreenButton.md#HomeScreenButtonOptions)</span> ) {: #HomeScreenButton-constructor data-toc-label='new HomeScreenButton' }

### Instance Methods



### Instance Properties

#### screen : <span style="font-weight: 400;">[Screen](../sim/Screen.md)&lt;[IntentionalAny](../phet-core/IntentionalAny.md), [IntentionalAny](../phet-core/IntentionalAny.md)&gt;</span> {: #screen data-toc-label='screen' }

(readonly)



## Type HomeScreenButtonOptions {: #HomeScreenButtonOptions }


```js
import type { HomeScreenButtonOptions } from 'scenerystack/sim';
```


- **showUnselectedHomeScreenIconFrame**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- &amp; [VoicingOptions](../scenery/Voicing.md#VoicingOptions) &amp; [VBoxOptions](../scenery/VBox.md#VBoxOptions) &amp; [PickRequired](../phet-core/PickRequired.md)&lt;ParentOptions, "tandem"&gt;




## Source Code

See the source for [HomeScreenButton.ts](https://github.com/phetsims/joist/blob/main/js/HomeScreenButton.ts) in the [joist](https://github.com/phetsims/joist) repository.

# PreferencesModel

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/joist/blob/main/js/preferences/PreferencesModel.ts](https://github.com/phetsims/joist/blob/main/js/preferences/PreferencesModel.ts) for the most up-to-date information.

## Overview

A Class that manages Simulation features that are enabled and disabled by user Preferences.

@author Jesse Greenberg

## Class PreferencesModel {: #PreferencesModel }


```js
import { PreferencesModel } from 'scenerystack/sim';
```
### Constructor

#### new PreferencesModel( providedOptions : <span style="font-weight: 400;">[PreferencesModelOptions](../sim/PreferencesModel.md#PreferencesModelOptions)</span> ) {: #PreferencesModel-constructor data-toc-label='new PreferencesModel' }

### Instance Methods

#### preferenceModelHasCustom( preferenceModel : <span style="font-weight: 400;">Required&lt;CustomPreferencesOptions&gt;</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #preferenceModelHasCustom data-toc-label='preferenceModelHasCustom' }

#### supportsSimulationPreferences() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #supportsSimulationPreferences data-toc-label='supportsSimulationPreferences' }

Returns true if the SimulationModel supports any preferences that can be changed.

#### supportsVisualPreferences() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #supportsVisualPreferences data-toc-label='supportsVisualPreferences' }

Returns true if the VisualModel has any preferences that can be changed.

#### supportsAudioPreferences() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #supportsAudioPreferences data-toc-label='supportsAudioPreferences' }

Returns true if the AudioModel has any preferences that can be changed.

#### supportsInputPreferences() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #supportsInputPreferences data-toc-label='supportsInputPreferences' }

Returns true if the InputModel has any preferences that can be changed.

#### supportsLocalizationPreferences() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #supportsLocalizationPreferences data-toc-label='supportsLocalizationPreferences' }

Returns true if the LocalizationModel has any preferences that can be changed.

#### shouldShowDialog() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #shouldShowDialog data-toc-label='shouldShowDialog' }

Returns true if this model supports any controllable preferences for the dialog. Returns false when the dialog
would have nothing to display.

### Instance Properties

#### simulationModel : <span style="font-weight: 400;">[SimulationModel](../sim/PreferencesModel.md#SimulationModel)</span> {: #simulationModel data-toc-label='simulationModel' }

(readonly)

#### visualModel : <span style="font-weight: 400;">[VisualModel](../sim/PreferencesModel.md#VisualModel)</span> {: #visualModel data-toc-label='visualModel' }

(readonly)

#### audioModel : <span style="font-weight: 400;">[AudioModel](../sim/PreferencesModel.md#AudioModel)</span> {: #audioModel data-toc-label='audioModel' }

(readonly)

#### inputModel : <span style="font-weight: 400;">[InputModel](../sim/PreferencesModel.md#InputModel)</span> {: #inputModel data-toc-label='inputModel' }

(readonly)

#### localizationModel : <span style="font-weight: 400;">[LocalizationModel](../sim/PreferencesModel.md#LocalizationModel)</span> {: #localizationModel data-toc-label='localizationModel' }

(readonly)

### Static Properties

#### PreferencesModelIO : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)</span> {: #PreferencesModelIO data-toc-label='PreferencesModelIO' }



## Type AudioModel {: #AudioModel }


Model for controls that appear in the "Audio" panel of preferences

```js
import type { AudioModel } from 'scenerystack/sim';
```


Required&lt;AudioPreferencesOptions&gt;



## Type InputModel {: #InputModel }


```js
import type { InputModel } from 'scenerystack/sim';
```


Required&lt;InputPreferencesOptions&gt;



## Type LocalizationModel {: #LocalizationModel }


```js
import type { LocalizationModel } from 'scenerystack/sim';
```


Required&lt;LocalizationPreferencesOptions&gt;



## Type PreferencesModelOptions {: #PreferencesModelOptions }


```js
import type { PreferencesModelOptions } from 'scenerystack/sim';
```


- **simulationOptions**?: SimulationPreferencesOptions
<br>  configuration for controls in the "Simulation" tab of the PreferencesDialog
- **visualOptions**?: VisualPreferencesOptions
<br>  configuration for controls in the "Visual" tab of the PreferencesDialog
- **audioOptions**?: AudioPreferencesOptions
<br>  configuration for controls in the "Audio" tab of the PreferencesDialog
- **inputOptions**?: InputPreferencesOptions
<br>  configuration for controls in the "Input" tab of the PreferencesDialog
- **localizationOptions**?: LocalizationPreferencesOptions
<br>  configuration for controls in the "Localization" tab of the PreferencesDialog
- &amp; [PhetioObjectOptions](../tandem/PhetioObject.md#PhetioObjectOptions)




## Type SimulationModel {: #SimulationModel }


Model for controls that appear in the "Simulation" panel of preferences

```js
import type { SimulationModel } from 'scenerystack/sim';
```


- **tandemName**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- &amp; Required&lt;SimulationPreferencesOptions&gt;




## Type VisualModel {: #VisualModel }


Model for controls that appear in the "Visual" panel of preferences

```js
import type { VisualModel } from 'scenerystack/sim';
```


Required&lt;VisualPreferencesOptions&gt;



## Source Code

See the source for [PreferencesModel.ts](https://github.com/phetsims/joist/blob/main/js/preferences/PreferencesModel.ts) in the [joist](https://github.com/phetsims/joist) repository.

# Checkbox

## Overview

Checkbox is a typical checkbox UI component.

@author Chris Malley (PixelZoom, Inc.)

## Class Checkbox {: #Checkbox }


```js
import { Checkbox } from 'scenerystack/sun';
```
### Constructor

#### new Checkbox( property : <span style="font-weight: 400; opacity: 80%;">PhetioProperty&lt;boolean&gt;</span>, content : <span style="font-weight: 400; opacity: 80%;">Node</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">CheckboxOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### setInputEnabledProperty( newTarget : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;boolean&gt; | null</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setInputEnabledProperty data-toc-label='setInputEnabledProperty' }

The inputEnabledProperty for Checkbox is internally controlled by factors such as the displayOnlyProperty
and the enabledProperty.

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

#### setCheckboxColorBackground( value : <span style="font-weight: 400; opacity: 80%;">TPaint</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setCheckboxColorBackground data-toc-label='setCheckboxColorBackground' }

Sets the background color of the checkbox.

#### getCheckboxColorBackground() : <span style="font-weight: 400; opacity: 80%;">TPaint</span> {: #getCheckboxColorBackground data-toc-label='getCheckboxColorBackground' }

Gets the background color of the checkbox.

#### setCheckboxColor( value : <span style="font-weight: 400; opacity: 80%;">TPaint</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setCheckboxColor data-toc-label='setCheckboxColor' }

Sets the color of the checkbox.

#### getCheckboxColor() : <span style="font-weight: 400; opacity: 80%;">TPaint</span> {: #getCheckboxColor data-toc-label='getCheckboxColor' }

Gets the color of the checkbox.

#### setMouseArea( area : <span style="font-weight: 400; opacity: 80%;">Shape | Bounds2 | null</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setMouseArea data-toc-label='setMouseArea' }

#### setTouchArea( area : <span style="font-weight: 400; opacity: 80%;">Shape | Bounds2 | null</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setTouchArea data-toc-label='setTouchArea' }



## Source Code

See the source for [Checkbox.ts](https://github.com/phetsims/sun/blob/main/js/Checkbox.ts) in the [sun](https://github.com/phetsims/sun) repository.

# NumberDisplay

## Overview

Displays a Property of type {number} in a background rectangle.

@author Chris Malley (PixelZoom, Inc.)

## Class NumberDisplay {: #NumberDisplay }


```js
import { NumberDisplay } from 'scenerystack/scenery-phet';
```
### Constructor

#### new NumberDisplay( numberProperty : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;number | null&gt;</span>, displayRange : <span style="font-weight: 400; opacity: 80%;">Range</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">NumberDisplayOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

#### setNumberFont( font : <span style="font-weight: 400; opacity: 80%;">Font</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setNumberFont data-toc-label='setNumberFont' }

Sets the number text font.

#### setNumberFill( fill : <span style="font-weight: 400; opacity: 80%;">TPaint</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setNumberFill data-toc-label='setNumberFill' }

Sets the number text fill.

#### setBackgroundFill( fill : <span style="font-weight: 400; opacity: 80%;">TPaint</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setBackgroundFill data-toc-label='setBackgroundFill' }

Sets the background fill.

#### getBackgroundFill() : <span style="font-weight: 400; opacity: 80%;">TPaint</span> {: #getBackgroundFill data-toc-label='getBackgroundFill' }

Gets the background fill.

#### setBackgroundStroke( stroke : <span style="font-weight: 400; opacity: 80%;">TPaint</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setBackgroundStroke data-toc-label='setBackgroundStroke' }

Sets the background stroke.

#### getBackgroundWidth() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getBackgroundWidth data-toc-label='getBackgroundWidth' }

Get the width of the background.

#### setBackgroundWidth( width : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setBackgroundWidth data-toc-label='setBackgroundWidth' }

Set the width of the background node.

### Instance Properties

#### valueStringProperty : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;string&gt;</span> {: #valueStringProperty data-toc-label='valueStringProperty' }

(readonly)

### Static Properties

#### NumberDisplayIO : <span style="font-weight: 400; opacity: 80%;">IOType</span> {: #NumberDisplayIO data-toc-label='NumberDisplayIO' }

(readonly)



## Source Code

See the source for [NumberDisplay.ts](https://github.com/phetsims/scenery-phet/blob/main/js/NumberDisplay.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.

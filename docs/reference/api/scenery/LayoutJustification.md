# LayoutJustification

## Overview

Rich enumeration for internal layout code

NOTE: This is orientation-agnostic for a reason, so that it's natural with GridBox, and FlowBox can switch
orientation

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class LayoutJustification {: #LayoutJustification }


```js
import { LayoutJustification } from 'scenerystack/scenery';
```
### Constructor

#### new LayoutJustification( spacingFunctionFactory : <span style="font-weight: 400;">SpaceRemainingFunctionFactory</span>, horizontal : <span style="font-weight: 400;">[HorizontalLayoutJustification](../scenery/LayoutJustification.md#HorizontalLayoutJustification)</span>, vertical : <span style="font-weight: 400;">[VerticalLayoutJustification](../scenery/LayoutJustification.md#VerticalLayoutJustification)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods



### Instance Properties

#### horizontal : <span style="font-weight: 400;">[HorizontalLayoutJustification](../scenery/LayoutJustification.md#HorizontalLayoutJustification)</span> {: #horizontal data-toc-label='horizontal' }

(readonly)

String enumeration types for the horizontal orientation

#### vertical : <span style="font-weight: 400;">[VerticalLayoutJustification](../scenery/LayoutJustification.md#VerticalLayoutJustification)</span> {: #vertical data-toc-label='vertical' }

(readonly)

String enumeration types for the vertical orientation

#### spacingFunctionFactory : <span style="font-weight: 400;">SpaceRemainingFunctionFactory</span> {: #spacingFunctionFactory data-toc-label='spacingFunctionFactory' }

(readonly)

See SpaceRemainingFunctionFactory for docs

### Static Methods

#### getAllowedJustificationValues( orientation : <span style="font-weight: 400;">[Orientation](../phet-core/Orientation.md)</span> ) : <span style="font-weight: 400;">readonly <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>[]</span> {: #getAllowedJustificationValues data-toc-label='getAllowedJustificationValues' }

#### justifyToInternal( orientation : <span style="font-weight: 400;">[Orientation](../phet-core/Orientation.md)</span>, key : <span style="font-weight: 400;">[HorizontalLayoutJustification](../scenery/LayoutJustification.md#HorizontalLayoutJustification) | [VerticalLayoutJustification](../scenery/LayoutJustification.md#VerticalLayoutJustification)</span> ) : <span style="font-weight: 400;">[LayoutJustification](../scenery/LayoutJustification.md)</span> {: #justifyToInternal data-toc-label='justifyToInternal' }

Converts a string union value into the internal Enumeration value

#### internalToJustify( orientation : <span style="font-weight: 400;">[Orientation](../phet-core/Orientation.md)</span>, justify : <span style="font-weight: 400;">[LayoutJustification](../scenery/LayoutJustification.md)</span> ) : <span style="font-weight: 400;">[HorizontalLayoutJustification](../scenery/LayoutJustification.md#HorizontalLayoutJustification) | [VerticalLayoutJustification](../scenery/LayoutJustification.md#VerticalLayoutJustification)</span> {: #internalToJustify data-toc-label='internalToJustify' }

Converts an internal Enumeration value into a string union value.

### Static Properties

#### START : <span style="font-weight: 400;">[LayoutJustification](../scenery/LayoutJustification.md)</span> {: #START data-toc-label='START' }

(readonly)

#### END : <span style="font-weight: 400;">[LayoutJustification](../scenery/LayoutJustification.md)</span> {: #END data-toc-label='END' }

(readonly)

#### CENTER : <span style="font-weight: 400;">[LayoutJustification](../scenery/LayoutJustification.md)</span> {: #CENTER data-toc-label='CENTER' }

(readonly)

#### SPACE_BETWEEN : <span style="font-weight: 400;">[LayoutJustification](../scenery/LayoutJustification.md)</span> {: #SPACE_BETWEEN data-toc-label='SPACE_BETWEEN' }

(readonly)

#### SPACE_AROUND : <span style="font-weight: 400;">[LayoutJustification](../scenery/LayoutJustification.md)</span> {: #SPACE_AROUND data-toc-label='SPACE_AROUND' }

(readonly)

#### SPACE_EVENLY : <span style="font-weight: 400;">[LayoutJustification](../scenery/LayoutJustification.md)</span> {: #SPACE_EVENLY data-toc-label='SPACE_EVENLY' }

(readonly)

#### enumeration : <span style="font-weight: 400;">[Enumeration](../phet-core/Enumeration.md)</span> {: #enumeration data-toc-label='enumeration' }

(readonly)



## Source Code

See the source for [LayoutJustification.ts](https://github.com/phetsims/scenery/blob/main/js/layout/LayoutJustification.ts) in the [scenery](https://github.com/phetsims/scenery) repository.

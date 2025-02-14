# ScientificNotationNode

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/ScientificNotationNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/ScientificNotationNode.ts) for the most up-to-date information.

## Overview

ScientificNotationNode displays a number in scientific notation, M x 10^E, where:
- M is the mantissa
- E is the exponent, a positive or negative integer

For example, with 2 decimal places in the mantissa, 0.0002342 would be written as 2.34 x 10^-4.

@author Chris Malley (PixelZoom, Inc.)

## Class ScientificNotationNode {: #ScientificNotationNode }


```js
import { ScientificNotationNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new ScientificNotationNode( valueProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span>, providedOptions? : <span style="font-weight: 400;">[ScientificNotationNodeOptions](../scenery-phet/ScientificNotationNode.md#ScientificNotationNodeOptions)</span> ) {: #ScientificNotationNode-constructor data-toc-label='new ScientificNotationNode' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### valueProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span> {: #valueProperty data-toc-label='valueProperty' }

(readonly)

### Static Methods

#### toScientificNotation( value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, providedOptions? : <span style="font-weight: 400;">[ToScientificNotationOptions](../scenery-phet/ScientificNotationNode.md#ToScientificNotationOptions)</span> ) : <span style="font-weight: 400;">[ScientificNotation](../scenery-phet/ScientificNotationNode.md#ScientificNotation)</span> {: #toScientificNotation data-toc-label='toScientificNotation' }

Converts a number to scientific-notation format: M x 10^E, with mantissa M and exponent E.



## Type ScientificNotation {: #ScientificNotation }


return type of toScientificNotation

```js
import type { ScientificNotation } from 'scenerystack/scenery-phet';
```


- **mantissa**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **exponent**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>




## Type ScientificNotationNodeOptions {: #ScientificNotationNodeOptions }


```js
import type { ScientificNotationNodeOptions } from 'scenerystack/scenery-phet';
```


- **fill**?: [TColor](../scenery/TColor.md)
- **font**?: [Font](../scenery/Font.md)
- **exponent**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **mantissaDecimalPlaces**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **exponentScale**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **showIntegersAsMantissaOnly**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **showZeroAsInteger**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **showZeroExponent**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **exponentXSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **exponentYOffset**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **capHeightScale**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **nullValueString**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[NodeOptions](../scenery/Node.md#NodeOptions), "children"&gt;




## Type ToScientificNotationOptions {: #ToScientificNotationOptions }


options for toScientificNotation

```js
import type { ToScientificNotationOptions } from 'scenerystack/scenery-phet';
```


Pick&lt;[ScientificNotationNodeOptions](../scenery-phet/ScientificNotationNode.md#ScientificNotationNodeOptions), "mantissaDecimalPlaces" | "exponent"&gt;



## Source Code

See the source for [ScientificNotationNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/ScientificNotationNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.

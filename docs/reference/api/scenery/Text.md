# Text

## Overview

Displays text that can be filled/stroked.

For many font/text-related properties, it's helpful to understand the CSS equivalents (http://www.w3.org/TR/css3-fonts/).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Text {: #Text }


```js
import { Text } from 'scenerystack/scenery';
```
### Constructor

#### new Text( string : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span>, options? : <span style="font-weight: 400;">[TextOptions](../scenery/Text.md#TextOptions)</span> ) {: #Text-constructor data-toc-label='new Text' }

### Instance Methods

#### mutate( options? : <span style="font-weight: 400;">[TextOptions](../scenery/Text.md#TextOptions)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #mutate data-toc-label='mutate' }

#### setString( string : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setString data-toc-label='setString' }

Sets the string displayed by our node.

@param string - The string to display. If it's a number, it will be cast to a string

#### getString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getString data-toc-label='getString' }

Returns the string displayed by our text Node.

NOTE: If a number was provided to setString(), it will not be returned as a number here.

#### getRenderedText() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getRenderedText data-toc-label='getRenderedText' }

Returns a potentially modified version of this.string, where spaces are replaced with non-breaking spaces,
and embedding marks are potentially simplified.

#### setStringProperty( newTarget : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setStringProperty data-toc-label='setStringProperty' }

See documentation for Node.setVisibleProperty, except this is for the text string.

NOTE: Setting the .string after passing a truly read-only Property will fail at runtime. We choose to allow passing
in read-only Properties for convenience.

#### getStringProperty() : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span> {: #getStringProperty data-toc-label='getStringProperty' }

Like Node.getVisibleProperty(), but for the text string. Note this is not the same as the Property provided in
setStringProperty. Thus is the nature of TinyForwardingProperty.

#### initializePhetioObject( baseOptions : <span style="font-weight: 400;">Partial&lt;[PhetioObjectOptions](../tandem/PhetioObject.md#PhetioObjectOptions)&gt;</span>, config : <span style="font-weight: 400;">[TextOptions](../scenery/Text.md#TextOptions)</span> ) {: #initializePhetioObject data-toc-label='initializePhetioObject' }

(protected)

See documentation and comments in Node.initializePhetioObject

#### getPhetioMouseHitTarget( fromLinking ) : <span style="font-weight: 400;">[PhetioObject](../tandem/PhetioObject.md) | 'phetioNotSelectable'</span> {: #getPhetioMouseHitTarget data-toc-label='getPhetioMouseHitTarget' }

Text supports a "string" selection mode, in which it will map to its stringProperty (if applicable), otherwise is
uses the default mouse-hit target from the supertype.

#### setBoundsMethod( method : <span style="font-weight: 400;">[TextBoundsMethod](../scenery/Text.md#TextBoundsMethod)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setBoundsMethod data-toc-label='setBoundsMethod' }

Sets the method that is used to determine bounds from the text.

Possible values:
- 'fast' - Measures using SVG, can be inaccurate. Can't be rendered in Canvas.
- 'fastCanvas' - Like 'fast', but allows rendering in Canvas.
- 'accurate' - Recursively renders to a Canvas to accurately determine bounds. Slow, but works with all renderers.
- 'hybrid' - [default] Cache SVG height, and uses Canvas measureText for the width.

TODO: deprecate fast/fastCanvas options? https://github.com/phetsims/scenery/issues/1581

NOTE: Most of these are unfortunately not hard guarantees that content is all inside of the returned bounds.
      'accurate' should probably be the only one where that guarantee can be assumed. Things like cyrillic in
      italic, combining marks and other unicode features can fail to be detected. This is particularly relevant
      for the height, as certain stacked accent marks or descenders can go outside of the prescribed range,
      and fast/canvasCanvas/hybrid will always return the same vertical bounds (top and bottom) for a given font
      when the text isn't the empty string.

#### getBoundsMethod() : <span style="font-weight: 400;">[TextBoundsMethod](../scenery/Text.md#TextBoundsMethod)</span> {: #getBoundsMethod data-toc-label='getBoundsMethod' }

Returns the current method to estimate the bounds of the text. See setBoundsMethod() for more information.

#### getTextRendererBitmask() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getTextRendererBitmask data-toc-label='getTextRendererBitmask' }

(protected)

Returns a bitmask representing the supported renderers for the current configuration of the Text node.

@returns - A bitmask that includes supported renderers, see Renderer for details.

#### invalidateSupportedRenderers() {: #invalidateSupportedRenderers data-toc-label='invalidateSupportedRenderers' }

Triggers a check and update for what renderers the current configuration supports.
This should be called whenever something that could potentially change supported renderers happen (which can
be isHTML, boundsMethod, etc.)

#### updateSelfBounds() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #updateSelfBounds data-toc-label='updateSelfBounds' }

(protected)

Computes a more efficient selfBounds for our Text.

@returns - Whether the self bounds changed.

#### canvasPaintSelf( wrapper : <span style="font-weight: 400;">[CanvasContextWrapper](../scenery/CanvasContextWrapper.md)</span>, matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) {: #canvasPaintSelf data-toc-label='canvasPaintSelf' }

(protected)

Draws the current Node's self representation, assuming the wrapper's Canvas context is already in the local
coordinate frame of this node.

@param wrapper
@param matrix - The transformation matrix already applied to the context.

#### getSafeSelfBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getSafeSelfBounds data-toc-label='getSafeSelfBounds' }

Returns a bounding box that should contain all self content in the local coordinate frame (our normal self bounds
aren't guaranteed this for Text)

We need to add additional padding around the text when the text is in a container that could clip things badly
if the text is larger than the normal bounds computation.

#### setFont( font : <span style="font-weight: 400;">[Font](../scenery/Font.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setFont data-toc-label='setFont' }

Sets the font of the Text node.

This can either be a Scenery Font object, or a string. The string format is described by Font's constructor, and
is basically the CSS3 font shortcut format. If a string is provided, it will be wrapped with a new (immutable)
Scenery Font object.

#### getFont() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getFont data-toc-label='getFont' }

Returns a string representation of the current Font.

This returns the CSS3 font shortcut that is a possible input to setFont(). See Font's constructor for detailed
information on the ordering of information.

NOTE: If a Font object was provided to setFont(), this will not currently return it.
TODO: Can we refactor so we can have access to (a) the Font object, and possibly (b) the initially provided value. https://github.com/phetsims/scenery/issues/1581

#### setFontWeight( weight : <span style="font-weight: 400;">[FontWeight](../scenery/Font.md#FontWeight) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setFontWeight data-toc-label='setFontWeight' }

Sets the weight of this node's font.

The font weight supports the following options:
  'normal', 'bold', 'bolder', 'lighter', '100', '200', '300', '400', '500', '600', '700', '800', '900',
  or a number that when cast to a string will be one of the strings above.

#### getFontWeight() : <span style="font-weight: 400;">[FontWeight](../scenery/Font.md#FontWeight)</span> {: #getFontWeight data-toc-label='getFontWeight' }

Returns the weight of this node's font, see setFontWeight() for details.

NOTE: If a numeric weight was passed in, it has been cast to a string, and a string will be returned here.

#### setFontFamily( family : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setFontFamily data-toc-label='setFontFamily' }

Sets the family of this node's font.

@param family - A comma-separated list of families, which can include generic families (preferably at
                the end) such as 'serif', 'sans-serif', 'cursive', 'fantasy' and 'monospace'. If there
                is any question about escaping (such as spaces in a font name), the family should be
                surrounded by double quotes.

#### getFontFamily() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getFontFamily data-toc-label='getFontFamily' }

Returns the family of this node's font, see setFontFamily() for details.

#### setFontStretch( stretch : <span style="font-weight: 400;">[FontStretch](../scenery/Font.md#FontStretch)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setFontStretch data-toc-label='setFontStretch' }

Sets the stretch of this node's font.

The font stretch supports the following options:
  'normal', 'ultra-condensed', 'extra-condensed', 'condensed', 'semi-condensed',
  'semi-expanded', 'expanded', 'extra-expanded' or 'ultra-expanded'

#### getFontStretch() : <span style="font-weight: 400;">[FontStretch](../scenery/Font.md#FontStretch)</span> {: #getFontStretch data-toc-label='getFontStretch' }

Returns the stretch of this node's font, see setFontStretch() for details.

#### setFontStyle( style : <span style="font-weight: 400;">[FontStyle](../scenery/Font.md#FontStyle)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setFontStyle data-toc-label='setFontStyle' }

Sets the style of this node's font.

The font style supports the following options: 'normal', 'italic' or 'oblique'

#### getFontStyle() : <span style="font-weight: 400;">[FontStyle](../scenery/Font.md#FontStyle)</span> {: #getFontStyle data-toc-label='getFontStyle' }

Returns the style of this node's font, see setFontStyle() for details.

#### setFontSize( size : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setFontSize data-toc-label='setFontSize' }

Sets the size of this node's font.

The size can either be a number (created as a quantity of 'px'), or any general CSS font-size string (for
example, '30pt', '5em', etc.)

#### getFontSize() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getFontSize data-toc-label='getFontSize' }

Returns the size of this node's font, see setFontSize() for details.

NOTE: If a numeric size was passed in, it has been converted to a string with 'px', and a string will be
returned here.

#### isPainted() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isPainted data-toc-label='isPainted' }

Whether this Node itself is painted (displays something itself).

#### areSelfBoundsValid() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #areSelfBoundsValid data-toc-label='areSelfBoundsValid' }

Whether this Node's selfBounds are considered to be valid (always containing the displayed self content
of this node). Meant to be overridden in subtypes when this can change (e.g. Text).

If this value would potentially change, please trigger the event 'selfBoundsValid'.

#### dispose() {: #dispose data-toc-label='dispose' }

### Static Methods

#### embeddedDebugString( string : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #embeddedDebugString data-toc-label='embeddedDebugString' }

Replaces embedding mark characters with visible strings. Useful for debugging for strings with embedding marks.

@returns - With embedding marks replaced.

#### simplifyEmbeddingMarks( string : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #simplifyEmbeddingMarks data-toc-label='simplifyEmbeddingMarks' }

Returns a (potentially) modified string where embedding marks have been simplified.

This simplification wouldn't usually be necessary, but we need to prevent cases like
https://github.com/phetsims/scenery/issues/520 where Edge decides to turn [POP][LTR] (after another [LTR]) into
a 'box' character, when nothing should be rendered.

This will remove redundant nesting:
  e.g. [LTR][LTR]boo[POP][POP] =&gt; [LTR]boo[POP])
and will also combine adjacent directions:
  e.g. [LTR]Mail[POP][LTR]Man[POP] =&gt; [LTR]MailMan[Pop]

Note that it will NOT combine in this way if there was a space between the two LTRs:
  e.g. [LTR]Mail[POP] [LTR]Man[Pop])
as in the general case, we'll want to preserve the break there between embeddings.

TODO: A stack-based implementation that doesn't create a bunch of objects/closures would be nice for performance.

### Static Properties

#### STRING_PROPERTY_NAME {: #STRING_PROPERTY_NAME data-toc-label='STRING_PROPERTY_NAME' }

(readonly)

#### STRING_PROPERTY_TANDEM_NAME {: #STRING_PROPERTY_TANDEM_NAME data-toc-label='STRING_PROPERTY_TANDEM_NAME' }

(readonly)

#### TextIO : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)</span> {: #TextIO data-toc-label='TextIO' }



## Type TextBoundsMethod {: #TextBoundsMethod }


```js
import type { TextBoundsMethod } from 'scenerystack/scenery';
```


"fast" | "fastCanvas" | "accurate" | "hybrid"



## Type TextOptions {: #TextOptions }


```js
import type { TextOptions } from 'scenerystack/scenery';
```


- **boundsMethod**?: [TextBoundsMethod](../scenery/Text.md#TextBoundsMethod)
- **stringProperty**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **string**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **font**?: [Font](../scenery/Font.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **fontWeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **fontFamily**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **fontStretch**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **fontStyle**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **fontSize**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **stringPropertyOptions**?: [PropertyOptions](../axon/Property.md#PropertyOptions)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;
- &amp; [PaintableOptions](../scenery/Paintable.md#PaintableOptions) &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Source Code

See the source for [Text.ts](https://github.com/phetsims/scenery/blob/main/js/nodes/Text.ts) in the [scenery](https://github.com/phetsims/scenery) repository.

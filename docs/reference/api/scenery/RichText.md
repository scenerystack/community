# RichText

## Overview

Displays rich text by interpreting the input text as HTML, supporting a limited set of tags that prevent any
security vulnerabilities. It does this by parsing the input HTML and splitting it into multiple Text children
recursively.

NOTE: Encoding HTML entities is required, and malformed HTML is not accepted.

NOTE: Currently it can line-wrap at the start and end of tags. This will probably be fixed in the future to only
      potentially break on whitespace.

It supports the following markup and features in the string content (in addition to other options as listed in
RICH_TEXT_OPTION_KEYS):
- &lt;a href="{{placeholder}}"&gt; for links (pass in { links: { placeholder: ACTUAL_HREF } })
- &lt;b&gt; and &lt;strong&gt; for bold text
- &lt;i&gt; and &lt;em&gt; for italic text
- &lt;sub&gt; and &lt;sup&gt; for subscripts / superscripts
- &lt;u&gt; for underlined text
- &lt;s&gt; for strikethrough text
- &lt;span&gt; tags with a dir="ltr" / dir="rtl" attribute
- &lt;br&gt; for explicit line breaks
- &lt;node id="id"&gt; for embedding a Node into the text (pass in { nodes: { id: NODE } }), with optional align attribute
- Custom Scenery wrapping around arbitrary tags, e.g. &lt;blur&gt;...&lt;/blur&gt;, pass in { tags: { blur: ... } }, see below
- Unicode bidirectional marks (present in PhET strings) for full RTL support
- CSS style="..." attributes, with color and font settings, see https://github.com/phetsims/scenery/issues/807

Examples from the scenery-phet demo:

new RichText( 'RichText can have &lt;b&gt;bold&lt;/b&gt; and &lt;i&gt;italic&lt;/i&gt; text.' ),
new RichText( 'Can do H&lt;sub&gt;2&lt;/sub&gt;O (A&lt;sub&gt;sub&lt;/sub&gt; and A&lt;sup&gt;sup&lt;/sup&gt;), or nesting: x&lt;sup&gt;2&lt;sup&gt;2&lt;/sup&gt;&lt;/sup&gt;' ),
new RichText( 'Additionally: &lt;span style="color: blue;"&gt;color&lt;/span&gt;, &lt;span style="font-size: 30px;"&gt;sizes&lt;/span&gt;, &lt;span style="font-family: serif;"&gt;faces&lt;/span&gt;, &lt;s&gt;strikethrough&lt;/s&gt;, and &lt;u&gt;underline&lt;/u&gt;' ),
new RichText( 'These &lt;b&gt;&lt;em&gt;can&lt;/em&gt; &lt;u&gt;&lt;span style="color: red;"&gt;be&lt;/span&gt; mixed&lt;sup&gt;1&lt;/sup&gt;&lt;/u&gt;&lt;/b&gt;.' ),
new RichText( '\u202aHandles bidirectional text: \u202b&lt;span style="color: #0a0;"&gt;مقابض&lt;/span&gt; النص ثنائي &lt;b&gt;الاتجاه&lt;/b&gt;&lt;sub&gt;2&lt;/sub&gt;\u202c\u202c' ),
new RichText( '\u202b\u062a\u0633\u062a (\u0632\u0628\u0627\u0646)\u202c' ),
new RichText( 'HTML entities need to be escaped, like &amp;amp; and &amp;lt;.' ),
new RichText( 'Supports &lt;a href="{{phetWebsite}}"&gt;&lt;em&gt;links&lt;/em&gt; with &lt;b&gt;markup&lt;/b&gt;&lt;/a&gt;, and &lt;a href="{{callback}}"&gt;links that call functions&lt;/a&gt;.', {
  links: {
    phetWebsite: 'https://phet.colorado.edu',
    callback: function() {
      console.log( 'Link was clicked' );
    }
  }
} ),
new RichText( 'Or also &lt;a href="https://phet.colorado.edu"&gt;links directly in the string&lt;/a&gt;.', {
  links: true
} ),
new RichText( 'Links not found &lt;a href="{{bogus}}"&gt;are ignored&lt;/a&gt; for security.' ),
new HBox( {
  spacing: 30,
  children: [
    new RichText( 'Multi-line text with the&lt;br&gt;separator &amp;lt;br&amp;gt; and &lt;a href="https://phet.colorado.edu"&gt;handles&lt;br&gt;links&lt;/a&gt; and other &lt;b&gt;tags&lt;br&gt;across lines&lt;/b&gt;', {
      links: true
    } ),
    new RichText( 'Supposedly RichText supports line wrapping. Here is a lineWrap of 300, which should probably wrap multiple times here', { lineWrap: 300 } )
  ]
} )

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RichText {: #RichText }


```js
import { RichText } from 'scenerystack/scenery';
```
### Constructor

#### new RichText( string : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span>, providedOptions? : <span style="font-weight: 400;">[RichTextOptions](../scenery/RichText.md#RichTextOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### setStringProperty( newTarget : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setStringProperty data-toc-label='setStringProperty' }

See documentation for Node.setVisibleProperty, except this is for the text string.

NOTE: Setting the .string after passing a truly read-only Property will fail at runtime. We choose to allow passing
in read-only Properties for convenience.

#### getStringProperty() : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span> {: #getStringProperty data-toc-label='getStringProperty' }

Like Node.getVisibleProperty, but for the text string. Note this is not the same as the Property provided in
setStringProperty. Thus is the nature of TinyForwardingProperty.

#### getPhetioMouseHitTarget( fromLinking ) : <span style="font-weight: 400;">[PhetioObject](../tandem/PhetioObject.md) | 'phetioNotSelectable'</span> {: #getPhetioMouseHitTarget data-toc-label='getPhetioMouseHitTarget' }

RichText supports a "string" selection mode, in which it will map to its stringProperty (if applicable), otherwise is
uses the default mouse-hit target from the supertype.

#### initializePhetioObject( baseOptions : <span style="font-weight: 400;">Partial&lt;[PhetioObjectOptions](../tandem/PhetioObject.md#PhetioObjectOptions)&gt;</span>, providedOptions : <span style="font-weight: 400;">[RichTextOptions](../scenery/RichText.md#RichTextOptions)</span> ) {: #initializePhetioObject data-toc-label='initializePhetioObject' }

See documentation and comments in Node.initializePhetioObject

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references.

#### setString( string : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setString data-toc-label='setString' }

Sets the string displayed by our node.

NOTE: Encoding HTML entities is required, and malformed HTML is not accepted.

@param string - The string to display. If it's a number, it will be cast to a string

#### getString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getString data-toc-label='getString' }

Returns the string displayed by our text Node.

#### setBoundsMethod( method : <span style="font-weight: 400;">[TextBoundsMethod](../scenery/Text.md#TextBoundsMethod)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setBoundsMethod data-toc-label='setBoundsMethod' }

Sets the method that is used to determine bounds from the text. See Text.setBoundsMethod for details

#### getBoundsMethod() : <span style="font-weight: 400;">[TextBoundsMethod](../scenery/Text.md#TextBoundsMethod)</span> {: #getBoundsMethod data-toc-label='getBoundsMethod' }

Returns the current method to estimate the bounds of the text. See setBoundsMethod() for more information.

#### setFont( font : <span style="font-weight: 400;">[Font](../scenery/Font.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setFont data-toc-label='setFont' }

Sets the font of our node.

#### getFont() : <span style="font-weight: 400;">[Font](../scenery/Font.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getFont data-toc-label='getFont' }

Returns the current Font

#### setFill( fill : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setFill data-toc-label='setFill' }

Sets the fill of our text.

#### getFill() : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> {: #getFill data-toc-label='getFill' }

Returns the current fill.

#### setStroke( stroke : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setStroke data-toc-label='setStroke' }

Sets the stroke of our text.

#### getStroke() : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> {: #getStroke data-toc-label='getStroke' }

Returns the current stroke.

#### setLineWidth( lineWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setLineWidth data-toc-label='setLineWidth' }

Sets the lineWidth of our text.

#### getLineWidth() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getLineWidth data-toc-label='getLineWidth' }

Returns the current lineWidth.

#### setSubScale( subScale : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setSubScale data-toc-label='setSubScale' }

Sets the scale (relative to 1) of any string under subscript (&lt;sub&gt;) elements.

#### getSubScale() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getSubScale data-toc-label='getSubScale' }

Returns the scale (relative to 1) of any string under subscript (&lt;sub&gt;) elements.

#### setSubXSpacing( subXSpacing : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setSubXSpacing data-toc-label='setSubXSpacing' }

Sets the horizontal spacing before any subscript (&lt;sub&gt;) elements.

#### getSubXSpacing() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getSubXSpacing data-toc-label='getSubXSpacing' }

Returns the horizontal spacing before any subscript (&lt;sub&gt;) elements.

#### setSubYOffset( subYOffset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setSubYOffset data-toc-label='setSubYOffset' }

Sets the adjustment offset to the vertical placement of any subscript (&lt;sub&gt;) elements.

#### getSubYOffset() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getSubYOffset data-toc-label='getSubYOffset' }

Returns the adjustment offset to the vertical placement of any subscript (&lt;sub&gt;) elements.

#### setSupScale( supScale : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setSupScale data-toc-label='setSupScale' }

Sets the scale (relative to 1) of any string under superscript (&lt;sup&gt;) elements.

#### getSupScale() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getSupScale data-toc-label='getSupScale' }

Returns the scale (relative to 1) of any string under superscript (&lt;sup&gt;) elements.

#### setSupXSpacing( supXSpacing : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setSupXSpacing data-toc-label='setSupXSpacing' }

Sets the horizontal spacing before any superscript (&lt;sup&gt;) elements.

#### getSupXSpacing() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getSupXSpacing data-toc-label='getSupXSpacing' }

Returns the horizontal spacing before any superscript (&lt;sup&gt;) elements.

#### setSupYOffset( supYOffset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setSupYOffset data-toc-label='setSupYOffset' }

Sets the adjustment offset to the vertical placement of any superscript (&lt;sup&gt;) elements.

#### getSupYOffset() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getSupYOffset data-toc-label='getSupYOffset' }

Returns the adjustment offset to the vertical placement of any superscript (&lt;sup&gt;) elements.

#### setCapHeightScale( capHeightScale : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setCapHeightScale data-toc-label='setCapHeightScale' }

Sets the expected cap height (baseline to top of capital letters) as a scale of the detected distance from the
baseline to the top of the text bounds.

#### getCapHeightScale() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getCapHeightScale data-toc-label='getCapHeightScale' }

Returns the expected cap height (baseline to top of capital letters) as a scale of the detected distance from the
baseline to the top of the text bounds.

#### setUnderlineLineWidth( underlineLineWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setUnderlineLineWidth data-toc-label='setUnderlineLineWidth' }

Sets the lineWidth of underline lines.

#### getUnderlineLineWidth() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getUnderlineLineWidth data-toc-label='getUnderlineLineWidth' }

Returns the lineWidth of underline lines.

#### setUnderlineHeightScale( underlineHeightScale : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setUnderlineHeightScale data-toc-label='setUnderlineHeightScale' }

Sets the underline height adjustment as a proportion of the detected distance from the baseline to the top of the
text bounds.

#### getUnderlineHeightScale() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getUnderlineHeightScale data-toc-label='getUnderlineHeightScale' }

Returns the underline height adjustment as a proportion of the detected distance from the baseline to the top of the
text bounds.

#### setStrikethroughLineWidth( strikethroughLineWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setStrikethroughLineWidth data-toc-label='setStrikethroughLineWidth' }

Sets the lineWidth of strikethrough lines.

#### getStrikethroughLineWidth() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getStrikethroughLineWidth data-toc-label='getStrikethroughLineWidth' }

Returns the lineWidth of strikethrough lines.

#### setStrikethroughHeightScale( strikethroughHeightScale : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setStrikethroughHeightScale data-toc-label='setStrikethroughHeightScale' }

Sets the strikethrough height adjustment as a proportion of the detected distance from the baseline to the top of the
text bounds.

#### getStrikethroughHeightScale() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getStrikethroughHeightScale data-toc-label='getStrikethroughHeightScale' }

Returns the strikethrough height adjustment as a proportion of the detected distance from the baseline to the top of the
text bounds.

#### setLinkFill( linkFill : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setLinkFill data-toc-label='setLinkFill' }

Sets the color of links. If null, no fill will be overridden.

#### getLinkFill() : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> {: #getLinkFill data-toc-label='getLinkFill' }

Returns the color of links.

#### setLinkEventsHandled( linkEventsHandled : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setLinkEventsHandled data-toc-label='setLinkEventsHandled' }

Sets whether link clicks will call event.handle().

#### getLinkEventsHandled() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #getLinkEventsHandled data-toc-label='getLinkEventsHandled' }

Returns whether link events will be handled.

#### setLinks( links : <span style="font-weight: 400;">[RichTextLinks](../scenery/RichText.md#RichTextLinks)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setLinks data-toc-label='setLinks' }

#### getLinks() : <span style="font-weight: 400;">[RichTextLinks](../scenery/RichText.md#RichTextLinks)</span> {: #getLinks data-toc-label='getLinks' }

Returns whether link events will be handled.

#### setNodes( nodes : <span style="font-weight: 400;">Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>, [Node](../scenery/Node.md)&gt;</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setNodes data-toc-label='setNodes' }

#### getNodes() : <span style="font-weight: 400;">Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>, [Node](../scenery/Node.md)&gt;</span> {: #getNodes data-toc-label='getNodes' }

#### setTags( tags : <span style="font-weight: 400;">Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>, ( node: [Node](../scenery/Node.md) ) =&gt; [Node](../scenery/Node.md)&gt;</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setTags data-toc-label='setTags' }

#### getTags() : <span style="font-weight: 400;">Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>, ( node: [Node](../scenery/Node.md) ) =&gt; [Node](../scenery/Node.md)&gt;</span> {: #getTags data-toc-label='getTags' }

#### setReplaceNewlines( replaceNewlines : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setReplaceNewlines data-toc-label='setReplaceNewlines' }

Sets whether newlines are replaced with &lt;br&gt;

#### getReplaceNewlines() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #getReplaceNewlines data-toc-label='getReplaceNewlines' }

#### setAlign( align : <span style="font-weight: 400;">[RichTextAlign](../scenery/RichText.md#RichTextAlign)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setAlign data-toc-label='setAlign' }

Sets the alignment of text (only relevant if there are multiple lines).

#### getAlign() : <span style="font-weight: 400;">[RichTextAlign](../scenery/RichText.md#RichTextAlign)</span> {: #getAlign data-toc-label='getAlign' }

Returns the current alignment of the text (only relevant if there are multiple lines).

#### setLeading( leading : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setLeading data-toc-label='setLeading' }

Sets the leading (spacing between lines)

#### getLeading() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getLeading data-toc-label='getLeading' }

Returns the leading (spacing between lines)

#### setLineWrap( lineWrap : <span style="font-weight: 400;">RequiredOption&lt;SelfOptions, 'lineWrap'&gt;</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setLineWrap data-toc-label='setLineWrap' }

Sets the line wrap width for the text (or null if none is desired). Lines longer than this length will wrap
automatically to the next line.

@param lineWrap - If it's a number, it should be greater than 0.

#### getLineWrap() : <span style="font-weight: 400;">RequiredOption&lt;SelfOptions, 'lineWrap'&gt;</span> {: #getLineWrap data-toc-label='getLineWrap' }

Returns the line wrap width.

#### mutate( options? : <span style="font-weight: 400;">[RichTextOptions](../scenery/RichText.md#RichTextOptions)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #mutate data-toc-label='mutate' }

### Static Methods

#### stringWithFont( str : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, font : <span style="font-weight: 400;">[Font](../scenery/Font.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #stringWithFont data-toc-label='stringWithFont' }

Returns a wrapped version of the string with a font specifier that uses the given font object.

NOTE: Does an approximation of some font values (using &lt;b&gt; or &lt;i&gt;), and cannot force the lack of those if it is
included in bold/italic exterior tags.

#### himalayaElementToString( element : <span style="font-weight: 400;">[HimalayaNode](../scenery/RichTextUtils.md#HimalayaNode)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #himalayaElementToString data-toc-label='himalayaElementToString' }

Stringifies an HTML subtree defined by the given element.

#### himalayaElementToAccessibleString( element : <span style="font-weight: 400;">[HimalayaNode](../scenery/RichTextUtils.md#HimalayaNode)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #himalayaElementToAccessibleString data-toc-label='himalayaElementToAccessibleString' }

Stringifies an HTML subtree defined by the given element, but removing certain tags that we don't need for
accessibility (like &lt;a&gt;, &lt;span&gt;, etc.), and adding in tags we do want (see ACCESSIBLE_TAGS).

#### getAccessibleStringProperty( stringProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span> ) : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span> {: #getAccessibleStringProperty data-toc-label='getAccessibleStringProperty' }

Transforms a given string with HTML markup into a string suitable for screen readers.
Preserves basic styling tags while removing non-accessible markup.

#### contentToString( content : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, isLTR? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #contentToString data-toc-label='contentToString' }

Takes the element.content from himalaya, unescapes HTML entities, and applies the proper directional tags.

See https://github.com/phetsims/scenery-phet/issues/315

### Static Properties

#### STRING_PROPERTY_TANDEM_NAME {: #STRING_PROPERTY_TANDEM_NAME data-toc-label='STRING_PROPERTY_TANDEM_NAME' }

(readonly)

Text and RichText currently use the same tandem name for their stringProperty.

#### RichTextIO : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)</span> {: #RichTextIO data-toc-label='RichTextIO' }



## Source Code

See the source for [RichText.ts](https://github.com/phetsims/scenery/blob/main/js/nodes/RichText.ts) in the [scenery](https://github.com/phetsims/scenery) repository.

# TextBounds

## Overview

Different methods of detection of text bounds.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class TextBounds {: #TextBounds }


```js
import { TextBounds } from 'scenerystack/scenery';
```
### Static Methods

#### approximateSVGBounds( font : <span style="font-weight: 400;">[Font](../scenery/Font.md)</span>, renderedText : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #approximateSVGBounds data-toc-label='approximateSVGBounds' }

Returns a new Bounds2 that is the approximate bounds of a Text node displayed with the specified font and renderedText.

This method uses an SVG Text element, sets its text, and then determines its size to estimate the size of rendered text.

NOTE: Calling code relies on the new Bounds2 instance, as they mutate it.

#### guessSVGBounds( font : <span style="font-weight: 400;">[Font](../scenery/Font.md)</span>, renderedText : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #guessSVGBounds data-toc-label='guessSVGBounds' }

Returns a guess for what the SVG bounds of a font would be, based on PhetFont as an example.

#### accurateCanvasBounds( text : <span style="font-weight: 400;">[Text](../scenery/Text.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #accurateCanvasBounds data-toc-label='accurateCanvasBounds' }

Returns a new Bounds2 that is the approximate bounds of the specified Text node.

NOTE: Calling code relies on the new Bounds2 instance, as they mutate it.

#### accurateCanvasBoundsFallback( text : <span style="font-weight: 400;">[Text](../scenery/Text.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #accurateCanvasBoundsFallback data-toc-label='accurateCanvasBoundsFallback' }

Returns a new Bounds2 that is the approximate bounds of the specified Text node.

This method repeatedly renders the text into a Canvas and checks for what pixels are filled. Iteratively doing this for each bound
(top/left/bottom/right) until a tolerance results in very accurate bounds of what is displayed.

NOTE: Calling code relies on the new Bounds2 instance, as they mutate it.

#### getVerticalBounds( font : <span style="font-weight: 400;">[Font](../scenery/Font.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getVerticalBounds data-toc-label='getVerticalBounds' }

Returns a possibly-cached (treat as immutable) Bounds2 for use mainly for vertical parameters, given a specific Font.

Uses SVG bounds determination for this value.

#### approximateCanvasWidth( font : <span style="font-weight: 400;">[Font](../scenery/Font.md)</span>, renderedText : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #approximateCanvasWidth data-toc-label='approximateCanvasWidth' }

Returns an approximate width for text, determined by using Canvas' measureText().

@param font - The font of the text
@param renderedText - Text to display (with any special characters replaced)

#### approximateHybridBounds( font : <span style="font-weight: 400;">[Font](../scenery/Font.md)</span>, renderedText : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #approximateHybridBounds data-toc-label='approximateHybridBounds' }

Returns a new Bounds2 that is the approximate bounds of a Text node displayed with the specified font and renderedText.

This method uses a hybrid approach, using SVG measurement to determine the height, but using Canvas to determine the width.

NOTE: Calling code relies on the new Bounds2 instance, as they mutate it.

@param font - The font of the text
@param renderedText - Text to display (with any special characters replaced)

#### approximateDOMBounds( font : <span style="font-weight: 400;">[Font](../scenery/Font.md)</span>, element : <span style="font-weight: 400;">globalThis.[Node](../scenery/Node.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #approximateDOMBounds data-toc-label='approximateDOMBounds' }

Returns a new Bounds2 that is the approximate bounds of a Text node displayed with the specified font, given a DOM element

NOTE: Calling code relies on the new Bounds2 instance, as they mutate it.

@param font - The font of the text
@param element - DOM element created for the text. This is required, as the text handles HTML and non-HTML text differently.

#### approximateImprovedDOMBounds( font : <span style="font-weight: 400;">[Font](../scenery/Font.md)</span>, element : <span style="font-weight: 400;">globalThis.[Node](../scenery/Node.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #approximateImprovedDOMBounds data-toc-label='approximateImprovedDOMBounds' }

Returns a new Bounds2 that is the approximate bounds of a Text node displayed with the specified font, given a DOM element

TODO: Can we use this? What are the differences? https://github.com/phetsims/scenery/issues/1581

NOTE: Calling code relies on the new Bounds2 instance, as they mutate it.

@param font - The font of the text
@param element - DOM element created for the text. This is required, as the text handles HTML and non-HTML text differently.

#### setSVGTextAttributes( textElement : <span style="font-weight: 400;">SVGTextElement</span>, font : <span style="font-weight: 400;">[Font](../scenery/Font.md)</span>, renderedText : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) {: #setSVGTextAttributes data-toc-label='setSVGTextAttributes' }

Modifies an SVG text element's properties to match the specified font and text.

@param textElement
@param font - The font of the text
@param renderedText - Text to display (with any special characters replaced)

#### initializeTextBounds() {: #initializeTextBounds data-toc-label='initializeTextBounds' }

Initializes containers and elements required for SVG text measurement.



## Source Code

See the source for [TextBounds.ts](https://github.com/phetsims/scenery/blob/main/js/util/TextBounds.ts) in the [scenery](https://github.com/phetsims/scenery) repository.

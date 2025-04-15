# Color

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/util/Color.ts](https://github.com/phetsims/scenery/blob/main/js/util/Color.ts) for the most up-to-date information.

## Overview

A color with RGBA values, assuming the sRGB color space is used.

See http://www.w3.org/TR/css3-color/

TODO: make a getHue, getSaturation, getLightness. we can then expose them via ES5! https://github.com/phetsims/scenery/issues/1581

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Color {: #Color }


```js
import { Color } from 'scenerystack/scenery';
```
### Constructor

#### new Color( color : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> ) {: #Color-constructor data-toc-label='new Color' }

### Instance Methods

#### copy() : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #copy data-toc-label='copy' }

Returns a copy of this color.

#### set( r : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | [Color](../scenery/Color.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, g? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, b? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, a? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #set data-toc-label='set' }

Sets the values of this Color. Supported styles:

- set( color ) is a copy constructor
- set( string ) will parse the string assuming it's a CSS-compatible color, e.g. set( 'red' )
- set( r, g, b ) is equivalent to setRGBA( r, g, b, 1 ), e.g. set( 255, 0, 128 )
- set( r, g, b, a ) is equivalent to setRGBA( r, g, b, a ), e.g. set( 255, 0, 128, 0.5 )
- set( hex ) will set RGB with alpha=1, e.g. set( 0xFF0000 )
- set( hex, alpha ) will set RGBA, e.g. set( 0xFF0000, 1 )
- set( null ) will be transparent

@param r - See above for the possible overloaded values
@param [g] - If provided, should be the green value (or the alpha value if a hex color is given)
@param [b] - If provided, should be the blue value
@param [a] - If provided, should be the alpha value

#### getRed() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getRed data-toc-label='getRed' }

Returns the red value as an integer between 0 and 255

#### setRed( value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setRed data-toc-label='setRed' }

Sets the red value.

@param value - Will be clamped to an integer between 0 and 255

#### getGreen() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getGreen data-toc-label='getGreen' }

Returns the green value as an integer between 0 and 255

#### setGreen( value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setGreen data-toc-label='setGreen' }

Sets the green value.

@param value - Will be clamped to an integer between 0 and 255

#### getBlue() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getBlue data-toc-label='getBlue' }

Returns the blue value as an integer between 0 and 255

#### setBlue( value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setBlue data-toc-label='setBlue' }

Sets the blue value.

@param value - Will be clamped to an integer between 0 and 255

#### getAlpha() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getAlpha data-toc-label='getAlpha' }

Returns the alpha value as a floating-point value between 0 and 1

#### setAlpha( value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setAlpha data-toc-label='setAlpha' }

Sets the alpha value.

@param value - Will be clamped between 0 and 1

#### setRGBA( red : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, green : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, blue : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, alpha : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setRGBA data-toc-label='setRGBA' }

Sets the value of this Color using RGB integral between 0-255, alpha (float) between 0-1.

#### blend( otherColor : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span>, ratio : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #blend data-toc-label='blend' }

A linear (gamma-corrected) interpolation between this color (ratio=0) and another color (ratio=1).

@param otherColor
@param ratio - Not necessarily constrained in [0, 1]

#### toCSS() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toCSS data-toc-label='toCSS' }

Returns the value of this Color as a CSS string.

#### setCSS( cssString : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setCSS data-toc-label='setCSS' }

Sets this color for a CSS color string.

#### toNumber() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #toNumber data-toc-label='toNumber' }

Returns this color's RGB information in the hexadecimal number equivalent, e.g. 0xFF00FF

#### setImmutable() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setImmutable data-toc-label='setImmutable' }

Allow setting this Color to be immutable when assertions are disabled. any change will throw an error

#### getCanvasStyle() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getCanvasStyle data-toc-label='getCanvasStyle' }

Returns an object that can be passed to a Canvas context's fillStyle or strokeStyle.

#### setHSLA( hue : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, saturation : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, lightness : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, alpha : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setHSLA data-toc-label='setHSLA' }

Sets this color using HSLA values.

@param hue - integer modulo 360
@param saturation - percentage
@param lightness - percentage
@param alpha

#### getHSLA() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> {: #getHSLA data-toc-label='getHSLA' }

Gets the HSLA values of this color.

#### getHue() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getHue data-toc-label='getHue' }

Returns the hue component of this color in degrees (0-359)

#### getSaturation() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getSaturation data-toc-label='getSaturation' }

Returns the saturation component of this color as a percentage (0-100)

#### getLightness() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getLightness data-toc-label='getLightness' }

Returns the lightness component of this color as a percentage (0-100)

#### equals( color : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equals data-toc-label='equals' }

#### withAlpha( alpha : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #withAlpha data-toc-label='withAlpha' }

Returns a copy of this color with a different alpha value.

#### brighterColor( factor? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #brighterColor data-toc-label='brighterColor' }

Matches Java's Color.brighter()

#### colorUtilsBrighter( factor? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #colorUtilsBrighter data-toc-label='colorUtilsBrighter' }

Brightens a color in RGB space. Useful when creating gradients from a single base color.

@param [factor] - 0 (no change) to 1 (white)
@returns - (closer to white) version of the original color.

#### darkerColor( factor? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #darkerColor data-toc-label='darkerColor' }

Matches Java's Color.darker()

#### colorUtilsDarker( factor? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #colorUtilsDarker data-toc-label='colorUtilsDarker' }

Darken a color in RGB space. Useful when creating gradients from a single
base color.

@param [factor] - 0 (no change) to 1 (black)
@returns - darker (closer to black) version of the original color.

#### colorUtilsBrightness( factor : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #colorUtilsBrightness data-toc-label='colorUtilsBrightness' }

Like colorUtilsBrighter/Darker, however factor should be in the range -1 to 1, and it will call:
  colorUtilsBrighter( factor )   for factor &gt;  0
  this                           for factor == 0
  colorUtilsDarker( -factor )    for factor &lt;  0

@param factor from -1 (black), to 0 (no change), to 1 (white)

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

Returns a string form of this object

#### toHexString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toHexString data-toc-label='toHexString' }

Convert to a hex string, that starts with "#".

#### toStateObject() : <span style="font-weight: 400;">{ r: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>; g: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>; b: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>; a: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> }</span> {: #toStateObject data-toc-label='toStateObject' }

### Instance Properties

#### r : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #r data-toc-label='r' }

RGBA values

#### g : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #g data-toc-label='g' }

#### b : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #b data-toc-label='b' }

#### a : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #a data-toc-label='a' }

#### changeEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)</span> {: #changeEmitter data-toc-label='changeEmitter' }

(readonly)

Fires when the color is changed

### Static Methods

#### hueToRGB( m1 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, m2 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, h : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #hueToRGB data-toc-label='hueToRGB' }

Utility function, see http://www.w3.org/TR/css3-color/

#### toColor( colorSpec : <span style="font-weight: 400;">[TColor](../scenery/TColor.md)</span> ) : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #toColor data-toc-label='toColor' }

Convenience function that converts a color spec to a color object if necessary, or simply returns the color object
if not.

Please note there is no defensive copy when a color is passed in unlike PaintDef.

#### interpolateRGBA( color1 : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span>, color2 : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span>, distance : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #interpolateRGBA data-toc-label='interpolateRGBA' }

Interpolates between 2 colors in RGBA space. When distance is 0, color1 is returned. When distance is 1, color2 is
returned. Other values of distance return a color somewhere between color1 and color2. Each color component is
interpolated separately.

@param color1
@param color2
@param distance distance between color1 and color2, 0 &lt;= distance &lt;= 1

#### supersampleBlend( colors : <span style="font-weight: 400;">[Color](../scenery/Color.md)[]</span> ) : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #supersampleBlend data-toc-label='supersampleBlend' }

Returns a blended color as a mix between the given colors.

#### fromStateObject( stateObject : <span style="font-weight: 400;">{ r: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>; g: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>; b: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>; a: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> }</span> ) : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #fromStateObject data-toc-label='fromStateObject' }

#### hsla( hue : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, saturation : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, lightness : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, alpha : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #hsla data-toc-label='hsla' }

#### checkPaintString( cssString : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) {: #checkPaintString data-toc-label='checkPaintString' }

#### checkPaint( paint : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> ) {: #checkPaint data-toc-label='checkPaint' }

A Paint of the type that Paintable accepts as fills or strokes

#### getLuminance( color : <span style="font-weight: 400;">[Color](../scenery/Color.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getLuminance data-toc-label='getLuminance' }

Gets the luminance of a color, per ITU-R recommendation BT.709, https://en.wikipedia.org/wiki/Rec._709.
Green contributes the most to the intensity perceived by humans, and blue the least.
This algorithm works correctly with a grayscale color because the RGB coefficients sum to 1.

@returns - a value in the range [0,255]

#### toGrayscale( color : <span style="font-weight: 400;">[Color](../scenery/Color.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #toGrayscale data-toc-label='toGrayscale' }

Converts a color to grayscale.

#### isDarkColor( color : <span style="font-weight: 400;">[Color](../scenery/Color.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, luminanceThreshold ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isDarkColor data-toc-label='isDarkColor' }

Determines whether a color is 'dark'.

@param color - colors with luminance &lt; this value are dark, range [0,255], default 186
@param luminanceThreshold - colors with luminance &lt; this value are dark, range [0,255], default 186

#### isLightColor( color : <span style="font-weight: 400;">[Color](../scenery/Color.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, luminanceThreshold? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isLightColor data-toc-label='isLightColor' }

Determines whether a color is 'light'.

@param color
@param [luminanceThreshold] - colors with luminance &gt;= this value are light, range [0,255], default 186

#### grayColor( rgb : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, a? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #grayColor data-toc-label='grayColor' }

Creates a Color that is a shade of gray.
@param rgb - used for red, blue, and green components
@param [a] - defaults to 1

#### isCSSColorString( cssString : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isCSSColorString data-toc-label='isCSSColorString' }

Whether the specified CSS string is a valid CSS color string

### Static Properties

#### formatParsers : <span style="font-weight: 400;">FormatParser[]</span> {: #formatParsers data-toc-label='formatParsers' }

#### basicColorKeywords : <span style="font-weight: 400;">Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span> {: #basicColorKeywords data-toc-label='basicColorKeywords' }

#### colorKeywords : <span style="font-weight: 400;">Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span> {: #colorKeywords data-toc-label='colorKeywords' }

#### BLACK : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #BLACK data-toc-label='BLACK' }

#### BLUE : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #BLUE data-toc-label='BLUE' }

#### CYAN : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #CYAN data-toc-label='CYAN' }

#### DARK_GRAY : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #DARK_GRAY data-toc-label='DARK_GRAY' }

#### GRAY : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #GRAY data-toc-label='GRAY' }

#### GREEN : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #GREEN data-toc-label='GREEN' }

#### LIGHT_GRAY : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #LIGHT_GRAY data-toc-label='LIGHT_GRAY' }

#### MAGENTA : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #MAGENTA data-toc-label='MAGENTA' }

#### ORANGE : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #ORANGE data-toc-label='ORANGE' }

#### PINK : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #PINK data-toc-label='PINK' }

#### RED : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #RED data-toc-label='RED' }

#### WHITE : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #WHITE data-toc-label='WHITE' }

#### YELLOW : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #YELLOW data-toc-label='YELLOW' }

#### TRANSPARENT : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #TRANSPARENT data-toc-label='TRANSPARENT' }

#### black : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #black data-toc-label='black' }

#### blue : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #blue data-toc-label='blue' }

#### cyan : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #cyan data-toc-label='cyan' }

#### darkGray : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #darkGray data-toc-label='darkGray' }

#### gray : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #gray data-toc-label='gray' }

#### green : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #green data-toc-label='green' }

#### lightGray : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #lightGray data-toc-label='lightGray' }

#### magenta : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #magenta data-toc-label='magenta' }

#### orange : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #orange data-toc-label='orange' }

#### pink : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #pink data-toc-label='pink' }

#### red : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #red data-toc-label='red' }

#### white : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #white data-toc-label='white' }

#### yellow : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #yellow data-toc-label='yellow' }

#### transparent : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #transparent data-toc-label='transparent' }

#### ColorIO : <span style="font-weight: 400;">[AnyIOType](../tandem/IOType.md#AnyIOType)</span> {: #ColorIO data-toc-label='ColorIO' }



## Type ColorState {: #ColorState }


```js
import type { ColorState } from 'scenerystack/scenery';
```


- **r**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **g**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **b**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **a**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>




## Source Code

See the source for [Color.ts](https://github.com/phetsims/scenery/blob/main/js/util/Color.ts) in the [scenery](https://github.com/phetsims/scenery) repository.

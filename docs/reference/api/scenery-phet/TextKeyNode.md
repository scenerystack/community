# TextKeyNode

## Overview

TextKeyNode is a KeyNode with a text icon. It has layout, spacing, and defaults for KeyNode that are suited for text.

@author Jesse Greenberg

## Class TextKeyNode {: #TextKeyNode }


```js
import { TextKeyNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new TextKeyNode( string : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span>, providedOptions? : <span style="font-weight: 400;">[TextKeyNodeOptions](../scenery-phet/TextKeyNode.md#TextKeyNodeOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods



### Static Methods

#### getAltKeyString() : <span style="font-weight: 400;">[PhetioProperty](../axon/PhetioProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span> {: #getAltKeyString data-toc-label='getAltKeyString' }

Returns the correct platform dependent key string for "Alt". "Alt" on Windows, "Option" on Mac.

#### altOrOption( providedOptions? : <span style="font-weight: 400;">[KeyNodeOptions](../scenery-phet/KeyNode.md#KeyNodeOptions)</span> ) : <span style="font-weight: 400;">[KeyNode](../scenery-phet/KeyNode.md)</span> {: #altOrOption data-toc-label='altOrOption' }

-------------------------------------------------------------------------------------------------
Static factory methods for specific text strings. For brevity, these methods have the same names
as their string keys. For example SceneryPhetStrings.key.esc is rendered by the esc method.
-------------------------------------------------------------------------------------------------
Note that this will render "Alt" OR "Options", depending on platform. If there is a description of this icon
in the PDOM please use getAltKeyString().

#### capsLock( providedOptions? : <span style="font-weight: 400;">[KeyNodeOptions](../scenery-phet/KeyNode.md#KeyNodeOptions)</span> ) : <span style="font-weight: 400;">[KeyNode](../scenery-phet/KeyNode.md)</span> {: #capsLock data-toc-label='capsLock' }

#### esc( providedOptions? : <span style="font-weight: 400;">[KeyNodeOptions](../scenery-phet/KeyNode.md#KeyNodeOptions)</span> ) : <span style="font-weight: 400;">[KeyNode](../scenery-phet/KeyNode.md)</span> {: #esc data-toc-label='esc' }

#### end( providedOptions? : <span style="font-weight: 400;">[KeyNodeOptions](../scenery-phet/KeyNode.md#KeyNodeOptions)</span> ) : <span style="font-weight: 400;">[KeyNode](../scenery-phet/KeyNode.md)</span> {: #end data-toc-label='end' }

#### enter( providedOptions? : <span style="font-weight: 400;">[KeyNodeOptions](../scenery-phet/KeyNode.md#KeyNodeOptions)</span> ) : <span style="font-weight: 400;">[KeyNode](../scenery-phet/KeyNode.md)</span> {: #enter data-toc-label='enter' }

#### fn( providedOptions? : <span style="font-weight: 400;">[KeyNodeOptions](../scenery-phet/KeyNode.md#KeyNodeOptions)</span> ) : <span style="font-weight: 400;">[KeyNode](../scenery-phet/KeyNode.md)</span> {: #fn data-toc-label='fn' }

#### home( providedOptions? : <span style="font-weight: 400;">[KeyNodeOptions](../scenery-phet/KeyNode.md#KeyNodeOptions)</span> ) : <span style="font-weight: 400;">[KeyNode](../scenery-phet/KeyNode.md)</span> {: #home data-toc-label='home' }

#### pageDown( providedOptions? : <span style="font-weight: 400;">[KeyNodeOptions](../scenery-phet/KeyNode.md#KeyNodeOptions)</span> ) : <span style="font-weight: 400;">[KeyNode](../scenery-phet/KeyNode.md)</span> {: #pageDown data-toc-label='pageDown' }

#### pageUp( providedOptions? : <span style="font-weight: 400;">[KeyNodeOptions](../scenery-phet/KeyNode.md#KeyNodeOptions)</span> ) : <span style="font-weight: 400;">[KeyNode](../scenery-phet/KeyNode.md)</span> {: #pageUp data-toc-label='pageUp' }

#### space( providedOptions? : <span style="font-weight: 400;">[KeyNodeOptions](../scenery-phet/KeyNode.md#KeyNodeOptions)</span> ) : <span style="font-weight: 400;">[KeyNode](../scenery-phet/KeyNode.md)</span> {: #space data-toc-label='space' }

#### shift( providedOptions? : <span style="font-weight: 400;">[KeyNodeOptions](../scenery-phet/KeyNode.md#KeyNodeOptions)</span> ) : <span style="font-weight: 400;">[KeyNode](../scenery-phet/KeyNode.md)</span> {: #shift data-toc-label='shift' }

#### tab( providedOptions? : <span style="font-weight: 400;">[KeyNodeOptions](../scenery-phet/KeyNode.md#KeyNodeOptions)</span> ) : <span style="font-weight: 400;">[KeyNode](../scenery-phet/KeyNode.md)</span> {: #tab data-toc-label='tab' }



## Type TextKeyNodeOptions {: #TextKeyNodeOptions }


```js
import type { TextKeyNodeOptions } from 'scenerystack/scenery-phet';
```


- **font**?: [Font](../scenery/Font.md)
- **fill**?: [TColor](../scenery/TColor.md)
- **textMaxWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; [KeyNodeOptions](../scenery-phet/KeyNode.md#KeyNodeOptions)




## Source Code

See the source for [TextKeyNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/keyboard/TextKeyNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.

# Drawer

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/Drawer.ts](https://github.com/phetsims/scenery-phet/blob/main/js/Drawer.ts) for the most up-to-date information.

## Overview

A drawer that opens/closes to show/hide its contents.

@author Chris Malley (PixelZoom, Inc.)

## Class Drawer {: #Drawer }


```js
import { Drawer } from 'scenerystack/scenery-phet';
```
### Constructor

#### new Drawer( contentsNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, provideOptions? : <span style="font-weight: 400;">[DrawerOptions](../scenery-phet/Drawer.md#DrawerOptions)</span> ) {: #Drawer-constructor data-toc-label='new Drawer' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

#### reset( animationEnabled? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #reset data-toc-label='reset' }

@param [animationEnabled]

#### setAnimationEnabled( animationEnabled : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setAnimationEnabled data-toc-label='setAnimationEnabled' }

Determines whether animation is enabled for opening/closing drawer.

#### getAnimationEnabled() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #getAnimationEnabled data-toc-label='getAnimationEnabled' }

Is animation enabled for opening/closing drawer?

### Instance Properties

#### openProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #openProperty data-toc-label='openProperty' }

(readonly)

is the drawer open?

#### contentsNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #contentsNode data-toc-label='contentsNode' }

(readonly)

what's in the drawer



## Type DrawerOptions {: #DrawerOptions }


```js
import type { DrawerOptions } from 'scenerystack/scenery-phet';
```


- **size**?: [Dimension2](../dot/Dimension2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  drawer
- **cornerRadius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **xMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **yMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **open**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **handlePosition**?: "top" | "bottom"
<br>  handle
- **handleSize**?: [Dimension2](../dot/Dimension2.md)
- **handleCornerRadius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **handleFill**?: [TColor](../scenery/TColor.md)
- **handleTouchAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **handleTouchAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **handleMouseAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **handleMouseAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **grippyDotRadius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  grippy dots on handle
- **grippyDotColor**?: [TColor](../scenery/TColor.md)
- **grippyDotRows**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **grippyDotColumns**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **grippyDotXSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **grippyDotYSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **beforeOpen**?: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
<br>  Callbacks. The default behavior is to make contentNode visible only while the drawer is open.
  This can provide performance gains if your contentNode updates only while visible.
- **afterClose**?: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
- **animationEnabled**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  animation
- **animationDuration**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **stepEmitter**?: [TReadOnlyEmitter](../axon/TEmitter.md#TReadOnlyEmitter)&lt;[ <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ]&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[NodeOptions](../scenery/Node.md#NodeOptions), "children" | "clipArea"&gt;




## Source Code

See the source for [Drawer.ts](https://github.com/phetsims/scenery-phet/blob/main/js/Drawer.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.

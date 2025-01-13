# Drawer

## Overview

A drawer that opens/closes to show/hide its contents.

@author Chris Malley (PixelZoom, Inc.)

## Class Drawer {: #Drawer }


```js
import { Drawer } from 'scenerystack/scenery-phet';
```
### Constructor

#### new Drawer( contentsNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, provideOptions? : <span style="font-weight: 400;">[DrawerOptions](../scenery-phet/Drawer.md#DrawerOptions)</span> ) {: #constructor data-toc-label='constructor' }

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



## Source Code

See the source for [Drawer.ts](https://github.com/phetsims/scenery-phet/blob/main/js/Drawer.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.

# Drawer

## Overview

A drawer that opens/closes to show/hide its contents.

@author Chris Malley (PixelZoom, Inc.)

## Class Drawer {: #Drawer }


```js
import { Drawer } from 'scenerystack/scenery-phet';
```
### Constructor

#### new Drawer( contentsNode : <span style="font-weight: 400; opacity: 80%;">Node</span>, provideOptions? : <span style="font-weight: 400; opacity: 80%;">DrawerOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

#### reset( animationEnabled? : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #reset data-toc-label='reset' }

@param [animationEnabled]

#### setAnimationEnabled( animationEnabled : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setAnimationEnabled data-toc-label='setAnimationEnabled' }

Determines whether animation is enabled for opening/closing drawer.

#### getAnimationEnabled() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #getAnimationEnabled data-toc-label='getAnimationEnabled' }

Is animation enabled for opening/closing drawer?

### Instance Properties

#### openProperty : <span style="font-weight: 400; opacity: 80%;">Property&lt;boolean&gt;</span> {: #openProperty data-toc-label='openProperty' }

(readonly)

is the drawer open?

#### contentsNode : <span style="font-weight: 400; opacity: 80%;">Node</span> {: #contentsNode data-toc-label='contentsNode' }

(readonly)

what's in the drawer



## Source Code

See the source for [Drawer.ts](https://github.com/phetsims/scenery-phet/blob/main/js/Drawer.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.

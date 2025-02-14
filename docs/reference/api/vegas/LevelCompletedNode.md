# LevelCompletedNode

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/vegas/blob/main/js/LevelCompletedNode.ts](https://github.com/phetsims/vegas/blob/main/js/LevelCompletedNode.ts) for the most up-to-date information.

## Overview

This node is used to display a user's results when they complete a level.

@author John Blanco
@author Chris Malley (PixelZoom, Inc.)

## Class LevelCompletedNode {: #LevelCompletedNode }


```js
import { LevelCompletedNode } from 'scenerystack/vegas';
```
### Constructor

#### new LevelCompletedNode( level : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, score : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, perfectScore : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, numberOfStars : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, timerEnabled : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, elapsedTime : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, bestTimeAtThisLevel : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, isNewBestTime : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, continueFunction : <span style="font-weight: 400;">[PushButtonListener](../sun/PushButtonModel.md#PushButtonListener)</span>, providedOptions? : <span style="font-weight: 400;">[LevelCompletedNodeOptions](../vegas/LevelCompletedNode.md#LevelCompletedNodeOptions)</span> ) {: #LevelCompletedNode-constructor data-toc-label='new LevelCompletedNode' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }



## Type LevelCompletedNodeOptions {: #LevelCompletedNodeOptions }


```js
import type { LevelCompletedNodeOptions } from 'scenerystack/vegas';
```


- **levelVisible**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **ySpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **titleFont**?: [Font](../scenery/Font.md)
- **infoFont**?: [Font](../scenery/Font.md)
- **buttonFont**?: [Font](../scenery/Font.md)
- **buttonFill**?: [TColor](../scenery/TColor.md)
- **starDiameter**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **contentMaxWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- &amp; [PanelOptions](../sun/Panel.md#PanelOptions)




## Source Code

See the source for [LevelCompletedNode.ts](https://github.com/phetsims/vegas/blob/main/js/LevelCompletedNode.ts) in the [vegas](https://github.com/phetsims/vegas) repository.

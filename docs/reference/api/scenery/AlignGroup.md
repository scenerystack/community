# AlignGroup

## Overview

A group of alignment boxes that follow the constraints:
1. Every box will have the same bounds, with an upper-left of (0,0)
2. The box sizes will be the smallest possible to fit every box's content (with respective padding).
3. Each box is responsible for positioning its content in its bounds (with customizable alignment and padding).

Align boxes can be dynamically created and disposed, and only active boxes will be considered for the bounds.

Since many sun components do not support resizing their contents dynamically, you may need to populate the AlignGroup
in the order of largest to smallest so that a fixed size container is large enough to contain the largest item.

NOTE: Align box resizes may not happen immediately, and may be delayed until bounds of a align box's child occurs.
      layout updates can be forced with group.updateLayout(). If the align box's content that changed is connected
      to a Scenery display, its bounds will update when Display.updateDisplay() will called, so this will guarantee
      that the layout will be applied before it is displayed.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class AlignGroup {: #AlignGroup }


```js
import { AlignGroup } from 'scenerystack/scenery';
```
### Constructor

#### new AlignGroup( providedOptions? : <span style="font-weight: 400;">[AlignGroupOptions](../scenery/AlignGroup.md#AlignGroupOptions)</span> ) {: #AlignGroup-constructor data-toc-label='new AlignGroup' }

### Instance Methods

#### getMaxWidth() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getMaxWidth data-toc-label='getMaxWidth' }

Returns the current maximum width of the grouped content.

#### getMaxWidthProperty() : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span> {: #getMaxWidthProperty data-toc-label='getMaxWidthProperty' }

Returns the Property holding the current maximum width of the grouped content.

#### getMaxHeight() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getMaxHeight data-toc-label='getMaxHeight' }

Returns the current maximum height of the grouped content.

#### getMaxHeightProperty() : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span> {: #getMaxHeightProperty data-toc-label='getMaxHeightProperty' }

Returns the Property holding the current maximum height of the grouped content.

#### getMaxSizeProperty( orientation : <span style="font-weight: 400;">[Orientation](../phet-core/Orientation.md)</span> ) : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span> {: #getMaxSizeProperty data-toc-label='getMaxSizeProperty' }

#### createBox( content : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, options? : <span style="font-weight: 400;">StrictOmit&lt;[AlignBoxOptions](../scenery/AlignBox.md#AlignBoxOptions), 'group'&gt;</span> ) : <span style="font-weight: 400;">[AlignBox](../scenery/AlignBox.md)</span> {: #createBox data-toc-label='createBox' }

Creates an alignment box with the given content and options.

#### setMatchHorizontal( matchHorizontal : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setMatchHorizontal data-toc-label='setMatchHorizontal' }

Sets whether the widths of the align boxes should all match. If false, each box will use its preferred width
(usually equal to the content width + horizontal margins).

#### getMatchHorizontal() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #getMatchHorizontal data-toc-label='getMatchHorizontal' }

Returns whether boxes currently are horizontally matched. See setMatchHorizontal() for details.

#### setMatchVertical( matchVertical : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setMatchVertical data-toc-label='setMatchVertical' }

Sets whether the heights of the align boxes should all match. If false, each box will use its preferred height
(usually equal to the content height + vertical margins).

#### getMatchVertical() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #getMatchVertical data-toc-label='getMatchVertical' }

Returns whether boxes currently are vertically matched. See setMatchVertical() for details.

#### updateLayout() {: #updateLayout data-toc-label='updateLayout' }

Updates the localBounds and alignment for each alignBox.

NOTE: Calling this will usually not be necessary outside of Scenery, but this WILL trigger bounds revalidation
      for every alignBox, which can force the layout code to run.

#### dispose() {: #dispose data-toc-label='dispose' }

Dispose all the boxes.



## Type AlignGroupOptions {: #AlignGroupOptions }


```js
import type { AlignGroupOptions } from 'scenerystack/scenery';
```


- **matchHorizontal**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Whether the boxes should have all matching widths (otherwise it fits to size)
- **matchVertical**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Whether the boxes should have all matching heights (otherwise it fits to size)
- &amp; [DisposableOptions](../axon/Disposable.md#DisposableOptions)




## Source Code

See the source for [AlignGroup.ts](https://github.com/phetsims/scenery/blob/main/js/layout/constraints/AlignGroup.ts) in the [scenery](https://github.com/phetsims/scenery) repository.

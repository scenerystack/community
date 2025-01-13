# AlignBox

## Overview

A Node that will align child (content) Node within a specific bounding box.

If a custom alignBounds is provided, content will be aligned within that bounding box. Otherwise, it will be aligned
within a bounding box with the left-top corner of (0,0) of the necessary size to include both the content and
all the margins.

Preferred sizes will set the alignBounds (to a minimum x/y of 0, and a maximum x/y of preferredWidth/preferredHeight)

If alignBounds or a specific preferred size have not been set yet, the AlignBox will not adjust things on that
dimension.

There are four margins: left, right, top, bottom. They can be set independently, or multiple can be set at the
same time (xMargin, yMargin and margin).

AlignBox will only adjust the preferred size of its content if:
1. The align for the axis is 'stretch'
2. The content is sizable for that axis
Additionally, if the above is true and there is an associated AlignGroup, the minimum size of the content will be
used to compute the AlignGroup's size (instead of current counts).

NOTE: AlignBox resize may not happen immediately, and may be delayed until bounds of a alignBox's child occurs.
      layout updates can be forced with invalidateAlignment(). If the alignBox's content that changed is connected
      to a Scenery display, its bounds will update when Display.updateDisplay() will called, so this will guarantee
      that the layout will be applied before it is displayed. alignBox.getBounds() will not force a refresh, and
      may return stale bounds.

See https://phetsims.github.io/scenery/doc/layout#AlignBox for details

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class AlignBox {: #AlignBox }


```js
import { AlignBox } from 'scenerystack/scenery';
```
### Constructor

#### new AlignBox( content : <span style="font-weight: 400; opacity: 80%;">Node</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">AlignBoxOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### invalidateAlignment() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #invalidateAlignment data-toc-label='invalidateAlignment' }

Triggers recomputation of the alignment. Should be called if it needs to be refreshed.

NOTE: alignBox.getBounds() will not trigger a bounds validation for our content, and thus WILL NOT trigger
layout. content.getBounds() should trigger it, but invalidateAligment() is the preferred method for forcing a
re-check.

#### setAlignBounds( alignBounds : <span style="font-weight: 400; opacity: 80%;">Bounds2 | null</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setAlignBounds data-toc-label='setAlignBounds' }

Sets the alignment bounds (the bounds in which our content will be aligned). If null, AlignBox will act
as if the alignment bounds have a left-top corner of (0,0) and with a width/height that fits the content and
bounds.

NOTE: If the group is a valid AlignGroup, it will be responsible for setting the alignBounds.

#### getAlignBounds() : <span style="font-weight: 400; opacity: 80%;">Bounds2 | null</span> {: #getAlignBounds data-toc-label='getAlignBounds' }

Returns the current alignment bounds (if available, see setAlignBounds for details).

#### setGroup( group : <span style="font-weight: 400; opacity: 80%;">AlignGroup | null</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setGroup data-toc-label='setGroup' }

Sets the attachment to an AlignGroup. When attached, our alignBounds will be controlled by the group.

#### getGroup() : <span style="font-weight: 400; opacity: 80%;">AlignGroup | null</span> {: #getGroup data-toc-label='getGroup' }

Returns the attached alignment group (if one exists), or null otherwise.

#### setXAlign( xAlign : <span style="font-weight: 400; opacity: 80%;">AlignBoxXAlign</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setXAlign data-toc-label='setXAlign' }

Sets the horizontal alignment of this box.

#### getXAlign() : <span style="font-weight: 400; opacity: 80%;">AlignBoxXAlign</span> {: #getXAlign data-toc-label='getXAlign' }

Returns the current horizontal alignment of this box.

#### setYAlign( yAlign : <span style="font-weight: 400; opacity: 80%;">AlignBoxYAlign</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setYAlign data-toc-label='setYAlign' }

Sets the vertical alignment of this box.

#### getYAlign() : <span style="font-weight: 400; opacity: 80%;">AlignBoxYAlign</span> {: #getYAlign data-toc-label='getYAlign' }

Returns the current vertical alignment of this box.

#### getAlign() : <span style="font-weight: 400; opacity: 80%;">AlignBoxXAlign &amp; AlignBoxYAlign</span> {: #getAlign data-toc-label='getAlign' }

#### setAlign( value : <span style="font-weight: 400; opacity: 80%;">AlignBoxXAlign &amp; AlignBoxYAlign</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setAlign data-toc-label='setAlign' }

#### setMargin( margin : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setMargin data-toc-label='setMargin' }

Sets the margin of this box (setting margin values for all sides at once).

This margin is the minimum amount of horizontal space that will exist between the content the sides of this
box.

#### getMargin() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getMargin data-toc-label='getMargin' }

Returns the current margin of this box (assuming all margin values are the same).

#### setXMargin( xMargin : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setXMargin data-toc-label='setXMargin' }

Sets the horizontal margin of this box (setting both left and right margins at once).

This margin is the minimum amount of horizontal space that will exist between the content and the left and
right sides of this box.

#### getXMargin() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getXMargin data-toc-label='getXMargin' }

Returns the current horizontal margin of this box (assuming the left and right margins are the same).

#### setYMargin( yMargin : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setYMargin data-toc-label='setYMargin' }

Sets the vertical margin of this box (setting both top and bottom margins at once).

This margin is the minimum amount of vertical space that will exist between the content and the top and
bottom sides of this box.

#### getYMargin() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getYMargin data-toc-label='getYMargin' }

Returns the current vertical margin of this box (assuming the top and bottom margins are the same).

#### setLeftMargin( leftMargin : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setLeftMargin data-toc-label='setLeftMargin' }

Sets the left margin of this box.

This margin is the minimum amount of horizontal space that will exist between the content and the left side of
the box.

#### getLeftMargin() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getLeftMargin data-toc-label='getLeftMargin' }

Returns the current left margin of this box.

#### setRightMargin( rightMargin : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setRightMargin data-toc-label='setRightMargin' }

Sets the right margin of this box.

This margin is the minimum amount of horizontal space that will exist between the content and the right side of
the container.

#### getRightMargin() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getRightMargin data-toc-label='getRightMargin' }

Returns the current right margin of this box.

#### setTopMargin( topMargin : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setTopMargin data-toc-label='setTopMargin' }

Sets the top margin of this box.

This margin is the minimum amount of vertical space that will exist between the content and the top side of the
container.

#### getTopMargin() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getTopMargin data-toc-label='getTopMargin' }

Returns the current top margin of this box.

#### setBottomMargin( bottomMargin : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setBottomMargin data-toc-label='setBottomMargin' }

Sets the bottom margin of this box.

This margin is the minimum amount of vertical space that will exist between the content and the bottom side of the
container.

#### getBottomMargin() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getBottomMargin data-toc-label='getBottomMargin' }

Returns the current bottom margin of this box.

#### getContent() : <span style="font-weight: 400; opacity: 80%;">Node</span> {: #getContent data-toc-label='getContent' }

#### getContentBounds() : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> {: #getContentBounds data-toc-label='getContentBounds' }

Returns the bounding box of this box's content. This will include any margins.

#### getMinimumWidth() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getMinimumWidth data-toc-label='getMinimumWidth' }

#### getMinimumHeight() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getMinimumHeight data-toc-label='getMinimumHeight' }

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

Disposes this box, releasing listeners and any references to an AlignGroup

#### mutate( options? : <span style="font-weight: 400; opacity: 80%;">AlignBoxOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #mutate data-toc-label='mutate' }



## Source Code

See the source for [AlignBox.ts](https://github.com/phetsims/scenery/blob/main/js/layout/nodes/AlignBox.ts) in the [scenery](https://github.com/phetsims/scenery) repository.

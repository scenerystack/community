# Carousel

## Overview

A carousel UI component.

A set of N items is divided into M 'pages', based on how many items are visible in the carousel.
Pressing the next and previous buttons moves through the pages.
Movement through the pages is animated, so that items appear to scroll by.

Note that Carousel wraps each item (Node) in an alignBox to ensure all items have an equal "footprint" dimension.

The Carousel handles dynamic layout as far as carousel items changing sizes - it will resize to fit all of the items.
If you want to align or stretch item content, that can be done with CarouselItem's alignBoxOptions
(align:stretch will cause the item to be expanded to its section in the Carousel).

Carousel currently is not sizable on its own (you can't set a preferred width/height that causes it to expand).

@author Chris Malley (PixelZoom, Inc.)
@author Sam Reid (PhET Interactive Simulations)

## Class Carousel {: #Carousel }


```js
import { Carousel } from 'scenerystack/sun';
```
### Constructor

#### new Carousel( items : <span style="font-weight: 400; opacity: 80%;">CarouselItem[]</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">CarouselOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

NOTE: This will dispose the item Nodes

#### reset( animationEnabled ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #reset data-toc-label='reset' }

Resets the carousel to its initial state.
@param animationEnabled - whether to enable animation during reset

#### scrollToItem( item : <span style="font-weight: 400; opacity: 80%;">CarouselItem</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #scrollToItem data-toc-label='scrollToItem' }

Given an item, scrolls the carousel to the page that contains that item. This will only scroll if item is in the
Carousel and visible.

#### scrollToAlignBox( alignBox : <span style="font-weight: 400; opacity: 80%;">AlignBox</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #scrollToAlignBox data-toc-label='scrollToAlignBox' }

Public for ScrollingFlowBox only

#### setItemVisible( item : <span style="font-weight: 400; opacity: 80%;">CarouselItem</span>, visible : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setItemVisible data-toc-label='setItemVisible' }

Set the visibility of an item in the Carousel. This toggles visibility and will reflow the layout, such that hidden
items do not leave a gap in the layout.

#### getNodeForItem( item : <span style="font-weight: 400; opacity: 80%;">CarouselItem</span> ) : <span style="font-weight: 400; opacity: 80%;">Node</span> {: #getNodeForItem data-toc-label='getNodeForItem' }

Returns the Node that was created for a given item.

#### getVisibleAlignBoxes() : <span style="font-weight: 400; opacity: 80%;">AlignBox[]</span> {: #getVisibleAlignBoxes data-toc-label='getVisibleAlignBoxes' }

The order of alignBoxes might be tweaked in scrollingNode's children. We need to respect this order

### Instance Properties

#### carouselItemNodes : <span style="font-weight: 400; opacity: 80%;">Node[]</span> {: #carouselItemNodes data-toc-label='carouselItemNodes' }

(readonly)

created from createNode() in CarouselItem

#### numberOfPagesProperty : <span style="font-weight: 400; opacity: 80%;">ReadOnlyProperty&lt;number&gt;</span> {: #numberOfPagesProperty data-toc-label='numberOfPagesProperty' }

(readonly)

number of pages in the carousel

#### pageNumberProperty : <span style="font-weight: 400; opacity: 80%;">Property&lt;number&gt;</span> {: #pageNumberProperty data-toc-label='pageNumberProperty' }

(readonly)

page number that is currently visible

#### animationEnabled : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #animationEnabled data-toc-label='animationEnabled' }

enables animation when scrolling between pages

#### backgroundWidth : <span style="font-weight: 400; opacity: 80%;">number</span> {: #backgroundWidth data-toc-label='backgroundWidth' }

These are public for layout - NOTE: These are mutated if the size changes after construction

#### backgroundHeight : <span style="font-weight: 400; opacity: 80%;">number</span> {: #backgroundHeight data-toc-label='backgroundHeight' }

#### isAnimatingProperty : <span style="font-weight: 400; opacity: 80%;">BooleanProperty</span> {: #isAnimatingProperty data-toc-label='isAnimatingProperty' }

(readonly)



## Source Code

See the source for [Carousel.ts](https://github.com/phetsims/sun/blob/main/js/Carousel.ts) in the [sun](https://github.com/phetsims/sun) repository.

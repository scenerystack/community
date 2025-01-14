# FlowBox

## Overview

A vertical/horizontal flow-based layout container.

See https://phetsims.github.io/scenery/doc/layout#FlowBox for details

FlowBox-only options:
  - resize (see https://phetsims.github.io/scenery/doc/layout#FlowBox-resize)
  - orientation (see https://phetsims.github.io/scenery/doc/layout#FlowBox-orientation)
  - spacing (see https://phetsims.github.io/scenery/doc/layout#FlowBox-spacing)
  - lineSpacing (see https://phetsims.github.io/scenery/doc/layout#FlowBox-lineSpacing)
  - justify (see https://phetsims.github.io/scenery/doc/layout#FlowBox-justify)
  - justifyLines (see https://phetsims.github.io/scenery/doc/layout#FlowBox-justifyLines)
  - wrap (see https://phetsims.github.io/scenery/doc/layout#FlowBox-wrap)
  - layoutOrigin (see https://phetsims.github.io/scenery/doc/layout#layoutOrigin)

FlowBox and layoutOptions options (can be set either in the FlowBox itself, or within its child nodes' layoutOptions):
  - align (see https://phetsims.github.io/scenery/doc/layout#FlowBox-align)
  - stretch (see https://phetsims.github.io/scenery/doc/layout#FlowBox-stretch)
  - grow (see https://phetsims.github.io/scenery/doc/layout#FlowBox-grow)
  - cellAlign (see https://phetsims.github.io/scenery/doc/layout#FlowBox-cellAlign)
  - margin (see https://phetsims.github.io/scenery/doc/layout#FlowBox-margins)
  - xMargin (see https://phetsims.github.io/scenery/doc/layout#FlowBox-margins)
  - yMargin (see https://phetsims.github.io/scenery/doc/layout#FlowBox-margins)
  - leftMargin (see https://phetsims.github.io/scenery/doc/layout#FlowBox-margins)
  - rightMargin (see https://phetsims.github.io/scenery/doc/layout#FlowBox-margins)
  - topMargin (see https://phetsims.github.io/scenery/doc/layout#FlowBox-margins)
  - bottomMargin (see https://phetsims.github.io/scenery/doc/layout#FlowBox-margins)
  - minContentWidth (see https://phetsims.github.io/scenery/doc/layout#FlowBox-minContent)
  - minContentHeight (see https://phetsims.github.io/scenery/doc/layout#FlowBox-minContent)
  - maxContentWidth (see https://phetsims.github.io/scenery/doc/layout#FlowBox-maxContent)
  - maxContentHeight (see https://phetsims.github.io/scenery/doc/layout#FlowBox-maxContent)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class FlowBox {: #FlowBox }


```js
import { FlowBox } from 'scenerystack/scenery';
```
### Constructor

#### new FlowBox( providedOptions? : <span style="font-weight: 400;">[FlowBoxOptions](../scenery/FlowBox.md#FlowBoxOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### onFlowBoxChildInserted( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, index : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #onFlowBoxChildInserted data-toc-label='onFlowBoxChildInserted' }

(protected)

Called when a child is inserted.

#### getCell( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) : <span style="font-weight: 400;">[FlowCell](../scenery/FlowCell.md)</span> {: #getCell data-toc-label='getCell' }

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references

#### setOrientation( orientation : <span style="font-weight: 400;">[LayoutOrientation](../scenery/LayoutOrientation.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setOrientation data-toc-label='setOrientation' }

LayoutBox Compatibility (see the ES5 setters/getters, or the options doc)

#### getOrientation() : <span style="font-weight: 400;">[LayoutOrientation](../scenery/LayoutOrientation.md)</span> {: #getOrientation data-toc-label='getOrientation' }

#### setSpacing( spacing : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setSpacing data-toc-label='setSpacing' }

#### getSpacing() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getSpacing data-toc-label='getSpacing' }

#### setAlign( align : <span style="font-weight: 400;">[HorizontalLayoutAlign](../scenery/LayoutAlign.md#HorizontalLayoutAlign) | [VerticalLayoutAlign](../scenery/LayoutAlign.md#VerticalLayoutAlign)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setAlign data-toc-label='setAlign' }

#### getAlign() : <span style="font-weight: 400;">[HorizontalLayoutAlign](../scenery/LayoutAlign.md#HorizontalLayoutAlign) | [VerticalLayoutAlign](../scenery/LayoutAlign.md#VerticalLayoutAlign)</span> {: #getAlign data-toc-label='getAlign' }

#### setResize( resize : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setResize data-toc-label='setResize' }

#### isResize() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isResize data-toc-label='isResize' }

#### getHelperNode() : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #getHelperNode data-toc-label='getHelperNode' }

#### mutate( options? : <span style="font-weight: 400;">[FlowBoxOptions](../scenery/FlowBox.md#FlowBoxOptions)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #mutate data-toc-label='mutate' }

### Static Properties

#### DEFAULT_FLOW_BOX_OPTIONS {: #DEFAULT_FLOW_BOX_OPTIONS data-toc-label='DEFAULT_FLOW_BOX_OPTIONS' }

(readonly)



## Type FlowBoxOptions {: #FlowBoxOptions }


```js
import type { FlowBoxOptions } from 'scenerystack/scenery';
```
- **resize**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- &amp; StrictOmit&lt;[FlowConstraintOptions](../scenery/FlowConstraint.md#FlowConstraintOptions), ExcludeFlowConstraintOptions&gt; &amp; [LayoutNodeOptions](../scenery/LayoutNode.md#LayoutNodeOptions)




## Source Code

See the source for [FlowBox.ts](https://github.com/phetsims/scenery/blob/main/js/layout/nodes/FlowBox.ts) in the [scenery](https://github.com/phetsims/scenery) repository.

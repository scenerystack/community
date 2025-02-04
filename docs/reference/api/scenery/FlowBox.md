# FlowBox

## Overview

A vertical/horizontal flow-based layout container.

See https://scenerystack.org/learn/scenery-layout/#FlowBox for details

FlowBox-only options:
  - resize (see https://scenerystack.org/learn/scenery-layout/#FlowBox-resize)
  - orientation (see https://scenerystack.org/learn/scenery-layout/#FlowBox-orientation)
  - spacing (see https://scenerystack.org/learn/scenery-layout/#FlowBox-spacing)
  - lineSpacing (see https://scenerystack.org/learn/scenery-layout/#FlowBox-lineSpacing)
  - justify (see https://scenerystack.org/learn/scenery-layout/#FlowBox-justify)
  - justifyLines (see https://scenerystack.org/learn/scenery-layout/#FlowBox-justifyLines)
  - wrap (see https://scenerystack.org/learn/scenery-layout/#FlowBox-wrap)
  - layoutOrigin (see https://scenerystack.org/learn/scenery-layout/#layoutOrigin)
  - forward (see https://scenerystack.org/learn/scenery-layout/#FlowBox-forward)

FlowBox and layoutOptions options (can be set either in the FlowBox itself, or within its child nodes' layoutOptions):
  - align (see https://scenerystack.org/learn/scenery-layout/#FlowBox-align)
  - stretch (see https://scenerystack.org/learn/scenery-layout/#FlowBox-stretch)
  - grow (see https://scenerystack.org/learn/scenery-layout/#FlowBox-grow)
  - cellAlign (see https://scenerystack.org/learn/scenery-layout/#FlowBox-cellAlign)
  - margin (see https://scenerystack.org/learn/scenery-layout/#FlowBox-margins)
  - xMargin (see https://scenerystack.org/learn/scenery-layout/#FlowBox-margins)
  - yMargin (see https://scenerystack.org/learn/scenery-layout/#FlowBox-margins)
  - leftMargin (see https://scenerystack.org/learn/scenery-layout/#FlowBox-margins)
  - rightMargin (see https://scenerystack.org/learn/scenery-layout/#FlowBox-margins)
  - topMargin (see https://scenerystack.org/learn/scenery-layout/#FlowBox-margins)
  - bottomMargin (see https://scenerystack.org/learn/scenery-layout/#FlowBox-margins)
  - minContentWidth (see https://scenerystack.org/learn/scenery-layout/#FlowBox-minContent)
  - minContentHeight (see https://scenerystack.org/learn/scenery-layout/#FlowBox-minContent)
  - maxContentWidth (see https://scenerystack.org/learn/scenery-layout/#FlowBox-maxContent)
  - maxContentHeight (see https://scenerystack.org/learn/scenery-layout/#FlowBox-maxContent)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class FlowBox {: #FlowBox }


```js
import { FlowBox } from 'scenerystack/scenery';
```
### Constructor

#### new FlowBox( providedOptions? : <span style="font-weight: 400;">[FlowBoxOptions](../scenery/FlowBox.md#FlowBoxOptions)</span> ) {: #FlowBox-constructor data-toc-label='new FlowBox' }

### Instance Methods

#### onFlowBoxChildInserted( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, index : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #onFlowBoxChildInserted data-toc-label='onFlowBoxChildInserted' }

(protected)

Called when a child is inserted.

#### getCell( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) : <span style="font-weight: 400;">[FlowCell](../scenery/FlowCell.md)</span> {: #getCell data-toc-label='getCell' }

#### setForwardProperty( newTarget : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setForwardProperty data-toc-label='setForwardProperty' }

Sets what Property our forwardProperty is backed by

#### getForwardProperty() : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #getForwardProperty data-toc-label='getForwardProperty' }

Get this Node's forwardProperty. Note! This is not the reciprocal of setForwardProperty. Node.prototype._forwardProperty
is a TinyForwardingProperty, and is set up to listen to changes from the forwardProperty provided by
setForwardProperty(), but the underlying reference does not change. This means the following:
    * const myNode = new Node();
const forwardProperty = new Property( false );
myNode.setForwardProperty( forwardProperty )
=&gt; myNode.getForwardProperty() !== forwardProperty (!!!!!!)

Please use this with caution. See setForwardProperty() for more information.

#### setForward( forward : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setForward data-toc-label='setForward' }

Sets whether the nodes in this FlowBox are ordered in a forward order.
If false, the nodes will appear reversed in the layout.

#### isForward() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isForward data-toc-label='isForward' }

Returns whether this Node is forward.

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
<br>  Controls whether the FlowBox will re-trigger layout automatically after the "first" layout during construction.
  The FlowBox will layout once after processing the options object, but if resize:false, then after that manual
  layout calls will need to be done (with updateLayout())
- **forward**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If true, the nodes in this FlowBox will be ordered in a forward order.
  If false, the nodes will appear reversed in order.
- **forwardProperty**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Like forward, but allows specifying a boolean Property to forward the order
  Notably, for HBoxes this is useful to pass in localeProperty.
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[FlowConstraintOptions](../scenery/FlowConstraint.md#FlowConstraintOptions), ExcludeFlowConstraintOptions&gt; &amp; [LayoutNodeOptions](../scenery/LayoutNode.md#LayoutNodeOptions)




## Source Code

See the source for [FlowBox.ts](https://github.com/phetsims/scenery/blob/main/js/layout/nodes/FlowBox.ts) in the [scenery](https://github.com/phetsims/scenery) repository.

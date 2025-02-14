# HighlightPath

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/accessibility/HighlightPath.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/HighlightPath.ts) for the most up-to-date information.

## Overview

A Node for a focus highlight that takes a shape and creates a Path with the default styling of a focus highlight
for a11y. The FocusHighlight has two paths.  The FocusHighlight path is an 'outer' highlight that is a little
lighter in color and transparency.  It as a child 'inner' path that is darker and more opaque, which gives the
focus highlight the illusion that it fades out.

@author Michael Kauzmann (PhET Interactive Simulations)
@author Jesse Greenberg (PhET Interactive Simulations)

## Class HighlightPath {: #HighlightPath }


```js
import { HighlightPath } from 'scenerystack/scenery';
```
### Constructor

#### new HighlightPath( shape : <span style="font-weight: 400;">[InputShape](../scenery/Path.md#InputShape) | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[InputShape](../scenery/Path.md#InputShape)&gt;</span>, providedOptions? : <span style="font-weight: 400;">[HighlightPathOptions](../scenery/HighlightPath.md#HighlightPathOptions)</span> ) {: #HighlightPath-constructor data-toc-label='new HighlightPath' }

### Instance Methods

#### mutateWithInnerHighlight( options : <span style="font-weight: 400;">[PathOptions](../scenery/Path.md#PathOptions)</span> ) {: #mutateWithInnerHighlight data-toc-label='mutateWithInnerHighlight' }

Mutating convenience function to mutate both the innerHighlightPath and outerHighlightPath.

#### setDashed( dashOn : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setDashed data-toc-label='setDashed' }

Mutate both inner and outer Paths to make the stroke dashed by using `lineDash`.

#### setShape( shape : <span style="font-weight: 400;">[InputShape](../scenery/Path.md#InputShape)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setShape data-toc-label='setShape' }

Update the shape of the child path (inner highlight) and this path (outer highlight). Note for the purposes
of chaining the outer Path (this) is returned, not the inner Path.

#### updateLineWidth( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) {: #updateLineWidth data-toc-label='updateLineWidth' }

Update the line width of both Paths based on transform of this Path, or another Node passed in (usually the
node that is being highlighted). Can be overridden by the options
passed in the constructor.

#### getOuterLineWidth( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getOuterLineWidth data-toc-label='getOuterLineWidth' }

Given a transformation matrix, return the lineWidth of this focus highlight (unless a custom
lineWidth was specified in the options).

Note - this takes a matrix3 instead of a Node because that is already computed by the highlight
overlay and we can avoid the extra computation of the Node's local-to-global matrix.

#### getInnerLineWidth( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getInnerLineWidth data-toc-label='getInnerLineWidth' }

Given a transformation matrix, return the lineWidth of this focus highlight (unless a custom
lineWidth was specified in the options).

Note - this takes a matrix3 instead of a Node because that is already computed by the highlight
overlay and we can avoid the extra computation of the Node's local-to-global matrix.

#### setInnerHighlightColor( color : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> ) {: #setInnerHighlightColor data-toc-label='setInnerHighlightColor' }

Set the inner color of this focus highlight.

#### getInnerHighlightColor() : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> {: #getInnerHighlightColor data-toc-label='getInnerHighlightColor' }

Get the inner color of this focus highlight path.

#### setOuterHighlightColor( color : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> ) {: #setOuterHighlightColor data-toc-label='setOuterHighlightColor' }

Set the outer color of this focus highlight.

#### getOuterHighlightColor() : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> {: #getOuterHighlightColor data-toc-label='getOuterHighlightColor' }

Get the color of the outer highlight for this HighlightPath

### Instance Properties

#### highlightChangedEmitter : <span style="font-weight: 400;">[Emitter](../axon/Emitter.md)</span> {: #highlightChangedEmitter data-toc-label='highlightChangedEmitter' }

(readonly)

Emits whenever this highlight changes.

#### transformSourceNode : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #transformSourceNode data-toc-label='transformSourceNode' }

(readonly)

See option for documentation.

#### innerHighlightPath : <span style="font-weight: 400;">[Path](../scenery/Path.md)</span> {: #innerHighlightPath data-toc-label='innerHighlightPath' }

(protected, readonly)

The 'inner' focus highlight, the (by default) slightly darker and more opaque path that is on the inside of the
outer path to give the focus highlight a 'fade-out' appearance

### Static Methods

#### getDilationCoefficient( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getDilationCoefficient data-toc-label='getDilationCoefficient' }

Get the coefficient needed to scale the highlights bounds to surround the node being highlighted elegantly.
The highlight is based on a Node's bounds, so it should be scaled out a certain amount so that there is white
space between the edge of the component and the beginning (inside edge) of the focusHighlight

#### getDefaultDilationCoefficient() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getDefaultDilationCoefficient data-toc-label='getDefaultDilationCoefficient' }

Returns the highlight dilation coefficient when there is no transformation.

#### getDefaultGroupDilationCoefficient() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getDefaultGroupDilationCoefficient data-toc-label='getDefaultGroupDilationCoefficient' }

Returns the highlight dilation coefficient for a group focus highlight, which is a bit
larger than the typical dilation coefficient.

#### getDefaultHighlightLineWidth() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getDefaultHighlightLineWidth data-toc-label='getDefaultHighlightLineWidth' }

The default highlight line width. The outer line width is wider and can be used as a value for layout. This is the
value of the line width without any transformation. The actual value in the global coordinate frame may change
based on the pan/zoom of the screen.

#### getGroupDilationCoefficient( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getGroupDilationCoefficient data-toc-label='getGroupDilationCoefficient' }

Get the dilation coefficient for a group focus highlight, which extends even further beyond node bounds
than a regular focus highlight. The group focus highlight goes around a node whenever its descendant has focus,
so this will always surround the normal focus highlight.

#### getCorrectiveScalingMatrix() : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> {: #getCorrectiveScalingMatrix data-toc-label='getCorrectiveScalingMatrix' }

Returns a final matrix to use to scale a highlight so that it is in a consistent size relative to the
application layout bounds.

### Static Properties

#### OUTER_FOCUS_COLOR {: #OUTER_FOCUS_COLOR data-toc-label='OUTER_FOCUS_COLOR' }

(readonly)

#### INNER_FOCUS_COLOR {: #INNER_FOCUS_COLOR data-toc-label='INNER_FOCUS_COLOR' }

(readonly)

#### INNER_LIGHT_GROUP_FOCUS_COLOR {: #INNER_LIGHT_GROUP_FOCUS_COLOR data-toc-label='INNER_LIGHT_GROUP_FOCUS_COLOR' }

(readonly)

#### OUTER_LIGHT_GROUP_FOCUS_COLOR {: #OUTER_LIGHT_GROUP_FOCUS_COLOR data-toc-label='OUTER_LIGHT_GROUP_FOCUS_COLOR' }

(readonly)

#### INNER_DARK_GROUP_FOCUS_COLOR {: #INNER_DARK_GROUP_FOCUS_COLOR data-toc-label='INNER_DARK_GROUP_FOCUS_COLOR' }

(readonly)

#### OUTER_DARK_GROUP_FOCUS_COLOR {: #OUTER_DARK_GROUP_FOCUS_COLOR data-toc-label='OUTER_DARK_GROUP_FOCUS_COLOR' }

(readonly)

#### GROUP_OUTER_LINE_WIDTH {: #GROUP_OUTER_LINE_WIDTH data-toc-label='GROUP_OUTER_LINE_WIDTH' }

(readonly)

#### GROUP_INNER_LINE_WIDTH {: #GROUP_INNER_LINE_WIDTH data-toc-label='GROUP_INNER_LINE_WIDTH' }

(readonly)

#### layoutScale {: #layoutScale data-toc-label='layoutScale' }

A scalar describing the layout scale of your application. Highlight line widths are corrected
by the layout scale so that they have the same sizes relative to the size of the application.



## Type HighlightPathOptions {: #HighlightPathOptions }


The stroke and linewidth of this path are set with outerLineWidth and outerStroke.

```js
import type { HighlightPathOptions } from 'scenerystack/scenery';
```


- **outerStroke**?: [TPaint](../scenery/TPaint.md)
<br>  strokes for each highlight
- **innerStroke**?: [TPaint](../scenery/TPaint.md)
- **outerLineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  lineWidth for each highlight. If null, the lineWidth will be calculated from the transform of
  the Node of this highlight (or the transformSourceNode).
- **innerLineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **dashed**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If true, the highlight will appear dashed with a lineDash effect. Used often by PhET to indicate that an
  interactive component is currently picked up and being manipulated by the user.
- **transformSourceNode**?: [Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  If specified, this HighlightPath will reposition with transform changes along the unique trail to this source
  Node. Otherwise you will have to position this highlight node yourself.
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[PathOptions](../scenery/Path.md#PathOptions), "stroke" | "lineWidth"&gt;




## Source Code

See the source for [HighlightPath.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/HighlightPath.ts) in the [scenery](https://github.com/phetsims/scenery) repository.

# Node

## Overview

A Node for the Scenery scene graph. Supports general directed acyclic graphics (DAGs).
Handles multiple layers with assorted types (Canvas 2D, SVG, DOM, WebGL, etc.).

## General description of Nodes

In Scenery, the visual output is determined by a group of connected Nodes (generally known as a scene graph).
Each Node has a list of 'child' Nodes. When a Node is visually displayed, its child Nodes (children) will also be
displayed, along with their children, etc. There is typically one 'root' Node that is passed to the Scenery Display
whose descendants (Nodes that can be traced from the root by child relationships) will be displayed.

For instance, say there are Nodes named A, B, C, D and E, who have the relationships:
- B is a child of A (thus A is a parent of B)
- C is a child of A (thus A is a parent of C)
- D is a child of C (thus C is a parent of D)
- E is a child of C (thus C is a parent of E)
where A would be the root Node. This can be visually represented as a scene graph, where a line connects a parent
Node to a child Node (where the parent is usually always at the top of the line, and the child is at the bottom):
For example:

  A
 / \
B   C
   / \
  D   E

Additionally, in this case:
- D is a 'descendant' of A (due to the C being a child of A, and D being a child of C)
- A is an 'ancestor' of D (due to the reverse)
- C's 'subtree' is C, D and E, which consists of C itself and all of its descendants.

Note that Scenery allows some more complicated forms, where Nodes can have multiple parents, e.g.:

  A
 / \
B   C
 \ /
  D

In this case, D has two parents (B and C). Scenery disallows any Node from being its own ancestor or descendant,
so that loops are not possible. When a Node has two or more parents, it means that the Node's subtree will typically
be displayed twice on the screen. In the above case, D would appear both at B's position and C's position. Each
place a Node would be displayed is known as an 'instance'.

Each Node has a 'transform' associated with it, which determines how its subtree (that Node and all of its
descendants) will be positioned. Transforms can contain:
- Translation, which moves the position the subtree is displayed
- Scale, which makes the displayed subtree larger or smaller
- Rotation, which displays the subtree at an angle
- or any combination of the above that uses an affine matrix (more advanced transforms with shear and combinations
  are possible).

Say we have the following scene graph:

  A
  |
  B
  |
  C

where there are the following transforms:
- A has a 'translation' that moves the content 100 pixels to the right
- B has a 'scale' that doubles the size of the content
- C has a 'rotation' that rotates 180-degrees around the origin

If C displays a square that fills the area with 0 &lt;= x &lt;= 10 and 0 &lt;= y &lt;= 10, we can determine the position on
the display by applying transforms starting at C and moving towards the root Node (in this case, A):
1. We apply C's rotation to our square, so the filled area will now be -10 &lt;= x &lt;= 0 and -10 &lt;= y &lt;= 0
2. We apply B's scale to our square, so now we have -20 &lt;= x &lt;= 0 and -20 &lt;= y &lt;= 0
3. We apply A's translation to our square, moving it to 80 &lt;= x &lt;= 100 and -20 &lt;= y &lt;= 0

Nodes also have a large number of properties that will affect how their entire subtree is rendered, such as
visibility, opacity, etc.

## Creating Nodes

Generally, there are two types of Nodes:
- Nodes that don't display anything, but serve as a container for other Nodes (e.g. Node itself, HBox, VBox)
- Nodes that display content, but ALSO serve as a container (e.g. Circle, Image, Text)

When a Node is created with the default Node constructor, e.g.:
  var node = new Node();
then that Node will not display anything by itself.

Generally subtypes of Node are used for displaying things, such as Circle, e.g.:
  var circle = new Circle( 20 ); // radius of 20

Almost all Nodes (with the exception of leaf-only Nodes like Spacer) can contain children.

## Connecting Nodes, and rendering order

To make a 'childNode' become a 'parentNode', the typical way is to call addChild():
  parentNode.addChild( childNode );

To remove this connection, you can call:
  parentNode.removeChild( childNode );

Adding a child Node with addChild() puts it at the end of parentNode's list of child Nodes. This is important,
because the order of children affects what Nodes are drawn on the 'top' or 'bottom' visually. Nodes that are at the
end of the list of children are generally drawn on top.

This is generally easiest to represent by notating scene graphs with children in order from left to right, thus:

  A
 / \
B   C
   / \
  D   E

would indicate that A's children are [B,C], so C's subtree is drawn ON TOP of B. The same is true of C's children
[D,E], so E is drawn on top of D. If a Node itself has content, it is drawn below that of its children (so C itself
would be below D and E).

This means that for every scene graph, Nodes instances can be ordered from bottom to top. For the above example, the
order is:
1. A (on the very bottom visually, may get covered up by other Nodes)
2. B
3. C
4. D
5. E (on the very top visually, may be covering other Nodes)

## Trails

For examples where there are multiple parents for some Nodes (also referred to as DAG in some code, as it represents
a Directed Acyclic Graph), we need more information about the rendering order (as otherwise Nodes could appear
multiple places in the visual bottom-to-top order.

A Trail is basically a list of Nodes, where every Node in the list is a child of its previous element, and a parent
of its next element. Thus for the scene graph:

  A
 / \
B   C
 \ / \
  D   E
   \ /
    F

there are actually three instances of F being displayed, with three trails:
- [A,B,D,F]
- [A,C,D,F]
- [A,C,E,F]
Note that the trails are essentially listing Nodes used in walking from the root (A) to the relevant Node (F) using
connections between parents and children.

The trails above are in order from bottom to top (visually), due to the order of children. Thus since A's children
are [B,C] in that order, F with the trail [A,B,D,F] is displayed below [A,C,D,F], because C is after B.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Node {: #Node }


```js
import { Node } from 'scenerystack/scenery';
```
### Constructor

#### new Node( options? : <span style="font-weight: 400;">[NodeOptions](../scenery/Node.md#NodeOptions)</span> ) {: #Node-constructor data-toc-label='new Node' }

### Instance Methods

#### moveChildToIndex( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, index : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #moveChildToIndex data-toc-label='moveChildToIndex' }

If a child is not at the given index, it is moved to the given index. This reorders the children of this Node so
that `this.children[ index ] === node`.

@param node - The child Node to move in the order
@param index - The desired index (into the children array) of the child.

#### removeAllChildren() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #removeAllChildren data-toc-label='removeAllChildren' }

Removes all children from this Node.

#### setChildren( children : <span style="font-weight: 400;">[Node](../scenery/Node.md)[]</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setChildren data-toc-label='setChildren' }

Sets the children of the Node to be equivalent to the passed-in array of Nodes.

NOTE: Meant to be overridden in some cases

#### getChildren() : <span style="font-weight: 400;">[Node](../scenery/Node.md)[]</span> {: #getChildren data-toc-label='getChildren' }

Returns a defensive copy of the array of direct children of this node, ordered by what is in front (nodes at
the end of the array are in front of nodes at the start).

Making changes to the returned result will not affect this node's children.

#### getChildrenCount() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getChildrenCount data-toc-label='getChildrenCount' }

Returns a count of children, without needing to make a defensive copy.

#### getParents() : <span style="font-weight: 400;">[Node](../scenery/Node.md)[]</span> {: #getParents data-toc-label='getParents' }

Returns a defensive copy of our parents. This is an array of parent nodes that is returned in no particular
order (as order is not important here).

NOTE: Modifying the returned array will not in any way modify this node's parents.

#### getParent() : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getParent data-toc-label='getParent' }

Returns a single parent if it exists, otherwise null (no parents), or an assertion failure (multiple parents).

#### getChildAt( index : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #getChildAt data-toc-label='getChildAt' }

Gets the child at a specific index into the children array.

#### indexOfParent( parent : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #indexOfParent data-toc-label='indexOfParent' }

Finds the index of a parent Node in the parents array.

@param parent - Should be a parent of this node.
@returns - An index such that this.parents[ index ] === parent

#### indexOfChild( child : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #indexOfChild data-toc-label='indexOfChild' }

Finds the index of a child Node in the children array.

@param child - Should be a child of this node.
@returns - An index such that this.children[ index ] === child

#### moveToFront() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #moveToFront data-toc-label='moveToFront' }

Moves this Node to the front (end) of all of its parents children array.

#### moveChildToFront( child : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #moveChildToFront data-toc-label='moveChildToFront' }

Moves one of our children to the front (end) of our children array.

@param child - Our child to move to the front.

#### moveForward() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #moveForward data-toc-label='moveForward' }

Move this node one index forward in each of its parents.  If the Node is already at the front, this is a no-op.

#### moveChildForward( child : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #moveChildForward data-toc-label='moveChildForward' }

Moves the specified child forward by one index.  If the child is already at the front, this is a no-op.

#### moveBackward() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #moveBackward data-toc-label='moveBackward' }

Move this node one index backward in each of its parents.  If the Node is already at the back, this is a no-op.

#### moveChildBackward( child : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #moveChildBackward data-toc-label='moveChildBackward' }

Moves the specified child forward by one index.  If the child is already at the back, this is a no-op.

#### moveToBack() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #moveToBack data-toc-label='moveToBack' }

Moves this Node to the back (front) of all of its parents children array.

#### moveChildToBack( child : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #moveChildToBack data-toc-label='moveChildToBack' }

Moves one of our children to the back (front) of our children array.

@param child - Our child to move to the back.

#### replaceChild( oldChild : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, newChild : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #replaceChild data-toc-label='replaceChild' }

Replace a child in this node's children array with another node. If the old child had DOM focus and
the new child is focusable, the new child will receive focus after it is added.

#### detach() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #detach data-toc-label='detach' }

Removes this Node from all of its parents.

#### validateSelfBounds() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #validateSelfBounds data-toc-label='validateSelfBounds' }

Ensures that the cached selfBounds of this Node is accurate. Returns true if any sort of dirty flag was set
before this was called.

@returns - Was the self-bounds potentially updated?

#### validateBounds() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #validateBounds data-toc-label='validateBounds' }

Ensures that cached bounds stored on this Node (and all children) are accurate. Returns true if any sort of dirty
flag was set before this was called.

@returns - Was something potentially updated?

#### invalidateBounds() {: #invalidateBounds data-toc-label='invalidateBounds' }

Marks the bounds of this Node as invalid, so they are recomputed before being accessed again.

#### invalidateSelf( newSelfBounds? : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) {: #invalidateSelf data-toc-label='invalidateSelf' }

Should be called to notify that our selfBounds needs to change to this new value.

#### updateSelfBounds() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #updateSelfBounds data-toc-label='updateSelfBounds' }

(protected)

Meant to be overridden by Node sub-types to compute self bounds (if invalidateSelf() with no arguments was called).

@returns - Whether the self bounds changed.

#### hasChild( potentialChild : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasChild data-toc-label='hasChild' }

Returns whether a Node is a child of this node.

@returns - Whether potentialChild is actually our child.

#### getSelfShape() : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #getSelfShape data-toc-label='getSelfShape' }

Returns a Shape that represents the area covered by containsPointSelf.

#### getSelfBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getSelfBounds data-toc-label='getSelfBounds' }

Returns our selfBounds (the bounds for this Node's content in the local coordinates, excluding anything from our
children and descendants).

NOTE: Do NOT mutate the returned value!

#### getSafeSelfBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getSafeSelfBounds data-toc-label='getSafeSelfBounds' }

Returns a bounding box that should contain all self content in the local coordinate frame (our normal self bounds
aren't guaranteed this for Text, etc.)

Override this to provide different behavior.

#### getChildBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getChildBounds data-toc-label='getChildBounds' }

Returns the bounding box that should contain all content of our children in our local coordinate frame. Does not
include our "self" bounds.

NOTE: Do NOT mutate the returned value!

#### getLocalBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getLocalBounds data-toc-label='getLocalBounds' }

Returns the bounding box that should contain all content of our children AND our self in our local coordinate
frame.

NOTE: Do NOT mutate the returned value!

#### setLocalBounds( localBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setLocalBounds data-toc-label='setLocalBounds' }

Allows overriding the value of localBounds (and thus changing things like 'bounds' that depend on localBounds).
If it's set to a non-null value, that value will always be used for localBounds until this function is called
again. To revert to having Scenery compute the localBounds, set this to null.  The bounds should not be reduced
smaller than the visible bounds on the screen.

#### getTransformedSelfBounds( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getTransformedSelfBounds data-toc-label='getTransformedSelfBounds' }

Meant to be overridden in sub-types that have more accurate bounds determination for when we are transformed.
Usually rotation is significant here, so that transformed bounds for non-rectangular shapes will be different.

#### getTransformedSafeSelfBounds( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getTransformedSafeSelfBounds data-toc-label='getTransformedSafeSelfBounds' }

Meant to be overridden in sub-types that have more accurate bounds determination for when we are transformed.
Usually rotation is significant here, so that transformed bounds for non-rectangular shapes will be different.

This should include the "full" bounds that guarantee everything rendered should be inside (e.g. Text, where the
normal bounds may not be sufficient).

#### getSafeTransformedVisibleBounds( matrix? : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getSafeTransformedVisibleBounds data-toc-label='getSafeTransformedVisibleBounds' }

Returns the visual "safe" bounds that are taken up by this Node and its subtree. Notably, this is essentially the
combined effects of the "visible" bounds (i.e. invisible nodes do not contribute to bounds), and "safe" bounds
(e.g. Text, where we need a larger bounds area to guarantee there is nothing outside). It also tries to "fit"
transformed bounds more tightly, where it will handle rotated Path bounds in an improved way.

NOTE: This method is not optimized, and may create garbage and not be the fastest.

@param [matrix] - If provided, will return the bounds assuming the content is transformed with the
                            given matrix.

#### setTransformBounds( transformBounds : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setTransformBounds data-toc-label='setTransformBounds' }

Sets the flag that determines whether we will require more accurate (and expensive) bounds computation for this
node's transform.

If set to false (default), Scenery will get the bounds of content, and then if rotated will determine the on-axis
bounds that completely cover the rotated bounds (potentially larger than actual content).
If set to true, Scenery will try to get the bounds of the actual rotated/transformed content.

A good example of when this is necessary is if there are a bunch of nested children that each have pi/4 rotations.

@param transformBounds - Whether accurate transform bounds should be used.

#### getTransformBounds() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #getTransformBounds data-toc-label='getTransformBounds' }

Returns whether accurate transformation bounds are used in bounds computation (see setTransformBounds).

#### getBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getBounds data-toc-label='getBounds' }

Returns the bounding box of this Node and all of its sub-trees (in the "parent" coordinate frame).

NOTE: Do NOT mutate the returned value!
NOTE: This may require computation of this node's subtree bounds, which may incur some performance loss.

#### getVisibleLocalBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getVisibleLocalBounds data-toc-label='getVisibleLocalBounds' }

Like getLocalBounds() in the "local" coordinate frame, but includes only visible nodes.

#### getVisibleBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getVisibleBounds data-toc-label='getVisibleBounds' }

Like getBounds() in the "parent" coordinate frame, but includes only visible nodes

#### hitTest( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, isMouse? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, isTouch? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;">[Trail](../scenery/Trail.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #hitTest data-toc-label='hitTest' }

Tests whether the given point is "contained" in this node's subtree (optionally using mouse/touch areas), and if
so returns the Trail (rooted at this node) to the top-most (in stacking order) Node that contains the given
point.

NOTE: This is optimized for the current input system (rather than what gets visually displayed on the screen), so
pickability (Node's pickable property, visibility, and the presence of input listeners) all may affect the
returned value.

For example, hit-testing a simple shape (with no pickability) will return null:
&gt; new phet.scenery.Circle( 20 ).hitTest( phet.dot.v2( 0, 0 ) ); // null

If the same shape is made to be pickable, it will return a trail:
&gt; new phet.scenery.Circle( 20, { pickable: true } ).hitTest( phet.dot.v2( 0, 0 ) );
&gt; // returns a Trail with the circle as the only node.

It will return the result that is visually stacked on top, so e.g.:
&gt; new phet.scenery.Node( {
&gt;   pickable: true,
&gt;   children: [
&gt;     new phet.scenery.Circle( 20 ),
&gt;     new phet.scenery.Circle( 15 )
&gt;   ]
&gt; } ).hitTest( phet.dot.v2( 0, 0 ) ); // returns the "top-most" circle (the one with radius:15).

This is used by Scenery's internal input system by calling hitTest on a Display's rootNode with the
global-coordinate point.

@param point - The point (in the parent coordinate frame) to check against this node's subtree.
@param [isMouse] - Whether mouseAreas should be used.
@param [isTouch] - Whether touchAreas should be used.
@returns - Returns null if the point is not contained in the subtree.

#### trailUnderPointer( pointer : <span style="font-weight: 400;">[Pointer](../scenery/Pointer.md)</span> ) : <span style="font-weight: 400;">[Trail](../scenery/Trail.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #trailUnderPointer data-toc-label='trailUnderPointer' }

Hit-tests what is under the pointer, and returns a {Trail} to that Node (or null if there is no matching node).

See hitTest() for more details about what will be returned.

#### containsPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #containsPoint data-toc-label='containsPoint' }

Returns whether a point (in parent coordinates) is contained in this node's sub-tree.

See hitTest() for more details about what will be returned.

@returns - Whether the point is contained.

#### containsPointSelf( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #containsPointSelf data-toc-label='containsPointSelf' }

Override this for computation of whether a point is inside our self content (defaults to selfBounds check).

@param point - Considered to be in the local coordinate frame

#### intersectsBoundsSelf( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #intersectsBoundsSelf data-toc-label='intersectsBoundsSelf' }

Returns whether this node's selfBounds is intersected by the specified bounds.

@param bounds - Bounds to test, assumed to be in the local coordinate frame.

#### isPhetioMouseHittable( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isPhetioMouseHittable data-toc-label='isPhetioMouseHittable' }

Determine if the Node is a candidate for phet-io autoselect.
1. Invisible things cannot be autoselected
2. Transform the point in the local coordinate frame, so we can test it with the clipArea/children
3. If our point is outside the local-coordinate clipping area, there should be no hit.
4. Note that non-pickable nodes can still be autoselected

#### isAnyDescendantAPhetioMouseHitTarget() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isAnyDescendantAPhetioMouseHitTarget data-toc-label='isAnyDescendantAPhetioMouseHitTarget' }

If you need to know if any Node in a subtree could possibly be a phetio mouse hit target.
SR and MK ran performance on this function in CCK:DC and CAV in 6/2023 and there was no noticeable problem.

#### getPhetioMouseHit( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[PhetioObject](../tandem/PhetioObject.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> | 'phetioNotSelectable'</span> {: #getPhetioMouseHit data-toc-label='getPhetioMouseHit' }

Used in Studio Autoselect.  Returns a PhET-iO Element (a PhetioObject) if possible, or null if no hit.
"phetioNotSelectable" is an intermediate state used to note when a "hit" has occurred, but the hit was on a Node
that didn't have a fit target (see PhetioObject.getPhetioMouseHitTarget())
A few notes on the implementation:
1. Prefer the leaf most Node that is at the highest z-index in rendering order
2. Pickable:false Nodes don't prune out subtrees if descendents could still be mouse hit targets
   (see PhetioObject.getPhetioMouseHitTarget()).
3. First the algorithm finds a Node that is a "hit", and then it tries to find the most fit "target" for that hit.
   a. Itself, see  PhetioObject.getPhetioMouseHitTarget()
   b. A class defined substitute, Text.getPhetioMouseHitTarget()
   c. A sibling that is rendered behind the hit
   d. The most recent descendant that is a usable target.

Adapted originally from Picker.recursiveHitTest, with specific tweaks needed for PhET-iO instrumentation, display
and filtering.
@returns - null if no hit occurred
         - A PhetioObject if a hit occurred on a Node with a selectable target
         - 'phetioNotSelectable' if a hit occurred, but no suitable target was found from that hit (see
            PhetioObject.getPhetioMouseHitTarget())

#### isPainted() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isPainted data-toc-label='isPainted' }

Whether this Node itself is painted (displays something itself). Meant to be overridden.

#### areSelfBoundsValid() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #areSelfBoundsValid data-toc-label='areSelfBoundsValid' }

Whether this Node's selfBounds are considered to be valid (always containing the displayed self content
of this node). Meant to be overridden in subtypes when this can change (e.g. Text).

If this value would potentially change, please trigger the event 'selfBoundsValid'.

#### hasParent() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasParent data-toc-label='hasParent' }

Returns whether this Node has any parents at all.

#### hasChildren() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasChildren data-toc-label='hasChildren' }

Returns whether this Node has any children at all.

#### isChildIncludedInLayout( child : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isChildIncludedInLayout data-toc-label='isChildIncludedInLayout' }

Returns whether a child should be included for layout (if this Node is a layout container).

#### walkDepthFirst( callback : <span style="font-weight: 400;">( node: [Node](../scenery/Node.md) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #walkDepthFirst data-toc-label='walkDepthFirst' }

Calls the callback on nodes recursively in a depth-first manner.

#### addInputListener( listener : <span style="font-weight: 400;">[TInputListener](../scenery/TInputListener.md)</span>, options? : <span style="font-weight: 400;">[DisposerOptions](../axon/Disposable.md#DisposerOptions)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #addInputListener data-toc-label='addInputListener' }

Adds an input listener.

See Input.js documentation for information about how event listeners are used.

Additionally, the following fields are supported on a listener:

- interrupt {function()}: When a pointer is interrupted, it will attempt to call this method on the input listener
- cursor {string|null}: If node.cursor is null, any non-null cursor of an input listener will effectively
                        "override" it. NOTE: this can be implemented as an es5 getter, if the cursor can change

#### removeInputListener( listener : <span style="font-weight: 400;">[TInputListener](../scenery/TInputListener.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #removeInputListener data-toc-label='removeInputListener' }

Removes an input listener that was previously added with addInputListener.

#### hasInputListener( listener : <span style="font-weight: 400;">[TInputListener](../scenery/TInputListener.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasInputListener data-toc-label='hasInputListener' }

Returns whether this input listener is currently listening to this node.

More efficient than checking node.inputListeners, as that includes a defensive copy.

#### interruptInput() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #interruptInput data-toc-label='interruptInput' }

Interrupts all input listeners that are attached to this node.

#### interruptSubtreeInput() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #interruptSubtreeInput data-toc-label='interruptSubtreeInput' }

Interrupts all input listeners that are attached to either this node, or a descendant node.

#### translate( v : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, prependInstead? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #translate data-toc-label='translate' }

Changes the transform of this Node by adding a transform. The default "appends" the transform, so that it will
appear to happen to the Node before the rest of the transform would apply, but if "prepended", the rest of the
transform would apply first.

As an example, if a Node is centered at (0,0) and scaled by 2:
translate( 100, 0 ) would cause the center of the Node (in the parent coordinate frame) to be at (200,0).
translate( 100, 0, true ) would cause the center of the Node (in the parent coordinate frame) to be at (100,0).

Allowed call signatures:
translate( x {number}, y {number} )
translate( x {number}, y {number}, prependInstead {boolean} )
translate( vector {Vector2} )
translate( vector {Vector2}, prependInstead {boolean} )

@param x - The x coordinate
@param y - The y coordinate
@param [prependInstead] - Whether the transform should be prepended (defaults to false)

#### translate( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, prependInstead? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #translate data-toc-label='translate' }

#### translate( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | [Vector2](../dot/Vector2.md)</span>, y? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, prependInstead? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #translate data-toc-label='translate' }

#### scale( s : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, prependInstead? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #scale data-toc-label='scale' }

Scales the node's transform. The default "appends" the transform, so that it will
appear to happen to the Node before the rest of the transform would apply, but if "prepended", the rest of the
transform would apply first.

As an example, if a Node is translated to (100,0):
scale( 2 ) will leave the Node translated at (100,0), but it will be twice as big around its origin at that location.
scale( 2, true ) will shift the Node to (200,0).

Allowed call signatures:
(s invocation): scale( s {number|Vector2}, [prependInstead] {boolean} )
(x,y invocation): scale( x {number}, y {number}, [prependInstead] {boolean} )

@param x - (s invocation): {number} scales both dimensions equally, or {Vector2} scales independently
         - (x,y invocation): {number} scale for the x-dimension
@param [y] - (s invocation): {boolean} prependInstead - Whether the transform should be prepended (defaults to false)
           - (x,y invocation): {number} y - scale for the y-dimension
@param [prependInstead] - (x,y invocation) Whether the transform should be prepended (defaults to false)

#### scale( s : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, prependInstead? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #scale data-toc-label='scale' }

#### scale( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, prependInstead? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #scale data-toc-label='scale' }

#### scale( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | [Vector2](../dot/Vector2.md)</span>, y? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, prependInstead? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #scale data-toc-label='scale' }

#### rotate( angle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, prependInstead? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #rotate data-toc-label='rotate' }

Rotates the node's transform. The default "appends" the transform, so that it will
appear to happen to the Node before the rest of the transform would apply, but if "prepended", the rest of the
transform would apply first.

As an example, if a Node is translated to (100,0):
rotate( Math.PI ) will rotate the Node around (100,0)
rotate( Math.PI, true ) will rotate the Node around the origin, moving it to (-100,0)

@param angle - The angle (in radians) to rotate by
@param [prependInstead] - Whether the transform should be prepended (defaults to false)

#### rotateAround( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, angle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #rotateAround data-toc-label='rotateAround' }

Rotates the node's transform around a specific point (in the parent coordinate frame) by prepending the transform.

TODO: determine whether this should use the appendMatrix method https://github.com/phetsims/scenery/issues/1581

@param point - In the parent coordinate frame
@param angle - In radians

#### setX( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setX data-toc-label='setX' }

Shifts the x coordinate (in the parent coordinate frame) of where the node's origin is transformed to.

#### getX() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getX data-toc-label='getX' }

Returns the x coordinate (in the parent coordinate frame) of where the node's origin is transformed to.

#### setY( y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setY data-toc-label='setY' }

Shifts the y coordinate (in the parent coordinate frame) of where the node's origin is transformed to.

#### getY() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getY data-toc-label='getY' }

Returns the y coordinate (in the parent coordinate frame) of where the node's origin is transformed to.

#### setScaleMagnitude( s : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setScaleMagnitude data-toc-label='setScaleMagnitude' }

Typically without rotations or negative parameters, this sets the scale for each axis. In its more general form,
it modifies the node's transform so that:
- Transforming (1,0) with our transform will result in a vector with magnitude abs( x-scale-magnitude )
- Transforming (0,1) with our transform will result in a vector with magnitude abs( y-scale-magnitude )
- If parameters are negative, it will flip orientation in that direct.

Allowed call signatures:
setScaleMagnitude( s )
setScaleMagnitude( sx, sy )
setScaleMagnitude( vector )

@param a - Scale for both axes, or scale for x-axis if using the 2-parameter call
@param [b] - Scale for the Y axis (only for the 2-parameter call)

#### setScaleMagnitude( v : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setScaleMagnitude data-toc-label='setScaleMagnitude' }

#### setScaleMagnitude( sx : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, sy : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setScaleMagnitude data-toc-label='setScaleMagnitude' }

#### setScaleMagnitude( a : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | [Vector2](../dot/Vector2.md)</span>, b? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setScaleMagnitude data-toc-label='setScaleMagnitude' }

#### getScaleVector() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getScaleVector data-toc-label='getScaleVector' }

Returns a vector with an entry for each axis, e.g. (5,2) for an affine matrix with rows ((5,0,0),(0,2,0),(0,0,1)).

It is equivalent to:
( T(1,0).magnitude(), T(0,1).magnitude() ) where T() transforms points with our transform.

#### setRotation( rotation : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setRotation data-toc-label='setRotation' }

Rotates this node's transform so that a unit (1,0) vector would be rotated by this node's transform by the
specified amount.

@param rotation - In radians

#### getRotation() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getRotation data-toc-label='getRotation' }

Returns the rotation (in radians) that would be applied to a unit (1,0) vector when transformed with this Node's
transform.

#### setTranslation( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setTranslation data-toc-label='setTranslation' }

Modifies the translation of this Node's transform so that the node's local-coordinate origin will be transformed
to the passed-in x/y.

Allowed call signatures:
setTranslation( x, y )
setTranslation( vector )

@param a - X translation - or Vector with x/y translation in components
@param [b] - Y translation

#### setTranslation( v : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setTranslation data-toc-label='setTranslation' }

#### setTranslation( a : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | [Vector2](../dot/Vector2.md)</span>, b? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setTranslation data-toc-label='setTranslation' }

#### getTranslation() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getTranslation data-toc-label='getTranslation' }

Returns a vector of where this Node's local-coordinate origin will be transformed by it's own transform.

#### appendMatrix( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) {: #appendMatrix data-toc-label='appendMatrix' }

Appends a transformation matrix to this Node's transform. Appending means this transform is conceptually applied
first before the rest of the Node's current transform (i.e. applied in the local coordinate frame).

#### prependMatrix( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) {: #prependMatrix data-toc-label='prependMatrix' }

Prepends a transformation matrix to this Node's transform. Prepending means this transform is conceptually applied
after the rest of the Node's current transform (i.e. applied in the parent coordinate frame).

#### prependTranslation( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #prependTranslation data-toc-label='prependTranslation' }

Prepends an (x,y) translation to our Node's transform in an efficient manner without allocating a matrix.
see https://github.com/phetsims/scenery/issues/119

#### setMatrix( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) {: #setMatrix data-toc-label='setMatrix' }

Changes this Node's transform to match the passed-in transformation matrix.

#### getMatrix() : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> {: #getMatrix data-toc-label='getMatrix' }

Returns a Matrix3 representing our Node's transform.

NOTE: Do not mutate the returned matrix.

#### getTransform() : <span style="font-weight: 400;">[Transform3](../dot/Transform3.md)</span> {: #getTransform data-toc-label='getTransform' }

Returns a reference to our Node's transform

#### resetTransform() {: #resetTransform data-toc-label='resetTransform' }

Resets our Node's transform to an identity transform (i.e. no transform is applied).

#### auditMaxDimensions() {: #auditMaxDimensions data-toc-label='auditMaxDimensions' }

Scenery-internal method for verifying maximum dimensions are NOT smaller than preferred dimensions
NOTE: This has to be public due to mixins not able to access protected/private methods

#### setMaxWidth( maxWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setMaxWidth data-toc-label='setMaxWidth' }

Sets the maximum width of the Node (see constructor for documentation on how maximum dimensions work).

#### getMaxWidth() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getMaxWidth data-toc-label='getMaxWidth' }

Returns the maximum width (if any) of the Node.

#### setMaxHeight( maxHeight : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setMaxHeight data-toc-label='setMaxHeight' }

Sets the maximum height of the Node (see constructor for documentation on how maximum dimensions work).

#### getMaxHeight() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getMaxHeight data-toc-label='getMaxHeight' }

Returns the maximum height (if any) of the Node.

#### setLeft( left : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setLeft data-toc-label='setLeft' }

Shifts this Node horizontally so that its left bound (in the parent coordinate frame) is equal to the passed-in
'left' X value.

NOTE: This may require computation of this node's subtree bounds, which may incur some performance loss.

@param left - After this operation, node.left should approximately equal this value.

#### getLeft() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getLeft data-toc-label='getLeft' }

Returns the X value of the left side of the bounding box of this Node (in the parent coordinate frame).

NOTE: This may require computation of this node's subtree bounds, which may incur some performance loss.

#### setRight( right : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setRight data-toc-label='setRight' }

Shifts this Node horizontally so that its right bound (in the parent coordinate frame) is equal to the passed-in
'right' X value.

NOTE: This may require computation of this node's subtree bounds, which may incur some performance loss.

@param right - After this operation, node.right should approximately equal this value.

#### getRight() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getRight data-toc-label='getRight' }

Returns the X value of the right side of the bounding box of this Node (in the parent coordinate frame).

NOTE: This may require computation of this node's subtree bounds, which may incur some performance loss.

#### setCenterX( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setCenterX data-toc-label='setCenterX' }

Shifts this Node horizontally so that its horizontal center (in the parent coordinate frame) is equal to the
passed-in center X value.

NOTE: This may require computation of this node's subtree bounds, which may incur some performance loss.

@param x - After this operation, node.centerX should approximately equal this value.

#### getCenterX() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getCenterX data-toc-label='getCenterX' }

Returns the X value of this node's horizontal center (in the parent coordinate frame)

NOTE: This may require computation of this node's subtree bounds, which may incur some performance loss.

#### setCenterY( y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setCenterY data-toc-label='setCenterY' }

Shifts this Node vertically so that its vertical center (in the parent coordinate frame) is equal to the
passed-in center Y value.

NOTE: This may require computation of this node's subtree bounds, which may incur some performance loss.

@param y - After this operation, node.centerY should approximately equal this value.

#### getCenterY() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getCenterY data-toc-label='getCenterY' }

Returns the Y value of this node's vertical center (in the parent coordinate frame)

NOTE: This may require computation of this node's subtree bounds, which may incur some performance loss.

#### setTop( top : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setTop data-toc-label='setTop' }

Shifts this Node vertically so that its top (in the parent coordinate frame) is equal to the passed-in Y value.

NOTE: top is the lowest Y value in our bounds.
NOTE: This may require computation of this node's subtree bounds, which may incur some performance loss.

@param top - After this operation, node.top should approximately equal this value.

#### getTop() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getTop data-toc-label='getTop' }

Returns the lowest Y value of this node's bounding box (in the parent coordinate frame).

NOTE: This may require computation of this node's subtree bounds, which may incur some performance loss.

#### setBottom( bottom : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setBottom data-toc-label='setBottom' }

Shifts this Node vertically so that its bottom (in the parent coordinate frame) is equal to the passed-in Y value.

NOTE: bottom is the highest Y value in our bounds.
NOTE: This may require computation of this node's subtree bounds, which may incur some performance loss.

@param bottom - After this operation, node.bottom should approximately equal this value.

#### getBottom() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getBottom data-toc-label='getBottom' }

Returns the highest Y value of this node's bounding box (in the parent coordinate frame).

NOTE: This may require computation of this node's subtree bounds, which may incur some performance loss.

#### setLeftTop( leftTop : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setLeftTop data-toc-label='setLeftTop' }

Sets the position of the upper-left corner of this node's bounds to the specified point.

#### getLeftTop() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getLeftTop data-toc-label='getLeftTop' }

Returns the upper-left corner of this node's bounds.

#### setCenterTop( centerTop : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setCenterTop data-toc-label='setCenterTop' }

Sets the position of the center-top location of this node's bounds to the specified point.

#### getCenterTop() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getCenterTop data-toc-label='getCenterTop' }

Returns the center-top location of this node's bounds.

#### setRightTop( rightTop : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setRightTop data-toc-label='setRightTop' }

Sets the position of the upper-right corner of this node's bounds to the specified point.

#### getRightTop() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getRightTop data-toc-label='getRightTop' }

Returns the upper-right corner of this node's bounds.

#### setLeftCenter( leftCenter : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setLeftCenter data-toc-label='setLeftCenter' }

Sets the position of the center-left of this node's bounds to the specified point.

#### getLeftCenter() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getLeftCenter data-toc-label='getLeftCenter' }

Returns the center-left corner of this node's bounds.

#### setCenter( center : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setCenter data-toc-label='setCenter' }

Sets the center of this node's bounds to the specified point.

#### getCenter() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getCenter data-toc-label='getCenter' }

Returns the center of this node's bounds.

#### setRightCenter( rightCenter : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setRightCenter data-toc-label='setRightCenter' }

Sets the position of the center-right of this node's bounds to the specified point.

#### getRightCenter() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getRightCenter data-toc-label='getRightCenter' }

Returns the center-right of this node's bounds.

#### setLeftBottom( leftBottom : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setLeftBottom data-toc-label='setLeftBottom' }

Sets the position of the lower-left corner of this node's bounds to the specified point.

#### getLeftBottom() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getLeftBottom data-toc-label='getLeftBottom' }

Returns the lower-left corner of this node's bounds.

#### setCenterBottom( centerBottom : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setCenterBottom data-toc-label='setCenterBottom' }

Sets the position of the center-bottom of this node's bounds to the specified point.

#### getCenterBottom() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getCenterBottom data-toc-label='getCenterBottom' }

Returns the center-bottom of this node's bounds.

#### setRightBottom( rightBottom : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setRightBottom data-toc-label='setRightBottom' }

Sets the position of the lower-right corner of this node's bounds to the specified point.

#### getRightBottom() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getRightBottom data-toc-label='getRightBottom' }

Returns the lower-right corner of this node's bounds.

#### getWidth() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getWidth data-toc-label='getWidth' }

Returns the width of this node's bounding box (in the parent coordinate frame).

NOTE: This may require computation of this node's subtree bounds, which may incur some performance loss.

#### getHeight() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getHeight data-toc-label='getHeight' }

Returns the height of this node's bounding box (in the parent coordinate frame).

NOTE: This may require computation of this node's subtree bounds, which may incur some performance loss.

#### getLocalWidth() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getLocalWidth data-toc-label='getLocalWidth' }

Returns the width of this node's bounding box (in the local coordinate frame).

NOTE: This may require computation of this node's subtree bounds, which may incur some performance loss.

#### getLocalHeight() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getLocalHeight data-toc-label='getLocalHeight' }

Returns the height of this node's bounding box (in the local coordinate frame).

NOTE: This may require computation of this node's subtree bounds, which may incur some performance loss.

#### getLocalLeft() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getLocalLeft data-toc-label='getLocalLeft' }

Returns the X value of the left side of the bounding box of this Node (in the local coordinate frame).

NOTE: This may require computation of this node's subtree bounds, which may incur some performance loss.

#### getLocalRight() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getLocalRight data-toc-label='getLocalRight' }

Returns the X value of the right side of the bounding box of this Node (in the local coordinate frame).

NOTE: This may require computation of this node's subtree bounds, which may incur some performance loss.

#### getLocalCenterX() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getLocalCenterX data-toc-label='getLocalCenterX' }

Returns the X value of this node's horizontal center (in the local coordinate frame)

NOTE: This may require computation of this node's subtree bounds, which may incur some performance loss.

#### getLocalCenterY() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getLocalCenterY data-toc-label='getLocalCenterY' }

Returns the Y value of this node's vertical center (in the local coordinate frame)

NOTE: This may require computation of this node's subtree bounds, which may incur some performance loss.

#### getLocalTop() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getLocalTop data-toc-label='getLocalTop' }

Returns the lowest Y value of this node's bounding box (in the local coordinate frame).

NOTE: This may require computation of this node's subtree bounds, which may incur some performance loss.

#### getLocalBottom() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getLocalBottom data-toc-label='getLocalBottom' }

Returns the highest Y value of this node's bounding box (in the local coordinate frame).

NOTE: This may require computation of this node's subtree bounds, which may incur some performance loss.

#### getLocalLeftTop() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getLocalLeftTop data-toc-label='getLocalLeftTop' }

Returns the upper-left corner of this node's localBounds.

#### getLocalCenterTop() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getLocalCenterTop data-toc-label='getLocalCenterTop' }

Returns the center-top location of this node's localBounds.

#### getLocalRightTop() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getLocalRightTop data-toc-label='getLocalRightTop' }

Returns the upper-right corner of this node's localBounds.

#### getLocalLeftCenter() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getLocalLeftCenter data-toc-label='getLocalLeftCenter' }

Returns the center-left corner of this node's localBounds.

#### getLocalCenter() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getLocalCenter data-toc-label='getLocalCenter' }

Returns the center of this node's localBounds.

#### getLocalRightCenter() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getLocalRightCenter data-toc-label='getLocalRightCenter' }

Returns the center-right of this node's localBounds.

#### getLocalLeftBottom() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getLocalLeftBottom data-toc-label='getLocalLeftBottom' }

Returns the lower-left corner of this node's localBounds.

#### getLocalCenterBottom() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getLocalCenterBottom data-toc-label='getLocalCenterBottom' }

Returns the center-bottom of this node's localBounds.

#### getLocalRightBottom() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getLocalRightBottom data-toc-label='getLocalRightBottom' }

Returns the lower-right corner of this node's localBounds.

#### getId() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getId data-toc-label='getId' }

Returns the unique integral ID for this node.

#### setVisibleProperty( newTarget : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setVisibleProperty data-toc-label='setVisibleProperty' }

Sets what Property our visibleProperty is backed by, so that changes to this provided Property will change this
Node's visibility, and vice versa. This does not change this._visibleProperty. See TinyForwardingProperty.setTargetProperty()
for more info.

NOTE For PhET-iO use:
All PhET-iO instrumented Nodes create their own instrumented visibleProperty (if one is not passed in as
an option). Once a Node's visibleProperty has been registered with PhET-iO, it cannot be "swapped out" for another.
If you need to "delay" setting an instrumented visibleProperty to this node, pass phetioVisiblePropertyInstrumented
to instrumentation call to this Node (where Tandem is provided).

#### getVisibleProperty() : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #getVisibleProperty data-toc-label='getVisibleProperty' }

Get this Node's visibleProperty. Note! This is not the reciprocal of setVisibleProperty. Node.prototype._visibleProperty
is a TinyForwardingProperty, and is set up to listen to changes from the visibleProperty provided by
setVisibleProperty(), but the underlying reference does not change. This means the following:
    * const myNode = new Node();
const visibleProperty = new Property( false );
myNode.setVisibleProperty( visibleProperty )
=&gt; myNode.getVisibleProperty() !== visibleProperty (!!!!!!)

Please use this with caution. See setVisibleProperty() for more information.

#### setVisible( visible : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setVisible data-toc-label='setVisible' }

Sets whether this Node is visible.  DO NOT override this as a way of adding additional behavior when a Node's
visibility changes, add a listener to this.visibleProperty instead.

#### isVisible() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isVisible data-toc-label='isVisible' }

Returns whether this Node is visible.

#### setPhetioVisiblePropertyInstrumented( phetioVisiblePropertyInstrumented : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setPhetioVisiblePropertyInstrumented data-toc-label='setPhetioVisiblePropertyInstrumented' }

Use this to automatically create a forwarded, PhET-iO instrumented visibleProperty internal to Node.

#### getPhetioVisiblePropertyInstrumented() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #getPhetioVisiblePropertyInstrumented data-toc-label='getPhetioVisiblePropertyInstrumented' }

#### swapVisibility( otherNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #swapVisibility data-toc-label='swapVisibility' }

Swap the visibility of this node with another node. The Node that is made visible will receive keyboard focus
if it is focusable and the previously visible Node had focus.

#### setOpacity( opacity : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setOpacity data-toc-label='setOpacity' }

Sets the opacity of this Node (and its sub-tree), where 0 is fully transparent, and 1 is fully opaque.  Values
outside of that range throw an Error.
@throws Error if opacity out of range

#### getOpacity() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getOpacity data-toc-label='getOpacity' }

Returns the opacity of this node.

#### setDisabledOpacity( disabledOpacity : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setDisabledOpacity data-toc-label='setDisabledOpacity' }

Sets the disabledOpacity of this Node (and its sub-tree), where 0 is fully transparent, and 1 is fully opaque.
Values outside of that range throw an Error.
@throws Error if disabledOpacity out of range

#### getDisabledOpacity() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getDisabledOpacity data-toc-label='getDisabledOpacity' }

Returns the disabledOpacity of this node.

#### getEffectiveOpacity() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getEffectiveOpacity data-toc-label='getEffectiveOpacity' }

Returns the opacity actually applied to the node.

#### setFilters( filters : <span style="font-weight: 400;">[Filter](../scenery/Filter.md)[]</span> ) {: #setFilters data-toc-label='setFilters' }

Sets the non-opacity filters for this Node.

The default is an empty array (no filters). It should be an array of Filter objects, which will be effectively
applied in-order on this Node (and its subtree), and will be applied BEFORE opacity/clipping.

NOTE: Some filters may decrease performance (and this may be platform-specific). Please read documentation for each
filter before using.

Typical filter types to use are:
- Brightness
- Contrast
- DropShadow (EXPERIMENTAL)
- GaussianBlur (EXPERIMENTAL)
- Grayscale (Grayscale.FULL for the full effect)
- HueRotate
- Invert (Invert.FULL for the full effect)
- Saturate
- Sepia (Sepia.FULL for the full effect)

Filter.js has more information in general on filters.

#### getFilters() : <span style="font-weight: 400;">[Filter](../scenery/Filter.md)[]</span> {: #getFilters data-toc-label='getFilters' }

Returns the non-opacity filters for this Node.

#### setPickableProperty( newTarget : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setPickableProperty data-toc-label='setPickableProperty' }

Sets what Property our pickableProperty is backed by, so that changes to this provided Property will change this
Node's pickability, and vice versa. This does not change this._pickableProperty. See TinyForwardingProperty.setTargetProperty()
for more info.

PhET-iO Instrumented Nodes do not by default create their own instrumented pickableProperty, even though Node.visibleProperty does.

#### getPickableProperty() : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span> {: #getPickableProperty data-toc-label='getPickableProperty' }

Get this Node's pickableProperty. Note! This is not the reciprocal of setPickableProperty. Node.prototype._pickableProperty
is a TinyForwardingProperty, and is set up to listen to changes from the pickableProperty provided by
setPickableProperty(), but the underlying reference does not change. This means the following:
const myNode = new Node();
const pickableProperty = new Property( false );
myNode.setPickableProperty( pickableProperty )
=&gt; myNode.getPickableProperty() !== pickableProperty (!!!!!!)

Please use this with caution. See setPickableProperty() for more information.

#### setPickable( pickable : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setPickable data-toc-label='setPickable' }

Sets whether this Node (and its subtree) will allow hit-testing (and thus user interaction), controlling what
Trail is returned from node.trailUnderPoint().

Pickable can take one of three values:
- null: (default) pass-through behavior. Hit-testing will prune this subtree if there are no
        ancestors/descendants with either pickable: true set or with any input listeners.
- false: Hit-testing is pruned, nothing in this node or its subtree will respond to events or be picked.
- true: Hit-testing will not be pruned in this subtree, except for pickable: false cases.

Hit testing is accomplished mainly with node.trailUnderPointer() and node.trailUnderPoint(), following the
above rules. Nodes that are not pickable (pruned) will not have input events targeted to them.

The following rules (applied in the given order) determine whether a Node (really, a Trail) will receive input events:
1. If the node or one of its ancestors has pickable: false OR is invisible, the Node *will not* receive events
   or hit testing.
2. If the Node or one of its ancestors or descendants is pickable: true OR has an input listener attached, it
   *will* receive events or hit testing.
3. Otherwise, it *will not* receive events or hit testing.

This is useful for semi-transparent overlays or other visual elements that should be displayed but should not
prevent objects below from being manipulated by user input, and the default null value is used to increase
performance by ignoring areas that don't need user input.

NOTE: If you want something to be picked "mouse is over it", but block input events even if there are listeners,
      then pickable:false is not appropriate, and inputEnabled:false is preferred.

For a visual example of how pickability interacts with input listeners and visibility, see the notes at the
bottom of http://phetsims.github.io/scenery/doc/implementation-notes, or scenery/assets/pickability.svg.

#### isPickable() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #isPickable data-toc-label='isPickable' }

Returns the pickability of this node.

#### setEnabledProperty( newTarget : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setEnabledProperty data-toc-label='setEnabledProperty' }

Sets what Property our enabledProperty is backed by, so that changes to this provided Property will change this
Node's enabled, and vice versa. This does not change this._enabledProperty. See TinyForwardingProperty.setTargetProperty()
for more info.


NOTE For PhET-iO use:
All PhET-iO instrumented Nodes create their own instrumented enabledProperty (if one is not passed in as
an option). Once a Node's enabledProperty has been registered with PhET-iO, it cannot be "swapped out" for another.
If you need to "delay" setting an instrumented enabledProperty to this node, pass phetioEnabledPropertyInstrumented
to instrumentation call to this Node (where Tandem is provided).

#### getEnabledProperty() : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #getEnabledProperty data-toc-label='getEnabledProperty' }

Get this Node's enabledProperty. Note! This is not the reciprocal of setEnabledProperty. Node.prototype._enabledProperty
is a TinyForwardingProperty, and is set up to listen to changes from the enabledProperty provided by
setEnabledProperty(), but the underlying reference does not change. This means the following:
const myNode = new Node();
const enabledProperty = new Property( false );
myNode.setEnabledProperty( enabledProperty )
=&gt; myNode.getEnabledProperty() !== enabledProperty (!!!!!!)

Please use this with caution. See setEnabledProperty() for more information.

#### setPhetioEnabledPropertyInstrumented( phetioEnabledPropertyInstrumented : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setPhetioEnabledPropertyInstrumented data-toc-label='setPhetioEnabledPropertyInstrumented' }

Use this to automatically create a forwarded, PhET-iO instrumented enabledProperty internal to Node. This is different
from visible because enabled by default doesn't not create this forwarded Property.

#### getPhetioEnabledPropertyInstrumented() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #getPhetioEnabledPropertyInstrumented data-toc-label='getPhetioEnabledPropertyInstrumented' }

#### setEnabled( enabled : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setEnabled data-toc-label='setEnabled' }

Sets whether this Node is enabled

#### isEnabled() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isEnabled data-toc-label='isEnabled' }

Returns the enabled of this node.

#### onEnabledPropertyChange( enabled : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #onEnabledPropertyChange data-toc-label='onEnabledPropertyChange' }

(protected)

Called when enabledProperty changes values.
- override this to change the behavior of enabled

#### setInputEnabledProperty( newTarget : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setInputEnabledProperty data-toc-label='setInputEnabledProperty' }

Sets what Property our inputEnabledProperty is backed by, so that changes to this provided Property will change this whether this
Node's input is enabled, and vice versa. This does not change this._inputEnabledProperty. See TinyForwardingProperty.setTargetProperty()
for more info.

NOTE For PhET-iO use:
All PhET-iO instrumented Nodes create their own instrumented inputEnabledProperty (if one is not passed in as
an option). Once a Node's inputEnabledProperty has been registered with PhET-iO, it cannot be "swapped out" for another.
If you need to "delay" setting an instrumented inputEnabledProperty to this node, pass phetioInputEnabledPropertyInstrumented
to instrumentation call to this Node (where Tandem is provided).

#### getInputEnabledProperty() : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #getInputEnabledProperty data-toc-label='getInputEnabledProperty' }

Get this Node's inputEnabledProperty. Note! This is not the reciprocal of setInputEnabledProperty. Node.prototype._inputEnabledProperty
is a TinyForwardingProperty, and is set up to listen to changes from the inputEnabledProperty provided by
setInputEnabledProperty(), but the underlying reference does not change. This means the following:
const myNode = new Node();
const inputEnabledProperty = new Property( false );
myNode.setInputEnabledProperty( inputEnabledProperty )
=&gt; myNode.getInputEnabledProperty() !== inputEnabledProperty (!!!!!!)

Please use this with caution. See setInputEnabledProperty() for more information.

#### setPhetioInputEnabledPropertyInstrumented( phetioInputEnabledPropertyInstrumented : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setPhetioInputEnabledPropertyInstrumented data-toc-label='setPhetioInputEnabledPropertyInstrumented' }

Use this to automatically create a forwarded, PhET-iO instrumented inputEnabledProperty internal to Node. This is different
from visible because inputEnabled by default doesn't not create this forwarded Property.

#### getPhetioInputEnabledPropertyInstrumented() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #getPhetioInputEnabledPropertyInstrumented data-toc-label='getPhetioInputEnabledPropertyInstrumented' }

#### setInputEnabled( inputEnabled : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setInputEnabled data-toc-label='setInputEnabled' }

Sets whether input is enabled for this Node and its subtree. If false, input event listeners will not be fired
on this Node or its descendants in the picked Trail. This does NOT effect picking (what Trail/nodes are under
a pointer), but only effects what listeners are fired.

Additionally, this will affect cursor behavior. If inputEnabled=false, descendants of this Node will not be
checked when determining what cursor will be shown. Instead, if a pointer (e.g. mouse) is over a descendant,
this Node's cursor will be checked first, then ancestors will be checked as normal.

#### isInputEnabled() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isInputEnabled data-toc-label='isInputEnabled' }

Returns whether input is enabled for this Node and its subtree. See setInputEnabled for more documentation.

#### setInputListeners( inputListeners : <span style="font-weight: 400;">[TInputListener](../scenery/TInputListener.md)[]</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setInputListeners data-toc-label='setInputListeners' }

Sets all of the input listeners attached to this Node.

This is equivalent to removing all current input listeners with removeInputListener() and adding all new
listeners (in order) with addInputListener().

#### getInputListeners() : <span style="font-weight: 400;">[TInputListener](../scenery/TInputListener.md)[]</span> {: #getInputListeners data-toc-label='getInputListeners' }

Returns a copy of all of our input listeners.

#### setCursor( cursor : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setCursor data-toc-label='setCursor' }

Sets the CSS cursor string that should be used when the mouse is over this node. null is the default, and
indicates that ancestor nodes (or the browser default) should be used.

@param cursor - A CSS cursor string, like 'pointer', or 'none' - Examples are:
auto default none inherit help pointer progress wait crosshair text vertical-text alias copy move no-drop not-allowed
e-resize n-resize w-resize s-resize nw-resize ne-resize se-resize sw-resize ew-resize ns-resize nesw-resize nwse-resize
context-menu cell col-resize row-resize all-scroll url( ... ) --&gt; does it support data URLs?

#### getCursor() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getCursor data-toc-label='getCursor' }

Returns the CSS cursor string for this node, or null if there is no cursor specified.

#### setMouseArea( area : <span style="font-weight: 400;">[Shape](../kite/Shape.md) | [Bounds2](../dot/Bounds2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setMouseArea data-toc-label='setMouseArea' }

Sets the hit-tested mouse area for this Node (see constructor for more advanced documentation). Use null for the
default behavior.

#### getMouseArea() : <span style="font-weight: 400;">[Shape](../kite/Shape.md) | [Bounds2](../dot/Bounds2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getMouseArea data-toc-label='getMouseArea' }

Returns the hit-tested mouse area for this node.

#### setTouchArea( area : <span style="font-weight: 400;">[Shape](../kite/Shape.md) | [Bounds2](../dot/Bounds2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setTouchArea data-toc-label='setTouchArea' }

Sets the hit-tested touch area for this Node (see constructor for more advanced documentation). Use null for the
default behavior.

#### getTouchArea() : <span style="font-weight: 400;">[Shape](../kite/Shape.md) | [Bounds2](../dot/Bounds2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getTouchArea data-toc-label='getTouchArea' }

Returns the hit-tested touch area for this node.

#### setClipArea( shape : <span style="font-weight: 400;">[Shape](../kite/Shape.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setClipArea data-toc-label='setClipArea' }

Sets a clipped shape where only content in our local coordinate frame that is inside the clip area will be shown
(anything outside is fully transparent).

#### getClipArea() : <span style="font-weight: 400;">[Shape](../kite/Shape.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getClipArea data-toc-label='getClipArea' }

Returns the clipped area for this node.

#### hasClipArea() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasClipArea data-toc-label='hasClipArea' }

Returns whether this Node has a clip area.

#### setRendererBitmask( bitmask : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setRendererBitmask data-toc-label='setRendererBitmask' }

(protected)

Sets what self renderers (and other bitmask flags) are supported by this node.

#### invalidateSupportedRenderers() {: #invalidateSupportedRenderers data-toc-label='invalidateSupportedRenderers' }

Meant to be overridden, so that it can be called to ensure that the renderer bitmask will be up-to-date.

#### setRenderer( renderer : <span style="font-weight: 400;">[RendererType](../scenery/Node.md#RendererType)</span> ) {: #setRenderer data-toc-label='setRenderer' }

Sets a preferred renderer for this Node and its sub-tree. Scenery will attempt to use this renderer under here
unless it isn't supported, OR another preferred renderer is set as a closer ancestor. Acceptable values are:
- null (default, no preference)
- 'canvas'
- 'svg'
- 'dom'
- 'webgl'

#### getRenderer() : <span style="font-weight: 400;">[RendererType](../scenery/Node.md#RendererType)</span> {: #getRenderer data-toc-label='getRenderer' }

Returns the preferred renderer (if any) of this node, as a string.

#### setLayerSplit( split : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setLayerSplit data-toc-label='setLayerSplit' }

Sets whether or not Scenery will try to put this Node (and its descendants) into a separate SVG/Canvas/WebGL/etc.
layer, different from other siblings or other nodes. Can be used for performance purposes.

#### isLayerSplit() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isLayerSplit data-toc-label='isLayerSplit' }

Returns whether the layerSplit performance flag is set.

#### setUsesOpacity( usesOpacity : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setUsesOpacity data-toc-label='setUsesOpacity' }

Sets whether or not Scenery will take into account that this Node plans to use opacity. Can have performance
gains if there need to be multiple layers for this node's descendants.

#### getUsesOpacity() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #getUsesOpacity data-toc-label='getUsesOpacity' }

Returns whether the usesOpacity performance flag is set.

#### setCSSTransform( cssTransform : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setCSSTransform data-toc-label='setCSSTransform' }

Sets a flag for whether whether the contents of this Node and its children should be displayed in a separate
DOM element that is transformed with CSS transforms. It can have potential speedups, since the browser may not
have to re-rasterize contents when it is animated.

#### isCSSTransformed() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isCSSTransformed data-toc-label='isCSSTransformed' }

Returns whether the cssTransform performance flag is set.

#### setExcludeInvisible( excludeInvisible : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setExcludeInvisible data-toc-label='setExcludeInvisible' }

Sets a performance flag for whether layers/DOM elements should be excluded (or included) when things are
invisible. The default is false, and invisible content is in the DOM, but hidden.

#### isExcludeInvisible() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isExcludeInvisible data-toc-label='isExcludeInvisible' }

Returns whether the excludeInvisible performance flag is set.

#### setExcludeInvisibleChildrenFromBounds( excludeInvisibleChildrenFromBounds : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setExcludeInvisibleChildrenFromBounds data-toc-label='setExcludeInvisibleChildrenFromBounds' }

If this is set to true, child nodes that are invisible will NOT contribute to the bounds of this node.

The default is for child nodes bounds' to be included in this node's bounds, but that would in general be a
problem for layout containers or other situations, see https://github.com/phetsims/joist/issues/608.

#### isExcludeInvisibleChildrenFromBounds() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isExcludeInvisibleChildrenFromBounds data-toc-label='isExcludeInvisibleChildrenFromBounds' }

Returns whether the excludeInvisibleChildrenFromBounds flag is set, see
setExcludeInvisibleChildrenFromBounds() for documentation.

#### setInterruptSubtreeOnInvisible( interruptSubtreeOnInvisible : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setInterruptSubtreeOnInvisible data-toc-label='setInterruptSubtreeOnInvisible' }

If this is set to true, this node will call interruptSubtreeInput() on itself when it is made invisible.
See https://github.com/phetsims/scenery/issues/1645.

#### isInterruptSubtreeOnInvisible() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isInterruptSubtreeOnInvisible data-toc-label='isInterruptSubtreeOnInvisible' }

Returns whether the interruptSubtreeOnInvisible flag is set, see
setInterruptSubtreeOnInvisible() for documentation.

#### setLayoutOptions( layoutOptions : <span style="font-weight: 400;">[TLayoutOptions](../scenery/TLayoutOptions.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setLayoutOptions data-toc-label='setLayoutOptions' }

Sets options that are provided to layout managers in order to customize positioning of this node.

#### getLayoutOptions() : <span style="font-weight: 400;">[TLayoutOptions](../scenery/TLayoutOptions.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getLayoutOptions data-toc-label='getLayoutOptions' }

#### mutateLayoutOptions( layoutOptions? : <span style="font-weight: 400;">[TLayoutOptions](../scenery/TLayoutOptions.md)</span> ) {: #mutateLayoutOptions data-toc-label='mutateLayoutOptions' }

#### setPreventFit( preventFit : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setPreventFit data-toc-label='setPreventFit' }

Sets the preventFit performance flag.

#### isPreventFit() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isPreventFit data-toc-label='isPreventFit' }

Returns whether the preventFit performance flag is set.

#### setWebGLScale( webglScale : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setWebGLScale data-toc-label='setWebGLScale' }

Sets whether there is a custom WebGL scale applied to the Canvas, and if so what scale.

#### getWebGLScale() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getWebGLScale data-toc-label='getWebGLScale' }

Returns the value of the webglScale performance flag.

#### getUniqueTrail( predicate? : <span style="font-weight: 400;">( node: [Node](../scenery/Node.md) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span> {: #getUniqueTrail data-toc-label='getUniqueTrail' }

Returns the one Trail that starts from a node with no parents (or if the predicate is present, a Node that
satisfies it), and ends at this node. If more than one Trail would satisfy these conditions, an assertion is
thrown (please use getTrails() for those cases).

@param [predicate] - If supplied, we will only return trails rooted at a Node that satisfies predicate( node ) == true

#### getUniqueTrailTo( rootNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span> {: #getUniqueTrailTo data-toc-label='getUniqueTrailTo' }

Returns a Trail rooted at rootNode and ends at this node. Throws an assertion if the number of trails that match
this condition isn't exactly 1.

#### getTrails( predicate? : <span style="font-weight: 400;">( node: [Node](../scenery/Node.md) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)[]</span> {: #getTrails data-toc-label='getTrails' }

Returns an array of all Trails that start from nodes with no parent (or if a predicate is present, those that
satisfy the predicate), and ends at this node.

@param [predicate] - If supplied, we will only return Trails rooted at nodes that satisfy predicate( node ) == true.

#### getTrailsTo( rootNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)[]</span> {: #getTrailsTo data-toc-label='getTrailsTo' }

Returns an array of all Trails rooted at rootNode and end at this node.

#### getLeafTrails( predicate? : <span style="font-weight: 400;">( node: [Node](../scenery/Node.md) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)[]</span> {: #getLeafTrails data-toc-label='getLeafTrails' }

Returns an array of all Trails rooted at this Node and end with nodes with no children (or if a predicate is
present, those that satisfy the predicate).

@param [predicate] - If supplied, we will only return Trails ending at nodes that satisfy predicate( node ) == true.

#### getLeafTrailsTo( leafNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)[]</span> {: #getLeafTrailsTo data-toc-label='getLeafTrailsTo' }

Returns an array of all Trails rooted at this Node and end with leafNode.

#### getUniqueLeafTrail( predicate? : <span style="font-weight: 400;">( node: [Node](../scenery/Node.md) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span> {: #getUniqueLeafTrail data-toc-label='getUniqueLeafTrail' }

Returns a Trail rooted at this node and ending at a Node that has no children (or if a predicate is provided, a
Node that satisfies the predicate). If more than one trail matches this description, an assertion will be fired.

@param [predicate] - If supplied, we will return a Trail that ends with a Node that satisfies predicate( node ) == true

#### getUniqueLeafTrailTo( leafNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span> {: #getUniqueLeafTrailTo data-toc-label='getUniqueLeafTrailTo' }

Returns a Trail rooted at this Node and ending at leafNode. If more than one trail matches this description,
an assertion will be fired.

#### getConnectedNodes() : <span style="font-weight: 400;">[Node](../scenery/Node.md)[]</span> {: #getConnectedNodes data-toc-label='getConnectedNodes' }

Returns all nodes in the connected component, returned in an arbitrary order, including nodes that are ancestors
of this node.

#### getSubtreeNodes() : <span style="font-weight: 400;">[Node](../scenery/Node.md)[]</span> {: #getSubtreeNodes data-toc-label='getSubtreeNodes' }

Returns all nodes in the subtree with this Node as its root, returned in an arbitrary order. Like
getConnectedNodes, but doesn't include parents.

#### getTopologicallySortedNodes() : <span style="font-weight: 400;">[Node](../scenery/Node.md)[]</span> {: #getTopologicallySortedNodes data-toc-label='getTopologicallySortedNodes' }

Returns all nodes that are connected to this node, sorted in topological order.

#### canAddChild( child : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #canAddChild data-toc-label='canAddChild' }

Returns whether this.addChild( child ) will not cause circular references.

#### canvasPaintSelf( wrapper : <span style="font-weight: 400;">[CanvasContextWrapper](../scenery/CanvasContextWrapper.md)</span>, matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) {: #canvasPaintSelf data-toc-label='canvasPaintSelf' }

(protected)

To be overridden in paintable Node types. Should hook into the drawable's prototype (presumably).

Draws the current Node's self representation, assuming the wrapper's Canvas context is already in the local
coordinate frame of this node.

@param wrapper
@param matrix - The transformation matrix already applied to the context.

#### renderToCanvasSelf( wrapper : <span style="font-weight: 400;">[CanvasContextWrapper](../scenery/CanvasContextWrapper.md)</span>, matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) {: #renderToCanvasSelf data-toc-label='renderToCanvasSelf' }

Renders this Node only (its self) into the Canvas wrapper, in its local coordinate frame.

@param wrapper
@param matrix - The transformation matrix already applied to the context.

#### renderToCanvasSubtree( wrapper : <span style="font-weight: 400;">[CanvasContextWrapper](../scenery/CanvasContextWrapper.md)</span>, matrix? : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) {: #renderToCanvasSubtree data-toc-label='renderToCanvasSubtree' }

Renders this Node and its descendants into the Canvas wrapper.

@param wrapper
@param [matrix] - Optional transform to be applied

#### renderToCanvas( canvas : <span style="font-weight: 400;">[HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement)</span>, context : <span style="font-weight: 400;">CanvasRenderingContext2D</span>, callback? : <span style="font-weight: 400;">() =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span>, backgroundColor? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) {: #renderToCanvas data-toc-label='renderToCanvas' }

@deprecated
Render this Node to the Canvas (clearing it first)

#### toCanvas( callback : <span style="font-weight: 400;">( canvas: [HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement), x: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, y: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, width: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, height: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span>, x? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, width? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, height? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #toCanvas data-toc-label='toCanvas' }

Renders this Node to an HTMLCanvasElement. If toCanvas( callback ) is used, the canvas will contain the node's
entire bounds (if no x/y/width/height is provided)

@param callback - callback( canvas, x, y, width, height ) is called, where x,y are computed if not specified.
@param [x] - The X offset for where the upper-left of the content drawn into the Canvas
@param [y] - The Y offset for where the upper-left of the content drawn into the Canvas
@param [width] - The width of the Canvas output
@param [height] - The height of the Canvas output

#### toDataURL( callback : <span style="font-weight: 400;">( dataURI: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>, x: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, y: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, width: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, height: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span>, x? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, width? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, height? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #toDataURL data-toc-label='toDataURL' }

Renders this Node to a Canvas, then calls the callback with the data URI from it.

@param callback - callback( dataURI {string}, x, y, width, height ) is called, where x,y are computed if not specified.
@param [x] - The X offset for where the upper-left of the content drawn into the Canvas
@param [y] - The Y offset for where the upper-left of the content drawn into the Canvas
@param [width] - The width of the Canvas output
@param [height] - The height of the Canvas output

#### toImage( callback : <span style="font-weight: 400;">( image: HTMLImageElement, x: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, y: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span>, x? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, width? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, height? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #toImage data-toc-label='toImage' }

Calls the callback with an HTMLImageElement that contains this Node's subtree's visual form.
Will always be asynchronous.
@deprecated - Use node.rasterized() for creating a rasterized copy, or generally it's best to get the data
              URL instead directly.

@param callback - callback( image {HTMLImageElement}, x, y ) is called
@param [x] - The X offset for where the upper-left of the content drawn into the Canvas
@param [y] - The Y offset for where the upper-left of the content drawn into the Canvas
@param [width] - The width of the Canvas output
@param [height] - The height of the Canvas output

#### toImageNodeAsynchronous( callback : <span style="font-weight: 400;">( image: [Node](../scenery/Node.md) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span>, x? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, width? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, height? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #toImageNodeAsynchronous data-toc-label='toImageNodeAsynchronous' }

Calls the callback with an Image Node that contains this Node's subtree's visual form. This is always
asynchronous, but the resulting image Node can be used with any back-end (Canvas/WebGL/SVG/etc.)
@deprecated - Use node.rasterized() instead (should avoid the asynchronous-ness)

@param callback - callback( imageNode {Image} ) is called
@param [x] - The X offset for where the upper-left of the content drawn into the Canvas
@param [y] - The Y offset for where the upper-left of the content drawn into the Canvas
@param [width] - The width of the Canvas output
@param [height] - The height of the Canvas output

#### toCanvasNodeSynchronous( x? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, width? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, height? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #toCanvasNodeSynchronous data-toc-label='toCanvasNodeSynchronous' }

Creates a Node containing an Image Node that contains this Node's subtree's visual form. This is always
synchronous, but the resulting image Node can ONLY used with Canvas/WebGL (NOT SVG).
@deprecated - Use node.rasterized() instead, should be mostly equivalent if useCanvas:true is provided.

@param [x] - The X offset for where the upper-left of the content drawn into the Canvas
@param [y] - The Y offset for where the upper-left of the content drawn into the Canvas
@param [width] - The width of the Canvas output
@param [height] - The height of the Canvas output

#### toDataURLImageSynchronous( x? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, width? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, height? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Image](../scenery/Image.md)</span> {: #toDataURLImageSynchronous data-toc-label='toDataURLImageSynchronous' }

Returns an Image that renders this Node. This is always synchronous, and sets initialWidth/initialHeight so that
we have the bounds immediately.  Use this method if you need to reduce the number of parent Nodes.

NOTE: the resultant Image should be positioned using its bounds rather than (x,y).  To create a Node that can be
positioned like any other node, please use toDataURLNodeSynchronous.
@deprecated - Use node.rasterized() instead, should be mostly equivalent if wrap:false is provided.

@param [x] - The X offset for where the upper-left of the content drawn into the Canvas
@param [y] - The Y offset for where the upper-left of the content drawn into the Canvas
@param [width] - The width of the Canvas output
@param [height] - The height of the Canvas output

#### toDataURLNodeSynchronous( x? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, width? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, height? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #toDataURLNodeSynchronous data-toc-label='toDataURLNodeSynchronous' }

Returns a Node that contains this Node's subtree's visual form. This is always synchronous, and sets
initialWidth/initialHeight so that we have the bounds immediately.  An extra wrapper Node is provided
so that transforms can be done independently.  Use this method if you need to be able to transform the node
the same way as if it had not been rasterized.
@deprecated - Use node.rasterized() instead, should be mostly equivalent

@param [x] - The X offset for where the upper-left of the content drawn into the Canvas
@param [y] - The Y offset for where the upper-left of the content drawn into the Canvas
@param [width] - The width of the Canvas output
@param [height] - The height of the Canvas output

#### rasterized( providedOptions? : <span style="font-weight: 400;">RasterizedOptions</span> ) : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #rasterized data-toc-label='rasterized' }

Returns a Node (backed by a scenery Image) that is a rasterized version of this node. See options, by default the
image is wrapped with a container Node.

#### wasVisuallyDisplayed( display? : <span style="font-weight: 400;">[Display](../scenery/Display.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #wasVisuallyDisplayed data-toc-label='wasVisuallyDisplayed' }

Returns whether this Node was visually rendered/displayed by any Display in the last updateDisplay() call. Note
that something can be independently displayed visually, and in the PDOM; this method only checks visually.

@param [display] - if provided, only check if was visible on this particular Display

#### getConnectedDisplays() : <span style="font-weight: 400;">[Display](../scenery/Display.md)[]</span> {: #getConnectedDisplays data-toc-label='getConnectedDisplays' }

Get a list of the displays that are connected to this Node. Gathered by looking up the scene graph ancestors and
collected all rooted Displays along the way.

#### localToParentPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #localToParentPoint data-toc-label='localToParentPoint' }

Returns a point transformed from our local coordinate frame into our parent coordinate frame. Applies our node's
transform to it.

#### localToParentBounds( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #localToParentBounds data-toc-label='localToParentBounds' }

Returns bounds transformed from our local coordinate frame into our parent coordinate frame. If it includes a
rotation, the resulting bounding box will include every point that could have been in the original bounding box
(and it can be expanded).

#### parentToLocalPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #parentToLocalPoint data-toc-label='parentToLocalPoint' }

Returns a point transformed from our parent coordinate frame into our local coordinate frame. Applies the inverse
of our node's transform to it.

#### parentToLocalBounds( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #parentToLocalBounds data-toc-label='parentToLocalBounds' }

Returns bounds transformed from our parent coordinate frame into our local coordinate frame. If it includes a
rotation, the resulting bounding box will include every point that could have been in the original bounding box
(and it can be expanded).

#### transformBoundsFromLocalToParent( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #transformBoundsFromLocalToParent data-toc-label='transformBoundsFromLocalToParent' }

A mutable-optimized form of localToParentBounds() that will modify the provided bounds, transforming it from our
local coordinate frame to our parent coordinate frame.
@returns - The same bounds object.

#### transformBoundsFromParentToLocal( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #transformBoundsFromParentToLocal data-toc-label='transformBoundsFromParentToLocal' }

A mutable-optimized form of parentToLocalBounds() that will modify the provided bounds, transforming it from our
parent coordinate frame to our local coordinate frame.
@returns - The same bounds object.

#### getLocalToGlobalMatrix() : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> {: #getLocalToGlobalMatrix data-toc-label='getLocalToGlobalMatrix' }

Returns a new matrix (fresh copy) that would transform points from our local coordinate frame to the global
coordinate frame.

NOTE: If there are multiple instances of this Node (e.g. this or one ancestor has two parents), it will fail
with an assertion (since the transform wouldn't be uniquely defined).

#### getUniqueTransform() : <span style="font-weight: 400;">[Transform3](../dot/Transform3.md)</span> {: #getUniqueTransform data-toc-label='getUniqueTransform' }

Returns a Transform3 that would transform things from our local coordinate frame to the global coordinate frame.
Equivalent to getUniqueTrail().getTransform(), but faster.

NOTE: If there are multiple instances of this Node (e.g. this or one ancestor has two parents), it will fail
with an assertion (since the transform wouldn't be uniquely defined).

#### getGlobalToLocalMatrix() : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> {: #getGlobalToLocalMatrix data-toc-label='getGlobalToLocalMatrix' }

Returns a new matrix (fresh copy) that would transform points from the global coordinate frame to our local
coordinate frame.

NOTE: If there are multiple instances of this Node (e.g. this or one ancestor has two parents), it will fail
with an assertion (since the transform wouldn't be uniquely defined).

#### localToGlobalPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #localToGlobalPoint data-toc-label='localToGlobalPoint' }

Transforms a point from our local coordinate frame to the global coordinate frame.

NOTE: If there are multiple instances of this Node (e.g. this or one ancestor has two parents), it will fail
with an assertion (since the transform wouldn't be uniquely defined).

#### globalToLocalPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #globalToLocalPoint data-toc-label='globalToLocalPoint' }

Transforms a point from the global coordinate frame to our local coordinate frame.

NOTE: If there are multiple instances of this Node (e.g. this or one ancestor has two parents), it will fail
with an assertion (since the transform wouldn't be uniquely defined).

#### localToGlobalBounds( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #localToGlobalBounds data-toc-label='localToGlobalBounds' }

Transforms bounds from our local coordinate frame to the global coordinate frame. If it includes a
rotation, the resulting bounding box will include every point that could have been in the original bounding box
(and it can be expanded).

NOTE: If there are multiple instances of this Node (e.g. this or one ancestor has two parents), it will fail
with an assertion (since the transform wouldn't be uniquely defined).

#### globalToLocalBounds( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #globalToLocalBounds data-toc-label='globalToLocalBounds' }

Transforms bounds from the global coordinate frame to our local coordinate frame. If it includes a
rotation, the resulting bounding box will include every point that could have been in the original bounding box
(and it can be expanded).

NOTE: If there are multiple instances of this Node (e.g. this or one ancestor has two parents), it will fail
with an assertion (since the transform wouldn't be uniquely defined).

#### parentToGlobalPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #parentToGlobalPoint data-toc-label='parentToGlobalPoint' }

Transforms a point from our parent coordinate frame to the global coordinate frame.

NOTE: If there are multiple instances of this Node (e.g. this or one ancestor has two parents), it will fail
with an assertion (since the transform wouldn't be uniquely defined).

#### parentToGlobalBounds( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #parentToGlobalBounds data-toc-label='parentToGlobalBounds' }

Transforms bounds from our parent coordinate frame to the global coordinate frame. If it includes a
rotation, the resulting bounding box will include every point that could have been in the original bounding box
(and it can be expanded).

NOTE: If there are multiple instances of this Node (e.g. this or one ancestor has two parents), it will fail
with an assertion (since the transform wouldn't be uniquely defined).

#### globalToParentPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #globalToParentPoint data-toc-label='globalToParentPoint' }

Transforms a point from the global coordinate frame to our parent coordinate frame.

NOTE: If there are multiple instances of this Node (e.g. this or one ancestor has two parents), it will fail
with an assertion (since the transform wouldn't be uniquely defined).

#### globalToParentBounds( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #globalToParentBounds data-toc-label='globalToParentBounds' }

Transforms bounds from the global coordinate frame to our parent coordinate frame. If it includes a
rotation, the resulting bounding box will include every point that could have been in the original bounding box
(and it can be expanded).

NOTE: If there are multiple instances of this Node (e.g. this or one ancestor has two parents), it will fail
with an assertion (since the transform wouldn't be uniquely defined).

#### getGlobalBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getGlobalBounds data-toc-label='getGlobalBounds' }

Returns a bounding box for this Node (and its sub-tree) in the global coordinate frame.

NOTE: If there are multiple instances of this Node (e.g. this or one ancestor has two parents), it will fail
with an assertion (since the transform wouldn't be uniquely defined).

NOTE: This requires computation of this node's subtree bounds, which may incur some performance loss.

#### boundsOf( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #boundsOf data-toc-label='boundsOf' }

Returns the bounds of any other Node in our local coordinate frame.

NOTE: If this node or the passed in Node have multiple instances (e.g. this or one ancestor has two parents), it will fail
with an assertion.

TODO: Possible to be well-defined and have multiple instances of each. https://github.com/phetsims/scenery/issues/1581

#### boundsTo( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #boundsTo data-toc-label='boundsTo' }

Returns the bounds of this Node in another node's local coordinate frame.

NOTE: If this node or the passed in Node have multiple instances (e.g. this or one ancestor has two parents), it will fail
with an assertion.

TODO: Possible to be well-defined and have multiple instances of each. https://github.com/phetsims/scenery/issues/1581

#### mutate( options? : <span style="font-weight: 400;">[NodeOptions](../scenery/Node.md#NodeOptions)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #mutate data-toc-label='mutate' }

Scans the options object for key names that correspond to ES5 setters or other setter functions, and calls those
with the values.

For example:

node.mutate( { top: 0, left: 5 } );

will be equivalent to:

node.left = 5;
node.top = 0;

In particular, note that the order is different. Mutators will be applied in the order of _mutatorKeys, which can
be added to by subtypes.

Additionally, some keys are actually direct function names, like 'scale'. mutate( { scale: 2 } ) will call
node.scale( 2 ) instead of activating an ES5 setter directly.

#### initializePhetioObject( baseOptions : <span style="font-weight: 400;">Partial&lt;[PhetioObjectOptions](../tandem/PhetioObject.md#PhetioObjectOptions)&gt;</span>, config : <span style="font-weight: 400;">[NodeOptions](../scenery/Node.md#NodeOptions)</span> ) {: #initializePhetioObject data-toc-label='initializePhetioObject' }

(protected)

#### setVoicingVisible( visible : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setVoicingVisible data-toc-label='setVoicingVisible' }

Set the visibility of this Node with respect to the Voicing feature. Totally separate from graphical display.
When visible, this Node and all of its ancestors will be able to speak with Voicing. When voicingVisible
is false, all Voicing under this Node will be muted. `voicingVisible` properties exist in Node.ts because
it is useful to set `voicingVisible` on a root that is composed with Voicing.ts. We cannot put all of the
Voicing.ts implementation in Node because that would have a massive memory impact. See Voicing.ts for more
information.

#### isVoicingVisible() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isVoicingVisible data-toc-label='isVoicingVisible' }

Returns whether this Node is voicingVisible. When true Utterances for this Node can be announced with the
Voicing feature, see Voicing.ts for more information.

#### inspect() {: #inspect data-toc-label='inspect' }

Makes this Node's subtree available for inspection.

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

Returns a debugging string that is an attempted serialization of this node's sub-tree.

#### dispose() {: #dispose data-toc-label='dispose' }

Disposes the node, releasing all references that it maintained.

#### disposeSubtree() {: #disposeSubtree data-toc-label='disposeSubtree' }

Disposes this Node and all other descendant nodes.

NOTE: Use with caution, as you should not re-use any Node touched by this. Not compatible with most DAG
      techniques.

### Instance Properties

#### opacityProperty : <span style="font-weight: 400;">[TinyProperty](../axon/TinyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span> {: #opacityProperty data-toc-label='opacityProperty' }

(readonly)

Opacity, in the range from 0 (fully transparent) to 1 (fully opaque).
NOTE: This is fired synchronously when the opacity of the Node is toggled

#### disabledOpacityProperty : <span style="font-weight: 400;">[TinyProperty](../axon/TinyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span> {: #disabledOpacityProperty data-toc-label='disabledOpacityProperty' }

(readonly)

Disabled opacity, in the range from 0 (fully transparent) to 1 (fully opaque).
disabled opacity depends greatly on the value of this.opacity. This acts as a multiplier
Combined with the normal opacity ONLY when the node is disabled. Note, the rendered
to that value. i.e. read disabledOpacity = .5 as "50% of the current opacity", so if
this.opacity is .5, then this renders as 25% opacity, see this.getEffectiveOpacity
NOTE: This is fired synchronously when the opacity of the Node is toggled

#### clipAreaProperty : <span style="font-weight: 400;">[TinyProperty](../axon/TinyProperty.md)&lt;[Shape](../kite/Shape.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span> {: #clipAreaProperty data-toc-label='clipAreaProperty' }

(readonly)

This Node and all children will be clipped by this shape (in addition to any
other clipping shapes). The shape should be in the local coordinate frame.
NOTE: This is fired synchronously when the clipArea of the Node is toggled

#### voicingVisibleProperty : <span style="font-weight: 400;">[TinyProperty](../axon/TinyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #voicingVisibleProperty data-toc-label='voicingVisibleProperty' }

(readonly)

Whether this Node and its subtree can announce content with Voicing and SpeechSynthesis. Though
related to Voicing it exists in Node because it is useful to set voicingVisible on a subtree where the
root does not compose Voicing. This is not ideal but the entirety of Voicing cannot be composed into every
Node because it would produce incorrect behaviors and have a massive memory footprint. See setVoicingVisible()
and Voicing.ts for more information about Voicing.

#### boundsProperty : <span style="font-weight: 400;">[TinyStaticProperty](../axon/TinyStaticProperty.md)&lt;[Bounds2](../dot/Bounds2.md)&gt;</span> {: #boundsProperty data-toc-label='boundsProperty' }

(readonly)

[mutable] Bounds for this Node and its children in the "parent" coordinate frame.
NOTE: The reference here will not change, we will just notify using the equivalent static notification method.
NOTE: This is fired **asynchronously** (usually as part of a Display.updateDisplay()) when the bounds of the Node
is changed.

#### localBoundsProperty : <span style="font-weight: 400;">[TinyStaticProperty](../axon/TinyStaticProperty.md)&lt;[Bounds2](../dot/Bounds2.md)&gt;</span> {: #localBoundsProperty data-toc-label='localBoundsProperty' }

(readonly)

[mutable] Bounds for this Node and its children in the "local" coordinate frame.
NOTE: The reference here will not change, we will just notify using the equivalent static notification method.
NOTE: This is fired **asynchronously** (usually as part of a Display.updateDisplay()) when the localBounds of
the Node is changed.

#### childBoundsProperty : <span style="font-weight: 400;">[TinyStaticProperty](../axon/TinyStaticProperty.md)&lt;[Bounds2](../dot/Bounds2.md)&gt;</span> {: #childBoundsProperty data-toc-label='childBoundsProperty' }

(readonly)

[mutable] Bounds just for children of this Node (and sub-trees), in the "local" coordinate frame.
NOTE: The reference here will not change, we will just notify using the equivalent static notification method.
NOTE: This is fired **asynchronously** (usually as part of a Display.updateDisplay()) when the childBounds of the
Node is changed.

#### selfBoundsProperty : <span style="font-weight: 400;">[TinyStaticProperty](../axon/TinyStaticProperty.md)&lt;[Bounds2](../dot/Bounds2.md)&gt;</span> {: #selfBoundsProperty data-toc-label='selfBoundsProperty' }

(readonly)

[mutable] Bounds just for this Node, in the "local" coordinate frame.
NOTE: The reference here will not change, we will just notify using the equivalent static notification method.
NOTE: This event can be fired synchronously, and happens with the self-bounds of a Node is changed. This is NOT
like the other bounds Properties, which usually fire asynchronously

#### childrenChangedEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)</span> {: #childrenChangedEmitter data-toc-label='childrenChangedEmitter' }

(readonly)

This is fired only once for any single operation that may change the children of a Node.
For example, if a Node's children are [ a, b ] and setChildren( [ a, x, y, z ] ) is called on it, the
childrenChanged event will only be fired once after the entire operation of changing the children is completed.

#### childInsertedEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)&lt;[ node: [Node](../scenery/Node.md), indexOfChild: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ]&gt;</span> {: #childInsertedEmitter data-toc-label='childInsertedEmitter' }

(readonly)

For every single added child Node, emits with {Node} Node, {number} indexOfChild

#### childRemovedEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)&lt;[ node: [Node](../scenery/Node.md), indexOfChild: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ]&gt;</span> {: #childRemovedEmitter data-toc-label='childRemovedEmitter' }

(readonly)

For every single removed child Node, emits with {Node} Node, {number} indexOfChild

#### childrenReorderedEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)&lt;[ minChangedIndex: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, maxChangedIndex: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ]&gt;</span> {: #childrenReorderedEmitter data-toc-label='childrenReorderedEmitter' }

(readonly)

Provides a given range that may be affected by the reordering

#### parentAddedEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)&lt;[ node: [Node](../scenery/Node.md) ]&gt;</span> {: #parentAddedEmitter data-toc-label='parentAddedEmitter' }

(readonly)

Fired whenever a parent is added

#### parentRemovedEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)&lt;[ node: [Node](../scenery/Node.md) ]&gt;</span> {: #parentRemovedEmitter data-toc-label='parentRemovedEmitter' }

(readonly)

Fired whenever a parent is removed

#### transformEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)</span> {: #transformEmitter data-toc-label='transformEmitter' }

(readonly)

Fired synchronously when the transform (transformation matrix) of a Node is changed. Any
change to a Node's translation/rotation/scale/etc. will trigger this event.

#### instanceRefreshEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)</span> {: #instanceRefreshEmitter data-toc-label='instanceRefreshEmitter' }

(readonly)

Should be emitted when we need to check full metadata updates directly on Instances,
to see if we need to change drawable types, etc.

#### rendererSummaryRefreshEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)</span> {: #rendererSummaryRefreshEmitter data-toc-label='rendererSummaryRefreshEmitter' }

(readonly)

Emitted to when we need to potentially recompute our renderer summary (bitmask flags, or
things that could affect descendants)

#### filterChangeEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)</span> {: #filterChangeEmitter data-toc-label='filterChangeEmitter' }

(readonly)

Emitted to when we change filters (either opacity or generalized filters)

#### changedInstanceEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)&lt;[ instance: [Instance](../scenery/Instance.md), added: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> ]&gt;</span> {: #changedInstanceEmitter data-toc-label='changedInstanceEmitter' }

(readonly)

Fired when an instance is changed (added/removed). CAREFUL!! This is potentially a very dangerous thing to listen
to. Instances are updated in an asynchronous batch during `updateDisplay()`, and it is very important that display
updates do not cause changes the scene graph. Thus, this emitter should NEVER trigger a Node's state to change.
Currently, all usages of this cause into updates to the audio view, or updates to a separate display (used as an
overlay). Please proceed with caution. Most likely you prefer to use the synchronous support of DisplayedTrailsProperty,
see https://github.com/phetsims/scenery/issues/1615 and https://github.com/phetsims/scenery/issues/1620 for details.

#### rootedDisplayChangedEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)&lt;[ display: [Display](../scenery/Display.md) ]&gt;</span> {: #rootedDisplayChangedEmitter data-toc-label='rootedDisplayChangedEmitter' }

(readonly)

Fired whenever this node is added as a root to a Display OR when it is removed as a root from a Display (i.e.
the Display is disposed).

#### layoutOptionsChangedEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)</span> {: #layoutOptionsChangedEmitter data-toc-label='layoutOptionsChangedEmitter' }

(readonly)

Fired when layoutOptions changes

### Static Methods

#### defaultTrailPredicate( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #defaultTrailPredicate data-toc-label='defaultTrailPredicate' }

A default for getTrails() searches, returns whether the Node has no parents.

#### defaultLeafTrailPredicate( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #defaultLeafTrailPredicate data-toc-label='defaultLeafTrailPredicate' }

A default for getLeafTrails() searches, returns whether the Node has no parents.

### Static Properties

#### REQUIRES_BOUNDS_OPTION_KEYS {: #REQUIRES_BOUNDS_OPTION_KEYS data-toc-label='REQUIRES_BOUNDS_OPTION_KEYS' }

(readonly)

{Object} - A mapping of all of options that require Bounds to be applied properly. Most often these should be set through `mutate` in the end of the construcor instead of being passed through `super()`

#### NodeIO : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)</span> {: #NodeIO data-toc-label='NodeIO' }

#### DEFAULT_NODE_OPTIONS {: #DEFAULT_NODE_OPTIONS data-toc-label='DEFAULT_NODE_OPTIONS' }

(readonly)

A mapping of all of the default options provided to Node



## Type NodeBoundsBasedTranslationOptions {: #NodeBoundsBasedTranslationOptions }


Isolated so that we can delay options that are based on bounds of the Node to after construction.
See https://github.com/phetsims/scenery/issues/1332

```js
import type { NodeBoundsBasedTranslationOptions } from 'scenerystack/scenery';
```


- **leftTop**?: [Vector2](../dot/Vector2.md)
- **centerTop**?: [Vector2](../dot/Vector2.md)
- **rightTop**?: [Vector2](../dot/Vector2.md)
- **leftCenter**?: [Vector2](../dot/Vector2.md)
- **center**?: [Vector2](../dot/Vector2.md)
- **rightCenter**?: [Vector2](../dot/Vector2.md)
- **leftBottom**?: [Vector2](../dot/Vector2.md)
- **centerBottom**?: [Vector2](../dot/Vector2.md)
- **rightBottom**?: [Vector2](../dot/Vector2.md)
- **left**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **right**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **top**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **bottom**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **centerX**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **centerY**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>




## Type NodeOptions {: #NodeOptions }


All base Node options

```js
import type { NodeOptions } from 'scenerystack/scenery';
```


- **children**?: [Node](../scenery/Node.md)[]
- **cursor**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **phetioVisiblePropertyInstrumented**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **visibleProperty**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **visible**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **pickableProperty**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **pickable**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **phetioEnabledPropertyInstrumented**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **enabledProperty**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **enabled**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **phetioInputEnabledPropertyInstrumented**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **inputEnabledProperty**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **inputEnabled**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **inputListeners**?: [TInputListener](../scenery/TInputListener.md)[]
- **opacity**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **disabledOpacity**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **filters**?: [Filter](../scenery/Filter.md)[]
- **excludeInvisibleChildrenFromBounds**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **interruptSubtreeOnInvisible**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **layoutOptions**?: [TLayoutOptions](../scenery/TLayoutOptions.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **localBounds**?: [Bounds2](../dot/Bounds2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **maxWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **maxHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **renderer**?: [RendererType](../scenery/Node.md#RendererType)
- **layerSplit**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **usesOpacity**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **cssTransform**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **excludeInvisible**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **webglScale**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **preventFit**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **mouseArea**?: [Shape](../kite/Shape.md) | [Bounds2](../dot/Bounds2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **touchArea**?: [Shape](../kite/Shape.md) | [Bounds2](../dot/Bounds2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **clipArea**?: [Shape](../kite/Shape.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **transformBounds**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **visiblePropertyOptions**?: [PropertyOptions](../axon/ReadOnlyProperty.md#PropertyOptions)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;
<br>  This option is used to create the instrumented, default PhET-iO visibleProperty. These options should not
  be provided if a `visibleProperty` was provided to this Node, though if they are, they will just be ignored.
  This grace is to support default options across the component hierarchy melding with usages providing a visibleProperty.
  This option is a bit buried because it can only be used when the Node is being instrumented, which is when
  the default, instrumented visibleProperty is conditionally created. We don't want to store these on the Node,
  and thus they aren't support through `mutate()`.
- **enabledPropertyOptions**?: [PropertyOptions](../axon/ReadOnlyProperty.md#PropertyOptions)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;
- **inputEnabledPropertyOptions**?: [PropertyOptions](../axon/ReadOnlyProperty.md#PropertyOptions)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;
- &amp; [ParallelDOMOptions](../scenery/ParallelDOM.md#ParallelDOMOptions) &amp; [NodeTransformOptions](../scenery/Node.md#NodeTransformOptions)




## Type NodeTransformOptions {: #NodeTransformOptions }


All transform options (includes translation options)

```js
import type { NodeTransformOptions } from 'scenerystack/scenery';
```


- **matrix**?: [Matrix3](../dot/Matrix3.md)
- **rotation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **scale**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | [Vector2](../dot/Vector2.md)
- &amp; [NodeTranslationOptions](../scenery/Node.md#NodeTranslationOptions)




## Type NodeTranslationOptions {: #NodeTranslationOptions }


All translation options (includes those based on bounds and those that are not)

```js
import type { NodeTranslationOptions } from 'scenerystack/scenery';
```


- **translation**?: [Vector2](../dot/Vector2.md)
- **x**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **y**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; [NodeBoundsBasedTranslationOptions](../scenery/Node.md#NodeBoundsBasedTranslationOptions)




## Type RendererType {: #RendererType }


```js
import type { RendererType } from 'scenerystack/scenery';
```


"svg" | "canvas" | "webgl" | "dom" | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>



## Source Code

See the source for [Node.ts](https://github.com/phetsims/scenery/blob/main/js/nodes/Node.ts) in the [scenery](https://github.com/phetsims/scenery) repository.

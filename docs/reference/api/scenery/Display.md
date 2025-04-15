# Display

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/display/Display.ts](https://github.com/phetsims/scenery/blob/main/js/display/Display.ts) for the most up-to-date information.

## Overview

A persistent display of a specific Node and its descendants, which is updated at discrete points in time.

Use display.getDOMElement or display.domElement to retrieve the Display's DOM representation.
Use display.updateDisplay() to trigger the visual update in the Display's DOM element.

A standard way of using a Display with Scenery is to:
1. Create a Node that will be the root
2. Create a Display, referencing that node
3. Make changes to the scene graph
4. Call display.updateDisplay() to draw the scene graph into the Display
5. Go to (3)

Common ways to simplify the change/update loop would be to:
- Use Node-based events. Initialize it with Display.initializeEvents(), then
  add input listeners to parts of the scene graph (see Node.addInputListener).
- Execute code (and update the display afterwards) by using Display.updateOnRequestAnimationFrame.

Internal documentation:

Lifecycle information:
  Instance (create,dispose)
    - out of update:            Stateless stub is created synchronously when a Node's children are added where we
                                have no relevant Instance.
    - start of update:          Creates first (root) instance if it doesn't exist (stateless stub).
    - synctree:                 Create descendant instances under stubs, fills in state, and marks removed subtree
                                roots for disposal.
    - update instance disposal: Disposes root instances that were marked. This also disposes all descendant
                                instances, and for every instance,
                                it disposes the currently-attached drawables.
  Drawable (create,dispose)
    - synctree:                 Creates all drawables where necessary. If it replaces a self/group/shared drawable on
                                the instance,
                                that old drawable is marked for disposal.
    - update instance disposal: Any drawables attached to disposed instances are disposed themselves (see Instance
                                lifecycle).
    - update drawable disposal: Any marked drawables that were replaced or removed from an instance (it didn't
                                maintain a reference) are disposed.

  add/remove drawables from blocks:
    - stitching changes pending "parents", marks for block update
    - backbones marked for disposal (e.g. instance is still there, just changed to not have a backbone) will mark
        drawables for block updates
    - add/remove drawables phase updates drawables that were marked
    - disposed backbone instances will only remove drawables if they weren't marked for removal previously (e.g. in
        case we are from a removed instance)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Display {: #Display }


```js
import { Display } from 'scenerystack/scenery';
```
### Constructor

#### new Display( rootNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">[DisplayOptions](../scenery/Display.md#DisplayOptions)</span> ) {: #Display-constructor data-toc-label='new Display' }

### Instance Methods

#### getDOMElement() : <span style="font-weight: 400;">[HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)</span> {: #getDOMElement data-toc-label='getDOMElement' }

#### updateDisplay() {: #updateDisplay data-toc-label='updateDisplay' }

Updates the display's DOM element with the current visual state of the attached root node and its descendants

#### getPhetioElementAt( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[PhetioObject](../tandem/PhetioObject.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getPhetioElementAt data-toc-label='getPhetioElementAt' }

Used for Studio Autoselect to determine the leafiest PhET-iO Element under the mouse

#### isWebGLAllowed() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isWebGLAllowed data-toc-label='isWebGLAllowed' }

Whether WebGL is allowed to be used in drawables for this Display

#### getRootNode() : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #getRootNode data-toc-label='getRootNode' }

#### getRootBackbone() : <span style="font-weight: 400;">[BackboneDrawable](../scenery/BackboneDrawable.md)</span> {: #getRootBackbone data-toc-label='getRootBackbone' }

#### getSize() : <span style="font-weight: 400;">[Dimension2](../dot/Dimension2.md)</span> {: #getSize data-toc-label='getSize' }

The dimensions of the Display's DOM element

#### getBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getBounds data-toc-label='getBounds' }

#### setSize( size : <span style="font-weight: 400;">[Dimension2](../dot/Dimension2.md)</span> ) {: #setSize data-toc-label='setSize' }

Changes the size that the Display's DOM element will be after the next updateDisplay()

#### setWidthHeight( width : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, height : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setWidthHeight data-toc-label='setWidthHeight' }

Changes the size that the Display's DOM element will be after the next updateDisplay()

#### getWidth() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getWidth data-toc-label='getWidth' }

The width of the Display's DOM element

#### setWidth( width : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setWidth data-toc-label='setWidth' }

Sets the width that the Display's DOM element will be after the next updateDisplay(). Should be an integral value.

#### getHeight() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getHeight data-toc-label='getHeight' }

The height of the Display's DOM element

#### setHeight( height : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setHeight data-toc-label='setHeight' }

Sets the height that the Display's DOM element will be after the next updateDisplay(). Should be an integral value.

#### setBackgroundColor( color : <span style="font-weight: 400;">[Color](../scenery/Color.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setBackgroundColor data-toc-label='setBackgroundColor' }

Will be applied to the root DOM element on updateDisplay(), and no sooner.

#### getBackgroundColor() : <span style="font-weight: 400;">[Color](../scenery/Color.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getBackgroundColor data-toc-label='getBackgroundColor' }

#### setInteractiveHighlightsEnabled( interactiveHighlightsEnabled : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setInteractiveHighlightsEnabled data-toc-label='setInteractiveHighlightsEnabled' }

See interactiveHighlightsEnabled option for Display. Mutates the current value.

#### getInteractiveHighlightsEnabled() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #getInteractiveHighlightsEnabled data-toc-label='getInteractiveHighlightsEnabled' }

#### addOverlay( overlay : <span style="font-weight: 400;">[TOverlay](../scenery/TOverlay.md)</span> ) {: #addOverlay data-toc-label='addOverlay' }

Adds an overlay to the Display. Each overlay should have a .domElement (the DOM element that will be used for
display) and an .update() method.

#### removeOverlay( overlay : <span style="font-weight: 400;">[TOverlay](../scenery/TOverlay.md)</span> ) {: #removeOverlay data-toc-label='removeOverlay' }

Removes an overlay from the display.

#### getPDOMRootElement() : <span style="font-weight: 400;">[HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getPDOMRootElement data-toc-label='getPDOMRootElement' }

Get the root accessible DOM element which represents this display and provides semantics for assistive
technology. If this Display is not accessible, returns null.

#### isAccessible() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isAccessible data-toc-label='isAccessible' }

Has this Display enabled accessibility features like PDOM creation and support.

#### isElementUnderPDOM( element : <span style="font-weight: 400;">[Element](../nitroglycerin/Element.md)</span>, allowRoot : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isElementUnderPDOM data-toc-label='isElementUnderPDOM' }

Returns true if the element is in the PDOM. That is only possible if the display is accessible.
@param element
@param allowRoot - If true, the root of the PDOM is also considered to be "under" the PDOM.

#### getUsedRenderersBitmask() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getUsedRenderersBitmask data-toc-label='getUsedRenderersBitmask' }

Returns the bitmask union of all renderers (canvas/svg/dom/webgl) that are used for display, excluding
BackboneDrawables (which would be DOM).

#### canvasDataURL( callback : <span style="font-weight: 400;">( str: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #canvasDataURL data-toc-label='canvasDataURL' }

#### canvasSnapshot( callback : <span style="font-weight: 400;">( canvas: [HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement), imageData: ImageData ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #canvasSnapshot data-toc-label='canvasSnapshot' }

Renders what it can into a Canvas (so far, Canvas and SVG layers work fine)

#### setPointerDisplayVisible( visibility : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setPointerDisplayVisible data-toc-label='setPointerDisplayVisible' }

TODO: reduce code duplication for handling overlays https://github.com/phetsims/scenery/issues/1581

#### setPointerAreaDisplayVisible( visibility : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setPointerAreaDisplayVisible data-toc-label='setPointerAreaDisplayVisible' }

TODO: reduce code duplication for handling overlays https://github.com/phetsims/scenery/issues/1581

#### setHitAreaDisplayVisible( visibility : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setHitAreaDisplayVisible data-toc-label='setHitAreaDisplayVisible' }

TODO: reduce code duplication for handling overlays https://github.com/phetsims/scenery/issues/1581

#### setCanvasNodeBoundsVisible( visibility : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setCanvasNodeBoundsVisible data-toc-label='setCanvasNodeBoundsVisible' }

TODO: reduce code duplication for handling overlays https://github.com/phetsims/scenery/issues/1581

#### setFittedBlockBoundsVisible( visibility : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setFittedBlockBoundsVisible data-toc-label='setFittedBlockBoundsVisible' }

TODO: reduce code duplication for handling overlays https://github.com/phetsims/scenery/issues/1581

#### resizeOnWindowResize() {: #resizeOnWindowResize data-toc-label='resizeOnWindowResize' }

Sets up the Display to resize to whatever the self inner dimensions will be.

#### updateOnRequestAnimationFrame( stepCallback? : <span style="font-weight: 400;">( dt: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #updateOnRequestAnimationFrame data-toc-label='updateOnRequestAnimationFrame' }

Updates on every request animation frame. If stepCallback is passed in, it is called before updateDisplay() with
stepCallback( timeElapsedInSeconds )

#### cancelUpdateOnRequestAnimationFrame() {: #cancelUpdateOnRequestAnimationFrame data-toc-label='cancelUpdateOnRequestAnimationFrame' }

#### initializeEvents( options? : <span style="font-weight: 400;">[InputOptions](../scenery/Input.md#InputOptions)</span> ) {: #initializeEvents data-toc-label='initializeEvents' }

Initializes event handling, and connects the browser's input event handlers to notify this Display of events.

NOTE: This can be reversed with detachEvents().

#### detachEvents() {: #detachEvents data-toc-label='detachEvents' }

Detach already-attached input event handling (from initializeEvents()).

#### addInputListener( listener : <span style="font-weight: 400;">[TInputListener](../scenery/TInputListener.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #addInputListener data-toc-label='addInputListener' }

Adds an input listener.

#### removeInputListener( listener : <span style="font-weight: 400;">[TInputListener](../scenery/TInputListener.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #removeInputListener data-toc-label='removeInputListener' }

Removes an input listener that was previously added with addInputListener.

#### hasInputListener( listener : <span style="font-weight: 400;">[TInputListener](../scenery/TInputListener.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasInputListener data-toc-label='hasInputListener' }

Returns whether this input listener is currently listening to this Display.

More efficient than checking display.inputListeners, as that includes a defensive copy.

#### getInputListeners() : <span style="font-weight: 400;">[TInputListener](../scenery/TInputListener.md)[]</span> {: #getInputListeners data-toc-label='getInputListeners' }

Returns a copy of all of our input listeners.

#### interruptInput() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #interruptInput data-toc-label='interruptInput' }

Interrupts all input listeners that are attached to this Display.

#### interruptPointers() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #interruptPointers data-toc-label='interruptPointers' }

Interrupts all pointers associated with this Display, see https://github.com/phetsims/scenery/issues/1582.

#### interruptOtherPointers( excludePointer : <span style="font-weight: 400;">[Pointer](../scenery/Pointer.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #interruptOtherPointers data-toc-label='interruptOtherPointers' }

Interrupts all pointers associated with this Display that are NOT currently having events executed.
see https://github.com/phetsims/scenery/issues/1582.

If excludePointer is provided and is non-null, it's used as the "current" pointer that should be excluded from
interruption.

#### loseWebGLContexts() {: #loseWebGLContexts data-toc-label='loseWebGLContexts' }

Triggers a loss of context for all WebGL blocks.

NOTE: Should generally only be used for debugging.

#### getDebugHTML() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getDebugHTML data-toc-label='getDebugHTML' }

Returns an HTML fragment that includes a large amount of debugging information, including a view of the
instance tree and drawable tree.

#### getDebugURI() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getDebugURI data-toc-label='getDebugURI' }

Returns the getDebugHTML() information, but wrapped into a full HTML page included in a data URI.

#### popupDebug() {: #popupDebug data-toc-label='popupDebug' }

Attempts to open a popup with the getDebugHTML() information.

#### iframeDebug() {: #iframeDebug data-toc-label='iframeDebug' }

Attempts to open an iframe popup with the getDebugHTML() information in the same self. This is similar to
popupDebug(), but should work in browsers that block popups, or prevent that type of data URI being opened.

#### getPDOMDebugHTML() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getPDOMDebugHTML data-toc-label='getPDOMDebugHTML' }

#### foreignObjectRasterization( callback : <span style="font-weight: 400;">( url: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #foreignObjectRasterization data-toc-label='foreignObjectRasterization' }

Will attempt to call callback( {string} dataURI ) with the rasterization of the entire Display's DOM structure,
used for internal testing. Will call-back null if there was an error

Only tested on recent Chrome and Firefox, not recommended for general use. Guaranteed not to work for IE &lt;= 10.

See https://github.com/phetsims/scenery/issues/394 for some details.

#### popupRasterization() {: #popupRasterization data-toc-label='popupRasterization' }

#### getTrailFromPDOMIndicesString( indicesString : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;">[Trail](../scenery/Trail.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getTrailFromPDOMIndicesString data-toc-label='getTrailFromPDOMIndicesString' }

Will return null if the string of indices isn't part of the PDOMInstance tree

#### refreshSVG() {: #refreshSVG data-toc-label='refreshSVG' }

Forces SVG elements to have their visual contents refreshed, by changing state in a non-visually-apparent way.
It should trick browsers into re-rendering the SVG elements.

See https://github.com/phetsims/scenery/issues/1507

#### refreshSVGOnNextFrame() {: #refreshSVGOnNextFrame data-toc-label='refreshSVGOnNextFrame' }

Similar to refreshSVG (see docs above), but will do so on the next frame.

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references.

TODO: this dispose function is not complete. https://github.com/phetsims/scenery/issues/1581

### Instance Properties

#### sizeProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;[Dimension2](../dot/Dimension2.md)&gt;</span> {: #sizeProperty data-toc-label='sizeProperty' }

(readonly)

The (integral, &gt; 0) dimensions of the Display's DOM element (only updates the DOM element on updateDisplay())

#### descriptionUtteranceQueue : <span style="font-weight: 400;">[UtteranceQueue](../utterance-queue/UtteranceQueue.md)</span> {: #descriptionUtteranceQueue data-toc-label='descriptionUtteranceQueue' }

data structure for managing aria-live alerts the this Display instance

#### focusManager : <span style="font-weight: 400;">[FocusManager](../scenery/FocusManager.md)</span> {: #focusManager data-toc-label='focusManager' }

Manages the various types of Focus that can go through the Display, as well as Properties
controlling which forms of focus should be displayed in the HighlightOverlay.

### Static Methods

#### elementToSVGDataURL( domElement : <span style="font-weight: 400;">[HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)</span>, width : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, height : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, callback : <span style="font-weight: 400;">( url: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #elementToSVGDataURL data-toc-label='elementToSVGDataURL' }

Takes a given DOM element, and asynchronously renders it to a string that is a data URL representing an SVG
file.

@param domElement
@param width - The width of the output SVG
@param height - The height of the output SVG
@param callback - Called as callback( url: {string} ), where the URL will be the encoded SVG file.

#### addInputListener( listener : <span style="font-weight: 400;">[TInputListener](../scenery/TInputListener.md)</span> ) {: #addInputListener data-toc-label='addInputListener' }

Adds an input listener to be fired for ANY Display

#### removeInputListener( listener : <span style="font-weight: 400;">[TInputListener](../scenery/TInputListener.md)</span> ) {: #removeInputListener data-toc-label='removeInputListener' }

Removes an input listener that was previously added with Display.addInputListener.

#### hasInputListener( listener : <span style="font-weight: 400;">[TInputListener](../scenery/TInputListener.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasInputListener data-toc-label='hasInputListener' }

Returns whether this input listener is currently listening to this Display.

#### interruptInput() {: #interruptInput data-toc-label='interruptInput' }

Interrupts all input listeners that are attached to all Displays.

### Static Properties

#### INTERRUPT_OTHER_POINTERS {: #INTERRUPT_OTHER_POINTERS data-toc-label='INTERRUPT_OTHER_POINTERS' }

(readonly)



## Type DisplayOptions {: #DisplayOptions }


```js
import type { DisplayOptions } from 'scenerystack/scenery';
```


- **width**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Initial (or override) display width
- **height**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Initial (or override) display height
- **allowCSSHacks**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Applies CSS styles to the root DOM element that make it amenable to interactive content
- **allowSafariRedrawWorkaround**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Whether we allow the display to put a rectangle in front of everything that subtly shifts every frame, in order to
  force repaints for https://github.com/phetsims/geometric-optics-basics/issues/31.
- **allowSceneOverflow**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Usually anything displayed outside our dom element is hidden with CSS overflow.
- **allowLayerFitting**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If false, this will disable layer fitting (like putting preventFit: true on Nodes, but for the entire Display).
  Layer fitting has caused some unsightly jittering (https://github.com/phetsims/scenery/issues/1289), so this
  allows it to be turned on in a case-by-case manner.
- **defaultCursor**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
<br>  What cursor is used when no other cursor is specified
- **forceSVGRefresh**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Forces SVG elements to be refreshed every frame, which can force repainting and detect (or potentially in some
  cases work around) SVG rendering browser bugs. See https://github.com/phetsims/scenery/issues/1507
- **backgroundColor**?: [Color](../scenery/Color.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Initial background color
- **preserveDrawingBuffer**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Whether WebGL will preserve the drawing buffer
  WARNING!: This can significantly reduce performance if set to true.
- **allowWebGL**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Whether WebGL is enabled at all for drawables in this Display
  Makes it possible to disable WebGL for ease of testing on non-WebGL platforms, see #289
- **accessibility**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Enables accessibility features
- **interactive**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Controls the enabled state of interactive highlights. When true, highlights will surround Nodes that are
  composed with InteractiveHighlighting. Only relevant if the Display has accessibility enabled.
- **interactiveHighlightsEnabledProperty**?: [TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;
<br>  Whether mouse/touch/keyboard inputs are enabled (if input has been added).
- **baseHeadingLevel**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  For headings created with `node.accessibleHeading`, this will control what heading level is at the base.
- **listenToOnlyElement**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If true, input event listeners will be attached to the Display's DOM element instead of the self.
  Normally, attaching listeners to the self is preferred (it will see mouse moves/ups outside of the browser
  self, allowing correct button tracking), however there may be instances where a global listener is not
  preferred.
- **batchDOMEvents**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Forwarded to Input: If true, most event types will be batched until otherwise triggered.
- **assumeFullWindow**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If true, the input event location (based on the top-left of the browser tab's viewport, with no
  scaling applied) will be used. Usually, this is not a safe assumption, so when false the location of the
  display's DOM element will be used to get the correct event location. There is a slight performance hit to
  doing so, thus this option is provided if the top-left location can be guaranteed.
  NOTE: Rotation of the Display's DOM element (e.g. with a CSS transform) will result in an incorrect event
        mapping, as getBoundingClientRect() can't work with this. getBoxQuads() should fix this when browser
        support is available.
- **aggressiveContextRecreation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Whether Scenery will try to aggressively re-create WebGL Canvas/context instead of waiting for
  a context restored event. Sometimes context losses can occur without a restoration afterwards, but this can
  jump-start the process.
  See https://github.com/phetsims/scenery/issues/347.
- **passiveEvents**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Whether the `passive` flag should be set when adding and removing DOM event listeners.
  See https://github.com/phetsims/scenery/issues/770 for more details.
  If it is true or false, that is the value of the passive flag that will be used. If it is null, the default
  behavior of the browser will be used.
  
  Safari doesn't support touch-action: none, so we NEED to not use passive events (which would not allow
  preventDefault to do anything, so drags actually can scroll the sim).
  Chrome also did the same "passive by default", but because we have `touch-action: none` in place, it doesn't
  affect us, and we can potentially get performance improvements by allowing passive events.
  See https://github.com/phetsims/scenery/issues/770 for more information.
- **allowBackingScaleAntialiasing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Whether, if no WebGL antialiasing is detected, the backing scale can be increased to provide some
  antialiasing benefit. See https://github.com/phetsims/scenery/issues/859.
- **preventMultitouch**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Turns off multitouch at the Display level (so that multiple pointers will not
  be active), see https://github.com/phetsims/scenery/issues/1684.
  This will mainly prevent multiple touch-level pointers, but mouse + touch
  or multiple mice will still be possible.
- **interruptMultitouch**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If true, and a second touch is detected, it will interrupt the first (active)
  touch. See https://github.com/phetsims/scenery/issues/1684.
- **container**?: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
<br>  An HTMLElement used to contain the contents of the Display
- &amp; Pick&lt;[PhetioObjectOptions](../tandem/PhetioObject.md#PhetioObjectOptions), "tandem"&gt;




## Source Code

See the source for [Display.ts](https://github.com/phetsims/scenery/blob/main/js/display/Display.ts) in the [scenery](https://github.com/phetsims/scenery) repository.

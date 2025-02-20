--8<-- "api-reference-snippets.md"

# Accessible Interaction

!!! warning "Under Construction"
    This section and others in Getting Started with SceneryStack are under heavy revisement
    and will be updated in February 2025.

This tutorial will walk through creating the view for a simple interactive web application, with a focus on accessibility.

The end result will look and behave like this:

<iframe id="finished-product" style="height: 270px; width: 100%; border: none;" scrolling="no" src="/demos/accessible-interaction-demo/"></iframe>

It is possible to tab into the controls in the view, and manipulate fully with the keyboard. It has the *interactive highlights*
feature enabled, and provides a significant amount of information to screen reader users (as discussed below).

The [accessible-interaction-demo repository](https://github.com/scenerystack/accessible-interaction-demo) contains all of
the code for this tutorial. **The code samples below can be edited directly** (and will update the demo above each sample),
but the repository can also be cloned and run locally, replacing src/View.ts with the code below.

## Setting up the View

For the main view, we've provided the `BackgroundNode` and `CyclistNode` types. We will start with the scaffolding below:

<iframe id="settingUp" style="height: 270px; width: 100%; border: none;" scrolling="no" src="/demos/accessible-interaction-demo/"></iframe>
<div id="settingUp-info"></div>
<script type="module" src="/js/accessible-interaction/settingUp.js"></script>

We're creating a `View` subtype of [Node] that will contain a background and a cyclist. This [Node] will be placed into
a [Display] with animation and events set up.

## Adding an Acceleration Slider

Next, we'll add a slider to control the acceleration of the cyclist. We'll add an `AccelerationSlider` (a [HSlider] subtype)
to the view, within a [Panel] (which provides a background and padding):

<iframe id="accelerationSlider" style="height: 270px; width: 100%; border: none;" scrolling="no" src="/demos/accessible-interaction-demo/"></iframe>
<div id="accelerationSlider-info"></div>
<script type="module" src="/js/accessible-interaction/accelerationSlider.js"></script>

## Making the Slider Accessible

Scenery creates a [Parallel DOM](../scenery-accessibility.md#the-parallel-dom), which is a parallel representation of the
scene graph that can be used to provide information to screen readers.

As shown above the last code example, while the slider will show up to screen readers (as a `<input type="range">`),
it won't be very useful without additional information.

UI components in SceneryStack support the `accessibleName` and `accessibleHelpText` fields, which can be used to provide
additional information to screen readers. We'll add these to the `AccelerationSlider`:

<iframe id="sliderAccessibleProperties" style="height: 270px; width: 100%; border: none;" scrolling="no" src="/demos/accessible-interaction-demo/"></iframe>
<div id="sliderAccessibleProperties-info"></div>
<script type="module" src="/js/accessible-interaction/sliderAccessibleProperties.js"></script>

Also note that the Parallel DOM will update dynamically based on the scene graph and the data it contains! The value
of the slider will be updated in the Parallel DOM as the slider is moved.

This raw value is not very useful to screen readers, so we'll want to customize this. The [HSlider] mixes in the type
[AccessibleValueHandler] (via [AccessibleSlider]), which provides `pdomCreateAriaValueText`:

<iframe id="sliderAriaValueText" style="height: 270px; width: 100%; border: none;" scrolling="no" src="/demos/accessible-interaction-demo/"></iframe>
<div id="sliderAriaValueText-info"></div>
<script type="module" src="/js/accessible-interaction/sliderAriaValueText.js"></script>

This will be much more usable for the user!

Sometimes slider thumbs can be difficult, especially for touch users.
While the slider should always be large enough by default, we can invisibly increase the area of the slider thumb for
touch users.

Mouse and touch areas can be displayed by calling `display.setPointerAreaDisplayVisible( true )` to help visualize.
UI components in SceneryStack have custom fields to assist in adjusting these areas, and sliders have
`thumbTouchAreaXDilation` and `thumbTouchAreaYDilation`:

<iframe id="sliderTouchArea" style="height: 270px; width: 100%; border: none;" scrolling="no" src="/demos/accessible-interaction-demo/"></iframe>
<div id="sliderTouchArea-info"></div>
<script type="module" src="/js/accessible-interaction/sliderTouchArea.js"></script>

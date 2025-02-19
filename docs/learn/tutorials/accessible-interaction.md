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

<iframe id="demo-1" style="height: 270px; width: 100%; border: none;" scrolling="no" src="/demos/accessible-interaction-demo/"></iframe>
<div id="demo-1-info"></div>
<script type="module" src="/js/accessible-interaction/demo-1.js"></script>

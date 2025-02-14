--8<-- "api-reference-snippets.md"

# Three.js Integration

!!! warning "Under Construction"
    This section and others in Getting Started with SceneryStack are under heavy revisement
    and will be updated in February 2025.

To include a Three.js scene with specific dimensions, [ThreeNode] can be used directly:

<div class="sandbox-example" data-example="/js/threejs-integration/basic-example.js"></div>

It will need to have `render()` called whenever it should be updated. If the position of the scene inside the Scenery
[Display] changes, `layout()` should be called as well, so it is safe to call both.
# ViewSynchronizer

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/ViewSynchronizer.ts](https://github.com/phetsims/scenery-phet/blob/main/js/ViewSynchronizer.ts) for the most up-to-date information.

## Overview

Logic that handles the creation and disposal of model-view pairs.

This is helpful to use in cases where you've got to track model-view pairs, and you want to make sure that
the view is created/removed when the corresponding model element is created/removed.

@author Agustín Vallejo
@author Jonathan Olson

## Class ViewSynchronizer {: #ViewSynchronizer }


```js
import { ViewSynchronizer } from 'scenerystack/scenery-phet';
```
### Constructor

#### new ViewSynchronizer( container : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, factory : <span style="font-weight: 400;">( x: Model ) =&gt; View</span> ) {: #ViewSynchronizer-constructor data-toc-label='new ViewSynchronizer' }

### Instance Methods

#### add( model : <span style="font-weight: 400;">Model</span> ) {: #add data-toc-label='add' }

Adds a model element. An associated view (Node) is created and added to the scene graph.

#### remove( model : <span style="font-weight: 400;">Model</span> ) {: #remove data-toc-label='remove' }

Removes a model element. Its associated view (Node) is removed from the scene graph and disposed.

#### getView( model : <span style="font-weight: 400;">Model</span> ) : <span style="font-weight: 400;">View</span> {: #getView data-toc-label='getView' }

Gets the view (Node) for a specified model element.

#### getViews() : <span style="font-weight: 400;">View[]</span> {: #getViews data-toc-label='getViews' }

Gets the views (Nodes) for all model elements.

#### dispose() {: #dispose data-toc-label='dispose' }

Removes all model elements and their associated views (Nodes).



## Source Code

See the source for [ViewSynchronizer.ts](https://github.com/phetsims/scenery-phet/blob/main/js/ViewSynchronizer.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.

# DownUpListener

## Overview

Basic down/up pointer handling for a Node, so that it's easy to handle buttons

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class DownUpListener {: #DownUpListener }


@deprecated - use PressListener instead

```js
import { DownUpListener } from 'scenerystack/scenery';
```
### Constructor

#### new DownUpListener( options ) {: #DownUpListener-constructor data-toc-label='new DownUpListener' }

### Instance Methods

#### buttonDown( event ) {: #buttonDown data-toc-label='buttonDown' }

@private

@param {SceneryEvent} event

#### buttonUp( event ) {: #buttonUp data-toc-label='buttonUp' }

@private

@param {SceneryEvent} event

#### interrupt() {: #interrupt data-toc-label='interrupt' }

Called when input is interrupted on this listener, see https://github.com/phetsims/scenery/issues/218
@public



## Source Code

See the source for [DownUpListener.js](https://github.com/phetsims/scenery/blob/main/js/input/DownUpListener.js) in the [scenery](https://github.com/phetsims/scenery) repository.

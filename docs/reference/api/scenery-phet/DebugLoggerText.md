# DebugLoggerText

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/DebugLoggerText.js](https://github.com/phetsims/scenery-phet/blob/main/js/DebugLoggerText.js) for the most up-to-date information.

## Overview

DebugLoggerText is a node that can be added as a child to the view and can show debug log messages.
This is most often used when a console is not available, such as when debugging on iPads or other tablets.

Typically, an instance of this is created and made global for use on a given screen.  Example:
  phet.debugLoggerNode = new DebugLoggerText();
  this.addChild( phet.debugLoggerNode );

...and then logging is accomplished by calling the logger like this:
  phet.debugLoggerNode.log( 'my insightful message' );

Tip from MK - start by putting the above line in assert.js

@author John Blanco (PhET Interactive Simulations)

## Class DebugLoggerText {: #DebugLoggerText }


```js
import { DebugLoggerText } from 'scenerystack/scenery-phet';
```
### Constructor

#### new DebugLoggerText( options ) {: #DebugLoggerText-constructor data-toc-label='new DebugLoggerText' }

### Instance Methods

#### log( message ) {: #log data-toc-label='log' }

log a message
@param {string} message
@public



## Source Code

See the source for [DebugLoggerText.js](https://github.com/phetsims/scenery-phet/blob/main/js/DebugLoggerText.js) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.

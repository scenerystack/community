# PatternMessageProperty

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/chipper/blob/main/js/browser/PatternMessageProperty.ts](https://github.com/phetsims/chipper/blob/main/js/browser/PatternMessageProperty.ts) for the most up-to-date information.

## Overview

A Property whose value is a message from a Fluent bundle with arguments. Each argument can be a Property,
and the message will be updated either the message or the argument changes.

A similar idea as PatternStringProperty, but for Fluent messages.

For values that are being used in a message with CLDR plural category, the value needs be a number.
Otherwise, the string will be used and always hit the "other" category.

@author Jesse Greenberg (PhET Interactive Simulations)

## Class PatternMessageProperty {: #PatternMessageProperty }


```js
import { PatternMessageProperty } from 'scenerystack/chipper';
```
### Constructor

#### new PatternMessageProperty( messageProperty : <span style="font-weight: 400;">[LocalizedMessageProperty](../chipper/LocalizedMessageProperty.md)</span>, values : <span style="font-weight: 400;">[IntentionalAny](../phet-core/IntentionalAny.md)</span> ) {: #PatternMessageProperty-constructor data-toc-label='new PatternMessageProperty' }

### Instance Methods





## Source Code

See the source for [PatternMessageProperty.ts](https://github.com/phetsims/chipper/blob/main/js/browser/PatternMessageProperty.ts) in the [chipper](https://github.com/phetsims/chipper) repository.

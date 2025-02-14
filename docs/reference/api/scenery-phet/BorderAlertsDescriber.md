# BorderAlertsDescriber

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/accessibility/describers/BorderAlertsDescriber.js](https://github.com/phetsims/scenery-phet/blob/main/js/accessibility/describers/BorderAlertsDescriber.js) for the most up-to-date information.

## Overview

BorderAlertsDescriber is "sub-describer" used in MovementAlerter to manage its border alerts. Border alerts will
be alerted either once when object movement intersects with the bounds. With the addition of an option, the
border alert will be repeated for as long as the moving object is dragged against that bound, see repeatBorderAlerts.
@author Michael Kauzmann (PhET Interactive Simulations)

## Class BorderAlertsDescriber {: #BorderAlertsDescriber }


Responsible for alerting when the temperature increases
@param {Object} [options]
@constructor

```js
import { BorderAlertsDescriber } from 'scenerystack/scenery-phet';
```
### Constructor

#### new BorderAlertsDescriber( options ) {: #BorderAlertsDescriber-constructor data-toc-label='new BorderAlertsDescriber' }

### Instance Methods

#### setDirectionUtterance( alert, direction, utteranceOptions ) {: #setDirectionUtterance data-toc-label='setDirectionUtterance' }

Wrap the direction property in an Utterance if not already one. Null is supported.
@private
@param {TAlertable} alert
@param {DirectionEnum} direction
@param {Object} [utteranceOptions] - if creating an Utterance, options to pass to it

#### getAlertAtBorder( position, key ) {: #getAlertAtBorder data-toc-label='getAlertAtBorder' }

Based on a position and the border bounds, if the position is touching the bounds, then alert that we are at border.
By passing in an optional key, you can prioritize that direction if you are at the corner.
@private

@param {Vector2} position
@param {string} [key] - prefer this direction key if provided
@returns{TAlertable} - null if there is nothing to alert

#### getAlertOnEndDrag( position, domEvent ) {: #getAlertOnEndDrag data-toc-label='getAlertOnEndDrag' }

@public
@param {Vector2} position
@param {KeyboardEvent} [domEvent] - we don't get this from a mouse drag listener
@returns{TAlertable} - null if there is nothing to alert

#### reset() {: #reset data-toc-label='reset' }

@public

### Static Methods

#### getDefaultTopAlert() {: #getDefaultTopAlert data-toc-label='getDefaultTopAlert' }

Default top alert for the border alerts
@public

@returns {string}



## Source Code

See the source for [BorderAlertsDescriber.js](https://github.com/phetsims/scenery-phet/blob/main/js/accessibility/describers/BorderAlertsDescriber.js) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.

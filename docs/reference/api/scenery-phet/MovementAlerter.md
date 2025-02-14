# MovementAlerter

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/accessibility/describers/MovementAlerter.js](https://github.com/phetsims/scenery-phet/blob/main/js/accessibility/describers/MovementAlerter.js) for the most up-to-date information.

## Overview

A generic alerting type that will alert positional alerts based on a positionProperty and bounds (see
BorderAlertsDescriber) encapsulating the draggable area.

This alerter supports response to description (see options.descriptionAlertNode), and voicing (see options.alertToVoicing).

General usage involves calling this endDrag() function from all dragListeners that you want this functionality to describe

@author Michael Kauzmann (PhET Interactive Simulations)

## Class MovementAlerter {: #MovementAlerter }


```js
import { MovementAlerter } from 'scenerystack/scenery-phet';
```
### Constructor

#### new MovementAlerter( positionProperty, options ) {: #MovementAlerter-constructor data-toc-label='new MovementAlerter' }

### Instance Methods

#### alert( alertable ) {: #alert data-toc-label='alert' }

Override to keep track of positioning between alerts
@public
@override

@param {TAlertable} alertable - anything that can be passed to UtteranceQueue

#### alertDirections( directions ) {: #alertDirections data-toc-label='alertDirections' }

Can be called with multiple directions, or just a single direction
@protected
@param {Array.&lt;DirectionEnum&gt;|DirectionEnum} directions

#### alertDirectionalMovement() {: #alertDirectionalMovement data-toc-label='alertDirectionalMovement' }

Alert a movement direction. The direction from this.lastAlertedPosition relative to the current value of the positionProperty
Call this from a listener or when the positionProperty has changed enough.
Can be overridden. Easy to implement method with the following schema:
(1) get the current value of the position property, and make sure it has changed enough from the lastAlertedPosition
(2) get the directions from the difference,
(3) alert those directions by calling this.alertDirections or this.alert,
see friction/view/describers/BookMovementAlerter.

NOTE: don't call UtteranceQueue from the subtype!!!
NOTE: PhET a11y convention suggests that this should be called on drag end.

@public

#### getDirections( newPoint, oldPoint ) {: #getDirections data-toc-label='getDirections' }

Get the direction of movement that would take you from point A to point B, returning one of DirectionEnum.
These directions are described as they appear visually, with positive y going up.

Uses Math.atan2, so the angle is mapped from 0 to +/- Math.PI.

@param  {Vector2} newPoint - in the model coordinate frame
@param  {Vector2} oldPoint - in the model coordinate frame
@returns {Array.&lt;DirectionEnum&gt;} - contains one or two of the values in DirectionEnum, depending on whether or no you get
                           diagonal directions or their composite. See options.alertDiagonal for more info
@protected

#### endDrag( domEvent ) {: #endDrag data-toc-label='endDrag' }

@public
@param {window.Event} [domEvent]

#### reset() {: #reset data-toc-label='reset' }

@public

### Static Methods

#### getDirectionEnumerable( newPoint, oldPoint, modelViewTransform ) {: #getDirectionEnumerable data-toc-label='getDirectionEnumerable' }

Get one of DirectionEnum from a newPoint and an oldPoint that would describe the direction of movement
from the old point to the new point. These directions are described as they would appear visually, with
+y going up.
@private

@param {Vector2} newPoint - in model coordinate frame
@param {Vector2} oldPoint - in model coordinate frame
@param {ModelViewTransform2} modelViewTransform
@returns {DirectionEnum}

#### getDirectionEnumerableFromAngle( angle ) {: #getDirectionEnumerableFromAngle data-toc-label='getDirectionEnumerableFromAngle' }

Returns one of DirectionEnum from a provided angle.
@public

@param angle
@param modelViewTransform
@returns {DirectionEnum}

#### getDirectionDescriptionFromAngle( angle, options ) {: #getDirectionDescriptionFromAngle data-toc-label='getDirectionDescriptionFromAngle' }

Get a description of direction from the provided angle. This will describe the motion as it appears
on screen. The angle should go from 0 to 2PI. Angles in the top two quadrants are described as going 'up'.
Angles in bottom two quadrants are described as going 'down'. Angles in the right two quadrants are described
as going "right", and angles in the left two quadrants are described as going to the left.

For now, this will always include diagonal alerts. In the future we can exclude the primary intercardinal
directions.
@public

@param {number} angle - an angle of directional movement in the model coordinate frame
@param {Object} [options]
@returns {string}

#### getDefaultMovementDescriptions() {: #getDefaultMovementDescriptions data-toc-label='getDefaultMovementDescriptions' }

Get the default movement descriptions
@returns {Object.&lt;DirectionEnum, string&gt;}} - not an actual DirectionEnum, but the toString() of it (as a key).
@public



## Source Code

See the source for [MovementAlerter.js](https://github.com/phetsims/scenery-phet/blob/main/js/accessibility/describers/MovementAlerter.js) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.

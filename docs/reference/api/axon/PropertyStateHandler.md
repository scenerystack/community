# PropertyStateHandler

## Overview

Responsible for handling Property-specific logic associated with setting PhET-iO state. This file will defer Properties
from taking their final value, and notifying on that value until after state has been set on every Property. It is
also responsible for keeping track of order dependencies between different Properties, and making sure that undeferral
and notifications go out in the appropriate orders. See https://github.com/phetsims/axon/issues/276 for implementation details.

@author Michael Kauzmann (PhET Interactive Simulations)

## Class PropertyStateHandler {: #PropertyStateHandler }


```js
import { PropertyStateHandler } from 'scenerystack/axon';
```
### Constructor

#### new PropertyStateHandler() {: #constructor data-toc-label='constructor' }

### Instance Methods

#### initialize( phetioStateEngine : <span style="font-weight: 400;">TPhetioStateEngine</span> ) {: #initialize data-toc-label='initialize' }

#### registerPhetioOrderDependency( beforeProperty : <span style="font-weight: 400;">[ReadOnlyProperty](../axon/ReadOnlyProperty.md)&lt;IntentionalAny&gt;</span>, beforePhase : <span style="font-weight: 400;">[PropertyStatePhase](../axon/PropertyStatePhase.md)</span>, afterProperty : <span style="font-weight: 400;">[ReadOnlyProperty](../axon/ReadOnlyProperty.md)&lt;IntentionalAny&gt;</span>, afterPhase : <span style="font-weight: 400;">[PropertyStatePhase](../axon/PropertyStatePhase.md)</span> ) {: #registerPhetioOrderDependency data-toc-label='registerPhetioOrderDependency' }

Register that one Property must have a "Phase" applied for PhET-iO state before another Property's Phase. A Phase
is an ending state in PhET-iO state set where Property values solidify, notifications for value changes are called.
The PhET-iO state engine will always undefer a Property before it notifies its listeners. This is for registering
two different Properties.

@param beforeProperty - the Property that needs to be set before the second; must be instrumented for PhET-iO
@param beforePhase
@param afterProperty - must be instrumented for PhET-iO
@param afterPhase

#### unregisterOrderDependenciesForProperty( property : <span style="font-weight: 400;">[ReadOnlyProperty](../axon/ReadOnlyProperty.md)&lt;IntentionalAny&gt;</span> ) {: #unregisterOrderDependenciesForProperty data-toc-label='unregisterOrderDependenciesForProperty' }

Unregisters all order dependencies for the given Property
{ReadOnlyProperty} property - must be instrumented for PhET-iO

#### getNumberOfOrderDependencies() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getNumberOfOrderDependencies data-toc-label='getNumberOfOrderDependencies' }

Only for Testing!
Get the number of order dependencies registered in this class




## Source Code

See the source for [PropertyStateHandler.ts](https://github.com/phetsims/axon/blob/main/js/PropertyStateHandler.ts) in the [axon](https://github.com/phetsims/axon) repository.

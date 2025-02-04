# Tandem

## Overview

Tandem defines a set of trees that are used to assign unique identifiers to PhetioObjects in PhET simulations and
notify listeners when the associated PhetioObjects have been added/removed. It is used to support PhET-iO.

@author Sam Reid (PhET Interactive Simulations)
@author Michael Kauzmann (PhET Interactive Simulations)

## Class Tandem {: #Tandem }


```js
import { Tandem } from 'scenerystack/tandem';
```
### Constructor

#### new Tandem( parentTandem : <span style="font-weight: 400;">[Tandem](../tandem/Tandem.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, name : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, providedOptions? : <span style="font-weight: 400;">[TandemOptions](../tandem/Tandem.md#TandemOptions)</span> ) {: #Tandem-constructor data-toc-label='new Tandem' }

### Instance Methods

#### addPhetioObject( phetioObject : <span style="font-weight: 400;">[PhetioObject](../tandem/PhetioObject.md)</span> ) {: #addPhetioObject data-toc-label='addPhetioObject' }

Adds a PhetioObject.  For example, it could be an axon Property, SCENERY/Node or SUN/RoundPushButton.
phetioEngine listens for when PhetioObjects are added and removed to keep track of them for PhET-iO.

#### hasAncestor( ancestor : <span style="font-weight: 400;">[Tandem](../tandem/Tandem.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasAncestor data-toc-label='hasAncestor' }

Returns true if this Tandem has the specified ancestor Tandem.

#### removePhetioObject( phetioObject : <span style="font-weight: 400;">[PhetioObject](../tandem/PhetioObject.md)</span> ) {: #removePhetioObject data-toc-label='removePhetioObject' }

Removes a PhetioObject and signifies to listeners that it has been removed.

#### getExtendedOptions( options? : <span style="font-weight: 400;">[TandemOptions](../tandem/Tandem.md#TandemOptions)</span> ) : <span style="font-weight: 400;">[TandemOptions](../tandem/Tandem.md#TandemOptions)</span> {: #getExtendedOptions data-toc-label='getExtendedOptions' }

Used for creating new tandems, extends this Tandem's options with the passed-in options.

#### createTandem( name : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, options? : <span style="font-weight: 400;">[TandemOptions](../tandem/Tandem.md#TandemOptions)</span> ) : <span style="font-weight: 400;">[Tandem](../tandem/Tandem.md)</span> {: #createTandem data-toc-label='createTandem' }

Create a new Tandem by appending the given id, or if the child Tandem already exists, return it instead.

#### createTandem1Indexed( name : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, index : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, options? : <span style="font-weight: 400;">[TandemOptions](../tandem/Tandem.md#TandemOptions)</span> ) : <span style="font-weight: 400;">[Tandem](../tandem/Tandem.md)</span> {: #createTandem1Indexed data-toc-label='createTandem1Indexed' }

Create a new Tandem by indexing with the specified index.  Note that it increments by 1 so that index 0 is
"1" in the tandem name.
For example:
- createTandem( 'foo', 0 ) =&gt; 'foo1'

#### hasChild( name : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasChild data-toc-label='hasChild' }

#### addChild( name : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, tandem : <span style="font-weight: 400;">[Tandem](../tandem/Tandem.md)</span> ) {: #addChild data-toc-label='addChild' }

#### iterateDescendants( callback : <span style="font-weight: 400;">( t: [Tandem](../tandem/Tandem.md) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #iterateDescendants data-toc-label='iterateDescendants' }

Fire a callback on all descendants of this Tandem

#### getArchetypalPhetioID() : <span style="font-weight: 400;">[PhetioID](../tandem/phet-io-types.md#PhetioID)</span> {: #getArchetypalPhetioID data-toc-label='getArchetypalPhetioID' }

For API validation, each PhetioObject has a corresponding archetype PhetioObject for comparison. Non-dynamic
PhetioObjects have the trivial case where its archetypal phetioID is the same as its phetioID.

#### createGroupTandem( name : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;">GroupTandem</span> {: #createGroupTandem data-toc-label='createGroupTandem' }

Creates a group tandem for creating multiple indexed child tandems, such as:
sim.screen.model.electron0
sim.screen.model.electron1

In this case, 'sim.screen.model.electron' is the string passed to createGroupTandem.

Used for arrays, observable arrays, or when many elements of the same type are created and they do not otherwise
have unique identifiers.

#### equals( tandem : <span style="font-weight: 400;">[Tandem](../tandem/Tandem.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equals data-toc-label='equals' }

#### createTandemFromPhetioID( phetioID : <span style="font-weight: 400;">[PhetioID](../tandem/phet-io-types.md#PhetioID)</span> ) : <span style="font-weight: 400;">[Tandem](../tandem/Tandem.md)</span> {: #createTandemFromPhetioID data-toc-label='createTandemFromPhetioID' }

### Instance Properties

#### parentTandem : <span style="font-weight: 400;">[Tandem](../tandem/Tandem.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #parentTandem data-toc-label='parentTandem' }

Treat as readonly.  Only marked as writable so it can be eliminated on dispose

#### name : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #name data-toc-label='name' }

(readonly)

the last part of the tandem (after the last .), used e.g., in Joist for creating button
names dynamically based on screen names

#### phetioID : <span style="font-weight: 400;">[PhetioID](../tandem/phet-io-types.md#PhetioID)</span> {: #phetioID data-toc-label='phetioID' }

(readonly)

#### children : <span style="font-weight: 400;">Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>, [Tandem](../tandem/Tandem.md)&gt;</span> {: #children data-toc-label='children' }

(readonly)

phet-io internal, please don't use this. Please.

#### required : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #required data-toc-label='required' }

(readonly)

#### supplied : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #supplied data-toc-label='supplied' }

(readonly)

### Static Methods

#### getRegexFromCharacterClass( tandemCharacterClass : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;">RegExp</span> {: #getRegexFromCharacterClass data-toc-label='getRegexFromCharacterClass' }

(protected)

Get the regex to test for a valid tandem name, given the char class for your specific tandem. In the regex
language. In this function we will wrap it in `[]+` brackets forming the actual "class".

#### onMissingTandem( tandem : <span style="font-weight: 400;">[Tandem](../tandem/Tandem.md)</span> ) {: #onMissingTandem data-toc-label='onMissingTandem' }

If the provided tandem is not supplied, support the ?printMissingTandems query parameter for extra logging during
initial instrumentation.

#### addPhetioObjectListener( phetioObjectListener : <span style="font-weight: 400;">PhetioObjectListener</span> ) {: #addPhetioObjectListener data-toc-label='addPhetioObjectListener' }

Adds a listener that will be notified when items are registered/deregistered

#### launch() {: #launch data-toc-label='launch' }

After all listeners have been added, then Tandem can be launched.  This registers all of the buffered PhetioObjects
and subsequent PhetioObjects will be registered directly.

#### unlaunch() {: #unlaunch data-toc-label='unlaunch' }

ONLY FOR TESTING!!!!
This was created to "undo" launch so that tests can better expose cases around calling Tandem.launch()

#### addLaunchListener( listener : <span style="font-weight: 400;">() =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #addLaunchListener data-toc-label='addLaunchListener' }

Add a listener that will fire when Tandem is launched

#### getStringsTandem( moduleName : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;">[Tandem](../tandem/Tandem.md)</span> {: #getStringsTandem data-toc-label='getStringsTandem' }

Get the Tandem location for model strings. Provide the camelCased repo name for where the string should be
organized. This will default to the sim's name. See https://github.com/phetsims/tandem/issues/298

#### getDerivedStringsTandem( moduleName : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;">[Tandem](../tandem/Tandem.md)</span> {: #getDerivedStringsTandem data-toc-label='getDerivedStringsTandem' }

Get the Tandem location for derived model strings. Provide the camelCased repo name for where the string should be
organized. This will default to the sim's name. See https://github.com/phetsims/tandem/issues/298

### Static Properties

#### SCREEN_TANDEM_NAME_SUFFIX {: #SCREEN_TANDEM_NAME_SUFFIX data-toc-label='SCREEN_TANDEM_NAME_SUFFIX' }

(readonly)

#### missingTandems {: #missingTandems data-toc-label='missingTandems' }

(readonly)

Expose collected missing tandems only populated from specific query parameter, see phetioPrintMissingTandems
(phet-io internal)

#### PHET_IO_ENABLED {: #PHET_IO_ENABLED data-toc-label='PHET_IO_ENABLED' }

(readonly)

If PhET-iO is enabled in this runtime.

#### VALIDATION {: #VALIDATION data-toc-label='VALIDATION' }

(readonly)

If PhET-iO is running with validation enabled.

#### apiValidationEnabled {: #apiValidationEnabled data-toc-label='apiValidationEnabled' }

If phetioAPIValidation is enabled, this is mostly just readonly, except some internal logic for phet-io startup and qunit testing

#### METADATA_KEY {: #METADATA_KEY data-toc-label='METADATA_KEY' }

(readonly)

For the API file, the key name for the metadata section.

#### DATA_KEY {: #DATA_KEY data-toc-label='DATA_KEY' }

(readonly)

For the API file, the key name for the data section.

#### launched {: #launched data-toc-label='launched' }

Before listeners are wired up, tandems are buffered.  When listeners are wired up, Tandem.launch() is called and
buffered tandems are flushed, then subsequent tandems are delivered to listeners directly

#### bufferedPhetioObjects : <span style="font-weight: 400;">[PhetioObject](../tandem/PhetioObject.md)[]</span> {: #bufferedPhetioObjects data-toc-label='bufferedPhetioObjects' }

(readonly)

a list of PhetioObjects ready to be sent out to listeners, but can't because Tandem hasn't been launched yet.

#### ROOT : <span style="font-weight: 400;">[Tandem](../tandem/Tandem.md)</span> {: #ROOT data-toc-label='ROOT' }

(readonly)

The root tandem for a simulation

#### ROOT_TEST {: #ROOT_TEST data-toc-label='ROOT_TEST' }

(readonly)

Used in unit tests

#### GENERAL_MODEL {: #GENERAL_MODEL data-toc-label='GENERAL_MODEL' }

(readonly)

Tandem for model simulation elements that are general to all sims.

#### GENERAL_VIEW {: #GENERAL_VIEW data-toc-label='GENERAL_VIEW' }

(readonly)

Tandem for view simulation elements that are general to all sims.

#### GENERAL_CONTROLLER {: #GENERAL_CONTROLLER data-toc-label='GENERAL_CONTROLLER' }

(readonly)

Tandem for controller simulation elements that are general to all sims.

#### GLOBAL_MODEL {: #GLOBAL_MODEL data-toc-label='GLOBAL_MODEL' }

(readonly)

Model simulation elements that don't belong in specific screens should be nested under this Tandem. Note that this
tandem should only have simulation specific elements in them.

#### GLOBAL_VIEW {: #GLOBAL_VIEW data-toc-label='GLOBAL_VIEW' }

(readonly)

View simulation elements that don't belong in specific screens should be nested under this Tandem. Note that this
tandem should only have simulation specific elements in them.

#### COLORS {: #COLORS data-toc-label='COLORS' }

(readonly)

Colors used in the simulation.

#### STRINGS {: #STRINGS data-toc-label='STRINGS' }

(readonly)

Colors used in the simulation.

#### OPTIONAL {: #OPTIONAL data-toc-label='OPTIONAL' }

(readonly)

In TypeScript, optionize already knows that `tandem` may be undefined, just use `options.tandem?` See https://github.com/phetsims/tandem/issues/289
Used to indicate a common code component that supports tandem, but doesn't require it.  If a tandem is not
passed in, then it will not be instrumented.

#### OPT_OUT {: #OPT_OUT data-toc-label='OPT_OUT' }

(readonly)

To be used exclusively to opt out of situations where a tandem is required, see https://github.com/phetsims/tandem/issues/97.

#### REQUIRED {: #REQUIRED data-toc-label='REQUIRED' }

(readonly)

Some common code (such as Checkbox or RadioButton) must always be instrumented.

#### PREFERENCES {: #PREFERENCES data-toc-label='PREFERENCES' }

(readonly)

Use this as the parent tandem for Properties that are related to sim-specific preferences.



## Type TandemOptions {: #TandemOptions }


```js
import type { TandemOptions } from 'scenerystack/tandem';
```


- **required**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **supplied**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **isValidTandemName**?: ( name: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>




## Source Code

See the source for [Tandem.ts](https://github.com/phetsims/tandem/blob/main/js/Tandem.ts) in the [tandem](https://github.com/phetsims/tandem) repository.

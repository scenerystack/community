# PhetioIDUtils

## Overview

Utilities for creating and manipulating the unique identifiers assigned to instrumented PhET-iO instances, aka
phetioIDs.

Many of these functions' jsdoc is rendered and visible publicly to PhET-iO client. Those sections should be
marked, see top level comment in PhetioClient.js about private vs public documentation

@author Chris Malley (PixelZoom, Inc.)
@author Sam Reid (PhET Interactive Simulations)
@author Michael Kauzmann (PhET Interactive Simulations)

## Class PhetioIDUtils {: #PhetioIDUtils }


Helpful static methods for manipulating phetioIDs. Used to minimize the amount of duplicated logic specific to the
string structure of the phetioID. Available in the main PhET-iO js import as a global, or statically on PhetioClient.
@hideconstructor
@class

```js
import { PhetioIDUtils } from 'scenerystack/tandem';
```
### Static Methods

#### append( phetioID : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, ...componentNames : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>[]</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #append data-toc-label='append' }

Appends a component to an existing phetioID to create a new unique phetioID for the component.
@example
append( 'myScreen.myControlPanel', 'myComboBox' )
--&gt;  'myScreen.myControlPanel.myComboBox'
@public
@param {string} phetioID - the ID of the PhET-iO Element
@param {string|string[]} componentNames - the name or list of names to append to the ID
@returns {string} - the appended phetioID

#### getComponentName( phetioID : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getComponentName data-toc-label='getComponentName' }

Given a phetioID for a PhET-iO Element, get the part of that ID that pertains to the component (basically the
tail piece).
@example
getComponentName( 'myScreen.myControlPanel.myComboBox' )
--&gt;  'myComboBox'
@public
@param {string} phetioID - the ID of the PhET-iO Element
@returns {string} - the component name

#### getParentID( phetioID : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getParentID data-toc-label='getParentID' }

Given a phetioID for a PhET-iO Element, get the phetioID of the parent component.
@example
getParentID( 'myScreen.myControlPanel.myComboBox' )
--&gt;  'myScreen.myControlPanel'
@public
@param {string} phetioID - the ID of the PhET-iO Element
@returns {string|null} - the phetioID of the parent, or null if there is no parent

#### getDOMElementID( phetioID : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getDOMElementID data-toc-label='getDOMElementID' }

Given a phetioID for an instrumented object, get a string that can be used to assign an ID to a DOM element
@param {string} phetioID - the ID of the PhET-iO Element
@returns {string}
@public
@deprecated

#### getScreenID( phetioID : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getScreenID data-toc-label='getScreenID' }

Get the screen id from the phetioID.
@example
getScreenID( 'sim.myScreen.model.property' )
--&gt; sim.myScreen
getScreenID( 'sim.myScreen' )
--&gt; sim.myScreen
getScreenID( 'sim.general.activeProperty' )
--&gt; null
@param {string} phetioID
@public
@returns {string|null} - null if there is no screen component name in the phetioID

#### getGroupElementIndex( componentName : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getGroupElementIndex data-toc-label='getGroupElementIndex' }

Get the index number from the component name of the component name provided.
@param {string} componentName
@returns {number}
@example
getGroupElementIndex( 'particle_1' )
--&gt; 1
@public

#### isAncestor( potentialAncestorPhetioID : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, potentialDescendantPhetioID : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isAncestor data-toc-label='isAncestor' }

Returns true if the potential ancestor is indeed an ancestor of the potential descendant, but not the same phetioID
@param {string} potentialAncestorPhetioID
@param {string} potentialDescendantPhetioID
@returns {boolean}
@public

#### getArchetypalPhetioID( phetioID : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getArchetypalPhetioID data-toc-label='getArchetypalPhetioID' }

Converts a given phetioID to one where all dynamic element terms (i.e. ones with an underscore, like battery_4)
are replaced with the term 'archetype'. This helps when looking up the archetype phetioID or metadata for a given
dynamic element. Also support INTER_TERM_SEPARATOR delimited parts, like 'sim.screen1.myObject.term1-and-term2-battery_4-term4-etc'.

See unit tests and examples in PhetioIDUtilsTests.ts.
@param {string} phetioID
@public
@returns {string}

### Static Properties

#### SEPARATOR {: #SEPARATOR data-toc-label='SEPARATOR' }

(readonly)

The separator used to piece together a phet-io ID.
@type {string}
@constant
@public

#### GROUP_SEPARATOR {: #GROUP_SEPARATOR data-toc-label='GROUP_SEPARATOR' }

(readonly)

The separator used to specify the count of a element in a group.
@type {string}
@constant
@public

#### INTER_TERM_SEPARATOR {: #INTER_TERM_SEPARATOR data-toc-label='INTER_TERM_SEPARATOR' }

(readonly)

The separator used to specify terms in a phetioID that is used by another phetioID. For example:

sim.general.view.sim-global-otherID

@type {string}
@constant
@public

#### GENERAL_COMPONENT_NAME {: #GENERAL_COMPONENT_NAME data-toc-label='GENERAL_COMPONENT_NAME' }

(readonly)

The component name for the id section that holds phet-io elements general to all simulations.
@type {string}
@constant
@public

#### GLOBAL_COMPONENT_NAME {: #GLOBAL_COMPONENT_NAME data-toc-label='GLOBAL_COMPONENT_NAME' }

(readonly)

The component name for the id section that holds simulation specific elements that don't belong in a screen.
@type {string}
@constant
@public

#### HOME_SCREEN_COMPONENT_NAME {: #HOME_SCREEN_COMPONENT_NAME data-toc-label='HOME_SCREEN_COMPONENT_NAME' }

(readonly)

The component name for the id section that holds the home screen.
@type {string}
@constant
@public

#### MODEL_COMPONENT_NAME {: #MODEL_COMPONENT_NAME data-toc-label='MODEL_COMPONENT_NAME' }

(readonly)

The component name for an id section that holds model specific elements.
@type {string}
@constant
@public

#### VIEW_COMPONENT_NAME {: #VIEW_COMPONENT_NAME data-toc-label='VIEW_COMPONENT_NAME' }

(readonly)

The component name for an id section that holds view specific elements.
@type {string}
@constant
@public

#### CONTROLLER_COMPONENT_NAME {: #CONTROLLER_COMPONENT_NAME data-toc-label='CONTROLLER_COMPONENT_NAME' }

(readonly)

The component name for an id section that holds controller specific elements.
@type {string}
@constant
@public

#### COLORS_COMPONENT_NAME {: #COLORS_COMPONENT_NAME data-toc-label='COLORS_COMPONENT_NAME' }

(readonly)

The component name for a section that holds colors
@type {string}
@constant
@public

#### STRINGS_COMPONENT_NAME {: #STRINGS_COMPONENT_NAME data-toc-label='STRINGS_COMPONENT_NAME' }

(readonly)

The component name for a section that holds strings
@type {string}
@constant
@public

#### ARCHETYPE {: #ARCHETYPE data-toc-label='ARCHETYPE' }

(readonly)

The component name for a dynamic element archetype
@type {string}
@constant
@public

#### CAPSULE_SUFFIX {: #CAPSULE_SUFFIX data-toc-label='CAPSULE_SUFFIX' }

(readonly)

The component name suffix for the container (parent) of a dynamic element that doesn't have an '_' in it.
@type {string}
@constant
@public



## Source Code

See the source for [PhetioIDUtils.ts](https://github.com/phetsims/tandem/blob/main/js/PhetioIDUtils.ts) in the [tandem](https://github.com/phetsims/tandem) repository.

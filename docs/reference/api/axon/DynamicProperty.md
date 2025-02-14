# DynamicProperty

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/axon/blob/main/js/DynamicProperty.ts](https://github.com/phetsims/axon/blob/main/js/DynamicProperty.ts) for the most up-to-date information.

## Overview

Creates a Property that does synchronization of values with a swappable Property that itself can change.
Handles the case where you need a Property that can switch between acting like multiple other Properties.

With no other options specified, the value of this Property is:
- null, if valuePropertyProperty.value === null
- valuePropertyProperty.value.value otherwise

The value of this Property (generalized, with the options available) is:
- derive( defaultValue ), if valuePropertyProperty.value === null
- map( derive( valuePropertyProperty.value ).value ) otherwise

Generally, this DynamicProperty uses one-way synchronization (it only listens to the source), but if the
'bidirectional' option is true, it will use two-way synchronization (changes to this Property will change the active
source). Thus when this Property changes value (when bidirectional is true), it will set:
- derive( valuePropertyProperty.value ).value = inverseMap( this.value ), if valuePropertyProperty.value !== null

******************************
General example
******************************
  const firstProperty = new Property( Color.RED );
  const secondProperty = new Property( Color.BLUE );
  const currentProperty = new Property( firstProperty ); // {Property.&lt;Property.&lt;Color&gt;&gt;}

  const backgroundFill = new DynamicProperty( currentProperty ) // Turns into a {Property.&lt;Color&gt;}
  backgroundFill.value; // Color.RED, since: currentProperty.value === firstProperty and
                                             firstProperty.value === Color.RED
  firstProperty.value = Color.YELLOW;
  backgroundFill.value; // Color.YELLOW - It's connected to firstProperty right now

  currentProperty.value = secondProperty;
  backgroundFill.value; // Color.BLUE - It's the secondProperty's value

  secondProperty.value = Color.MAGENTA;
  backgroundFill.value; // Color.MAGENTA - Yes, it's listening to the other Property now.

Also supports falling back to null if our main Property is set to null:
  currentProperty.value = null;
  backgroundFill.value; // null

******************************
'derive' option
******************************
Additionally, DynamicProperty supports the ability to derive the Property value from our main Property's value.
For example, say you have multiple scenes each with the type:
  scene: {
    backgroundColorProperty: {Property.&lt;Color&gt;}
  }
and you have a currentSceneProperty: {Property.&lt;Scene&gt;}, you may want to create:
  const currentBackgroundColorProperty = new DynamicProperty( currentSceneProperty, {
    derive: 'backgroundColorProperty'
  } );
This would always report the current scene's current background color.
What if you sometimes don't have a scene active, e.g. {Property.&lt;Scene|null&gt;}? You can provide a default value:
 new DynamicProperty( currentSceneProperty, {
   derive: 'backgroundColorProperty',
   defaultValue: Color.BLACK
 } );
So that if the currentSceneProperty's value is null, the value of our DynamicProperty will be Color.BLACK.
NOTE there are constraints using derive: 'string' when using parametric type parameters. See https://github.com/phetsims/projectile-data-lab/issues/10

******************************
'bidirectional' option
******************************
If you would like for direct changes to this Property to change the original source (bidirectional synchronization),
then pass bidirectional:true:
  const firstProperty = new Property( 5 );
  const secondProperty = new Property( 10 );
  const numberPropertyProperty = new Property( firstProperty );
  const dynamicProperty = new DynamicProperty( numberPropertyProperty, { bidirectional: true } );
  dynamicProperty.value = 2; // allowed now that it is bidirectional, otherwise prohibited
  firstProperty.value; // 2
  numberPropertyProperty.value = secondProperty; // change which Property is active
  dynamicProperty.value; // 10, from the new Property
  dynamicProperty.value = 0;
  secondProperty.value; // 0, set above.
  firstProperty.value; // still 2 from above, since our dynamic Property switched to the other Property

******************************
'map' and 'inverseMap' options
******************************
DynamicProperty also supports mapping values to different types. For example, say we have a
numberPropertyProperty {Property.&lt;Property.&lt;number&gt;&gt;}, but want to have a {Property.&lt;string&gt;} as the output. Then:
  new DynamicProperty( numberPropertyProperty, {
    map: function( number ) { return '' + number; }
  } );
will do the trick. If this needs to be done with a bidirectional DynamicProperty, also include inverseMap:
  new DynamicProperty( numberPropertyProperty, {
    bidirectional: true,
    map: function( number ) { return '' + number; },
    inverseMap: function( string ) { return Number.parseFloat( string ); }
  } );
so that changes to the dynamic Property will result in a change in the numberPropertyProperty's value.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class DynamicProperty {: #DynamicProperty }


ThisValueType: The value type of the resulting DynamicProperty
InnerValueType: The value type of the inner (derived) Property, whose value gets mapped to ThisValueType and back
OuterValueType: The value type of the main passed-in Property (whose value may be derived to the InnerValueType)
e.g.:
class Foo { colorProperty: Property&lt;Color&gt; }
new DynamicProperty&lt;number, Color, Foo&gt;( someFooProperty, {
  derive: 'colorProperty',
  map: ( color: Color ) =&gt; color.alpha
} );
Here, ThisValueType=number (we're a Property&lt;number&gt;). You've passed in a Property&lt;Foo&gt;, so OuterValueType is a Foo.
InnerValueType is what we get from our derive (Color), and what the parameter of our map is.

```js
import { DynamicProperty } from 'scenerystack/axon';
```
### Constructor

#### new DynamicProperty( valuePropertyProperty : <span style="font-weight: 400;">[TNullableProperty](../axon/DynamicProperty.md#TNullableProperty)&lt;OuterValueType&gt; | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;OuterValueType&gt;</span>, providedOptions? : <span style="font-weight: 400;">[DynamicPropertyOptions](../axon/DynamicProperty.md#DynamicPropertyOptions)&lt;ThisValueType, InnerValueType, OuterValueType&gt;</span> ) {: #DynamicProperty-constructor data-toc-label='new DynamicProperty' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

Disposes this Property

#### reset() {: #reset data-toc-label='reset' }

Resets the current property (if it's a Property instead of a TinyProperty)

#### set( value : <span style="font-weight: 400;">ThisValueType</span> ) {: #set data-toc-label='set' }

Prevent setting this Property manually if it is not marked as bidirectional.

#### isSettable() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isSettable data-toc-label='isSettable' }

Returns true if this Property value can be set externally, by set() or .value =

### Instance Properties

#### derive : <span style="font-weight: 400;">( u: OuterValueType ) =&gt; [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;InnerValueType&gt;</span> {: #derive data-toc-label='derive' }

(protected, readonly)

#### map : <span style="font-weight: 400;">( v: InnerValueType ) =&gt; ThisValueType</span> {: #map data-toc-label='map' }

(protected, readonly)

#### inverseMap : <span style="font-weight: 400;">( t: ThisValueType ) =&gt; InnerValueType</span> {: #inverseMap data-toc-label='inverseMap' }

(protected, readonly)

#### bidirectional : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #bidirectional data-toc-label='bidirectional' }

(protected, readonly)



## Type DynamicPropertyOptions {: #DynamicPropertyOptions }


```js
import type { DynamicPropertyOptions } from 'scenerystack/axon';
```


- **bidirectional**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If set to true then changes to this Property (if valuePropertyProperty.value is non-null at the time) will also be
  made to derive( valuePropertyProperty.value ).
- **defaultValue**?: InnerValueType
<br>  If valuePropertyProperty.value === null, this dynamicProperty will act instead like
  derive( valuePropertyProperty.value ) === new Property( defaultValue ). Note that if a custom map function is
  provided, it will be applied to this defaultValue to determine our Property's value.
- **derive**?: ( ( outerValue: OuterValueType ) =&gt; [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;InnerValueType&gt; ) | [KeysMatching](../phet-core/KeysMatching.md)&lt;OuterValueType, [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;InnerValueType&gt;&gt;
<br>  Maps a non-null valuePropertyProperty.value into the Property to be used. See top-level documentation for usage.
  If it's a string, it will grab that named property out (e.g. it's like passing u =&gt; u[ derive ])
  NOTE: This accepts TReadOnlyProperty, but if you have bidirectional:true it must be a full TProperty.
  This is not currently type checked.
  NOTE there are constraints using derive: 'string' when using parametric type parameters. See https://github.com/phetsims/projectile-data-lab/issues/10
- **map**?: ( ( innerValue: InnerValueType ) =&gt; ThisValueType ) | [KeysMatching](../phet-core/KeysMatching.md)&lt;InnerValueType, ThisValueType&gt;
<br>  Maps our input Property value to/from this Property's value. See top-level documentation for usage.
  If it's a string, it will grab that named property out (e.g. it's like passing u =&gt; u[ derive ])
- **inverseMap**?: ( ( value: ThisValueType ) =&gt; InnerValueType ) | [KeysMatching](../phet-core/KeysMatching.md)&lt;ThisValueType, InnerValueType&gt;
- &amp; [PropertyOptions](../axon/ReadOnlyProperty.md#PropertyOptions)&lt;ThisValueType&gt;




## Type TNullableProperty {: #TNullableProperty }


```js
import type { TNullableProperty } from 'scenerystack/axon';
```


[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;T | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt; | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;T&gt;



## Source Code

See the source for [DynamicProperty.ts](https://github.com/phetsims/axon/blob/main/js/DynamicProperty.ts) in the [axon](https://github.com/phetsims/axon) repository.

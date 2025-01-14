# Validation

## Overview

The definition file for "validators" used to validate values. This file holds associated logic that validates the
schema of the "validator" object, as well as testing if a value adheres to the restrictions provided by a validator.
See validate.js for usage with assertions to check that values are valid.

Examples:

A Validator that only accepts number values:
{ valueType: 'number' }

A Validator that only accepts the numbers "2" or "3":
{ valueType: 'number', validValues: [ 2, 3 ] }

A Validator that accepts any Object:
{ valueType: Object }

A Validator that accepts EnumerationDeprecated values (NOTE! This is deprecated, use the new class-based enumeration pattern as the valueType):
{ valueType: MyEnumeration }
and/or
{ validValues: MyEnumeration.VALUES }

A Validator that accepts a string or a number greater than 2:
{ isValidValue: value =&gt; { typeof value === 'string' || (typeof value === 'number' &amp;&amp; value &gt; 2)} }

A Validator for a number that should be an even number greater than 10
{ valueType: 'number', validators: [ { isValidValue: v =&gt; v &gt; 10 }, { isValidValue: v =&gt; v%2 === 0 }] }

@author Sam Reid (PhET Interactive Simulations)
@author Michael Kauzmann (PhET Interactive Simulations)

## Class Validation {: #Validation }


```js
import { Validation } from 'scenerystack/axon';
```
### Static Methods

#### getValidatorValidationError( validator : <span style="font-weight: 400;">[Validator](../axon/Validation.md#Validator)&lt;T&gt;</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getValidatorValidationError data-toc-label='getValidatorValidationError' }

@returns an error string if incorrect, otherwise null if valid

#### validateValidator( validator : <span style="font-weight: 400;">[Validator](../axon/Validation.md#Validator)&lt;T&gt;</span> ) {: #validateValidator data-toc-label='validateValidator' }

#### containsValidatorKey( validator : <span style="font-weight: 400;">IntentionalAny</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #containsValidatorKey data-toc-label='containsValidatorKey' }

@param validator - object which may or may not contain validation keys

#### isValueValid( value : <span style="font-weight: 400;">T</span>, validator : <span style="font-weight: 400;">[Validator](../axon/Validation.md#Validator)&lt;T&gt;</span>, providedOptions? : <span style="font-weight: 400;">[IsValidValueOptions](../axon/Validation.md#IsValidValueOptions)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isValueValid data-toc-label='isValueValid' }

#### getValidationError( value : <span style="font-weight: 400;">IntentionalAny</span>, validator : <span style="font-weight: 400;">[Validator](../axon/Validation.md#Validator)&lt;T&gt;</span>, providedOptions? : <span style="font-weight: 400;">[IsValidValueOptions](../axon/Validation.md#IsValidValueOptions)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getValidationError data-toc-label='getValidationError' }

Determines whether a value is valid (returning a boolean value), returning the problem as a string if invalid,
otherwise returning null when valid.

#### equalsForValidationStrategy( a : <span style="font-weight: 400;">T</span>, b : <span style="font-weight: 400;">T</span>, valueComparisonStrategy : <span style="font-weight: 400;">ValueComparisonStrategy&lt;T&gt;</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equalsForValidationStrategy data-toc-label='equalsForValidationStrategy' }

Compare the two provided values for equality using the valueComparisonStrategy provided, see
ValueComparisonStrategy type.

### Static Properties

#### VALIDATOR_KEYS {: #VALIDATOR_KEYS data-toc-label='VALIDATOR_KEYS' }

(readonly)

#### STRING_WITHOUT_TEMPLATE_VARS_VALIDATOR : <span style="font-weight: 400;">[Validator](../axon/Validation.md#Validator)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span> {: #STRING_WITHOUT_TEMPLATE_VARS_VALIDATOR data-toc-label='STRING_WITHOUT_TEMPLATE_VARS_VALIDATOR' }

(readonly)

General validator for validating that a string doesn't have template variables in it.



## Type IsValidValueOptions {: #IsValidValueOptions }


```js
import type { IsValidValueOptions } from 'scenerystack/axon';
```
- **validateValidator**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>




## Type ValidationMessage {: #ValidationMessage }


```js
import type { ValidationMessage } from 'scenerystack/axon';
```
<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | ( () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> )



## Type Validator {: #Validator }


```js
import type { Validator } from 'scenerystack/axon';
```
- **valueType**?: ValueType | ValueType[]
- **validValues**?: readonly T[]
- **valueComparisonStrategy**?: ValueComparisonStrategy&lt;T&gt;
- **isValidValue**?: ( v: T ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **phetioType**?: [IOType](../tandem/IOType.md)
- **validationMessage**?: [ValidationMessage](../axon/Validation.md#ValidationMessage)
- **validators**?: [Validator](../axon/Validation.md#Validator)&lt;T&gt;[]




## Source Code

See the source for [Validation.ts](https://github.com/phetsims/axon/blob/main/js/Validation.ts) in the [axon](https://github.com/phetsims/axon) repository.

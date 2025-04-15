# PhetioDataHandler

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/tandem/blob/main/js/PhetioDataHandler.ts](https://github.com/phetsims/tandem/blob/main/js/PhetioDataHandler.ts) for the most up-to-date information.

## Overview

Helper type that supports a `parameters` member.
This is mostly useful for PhET-iO instrumented sub-class to use that takes a variable number of parameters in their
IOType. With this function you gain parameter validation, PhET-iO documentation, and data stream support.

@author Sam Reid (PhET Interactive Simulations)
@author Michael Kauzmann (PhET Interactive Simulations)

## Class PhetioDataHandler {: #PhetioDataHandler }


```js
import { PhetioDataHandler } from 'scenerystack/tandem';
```
### Constructor

#### new PhetioDataHandler( providedOptions? : <span style="font-weight: 400;">[PhetioDataHandlerOptions](../tandem/PhetioDataHandler.md#PhetioDataHandlerOptions)</span> ) {: #PhetioDataHandler-constructor data-toc-label='new PhetioDataHandler' }

### Instance Methods

#### validateArguments( ...args : <span style="font-weight: 400;">T</span> ) {: #validateArguments data-toc-label='validateArguments' }

(protected)

Validate that provided args match the expected schema given via options.parameters.

#### getValidationErrors( ...args : <span style="font-weight: 400;">T</span> ) : <span style="font-weight: 400;">Array&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span> {: #getValidationErrors data-toc-label='getValidationErrors' }

Validate that provided args match the expected schema given via options.parameters.

#### getPhetioData( ...args : <span style="font-weight: 400;">T</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> | Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;</span> {: #getPhetioData data-toc-label='getPhetioData' }

Gets the data that will be emitted to the PhET-iO data stream, for an instrumented simulation.
@returns the data, keys dependent on parameter metadata



## Type Parameter {: #Parameter }


```js
import type { Parameter } from 'scenerystack/tandem';
```


- **name**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **phetioDocumentation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **phetioPrivate**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- &amp; [Validator](../axon/Validation.md#Validator)




## Type PhetioDataHandlerOptions {: #PhetioDataHandlerOptions }


Use each subtype should provide its own phetioOuterType. That coupled with parameter IOTypes will result in the
phetioType. Don't pass this in!

```js
import type { PhetioDataHandlerOptions } from 'scenerystack/tandem';
```


- **parameters**?: [Parameter](../tandem/PhetioDataHandler.md#Parameter)[]
<br>  The parameters to the emit method that will be called.
  See PARAMETER_KEYS for a list of legal keys, their types, and documentation.
- **phetioOuterType**: ( t: [AnyIOType](../tandem/IOType.md#AnyIOType)[] ) =&gt; [AnyIOType](../tandem/IOType.md#AnyIOType)
- **hasListenerOrderDependencies**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[PhetioObjectOptions](../tandem/PhetioObject.md#PhetioObjectOptions), "phetioType"&gt;




## Source Code

See the source for [PhetioDataHandler.ts](https://github.com/phetsims/tandem/blob/main/js/PhetioDataHandler.ts) in the [tandem](https://github.com/phetsims/tandem) repository.

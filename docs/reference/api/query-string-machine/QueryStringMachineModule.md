# QueryStringMachineModule

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/query-string-machine/blob/main/js/QueryStringMachineModule.ts](https://github.com/phetsims/query-string-machine/blob/main/js/QueryStringMachineModule.ts) for the most up-to-date information.

## Overview



## Type QSMParsedParameters {: #QSMParsedParameters }


```js
import type { QSMParsedParameters } from 'scenerystack/query-string-machine';
```


{
  // Will return a map of the "result" types
  [[Property](../axon/Property.md) in keyof SchemaMap]: QueryMachineTypeToType&lt;SchemaMap[ [Property](../axon/Property.md) ][ 'type' ]&gt;
  // SCHEMA_MAP allowed to be set in types
} &amp; { SCHEMA_MAP: SchemaMap }



## Type QSMSchemaObject {: #QSMSchemaObject }


```js
import type { QSMSchemaObject } from 'scenerystack/query-string-machine';
```


Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>, Schema&gt;



## Type Warning {: #Warning }


```js
import type { Warning } from 'scenerystack/query-string-machine';
```


- **key**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **value**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **message**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>




## Source Code

See the source for [QueryStringMachineModule.ts](https://github.com/phetsims/query-string-machine/blob/main/js/QueryStringMachineModule.ts) in the [query-string-machine](https://github.com/phetsims/query-string-machine) repository.

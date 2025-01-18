# ResponsePatternCollection

## Overview

A collection of string patterns that are used with responseCollector.collectResponses(). Responses for Voicing are
categorized into one of "Name", "Object", "Context", or "Hint" responses. A node that implements voicing may
have any number of these responses and each of these responses can be enabled/disabled by user preferences
through the Properties of responseCollector. So we need string patterns that include each combination of response.

Furthermore, you may want to control the order, punctuation, or other content in these patterns, so the default
cannot be used. ResponsePatternCollection will have a collections of patterns that may be generally useful. But if
you need a collection that is not provided here, you can construct additional instances to create an object based
on one of the pre-made collections in this file. If you need something totally different, create your own from
scratch (passing in all options to the constructor).

@author Jesse Greenberg (PhET Interactive Simulations)

## Class ResponsePatternCollection {: #ResponsePatternCollection }


```js
import { ResponsePatternCollection } from 'scenerystack/utterance-queue';
```
### Constructor

#### new ResponsePatternCollection( providedOptions? : <span style="font-weight: 400;">[ResponsePatternCollectionOptions](../utterance-queue/ResponsePatternCollection.md#ResponsePatternCollectionOptions)</span> ) {: #ResponsePatternCollection-constructor data-toc-label='new ResponsePatternCollection' }

### Instance Methods

#### getResponsePattern( key : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getResponsePattern data-toc-label='getResponsePattern' }

### Static Methods

#### createPatternKey( includeName : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, includeObject : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, includeContext : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, includeHint : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #createPatternKey data-toc-label='createPatternKey' }

Create a key to be used to get a string pattern for a Voicing response. Assumes keys
are like those listed in DEFAULT_RESPONSE_PATTERNS.

### Static Properties

#### DEFAULT_RESPONSE_PATTERNS : <span style="font-weight: 400;">[ResponsePatternCollection](../utterance-queue/ResponsePatternCollection.md)</span> {: #DEFAULT_RESPONSE_PATTERNS data-toc-label='DEFAULT_RESPONSE_PATTERNS' }

(readonly)

Default order and punctuation for Voicing responses.



## Type ResponsePatternCollectionOptions {: #ResponsePatternCollectionOptions }


```js
import type { ResponsePatternCollectionOptions } from 'scenerystack/utterance-queue';
```


- **nameObjectContextHint**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **nameObjectContext**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **nameObjectHint**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **nameContextHint**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **nameObject**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **nameContext**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **nameHint**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **name**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **objectContextHint**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **objectContext**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **objectHint**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **contextHint**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **object**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **context**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **hint**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>




## Source Code

See the source for [ResponsePatternCollection.ts](https://github.com/phetsims/utterance-queue/blob/main/js/ResponsePatternCollection.ts) in the [utterance-queue](https://github.com/phetsims/utterance-queue) repository.

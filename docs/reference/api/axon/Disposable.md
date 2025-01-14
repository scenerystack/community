# Disposable

## Overview

A base class to help with managing disposal. Creates a disposeEmitter that will be fired when disposing. This occurs
AFTER all prototype dispose() methods have been called up the hierarchy, so be aware of potential disposal order
issues if using disposeEmitter and dispose() logic together.

This class also includes a public flag set to true when disposed.

You can also opt into asserting out when disposing, preventing disposal on your class, see Disposable.isDisposable

@author Sam Reid (PhET Interactive Simulations)
@author Michael Kauzmann (PhET Interactive Simulations)

## Class Disposable {: #Disposable }


```js
import { Disposable } from 'scenerystack/axon';
```
### Constructor

#### new Disposable( providedOptions? : <span style="font-weight: 400;">[DisposableOptions](../axon/Disposable.md#DisposableOptions)</span> ) {: #Disposable-constructor data-toc-label='new Disposable' }

### Instance Methods

#### getDisposeEmitter() : <span style="font-weight: 400;">TReadOnlyEmitter</span> {: #getDisposeEmitter data-toc-label='getDisposeEmitter' }

#### initializeDisposable( options? : <span style="font-weight: 400;">[DisposableOptions](../axon/Disposable.md#DisposableOptions)</span> ) {: #initializeDisposable data-toc-label='initializeDisposable' }

#### addDisposable( ...disposables : <span style="font-weight: 400;">HasDispose[]</span> ) {: #addDisposable data-toc-label='addDisposable' }

Add disposables that will be disposed when this instance is disposed.

#### dispose() {: #dispose data-toc-label='dispose' }

#### addDisposerAction( disposerActionType : <span style="font-weight: 400;">DisposerActionType</span>, target : <span style="font-weight: 400;">IntentionalAny</span>, disposer : <span style="font-weight: 400;">Disposer</span>, unregisterAction : <span style="font-weight: 400;">() =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #addDisposerAction data-toc-label='addDisposerAction' }

Adds an action for the target to the disposeEmitter for the given disposer, so that when the disposer is disposed,
the unregisterAction related to this instance is also called. For instance, the unregisterAction would be the
corresponding removal/unlink/removeInputListener.
It is assumed that the target and unregisterAction are related to the memory management of this instance.

#### removeDisposerAction( disposerActionType : <span style="font-weight: 400;">DisposerActionType</span>, target : <span style="font-weight: 400;">IntentionalAny</span> ) {: #removeDisposerAction data-toc-label='removeDisposerAction' }

Remove the target on the disposer's disposeEmitter. This will not call the unregistration.

#### removeAllDisposerActions( disposerActionType : <span style="font-weight: 400;">DisposerActionType</span> ) {: #removeAllDisposerActions data-toc-label='removeAllDisposerActions' }

Remove all disposer actions for a given type

### Static Methods

#### assertNotDisposable() {: #assertNotDisposable data-toc-label='assertNotDisposable' }



## Type DisposableOptions {: #DisposableOptions }


Used in subclasses to support mutate.

```js
import type { DisposableOptions } from 'scenerystack/axon';
```


- **isDisposable**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>




## Source Code

See the source for [Disposable.ts](https://github.com/phetsims/axon/blob/main/js/Disposable.ts) in the [axon](https://github.com/phetsims/axon) repository.

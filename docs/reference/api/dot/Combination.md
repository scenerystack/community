# Combination

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/dot/blob/main/js/Combination.ts](https://github.com/phetsims/dot/blob/main/js/Combination.ts) for the most up-to-date information.

## Overview

An immutable combination that represents a subset of a set

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Combination {: #Combination }


```js
import { Combination } from 'scenerystack/dot';
```
### Constructor

#### new Combination( inclusions : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>[]</span> ) {: #Combination-constructor data-toc-label='new Combination' }

### Instance Methods

#### size() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #size data-toc-label='size' }

#### includes( index : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #includes data-toc-label='includes' }

#### apply( array : <span style="font-weight: 400;">T[]</span> ) : <span style="font-weight: 400;">T[]</span> {: #apply data-toc-label='apply' }

Applies the combination to an array, returning a new array with the used elements.

#### inverted() : <span style="font-weight: 400;">[Combination](../dot/Combination.md)</span> {: #inverted data-toc-label='inverted' }

Creates a new combination that is the inverse of this (includes the opposite elements)

#### getIncludedIndices() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> {: #getIncludedIndices data-toc-label='getIncludedIndices' }

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

#### equals( combination : <span style="font-weight: 400;">[Combination](../dot/Combination.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equals data-toc-label='equals' }

### Instance Properties

#### inclusions : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>[]</span> {: #inclusions data-toc-label='inclusions' }

(readonly)

### Static Methods

#### empty( size : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Combination](../dot/Combination.md)</span> {: #empty data-toc-label='empty' }

Creates an empty combination of a given size.

#### full( size : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Combination](../dot/Combination.md)</span> {: #full data-toc-label='full' }

Creates a full combination of a given size.

#### combinations( size : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Combination](../dot/Combination.md)[]</span> {: #combinations data-toc-label='combinations' }

Lists all combinations from a given size

#### forEachCombination( array : <span style="font-weight: 400;">T[]</span>, callback : <span style="font-weight: 400;">( array: readonly T[] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #forEachCombination data-toc-label='forEachCombination' }

Calls a callback on every single possible permutation of the given Array

@param array
@param callback - Called on each permuted version of the array possible

#### combinationsOf( array : <span style="font-weight: 400;">T[]</span> ) : <span style="font-weight: 400;">T[][]</span> {: #combinationsOf data-toc-label='combinationsOf' }



## Source Code

See the source for [Combination.ts](https://github.com/phetsims/dot/blob/main/js/Combination.ts) in the [dot](https://github.com/phetsims/dot) repository.

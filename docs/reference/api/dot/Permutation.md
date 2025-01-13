# Permutation

## Overview

An immutable permutation that can permute an array

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Permutation {: #Permutation }


```js
import { Permutation } from 'scenerystack/dot';
```
### Constructor

#### new Permutation( indices : <span style="font-weight: 400; opacity: 80%;">number[]</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### size() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #size data-toc-label='size' }

#### apply( arrayOrInt : <span style="font-weight: 400; opacity: 80%;">T</span> ) : <span style="font-weight: 400; opacity: 80%;">T extends E[] ? number[] : number</span> {: #apply data-toc-label='apply' }

Applies the permutation, returning either a new array or number (whatever was provided).

#### inverted() : <span style="font-weight: 400; opacity: 80%;">Permutation</span> {: #inverted data-toc-label='inverted' }

Creates a new permutation that is the inverse of this.

#### withIndicesPermuted( indices : <span style="font-weight: 400; opacity: 80%;">number[]</span> ) : <span style="font-weight: 400; opacity: 80%;">Permutation[]</span> {: #withIndicesPermuted data-toc-label='withIndicesPermuted' }

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #toString data-toc-label='toString' }

#### equals( permutation : <span style="font-weight: 400; opacity: 80%;">Permutation</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #equals data-toc-label='equals' }

### Instance Properties

#### indices : <span style="font-weight: 400; opacity: 80%;">number[]</span> {: #indices data-toc-label='indices' }

(readonly)

### Static Methods

#### identity( size : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Permutation</span> {: #identity data-toc-label='identity' }

Creates an identity permutation of a given size.

#### permutations( size : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Permutation[]</span> {: #permutations data-toc-label='permutations' }

Lists all permutations that have a given size

#### forEachPermutation( array : <span style="font-weight: 400; opacity: 80%;">T[]</span>, callback : <span style="font-weight: 400; opacity: 80%;">( array: readonly T[] ) =&gt; void</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #forEachPermutation data-toc-label='forEachPermutation' }

Calls a callback on every single possible permutation of the given Array

@param array
@param callback - Called on each permuted version of the array possible

#### permutationsOf( array : <span style="font-weight: 400; opacity: 80%;">T[]</span> ) : <span style="font-weight: 400; opacity: 80%;">T[][]</span> {: #permutationsOf data-toc-label='permutationsOf' }



## Source Code

See the source for [Permutation.ts](https://github.com/phetsims/dot/blob/main/js/Permutation.ts) in the [dot](https://github.com/phetsims/dot) repository.

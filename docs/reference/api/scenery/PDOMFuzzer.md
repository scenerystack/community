# PDOMFuzzer

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/accessibility/pdom/PDOMFuzzer.js](https://github.com/phetsims/scenery/blob/main/js/accessibility/pdom/PDOMFuzzer.js) for the most up-to-date information.

## Overview

Runs PDOM-tree-related scenery operations randomly (with assertions) to try to find any bugs.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class PDOMFuzzer {: #PDOMFuzzer }


```js
import { PDOMFuzzer } from 'scenerystack/scenery';
```
### Constructor

#### new PDOMFuzzer( nodeCount, logToConsole, seed ) {: #PDOMFuzzer-constructor data-toc-label='new PDOMFuzzer' }

### Instance Methods

#### step() {: #step data-toc-label='step' }

Runs one action randomly (printing out the action and result).
@public

#### enumerateActions() {: #enumerateActions data-toc-label='enumerateActions' }

Find all of the possible actions that are legal.
@private

@returns {Array.&lt;Object&gt;} - like { text: {string}, execute: {function} }

#### isAddChildLegal( parent, child ) {: #isAddChildLegal data-toc-label='isAddChildLegal' }

Checks whether the child can be added (as a child) to the parent.
@private

@param {Node} parent
@param {Node} child
@returns {boolean}

#### powerSet( list ) {: #powerSet data-toc-label='powerSet' }

Returns the power set of a set (all subsets).
@private

@param {Array.&lt;*&gt;} list
@returns {Array.&lt;Array.&lt;*&gt;&gt;}

#### isPDOMOrderChangeLegal( node, order ) {: #isPDOMOrderChangeLegal data-toc-label='isPDOMOrderChangeLegal' }

Returns whether an accessible order change is legal.
@private

@param {Node} node
@param {Array.&lt;Node|null&gt;|null} order

#### isAcyclic( parent, child, hasConnection ) {: #isAcyclic data-toc-label='isAcyclic' }

Checks whether a connection (parent-child or accessible order) is legal (doesn't cause a cycle).
@private

@param {Node} parent
@param {Node} child
@param {function} hasConnection - determines whether there is a parent-child-style relationship between params
@returns {boolean}

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references
@public



## Source Code

See the source for [PDOMFuzzer.js](https://github.com/phetsims/scenery/blob/main/js/accessibility/pdom/PDOMFuzzer.js) in the [scenery](https://github.com/phetsims/scenery) repository.

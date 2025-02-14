# Atom

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/nitroglycerin/blob/main/js/Atom.ts](https://github.com/phetsims/nitroglycerin/blob/main/js/Atom.ts) for the most up-to-date information.

## Overview

Object for actual element properties (symbol, radius, etc.)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Atom {: #Atom }


```js
import { Atom } from 'scenerystack/nitroglycerin';
```
### Constructor

#### new Atom( element : <span style="font-weight: 400;">[Element](../nitroglycerin/Element.md)</span> ) {: #Atom-constructor data-toc-label='new Atom' }

### Instance Methods

#### hasSameElement( atom : <span style="font-weight: 400;">[Atom](../nitroglycerin/Atom.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasSameElement data-toc-label='hasSameElement' }

#### isHydrogen() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isHydrogen data-toc-label='isHydrogen' }

#### isCarbon() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isCarbon data-toc-label='isCarbon' }

#### isOxygen() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isOxygen data-toc-label='isOxygen' }

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

### Instance Properties

#### element : <span style="font-weight: 400;">[Element](../nitroglycerin/Element.md)</span> {: #element data-toc-label='element' }

(readonly)

#### symbol : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #symbol data-toc-label='symbol' }

(readonly)

These are field of Element, unpacked here for convenience. See Element for documentation of these fields.

#### covalentRadius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #covalentRadius data-toc-label='covalentRadius' }

(readonly)

#### covalentDiameter : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #covalentDiameter data-toc-label='covalentDiameter' }

(readonly)

#### electronegativity : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #electronegativity data-toc-label='electronegativity' }

(readonly)

#### atomicWeight : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #atomicWeight data-toc-label='atomicWeight' }

(readonly)

#### color : <span style="font-weight: 400;">[Color](../scenery/Color.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #color data-toc-label='color' }

(readonly)

#### reference : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #reference data-toc-label='reference' }

(readonly)

IDs for uniqueness and fast lookups

#### id : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #id data-toc-label='id' }

(readonly)

### Static Methods

#### createAtomFromSymbol( symbol : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;">[Atom](../nitroglycerin/Atom.md)</span> {: #createAtomFromSymbol data-toc-label='createAtomFromSymbol' }



## Source Code

See the source for [Atom.ts](https://github.com/phetsims/nitroglycerin/blob/main/js/Atom.ts) in the [nitroglycerin](https://github.com/phetsims/nitroglycerin) repository.

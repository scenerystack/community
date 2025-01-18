# Element

## Overview

Object for actual element properties (symbol, radius, etc.)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Element {: #Element }


```js
import { Element } from 'scenerystack/nitroglycerin';
```
### Constructor

#### new Element( symbol : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, covalentRadius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, vanDerWaalsRadius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, electronegativity : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, atomicWeight : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, color : <span style="font-weight: 400;">[Color](../scenery/Color.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) {: #Element-constructor data-toc-label='new Element' }

### Instance Methods

#### isSameElement( element : <span style="font-weight: 400;">[Element](../nitroglycerin/Element.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isSameElement data-toc-label='isSameElement' }

#### isHydrogen() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isHydrogen data-toc-label='isHydrogen' }

#### isCarbon() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isCarbon data-toc-label='isCarbon' }

#### isOxygen() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isOxygen data-toc-label='isOxygen' }

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

### Instance Properties

#### symbol : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #symbol data-toc-label='symbol' }

(readonly)

See constructor params for documentation.

#### covalentRadius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #covalentRadius data-toc-label='covalentRadius' }

(readonly)

#### vanDerWaalsRadius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #vanDerWaalsRadius data-toc-label='vanDerWaalsRadius' }

(readonly)

#### electronegativity : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #electronegativity data-toc-label='electronegativity' }

(readonly)

#### atomicWeight : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #atomicWeight data-toc-label='atomicWeight' }

(readonly)

#### color : <span style="font-weight: 400;">[Color](../scenery/Color.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #color data-toc-label='color' }

(readonly)

### Static Methods

#### getElementBySymbol( symbol : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;">[Element](../nitroglycerin/Element.md)</span> {: #getElementBySymbol data-toc-label='getElementBySymbol' }

### Static Properties

#### Ar : <span style="font-weight: 400;">[Element](../nitroglycerin/Element.md)</span> {: #Ar data-toc-label='Ar' }

(readonly)

static Element instances

#### B : <span style="font-weight: 400;">[Element](../nitroglycerin/Element.md)</span> {: #B data-toc-label='B' }

(readonly)

#### Be : <span style="font-weight: 400;">[Element](../nitroglycerin/Element.md)</span> {: #Be data-toc-label='Be' }

(readonly)

#### Br : <span style="font-weight: 400;">[Element](../nitroglycerin/Element.md)</span> {: #Br data-toc-label='Br' }

(readonly)

#### C : <span style="font-weight: 400;">[Element](../nitroglycerin/Element.md)</span> {: #C data-toc-label='C' }

(readonly)

#### Cl : <span style="font-weight: 400;">[Element](../nitroglycerin/Element.md)</span> {: #Cl data-toc-label='Cl' }

(readonly)

#### F : <span style="font-weight: 400;">[Element](../nitroglycerin/Element.md)</span> {: #F data-toc-label='F' }

(readonly)

#### H : <span style="font-weight: 400;">[Element](../nitroglycerin/Element.md)</span> {: #H data-toc-label='H' }

(readonly)

#### I : <span style="font-weight: 400;">[Element](../nitroglycerin/Element.md)</span> {: #I data-toc-label='I' }

(readonly)

#### N : <span style="font-weight: 400;">[Element](../nitroglycerin/Element.md)</span> {: #N data-toc-label='N' }

(readonly)

#### Ne : <span style="font-weight: 400;">[Element](../nitroglycerin/Element.md)</span> {: #Ne data-toc-label='Ne' }

(readonly)

#### O : <span style="font-weight: 400;">[Element](../nitroglycerin/Element.md)</span> {: #O data-toc-label='O' }

(readonly)

#### P : <span style="font-weight: 400;">[Element](../nitroglycerin/Element.md)</span> {: #P data-toc-label='P' }

(readonly)

#### S : <span style="font-weight: 400;">[Element](../nitroglycerin/Element.md)</span> {: #S data-toc-label='S' }

(readonly)

#### Si : <span style="font-weight: 400;">[Element](../nitroglycerin/Element.md)</span> {: #Si data-toc-label='Si' }

(readonly)

#### Sn : <span style="font-weight: 400;">[Element](../nitroglycerin/Element.md)</span> {: #Sn data-toc-label='Sn' }

(readonly)

#### Xe : <span style="font-weight: 400;">[Element](../nitroglycerin/Element.md)</span> {: #Xe data-toc-label='Xe' }

(readonly)

#### elements {: #elements data-toc-label='elements' }

(readonly)



## Source Code

See the source for [Element.ts](https://github.com/phetsims/nitroglycerin/blob/main/js/Element.ts) in the [nitroglycerin](https://github.com/phetsims/nitroglycerin) repository.

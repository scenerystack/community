# CarouselComboBox

## Overview

CarouselComboBox behaves like a combo box, but its listbox is a carousel. This allows you to scroll through a
long list of items, a feature that ComboBoxListBox does not support. ComboBoxItem, ComboBoxButton, and
Carousel are reused.

THINK TWICE BEFORE USING THIS IN A SIM!
CarouselComboBox was created as a quick way to address situations where ComboBox's listbox gets too long,
for example https://github.com/phetsims/sun/issues/673. This tends to happen in internal 'demo' applications
(sun, scenery-phet,... ) that have long lists of demos. And as a design best-practice, PhET tends to avoid
longs lists of things in sims. So if you find yourself reaching for CarouselComboBox, consider whether a
different UI component might provide a better UX.

Possible future work:
- Modify ComboBox so that it can use different types of popups (ComboBoxListBox, Carousel,...), or
- Make CarouselComboBox pop up the Carousel in front of everything else
- a11y support in CarouselComboBox

@author Chris Malley (PixelZoom, Inc.)

## Class CarouselComboBox {: #CarouselComboBox }


```js
import { CarouselComboBox } from 'scenerystack/sun';
```
### Constructor

#### new CarouselComboBox( property : <span style="font-weight: 400; opacity: 80%;">TProperty&lt;T&gt;</span>, comboBoxItems : <span style="font-weight: 400; opacity: 80%;">ComboBoxItem&lt;T&gt;[]</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">CarouselComboBoxOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }



## Source Code

See the source for [CarouselComboBox.ts](https://github.com/phetsims/sun/blob/main/js/CarouselComboBox.ts) in the [sun](https://github.com/phetsims/sun) repository.

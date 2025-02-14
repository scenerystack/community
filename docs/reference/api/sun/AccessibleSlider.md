# AccessibleSlider

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/sun/blob/main/js/accessibility/AccessibleSlider.ts](https://github.com/phetsims/sun/blob/main/js/accessibility/AccessibleSlider.ts) for the most up-to-date information.

## Overview

A trait for subtypes of Node, used to make the Node behave like a 'slider' with assistive technology. This could be
used by anything that moves along a 1-D line. An accessible slider behaves like:

- Arrow keys increment/decrement the slider by a specified step size.
- Holding shift with arrow keys will increment/decrement by alternative step size, usually smaller than default.
- Page Up and Page Down increments/decrements value by an alternative step size, usually larger than default.
- Home key sets value to its minimum.
- End key sets value to its maximum.

@author Jesse Greenberg (PhET Interactive Simulations)



## Source Code

See the source for [AccessibleSlider.ts](https://github.com/phetsims/sun/blob/main/js/accessibility/AccessibleSlider.ts) in the [sun](https://github.com/phetsims/sun) repository.

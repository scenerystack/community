# AccessibleNumberSpinner

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/sun/blob/main/js/accessibility/AccessibleNumberSpinner.ts](https://github.com/phetsims/sun/blob/main/js/accessibility/AccessibleNumberSpinner.ts) for the most up-to-date information.

## Overview

A trait for subtypes of Node, used to make the Node behave like a 'number' input with assistive technology.
An accessible number spinner behaves like:

- Arrow keys increment/decrement the value by a specified step size.
- Page Up and Page Down increments/decrements value by an alternative step size, usually larger than default.
- Home key sets value to its minimum.
- End key sets value to its maximum.

This number spinner is different than typical 'number' inputs because it does not support number key control. It
was determined that an input of type range is the best match for a PhET Number Spinner, with a custom role
description with aria-roledescription. See https://github.com/phetsims/sun/issues/497 for history on this
decision.

This trait mixes in a "parent" mixin to handle general "value" formatting and aria-valuetext updating, see
AccessibleValueHandler.

@author Jesse Greenberg (PhET Interactive Simulations)
@author Michael Barlow (PhET Interactive Simulations)



## Source Code

See the source for [AccessibleNumberSpinner.ts](https://github.com/phetsims/sun/blob/main/js/accessibility/AccessibleNumberSpinner.ts) in the [sun](https://github.com/phetsims/sun) repository.

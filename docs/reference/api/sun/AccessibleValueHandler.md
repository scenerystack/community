# AccessibleValueHandler

## Overview

A trait for subtypes of Node. Meant for Nodes with a value that "run" on a NumberProperty and handles formatting,
mapping, and aria-valuetext updating in the PDOM.

Also implements the listeners that respond to accessible input, such as keydown, keyup, input, and change
events, which may come from a keyboard or other assistive device. Use getAccessibleValueHandlerInputListener() to get
these listeners to add to your Node with addInputListener().

Browsers have limitations for the interaction of a slider when the range is not evenly divisible by the step size.
Rather than allow the browser to natively change the valueProperty with an input event, this trait implements a
totally custom interaction keeping the general slider behavior the same.

@author Michael Kauzmann (PhET Interactive Simulations)
@author Jesse Greenberg (PhET Interactive Simulations)



## Source Code

See the source for [AccessibleValueHandler.ts](https://github.com/phetsims/sun/blob/main/js/accessibility/AccessibleValueHandler.ts) in the [sun](https://github.com/phetsims/sun) repository.

# MarginLayoutConfigurable

## Overview

This combines the margin-cell related options common to FlowConfigurable and GridConfigurable
Parent mixin for flow/grid configurables (mixins for storing options that can affect each cell).
`null` for values usually means "inherit from the default".

NOTE: This is mixed into both the constraint AND the cell, since we have two layers of options. The `null` meaning
"inherit from the default" is mainly used for the cells, so that if it's not specified in the cell, it will be
specified in the constraint (as non-null).

NOTE: This is a mixin meant to be used internally only by Scenery (for the constraint and cell), and should not be
used by outside code.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;



## Source Code

See the source for [MarginLayoutConfigurable.ts](https://github.com/phetsims/scenery/blob/main/js/layout/constraints/MarginLayoutConfigurable.ts) in the [scenery](https://github.com/phetsims/scenery) repository.

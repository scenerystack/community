# GridConfigurable

## Overview

Mixin for storing options that can affect each cell.

Handles a lot of conversion from internal Enumeration values (for performance) and external string representations.
This is done primarily for performance and that style of internal enumeration pattern. If string comparisons are
faster, that could be used instead.

NOTE: This is mixed into both the constraint AND the cell, since we have two layers of options. The `null` meaning
"inherit from the default" is mainly used for the cells, so that if it's not specified in the cell, it will be
specified in the constraint (as non-null).

NOTE: This is a mixin meant to be used internally only by Scenery (for the constraint and cell), and should not be
used by outside code.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;



## Source Code

See the source for [GridConfigurable.ts](https://github.com/phetsims/scenery/blob/main/js/layout/constraints/GridConfigurable.ts) in the [scenery](https://github.com/phetsims/scenery) repository.

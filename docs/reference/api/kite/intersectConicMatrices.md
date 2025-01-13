# intersectConicMatrices

## Overview

Handles intersections of conic sections (based on their matrix representations).

Modelled off of https://math.stackexchange.com/questions/425366/finding-intersection-of-an-ellipse-with-another-ellipse-when-both-are-rotated/425412#425412

Should be in the form specified by https://en.wikipedia.org/wiki/Matrix_representation_of_conic_sections, i.e. given

Q(x,y) = Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0

The matrix should be in the form:

[ A, B/2, D/2 ]
[ B/2, C, E/2 ]
[ D/2, E/2, F ]

In this file, we often handle matrices of complex values. They are typically 3x3 and stored in row-major order, thus:

[ A, B, C ]
[ D, E, F ]
[ G, H, I ]

will be stored as [ A, B, C, D, E, F, G, H, I ].

If something is noted as a "line", it is a homogeneous-coordinate form in complex numbers, e.g. an array
[ a, b, c ] represents the line ax + by + c = 0.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;



## Source Code

See the source for [intersectConicMatrices.ts](https://github.com/phetsims/kite/blob/main/js/util/intersectConicMatrices.ts) in the [kite](https://github.com/phetsims/kite) repository.

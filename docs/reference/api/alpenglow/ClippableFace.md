# ClippableFace

## Overview

An interface for clippable/subdivide-able faces, with defined bounds and area.

NOTE: "fake" corners are needed for some clipping operations (notably the binary line clipping operations, without
bounds). These are corners that are not actually part of the face, but are used when we don't have access to the
entire polygon, and need to output edges which will match up with other results. In these cases, we might generate
edges that go OUTSIDE of the resulting bounds, so if we need to access bounds of the ClippableFace, we'll need to
ignore these "fake" corners.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;



## Source Code

See the source for [ClippableFace.ts](https://github.com/phetsims/alpenglow/blob/main/js/cag/ClippableFace.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.

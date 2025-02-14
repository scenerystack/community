# multiSelectionSoundPlayerFactory

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/tambo/blob/main/js/multiSelectionSoundPlayerFactory.ts](https://github.com/phetsims/tambo/blob/main/js/multiSelectionSoundPlayerFactory.ts) for the most up-to-date information.

## Overview

The multiSelectionSoundPlayerFactory singleton is used to create a set of sound players that are similar to one
another but slightly different, and can thus be used to sonically indicate that a selection is being made from a
group of available options. It was originally developed to support radio buttons (and was called
radioButtonSoundPlayerFactory), but its usage was expanded to combo boxes, so the name was generalized.  It may be
appropriate to use in other contexts as well.

By providing a factory for these sound players, we can avoid having to construct unique instances for each case where
a sound player is needed, thus conserving memory and minimizing load time.

@author John Blanco (PhET Interactive Simulations)



## Source Code

See the source for [multiSelectionSoundPlayerFactory.ts](https://github.com/phetsims/tambo/blob/main/js/multiSelectionSoundPlayerFactory.ts) in the [tambo](https://github.com/phetsims/tambo) repository.

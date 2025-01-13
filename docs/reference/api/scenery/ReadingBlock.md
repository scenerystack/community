# ReadingBlock

## Overview

A trait that extends Voicing, adding support for "Reading Blocks" of the voicing feature. "Reading Blocks" are
UI components in the application that have unique functionality with respect to Voicing.

 - Reading Blocks are generally around graphical objects that are not otherwise interactive (like Text).
 - They have a unique focus highlight to indicate they can be clicked on to hear voiced content.
 - When activated with press or click readingBlockNameResponse is spoken.
 - ReadingBlock content is always spoken if the voicingManager is enabled, ignoring Properties of responseCollector.
 - While speaking, a yellow highlight will appear over the Node composed with ReadingBlock.
 - While voicing is enabled, reading blocks will be added to the focus order.

This trait is to be composed with Nodes and assumes that the Node is composed with ParallelDOM.  It uses Node to
support mouse/touch input and ParallelDOM to support being added to the focus order and alternative input.

@author Jesse Greenberg (PhET Interactive Simulations)



## Source Code

See the source for [ReadingBlock.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/voicing/ReadingBlock.ts) in the [scenery](https://github.com/phetsims/scenery) repository.

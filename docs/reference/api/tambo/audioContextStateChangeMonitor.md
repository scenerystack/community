# audioContextStateChangeMonitor

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/tambo/blob/main/js/audioContextStateChangeMonitor.ts](https://github.com/phetsims/tambo/blob/main/js/audioContextStateChangeMonitor.ts) for the most up-to-date information.

## Overview

A singleton instance that allows clients to register listeners that get fired on state changes for an audio context.
This exists because an audio context has a single "onstatechange" property, and we had the need to register multiple
listeners.

@author John Blanco (PhET Interactive Simulations)



## Source Code

See the source for [audioContextStateChangeMonitor.ts](https://github.com/phetsims/tambo/blob/main/js/audioContextStateChangeMonitor.ts) in the [tambo](https://github.com/phetsims/tambo) repository.

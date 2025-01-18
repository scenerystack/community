# Heartbeat

## Overview

For preventing Safari from going to sleep - added to the self.display.domElement instead of the body to prevent a VoiceOver bug
where the virtual cursor would spontaneously move when the div content changed, see https://github.com/phetsims/joist/issues/140

@author Jonathan Olson (PhET Interactive Simulations)
@author Sam Reid (PhET Interactive Simulations)



## Source Code

See the source for [Heartbeat.ts](https://github.com/phetsims/joist/blob/main/js/Heartbeat.ts) in the [joist](https://github.com/phetsims/joist) repository.

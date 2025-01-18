# audioManager

## Overview

A manager that controls whether all audio is enabled and whether each auditory feature is enabled. Has flags that
indicate which auditory features are supported. Also responsible for initializing managers for sub-components
of the AudioManager.

PhET uses the term "Audio" to describe the collection of all auditory features that are provided by the simulation.
Under "Audio" there are currently two sub-features that can be separately enabled and disabled that PhET calls
"Sound" and "Voicing". Illustrated below:

"Audio" - All auditory output in the sim.
 - "Sound" - All sound effects and sonifications that represent the simulation.
   - "Extra Sound" - Additional Sounds that can be enabled separately, but may not be beneficial for all users.
 - "Voicing" - Spoken text that describes what is happening in the simulation.

 Disabling Audio will mute all subcomponents. But each subcomponent can be muted separately.

@author Jesse Greenberg



## Source Code

See the source for [audioManager.ts](https://github.com/phetsims/joist/blob/main/js/audioManager.ts) in the [joist](https://github.com/phetsims/joist) repository.

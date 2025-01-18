# VoicingToolbarAlertManager

## Overview

Abstract class that creates alert content for the VoicingToolbarItem. Buttons in that item will call these
functions to create content that is spoken using speech synthesis. Extend this class and implement these
functions. Then pass this as an entry to the PreferencesModel when creating a Sim.

@author Jesse Greenberg

## Class VoicingToolbarAlertManager {: #VoicingToolbarAlertManager }


```js
import { VoicingToolbarAlertManager } from 'scenerystack/sim';
```
### Constructor

#### new VoicingToolbarAlertManager( screenProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[AnyScreen](../sim/Screen.md#AnyScreen)&gt;</span> ) {: #VoicingToolbarAlertManager-constructor data-toc-label='new VoicingToolbarAlertManager' }

### Instance Methods

#### createOverviewContent() : <span style="font-weight: 400;">[SpeakableResolvedResponse](../utterance-queue/ResponsePacket.md#SpeakableResolvedResponse)</span> {: #createOverviewContent data-toc-label='createOverviewContent' }

Create the alert content for the simulation overview for the "Overview" button.

#### createDetailsContent() : <span style="font-weight: 400;">[SpeakableResolvedResponse](../utterance-queue/ResponsePacket.md#SpeakableResolvedResponse)</span> {: #createDetailsContent data-toc-label='createDetailsContent' }

Creates the alert content for the simulation details when the "Current Details"
button is pressed.

#### createHintContent() : <span style="font-weight: 400;">[SpeakableResolvedResponse](../utterance-queue/ResponsePacket.md#SpeakableResolvedResponse)</span> {: #createHintContent data-toc-label='createHintContent' }

Creates the alert content for an interaction hint when the "Hint" button is pressed.



## Source Code

See the source for [VoicingToolbarAlertManager.ts](https://github.com/phetsims/joist/blob/main/js/toolbar/VoicingToolbarAlertManager.ts) in the [joist](https://github.com/phetsims/joist) repository.

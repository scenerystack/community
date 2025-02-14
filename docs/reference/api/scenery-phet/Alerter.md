# Alerter

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/accessibility/describers/Alerter.ts](https://github.com/phetsims/scenery-phet/blob/main/js/accessibility/describers/Alerter.ts) for the most up-to-date information.

## Overview

Generic base class responsible for interfacing between a Node to alert description.
@author Michael Kauzmann (PhET Interactive Simulations)

## Class Alerter {: #Alerter }


```js
import { Alerter } from 'scenerystack/scenery-phet';
```
### Constructor

#### new Alerter( providedOptions? : <span style="font-weight: 400;">[AlerterOptions](../scenery-phet/Alerter.md#AlerterOptions)</span> ) {: #Alerter-constructor data-toc-label='new Alerter' }

### Instance Methods

#### alert( alertable : <span style="font-weight: 400;">[TAlertable](../utterance-queue/Utterance.md#TAlertable)</span> ) {: #alert data-toc-label='alert' }

Alert to both description and voicing utteranceQueues, depending on if both are supported by this instance

#### alertDescriptionUtterance( alertable : <span style="font-weight: 400;">[TAlertable](../utterance-queue/Utterance.md#TAlertable)</span> ) {: #alertDescriptionUtterance data-toc-label='alertDescriptionUtterance' }

Forward to provided Node for UtteranceQueue alerting logic. See ParallelDOM.alertDescriptionUtterance() for details.

#### forEachUtteranceQueue( utteranceQueueCallback : <span style="font-weight: 400;">UtteranceQueueCallback</span> ) {: #forEachUtteranceQueue data-toc-label='forEachUtteranceQueue' }

Forward to provided Node for UtteranceQueue alerting logic. See ParallelDOM.forEachUtteranceQueue() for details.

### Instance Properties

#### alertToVoicing : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #alertToVoicing data-toc-label='alertToVoicing' }

(readonly)

#### descriptionAlertNode : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #descriptionAlertNode data-toc-label='descriptionAlertNode' }

(readonly)



## Type AlerterOptions {: #AlerterOptions }


```js
import type { AlerterOptions } from 'scenerystack/scenery-phet';
```


- **alertToVoicing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  When true, alerts will be sent to the voicingUtteranceQueue. This shutoff valve is similar to
  descriptionAlertNode, but for voicing.
- **descriptionAlertNode**?: [Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  If provided, use this Node to send description alerts to one or more Display's UtteranceQueue. Unlike for
  Voicing, description alerts must occur through a Node connected to a Display through the scene graph. If null,
  do not alert for description (same as alertToVoicing:false). NOTE: No description will alert without this option!
- &amp; [EnabledComponentOptions](../axon/EnabledComponent.md#EnabledComponentOptions)




## Source Code

See the source for [Alerter.ts](https://github.com/phetsims/scenery-phet/blob/main/js/accessibility/describers/Alerter.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.

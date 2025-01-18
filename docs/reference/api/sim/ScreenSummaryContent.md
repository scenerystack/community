# ScreenSummaryContent

## Overview

Parallel DOM content for a screen summary of a ScreenView. This is a screen specific summary that is available
for a screen reader.

This class offers support for basic paragraphs of content. If you need more
complex PDOM content (like lists or other tags), create your own scenery Nodes and add them as a child of
this Node.

Options encourage you to categorize content into descriptions for the "play area", "control area", "current details",
which should align with the description design for the simulation.

Example usage:
  const screenSummaryContent = new ScreenSummaryContent( {
    playAreaContent: playAreaDescriptionStringProperty,
    controlAreaContent: controlAreaDescriptionStringProperty,
    currentDetailsContent: [ firstDescriptionStringProperty, secondDescriptionStringProperty ],
    interactionHintContent: interactionHintStringProperty
  } );

@author Jesse Greenberg (PhET Interactive Simulations)

## Class ScreenSummaryContent {: #ScreenSummaryContent }


```js
import { ScreenSummaryContent } from 'scenerystack/sim';
```
### Constructor

#### new ScreenSummaryContent( providedOptions? : <span style="font-weight: 400;">ScreenSummaryContentOptions</span> ) {: #ScreenSummaryContent-constructor data-toc-label='new ScreenSummaryContent' }

### Instance Methods

#### setPlayAreaContent( content : <span style="font-weight: 400;">SectionContent</span> ) {: #setPlayAreaContent data-toc-label='setPlayAreaContent' }

Set the content that describes the play area of the screen.

#### setControlAreaContent( content : <span style="font-weight: 400;">SectionContent</span> ) {: #setControlAreaContent data-toc-label='setControlAreaContent' }

Set the content that describes the control area of the screen.
@param content

#### setCurrentDetailsContent( content : <span style="font-weight: 400;">SectionContent</span> ) {: #setCurrentDetailsContent data-toc-label='setCurrentDetailsContent' }

Set the content that describes the current details of the screen.

#### setAdditionalContent( content : <span style="font-weight: 400;">SectionContent</span> ) {: #setAdditionalContent data-toc-label='setAdditionalContent' }

Set the content that describes the additional content for the screen. This is content that does not
fit into the play area, control area, or current details. This comes after the current details content, and
before the interaction hint content.

#### setInteractionHintContent( content : <span style="font-weight: 400;">SectionContent</span> ) {: #setInteractionHintContent data-toc-label='setInteractionHintContent' }

Set the content that describes the interaction hint for the screen.

#### getVoicingOverviewString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getVoicingOverviewString data-toc-label='getVoicingOverviewString' }

Returns the value of the combined voicing overview content. This is a string that includes all values for
the play area and control area content. It is spoken when the user presses the "Overview" button in the voicing
toolbar.

Your ScreenSummaryContent can override this function if you do not want to use the combined content.

#### getVoicingDetailsString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getVoicingDetailsString data-toc-label='getVoicingDetailsString' }

Returns the value of the combined voicing current details content. This is a string that includes all values for
the current details content. It is spoken when the user presses the "Details" button in the voicing
toolbar.

Your ScreenSummaryContent can override this function if you do not want to use the combined content.

#### getVoicingInteractionHintString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getVoicingInteractionHintString data-toc-label='getVoicingInteractionHintString' }

Returns the value of the combined voicing interaction hint content. This is a string that includes all values for
the interaction hint content. It is spoken when the user presses the "Hint" button in the voicing
toolbar.

Your ScreenSummaryContent can override this function if you do not want to use the combined content.



## Source Code

See the source for [ScreenSummaryContent.ts](https://github.com/phetsims/joist/blob/main/js/ScreenSummaryContent.ts) in the [joist](https://github.com/phetsims/joist) repository.

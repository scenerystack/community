# KeyboardHelpSectionRow

## Overview

A row of KeyboardHelpSection, containing the label, icon, and text. Many of the static functions of
KeyboardHelpSection will return a KeyboardHelpSectionRow. The label and icon are often grouped in an AlignGroup for
easy positioning in KeyboardHelpSection. This cannot be done in KeyboardHelpSection directly because different
labels and icons will have varying layout. For instance, see labelWithIcon vs labelWithIconList.

@author Jesse Greenberg (PhET Interactive Simulations)

## Class KeyboardHelpSectionRow {: #KeyboardHelpSectionRow }


```js
import { KeyboardHelpSectionRow } from 'scenerystack/scenery-phet';
```
### Constructor

#### new KeyboardHelpSectionRow( text : <span style="font-weight: 400;">[Text](../scenery/Text.md) | [RichText](../scenery/RichText.md)</span>, label : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, icon : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">KeyboardHelpSectionRowOptions</span> ) {: #KeyboardHelpSectionRow-constructor data-toc-label='new KeyboardHelpSectionRow' }

### Instance Methods

#### setContentsVisible( visible : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setContentsVisible data-toc-label='setContentsVisible' }

Sets visibility of the label, icon, and text so that it can be hidden if necessary. If using
KeyboardHelpSection, this will also correctly layout the content because of scenery dynamic layout.

### Instance Properties

#### text : <span style="font-weight: 400;">[Text](../scenery/Text.md) | [RichText](../scenery/RichText.md)</span> {: #text data-toc-label='text' }

(readonly)

Includes a reference to the Text because KeyboardHelpSection will constrain the width of all text in its
KeyboardHelpSectionRows for i18n.

#### label : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #label data-toc-label='label' }

(readonly)

A layout Node containing the readable Text describing this row.

#### icon : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #icon data-toc-label='icon' }

(readonly)

An icon Node graphically showing the keyboard keys for this row.

#### readingBlockContent : <span style="font-weight: 400;">[VoicingResponse](../utterance-queue/ResponsePacket.md#VoicingResponse) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #readingBlockContent data-toc-label='readingBlockContent' }

(readonly)

voicing - When Voicing is enabled, this is the content for this row that will be spoken with speech synthesis
when the row is activated with a click.

### Static Methods

#### labelWithIcon( labelString : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span>, icon : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">LabelWithIconOptions</span> ) : <span style="font-weight: 400;">[KeyboardHelpSectionRow](../scenery-phet/KeyboardHelpSectionRow.md)</span> {: #labelWithIcon data-toc-label='labelWithIcon' }

Horizontally align a label and an icon, with the label on the left and the icon on the right. AlignGroup is used
to give the label and icon identical dimensions for easy layout in KeyboardHelpSection.

#### labelWithIconList( labelString : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span>, icons : <span style="font-weight: 400;">[Node](../scenery/Node.md)[]</span>, providedOptions? : <span style="font-weight: 400;">LabelWithIconListOptions</span> ) : <span style="font-weight: 400;">[KeyboardHelpSectionRow](../scenery-phet/KeyboardHelpSectionRow.md)</span> {: #labelWithIconList data-toc-label='labelWithIconList' }

Create a label with a list of icons. The icons will be vertically aligned, each separated by 'or' text. The
label will be vertically centered with the first item in the list of icons. To vertically align the label
with the first icon, AlignGroup is used. Finally, an AlignGroup is used to make the label
content match height with the entire icon list. When assembled, the label with icon list will look like:

This is the label: Icon1 or
                   Icon2 or
                   Icon3

#### fromHotkeyData( hotkeyData : <span style="font-weight: 400;">[HotkeyData](../scenery/HotkeyData.md)</span>, providedOptions? : <span style="font-weight: 400;">FromHotkeyDataOptions</span> ) : <span style="font-weight: 400;">[KeyboardHelpSectionRow](../scenery-phet/KeyboardHelpSectionRow.md)</span> {: #fromHotkeyData data-toc-label='fromHotkeyData' }

Create a row for the keyboard help dialog from a HotkeyData object. Optionally override the icons and labels if
you want to customize the row so it is different from the actual key data.

### Static Properties

#### LABEL_FONT {: #LABEL_FONT data-toc-label='LABEL_FONT' }

(readonly)

Reusable font style and size for the KeyboardHelpDialog labels.



## Source Code

See the source for [KeyboardHelpSectionRow.ts](https://github.com/phetsims/scenery-phet/blob/main/js/keyboard/help/KeyboardHelpSectionRow.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.

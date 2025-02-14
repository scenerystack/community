# KeyboardHelpSection

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/keyboard/help/KeyboardHelpSection.ts](https://github.com/phetsims/scenery-phet/blob/main/js/keyboard/help/KeyboardHelpSection.ts) for the most up-to-date information.

## Overview

KeyboardHelpSection contains a section of text and icons for a KeyboardHelpDialog. Typically multiple KeyboardHelpSections
are assembled to describe the keyboard interactions for the sim. Takes a heading string for the section label and
an array of contents for rows of labels and icons.

This type has many static functions for creating and laying out rows of content.
Default values for spacing and fonts are also available through statics if necessary.

Help sections are aligned with two groups. Text labels are aligned in one VBox, icons are aligned in another. To
structure the accessible content, we chose to instrument a11y on the icons in the section. To label content
in your own KeyboardHelpSection, instrument the icons not the label Text so a11y content is placed correctly in the DOM.
KeyboardHelpSections are generally a list of items, so each icon has a  tagName of 'li' be default.

@author Jesse Greenberg

## Class KeyboardHelpSection {: #KeyboardHelpSection }


```js
import { KeyboardHelpSection } from 'scenerystack/scenery-phet';
```
### Constructor

#### new KeyboardHelpSection( headingString : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span>, content : <span style="font-weight: 400;">[KeyboardHelpSectionRow](../scenery-phet/KeyboardHelpSectionRow.md)[]</span>, providedOptions? : <span style="font-weight: 400;">[KeyboardHelpSectionOptions](../scenery-phet/KeyboardHelpSection.md#KeyboardHelpSectionOptions)</span> ) {: #KeyboardHelpSection-constructor data-toc-label='new KeyboardHelpSection' }

### Instance Methods



### Static Methods

#### alignHelpSectionIcons( sectionArray : <span style="font-weight: 400;">[KeyboardHelpSection](../scenery-phet/KeyboardHelpSection.md)[]</span> ) {: #alignHelpSectionIcons data-toc-label='alignHelpSectionIcons' }

Vertically align icons for a number of different KeyboardHelpSections. Useful when two KeyboardHelpSection
sections are stacked vertically in a Dialog. Loops through sectionArray and finds the max x value of the left
edge of the icon VBox. Then increases spacing of all other content HBoxes accordingly.

### Static Properties

#### DEFAULT_VERTICAL_ICON_SPACING {: #DEFAULT_VERTICAL_ICON_SPACING data-toc-label='DEFAULT_VERTICAL_ICON_SPACING' }

(readonly)



## Type KeyboardHelpSectionOptions {: #KeyboardHelpSectionOptions }


```js
import type { KeyboardHelpSectionOptions } from 'scenerystack/scenery-phet';
```


- **headingOptions**?: [RichTextOptions](../scenery/RichText.md#RichTextOptions)
<br>  propagated to the Text for the section heading
- **textMaxWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Used as maxWidth for each KeyboardHelpSectionRow.text
- **vBoxOptions**?: [StrictOmit](../phet-core/StrictOmit.md)&lt;[VBoxOptions](../scenery/VBox.md#VBoxOptions), "tagName"&gt;
<br>  propagated to VBox for layout
- **a11yContentTagName**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  tag name for the entire content, usually content is a list of items
- &amp; [ReadingBlockOptions](../scenery/ReadingBlock.md#ReadingBlockOptions) &amp; [VBoxOptions](../scenery/VBox.md#VBoxOptions)




## Source Code

See the source for [KeyboardHelpSection.ts](https://github.com/phetsims/scenery-phet/blob/main/js/keyboard/help/KeyboardHelpSection.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.

# PreferencesDialog

## Overview

Dialog with preferences to enable or disable various features for the simulation. Groups of preferences are
organized and displayed in a tab panel.

Once the dialog is created it is never destroyed so listeners and components do not need to be disposed.

@author Jesse Greenberg (PhET Interactive Simulations)

## Class PreferencesDialog {: #PreferencesDialog }


```js
import { PreferencesDialog } from 'scenerystack/sim';
```
### Constructor

#### new PreferencesDialog( preferencesModel : <span style="font-weight: 400;">[PreferencesModel](../sim/PreferencesModel.md)</span>, providedOptions? : <span style="font-weight: 400;">PreferencesDialogOptions</span> ) {: #PreferencesDialog-constructor data-toc-label='new PreferencesDialog' }

### Instance Methods

#### focusSelectedTab() {: #focusSelectedTab data-toc-label='focusSelectedTab' }

Move focus to the selected tab. Generally to be used when opening the dialog.

### Static Properties

#### TAB_FONT {: #TAB_FONT data-toc-label='TAB_FONT' }

(readonly)

Font and options for the text that labels a tab in the dialog.

#### TAB_OPTIONS {: #TAB_OPTIONS data-toc-label='TAB_OPTIONS' }

(readonly)

#### TITLE_FONT {: #TITLE_FONT data-toc-label='TITLE_FONT' }

(readonly)

The font for a title of a panel in the dialog.

#### CONTENT_FONT {: #CONTENT_FONT data-toc-label='CONTENT_FONT' }

(readonly)

The font, max width, and options for most text content in the dialog.

#### CONTENT_MAX_WIDTH {: #CONTENT_MAX_WIDTH data-toc-label='CONTENT_MAX_WIDTH' }

(readonly)

#### PANEL_SECTION_CONTENT_OPTIONS {: #PANEL_SECTION_CONTENT_OPTIONS data-toc-label='PANEL_SECTION_CONTENT_OPTIONS' }

(readonly)

#### PANEL_SECTION_LABEL_FONT {: #PANEL_SECTION_LABEL_FONT data-toc-label='PANEL_SECTION_LABEL_FONT' }

(readonly)

The font, max width, and options for a label for a section of content in the dialog.

#### PANEL_SECTION_LABEL_MAX_WIDTH {: #PANEL_SECTION_LABEL_MAX_WIDTH data-toc-label='PANEL_SECTION_LABEL_MAX_WIDTH' }

(readonly)

#### PANEL_SECTION_LABEL_OPTIONS {: #PANEL_SECTION_LABEL_OPTIONS data-toc-label='PANEL_SECTION_LABEL_OPTIONS' }

(readonly)

#### CONTENT_SPACING {: #CONTENT_SPACING data-toc-label='CONTENT_SPACING' }

(readonly)

Default spacing between unique items in a preferences dialog

#### VERTICAL_CONTENT_SPACING {: #VERTICAL_CONTENT_SPACING data-toc-label='VERTICAL_CONTENT_SPACING' }

(readonly)

Default vertical spacing between grouped items (radio buttons, vertical checkboxes, ...)

#### CONTENT_INDENTATION_SPACING {: #CONTENT_INDENTATION_SPACING data-toc-label='CONTENT_INDENTATION_SPACING' }

(readonly)

Content or UI component intendentation under a PreferencesPanelSection title.

#### LABEL_CONTENT_SPACING {: #LABEL_CONTENT_SPACING data-toc-label='LABEL_CONTENT_SPACING' }

(readonly)

Default vertical spacing between a label and its collection of contents for a control in the dialog.



## Source Code

See the source for [PreferencesDialog.ts](https://github.com/phetsims/joist/blob/main/js/preferences/PreferencesDialog.ts) in the [joist](https://github.com/phetsims/joist) repository.

# PreferencesPanelSection

## Overview

A section of content in a PreferencesPanel of the PreferencseDialog. Handles layout for the title of the section
and its content. The preferences panels are responsible for layout of multiple PreferencesTabPanelSections.

@author Jesse Greenberg (PhET Interactive Simulations)

## Class PreferencesPanelSection {: #PreferencesPanelSection }


```js
import { PreferencesPanelSection } from 'scenerystack/sim';
```
### Constructor

#### new PreferencesPanelSection( providedOptions? : <span style="font-weight: 400;">[PreferencesPanelSectionOptions](../sim/PreferencesPanelSection.md#PreferencesPanelSectionOptions)</span> ) {: #PreferencesPanelSection-constructor data-toc-label='new PreferencesPanelSection' }

### Instance Methods





## Type PreferencesPanelSectionOptions {: #PreferencesPanelSectionOptions }


```js
import type { PreferencesPanelSectionOptions } from 'scenerystack/sim';
```


- **titleNode**?: [Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  if provided, will be the title for the section and content will be nested under the titleNode
  indented with contentLeftMargin
- **contentNode**?: [Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  if provided, the content for the section which will be nested under the titleNode
- **contentNodeOptions**?: [StrictOmit](../phet-core/StrictOmit.md)&lt;[NodeOptions](../scenery/Node.md#NodeOptions), "children"&gt;
- **contentLeftMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  indentation for the contentNode (if provided) for layout as it is nested under the titleNode
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[VBoxOptions](../scenery/VBox.md#VBoxOptions), "children"&gt;




## Source Code

See the source for [PreferencesPanelSection.ts](https://github.com/phetsims/joist/blob/main/js/preferences/PreferencesPanelSection.ts) in the [joist](https://github.com/phetsims/joist) repository.

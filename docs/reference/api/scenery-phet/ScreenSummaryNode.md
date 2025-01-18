# ScreenSummaryNode

## Overview

A node that creates a summary of the screen in the PDOM. This type prevents duplicated code because
all screens have an instance of this node that is accessible on the ScreenView type.
Do not set the pdomOrder of this Node, as it is ordered in its constructor to accept new children in the
proper place. TODO: Add assertions for this, see https://github.com/phetsims/joist/issues/511
USAGE: To add content to the screen overview in the PDOM, simply `this.screenSummaryNode.addChild( myNode() )` from
the ScreenView subtype, where myNode has accessible content to be displayed in the PDOM.

@author Michael Kauzmann (PhET Interactive Simulations)

## Class ScreenSummaryNode {: #ScreenSummaryNode }


```js
import { ScreenSummaryNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new ScreenSummaryNode() {: #ScreenSummaryNode-constructor data-toc-label='new ScreenSummaryNode' }

### Instance Methods

#### setIntroString( simName : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, screenDisplayName : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, isMultiScreen : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setIntroString data-toc-label='setIntroString' }

The parameters are not known in the constructor, so the intro string can be filled after instantiation.
@param simName
@param screenDisplayName - with the word "Screen" in it, like "Explore Screen"
@param isMultiScreen - if the sim has multiple screens



## Source Code

See the source for [ScreenSummaryNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/accessibility/nodes/ScreenSummaryNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.

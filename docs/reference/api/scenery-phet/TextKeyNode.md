# TextKeyNode

## Overview

TextKeyNode is a KeyNode with a text icon. It has layout, spacing, and defaults for KeyNode that are suited for text.

@author Jesse Greenberg

## Class TextKeyNode {: #TextKeyNode }


```js
import { TextKeyNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new TextKeyNode( string : <span style="font-weight: 400; opacity: 80%;">string | TReadOnlyProperty&lt;string&gt;</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">TextKeyNodeOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods



### Static Methods

#### getAltKeyString() : <span style="font-weight: 400; opacity: 80%;">PhetioProperty&lt;string&gt;</span> {: #getAltKeyString data-toc-label='getAltKeyString' }

Returns the correct platform dependent key string for "Alt". "Alt" on Windows, "Option" on Mac.

#### altOrOption( providedOptions? : <span style="font-weight: 400; opacity: 80%;">KeyNodeOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">KeyNode</span> {: #altOrOption data-toc-label='altOrOption' }

-------------------------------------------------------------------------------------------------
Static factory methods for specific text strings. For brevity, these methods have the same names
as their string keys. For example SceneryPhetStrings.key.esc is rendered by the esc method.
-------------------------------------------------------------------------------------------------
Note that this will render "Alt" OR "Options", depending on platform. If there is a description of this icon
in the PDOM please use getAltKeyString().

#### capsLock( providedOptions? : <span style="font-weight: 400; opacity: 80%;">KeyNodeOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">KeyNode</span> {: #capsLock data-toc-label='capsLock' }

#### esc( providedOptions? : <span style="font-weight: 400; opacity: 80%;">KeyNodeOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">KeyNode</span> {: #esc data-toc-label='esc' }

#### end( providedOptions? : <span style="font-weight: 400; opacity: 80%;">KeyNodeOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">KeyNode</span> {: #end data-toc-label='end' }

#### enter( providedOptions? : <span style="font-weight: 400; opacity: 80%;">KeyNodeOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">KeyNode</span> {: #enter data-toc-label='enter' }

#### fn( providedOptions? : <span style="font-weight: 400; opacity: 80%;">KeyNodeOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">KeyNode</span> {: #fn data-toc-label='fn' }

#### home( providedOptions? : <span style="font-weight: 400; opacity: 80%;">KeyNodeOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">KeyNode</span> {: #home data-toc-label='home' }

#### pageDown( providedOptions? : <span style="font-weight: 400; opacity: 80%;">KeyNodeOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">KeyNode</span> {: #pageDown data-toc-label='pageDown' }

#### pageUp( providedOptions? : <span style="font-weight: 400; opacity: 80%;">KeyNodeOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">KeyNode</span> {: #pageUp data-toc-label='pageUp' }

#### space( providedOptions? : <span style="font-weight: 400; opacity: 80%;">KeyNodeOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">KeyNode</span> {: #space data-toc-label='space' }

#### shift( providedOptions? : <span style="font-weight: 400; opacity: 80%;">KeyNodeOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">KeyNode</span> {: #shift data-toc-label='shift' }

#### tab( providedOptions? : <span style="font-weight: 400; opacity: 80%;">KeyNodeOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">KeyNode</span> {: #tab data-toc-label='tab' }



## Source Code

See the source for [TextKeyNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/keyboard/TextKeyNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.

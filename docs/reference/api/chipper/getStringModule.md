# getStringModule

## Overview

Given a requirejsNamespace, we filter out strings from phet.chipper.strings that start with it, and construct an
object with locale fallbacks already pre-computed, so that the correct strings can be accessed via object literal
access, e.g. getStringModule( 'JOIST' ).ResetAllButton.name will give the desired string value for whatever locale
the sim is being run with.

A string "key" is in the form of "NAMESPACE/key.from.strings.json"

NOTE: This file likely belongs in joist/js/i18n/, but should stay here to make maintenance-release maintainability easier.

@author Jonathan Olson &lt;jonathan.olson&gt;



## Source Code

See the source for [getStringModule.ts](https://github.com/phetsims/chipper/blob/main/js/browser/getStringModule.ts) in the [chipper](https://github.com/phetsims/chipper) repository.

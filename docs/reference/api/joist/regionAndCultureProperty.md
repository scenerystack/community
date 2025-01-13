# regionAndCultureProperty

## Overview

In this file:

regionAndCultureProperty is a global Property used to set aspects of i18n that are related to region and/or culture,
but that do not pertain to language (see localeProperty for language).

The type RegionAndCulture defines the complete set of choices for regionAndCultureProperty. The choices supported by
a sim are defined in package.json via "supportedRegionsAndCultures", and determines the value of
supportedRegionAndCultureValues. Whether included explicitly or implicitly, 'usa' is always choice, because it
is the fallback.

The initial value of regionAndCultureProperty can be specified in package.json and via a query parameter.
In package.json, "defaultRegionAndCulture" identifies the initial choice, and defaults to 'usa'.
Use the ?regionAndCulture query parameter to override the default, for example ?regionAndCulture=asia

@author Marla Schulz (PhET Interactive Simulations)
@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;
@author Chris Malley (PixelZoom, Inc.)



## Source Code

See the source for [regionAndCultureProperty.ts](https://github.com/phetsims/joist/blob/main/js/i18n/regionAndCultureProperty.ts) in the [joist](https://github.com/phetsims/joist) repository.

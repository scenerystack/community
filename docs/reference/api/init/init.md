# init

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenerystack/blob/main/init.ts](https://github.com/phetsims/scenerystack/blob/main/init.ts) for the most up-to-date information.

## Overview



## Type InitOptions {: #InitOptions }


Initialization of simulation contexts.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

```js
import type { InitOptions } from 'scenerystack/init';
```


- **name**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
<br>  REQUIRED VALUES
  The "internal" name of the simulation (e.g. 'energy-skate-park'), usually used for the npm package name
- **version**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
<br>  A semver string, e.g. '1.0.0'
- **splashDataURI**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
<br>  The URI for the splash screen data, which is a base64 encoded image (usually a PNG)
- **brand**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
<br>  OPTIONS
  The "internal" name of the brand (e.g. 'made-with-scenerystack')
- **locale**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
<br>  The initial locale. Should be one of the keys of the localeData object (see
  https://github.com/phetsims/babel/blob/main/localeData.json).
- **availableLocales**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>[]
<br>  All of the available locales for the translation (what is supported by the simulation, since it can be set by the
  ?locale=... query parameter, or switched dynamically if the allowLocaleSwitching below is true).
- **allowLocaleSwitching**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Whether the simulation allows switching locale dynamically (via the Preferences dialog, for example).
- **supportsDynamicLocale**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Sim Features (will document soon)
- **supportsInteractiveDescription**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **supportsInteractiveHighlights**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **supportsVoicing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **supportsPanAndZoom**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **supportsSound**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **colorProfiles**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>[]
- **supportedRegionsAndCultures**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>




## Source Code

See the source for [init.ts](https://github.com/phetsims/scenerystack/blob/main/init.ts) in the [scenerystack](https://github.com/phetsims/scenerystack) repository.

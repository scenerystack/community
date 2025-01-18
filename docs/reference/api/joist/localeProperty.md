# localeProperty

## Overview

A universal locale Property that is accessible independently of the running Sim instance.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type Locale {: #Locale }


Hard coding a few locales here is better than relying on a generated output of the "ground truth" localeData in babel,
which could change at any time and cause a type error here (either on main or worse, in release branches). Also we
could reach the TypeScript maximum for number of string union entries, (see https://github.com/microsoft/TypeScript/issues/41160#issuecomment-1287271132).
Feel free to add any locale here as needed for the type.
JO 2024-12-23: This is blocking scenerystack manually specifying locales.
JO: manually adding full list of locales.

```js
import type { Locale } from 'scenerystack/joist';
```


"aa" | "ab" | "ac" | "ad" | "af" | "ag" | "ah" | "ai" | "aj" | "ak" | "ak_FT" | "al" | "am" | "an" | "ao" | "ap" | "ar" | "ar_AE" | "ar_BH" | "ar_DJ" | "ar_DZ" | "ar_EG" | "ar_EH" | "ar_ER" | "ar_IQ" | "ar_JO" | "ar_KM" | "ar_KW" | "ar_LB" | "ar_LY" | "ar_MA" | "ar_MR" | "ar_OM" | "ar_QA" | "ar_SA" | "ar_SD" | "ar_SO" | "ar_SY" | "ar_TD" | "ar_TN" | "ar_YE" | "as" | "at" | "au" | "av" | "aw" | "ax" | "ay" | "az" | "ba" | "bb" | "bc" | "bd" | "be" | "bg" | "bi" | "bj" | "bk" | "bl" | "bm" | "bn" | "bo" | "bp" | "bq" | "br" | "bs" | "bt" | "bu" | "bx" | "by" | "ca" | "cb" | "cc" | "cd" | "ce" | "ch" | "ci" | "cj" | "ck" | "cl" | "cm" | "cn" | "co" | "cp" | "cq" | "cr" | "cs" | "ct" | "cv" | "cw" | "cy" | "cz" | "da" | "db" | "de" | "de_AT" | "de_CH" | "de_LI" | "de_LU" | "dg" | "di" | "dk" | "dl" | "dm" | "dn" | "dr" | "ds" | "du" | "dv" | "dw" | "dy" | "dz" | "ed" | "ee" | "ef" | "ek" | "el" | "em" | "en" | "en_AU" | "en_BI" | "en_BW" | "en_BZ" | "en_CA" | "en_CB" | "en_CM" | "en_ER" | "en_ET" | "en_GB" | "en_GH" | "en_GM" | "en_IE" | "en_IN" | "en_JM" | "en_KE" | "en_LR" | "en_LS" | "en_MU" | "en_MW" | "en_MY" | "en_NA" | "en_NG" | "en_NZ" | "en_PH" | "en_RW" | "en_SC" | "en_SL" | "en_SS" | "en_SZ" | "en_TT" | "en_TZ" | "en_UG" | "en_ZA" | "en_ZM" | "en_ZW" | "er" | "es" | "es_AR" | "es_BO" | "es_CL" | "es_CO" | "es_CR" | "es_DO" | "es_EC" | "es_ES" | "es_GQ" | "es_GT" | "es_HN" | "es_MX" | "es_NI" | "es_PA" | "es_PE" | "es_PR" | "es_PY" | "es_SV" | "es_US" | "es_UY" | "es_VE" | "et" | "eu" | "ew" | "fa" | "fa_DA" | "ff" | "fg" | "fi" | "fj" | "fl" | "fn" | "fo" | "fr" | "fr_BE" | "fr_BF" | "fr_BI" | "fr_BJ" | "fr_CA" | "fr_CD" | "fr_CF" | "fr_CG" | "fr_CH" | "fr_CI" | "fr_CM" | "fr_DJ" | "fr_EH" | "fr_GA" | "fr_GN" | "fr_GQ" | "fr_KM" | "fr_LU" | "fr_MC" | "fr_MG" | "fr_ML" | "fr_NE" | "fr_RW" | "fr_SC" | "fr_SN" | "fr_TD" | "fr_TG" | "fs" | "fu" | "fy" | "ga" | "gb" | "gc" | "gd" | "gf" | "gg" | "gk" | "gl" | "gn" | "go" | "gr" | "gs" | "gt" | "gu" | "gv" | "gw" | "gy" | "ha" | "hd" | "hh" | "hi" | "hk" | "hl" | "hm" | "hn" | "ho" | "hp" | "hr" | "hr_BA" | "hs" | "ht" | "hu" | "hw" | "hx" | "hy" | "hz" | "ib" | "ig" | "ih" | "ii" | "ik" | "il" | "im" | "in" | "iq" | "is" | "it" | "it_CH" | "iu" | "iv" | "iw" | "ix" | "ja" | "jb" | "jp" | "jr" | "jv" | "ka" | "kb" | "kc" | "kd" | "ke" | "kf" | "kg" | "kh" | "ki" | "kj" | "kk" | "kl" | "km" | "kn" | "ko" | "kp" | "kq" | "kr" | "ks" | "kt" | "ku" | "ku_TR" | "kv" | "kw" | "kx" | "ky" | "kz" | "lb" | "ld" | "lg" | "lh" | "li" | "lk" | "ll" | "lm" | "ln" | "lo" | "lp" | "ls" | "lt" | "lu" | "lv" | "lw" | "lx" | "ly" | "lz" | "ma" | "mb" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mi" | "mk" | "ml" | "mm" | "mn" | "mo" | "mq" | "mr" | "ms" | "ms_MY" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nb" | "nc" | "nd" | "ne" | "nf" | "ng" | "nh" | "ni" | "nk" | "nl" | "nl_BE" | "nm" | "nn" | "np" | "nq" | "nr" | "ns" | "nt" | "nu" | "nv" | "nw" | "nx" | "ny" | "nz" | "oa" | "oc" | "oe" | "og" | "oi" | "oj" | "ok" | "ol" | "om" | "oo" | "op" | "or" | "os" | "ot" | "ou" | "pa" | "pg" | "pl" | "pm" | "pn" | "pp" | "ps" | "pt" | "pt_AO" | "pt_BR" | "pt_CV" | "pt_GQ" | "pt_GW" | "pt_MZ" | "pt_ST" | "pu" | "qc" | "qe" | "qu" | "ra" | "rb" | "rc" | "re" | "rh" | "ri" | "rj" | "rl" | "rn" | "ro" | "rp" | "rr" | "ru" | "rw" | "ry" | "rz" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sp" | "sq" | "sr" | "sr_BA" | "ss" | "st" | "su" | "sv" | "sv_FI" | "sw" | "sx" | "sy" | "sz" | "ta" | "tc" | "te" | "tg" | "th" | "ti" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tq" | "tr" | "ts" | "tt" | "tu" | "tv" | "tw" | "tx" | "ty" | "tz" | "ua" | "ud" | "ug" | "ui" | "uk" | "um" | "un" | "ur" | "ut" | "uy" | "uz" | "va" | "ve" | "vi" | "vs" | "vt" | "wa" | "wl" | "wo" | "wr" | "ws" | "xa" | "xh" | "xl" | "xr" | "xs" | "xt" | "ya" | "yi" | "yk" | "yn" | "yo" | "yp" | "za" | "ze" | "zg" | "zh_CN" | "zh_HK" | "zh_MO" | "zh_SG" | "zh_TW" | "zn" | "zp" | "zt" | "zu" | "zz"



## Class LocaleProperty {: #LocaleProperty }


```js
import { LocaleProperty } from 'scenerystack/joist';
```
### Constructor

#### new LocaleProperty( value : <span style="font-weight: 400;">[Locale](../joist/localeProperty.md#Locale)</span>, providedOptions? : <span style="font-weight: 400;">LocalePropertyOptions</span> ) {: #LocaleProperty-LocaleProperty-constructor data-toc-label='new LocaleProperty-LocaleProperty' }

### Instance Methods

#### unguardedSet( value : <span style="font-weight: 400;">[Locale](../joist/localeProperty.md#Locale)</span> ) {: #LocaleProperty-unguardedSet data-toc-label='LocaleProperty-unguardedSet' }

(protected)

Override to provide grace and support for the full definition of allowed locales (aligned with the query parameter
schema). For example three letter values, and case insensitivity. See checkAndRemapLocale() for details. NOTE that
this will assert if the locale doesn't match the right format.

#### toStateObject() : <span style="font-weight: 400;">[ReadOnlyPropertyState](../axon/ReadOnlyProperty.md#ReadOnlyPropertyState)&lt;StateType&gt;</span> {: #LocaleProperty-toStateObject data-toc-label='LocaleProperty-toStateObject' }

(protected)

This improves the PhET-iO Studio interface, by giving available values, without triggering validation if you want
to use the more general locale schema (three digit/case-insensitive/etc).

### Instance Properties

#### availableRuntimeLocales : <span style="font-weight: 400;">[Locale](../joist/localeProperty.md#Locale)[]</span> {: #LocaleProperty-availableRuntimeLocales data-toc-label='LocaleProperty-availableRuntimeLocales' }

(readonly)



## Source Code

See the source for [localeProperty.ts](https://github.com/phetsims/joist/blob/main/js/i18n/localeProperty.ts) in the [joist](https://github.com/phetsims/joist) repository.

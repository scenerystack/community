# AriaLiveAnnouncer

## Overview

A static object used to send aria-live updates to a screen reader. These are alerts that are independent of user
focus. This will create and reference 'aria-live' elements in the HTML document and update their content. You
will need to get these elements and add them to the document through a reference to this.ariaLiveElements.
A number of elements such as the following are created and used:

   &lt;p id="elements-1-polite-1" aria-live="polite"&gt;&lt;/p&gt;
   &lt;p id="elements-1-polite-2" aria-live="polite"&gt;&lt;/p&gt;
   &lt;p id="elements-1-polite-3" aria-live="polite"&gt;&lt;/p&gt;
   &lt;p id="elements-1-polite-4" aria-live="polite"&gt;&lt;/p&gt;

   &lt;p id="elements-1-assertive-1" aria-live="assertive"&gt;&lt;/p&gt;
   &lt;p id="elements-1-assertive-2" aria-live="assertive"&gt;&lt;/p&gt;
   &lt;p id="elements-1-assertive-3" aria-live="assertive"&gt;&lt;/p&gt;
   &lt;p id="elements-1-assertive-4" aria-live="assertive"&gt;&lt;/p&gt;

It was discovered that cycling through using these elements prevented a VoiceOver bug where alerts would interrupt
each other. Starting from the first element, content is set on each element in order and cycles through.

Many aria-live and related attributes were tested, but none were well supported or particularly useful for PhET sims,
see https://github.com/phetsims/chipper/issues/472.

@author Jesse Greenberg
@author John Blanco
eslint-disable-next-line phet/bad-sim-text

## Class AriaLiveAnnouncer {: #AriaLiveAnnouncer }


```js
import { AriaLiveAnnouncer } from 'scenerystack/utterance-queue';
```
### Constructor

#### new AriaLiveAnnouncer( providedOptions? : <span style="font-weight: 400;">[AriaLiveAnnouncerOptions](../utterance-queue/AriaLiveAnnouncer.md#AriaLiveAnnouncerOptions)</span> ) {: #AriaLiveAnnouncer-constructor data-toc-label='new AriaLiveAnnouncer' }

### Instance Methods

#### announce( announceText : <span style="font-weight: 400;">[ResolvedResponse](../utterance-queue/ResponsePacket.md#ResolvedResponse)</span>, utterance : <span style="font-weight: 400;">[Utterance](../utterance-queue/Utterance.md)</span>, providedOptions? : <span style="font-weight: 400;">AriaLiveAnnouncerAnnounceOptions</span> ) {: #announce data-toc-label='announce' }

Announce an alert, setting textContent to an aria-live element.

#### cancel() {: #cancel data-toc-label='cancel' }

The implementation of cancel for AriaLiveAnnouncer. We do not know whether the AT is speaking content so
this function is a no-op for aria-live.

#### cancelUtterance( utterance : <span style="font-weight: 400;">[Utterance](../utterance-queue/Utterance.md)</span> ) {: #cancelUtterance data-toc-label='cancelUtterance' }

The implementation of cancelUtterance for AriaLiveAnnouncer. We do not know whether the AT is speaking content so
this function is a no-op for aria-live.

### Instance Properties

#### ariaLiveContainer : <span style="font-weight: 400;">HTMLDivElement</span> {: #ariaLiveContainer data-toc-label='ariaLiveContainer' }

(readonly)

### Static Properties

#### ARIA_LIVE_DELAY {: #ARIA_LIVE_DELAY data-toc-label='ARIA_LIVE_DELAY' }

(readonly)

The Announcer only speaks one Utterance per this interval or else VoiceOver reads alerts out of order.
This is also the interval at which alert content is cleared from the DOM once set so that it cannot be found
with the virtual cursor after setting.

#### AriaLive {: #AriaLive data-toc-label='AriaLive' }

(readonly)

Possible values for the `aria-live` attribute (priority) that can be alerted (like "polite" and
"assertive"), see AriaLiveAnnounceOptions for details.



## Class AriaLive {: #AriaLive }


Possible supported values for the `aria-live` attributes created in AriaLiveAnnouncer.

```js
import { AriaLive } from 'scenerystack/utterance-queue';
```
### Constructor

#### new AriaLive( attributeString : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) {: #AriaLive-AriaLive-constructor data-toc-label='new AriaLive-AriaLive' }

### Instance Methods



### Static Properties

#### POLITE : <span style="font-weight: 400;">[AriaLive](../utterance-queue/AriaLiveAnnouncer.md#AriaLive)</span> {: #AriaLive-POLITE data-toc-label='AriaLive-POLITE' }

(readonly)

#### ASSERTIVE : <span style="font-weight: 400;">[AriaLive](../utterance-queue/AriaLiveAnnouncer.md#AriaLive)</span> {: #AriaLive-ASSERTIVE data-toc-label='AriaLive-ASSERTIVE' }

(readonly)

#### enumeration : <span style="font-weight: 400;">[Enumeration](../phet-core/Enumeration.md)</span> {: #AriaLive-enumeration data-toc-label='AriaLive-enumeration' }

(readonly)



## Type AriaLiveAnnouncerOptions {: #AriaLiveAnnouncerOptions }


```js
import type { AriaLiveAnnouncerOptions } from 'scenerystack/utterance-queue';
```


- **lang**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
<br>  The language for your content. Changing this will impact the speech engine of a screen reader.
- &amp; [AnnouncerOptions](../utterance-queue/Announcer.md#AnnouncerOptions)




## Source Code

See the source for [AriaLiveAnnouncer.ts](https://github.com/phetsims/utterance-queue/blob/main/js/AriaLiveAnnouncer.ts) in the [utterance-queue](https://github.com/phetsims/utterance-queue) repository.

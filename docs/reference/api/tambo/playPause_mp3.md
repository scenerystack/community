# playPause_mp3

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/tambo/blob/main/sounds/playPause_mp3.js](https://github.com/phetsims/tambo/blob/main/sounds/playPause_mp3.js) for the most up-to-date information.

## Overview


<audio controls id="doc-audio">
<script type="module">
import { playPause_mp3 } from '/lib/scenerystack.esm.min.js';
import { audioBufferToURL } from '/js/audioBufferToURL.js';

playPause_mp3.audioBufferProperty.lazyLink( async audioBuffer => {
  document.querySelector( '#doc-audio' ).src = await audioBufferToURL( audioBuffer );
} );
</script>



## Source Code

See the source for [playPause_mp3.js](https://github.com/phetsims/tambo/blob/main/sounds/playPause_mp3.js) in the [tambo](https://github.com/phetsims/tambo) repository.

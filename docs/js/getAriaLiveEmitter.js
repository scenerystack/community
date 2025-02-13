import { Emitter } from '/lib/scenerystack.esm.min.js';

export const getAriaLiveEmitter = display => {
  const emitter = new Emitter();

  display.descriptionUtteranceQueue.announcer.ariaLiveContainer.childNodes.forEach( ariaLiveElement => {
    new MutationObserver( mutations => {
      mutations.forEach( mutation => {
        // Only display added DOM nodes. ariaLiveAnnouncer will remove the content from aria-live elements so that it
        // can't be read by the virtual cursor. This registers as a "mutation", but we don't want to display
        // the removal.
        if ( mutation.addedNodes.length > 0 ) {
          const alertText = mutation.target.textContent;
          const isAssertive = mutation.target.id.includes( 'assertive' );

          emitter.emit( alertText, isAssertive );
        }
      } );
    } ).observe( ariaLiveElement, {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true
    } );
  } );

  return emitter;
};
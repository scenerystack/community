import { StringProperty } from '/lib/scenerystack.esm.min.js';
import { beautifyPDOM } from './beautifyPDOM.js';

export const getPDOMHTMLProperty = display => {
  const property = new StringProperty( '' );

  const observer = new MutationObserver( () => {
    property.value = beautifyPDOM( display.getPDOMRootElement().innerHTML );
  } );
  observer.observe( display.getPDOMRootElement(), {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true
  } );

  property.getDisposeEmitter().addListener( () => {
    observer.disconnect();
  } );

  return property;
};
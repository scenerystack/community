import { StringProperty } from '/lib/scenerystack.esm.min.js';
import { beautifyPDOM } from './beautifyPDOM.js';

export const getPDOMHTMLProperty = display => {
  const property = new StringProperty( '' );

  new MutationObserver( () => {
    property.value = beautifyPDOM( display.getPDOMRootElement().innerHTML );
  } ).observe( display.getPDOMRootElement(), {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true
  } );

  return property;
};
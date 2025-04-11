import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const element = document.createElement( 'div' );
    element.style = 'width: 300px; display: flex; align-items: center; justify-content: space-between; gap: 8px;';
    element.innerHTML = `
      <label for="inputField">Type in me:</label>
      <input id="inputField" style="flex-grow: 1; border: 1px solid black;" type="text">
    `;

    const content = new DOM( element, {
      x: 50,
      rotation: Math.PI / 4,
      allowInput: true
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );
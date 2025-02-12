import { createSandbox } from "/js/createSandbox.js";

createSandbox( "cursors-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const cursors = [
      'pointer', 'none', 'move', 'grab', 'grabbing', 'zoom-in', 'zoom-out', 'cell', 'crosshair', 'wait', 'progress', 'help', 'text', 'vertical-text', 'alias', 'copy', 'no-drop', 'not-allowed', 'nesw-resize', 'nwse-resize', 'col-resize', 'row-resize', 'all-scroll', 'default',
      'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==) 2 2, auto',
    ];
    const content = new FlowBox( {
      wrap: true,
      spacing: 10,
      lineSpacing: 5,
      justify: 'left',
      preferredWidth: 500,
      children: cursors.map( cursor => new Panel( new Text( cursor.includes( 'url' ) ? 'url(png)' : cursor, {
        font: '16px sans-serif',
        fill: foregroundColor,
      } ), {
        xMargin: 10,
        yMargin: 10,
        opacity: 0.5,
        stroke: foregroundColor,
        fill: backgroundColor,
        cursor: cursor
      } ) )
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );
import { Rectangle, Text, Font } from '/lib/scenerystack.esm.min.js';

export const createLabeledBox = ( label, fill, width, height ) => {
  return new Rectangle( 0, 0, width, height, {
    stroke: 'black',
    fill: fill,
    children: [
      new Text( label, { font: new Font( { size: 8 } ), left: 3, bottom: height - 3 } )
    ]
  } );
};
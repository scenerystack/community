import { merge, Color, Shape, Path, Rectangle, DragListener, Node } from '/lib/scenerystack.esm.min.js';

export class ResizableNode extends Node {
  constructor( display, content, providedOptions ) {
    const options = merge( {
      widthResizable: false,
      heightResizable: false
    }, providedOptions );

    if ( options.widthResizable ) {
      content.preferredWidth = content.minimumWidth;
    }
    if ( options.heightResizable ) {
      content.preferredHeight = content.minimumHeight;
    }

    const resizeIconColor = new Color( 140, 140, 140 );
    const resizeBackgroundColor = new Color( 210, 210, 210 );
    const resizeStrokeColor = new Color( 140, 140, 140 );
    const resizeStrokeLineWidth = 0.5;

    const resizeHandleSize = 12;
    const space = 3;
    const radius = 1.2;
    const singleResizeShape = new Shape()
      .circle( 0, 0, radius ).close()
      .circle( space, space, radius ).close()
      .circle( 2 * space, 0, radius ).close()
      .circle( 3 * space, space, radius ).close()
      .circle( 4 * space, 0, radius ).close()
      .circle( 5 * space, space, radius ).close()
      .circle( 6 * space, 0, radius ).close()
      .circle( 7 * space, space, radius ).close()
      .circle( 8 * space, 0, radius ).close();
    const singleResizeIcon = new Path( singleResizeShape, {
      fill: resizeIconColor
    } );

    const fullResizePath = new Shape()
      .moveTo( 1, resizeHandleSize - 1 ).lineTo( resizeHandleSize - 1, 1 )
      .moveTo( 5, resizeHandleSize - 1 ).lineTo( resizeHandleSize - 1, 5 )
      .moveTo( 9, resizeHandleSize - 1 ).lineTo( resizeHandleSize - 1, 9 );
    const fullResizeIcon = new Path( fullResizePath, {
      stroke: resizeIconColor
    } );

    const horizontalDragHandle = new Rectangle( 0, 0, resizeHandleSize, resizeHandleSize, {
      fill: resizeBackgroundColor,
      stroke: resizeStrokeColor,
      lineWidth: resizeStrokeLineWidth,
      cursor: 'pointer',
      inputListeners: [
        new DragListener( {
          drag: ( event, listener ) => {
            content.preferredWidth = Math.min( display.width - resizeHandleSize, Math.max( content.minimumWidth, 2 * listener.modelPoint.x ) );
          }
        } )
      ],
      children: [ new Node( { children: [ singleResizeIcon ], rotation: -Math.PI / 2 } ) ]
    } );
    const verticalDragHandle = new Rectangle( 0, 0, resizeHandleSize, resizeHandleSize, {
      fill: resizeBackgroundColor,
      stroke: resizeStrokeColor,
      lineWidth: resizeStrokeLineWidth,
      cursor: 'pointer',
      inputListeners: [
        new DragListener( {
          drag: ( event, listener ) => {
            content.preferredHeight = Math.max( content.minimumHeight, listener.modelPoint.y );
          }
        } )
      ],
      children: [ new Node( { children: [ singleResizeIcon ] } ) ]
    } );
    const fullDragHandle = new Rectangle( 0, 0, resizeHandleSize + resizeStrokeLineWidth, resizeHandleSize + resizeStrokeLineWidth, {
      fill: resizeBackgroundColor,
      cursor: 'pointer',
      inputListeners: [
        new DragListener( {
          drag: ( event, listener ) => {
            content.preferredWidth = Math.min( display.width - resizeHandleSize, Math.max( content.minimumWidth, 2 * listener.modelPoint.x ) );
            content.preferredHeight = Math.max( content.minimumHeight, listener.modelPoint.y );
          }
        } )
      ],
      children: [
        fullResizeIcon
      ]
    } );

    options.children = [
      content,
      ...( options.widthResizable ? [ horizontalDragHandle ] : [] ),
      ...( options.heightResizable ? [ verticalDragHandle ] : [] ),
      ...( options.widthResizable && options.heightResizable ? [ fullDragHandle ] : [] )
    ];

    content.localBoundsProperty.link( () => {
      content.top = 0;
      content.centerX = 0;

      horizontalDragHandle.rectHeight = content.height - resizeStrokeLineWidth;
      verticalDragHandle.rectWidth = content.width - resizeStrokeLineWidth;

      horizontalDragHandle.children[ 0 ].center = horizontalDragHandle.selfBounds.center;
      verticalDragHandle.children[ 0 ].center = verticalDragHandle.selfBounds.center;

      horizontalDragHandle.left = content.right;
      horizontalDragHandle.centerY = content.centerY;

      verticalDragHandle.top = content.bottom;
      verticalDragHandle.centerX = content.centerX;

      fullDragHandle.left = content.right;
      fullDragHandle.top = content.bottom;
    } );

    super( options );
  }
}
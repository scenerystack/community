import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const width = 300;
    const height = 225;

    const threeNode = new ThreeNode( width, height, {
      backgroundColorProperty: new Property( Color.TRANSPARENT ),
      cameraPosition: new Vector3( 0, 0.7, 2.5 )
    } );

    // Camera settings
    threeNode.stage.threeCamera.lookAt( 0, 0, 0 );

    // Lights
    threeNode.stage.threeScene.add( new THREE.AmbientLight( 0x333333 ) );
    const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
    directionalLight.position.set( -1, 1.5, 0.8 );
    threeNode.stage.threeScene.add( directionalLight );

    const cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 );
    const cubeMaterial = new THREE.MeshLambertMaterial( {
      color: 0xFF0000
    } );

    const cubeMesh = new THREE.Mesh( cubeGeometry, cubeMaterial );
    threeNode.stage.threeScene.add( cubeMesh );

    stepEmitter.addListener( dt => {
      cubeMesh.rotateY( dt );
      threeNode.layout(); // adjust to display changes
      threeNode.render();
    } );

    const content = new VBox( {
      children: [
        threeNode,
        new TextPushButton( 'Change Color', {
          font: '20px sans-serif',
          listener: () => {
            cubeMaterial.color.set( Math.random() * 0xffffff );
          }
        } )
      ]
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );
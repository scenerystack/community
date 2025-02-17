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

    const exampleNode = new Keypad( Keypad.PositiveIntegerLayout, {
      scale: 3,
      left: 1,
      top: 1
    } );
    const size = Math.ceil( Math.max( exampleNode.width, exampleNode.height ) ) + 2;

    // Would call update() on the NodeTexture whenever it needs updates.
    const texture = new NodeTexture( exampleNode, {
      width: size,
      height: size
    } );

    const radius = 0.51;
    for ( let i = 0; i < 4; i++ ) {
      const angle = i * (Math.PI / 2);

      const label = new TextureQuad( texture, 0.8, 0.8 );
      label.geometry.translate( -0.4, 0, 0 );

      label.position.x = radius * Math.sin( angle );
      label.position.y = -0.4;
      label.position.z = radius * Math.cos( angle );
      label.rotation.y = angle;

      cubeMesh.add( label );
    }

    stepEmitter.addListener( dt => {
      cubeMesh.rotateY( dt );
      threeNode.layout(); // adjust to display changes
      threeNode.render();
    } );
    /*END*/
    return threeNode;
  } )();
  scene.addChild( box );
} );
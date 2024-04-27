import { useFrame, useLoader } from '@react-three/fiber';
import React, { useEffect } from 'react'
import { RepeatWrapping, TextureLoader } from 'three'

function FloatingGrid() {
    const diffuse = useLoader(TextureLoader, '/textures/ground.jpg');

    useEffect(() => {
      diffuse.wrapS = RepeatWrapping;
      diffuse.wrapT = RepeatWrapping;
      diffuse.anisotropy = 4;
      diffuse.repeat.set(30, 30);
      diffuse.offset.set(0, 0);
  }, [diffuse]);

  useFrame((state, delta) => {
      let t = state.clock.getElapsedTime() * 0.68;
      diffuse.offset.set(0, -t);
  });
 
  return (
    <mesh rotation-x={-Math.PI * 0.5} position={[0, 0, 0]}>
        <planeGeometry/>
        <meshBasicMaterial
         color={[1, 1, 1]}
         opacity={0.15}
         map={diffuse}
         alphaMap={diffuse}
         transparent={true}
        />
    </mesh>
  )
}

export default FloatingGrid

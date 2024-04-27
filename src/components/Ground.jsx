import { MeshReflectorMaterial } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect } from "react";
import { LinearEncoding, RepeatWrapping, TextureLoader } from "three";

function Ground() {
  const[roughness,normal]=useLoader(TextureLoader,[
    "textures/normal.jpg",
    "textures/rough.jpg"
  ]);

  useEffect(()=>{
    [normal,roughness].forEach((t)=>{
      t.wrapS=RepeatWrapping;
      t.wrapT=RepeatWrapping;
      t.repeat.set(5,5)
      t.offset.set(0, 0);
    })
    normal.encoding=LinearEncoding;
  },[normal,roughness])



  useFrame((state, delta) => {
    let t = state.clock.getElapsedTime() * 0.128;
    roughness.offset.set(0, t % 1);
    normal.offset.set(0, t % 1);
});
  return (
    <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
      <planeGeometry />
      <MeshReflectorMaterial
      normalMap={normal}
      roughnessMap={roughness}
        envMapIntensity={0}
        normalScale={[0.15, 0.15]}
        dithering={true}
        color={"grey"}
        roughness={0.8}
        blur={[1000, 400]} 
        mixBlur={30} 
        mixStrength={80} 
        mixContrast={1} 
        resolution={1024} 
        mirror={0} 
        depthScale={0.01} 
        minDepthThreshold={0.9} 
        maxDepthThreshold={1} 
        depthToBlurRatioBias={0.25} 
        debug={0}
        reflectorOffset={0.2}
      />
    </mesh>
  );
}

export default Ground;

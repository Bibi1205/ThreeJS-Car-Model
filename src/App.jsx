import React, { useRef, useState,Suspence } from 'react'
import { animated, useSpring,config } from '@react-spring/three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Experiance from './components/Experiance'
import ColorPicker from './components/ColorPicker'

function App() {
  return (
    <>
    <div style={{width:"100px"}}>
      <ColorPicker/>
    </div>
    <Canvas>
      <Experiance/>
    </Canvas>
    </>
  )
}

export default App



// function Box(){

//   const springs = useSpring({
//     from: { position: [-2, 0, 0], color: '#ff6d6d' },
//     to: async next => {
//       while (1) {
//         await next({ position: [2, 0, 0]});
//       }
//     },
//     config: { duration: 4000 },

//   });


//   return(
//     <animated.mesh {...springs } >
//       <boxGeometry/>
//       <meshPhongMaterial attach="material" color={"red"}/>
//      </animated.mesh>
//   )
// }

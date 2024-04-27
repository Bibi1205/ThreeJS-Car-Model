

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { proxy } from 'valtio'
import { useProxy } from 'valtio/utils'
import { useFrame } from '@react-three/fiber'

export const state=proxy({
  current:null,
  items:{
    RRRX7VS_Body:"yellow",
    RRRX7VS_Body2:"black",
    RRBaseMatGlass:"black",
    RRRX7VS_BrakeLight:"red",
    RRRX7VS__Blinker_R:"green",
    RRRX7VS__Blinker_L:"green",
    RRRX7VS_HeadLights:"white",
    RRBaseMatWM:"white",
    // wheel
    RRBaseMatGeneral:"yellow",   
    RRRX7VS__BrakeLight2:"green",
    RRRX7VS__ReverseLights:"yellow"
  }
})


export function Car(props) {
  const { nodes, materials } = useGLTF('/models/car.glb')

  const group =useRef();
  const snap =useProxy(state);
  const[hovered,set]=useState(null);



  useEffect(()=>{
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`
    const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`
    document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
        hovered ? cursor : auto
    )}'), auto`;

  })


  
  return (
    <group ref={group} {...props} dispose={null}
    onPointerOver={(e)=>{
      e.stopPropagation();
      set(e.object.material.name);
    }} 

    onPointerOut={(e)=>{
      e.intersections.length === 0 && set(null)
    }}

    onPointerDown={(e)=>{
      e.stopPropagation();
      state.current =e.object.material.name;
    }}

    onPointerMissed={(e)=>{
      state.current =null;
    }}

    >
      <group rotation={[-Math.PI / 2, 0, 0]}>

        <mesh geometry={nodes.Object_6.geometry} material={materials['1RX7VS_Calipers']} />

        <mesh geometry={nodes.Object_8.geometry} material={materials['1RX7VS_Rims']} />

        <mesh geometry={nodes.Object_10.geometry} material={materials.RRBaseMatGlass}
        material-color={snap.items.RRBaseMatGlass}
         />

        <mesh geometry={nodes.Object_12.geometry} material={materials.RRBaseMatWM}
         material-color={snap.items.RRBaseMatWM}
         />

        <mesh geometry={nodes.Object_14.geometry} material={materials.RRRX7VS_BrakeLight}
        material-color={snap.items.RRRX7VS_BrakeLight}
         />

        <mesh geometry={nodes.Object_16.geometry} material={materials.RRRX7VS__Blinker_L} 
        material-color={snap.items.RRRX7VS__Blinker_L}
        />

        <mesh geometry={nodes.Object_18.geometry} material={materials.RRRX7VS__Blinker_R}
        material-color={snap.items.RRRX7VS__Blinker_R}
         />

        <mesh geometry={nodes.Object_20.geometry} material={materials.RRRX7VS__BrakeLight2} 
        material-color={snap.items.RRRX7VS__BrakeLight2}
        />

        <mesh geometry={nodes.Object_22.geometry} material={materials.RRRX7VS__ReverseLights}
         material-color={snap.items.RRRX7VS__ReverseLights}
         />
{/* wheel */}
        <mesh geometry={nodes.Object_24.geometry} material={materials.RRBaseMatGeneral}
         material-color={snap.items.RRBaseMatGeneral}
         />

        <mesh geometry={nodes.Object_26.geometry} material={materials.RRRX7VS_Body} 
         material-color={snap.items.RRRX7VS_Body}
        />

        <mesh geometry={nodes.Object_28.geometry} material={materials.RRRX7VS_Body2} 
         material-color={snap.items.RRRX7VS_Body2}
        />

        <mesh geometry={nodes.Object_30.geometry} material={materials.RRRX7VS_HeadLights}
         material-color={snap.items.RRRX7VS_HeadLights}
         />
      </group>
    </group>
  )
}

useGLTF.preload('/models/car.glb')

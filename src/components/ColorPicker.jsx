import React from 'react'
import {state} from "./Car"
import { useProxy } from 'valtio/utils'
import { HexColorPicker } from 'react-colorful'
import { color } from 'framer-motion'

function ColorPicker() {
  const snap =useProxy(state)
  return (

    <div style={{display:snap.current ? "block" : "none"}}>
      <HexColorPicker
      className='cpicker'
      color={snap.items[snap.current]}
      onChange={(color)=> (state.items[snap.current] = color)}
      />
      <h1>{'choose for '+ snap.current}</h1>
    </div>
  )
}

export default ColorPicker

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 .\public\models\planeur.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Planeur(props) {
  const { nodes, materials } = useGLTF("./models/planeur.glb")
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cylinder.geometry} material={nodes.Cylinder.material} />
    </group>
  )
}

useGLTF.preload('./models/planeur.glb')

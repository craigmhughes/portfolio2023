import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { MeshLambertMaterial } from 'three';

export default function Keyboard({...props}: any) {
  const group = useRef();
  const { nodes }: any = useGLTF('/keyboard.gltf');
  
  const material = new MeshLambertMaterial({ color: "#222222" });

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Case.geometry} material={material} />
    </group>
  );
}

useGLTF.preload('/keyboard.gltf');
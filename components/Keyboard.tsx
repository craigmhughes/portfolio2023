import React, { useEffect, useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { MeshLambertMaterial, Vector3 } from 'three';
import { MeshProps } from '@react-three/fiber';

export default function Keyboard({...props}: any) {
  const group = useRef();
  const { nodes }: any = useGLTF('/keyboard_updated.gltf');
  
  const material = new MeshLambertMaterial({ color: "#161618" });
  const keyGeometry = nodes['Key'].geometry;

  const [keys, setKeys] = useState<any[]>([[], [], [], [], []]);

  useEffect(() => {
      console.log(nodes);
    const keyMeshes = [];

    for (const i of Array(5).keys()) {
        const key = `Row_${i + 1}`;
        const rowOffset = 90;
        if (!nodes[key]?.children?.map) {
            setKeys([]);
            return undefined;
        }
        const rowChildren = nodes[key].children.map((child: MeshProps) => {
            const pos = (child.position as Vector3)?.toArray();

            return (
                <mesh 
                    {...(child as MeshProps)}
                    castShadow 
                    receiveShadow 
                    material={material}
                    position={[pos[0], pos[1], (pos[2] + (rowOffset * i)) - 180]}
                    geometry={child.userData?.name === 'Key' ? keyGeometry : child.geometry}
                    scale={0.98}
                />
            );
        });

        keyMeshes.push(rowChildren);
    }

    setKeys(keyMeshes.flat());
  }, [nodes]);

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh {...nodes.Case} castShadow receiveShadow material={material} scale={[1, 0.35, 0.90]} />
      {...keys}
    </group>
  );
}

useGLTF.preload('/keyboard.gltf');
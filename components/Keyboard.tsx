import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, useHelper } from '@react-three/drei';
import { MeshLambertMaterial, Vector3 } from 'three';
import { MeshProps } from '@react-three/fiber';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper';
import { useBox } from '@react-three/cannon';

export default function Keyboard({...props}: any) {
  const [ref] = useBox(() => ({ mass: 50000, args: [115, 12, 40], rotation: [-Math.PI / 22, 0, 0], ...props }));
  const { nodes }: any = useGLTF('/keyboard_updated.gltf');
  
  const material = new MeshLambertMaterial({ color: "#161618" });
  const keyGeometry = nodes['Key'].geometry;

  const [keys, setKeys] = useState<any[]>([[], [], [], [], []]);
//   const pos = useRef([0, 0, 0])

  const rectAreaLightRef = useRef<any>(null!);
  useHelper(rectAreaLightRef, RectAreaLightHelper, '#161618');

  useEffect(() => {
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
    <group {...props} ref={ref}>
        {/* Uncomment to add underglow (Set material = MeshStandardMaterial()) */}
        {/* <rectAreaLight ref={rectAreaLightRef} position={[0, -35, 0]} args={['#ffffff', 20, 275, 94]} rotation-x={(Math.PI / 2)} /> */}

        <mesh {...nodes.Case} castShadow receiveShadow material={material} scale={[1, 0.35, 0.90]} />
        {...keys}
    </group>
  );
}

useGLTF.preload('/keyboard.gltf');
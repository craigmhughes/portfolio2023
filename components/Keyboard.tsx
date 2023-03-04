import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useGLTF, useHelper } from '@react-three/drei';
import { Mesh, MeshLambertMaterial, Object3D, Vector3 } from 'three';
import { MeshProps, useFrame } from '@react-three/fiber';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper';
import { useBox } from '@react-three/cannon';
import { useSpring, animated } from '@react-spring/three';
import { generateUUID } from 'three/src/math/MathUtils';

const keyIndexes = [
    [27, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8],
    [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 13],
    [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 220],
    [16, 220, 90, 77, 67, 86, 66, 78, 77, 188, 190, 191, 16],
    [17, 91, 18, 32, 18, 999, 999, 999],
];

export default function Keyboard({...props}: any) {
  const [ref] = useBox(() => ({ mass: 50000, args: [115, 12, 40], rotation: [-Math.PI / 22, 0, 0], ...props }));
  const { nodes }: any = useGLTF('/keyboard_updated2.gltf');
  
  const material = new MeshLambertMaterial({ color: "#161618" });
  const keyGeometry = nodes['Key'].geometry;
  const yBounds = [0, 20];

  const [keys, setKeys] = useState<any[]>([[], [], [], [], []]);
  const pressedDown = useRef<Object3D<Event>[] | undefined>();
  const timePressed = useRef<number[] | []>([]);
  const rectAreaLightRef = useRef<any>(null!);
  useHelper(rectAreaLightRef, RectAreaLightHelper, '#161618');

  const handleDown = useCallback((e: any) => {
      const pressedValidKey = keyIndexes.flat().includes(e.keyCode);
      console.log({keyCode: e.keyCode});
      if (!pressedValidKey) return;

      const keyPressed = ref.current?.getObjectByName(`key-${e.keyCode}`) as Object3D<Event>;
      console.log({keyCode: e.keyCode, keyPressed});

      if (!!keyPressed && !pressedDown.current?.includes(keyPressed)) {
          const newPressed: Object3D<Event>[] | undefined = pressedDown.current ? [...pressedDown.current] : [];
          newPressed.push(keyPressed);
          pressedDown.current = newPressed;
      }
  }, [pressedDown, keys, ref]);

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

            console.log(`key-${keyIndexes[i][nodes[key].children.indexOf(child)]}`);

            return (
                <mesh 
                    {...(child as MeshProps)}
                    castShadow 
                    receiveShadow 
                    material={material}
                    name={`key-${keyIndexes[i][nodes[key]?.children.indexOf(child)]}`}
                    position={[pos[0], pos[1], (pos[2] + (rowOffset * i)) - 180]}
                    geometry={child.userData?.name === 'Key' ? keyGeometry : child.geometry}
                    scale={0.98}
                />
            );
        });

        keyMeshes.push(rowChildren);
    }

    setKeys(keyMeshes);
  }, [nodes]);

  useEffect(() => {
    document.addEventListener('keydown', handleDown);
  }, [keys]);

  useEffect(() => {
    return () => {
        document.removeEventListener('keydown', handleDown);
    }
  }, []);

  useFrame(({clock}) => {
    if (!pressedDown.current?.length) {
      timePressed.current = [];
      pressedDown.current = [];
      return;
    };

    for (const key of pressedDown.current) {
      const timeKeyWasHit = timePressed.current[pressedDown.current.indexOf(key)];
      if (!timeKeyWasHit) {
        const newTimes = [...timePressed.current];
        newTimes.push(clock.getElapsedTime());
        timePressed.current = (newTimes);
      } else {
        const timeSinceKeyHit = clock.getElapsedTime() - timeKeyWasHit;

        if (0.5 > timeSinceKeyHit) {
          key.position.y -= key.position.y > 0 ? 1.25 : 0;
        } else if ((1 > timeSinceKeyHit && timeSinceKeyHit >= 0.5)) {
          key.position.y += key.position.y < 20 ? 1.25 : 0;
        } else {
          key.position.y = 20;
          const newPressed: Object3D<Event>[] = pressedDown.current.length === 1 && pressedDown.current.indexOf(key) === 0 ? [] : [...pressedDown.current].splice(pressedDown.current.indexOf(key));
          console.log(pressedDown.current, newPressed);
          const newTimes = [...timePressed.current].splice(pressedDown.current.indexOf(key));
          pressedDown.current = newPressed;
          timePressed.current = newTimes;
        }
      }
    }
  });

  return (
    <animated.group 
        {...props} 
        ref={ref}
    >
        {/* Uncomment to add underglow (Set material = MeshStandardMaterial()) */}
        {/* <rectAreaLight ref={rectAreaLightRef} position={[0, -35, 0]} args={['#ffffff', 20, 275, 94]} rotation-x={(Math.PI / 2)} /> */}

        <mesh {...nodes.Case} castShadow receiveShadow material={material} scale={[1, 0.35, 0.90]} />
        {...keys}
    </animated.group>
  );
}

useGLTF.preload('/keyboard.gltf');
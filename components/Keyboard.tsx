import {animated} from '@react-spring/three';
import {useBox} from '@react-three/cannon';
import {useGLTF, useHelper} from '@react-three/drei';
import {useFrame} from '@react-three/fiber';
import type {MeshProps} from '@react-three/fiber';

import React, {useCallback, useEffect, useRef, useState} from 'react';
import {MeshLambertMaterial} from 'three';
import type {Object3D, Vector3} from 'three';
import {RectAreaLightHelper} from 'three/examples/jsm/helpers/RectAreaLightHelper';
import {generateUUID} from 'three/src/math/MathUtils';

const keyIndexes = [
    [27, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8],
    [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 13],
    [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 192, 222],
    [16, 220, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16],
    [17, 91, 18, 32, 37, 40, 39],
];

export default function Keyboard({...props}: any): JSX.Element {
    const [ref] = useBox(() => ({mass: 50000, args: [115, 12, 40], rotation: [-Math.PI / 22, 0, 0], ...props}));
    const {nodes}: any = useGLTF('/keyboard_updated2.gltf');

    const material = new MeshLambertMaterial({color: '#161618'});
    const keyGeometry = nodes.Key.geometry;
    const yBounds = [0, 20];

    const [keys, setKeys] = useState<any[]>([[], [], [], [], []]);
    const pressedDown = useRef<Array<Object3D<Event>> | undefined>();
    const timePressed = useRef<number[] | []>([]);
    const rectAreaLightRef = useRef<any>(null);
    useHelper(rectAreaLightRef, RectAreaLightHelper, '#161618');

    const handleDown = useCallback(
        (e: KeyboardEvent) => {
            const pressedValidKey = keyIndexes.flat().includes(e.keyCode);
            if (!pressedValidKey) return;

            const keyPressed = ref.current?.getObjectByName(`key-${e.keyCode}`) as Object3D<Event>;

            if (!!keyPressed && !pressedDown.current?.includes(keyPressed)) {
                const newPressed: Array<Object3D<Event>> | undefined = pressedDown.current
                    ? [...pressedDown.current]
                    : [];
                newPressed.push(keyPressed);
                pressedDown.current = newPressed;
            }
        },
        [pressedDown, ref],
    );

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
                        {...child}
                        castShadow
                        receiveShadow
                        material={material}
                        key={generateUUID()}
                        name={`key-${keyIndexes[i][nodes[key]?.children.indexOf(child)]}`}
                        position={[pos[0], pos[1], pos[2] + rowOffset * i - 180]}
                        geometry={child.userData?.name === 'Key' ? keyGeometry : child.geometry}
                        scale={0.98}
                    />
                );
            });

            keyMeshes.push(rowChildren);
        }

        setKeys(keyMeshes);

        return () => {};
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nodes]);

    useEffect(() => {
        document.addEventListener('keydown', handleDown);

        return () => {
            document.removeEventListener('keydown', handleDown);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keys]);

    useFrame(({clock}) => {
        if (!pressedDown.current?.length) {
            timePressed.current = [];
            pressedDown.current = [];
            return;
        }

        for (const key of pressedDown.current) {
            const timeKeyWasHit = timePressed.current[pressedDown.current.indexOf(key)];
            if (!timeKeyWasHit) {
                const newTimes = [...timePressed.current];
                newTimes.push(clock.getElapsedTime());
                timePressed.current = newTimes;
            } else {
                const timeSinceKeyHit = clock.getElapsedTime() - timeKeyWasHit;

                if (timeSinceKeyHit < 0.5) {
                    key.position.y -= key.position.y > yBounds[0] ? 1.25 : 0;
                } else if (timeSinceKeyHit < 1 && timeSinceKeyHit >= 0.5) {
                    key.position.y += key.position.y < yBounds[1] ? 1.25 : 0;
                } else {
                    key.position.y = 20;
                    const newPressed: Array<Object3D<Event>> =
                        pressedDown.current.length === 1 && pressedDown.current.indexOf(key) === 0
                            ? []
                            : [...pressedDown.current].splice(pressedDown.current.indexOf(key));
                    const newTimes = [...timePressed.current].splice(pressedDown.current.indexOf(key));
                    pressedDown.current = newPressed;
                    timePressed.current = newTimes;
                }
            }
        }
    });

    return (
        <animated.group {...props} ref={ref}>
            {/* Uncomment to add underglow (Set material = MeshStandardMaterial()) */}
            {/* <rectAreaLight ref={rectAreaLightRef} position={[0, -35, 0]} args={['#ffffff', 20, 275, 94]} rotation-x={(Math.PI / 2)} /> */}

            <mesh {...nodes.Case} castShadow receiveShadow material={material} scale={[1, 0.35, 0.9]} />
            {...keys}
        </animated.group>
    );
}

useGLTF.preload('/keyboard.gltf');

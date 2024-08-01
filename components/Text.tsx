import {Text3D} from '@react-three/drei';

import type {Dispatch, SetStateAction} from 'react';

import Fonts from './keyboard/Fonts';

export function animateText(stringToAnimate: string, setState: Dispatch<SetStateAction<string>>): void {
    const newString: string[] = [];

    for (let i = 0; i < stringToAnimate.length; i++) {
        const character = stringToAnimate[i];

        setTimeout(() => {
            newString.push(character);
            setState(newString.join(''));
        }, i * 75);
    }
}

function Text({...props}): JSX.Element {
    // Apply Physics
    // const [textRef]: any = useBox(() => ({mass: 10, args: [props.children.length * 4.5, 10, 0.5], rotation: [-Math.PI / 3, 0, 0], ...props}));

    return (
        <group {...props}>
            <Text3D font={Fonts.RobotoMono} scale={5} height={0.01} position-x={-20} position-y={-3.5}>
                {props.children}
                <meshPhongMaterial color="#000000" />
            </Text3D>
        </group>
    );
}

export default Text;

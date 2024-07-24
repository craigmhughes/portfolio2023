import {animated, useSpring} from '@react-spring/three';

import {useEffect, useState} from 'react';
import type {Dispatch, ReactElement, SetStateAction} from 'react';

import Text, {animateText} from '@/components/Text';

/**
 * - Please do NOT modify this file.
 * - Please do NOT serve this
 *   file on production.
 */

const initAnimationStages = {
    introMessage: false,
};

interface IntroTextProps {
    subtitleText: string;
    setSubtitleText: Dispatch<SetStateAction<string>>;
}

function IntroText({subtitleText, setSubtitleText}: IntroTextProps): ReactElement {
    const [animationStages, setAnimationStages] = useState<Record<string, boolean>>({...initAnimationStages});

    const introMessageStyles = useSpring({
        opacity: animationStages.introMessage ? 1 : 0,
        scale: animationStages.introMessage ? 1 : 0,
        'position-x': animationStages.introMessage2 ? -10 : 0,
    });

    useEffect(() => {
        setTimeout(() => {
            setAnimationStages({
                ...initAnimationStages,
                introMessage: true,
            });
        }, 2000);

        setTimeout(() => {
            setAnimationStages({
                ...initAnimationStages,
                introMessage: true,
                introMessage2: true,
            });

            setTimeout(() => {
                animateText('Use your keyboard to search me!', setSubtitleText);
            }, 500);
        }, 2500);
    }, [setSubtitleText]);

    return (
        <group rotation-y={Math.PI / 150} rotation-x={-Math.PI / 4} position={[0, 20, -10]}>
            <animated.group {...introMessageStyles}>
                <Text position={[7, 11, -25]}>{!animationStages.introMessage2 ? 'hello, ' : 'hello, user.'}</Text>
            </animated.group>

            <Text position={[-16, 5, -25]} scale={0.35}>
                {subtitleText}
            </Text>
        </group>
    );
}

export default IntroText;

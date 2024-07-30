import {animated, useSpring} from '@react-spring/three';

import {useEffect, useState} from 'react';
import type {Dispatch, ReactElement, SetStateAction} from 'react';

import Text, {animateText} from '@/components/Text';

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
        'position-x': animationStages.introMessage2 ? -35 : 0,
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
                animateText('Use your keyboard to search for keywords', setSubtitleText);
            }, 500);
        }, 2500);
    }, [setSubtitleText]);

    return (
        <group rotation-x={-Math.PI / 4} position={[0, 15, -5]}>
            <animated.group {...introMessageStyles}>
                <Text position={[0, 11, -25]}>
                    {!animationStages.introMessage2 ? 'Hi there, ' : 'Hi there, take a look around!'}
                </Text>
            </animated.group>

            <Text position={[-16, 2, -25]} scale={0.35}>
                {subtitleText}
            </Text>
        </group>
    );
}

export default IntroText;

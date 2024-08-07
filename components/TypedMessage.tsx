import React, {useEffect, useMemo, useState} from 'react';
import type {PropsWithChildren} from 'react';

export const TypedMessage: React.FC<PropsWithChildren<{children: string}>> = ({children}) => {
    const [introTextIdx, setIntroTextIdx] = useState(0);
    const introText = children;
    const introTyped = useMemo(() => introText.substring(0, introTextIdx + 1), [introText, introTextIdx]);

    useEffect(() => {
        introText.split('').forEach((_, i) => {
            setTimeout(() => {
                setIntroTextIdx(i);
            }, 35 * i);
        });
    }, [introText]);

    return <p>{introTyped}</p>;
};

export default TypedMessage;

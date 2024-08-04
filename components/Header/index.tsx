import type {ReactElement} from 'react';
import MediaQuery from 'react-responsive';

import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';
import type {HeaderInterface} from './types';

export default function Header({...props}: HeaderInterface): ReactElement {
    return (
        <>
            <MediaQuery minWidth={1080}>
                <DesktopHeader {...props} />
            </MediaQuery>
            <MediaQuery maxWidth={1080}>
                <MobileHeader {...props} />
            </MediaQuery>
        </>
    );
}

Header.defaultProps = {
    navigation: false,
    hasTopNotification: false,
};

import Link from 'next/link';
import type {ReactElement} from 'react';

export default function Header(): ReactElement {
    return (
        <header className="flex items-center font-mono w-full m-auto py-6 px-2 justify-between">
            <div className="uppercase">
                <Link href="/">
                    <p className="text-2xl font-bold my-1">Craig Hughes</p>
                    <p className="text-xs">Software Engineer @ THG Ingenuity</p>
                </Link>
            </div>
            <div>
                <Link href="mailto:hghscraig@gmail.com" className="text-sm link">
                    hghscraig@gmail.com
                </Link>
            </div>
        </header>
    );
}

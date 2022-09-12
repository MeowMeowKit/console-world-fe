import * as React from 'react';
import { Navigation } from '../container/navigation';

interface StoreLayoutProps extends React.PropsWithChildren {}

export const StoreLayout: React.FC<StoreLayoutProps> = ({ children }) => {
    return (
        <>
            <div className="flex flex-col w-full h-full min-h-screen ">
                <div className="flex-1 p-5 ">
                    <Navigation />
                    <div className="w-full mx-auto max-w-7xl">{children}</div>
                </div>
            </div>
        </>
    );
};
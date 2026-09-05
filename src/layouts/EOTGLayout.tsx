import type { ReactNode } from 'react';

interface EOTGLayoutProps {
    children: ReactNode;
}

function EOTGLayout({ children }: EOTGLayoutProps) {
    return <div className="h-full bg-eotg-green">{children}</div>;
}

export default EOTGLayout;

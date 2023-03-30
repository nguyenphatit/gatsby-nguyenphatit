import React from 'react';
import Footer from './Footer';
import Header from './Header';

interface Props {
    children?: string | JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Props) => {
    return (
        <main className="relative">
            <Header />
            {children}
            <Footer />
        </main>
    )
}

export default Layout

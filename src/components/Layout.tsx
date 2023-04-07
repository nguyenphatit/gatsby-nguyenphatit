import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Cursor from './Cursor';

interface Props {
    children?: string | JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Props) => {
    return (
        <main className="relative">
            <Cursor />
            {/* <Header /> */}
            {children}
            {/* <Footer /> */}
        </main>
    )
}

export default Layout

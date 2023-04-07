import React from 'react';
import Cursor from '../Cursor';
import Header from '../Header';
import Footer from '../Footer';

interface Props {
    children?: string | JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Props) => {
    return (
        <main className="relative">
            <Cursor />
            <Header />
            {children}
            <Footer />
        </main>
    )
}

export default Layout

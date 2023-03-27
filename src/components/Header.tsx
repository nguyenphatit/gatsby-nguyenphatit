import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';

interface Props { }

const Header = () => {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    useEffect(() => {
        if (isOpened) {
            document.body.setAttribute('aria-scrollable', 'none');
        } else {
            document.body.setAttribute('aria-scrollable', 'scroll');
        }

        return () => {
            document.body.setAttribute('aria-scrollable', 'scroll');
        }
    }, [isOpened]);

    const toggleMenu = (value: boolean) => {
        setIsOpened(value);
    }

    const renderLargeHeader = () => (
        <div className="px-4 md:px-0 md:container md:mx-auto py-4 md:py-7 flex flex-row justify-between items-center">
            <div className="font-bold text-xl">nguyenphatit</div>
            <div className="hidden md:flex font-bold text-xl  flex-row justify-between items-center">
                <Link className="pl-4 hover:italic hover:transition hover:duration-150 hover:ease-in-out" to="/">Work</Link>
                <Link className="pl-4 hover:italic hover:transition hover:duration-150 hover:ease-in-out" to="/">About</Link>
                <Link className="pl-4 hover:italic hover:transition hover:duration-150 hover:ease-in-out" to="/">Contact</Link>
            </div>
            <div className="block md:hidden font-bold text-xl">
                <button type="button" onClick={() => toggleMenu(true)}>
                    <span className="material-icons">menu</span>
                </button>
            </div>
        </div>
    )

    const renderSmallHeader = () => {
        if (!isOpened) return null;

        return (
            <div className="fixed top-0 left-0 w-full z-50 bg-purple-light">
                <div className="absolute right-8 top-4 text-right">
                    <button className="text-green-dark" type="button" onClick={() => toggleMenu(false)}>
                        <span className="material-icons">close</span>
                    </button>
                </div>
                <div className="p-4 min-h-screen flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-between items-center">
                        <Link className="text-6xl uppercase hover:italic hover:transition hover:duration-150 hover:ease-in-out font-serif my-4 text-green-dark" to="/">Work</Link>
                        <Link className="text-6xl uppercase hover:italic hover:transition hover:duration-150 hover:ease-in-out font-serif my-4 text-green-dark" to="/">About</Link>
                        <Link className="text-6xl uppercase hover:italic hover:transition hover:duration-150 hover:ease-in-out font-serif my-4 text-green-dark" to="/">Contact</Link>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0">
                    <div className="mx-6 my-2">
                        F
                    </div>
                </div>
            </div>
        )
    }

    return (
        <header className="sticky top-0 bg-white text-black z-40">
            {renderSmallHeader()}
            {renderLargeHeader()}
        </header>
    )
}

export default Header

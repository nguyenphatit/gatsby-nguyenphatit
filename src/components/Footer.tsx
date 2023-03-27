import React from 'react';

interface Props {}

const Footer = () => {
    const now = new Date();
    return (
        <footer className="bg-black">
            <div className="text-right text-white mx-6 py-8 select-none">&copy; {now.getUTCFullYear()} - Design by @nguyenphatit</div>
        </footer>
    )
}

export default Footer;

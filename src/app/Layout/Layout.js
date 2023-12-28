import React from 'react';
import Footer from '../Component/Footer';
import Topbar from '../Component/Topbar';

const Layout = ({ children }) => {
    return (
        <div>
            <main className="bg-[#ffff] relative w-full h-screen overflow-x-hidden">
            <Topbar />
            {children}
            <Footer />
            </main>
        </div>
    );
};

export default Layout;

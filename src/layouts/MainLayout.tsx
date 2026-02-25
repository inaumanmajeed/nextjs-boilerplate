'use client';

import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* NAVBAR */}
      <nav className="bg-gray-800 p-4 text-white">Navbar</nav>
      <main className="flex-1">{children}</main>
      {/* FOOTER */}
      <footer className="bg-gray-800 p-4 text-center text-white">Footer</footer>
    </div>
  );
};

export default MainLayout;

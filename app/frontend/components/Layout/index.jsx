import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-blue-600 shadow-lg">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="shrink-0">
              <h1 className="text-xl font-bold text-white">Switch Bolt</h1>
            </div>
          </div>
        </nav>
      </header>
      <main className="container mx-auto grow px-4 py-8">{children}</main>
      <footer className="mt-auto bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            {new Date().getFullYear()} Switch Bolt. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

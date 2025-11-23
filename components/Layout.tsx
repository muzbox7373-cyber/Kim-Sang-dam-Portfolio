import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full py-8 px-4 sm:px-6 lg:px-8 flex justify-center items-start bg-paper">
      {/* A4 Paper Container */}
      <div className="w-full max-w-4xl bg-doc shadow-paper min-h-[1123px] relative flex flex-col">
        {/* Header / Brand */}
        <header className="px-12 pt-12 pb-6 border-b-2 border-primary/10">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="font-serif text-3xl font-bold text-primary tracking-wide">
                KIM SANG-DAM
              </h1>
              <p className="text-secondary text-sm mt-1 font-medium tracking-widest uppercase">
                Senior Executive Consultant
              </p>
            </div>
            <div className="text-right text-xs text-secondary hidden sm:block">
              <p>+82 10-1234-5678</p>
              <p>consultant.kim@example.com</p>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow px-12 py-10 fade-in">
          {children}
        </main>

        {/* Footer */}
        <footer className="px-12 py-8 mt-auto border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>&copy; 2024 Kim Sang-dam Consulting. All rights reserved.</p>
            <p className="mt-2 md:mt-0 font-serif italic">Data-driven Diagnosis, Strategic Solution.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
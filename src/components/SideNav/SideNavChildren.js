import React from 'react';

const SideNavChildren = ({ isOpen, children }) => {
  return (
    <aside
      className={`transform top-0 left-0 w-64 bg-gray-800 text-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <nav className="mt-10">
        <ul className="space-y-2">
          {children}
        </ul>
      </nav>
    </aside>
  );
};

export default SideNavChildren;

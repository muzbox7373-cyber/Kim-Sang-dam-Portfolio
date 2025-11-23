import React from 'react';
import { NavLink } from 'react-router-dom';
import { Briefcase, FileText, FolderOpen, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const navItems = [
    { name: 'Summary', path: '/', icon: <Briefcase size={16} /> },
    { name: 'Resume', path: '/resume', icon: <FileText size={16} /> },
    { name: 'Case Studies', path: '/cases', icon: <FolderOpen size={16} /> },
    { name: 'Contact', path: '/contact', icon: <Mail size={16} /> },
  ];

  return (
    <nav className="px-12 py-4 border-b border-gray-100 bg-gray-50/50 sticky top-0 z-10 backdrop-blur-sm">
      <ul className="flex flex-wrap gap-8">
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2 text-sm font-medium transition-colors duration-200 pb-1 border-b-2 ${
                  isActive
                    ? 'text-primary border-accent'
                    : 'text-gray-400 border-transparent hover:text-secondary hover:border-gray-300'
                }`
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
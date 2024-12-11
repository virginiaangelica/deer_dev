import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { name: 'Beranda', path: '/home-admin', icon: '🏠' },
    { name: 'Pesanan', path: '/kelola-pesanan', icon: '📋' },
    { name: 'Produk', path: '/kelola-produk', icon: '🛒' },
    { name: 'Member', path: '/kelola-member', icon: '👤' },
    { name: 'Pembayaran', path: '/kelola-pembayaran', icon: '💳' },
  ];

  return (
    <aside className="w-64 bg-gray-300 min-h-screen p-4">
      <nav>
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-2 rounded-lg ${
                    isActive ? 'font-semibold' : 'hover:bg-gray-200'
                  }`
                }
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-gray-800">
      <nav className="mx-auto flex max-w-6xl items-center gap-6 p-4">
        <span className="font-bold">Noureddine</span>

        <ul className="flex gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`transition-colors ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '../ui/ThemeToggle';

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
    <header className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-slate-900/40 via-blue-900/30 to-slate-900/40 border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="group relative">
          <span className="font-space-grotesk text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent transition-all duration-300 group-hover:from-cyan-300 group-hover:to-purple-400">
            Noureddine
          </span>
          <div className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 w-0 group-hover:w-full transition-all duration-300"></div>
        </Link>

        {/* Center Navigation Links */}
        <ul className="hidden md:flex gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 font-poppins text-sm font-medium transition-all duration-300 group ${
                    isActive
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-cyan-300'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 origin-left'
                    }`}
                  ></span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Section - Theme Toggle */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden px-6 pb-4">
        <ul className="flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-3 py-2 rounded-lg font-poppins text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                      : 'text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-300'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;

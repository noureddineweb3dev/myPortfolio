'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

function Navbar() {
  const pathname = usePathname();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [logoHovered, setLogoHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-linearlinear-to-r from-slate-950/50 via-blue-950/40 to-slate-950/50 border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
      {/* Animated gradient line on top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linearlinear-to-r from-transparent via-cyan-500 to-transparent opacity-60"></div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Animated Special Logo */}
        <Link
          href="/"
          className="group relative flex items-center gap-2"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          {/* Animated Sphere Background */}
          <div className="relative w-10 h-10 flex items-center justify-center">
            {/* Outer rotating ring */}
            <div
              className={`absolute inset-0 rounded-full border border-cyan-400/50 ${
                logoHovered ? 'animate-spin' : ''
              }`}
              style={{ animationDuration: '4s' }}
            ></div>

            {/* Middle pulsing ring */}
            <div className="absolute inset-1 rounded-full border border-blue-400/30 animate-pulse"></div>

            {/* Inner glow */}
            <div className="absolute inset-2 rounded-full bg-linear-to-br from-cyan-500 to-blue-600 opacity-80 blur-sm"></div>

            {/* Center text */}
            <span className="relative font-space-grotesk text-lg font-black bg-linear-to-r from-cyan-200 to-blue-300 bg-clip-text text-transparent">
              N
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-space-grotesk text-lg font-black bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-cyan-300 group-hover:via-purple-400 group-hover:to-pink-400">
              Noureddine
            </span>
            <span className="text-xs font-poppins text-cyan-300/60 tracking-widest">
              CREATIVE DEVELOPER
            </span>
          </div>

          {/* Animated underline */}
          <div className="absolute -bottom-2 left-0 h-0.5 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 w-0 group-hover:w-full transition-all duration-500"></div>
        </Link>

        {/* Center Navigation Links */}
        <ul className="hidden md:flex gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 font-poppins text-sm font-medium transition-all duration-300 group overflow-hidden ${
                    isActive ? 'text-cyan-300' : 'text-gray-400 hover:text-cyan-300'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>

                  {/* Animated background on hover */}
                  <span
                    className={`absolute inset-0 bg-linear-to-r from-cyan-500/20 to-blue-500/20 rounded-lg transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  ></span>

                  {/* Bottom line indicator */}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-0.5 bg-linear-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 origin-left'
                    }`}
                  ></span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Section - CTA Button */}
        <Link
          href="/contact"
          className="relative px-6 py-2 font-poppins text-sm font-semibold text-white overflow-hidden rounded-lg group hidden md:block"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-blue-600 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>

          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-500"></div>

          <span className="relative z-10">Get Started</span>
        </Link>
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden px-6 pb-4 space-y-2">
        <ul className="flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg font-poppins text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-linear-to-r from-cyan-500/30 to-blue-500/30 text-cyan-300 border border-cyan-500/50'
                      : 'text-gray-400 hover:bg-cyan-500/20 hover:text-cyan-300'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className="block w-full px-4 py-3 rounded-lg font-poppins text-sm font-semibold text-white bg-linear-to-r from-cyan-500 to-blue-600 text-center transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 mt-4"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}

export default Navbar;

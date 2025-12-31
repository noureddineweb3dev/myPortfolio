import './globals.css';
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100">
        <header className="p-4 border-b border-gray-800">
          <nav className="flex gap-4">
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/blog">Blog</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>

        <main className="min-h-screen">{children}</main>

        <footer className="p-4 text-center text-gray-500">© 2025 Noureddine</footer>
      </body>
    </html>
  );
}
export default Layout;

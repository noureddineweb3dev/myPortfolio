import Navbar from '@/components/layout/Navbar';
import './globals.css';
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100">
        <Navbar />

        <main className="min-h-screen">{children}</main>

        <footer className="p-4 text-center text-gray-500">© 2025 Noureddine</footer>
      </body>
    </html>
  );
}
export default Layout;

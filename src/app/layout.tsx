import Navbar from '@/components/layout/Navbar';
import './globals.css';
import ThemeProvider from '@/components/providers/ThemeProvider';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="min-h-full  dark:bg-gray-950">
      <body className="min-h-screen text-gray-900 dark:text-gray-100">
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>

          <footer className="p-4 text-center text-gray-500">© 2025 Noureddine</footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
export default Layout;

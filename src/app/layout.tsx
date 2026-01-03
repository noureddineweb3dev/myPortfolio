import Navbar from '@/components/layout/Navbar';
import './globals.css';
import ThemeProvider from '@/components/providers/ThemeProvider';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      suppressHydrationWarning
      className=" light:bg-white light:text-gray-900 text-gray-900 dark:bg-gray-950 dark:text-gray-100"
    >
      <body className="min-h-screen ">
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>

          <footer className="p-4 text-center ">© 2025 Noureddine</footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
export default Layout;

import Navbar from '@/components/layout/Navbar';
import './globals.css';
import ThemeProvider from '@/components/providers/ThemeProvider';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning className=" scroll-smooth " lang="en">
      <body className="min-h-screen bg-linear-to-b from-slate-950 via-blue-950 to-slate-900 ">
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

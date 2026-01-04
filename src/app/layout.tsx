import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ThemeProvider from '@/components/providers/ThemeProvider';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning className=" scroll-smooth " lang="en">
      <body className="min-h-screen bg-linear-to-b from-slate-950 via-blue-950 to-slate-900 ">
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
export default Layout;

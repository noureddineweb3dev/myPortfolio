import Navbar from '@/components/layout/Navbar';
import './globals.css';
import ThemeProvider from '@/components/providers/ThemeProvider';
import { Poppins, Space_Grotesk } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`h-screen overflow-hidden dark:bg-gray-950 ${poppins.variable} ${spaceGrotesk.variable}`}
    >
      <body className="h-screen overflow-y-auto text-gray-900 dark:text-gray-100 font-poppins">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>

          <footer className="p-4 text-center text-gray-500">© 2025 Noureddine</footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
export default Layout;

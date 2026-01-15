import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackgroundElements from '../components/BackgroundElements';
import { Inter, Space_Grotesk, Outfit } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata = {
  title: 'EV Battery Intelligence Challenge',
  description: 'Powering the Future of E-Mobility with Indigenous Compute',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-col bg-brand-primary text-brand-text font-sans selection:bg-brand-accent selection:text-brand-dark ${inter.variable} ${spaceGrotesk.variable} ${outfit.variable}`}>
        <BackgroundElements />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
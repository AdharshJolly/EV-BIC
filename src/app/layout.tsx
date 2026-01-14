import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
      <body className="min-h-screen flex flex-col bg-brand-primary text-brand-text font-sans selection:bg-brand-accent selection:text-brand-dark">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
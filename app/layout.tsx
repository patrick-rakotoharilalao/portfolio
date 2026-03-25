import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/Navbar'

export const metadata: Metadata = {
  title: 'Alain Patrick Rakotoharilalao — Full Stack Developer',
  description: 'Portfolio of Alain Patrick Rakotoharilalao, Full Stack Developer specializing in Java, Node.js and PHP.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
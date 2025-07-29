import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Poiret_One } from 'next/font/google'
import './globals.css'

// Load Plus Jakarta Sans (for body text)
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'], // multiple weights available
})

// Load Poiret One (for headings)
const poiretOne = Poiret_One({
  subsets: ['latin'],
  weight: '400', // Only one weight for Poiret One
})

export const metadata: Metadata = {
  title: 'AURA AI - Empower Your Digital Experience',
  description:
    "AURA AI is more than just an assistant — it's an ecosystem built to redefine how humans interact with technology.",
  keywords: 'AI, artificial intelligence, digital assistant, automation, productivity',
  authors: [{ name: 'Team XT' }],
  openGraph: {
    title: 'AURA AI - Empower Your Digital Experience',
    description: 'Empower Your Digital Experience with Intelligence, Accessibility, and Control',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Apply Plus Jakarta Sans globally */}
      <body className={`${plusJakartaSans.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}

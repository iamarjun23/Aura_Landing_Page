// src/app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

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
      <body>
        {children}
      </body>
    </html>
  )
}

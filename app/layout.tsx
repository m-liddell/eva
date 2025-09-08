import type { Metadata } from 'next'
import './globals.css'  // Change to this

export const metadata: Metadata = {
  title: 'EVA - Educational Virtual Assistant',
  description: 'Your AI-powered teaching assistant for planning, teaching, and assessment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
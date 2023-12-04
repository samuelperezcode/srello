import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Srello',
  description: 'Best Tasks magament app for teams to move as fast as possible.',
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

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Buzz One Media Admin',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ]
  },
  manifest: '/manifest.webmanifest'
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 
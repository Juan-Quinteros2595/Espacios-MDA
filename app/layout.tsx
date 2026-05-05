import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Espacios MDA — Cortinas & Blackout',
  description: 'Blackout que transforma espacios. Cortinas de tela, roller y romanas de alta calidad.',
  icons: {
    icon: [
      {
        url: '/LogoICO.ico',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/LogoICO.ico',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/LogoICO.ico',
        type: 'image/svg+xml',
      },
    ],
    apple: '/LogoICO.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={`${inter.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

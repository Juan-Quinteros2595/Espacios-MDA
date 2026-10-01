import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: 'Espacios MDA | Cortinas a medida y films para vidrios',
    template: '%s | Espacios MDA',
  },
  description: 'Diseñamos cortinas a medida y films para vidrios. Asesoramiento e instalación para hogares, oficinas y comercios en Argentina.',
  applicationName: 'Espacios MDA',
  keywords: [
    'cortinas a medida',
    'cortinas roller',
    'cortinas blackout',
    'cortinas screen',
    'films para vidrios',
    'Pinamar',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    siteName: 'Espacios MDA',
    title: 'Espacios MDA | Cortinas a medida y films para vidrios',
    description: 'Diseñamos cortinas a medida y films para vidrios. Asesoramiento e instalación para hogares, oficinas y comercios en Argentina.',
  },
  twitter: {
    card: 'summary',
    title: 'Espacios MDA | Cortinas a medida y films para vidrios',
    description: 'Diseñamos cortinas a medida y films para vidrios. Asesoramiento e instalación en Argentina.',
  },
  robots: {
    index: true,
    follow: true,
  },
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
      <head>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M8DDVKWB');
            `}
        </Script>
      </head>
      <body className="font-sans antialiased bg-background text-foreground transition-colors duration-300">
        <noscript>
          <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-M8DDVKWB"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

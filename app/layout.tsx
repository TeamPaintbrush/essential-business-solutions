import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Essential Business Solutions Services | Administrative Services, Business Management & Event Coordination',
  description: 'Professional administrative services, business management support, and event coordination. Transform your operations with reliable services from Tampa and nationwide locations. Call (813) 373-0936.',
  keywords: 'administrative services, business management, event coordination, project management, Tampa business services, virtual assistant, business support',
  authors: [{ name: 'Essential Business Solutions Services' }],
  creator: 'Essential Business Solutions Services',
  publisher: 'Essential Business Solutions Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://teampaintbrush.github.io'),
  alternates: {
    canonical: '/essential-business-solutions',
  },
  openGraph: {
    title: 'Essential Business Solutions Services',
    description: 'Professional administrative services, business management support, and event coordination. Transform your operations with reliable services.',
    url: 'https://teampaintbrush.github.io/essential-business-solutions',
    siteName: 'Essential Business Solutions Services',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: '/essential-business-solutions/assets/LOGO_3.png',
      width: 1200,
      height: 630,
      alt: 'Essential Business Solutions Services Logo',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Essential Business Solutions Services',
    description: 'Professional administrative services, business management support, and event coordination',
    images: ['/essential-business-solutions/assets/LOGO_3.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/essential-business-solutions/assets/LOGO_3.png" />
        <link rel="apple-touch-icon" href="/essential-business-solutions/assets/LOGO_3.png" />
        <meta name="theme-color" content="#6db3bb" />
      </head>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './providers/ThemeProvider'
import { LanguageProvider } from './i18n/LanguageContext'

const inter = Inter({ subsets: ['latin', 'latin-ext'] })

export const metadata = {
  title: 'Zeineb Eya Rahmani - QA Engineer | BI Engineer | Business Analyst',
  description: 'Computer Science Engineer with 3 years of experience in Quality Assurance, Business Intelligence, and Data Engineering. Specializing in automated testing, data pipelines, and business analysis.',
  keywords: 'QA Engineer, Business Intelligence, Data Engineering, Business Analyst, Python, Power BI, Apache Airflow, Playwright, BigQuery, dbt, Quality Assurance, Tunisia',
  authors: [{ name: 'Zeineb Eya Rahmani' }],
  creator: 'Zeineb Eya Rahmani',
  publisher: 'Zeineb Eya Rahmani',
  metadataBase: new URL('https://zeineb-eya.dev'),
  alternates: {
    canonical: 'https://zeineb-eya.dev',
    languages: {
      'en': 'https://zeineb-eya.dev',
      'fr': 'https://zeineb-eya.dev/fr',
    },
  },
  openGraph: {
    title: 'Zeineb Eya Rahmani - QA Engineer | BI Engineer | Business Analyst',
    description: 'Computer Science Engineer with expertise in Quality Assurance, Business Intelligence, and Data Engineering',
    url: 'https://zeineb-eya.dev',
    siteName: 'Zeineb Eya Rahmani Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zeineb Eya Rahmani Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zeineb Eya Rahmani - QA Engineer | BI Engineer | Business Analyst',
    description: 'Computer Science Engineer with expertise in QA, BI, and Data Engineering',
    images: ['/og-image.png'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

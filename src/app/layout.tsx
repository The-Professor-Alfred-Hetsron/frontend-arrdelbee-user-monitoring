import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { appName, appTabName, appDescription } from '@/constants/config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: appTabName,
  description: `${appName}, ${appDescription}`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#356BB3"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'
import { APP_NAME, APP_TAB_NAME, APP_DESCRIPTION, THEME_COLOR, KEYWORDS } from '@/constants/config'

export const metadata: Metadata = {
  applicationName:APP_NAME,
  title: APP_TAB_NAME,
  description: `${APP_NAME}, ${APP_DESCRIPTION}`,
  colorScheme:"light",
  themeColor: [
        { media: "(prefers-color-scheme: dark)", color: THEME_COLOR },
        { media: "(prefers-color-scheme: light)", color: THEME_COLOR }
      ],
  generator:"Next.js",
  keywords: KEYWORDS,
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
      <body className="m-0 p-0 font-poppins relative bg-background-white selection:bg-tertiary-lightYellow selection:text-primary-blue">{children}</body>
    </html>
  )
}

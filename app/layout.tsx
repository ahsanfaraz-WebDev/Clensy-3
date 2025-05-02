import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "CLENSY - Professional Cleaning Services",
  description: "Professional cleaning services tailored to your needs",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="//fonts.googleapis.com/css?family=Montserrat:300,400,400i,500,700&display=swap"
          media="all"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

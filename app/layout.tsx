import {Geist_Mono, Inter} from "next/font/google"
import Script from "next/script"
import "./globals.css"
import {cn} from "@/lib/utils";

const inter = Inter({subsets: ['latin'], variable: '--font-sans'})
const fontMono = Geist_Mono({subsets: ["latin"], variable: "--font-mono"})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0182BSNWVS"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-0182BSNWVS');`}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}

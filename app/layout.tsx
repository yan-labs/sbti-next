import {Space_Grotesk, DM_Sans, JetBrains_Mono} from "next/font/google"
import localFont from 'next/font/local'
import Script from "next/script"
import "./globals.css"
import {cn} from "@/lib/utils";

const fontDisplay = Space_Grotesk({subsets: ['latin'], variable: '--font-display', weight: ['400', '500', '600', '700']})
const fontSans = DM_Sans({subsets: ['latin'], variable: '--font-dm'})
const fontMono = JetBrains_Mono({subsets: ["latin"], variable: "--font-mono"})
const fontKR = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-kr',
  display: 'swap',
  weight: '45 920',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning className={cn("antialiased", fontDisplay.variable, fontSans.variable, fontMono.variable, fontKR.variable, "font-sans")}>
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

import {
  Space_Grotesk,
  DM_Sans,
  JetBrains_Mono,
  Cinzel,
  Bebas_Neue,
  Oswald,
  Saira_Condensed,
  Noto_Sans_SC,
  Noto_Serif_SC,
} from 'next/font/google';
import localFont from 'next/font/local';
import Script from 'next/script';
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import '../globals.css';
import {routing} from '@/i18n/routing';
import {SiteFooter} from '@/components/site-footer';
import {SiteHeader} from '@/components/site-header';
import {cn} from '@/lib/utils';

const fontDisplay = Space_Grotesk({subsets: ['latin'], variable: '--font-display', weight: ['400', '500', '600', '700'], display: 'swap'});
const fontSans = DM_Sans({subsets: ['latin'], variable: '--font-dm', display: 'swap'});
const fontMono = JetBrains_Mono({subsets: ['latin'], variable: '--font-mono', display: 'swap'});

// Per-game display fonts (Phase 5)
const fontLol = Cinzel({subsets: ['latin', 'latin-ext'], variable: '--font-lol', weight: ['400', '700'], display: 'swap'});
const fontOw = Bebas_Neue({subsets: ['latin', 'latin-ext'], variable: '--font-ow', weight: ['400'], display: 'swap'});
const fontPubg = Oswald({subsets: ['latin', 'latin-ext'], variable: '--font-pubg', weight: ['400', '700'], display: 'swap'});
const fontApex = Saira_Condensed({subsets: ['latin', 'latin-ext'], variable: '--font-apex', weight: ['400', '700'], display: 'swap'});
const fontZhSans = Noto_Sans_SC({subsets: ['latin'], variable: '--font-zh-sans', weight: ['400', '700'], display: 'swap'});
const fontZhSerif = Noto_Serif_SC({subsets: ['latin'], variable: '--font-zh-serif', weight: ['400', '700'], display: 'swap'});
const fontKR = localFont({
  src: '../fonts/PretendardVariable.woff2',
  variable: '--font-kr',
  display: 'swap',
  weight: '45 920',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={cn(
        'antialiased',
        fontDisplay.variable,
        fontSans.variable,
        fontMono.variable,
        fontKR.variable,
        fontLol.variable,
        fontOw.variable,
        fontPubg.variable,
        fontApex.variable,
        fontZhSans.variable,
        fontZhSerif.variable,
        'font-sans',
      )}
    >
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
        <Script id="clarity-init" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "witvk1k8y5");`}
        </Script>
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <SiteHeader locale={locale} />
          {children}
          <SiteFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

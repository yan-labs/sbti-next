import {Space_Grotesk, DM_Sans, JetBrains_Mono} from 'next/font/google';
import localFont from 'next/font/local';
import Script from 'next/script';
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import '../globals.css';
import {routing} from '@/i18n/routing';
import {SiteFooter} from '@/components/site-footer';
import {LocaleSwitcher} from '@/components/locale-switcher';
import {cn} from '@/lib/utils';

const fontDisplay = Space_Grotesk({subsets: ['latin'], variable: '--font-display', weight: ['400', '500', '600', '700']});
const fontSans = DM_Sans({subsets: ['latin'], variable: '--font-dm'});
const fontMono = JetBrains_Mono({subsets: ['latin'], variable: '--font-mono'});
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
          <header className="fixed right-0 top-0 z-50 p-4">
            <LocaleSwitcher />
          </header>
          {children}
          <SiteFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {SiteFooter} from '@/components/site-footer';
import {LocaleSwitcher} from '@/components/locale-switcher';

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
    <NextIntlClientProvider messages={messages}>
      <script dangerouslySetInnerHTML={{__html: `document.documentElement.lang="${locale}"`}} />
      <header className="fixed right-0 top-0 z-50 p-4">
        <LocaleSwitcher />
      </header>
      {children}
      <SiteFooter />
    </NextIntlClientProvider>
  );
}

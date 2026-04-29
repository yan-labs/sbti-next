'use client';

import {useState} from 'react';
import {useLocale, useTranslations} from 'next-intl';
import {Button} from '@/components/ui/button';

function XIcon({className}: {className?: string}) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LineIcon({className}: {className?: string}) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  );
}

export function ShareButtons({url, title, description}: {url: string; title: string; description: string}) {
  const t = useTranslations('share');
  const locale = useLocale();
  const [copied, setCopied] = useState(false);

  const localizedUrl = (() => {
    if (url.startsWith('http')) return url;
    if (/^\/(zh|ja|ko)(\/|$)/.test(url)) return url;
    return locale === 'en' ? url : `/${locale}${url}`;
  })();
  const shareUrl = localizedUrl.startsWith('http') ? localizedUrl : `https://sbti.support${localizedUrl}`;

  const shareTwitter = () => {
    const text = `${title}\n${description}`;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`,
      '_blank',
      'width=550,height=420',
    );
  };

  const shareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      '_blank',
      'width=550,height=420',
    );
  };

  const shareLine = () => {
    const text = `${title}\n${description}\n${shareUrl}`;
    window.open(
      `https://line.me/R/msg/text/?${encodeURIComponent(text)}`,
      '_blank',
      'width=550,height=420',
    );
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareNative = () => {
    navigator.share({title, text: description, url: shareUrl});
  };

  const canShare = typeof navigator !== 'undefined' && typeof navigator.share === 'function';

  const actionClassName = 'h-9 rounded-full gap-1.5 px-4 text-sm font-semibold';

  return (
    <div className="contents">
      {canShare && (
        <Button variant="outline" size="sm" className={`${actionClassName} sm:hidden`} onClick={shareNative}>
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
          {t('shareVia')}
        </Button>
      )}
      <Button variant="outline" size="sm" className={actionClassName} onClick={copyLink}>
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
        {copied ? t('linkCopied') : t('copyLink')}
      </Button>
      <Button variant="outline" size="sm" className={actionClassName} onClick={shareLine}>
        <LineIcon className="h-3.5 w-3.5 text-[#06C755]" />
        <span className="hidden sm:inline">{t('line')}</span>
      </Button>
      <Button variant="outline" size="sm" className={actionClassName} onClick={shareTwitter}>
        <XIcon className="h-3.5 w-3.5 text-[#0F1419] dark:text-white" />
        <span className="hidden sm:inline">{t('twitter')}</span>
      </Button>
      <Button variant="outline" size="sm" className={actionClassName} onClick={shareFacebook}>
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-[#1877F2]" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
        <span className="hidden sm:inline">{t('facebook')}</span>
      </Button>
    </div>
  );
}

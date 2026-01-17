import { setRequestLocale } from 'next-intl/server';
import { LandingPageContent } from '@/components/landing-page-content';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }];
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return <LandingPageContent />;
}

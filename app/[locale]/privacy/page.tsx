import { SUPPORT_EMAIL } from '@/app/data'
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { use } from 'react';

// Force static rendering
export const dynamic = 'force-static';

import { routing } from '@/i18n/routing';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

interface Principle {
    text: string;
}

interface Section {
    title: string;
    content: string;
    items?: string[];
    extra?: string | null;
}

export default async function PrivacyPolicy({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;

    // Enable static rendering
    setRequestLocale(locale);

    const t = await getTranslations('Privacy');
    const principles = t.raw('principles') as string[];
    const sections = t.raw('sections') as Section[];

    return (
        <main className="mx-auto max-w-2xl px-6 py-24 md:px-0">
            <div className="prose dark:prose-invert">
                <h1>{t('title')}</h1>
                <p className="lead">
                    {t('lead')}
                </p>
                <ul>
                    {principles.map((principle, index) => (
                        <li key={index}>{principle}</li>
                    ))}
                </ul>

                {sections.map((section, index) => (
                    <div key={index}>
                        <h2>{section.title}</h2>
                        <p dangerouslySetInnerHTML={{
                            __html: section.content
                                .replace('<0>', '<strong>')
                                .replace('</0>', '</strong>')
                                .replace('{email}', `<a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a>`)
                        }} />
                        {section.items && (
                            <ul>
                                {section.items.map((item, itemIndex) => (
                                    <li key={itemIndex} dangerouslySetInnerHTML={{
                                        __html: item
                                            .replace('<0>', '<strong>')
                                            .replace('</0>', '</strong>')
                                    }} />
                                ))}
                            </ul>
                        )}
                        {section.extra && (
                            <p>{section.extra}</p>
                        )}
                    </div>
                ))}
            </div>
        </main>
    )
}

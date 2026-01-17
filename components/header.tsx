'use client'

import { Link, usePathname } from '@/i18n/routing'
import { GITHUB_URL } from '@/app/data'
import { useLocale, useTranslations } from 'next-intl'

export function Header() {
  const t = useTranslations('Navigation')
  const locale = useLocale()
  const pathname = usePathname()

  const navLinks = [
    { key: 'features', href: '/#features' },
    { key: 'privacy', href: '/privacy' },
  ]

  const isEnglish = locale === 'en'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <nav className="flex items-center gap-6 rounded-full bg-white/70 px-6 py-2 backdrop-blur-md ring-1 ring-black/5 dark:bg-black/70 dark:ring-white/10 transition-all duration-300">
        <Link href="/" className="font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Astro
        </Link>
        <div className="flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              {t(link.key)}
            </Link>
          ))}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
          >
            {t('github')}
          </a>

          <Link
            href={pathname}
            locale={isEnglish ? 'zh' : 'en'}
            className="flex h-8 w-16 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            {isEnglish ? '中文' : 'En'}
          </Link>
        </div>
      </nav>
    </header>
  )
}

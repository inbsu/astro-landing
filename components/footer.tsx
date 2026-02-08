'use client'

import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('Footer')

  return (
    <footer className="w-full py-12 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
            {t('copyright', { year: new Date().getFullYear() })}
          </p>
        </div>

        <div className="flex items-center gap-8">
          <Link href="/privacy" className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors">
            Privacy
          </Link>
          <Link href="#" className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  )
}

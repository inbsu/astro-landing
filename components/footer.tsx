'use client'

import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('Footer')

  return (
    <footer className="w-full py-10">
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          {t('copyright', { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  )
}

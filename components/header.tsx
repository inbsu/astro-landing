'use client'

import { Link, usePathname } from '@/i18n/routing'
import { GITHUB_URL } from '@/app/data'
import { useLocale, useTranslations } from 'next-intl'
import { Menu, Globe } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'

export function Header() {
  const t = useTranslations('Navigation')
  const locale = useLocale()
  const pathname = usePathname()

  const navLinks = [
    { key: 'features', href: '/#features' },
    { key: 'privacy', href: '/privacy' },
  ]

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'zh', label: '中文' },
    { code: 'jp', label: '日本語' },
    { code: 'kr', label: '한국어' },
  ] as const

  const LanguageSelector = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Globe className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem key={lang.code} asChild>
            <Link
              href={pathname}
              locale={lang.code}
              className="w-full cursor-pointer"
            >
              <span className={locale === lang.code ? 'font-bold' : ''}>
                {lang.label}
              </span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <nav className="flex items-center gap-6 rounded-full bg-white/80 px-6 py-2 backdrop-blur-xl ring-1 ring-black/5 dark:bg-black/80 dark:ring-white/10 transition-all duration-300 shadow-sm">
        <Link href="/" className="font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
          <span>Astro</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
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

          <LanguageSelector />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSelector />
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 -mr-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="top">
              <SheetHeader>
                <SheetTitle>Astro</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.key}
                    href={link.href}
                    className="text-lg font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
                  >
                    {t(link.key)}
                  </Link>
                ))}
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
                >
                  {t('github')}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

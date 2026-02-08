'use client'

import React, { Fragment } from 'react'
import { motion } from 'motion/react'
import {
    Zap,
    Shield,
    Sparkles,
    Heart,
    Brain,
    MapPin,
    Lock,
    Languages,
    Smartphone,
    Map as MapIcon,
    Calendar,
    LayoutGrid
} from 'lucide-react'
import { AppStoreButton } from '@/components/app-store-button'
import { DeviceMockup } from '@/components/device-mockup'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { WordRotate } from '@/components/ui/word-rotate'
import { ShinyButton } from '@/components/ui/shiny-button'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { AppStoreButton as UIAppStoreButton } from '@/components/ui/app-store-button'
import { useTranslations } from 'next-intl'
import { GITHUB_URL } from '@/app/data'
import { cn } from '@/lib/utils'
import {
    IconCalendar,
    IconGlobe,
    IconBrain,
    IconTimeline,
    IconDeviceDesktop,
    IconLock
} from '@tabler/icons-react'

// Map features to grid configuration
const getFeatureConfig = (key: string) => {
    switch (key) {
        case 'Interactive Map':
            return { className: 'md:col-span-2', icon: MapIcon }
        case 'AI Enrichment':
            return { className: 'md:col-span-2', icon: Brain }
        case 'Home Dashboard':
            return { className: 'md:col-span-1', icon: LayoutGrid }
        case 'Smart Timeline':
            return { className: 'md:col-span-1', icon: Calendar }
        case 'Privacy First':
            return { className: 'md:col-span-1', icon: Shield }
        case 'Biometric Security':
            return { className: 'md:col-span-1', icon: Lock }
        case 'Widgets':
            return { className: 'md:col-span-1', icon: Smartphone }
        case 'Global Ready':
            return { className: 'md:col-span-1', icon: Languages }
        default:
            return { className: 'md:col-span-1', icon: Sparkles }
    }
}

const FEATURE_KEYS = [
    'Home Dashboard',
    'Interactive Map',
    'AI Enrichment',
    'Smart Timeline',
    'Privacy First',
    'Biometric Security',
    'Widgets',
    'Global Ready',
]

export function LandingPageContent() {
    const t = useTranslations()

    return (
        <main className="flex flex-col items-center justify-center pt-20 overflow-x-hidden">

            {/* Hero Section */}
            <section className="relative flex w-full max-w-7xl flex-col items-center gap-12 text-center md:flex-row md:justify-between md:text-left px-4 mb-24">
                <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-zinc-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]"></div>

                <div className="flex flex-col items-center space-y-8 md:items-start md:w-1/2 z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center md:items-start"
                    >
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl md:text-7xl leading-tight">
                            <span className="block">{t('Hero.titleLine1')}</span>
                            <div className="flex items-center gap-2">
                                <span className="text-zinc-500 dark:text-zinc-400">Your</span>
                                <WordRotate
                                    words={['Universal.', 'Universe.', 'Memories.', 'Moments.']}
                                    className="text-blue-500 dark:text-blue-400"
                                />
                            </div>
                        </h1>
                        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-300 max-w-lg leading-relaxed">
                            {t('Hero.description')}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 items-center"
                    >
                        <AppStoreButton />
                        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                            <ShinyButton className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                                <div className="flex items-center gap-2">
                                    <span className="text-zinc-900 dark:text-zinc-100 font-semibold">GitHub</span>
                                </div>
                            </ShinyButton>
                        </a>
                    </motion.div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center md:justify-end perspective-1000">
                    <DeviceMockup />
                </div>
            </section>

            {/* Features Section - Bento Grid */}
            <section id="features" className="w-full px-4 py-24 bg-zinc-50/50 dark:bg-zinc-900/20">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl mb-4">
                            {t('Features.title')}
                        </h2>
                        <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
                    </div>

                    <BentoGrid>
                        {FEATURE_KEYS.map((key, i) => {
                            const config = getFeatureConfig(key)
                            // Generate a placeholder image URL based on the feature title
                            // Using a dark/light neutral background color
                            const imageUrl = `https://placehold.co/600x400/18181b/ffffff?text=${encodeURIComponent(key)}`

                            return (
                                <BentoGridItem
                                    key={key}
                                    title={t(`Features.items.${key}.title`)}
                                    description={t(`Features.items.${key}.description`)}
                                    header={
                                        <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
                                            <img
                                                src={imageUrl}
                                                alt={key}
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-200 group-hover/bento:scale-105 opacity-80"
                                            />
                                            <div className="absolute inset-0 bg-black/10 group-hover/bento:bg-transparent transition-colors duration-200" />
                                        </div>
                                    }
                                    icon={<config.icon className="h-4 w-4 text-neutral-500" />}
                                    className={config.className}
                                />
                            )
                        })}
                    </BentoGrid>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="w-full max-w-3xl px-4 py-24 mx-auto">
                <h2 className="text-3xl font-bold tracking-tight text-center text-zinc-900 dark:text-white sm:text-4xl mb-12">
                    {t('FAQ.title')}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                    {['q1', 'q2', 'q3', 'q4'].map((key) => (
                        <AccordionItem key={key} value={key}>
                            <AccordionTrigger className="text-left">
                                {t(`FAQ.items.${key}.question`)}
                            </AccordionTrigger>
                            <AccordionContent>
                                {t(`FAQ.items.${key}.answer`)}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>

            {/* Bottom CTA */}
            <section className="w-full py-24 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/50 dark:to-blue-900/10"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl mb-8">
                        Ready to rediscover your universe?
                    </h2>
                    <div className="flex justify-center">
                        <AppStoreButton />
                    </div>
                </div>
            </section>

        </main>
    )
}


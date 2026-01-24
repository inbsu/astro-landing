'use client'

import React, { Fragment } from 'react'
import { motion } from 'motion/react'
import { Zap, Shield, Sparkles, Heart, Brain, MapPin, Lock, Languages } from 'lucide-react'
import { AppStoreButton } from '@/components/app-store-button'
import { DeviceMockup } from '@/components/device-mockup'
import { Spotlight } from '@/components/ui/spotlight'
import { useTranslations } from 'next-intl'

const FEATURE_KEYS = [
    { key: 'Native Performance', icon: Zap },
    { key: 'Privacy First', icon: Shield },
    { key: 'Beautiful Design', icon: Sparkles },
    { key: 'Memories', icon: Heart },
    { key: 'AI Trips', icon: Brain },
    { key: 'Place Discovery', icon: MapPin },
    { key: 'Biometric Security', icon: Lock },
    { key: 'Global Ready', icon: Languages },
]

export function LandingPageContent() {
    const t = useTranslations()

    return (
        <main className="flex flex-col items-center justify-center space-y-24 pt-20">

            {/* Hero Section */}
            <section className="relative flex w-full flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
                <div className="flex flex-col items-center space-y-6 md:items-start md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl md:text-7xl">
                            {/* Consistent 2-line layout for all screens */}
                            <span className="block">
                                {t('Hero.titleLine1')}
                            </span>
                            <span className="block text-zinc-500 dark:text-zinc-400">
                                {t('Hero.titleLine2')}
                            </span>
                        </h1>
                        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-300 max-w-md">
                            {t('Hero.description').split('\n').map((line, i) => (
                                <Fragment key={i}>
                                    {line}
                                    {i < t('Hero.description').split('\n').length - 1 && <br />}
                                </Fragment>
                            ))}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                    >
                        <AppStoreButton />
                    </motion.div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <DeviceMockup />
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="w-full">
                <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    {t('Features.title')}
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {FEATURE_KEYS.map((feature, index) => {
                        const Icon = feature.icon
                        return (
                            <motion.div
                                key={feature.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5, scale: 1.01 }}
                                transition={{ delay: index * 0.1, duration: 0.2 }}
                                className="group relative overflow-hidden rounded-2xl bg-zinc-100 p-8 dark:bg-zinc-900/50 ring-1 ring-zinc-200 dark:ring-zinc-800"
                            >
                                <Spotlight
                                    className="from-blue-400/20 via-blue-300/10 to-transparent dark:from-blue-500/20 dark:via-blue-400/10"
                                    size={300}
                                />
                                <div className="relative z-10 flex flex-col gap-4">
                                    <div className="rounded-lg bg-zinc-200/50 w-fit p-2 dark:bg-zinc-800/50">
                                        {Icon && <Icon className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />}
                                    </div>
                                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                                        {t(`Features.items.${feature.key}.title`)}
                                    </h3>
                                    <p className="text-zinc-600 dark:text-zinc-400">
                                        {t(`Features.items.${feature.key}.description`)}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}

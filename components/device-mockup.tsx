'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export function DeviceMockup() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const screens = [
        {
            type: 'placeholder',
            bg: 'from-orange-500 to-red-900',
            title: 'Photos',
            grid: true
        },
        {
            type: 'placeholder',
            bg: 'from-blue-600 to-indigo-900',
            title: 'Albums',
            dots: true
        },
        {
            type: 'placeholder',
            bg: 'from-purple-600 to-pink-900',
            title: 'Search',
            grid: true
        },
        {
            type: 'placeholder',
            bg: 'from-emerald-600 to-teal-900',
            title: 'Settings',
            list: true
        }
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % screens.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto aspect-[9/19.5] w-[300px] rounded-[3rem] bg-zinc-900 shadow-2xl ring-1 ring-zinc-700/50 md:w-[350px]"
            style={{ perspective: '1000px' }}
        >
            {/* Screen Content */}
            <div className="absolute inset-2 overflow-hidden rounded-[2.5rem] bg-zinc-950">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                        className="h-full w-full"
                    >
                        <div className={`h-full w-full bg-gradient-to-br ${screens[currentIndex].bg} p-6 pt-16`}>
                            {/* Dynamic Island placeholder for simulated screens */}
                            <div className="absolute left-1/2 top-4 h-7 w-28 -translate-x-1/2 rounded-full bg-black z-20"></div>

                            <div className="flex justify-between items-center mb-8">
                                <div className="h-8 w-24 rounded-full bg-white/20"></div>
                                <div className="h-8 w-8 rounded-full bg-white/20"></div>
                            </div>

                            {screens[currentIndex].grid && (
                                <div className="grid grid-cols-3 gap-2">
                                    {[...Array(12)].map((_, i) => (
                                        <div key={i} className="aspect-square rounded-lg bg-white/10"></div>
                                    ))}
                                </div>
                            )}

                            {screens[currentIndex].dots && (
                                <div className="grid grid-cols-2 gap-4">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="aspect-[4/3] rounded-xl bg-white/15"></div>
                                    ))}
                                </div>
                            )}

                            {screens[currentIndex].list && (
                                <div className="space-y-4">
                                    {[...Array(6)].map((_, i) => (
                                        <div key={i} className="h-12 w-full rounded-lg bg-white/10"></div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Pagination Dots */}
            <div className="absolute -bottom-10 left-1/2 flex -translate-x-1/2 gap-2">
                {screens.map((_, i) => (
                    <div
                        key={i}
                        className={`h-1.5 w-1.5 rounded-full transition-colors ${i === currentIndex ? 'bg-zinc-100' : 'bg-zinc-700'
                            }`}
                    />
                ))}
            </div>

            {/* Reflection */}
            <div className="absolute inset-0 rounded-[3rem] ring-1 ring-inset ring-white/10 pointer-events-none"></div>
        </motion.div>
    )
}

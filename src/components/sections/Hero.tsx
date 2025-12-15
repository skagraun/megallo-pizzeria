/**
 * Hero Section Component
 *
 * The landing section of the website featuring:
 * - Full-screen background image
 * - Animated headline and tagline
 * - Call-to-action buttons
 * - Scroll indicator
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown, Pizza, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { businessInfo } from '@/lib/data/business-info';

/**
 * Animation variants for staggered children animations
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

export function Hero() {
  /**
   * Smooth scroll to a section
   */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/main-bg.jpg"
          alt="Pizza background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />

      {/* Radial gradient for center focus */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tagline badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary text-sm font-medium mb-6">
              <Pizza className="w-4 h-4" />
              Zákányszék's favorite pizzeria
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="text-primary drop-shadow-[0_0_30px_rgba(34,197,94,0.3)]">Megálló</span>
            <br className="md:hidden" />
            <span className="text-white"> Pizzéria</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 font-light"
          >
            {businessInfo.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Create your dream pizza with our online designer, or choose from
            our classic and user-submitted special pizzas!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="btn-glow text-lg px-8 py-6 shadow-lg shadow-primary/25"
              onClick={() => scrollToSection('creator')}
            >
              <Pizza className="w-5 h-5 mr-2" />
              Pizza Creator
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 backdrop-blur-sm bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white"
              onClick={() => scrollToSection('menu')}
            >
              <Utensils className="w-5 h-5 mr-2" />
              Menu
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.button
          onClick={() => scrollToSection('creator')}
          className="flex flex-col items-center gap-2 text-gray-300 hover:text-primary transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          aria-label="Scroll down"
        >
          <span className="text-sm">Scroll down</span>
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
}

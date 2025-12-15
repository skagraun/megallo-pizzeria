/**
 * Custom 404 Not Found Page
 *
 * Fun "lost pizza" themed error page with:
 * - Animated pizza emoji
 * - Helpful navigation links
 * - Consistent branding
 */

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Pizza, ChefHat, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* Animated pizza */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', bounce: 0.5, duration: 0.8 }}
          className="mb-8"
        >
          <motion.span
            className="text-8xl sm:text-9xl inline-block"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            🍕
          </motion.span>
        </motion.div>

        {/* Error code */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-7xl sm:text-8xl font-bold text-primary mb-4"
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
            Oops! This pizza got lost
          </h2>
          <p className="text-muted-foreground mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            But don&apos;t worry, we have plenty of delicious pizzas waiting for you!
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Button asChild size="lg">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/#menu">
              <Pizza className="w-4 h-4 mr-2" />
              View Menu
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/#pizza-creator">
              <ChefHat className="w-4 h-4 mr-2" />
              Create Pizza
            </Link>
          </Button>
        </motion.div>

        {/* Fun fact */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-sm text-muted-foreground/60"
        >
          Fun fact: The first pizzeria opened in Naples, Italy in 1830
        </motion.p>
      </div>
    </div>
  );
}

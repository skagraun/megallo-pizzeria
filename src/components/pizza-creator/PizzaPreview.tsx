/**
 * Pizza Preview Component
 *
 * Visual representation of the pizza being created:
 * - Base pizza image always visible
 * - Sauce layer changes based on selection
 * - Topping layers appear/disappear with animations
 * - Stacked absolutely positioned images create the effect
 */

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Ingredient } from '@/types';

interface PizzaPreviewProps {
  selectedSauce: Ingredient;
  selectedToppings: Ingredient[];
}

export function PizzaPreview({ selectedSauce, selectedToppings }: PizzaPreviewProps) {
  return (
    <div className="relative flex justify-center">
      {/* Container for pizza images */}
      <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
        {/* Base pizza (always visible) */}
        <Image
          src="/images/pizza/c_pizza.png"
          alt="Pizza alap"
          fill
          className="object-contain"
          priority
        />

        {/* Sauce layer */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSauce.id}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={selectedSauce.image}
              alt={selectedSauce.name}
              fill
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>

        {/* Topping layers */}
        <AnimatePresence>
          {selectedToppings.map((topping, index) => (
            <motion.div
              key={topping.id}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                  delay: index * 0.05,
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                transition: { duration: 0.2 },
              }}
            >
              <Image
                src={topping.image}
                alt={topping.name}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Glow effect when toppings are added */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          animate={{
            boxShadow: selectedToppings.length > 0
              ? '0 0 60px rgba(34, 197, 94, 0.2)'
              : '0 0 30px rgba(34, 197, 94, 0.1)',
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}

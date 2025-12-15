/**
 * Ingredient Card Component
 *
 * Individual ingredient selection card with:
 * - Emoji/icon representation
 * - Name and price display
 * - Selection state (selected/unselected)
 * - Disabled state when max toppings reached
 * - Click animation effects
 */

'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Ingredient } from '@/types';
import { cn } from '@/lib/utils';

interface IngredientCardProps {
  ingredient: Ingredient;
  isSelected: boolean;
  onSelect: () => void;
  isDisabled: boolean;
  selectionType: 'radio' | 'checkbox';
}

export function IngredientCard({
  ingredient,
  isSelected,
  onSelect,
  isDisabled,
  selectionType,
}: IngredientCardProps) {
  /**
   * Format price for display
   * Shows "Free" for free items, otherwise price in Ft
   */
  const formatPrice = (price: number): string => {
    if (price === 0) return 'Free';
    return `+${price} Ft`;
  };

  return (
    <motion.button
      onClick={onSelect}
      disabled={isDisabled}
      className={cn(
        'relative p-4 rounded-xl border-2 transition-all duration-200',
        'flex flex-col items-center gap-2 text-center',
        'focus:outline-none focus:ring-2 focus:ring-primary/50',
        // Selected state
        isSelected && 'border-primary bg-primary/10 shadow-lg ingredient-active',
        // Unselected state
        !isSelected && !isDisabled && 'border-border bg-card hover:border-primary/50 hover:bg-card/80',
        // Disabled state
        isDisabled && 'opacity-40 cursor-not-allowed border-border bg-muted'
      )}
      whileHover={!isDisabled ? { scale: 1.02 } : {}}
      whileTap={!isDisabled ? { scale: 0.98 } : {}}
    >
      {/* Selection indicator */}
      <motion.div
        className={cn(
          'absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center',
          selectionType === 'radio' ? 'rounded-full' : 'rounded-md',
          isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted border border-border'
        )}
        initial={false}
        animate={{
          scale: isSelected ? [1, 1.2, 1] : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        {isSelected && <Check className="w-3 h-3" />}
      </motion.div>

      {/* Emoji/Icon */}
      <span className="text-3xl" role="img" aria-label={ingredient.nameEn}>
        {ingredient.emoji || '🍕'}
      </span>

      {/* Name */}
      <span className="font-medium text-sm text-foreground line-clamp-2">
        {ingredient.nameEn || ingredient.name}
      </span>

      {/* Price */}
      <span
        className={cn(
          'text-xs font-medium',
          ingredient.price === 0 ? 'text-primary' : 'text-muted-foreground'
        )}
      >
        {formatPrice(ingredient.price)}
      </span>

      {/* Pulse animation on select */}
      {isSelected && (
        <motion.div
          className="absolute inset-0 rounded-xl bg-primary/20"
          initial={{ opacity: 0.5, scale: 1 }}
          animate={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
      )}
    </motion.button>
  );
}

/**
 * Order Panel Component
 *
 * Combined summary and submission form:
 * - Compact design with horizontal layout on desktop
 * - Prominent price display
 * - Selected toppings as removable chips
 * - Pizza name and email inputs
 * - Submit button
 */

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Loader2, X, RotateCcw, Pizza, ChevronUp, ChevronDown, Share2, Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Ingredient } from '@/types';
import { cn } from '@/lib/utils';

// Form validation schema
const formSchema = z.object({
  pizzaName: z
    .string()
    .min(2, 'Pizza name must be at least 2 characters')
    .max(50, 'Pizza name must be at most 50 characters'),
  email: z
    .string()
    .email('Invalid email address')
    .min(1, 'Email is required'),
});

type FormData = z.infer<typeof formSchema>;

interface OrderPanelProps {
  basePrice: number;
  selectedSauce: Ingredient;
  selectedToppings: Ingredient[];
  totalPrice: number;
  maxToppings: number;
  onRemoveTopping: (toppingId: string) => void;
  onReset: () => void;
}

export function OrderPanel({
  basePrice,
  selectedSauce,
  selectedToppings,
  totalPrice,
  maxToppings,
  onRemoveTopping,
  onReset,
}: OrderPanelProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(true);
  const [shareStatus, setShareStatus] = useState<'idle' | 'copied' | 'shared'>('idle');

  // Form setup with validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pizzaName: '',
      email: '',
    },
  });

  /**
   * Format price with thousand separator
   */
  const formatPrice = (price: number): string => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' Ft';
  };

  // Calculate progress percentage for the topping bar
  const progressPercent = (selectedToppings.length / maxToppings) * 100;

  /**
   * Handle form submission
   */
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const submissionData = {
        pizzaName: data.pizzaName,
        email: data.email,
        sauce: selectedSauce.name,
        toppings: selectedToppings.map((t) => t.name),
        totalPrice,
      };

      const response = await fetch('/api/pizza-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (result.success) {
        reset();
        onReset();
        router.push('/thank-you');
      } else {
        setSubmitError(result.message || 'An error occurred while submitting.');
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitError('An error occurred while submitting. Please try again!');
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Generate shareable URL with pizza configuration
   */
  const generateShareUrl = (): string => {
    const params = new URLSearchParams();
    params.set('sauce', selectedSauce.id);
    params.set('toppings', selectedToppings.map((t) => t.id).join(','));
    return `${window.location.origin}/#creator?${params.toString()}`;
  };

  /**
   * Handle share button click
   */
  const handleShare = async () => {
    const shareUrl = generateShareUrl();
    const shareText = `Check out my custom pizza creation at Megálló Pizzéria! ${selectedSauce.nameEn || selectedSauce.name} base with ${selectedToppings.map((t) => t.nameEn || t.name).join(', ')}. Total: ${formatPrice(totalPrice)}`;

    // Try native share API first (mobile)
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Custom Pizza',
          text: shareText,
          url: shareUrl,
        });
        setShareStatus('shared');
        setTimeout(() => setShareStatus('idle'), 2000);
        return;
      } catch (err) {
        // User cancelled or share failed, fall back to clipboard
        if ((err as Error).name === 'AbortError') return;
      }
    }

    // Fallback: copy to clipboard
    try {
      await navigator.clipboard.writeText(shareUrl);
      setShareStatus('copied');
      setTimeout(() => setShareStatus('idle'), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <motion.div
      className="bg-card border border-border rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      {/* Header with price - always visible */}
      <div
        className="flex items-center justify-between p-4 bg-card cursor-pointer hover:bg-muted/30 transition-colors gap-2"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2 min-w-0">
          <Pizza className="w-5 h-5 text-primary shrink-0" />
          <span className="font-semibold text-sm sm:text-base truncate">Summary</span>
          <Badge variant="outline" className="shrink-0 text-xs">
            {selectedToppings.length}/{maxToppings}
          </Badge>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <motion.span
            key={totalPrice}
            className="text-xl sm:text-2xl font-bold text-primary price-counter whitespace-nowrap"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {formatPrice(totalPrice)}
          </motion.span>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          )}
        </div>
      </div>

      {/* Expandable content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="border-t border-border">
              {/* Progress bar */}
              <div className="px-4 pt-3">
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className={cn(
                      'h-full rounded-full',
                      selectedToppings.length >= maxToppings ? 'bg-accent' : 'bg-primary'
                    )}
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                </div>
              </div>

              {/* Main content grid */}
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Left: Selected items */}
                <div className="space-y-3">
                  {/* Base and sauce info */}
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Pizza base + {selectedSauce.emoji} {selectedSauce.nameEn || selectedSauce.name}</span>
                      <span>{formatPrice(basePrice + selectedSauce.price)}</span>
                    </div>
                  </div>

                  {/* Selected toppings */}
                  {selectedToppings.length > 0 ? (
                    <div className="flex flex-wrap gap-1.5">
                      {selectedToppings.map((topping) => (
                        <motion.div
                          key={topping.id}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          layout
                        >
                          <Badge
                            variant="secondary"
                            className="pl-2 pr-1 py-0.5 flex items-center gap-1 cursor-pointer hover:bg-destructive/20 text-xs"
                            onClick={() => onRemoveTopping(topping.id)}
                          >
                            <span>{topping.emoji}</span>
                            <span>{topping.nameEn || topping.name}</span>
                            <span className="text-muted-foreground">+{topping.price}</span>
                            <X className="w-3 h-3 ml-0.5 hover:text-destructive" />
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground italic">
                      No toppings selected yet...
                    </p>
                  )}

                  {/* Action buttons */}
                  {selectedToppings.length > 0 && (
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={onReset}
                        className="text-xs text-muted-foreground hover:text-foreground h-7 px-2"
                      >
                        <RotateCcw className="w-3 h-3 mr-1" />
                        Reset
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleShare}
                        className="text-xs text-muted-foreground hover:text-foreground h-7 px-2"
                      >
                        {shareStatus === 'copied' ? (
                          <>
                            <Check className="w-3 h-3 mr-1 text-primary" />
                            Copied!
                          </>
                        ) : shareStatus === 'shared' ? (
                          <>
                            <Check className="w-3 h-3 mr-1 text-primary" />
                            Shared!
                          </>
                        ) : (
                          <>
                            <Share2 className="w-3 h-3 mr-1" />
                            Share
                          </>
                        )}
                      </Button>
                    </div>
                  )}
                </div>

                {/* Right: Submit form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Input
                        placeholder="Pizza name"
                        {...register('pizzaName')}
                        className={cn('h-9 text-sm', errors.pizzaName && 'border-destructive')}
                      />
                      {errors.pizzaName && (
                        <p className="text-xs text-destructive mt-1">{errors.pizzaName.message}</p>
                      )}
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your email"
                        {...register('email')}
                        className={cn('h-9 text-sm', errors.email && 'border-destructive')}
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {submitError && (
                    <p className="text-xs text-destructive bg-destructive/10 p-2 rounded">
                      {submitError}
                    </p>
                  )}

                  <Button
                    type="submit"
                    className="w-full btn-glow h-10"
                    disabled={isSubmitting || selectedToppings.length === 0}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit Pizza
                      </>
                    )}
                  </Button>

                  {selectedToppings.length === 0 && (
                    <p className="text-xs text-muted-foreground text-center">
                      Select at least one topping!
                    </p>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

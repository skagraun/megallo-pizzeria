/**
 * Pizza Creator Section Component
 *
 * Interactive pizza builder that allows users to:
 * - Select a sauce base (radio - single selection)
 * - Choose up to 6 toppings from meats, vegetables, and cheeses
 * - See a real-time visual preview of their pizza
 * - View dynamic pricing as they add/remove ingredients
 * - Submit their custom pizza creation
 *
 * This is the main feature component of the website.
 */

'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { IngredientCard } from '@/components/pizza-creator/IngredientCard';
import { PizzaPreview } from '@/components/pizza-creator/PizzaPreview';
import { OrderPanel } from '@/components/pizza-creator/OrderPanel';
import {
  sauces,
  meats,
  vegetables,
  cheeses,
  BASE_PIZZA_PRICE,
  MAX_TOPPINGS,
  categoryLabels,
} from '@/lib/data/ingredients';
import { Ingredient } from '@/types';

export function PizzaCreator() {
  // Selected sauce (only one allowed)
  const [selectedSauce, setSelectedSauce] = useState<Ingredient>(sauces[0]);

  // Selected toppings (max 6)
  const [selectedToppings, setSelectedToppings] = useState<Ingredient[]>([]);

  // Currently active tab
  const [activeTab, setActiveTab] = useState('sauce');

  /**
   * Calculate total price based on selections
   */
  const totalPrice =
    BASE_PIZZA_PRICE +
    selectedSauce.price +
    selectedToppings.reduce((sum, topping) => sum + topping.price, 0);

  /**
   * Check if maximum toppings reached
   */
  const isMaxToppingsReached = selectedToppings.length >= MAX_TOPPINGS;

  /**
   * Handle sauce selection (radio behavior)
   */
  const handleSauceSelect = useCallback((sauce: Ingredient) => {
    setSelectedSauce(sauce);
  }, []);

  /**
   * Handle topping toggle (checkbox behavior)
   * Prevents adding more than MAX_TOPPINGS
   */
  const handleToppingToggle = useCallback(
    (topping: Ingredient) => {
      setSelectedToppings((prev) => {
        const isSelected = prev.some((t) => t.id === topping.id);

        if (isSelected) {
          // Remove topping
          return prev.filter((t) => t.id !== topping.id);
        } else {
          // Add topping only if under limit
          if (prev.length >= MAX_TOPPINGS) {
            return prev;
          }
          return [...prev, topping];
        }
      });
    },
    []
  );

  /**
   * Remove a specific topping (from chip click)
   */
  const handleRemoveTopping = useCallback((toppingId: string) => {
    setSelectedToppings((prev) => prev.filter((t) => t.id !== toppingId));
  }, []);

  /**
   * Reset all selections to default
   */
  const handleReset = useCallback(() => {
    setSelectedSauce(sauces[0]);
    setSelectedToppings([]);
  }, []);

  /**
   * Check if an ingredient is selected
   */
  const isIngredientSelected = useCallback(
    (ingredient: Ingredient): boolean => {
      if (ingredient.category === 'sauce') {
        return selectedSauce.id === ingredient.id;
      }
      return selectedToppings.some((t) => t.id === ingredient.id);
    },
    [selectedSauce, selectedToppings]
  );

  return (
    <section id="creator" className="section-padding bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pizza <span className="text-primary">Creator</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Build your own custom pizza! Choose a base and up to{' '}
            {MAX_TOPPINGS} toppings, then submit your creation to us!
          </p>
        </motion.div>

        {/* Main creator grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left column: Pizza preview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="sticky top-24">
              <PizzaPreview
                selectedSauce={selectedSauce}
                selectedToppings={selectedToppings}
              />
            </div>
          </motion.div>

          {/* Right column: Ingredient selection */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              {/* Category tabs */}
              <TabsList className="grid grid-cols-4 w-full mb-6">
                <TabsTrigger value="sauce" className="text-xs sm:text-sm">
                  {categoryLabels.sauce}
                </TabsTrigger>
                <TabsTrigger value="meat" className="text-xs sm:text-sm">
                  {categoryLabels.meat}
                </TabsTrigger>
                <TabsTrigger value="vegetable" className="text-xs sm:text-sm">
                  {categoryLabels.vegetable}
                </TabsTrigger>
                <TabsTrigger value="cheese" className="text-xs sm:text-sm">
                  {categoryLabels.cheese}
                </TabsTrigger>
              </TabsList>

              {/* Sauces tab */}
              <TabsContent value="sauce" className="mt-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {sauces.map((sauce) => (
                    <IngredientCard
                      key={sauce.id}
                      ingredient={sauce}
                      isSelected={isIngredientSelected(sauce)}
                      onSelect={() => handleSauceSelect(sauce)}
                      isDisabled={false}
                      selectionType="radio"
                    />
                  ))}
                </div>
              </TabsContent>

              {/* Meats tab */}
              <TabsContent value="meat" className="mt-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {meats.map((meat) => (
                    <IngredientCard
                      key={meat.id}
                      ingredient={meat}
                      isSelected={isIngredientSelected(meat)}
                      onSelect={() => handleToppingToggle(meat)}
                      isDisabled={isMaxToppingsReached && !isIngredientSelected(meat)}
                      selectionType="checkbox"
                    />
                  ))}
                </div>
              </TabsContent>

              {/* Vegetables tab */}
              <TabsContent value="vegetable" className="mt-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {vegetables.map((vegetable) => (
                    <IngredientCard
                      key={vegetable.id}
                      ingredient={vegetable}
                      isSelected={isIngredientSelected(vegetable)}
                      onSelect={() => handleToppingToggle(vegetable)}
                      isDisabled={isMaxToppingsReached && !isIngredientSelected(vegetable)}
                      selectionType="checkbox"
                    />
                  ))}
                </div>
              </TabsContent>

              {/* Cheeses tab */}
              <TabsContent value="cheese" className="mt-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {cheeses.map((cheese) => (
                    <IngredientCard
                      key={cheese.id}
                      ingredient={cheese}
                      isSelected={isIngredientSelected(cheese)}
                      onSelect={() => handleToppingToggle(cheese)}
                      isDisabled={isMaxToppingsReached && !isIngredientSelected(cheese)}
                      selectionType="checkbox"
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            {/* Topping limit warning */}
            <AnimatePresence>
              {isMaxToppingsReached && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 p-3 bg-accent/10 border border-accent/30 rounded-lg text-center"
                >
                  <p className="text-sm text-accent font-medium">
                    You've reached the maximum of {MAX_TOPPINGS} toppings! Remove one to add another.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Full-width order panel */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <OrderPanel
            basePrice={BASE_PIZZA_PRICE}
            selectedSauce={selectedSauce}
            selectedToppings={selectedToppings}
            totalPrice={totalPrice}
            maxToppings={MAX_TOPPINGS}
            onRemoveTopping={handleRemoveTopping}
            onReset={handleReset}
          />
        </motion.div>
      </div>
    </section>
  );
}

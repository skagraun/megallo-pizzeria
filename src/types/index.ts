/**
 * Type definitions for Megálló Pizzéria
 *
 * This file contains all TypeScript interfaces and types used throughout
 * the application for type safety and better developer experience.
 */

// ============================================
// INGREDIENT TYPES
// ============================================

/**
 * Categories of pizza ingredients
 * - sauce: Base sauce (only one can be selected)
 * - meat: Meat toppings
 * - vegetable: Vegetable toppings
 * - cheese: Cheese toppings
 */
export type IngredientCategory = 'sauce' | 'meat' | 'vegetable' | 'cheese';

/**
 * Single ingredient item with all its properties
 */
export interface Ingredient {
  id: string;              // Unique identifier (e.g., "c_h_s" for sonka)
  name: string;            // Display name in Hungarian
  nameEn?: string;         // Optional English name for accessibility
  price: number;           // Price in HUF (Forint)
  category: IngredientCategory;
  image: string;           // Path to the ingredient layer image
  emoji?: string;          // Optional emoji for visual representation
}

/**
 * Grouped ingredients by category for easier rendering
 */
export interface IngredientsByCategory {
  sauce: Ingredient[];
  meat: Ingredient[];
  vegetable: Ingredient[];
  cheese: Ingredient[];
}

// ============================================
// MENU TYPES
// ============================================

/**
 * Menu item categories
 */
export type MenuCategory = 'classic' | 'submitted' | 'gyros' | 'hamburger';

/**
 * Single menu item (pizza, gyros, etc.)
 */
export interface MenuItem {
  id: string;
  name: string;
  ingredients: string;     // Comma-separated ingredient list
  price: number;           // Price in HUF
  category: MenuCategory;
  submittedBy?: string;    // Name of person who submitted (for user pizzas)
  isNew?: boolean;         // Flag for new items
  isPopular?: boolean;     // Flag for popular items
}

// ============================================
// BUSINESS INFO TYPES
// ============================================

/**
 * Single day's opening hours
 */
export interface OpeningHours {
  day: string;             // Day name in Hungarian
  dayEn: string;           // Day name in English
  open: string | null;     // Opening time (null if closed)
  close: string | null;    // Closing time (null if closed)
  kitchenOpen?: string | null;   // Kitchen opening time
  kitchenClose?: string | null;  // Kitchen closing time
}

/**
 * Contact information for the restaurant
 */
export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  facebook?: string;
  instagram?: string;
}

/**
 * Complete business information
 */
export interface BusinessInfo {
  name: string;
  tagline: string;
  contact: ContactInfo;
  openingHours: OpeningHours[];
}

// ============================================
// PIZZA CREATOR TYPES
// ============================================

/**
 * State for the pizza creator component
 */
export interface PizzaCreatorState {
  selectedSauce: Ingredient | null;
  selectedToppings: Ingredient[];
  pizzaName: string;
  email: string;
}

/**
 * Pizza submission data for API
 */
export interface PizzaSubmission {
  pizzaName: string;
  email: string;
  sauce: string;
  toppings: string[];
  totalPrice: number;
}

// ============================================
// FORM TYPES
// ============================================

/**
 * Form state for pizza submission
 */
export interface PizzaFormData {
  name: string;
  email: string;
}

/**
 * API response for pizza submission
 */
export interface SubmissionResponse {
  success: boolean;
  message: string;
}

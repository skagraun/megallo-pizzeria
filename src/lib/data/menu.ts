/**
 * Menu Data for Megálló Pizzéria
 *
 * Contains all menu items including classic pizzas, user-submitted pizzas,
 * gyros items, and hamburgers. Each item includes name, ingredients, and price.
 */

import { MenuItem } from '@/types';

// ============================================
// CLASSIC PIZZAS
// Traditional pizza recipes
// ============================================

export const classicPizzas: MenuItem[] = [
  {
    id: 'margarita',
    name: 'Margarita',
    ingredients: 'tomato base, cheese',
    price: 1900,
    category: 'classic',
    isPopular: true,
  },
  {
    id: 'sonkas',
    name: 'Ham Pizza',
    ingredients: 'tomato base, ham, cheese',
    price: 2090,
    category: 'classic',
  },
  {
    id: 'szalamis',
    name: 'Salami Pizza',
    ingredients: 'tomato base, salami, cheese',
    price: 2200,
    category: 'classic',
  },
  {
    id: 'son-go-ku',
    name: 'Son-Go-Ku',
    ingredients: 'tomato base, ham, mushroom, corn, cheese',
    price: 2290,
    category: 'classic',
    isPopular: true,
  },
  {
    id: 'hawaii',
    name: 'Hawaii',
    ingredients: 'sour cream base, ham, pineapple, cheese',
    price: 2400,
    category: 'classic',
  },
  {
    id: 'negysajtos',
    name: 'Four Cheese',
    ingredients: 'tomato base, ham, trappist cheese, smoked cheese, parmesan, mozzarella',
    price: 2760,
    category: 'classic',
  },
  {
    id: 'magyaros',
    name: 'Hungarian Style',
    ingredients: 'tomato base, ham, sausage, onion, bacon, cheese',
    price: 2800,
    category: 'classic',
    isPopular: true,
  },
  {
    id: 'vega',
    name: 'Vegetarian',
    ingredients: 'tomato base, peas, mushroom, fresh tomato, corn, cheese',
    price: 2660,
    category: 'classic',
  },
  {
    id: 'kapros-tejfolos',
    name: 'Dill & Sour Cream',
    ingredients: 'sour cream base, ham, dill',
    price: 2100,
    category: 'classic',
  },
  {
    id: 'bolognai',
    name: 'Bolognese',
    ingredients: 'bolognese sauce, cheese',
    price: 2400,
    category: 'classic',
  },
  {
    id: 'gyrosos',
    name: 'Gyros Pizza',
    ingredients: 'sour cream base, gyros meat, onion, cheese',
    price: 2430,
    category: 'classic',
  },
  {
    id: 'szalonnas',
    name: 'Bacon Pizza',
    ingredients: 'sour cream base, bacon, smoked cheese',
    price: 2460,
    category: 'classic',
  },
];

// ============================================
// USER-SUBMITTED PIZZAS
// Pizzas created and submitted by customers
// ============================================

export const submittedPizzas: MenuItem[] = [
  {
    id: 'anya-hentesne',
    name: "Anya Hentesné's Pizza",
    ingredients: 'tomato base, ham, bacon, sausage, mushroom, corn, trappist',
    price: 2800,
    category: 'submitted',
    submittedBy: 'Anya Hentesné',
  },
  {
    id: 'ska-papa',
    name: "Ska Papa's Favorite",
    ingredients: 'spicy sour cream base, ham, bacon, pork loin, spicy pepperoni, boiled egg, cheddar',
    price: 3100,
    category: 'submitted',
    submittedBy: 'Ska Papa',
  },
  {
    id: 'kaliforniai',
    name: 'California',
    ingredients: 'sour cream base, ham, bacon, mushroom, bell pepper, mozzarella',
    price: 2670,
    category: 'submitted',
  },
  {
    id: 'kobaltas',
    name: 'Stone Age',
    ingredients: 'tomato base, ham, paprika salami, mushroom, olive, mozzarella',
    price: 2700,
    category: 'submitted',
  },
  {
    id: 'tarjas-alom',
    name: 'Pork Loin Dream',
    ingredients: 'sour cream base, ham, pork loin, red onion, pickled cucumber, boiled egg, feta',
    price: 2760,
    category: 'submitted',
  },
  {
    id: 'a-jo-pizza',
    name: 'The Good Pizza',
    ingredients: 'tomato base, ham, paprika salami, corn, spicy pepperoni, trappist',
    price: 2600,
    category: 'submitted',
  },
  {
    id: 'salvador-dali',
    name: 'Salvador Dali',
    ingredients: 'tomato base, bacon, parma ham, mushroom, fresh tomato, arugula, mozzarella',
    price: 3100,
    category: 'submitted',
    isPopular: true,
  },
  {
    id: 'parasztos',
    name: 'Rustic',
    ingredients: 'tomato base, paprika salami, bacon, sausage, red onion, boiled egg, trappist',
    price: 2800,
    category: 'submitted',
  },
  {
    id: 'monte-carlo',
    name: 'Monte-Carlo',
    ingredients: 'sour cream base, ham, bacon, red onion, trappist, feta',
    price: 2800,
    category: 'submitted',
  },
  {
    id: 'kihagyhatatlan',
    name: 'Unmissable',
    ingredients: 'sour cream base, bacon, pork loin, mushroom, red onion, spicy pepperoni, mozzarella',
    price: 2800,
    category: 'submitted',
  },
  {
    id: 'zgyf',
    name: 'Z.GY.F.',
    ingredients: 'tomato base, ham, bacon, pork loin, fresh tomato, spicy pepperoni, cheddar',
    price: 3100,
    category: 'submitted',
  },
  {
    id: 'mysterio',
    name: 'Mysterio',
    ingredients: 'spicy sour cream base, paprika salami, bacon, spicy pepperoni, olive, beans, cheddar',
    price: 3000,
    category: 'submitted',
  },
  {
    id: 'puskas-ocsi',
    name: 'Puskás Öcsi',
    ingredients: 'tomato base, paprika salami, bacon, mushroom, bell pepper, boiled egg, mozzarella',
    price: 2800,
    category: 'submitted',
  },
  {
    id: 'rukkolas',
    name: 'Arugula Special',
    ingredients: 'spicy sour cream base, bacon, parma ham, mushroom, arugula, mozzarella, feta',
    price: 3100,
    category: 'submitted',
  },
  {
    id: 'deadpool',
    name: 'Deadpool',
    ingredients: 'tomato base, parma ham, chicken ham, mushroom, olive, pineapple, trappist',
    price: 3100,
    category: 'submitted',
  },
  {
    id: 'roci-kedvence',
    name: "Roci's Favorite",
    ingredients: 'spicy tomato base, ham, bacon, pork loin, red onion, spicy pepperoni, trappist',
    price: 2800,
    category: 'submitted',
  },
  {
    id: 'kecsobacsi',
    name: 'KecsoBácsi',
    ingredients: 'tomato base, paprika salami, sausage, corn, trappist, cheddar',
    price: 2800,
    category: 'submitted',
  },
  {
    id: 'picijoci',
    name: "PiciJoci's Favorite",
    ingredients: 'spicy sour cream base, ham, bacon, red onion, boiled egg, trappist',
    price: 2660,
    category: 'submitted',
  },
  {
    id: 'magyaros-2',
    name: 'Hungarian 2.0',
    ingredients: 'tomato base, ham, bacon, pork loin, red onion, spicy pepperoni, trappist',
    price: 3000,
    category: 'submitted',
  },
  {
    id: 'egyszeru',
    name: 'Simple',
    ingredients: 'spicy tomato base, chicken ham, mushroom, red onion, spicy pepperoni, boiled egg, smoked cheese',
    price: 2800,
    category: 'submitted',
  },
  {
    id: 'mutter-kedvence',
    name: "Mutter's Favorite",
    ingredients: 'spicy sour cream base, bacon, pork loin, corn, pineapple, trappist',
    price: 3000,
    category: 'submitted',
  },
  {
    id: 'aniko-kedvence',
    name: "Anikó's Favorite",
    ingredients: 'tomato base, ham, paprika salami, bacon, corn, red onion, trappist',
    price: 2900,
    category: 'submitted',
  },
  {
    id: 'guinness',
    name: 'Guinness',
    ingredients: 'tomato base, ham, paprika salami, corn, red onion, pickled cucumber, trappist',
    price: 2700,
    category: 'submitted',
  },
  {
    id: 'piros-feher-zold',
    name: 'Red White Green',
    ingredients: 'tomato base, chicken ham, sun-dried tomato, arugula, olive, trappist, feta',
    price: 3000,
    category: 'submitted',
  },
];

// ============================================
// GYROS ITEMS
// ============================================

export const gyrosItems: MenuItem[] = [
  {
    id: 'gyros-tal',
    name: 'Gyros Plate',
    ingredients: 'gyros meat, tomato, red onion, lettuce, fries, cucumber, tzatziki',
    price: 3450,
    category: 'gyros',
  },
  {
    id: 'husevo-gyros',
    name: 'Carnivore Gyros Plate',
    ingredients: 'extra portion gyros meat, fries, tzatziki',
    price: 4290,
    category: 'gyros',
    isPopular: true,
  },
];

// ============================================
// HAMBURGERS
// ============================================

export const hamburgerItems: MenuItem[] = [
  {
    id: 'classic-burger',
    name: 'Classic Burger',
    ingredients: 'beef patty, lettuce, tomato, onion, pickles, house sauce',
    price: 2890,
    category: 'hamburger',
    isPopular: true,
  },
  {
    id: 'cheese-burger',
    name: 'Cheese Burger',
    ingredients: 'beef patty, double cheddar, lettuce, tomato, pickles, special sauce',
    price: 3250,
    category: 'hamburger',
  },
  {
    id: 'bacon-burger',
    name: 'Bacon Lover',
    ingredients: 'beef patty, crispy bacon, cheddar, caramelized onion, BBQ sauce',
    price: 3590,
    category: 'hamburger',
    isPopular: true,
  },
  {
    id: 'megallo-burger',
    name: 'Megálló Special',
    ingredients: 'double beef patty, bacon, cheddar, fried egg, jalapeños, chipotle mayo',
    price: 4490,
    category: 'hamburger',
    isNew: true,
  },
  {
    id: 'chicken-burger',
    name: 'Crispy Chicken',
    ingredients: 'crispy chicken fillet, lettuce, tomato, pickles, garlic mayo',
    price: 3090,
    category: 'hamburger',
  },
];

// ============================================
// COMBINED EXPORTS
// ============================================

/**
 * All menu items in a single array
 */
export const allMenuItems: MenuItem[] = [
  ...classicPizzas,
  ...submittedPizzas,
  ...gyrosItems,
  ...hamburgerItems,
];

/**
 * Menu sections for display
 * Each section has a title and associated items
 */
export const menuSections = [
  {
    id: 'classic',
    title: 'Classic Pizzas',
    items: classicPizzas,
  },
  {
    id: 'submitted',
    title: 'User-Submitted Pizzas',
    subtitle: 'Creations by our guests',
    items: submittedPizzas,
  },
  {
    id: 'gyros',
    title: 'Gyros',
    items: gyrosItems,
  },
  {
    id: 'hamburger',
    title: 'Hamburgers',
    items: hamburgerItems,
  },
];

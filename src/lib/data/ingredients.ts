/**
 * Pizza Ingredients Data
 *
 * Contains all available ingredients for the pizza creator,
 * organized by category (sauce, meat, vegetable, cheese).
 * Each ingredient has an associated image layer for the visual preview.
 */

import { Ingredient, IngredientsByCategory } from "@/types";

// ============================================
// SAUCES (Szószok)
// Only one sauce can be selected at a time
// ============================================

export const sauces: Ingredient[] = [
  {
    id: "c_sz_p",
    name: "Paradicsomos alap",
    nameEn: "Tomato base",
    price: 0,
    category: "sauce",
    image: "/images/pizza/c_sz_p.png",
    emoji: "🍅",
  },
  {
    id: "c_sz_csp",
    name: "Csípős paradicsomos alap",
    nameEn: "Spicy tomato base",
    price: 0,
    category: "sauce",
    image: "/images/pizza/c_sz_p.png", // Uses same image as regular tomato
    emoji: "🌶️",
  },
  {
    id: "c_sz_t",
    name: "Tejfölös alap",
    nameEn: "Sour cream base",
    price: 0,
    category: "sauce",
    image: "/images/pizza/c_sz_t.png",
    emoji: "🥛",
  },
  {
    id: "c_sz_cst",
    name: "Csípős tejfölös alap",
    nameEn: "Spicy sour cream base",
    price: 0,
    category: "sauce",
    image: "/images/pizza/c_sz_et.png",
    emoji: "🔥",
  },
  {
    id: "c_sz_b",
    name: "Bolognai alap",
    nameEn: "Bolognese base",
    price: 650,
    category: "sauce",
    image: "/images/pizza/c_sz_b.png",
    emoji: "🍖",
  },
];

// ============================================
// MEATS (Húsok)
// Multiple selections allowed (max 6 total toppings)
// ============================================

export const meats: Ingredient[] = [
  {
    id: "c_h_s",
    name: "Sonka",
    nameEn: "Ham",
    price: 350,
    category: "meat",
    image: "/images/pizza/c_h_s.png",
    emoji: "🥓",
  },
  {
    id: "c_h_psz",
    name: "Paprikás szalámi",
    nameEn: "Paprika salami",
    price: 350,
    category: "meat",
    image: "/images/pizza/c_h_psz.png",
    emoji: "🌭",
  },
  {
    id: "c_h_b",
    name: "Bacon",
    nameEn: "Bacon",
    price: 400,
    category: "meat",
    image: "/images/pizza/c_h_b.png",
    emoji: "🥓",
  },
  {
    id: "c_h_t",
    name: "Tarja",
    nameEn: "Pork loin",
    price: 450,
    category: "meat",
    image: "/images/pizza/c_h_t.png",
    emoji: "🍖",
  },
  {
    id: "c_h_ps",
    name: "Pármai sonka",
    nameEn: "Parma ham",
    price: 800,
    category: "meat",
    image: "/images/pizza/c_h_ps.png",
    emoji: "🇮🇹",
  },
  {
    id: "c_h_css",
    name: "Csirkemell sonka",
    nameEn: "Chicken ham",
    price: 350,
    category: "meat",
    image: "/images/pizza/c_h_css.png",
    emoji: "🐔",
  },
  {
    id: "c_h_k",
    name: "Kolbász",
    nameEn: "Sausage",
    price: 350,
    category: "meat",
    image: "/images/pizza/c_h_k.png",
    emoji: "🌭",
  },
  {
    id: "c_h_gh",
    name: "Gyros hús",
    nameEn: "Gyros meat",
    price: 750,
    category: "meat",
    image: "/images/pizza/c_h_gh.png",
    emoji: "🥙",
  },
];

// ============================================
// VEGETABLES (Zöldségek)
// Multiple selections allowed
// ============================================

export const vegetables: Ingredient[] = [
  {
    id: "c_z_g",
    name: "Gomba",
    nameEn: "Mushroom",
    price: 350,
    category: "vegetable",
    image: "/images/pizza/c_z_g.png",
    emoji: "🍄",
  },
  {
    id: "c_z_k",
    name: "Kukorica",
    nameEn: "Corn",
    price: 350,
    category: "vegetable",
    image: "/images/pizza/c_z_k.png",
    emoji: "🌽",
  },
  {
    id: "c_z_lh",
    name: "Lilahagyma",
    nameEn: "Red onion",
    price: 250,
    category: "vegetable",
    image: "/images/pizza/c_z_lh.png",
    emoji: "🧅",
  },
  {
    id: "c_z_b",
    name: "Borsó",
    nameEn: "Peas",
    price: 350,
    category: "vegetable",
    image: "/images/pizza/c_z_b.png",
    emoji: "🟢",
  },
  {
    id: "c_z_a",
    name: "Ananász",
    nameEn: "Pineapple",
    price: 400,
    category: "vegetable",
    image: "/images/pizza/c_z_a.png",
    emoji: "🍍",
  },
  {
    id: "c_z_fp",
    name: "Friss paradicsom",
    nameEn: "Fresh tomato",
    price: 350,
    category: "vegetable",
    image: "/images/pizza/c_z_fp.png",
    emoji: "🍅",
  },
  {
    id: "c_z_ap",
    name: "Aszalt paradicsom",
    nameEn: "Sun-dried tomato",
    price: 350,
    category: "vegetable",
    image: "/images/pizza/c_z_ap.png",
    emoji: "🍅",
  },
  {
    id: "c_z_r",
    name: "Rukkola",
    nameEn: "Arugula",
    price: 350,
    category: "vegetable",
    image: "/images/pizza/c_z_r.png",
    emoji: "🥬",
  },
  {
    id: "c_z_csp",
    name: "Csípős pepperoni",
    nameEn: "Spicy pepperoni",
    price: 250,
    category: "vegetable",
    image: "/images/pizza/c_z_csp.png",
    emoji: "🌶️",
  },
  {
    id: "c_z_ob",
    name: "Olíva bogyó",
    nameEn: "Olive",
    price: 400,
    category: "vegetable",
    image: "/images/pizza/c_z_ob.png",
    emoji: "🫒",
  },
  {
    id: "c_z_kp",
    name: "Kaliforniai paprika",
    nameEn: "Bell pepper",
    price: 350,
    category: "vegetable",
    image: "/images/pizza/c_z_kp.png",
    emoji: "🫑",
  },
  {
    id: "c_z_csu",
    name: "Csemege uborka",
    nameEn: "Pickled cucumber",
    price: 250,
    category: "vegetable",
    image: "/images/pizza/c_z_csu.png",
    emoji: "🥒",
  },
  {
    id: "c_z_kb",
    name: "Konzervbab",
    nameEn: "Canned beans",
    price: 250,
    category: "vegetable",
    image: "/images/pizza/c_z_kb.png",
    emoji: "🟤",
  },
  {
    id: "c_z_ft",
    name: "Főtt tojás",
    nameEn: "Boiled egg",
    price: 250,
    category: "vegetable",
    image: "/images/pizza/c_z_ft.png",
    emoji: "🥚",
  },
];

// ============================================
// CHEESES (Sajtok)
// Multiple selections allowed
// ============================================

export const cheeses: Ingredient[] = [
  {
    id: "c_s_t",
    name: "Trappista",
    nameEn: "Trappist cheese",
    price: 500,
    category: "cheese",
    image: "/images/pizza/c_s_t.png",
    emoji: "🧀",
  },
  {
    id: "c_s_m",
    name: "Mozzarella",
    nameEn: "Mozzarella",
    price: 500,
    category: "cheese",
    image: "/images/pizza/c_s_m.png",
    emoji: "🧀",
  },
  {
    id: "c_s_f",
    name: "Feta",
    nameEn: "Feta",
    price: 500,
    category: "cheese",
    image: "/images/pizza/c_s_f.png",
    emoji: "🧀",
  },
  {
    id: "c_s_c",
    name: "Cheddar",
    nameEn: "Cheddar",
    price: 500,
    category: "cheese",
    image: "/images/pizza/c_s_c.png",
    emoji: "🧀",
  },
  {
    id: "c_s_fs",
    name: "Füstölt sajt",
    nameEn: "Smoked cheese",
    price: 500,
    category: "cheese",
    image: "/images/pizza/c_s_fs.png",
    emoji: "🧀",
  },
];

// ============================================
// COMBINED & HELPER EXPORTS
// ============================================

/**
 * All ingredients grouped by category
 * Useful for rendering category tabs
 */
export const ingredientsByCategory: IngredientsByCategory = {
  sauce: sauces,
  meat: meats,
  vegetable: vegetables,
  cheese: cheeses,
};

/**
 * Flat array of all ingredients
 * Useful for searching/filtering
 */
export const allIngredients: Ingredient[] = [
  ...sauces,
  ...meats,
  ...vegetables,
  ...cheeses,
];

/**
 * Base pizza price in HUF (without any toppings)
 */
export const BASE_PIZZA_PRICE = 1800;

/**
 * Maximum number of toppings allowed (excluding sauce)
 */
export const MAX_TOPPINGS = 6;

/**
 * Category labels for UI display
 */
export const categoryLabels: Record<string, string> = {
  sauce: "Sauces",
  meat: "Meats",
  vegetable: "Vegetables",
  cheese: "Cheeses",
};

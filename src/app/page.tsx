/**
 * Home Page
 *
 * Main landing page that combines all sections:
 * - Hero: Welcome section with CTAs
 * - Pizza Creator: Interactive pizza builder
 * - Menu: Restaurant menu with all items
 * - Contact: Contact info and opening hours
 *
 * This is a single-page application where all content
 * is displayed on one scrollable page with smooth navigation.
 */

import { Hero } from '@/components/sections/Hero';
import { PizzaCreator } from '@/components/sections/PizzaCreator';
import { Menu } from '@/components/sections/Menu';
import { Contact } from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      {/* Hero section - Landing area with animated intro */}
      <Hero />

      {/* Pizza Creator - Interactive pizza builder tool */}
      <PizzaCreator />

      {/* Menu - Full restaurant menu */}
      <Menu />

      {/* Contact - Contact info and opening hours */}
      <Contact />
    </>
  );
}

/**
 * Business Information for Megálló Pizzéria
 *
 * Contains all business details including contact info,
 * opening hours, and other restaurant information.
 */

import { BusinessInfo, OpeningHours } from '@/types';

// ============================================
// OPENING HOURS
// ============================================

export const openingHours: OpeningHours[] = [
  {
    day: 'Monday',
    dayEn: 'Monday',
    open: null,
    close: null,
    kitchenOpen: null,
    kitchenClose: null,
  },
  {
    day: 'Tuesday',
    dayEn: 'Tuesday',
    open: '10:30',
    close: '22:00',
    kitchenOpen: '13:30',
    kitchenClose: '20:30',
  },
  {
    day: 'Wednesday',
    dayEn: 'Wednesday',
    open: '10:30',
    close: '22:00',
    kitchenOpen: '13:30',
    kitchenClose: '20:30',
  },
  {
    day: 'Thursday',
    dayEn: 'Thursday',
    open: '10:30',
    close: '22:00',
    kitchenOpen: '13:30',
    kitchenClose: '20:30',
  },
  {
    day: 'Friday',
    dayEn: 'Friday',
    open: '10:30',
    close: '00:00',
    kitchenOpen: '13:30',
    kitchenClose: '21:00',
  },
  {
    day: 'Saturday',
    dayEn: 'Saturday',
    open: '10:30',
    close: '00:00',
    kitchenOpen: '13:30',
    kitchenClose: '21:00',
  },
  {
    day: 'Sunday',
    dayEn: 'Sunday',
    open: '10:30',
    close: '22:00',
    kitchenOpen: '13:30',
    kitchenClose: '20:30',
  },
];

// ============================================
// COMPLETE BUSINESS INFO
// ============================================

export const businessInfo: BusinessInfo = {
  name: 'Megálló Pizzeria',
  tagline: 'The finest flavors in Zákányszék!',
  contact: {
    phone: '(62) 677-518',
    email: 'info@megallopizzeria.hu',
    address: 'Dózsa Gy. út 60.',
    city: 'Zákányszék',
    postalCode: '6787',
    facebook: 'https://www.facebook.com/profile.php?id=100076461300385',
    instagram: 'https://www.instagram.com/megallopizzeria',
  },
  openingHours,
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get formatted address string
 */
export function getFullAddress(): string {
  const { postalCode, city, address } = businessInfo.contact;
  return `${postalCode} ${city}, ${address}`;
}

/**
 * Check if restaurant is currently open
 * Note: This is a simplified check and doesn't account for holidays
 */
export function isCurrentlyOpen(): boolean {
  const now = new Date();
  const dayIndex = now.getDay(); // 0 = Sunday, 1 = Monday, etc.

  // Map JS day index to our array index (Monday = 0 in our array)
  const mappedIndex = dayIndex === 0 ? 6 : dayIndex - 1;
  const todayHours = openingHours[mappedIndex];

  // Closed if no opening hours
  if (!todayHours.open || !todayHours.close) {
    return false;
  }

  const currentTime = now.getHours() * 60 + now.getMinutes();

  // Parse opening and closing times
  const [openHour, openMin] = todayHours.open.split(':').map(Number);
  const [closeHour, closeMin] = todayHours.close.split(':').map(Number);

  const openTime = openHour * 60 + openMin;
  // Handle midnight (00:00) as 24:00
  const closeTime = closeHour === 0 ? 24 * 60 : closeHour * 60 + closeMin;

  return currentTime >= openTime && currentTime < closeTime;
}

/**
 * Check if kitchen is currently open
 */
export function isKitchenOpen(): boolean {
  const now = new Date();
  const dayIndex = now.getDay();
  const mappedIndex = dayIndex === 0 ? 6 : dayIndex - 1;
  const todayHours = openingHours[mappedIndex];

  if (!todayHours.kitchenOpen || !todayHours.kitchenClose) {
    return false;
  }

  const currentTime = now.getHours() * 60 + now.getMinutes();

  const [openHour, openMin] = todayHours.kitchenOpen.split(':').map(Number);
  const [closeHour, closeMin] = todayHours.kitchenClose.split(':').map(Number);

  const openTime = openHour * 60 + openMin;
  const closeTime = closeHour * 60 + closeMin;

  return currentTime >= openTime && currentTime < closeTime;
}

/**
 * Get today's opening hours formatted string
 */
export function getTodayHours(): string {
  const now = new Date();
  const dayIndex = now.getDay();
  const mappedIndex = dayIndex === 0 ? 6 : dayIndex - 1;
  const todayHours = openingHours[mappedIndex];

  if (!todayHours.open || !todayHours.close) {
    return 'Closed';
  }

  return `${todayHours.open} - ${todayHours.close}`;
}

// ============================================
// NAVIGATION LINKS
// ============================================

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#creator', label: 'Creator' },
  { href: '#menu', label: 'Menu' },
  { href: '#contact', label: 'Contact' },
];

// ============================================
// SOCIAL LINKS
// ============================================

export const socialLinks = [
  {
    name: 'Facebook',
    url: businessInfo.contact.facebook || '#',
    icon: 'facebook',
  },
  {
    name: 'Instagram',
    url: businessInfo.contact.instagram || '#',
    icon: 'instagram',
  },
];

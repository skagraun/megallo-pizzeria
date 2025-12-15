/**
 * Footer Component
 *
 * Site footer with:
 * - Business info and tagline
 * - Quick navigation links
 * - Opening hours summary
 * - Social media links
 * - Copyright notice
 */

'use client';

import { Pizza, Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import { businessInfo, openingHours, navLinks, socialLinks } from '@/lib/data/business-info';
import { cn } from '@/lib/utils';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Tagline */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-2 group">
              <Pizza className="w-8 h-8 text-primary transition-transform group-hover:rotate-12" />
              <span className="text-xl font-bold">
                <span className="text-primary">Megálló</span>
                <span className="text-foreground">Pizzéria</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm">
              {businessInfo.tagline}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href={businessInfo.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={businessInfo.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Navigation</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <a
                href={`tel:${businessInfo.contact.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                {businessInfo.contact.phone}
              </a>
              <a
                href={`mailto:${businessInfo.contact.email}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                {businessInfo.contact.email}
              </a>
              <div className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  {businessInfo.contact.postalCode} {businessInfo.contact.city},
                  <br />
                  {businessInfo.contact.address}
                </span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Opening Hours
            </h3>
            <div className="space-y-1 text-sm">
              {openingHours.map((day) => (
                <div
                  key={day.day}
                  className={cn(
                    'flex justify-between gap-4',
                    !day.open ? 'text-muted-foreground' : 'text-foreground'
                  )}
                >
                  <span>{day.day}</span>
                  <span className="font-medium">
                    {day.open && day.close ? `${day.open} - ${day.close}` : 'Closed'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-muted-foreground">
            <p>© {currentYear} Megálló Pizzéria. All rights reserved.</p>
            <p>
              Made by:{' '}
              <a
                href="https://www.skasoft.hu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                SkaSoft
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

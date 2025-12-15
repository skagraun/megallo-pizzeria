/**
 * Contact Section Component
 *
 * Displays restaurant contact information:
 * - Phone, email, address
 * - Opening hours table
 * - Open/closed status indicator
 * - Social media links
 */

'use client';

import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  Facebook,
  Instagram,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  businessInfo,
  openingHours,
  isCurrentlyOpen,
  isKitchenOpen,
  getFullAddress,
} from '@/lib/data/business-info';
import { cn } from '@/lib/utils';

export function Contact() {
  // Get current open status (client-side only)
  const restaurantOpen = typeof window !== 'undefined' ? isCurrentlyOpen() : false;
  const kitchenOpen = typeof window !== 'undefined' ? isKitchenOpen() : false;

  return (
    <section id="contact" className="section-padding bg-card/50">
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
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visit us or get in contact with our team!
          </p>
        </motion.div>

        {/* Contact grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left column: Contact info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Status badge - only show when open */}
            {restaurantOpen && (
              <div className="flex gap-2 flex-wrap">
                <Badge variant="default" className="text-sm py-1 bg-primary">
                  🟢 We are open!
                </Badge>
                <Badge
                  variant={kitchenOpen ? 'default' : 'outline'}
                  className="text-sm py-1"
                >
                  {kitchenOpen ? '👨‍🍳 Kitchen open' : '⏰ Kitchen closes soon'}
                </Badge>
              </div>
            )}

            {/* Contact cards */}
            <Card className="p-6 space-y-4">
              <h3 className="font-semibold text-lg text-foreground flex items-center gap-2">
                <span className="text-primary">📍</span> Contact Info
              </h3>

              {/* Phone */}
              <a
                href={`tel:${businessInfo.contact.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
              >
                <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground">{businessInfo.contact.phone}</p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${businessInfo.contact.email}`}
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
              >
                <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">{businessInfo.contact.email}</p>
                </div>
              </a>

              {/* Address */}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(getFullAddress())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
              >
                <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="font-medium text-foreground">{getFullAddress()}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </a>
            </Card>

            {/* Social links */}
            <Card className="p-6">
              <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">🌐</span> Follow us!
              </h3>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1"
                  asChild
                >
                  <a
                    href={businessInfo.contact.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="w-5 h-5 mr-2" />
                    Facebook
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1"
                  asChild
                >
                  <a
                    href={businessInfo.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-5 h-5 mr-2" />
                    Instagram
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Right column: Opening hours */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-6">
              <h3 className="font-semibold text-lg text-foreground mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Opening Hours
              </h3>

              {/* Hours table */}
              <div className="space-y-1">
                {openingHours.map((day, index) => {
                  // Highlight current day
                  const today = new Date().getDay();
                  const dayIndex = index === 6 ? 0 : index + 1; // Convert to JS day index
                  const isToday = today === dayIndex;

                  return (
                    <div
                      key={day.day}
                      className={cn(
                        'flex justify-between items-center p-3 rounded-lg transition-colors',
                        isToday && 'bg-primary/10 border border-primary/20',
                        !day.open && 'opacity-60'
                      )}
                    >
                      <div className="flex items-center gap-2">
                        {isToday && (
                          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        )}
                        <span className={cn('font-medium', isToday && 'text-primary')}>
                          {day.day}
                        </span>
                      </div>
                      <div className="text-right">
                        {day.open && day.close ? (
                          <>
                            <span className="font-medium">
                              {day.open} - {day.close}
                            </span>
                            {day.kitchenOpen && day.kitchenClose && (
                              <span className="block text-xs text-muted-foreground">
                                Kitchen: {day.kitchenOpen} - {day.kitchenClose}
                              </span>
                            )}
                          </>
                        ) : (
                          <span className="text-muted-foreground">Closed</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Additional info */}
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  💡 <strong>Tip:</strong> On weekends, it's worth ordering by phone in advance
                  as we tend to be very busy!
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * Menu Section Component
 *
 * Displays the restaurant menu with:
 * - Tab-based category navigation
 * - Card grid layout for menu items
 * - Popular/New badges with visual highlights
 * - Smooth animations and hover effects
 * - Mobile-optimized compact layout
 */

'use client';

import { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pizza, Beef, ChefHat, Flame, Star, Sparkles, ChevronLeft, ChevronRight, Search, ArrowUpDown, X, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { menuSections } from '@/lib/data/menu';
import { useFavorites } from '@/hooks/use-favorites';
import { cn } from '@/lib/utils';

/**
 * Get icon for menu category
 */
const getCategoryIcon = (categoryId: string) => {
  switch (categoryId) {
    case 'classic':
      return <Pizza className="w-4 h-4" />;
    case 'submitted':
      return <ChefHat className="w-4 h-4" />;
    case 'gyros':
      return <Flame className="w-4 h-4" />;
    case 'hamburger':
      return <Beef className="w-4 h-4" />;
    default:
      return <Pizza className="w-4 h-4" />;
  }
};

/**
 * Get emoji for menu category (for cards)
 */
const getCategoryEmoji = (categoryId: string) => {
  switch (categoryId) {
    case 'classic':
      return '🍕';
    case 'submitted':
      return '👨‍🍳';
    case 'gyros':
      return '🥙';
    case 'hamburger':
      return '🍔';
    default:
      return '🍕';
  }
};

/**
 * Format price for display with thousand separator
 */
const formatPrice = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' Ft';
};

/**
 * Individual menu item card component - Mobile optimized
 */
function MenuItemCard({
  id,
  name,
  ingredients,
  price,
  submittedBy,
  isNew,
  isPopular,
  categoryId,
  index,
  isFavorite,
  onToggleFavorite,
}: {
  id: string;
  name: string;
  ingredients: string;
  price: number;
  submittedBy?: string;
  isNew?: boolean;
  isPopular?: boolean;
  categoryId: string;
  index: number;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, delay: index * 0.02 }}
    >
      <Card
        className={cn(
          'group relative p-3 sm:p-4 h-full transition-all duration-300',
          'hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1',
          'border-border hover:border-primary/50',
          isPopular && 'ring-1 ring-primary/30 bg-primary/5'
        )}
      >
        {/* Popular glow effect */}
        {isPopular && (
          <div className="absolute inset-0 rounded-xl bg-linear-to-br from-primary/10 to-transparent pointer-events-none" />
        )}

        {/* Favorite button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite();
          }}
          className={cn(
            'absolute top-2 right-2 p-1.5 rounded-full transition-all duration-200 z-10',
            isFavorite
              ? 'text-red-500 bg-red-500/10 hover:bg-red-500/20'
              : 'text-muted-foreground hover:text-red-500 hover:bg-red-500/10'
          )}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart
            className={cn('w-4 h-4 transition-transform', isFavorite && 'fill-current scale-110')}
          />
        </button>

        {/* Header: Emoji + Name + Badges */}
        <div className="flex items-start gap-2 mb-2">
          <span className="text-xl sm:text-2xl shrink-0">{getCategoryEmoji(categoryId)}</span>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <h4 className="font-semibold text-sm sm:text-base text-foreground leading-tight truncate">
                {name}
              </h4>
              {isPopular && (
                <Badge variant="default" className="text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0 bg-primary shrink-0">
                  <Star className="w-2 h-2 sm:w-2.5 sm:h-2.5 mr-0.5" />
                  <span className="hidden xs:inline">Popular</span>
                  <span className="xs:hidden">!</span>
                </Badge>
              )}
              {isNew && (
                <Badge variant="secondary" className="text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0 shrink-0">
                  <Sparkles className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
                </Badge>
              )}
            </div>
            {/* Submitted by (inline on mobile) */}
            {submittedBy && (
              <p className="text-[10px] text-primary/80 truncate">
                By: {submittedBy}
              </p>
            )}
          </div>
        </div>

        {/* Ingredients */}
        <p className="text-[11px] sm:text-xs text-muted-foreground line-clamp-2 mb-2 min-h-[2rem] sm:min-h-10">
          {ingredients}
        </p>

        {/* Price */}
        <div className="pt-2 border-t border-border/50">
          <span className="text-base sm:text-lg font-bold text-primary">
            {formatPrice(price)}
          </span>
        </div>
      </Card>
    </motion.div>
  );
}

/**
 * Category tab button component - More compact on mobile
 */
function CategoryTab({
  section,
  isActive,
  onClick,
}: {
  section: typeof menuSections[0];
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300',
        'whitespace-nowrap shrink-0',
        isActive
          ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
          : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50'
      )}
    >
      {getCategoryIcon(section.id)}
      <span className="max-w-[80px] sm:max-w-none truncate">{section.title}</span>
      <Badge
        variant={isActive ? 'secondary' : 'outline'}
        className={cn(
          'text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0 hidden sm:flex',
          isActive && 'bg-primary-foreground/20 text-primary-foreground border-0'
        )}
      >
        {section.items.length}
      </Badge>
    </button>
  );
}

type SortOption = 'default' | 'price-asc' | 'price-desc';

export function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuSections[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('default');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);
  const { isFavorite, toggleFavorite, favoritesCount } = useFavorites();

  const activeSection = menuSections.find((s) => s.id === activeCategory) || menuSections[0];

  // Get all items with their category ID (for favorites across all categories)
  const allItemsWithCategory = useMemo(() => {
    return menuSections.flatMap((section) =>
      section.items.map((item) => ({ ...item, categoryId: section.id }))
    );
  }, []);

  // Filter and sort items
  const filteredAndSortedItems = useMemo(() => {
    // When showing favorites, get from ALL categories
    let items = showFavoritesOnly
      ? allItemsWithCategory.filter((item) => isFavorite(item.id))
      : activeSection.items.map((item) => ({ ...item, categoryId: activeSection.id }));

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.ingredients.toLowerCase().includes(query)
      );
    }

    // Sort items
    if (sortOption === 'price-asc') {
      items.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      items.sort((a, b) => b.price - a.price);
    }

    return items;
  }, [activeSection, allItemsWithCategory, searchQuery, sortOption, showFavoritesOnly, isFavorite]);

  const cycleSortOption = () => {
    setSortOption((prev) => {
      if (prev === 'default') return 'price-asc';
      if (prev === 'price-asc') return 'price-desc';
      return 'default';
    });
  };

  const getSortLabel = () => {
    if (sortOption === 'price-asc') return 'Price: Low to High';
    if (sortOption === 'price-desc') return 'Price: High to Low';
    return 'Sort by Price';
  };

  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabsRef.current) {
      const scrollAmount = 150;
      tabsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="menu" className="section-padding">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="text-center mb-6 sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
            Our <span className="text-primary">Menu</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Discover our classic pizzas and unique creations by our guests!
          </p>
        </motion.div>

        {/* Search and Sort controls */}
        <motion.div
          className="mb-4 sm:mb-6 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          {/* Search input */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by name or ingredient..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-9"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Favorites filter */}
          <Button
            variant={showFavoritesOnly ? 'default' : 'outline'}
            onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
            className="shrink-0"
          >
            <Heart className={cn('w-4 h-4 mr-2', showFavoritesOnly && 'fill-current')} />
            <span className="text-sm">
              {favoritesCount > 0 ? `Favorites (${favoritesCount})` : 'Favorites'}
            </span>
          </Button>

          {/* Sort button */}
          <Button
            variant={sortOption !== 'default' ? 'default' : 'outline'}
            onClick={cycleSortOption}
            className="shrink-0"
          >
            <ArrowUpDown className="w-4 h-4 mr-2" />
            <span className="text-sm">{getSortLabel()}</span>
          </Button>
        </motion.div>

        {/* Category tabs with scroll controls - hidden when showing favorites */}
        {!showFavoritesOnly && (
          <motion.div
            className="mb-6 sm:mb-8 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Scroll buttons - only on mobile */}
            <button
              onClick={() => scrollTabs('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-1 bg-background/80 backdrop-blur-sm rounded-full shadow-lg border border-border sm:hidden"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTabs('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-1 bg-background/80 backdrop-blur-sm rounded-full shadow-lg border border-border sm:hidden"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Tabs container */}
            <div
              ref={tabsRef}
              className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide px-6 sm:px-0 sm:justify-center snap-x snap-mandatory"
            >
              {menuSections.map((section) => (
                <div key={section.id} className="snap-start">
                  <CategoryTab
                    section={section}
                    isActive={activeCategory === section.id}
                    onClick={() => setActiveCategory(section.id)}
                  />
                </div>
              ))}
            </div>

            {/* Active category subtitle */}
            {activeSection.subtitle && (
              <motion.p
                key={activeSection.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4"
              >
                {activeSection.subtitle}
              </motion.p>
            )}
          </motion.div>
        )}

        {/* Favorites info message */}
        {showFavoritesOnly && (
          <motion.div
            className="mb-6 sm:mb-8 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-sm text-muted-foreground">
              Showing your favorites from all categories
            </p>
          </motion.div>
        )}

        {/* Menu items grid - 2 cols on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${searchQuery}-${sortOption}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filteredAndSortedItems.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
                  {filteredAndSortedItems.map((item, index) => (
                    <MenuItemCard
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      ingredients={item.ingredients}
                      price={item.price}
                      submittedBy={item.submittedBy}
                      isNew={item.isNew}
                      isPopular={item.isPopular}
                      categoryId={item.categoryId}
                      index={index}
                      isFavorite={isFavorite(item.id)}
                      onToggleFavorite={() => toggleFavorite(item.id)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <span className="text-4xl mb-4 block">
                    {showFavoritesOnly ? '❤️' : '🔍'}
                  </span>
                  <p className="text-muted-foreground">
                    {showFavoritesOnly && !searchQuery
                      ? 'No favorites yet. Click the heart icon on items to add them!'
                      : `No items found for "${searchQuery}"`}
                  </p>
                  <div className="flex gap-2 justify-center mt-3">
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="text-primary hover:underline text-sm"
                      >
                        Clear search
                      </button>
                    )}
                    {showFavoritesOnly && (
                      <button
                        onClick={() => setShowFavoritesOnly(false)}
                        className="text-primary hover:underline text-sm"
                      >
                        Show all items
                      </button>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Items count */}
        <motion.p
          className="text-center text-xs sm:text-sm text-muted-foreground mt-6 sm:mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {showFavoritesOnly ? (
            <>
              {filteredAndSortedItems.length} {filteredAndSortedItems.length === 1 ? 'favorite' : 'favorites'}
            </>
          ) : searchQuery ? (
            <>
              {filteredAndSortedItems.length} of {activeSection.items.length} items
            </>
          ) : (
            <>
              {activeSection.items.length} items in {activeSection.title}
            </>
          )}
        </motion.p>
      </div>
    </section>
  );
}

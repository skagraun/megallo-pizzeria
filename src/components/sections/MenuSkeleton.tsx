/**
 * Menu Skeleton Component
 *
 * Loading placeholder for the Menu section
 * Shows animated skeleton cards while content loads
 */

import { Skeleton } from '@/components/ui/skeleton';
import { Card } from '@/components/ui/card';

function MenuItemSkeleton() {
  return (
    <Card className="p-3 sm:p-4 h-full">
      {/* Header: Emoji + Name */}
      <div className="flex items-start gap-2 mb-2">
        <Skeleton className="w-6 h-6 sm:w-8 sm:h-8 rounded-full shrink-0" />
        <div className="flex-1 min-w-0">
          <Skeleton className="h-4 sm:h-5 w-3/4 mb-1" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>

      {/* Ingredients */}
      <div className="space-y-1 mb-2 min-h-[2rem] sm:min-h-10">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-2/3" />
      </div>

      {/* Price */}
      <div className="pt-2 border-t border-border/50">
        <Skeleton className="h-5 sm:h-6 w-20" />
      </div>
    </Card>
  );
}

function CategoryTabSkeleton() {
  return (
    <Skeleton className="h-9 sm:h-10 w-24 sm:w-32 rounded-full shrink-0" />
  );
}

export function MenuSkeleton() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-6 sm:mb-10">
          <Skeleton className="h-8 sm:h-10 w-48 mx-auto mb-2 sm:mb-4" />
          <Skeleton className="h-4 sm:h-5 w-64 mx-auto" />
        </div>

        {/* Category tabs */}
        <div className="mb-6 sm:mb-8">
          <div className="flex gap-2 sm:gap-3 justify-center">
            {[...Array(4)].map((_, i) => (
              <CategoryTabSkeleton key={i} />
            ))}
          </div>
        </div>

        {/* Menu items grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
          {[...Array(8)].map((_, i) => (
            <MenuItemSkeleton key={i} />
          ))}
        </div>

        {/* Items count */}
        <div className="text-center mt-6 sm:mt-8">
          <Skeleton className="h-4 w-32 mx-auto" />
        </div>
      </div>
    </section>
  );
}

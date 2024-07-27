import { cn } from '@/shared/utils';

import { AspectRatio } from './aspect-ratio';
import { Icons } from './icons';
import { Skeleton } from './skeleton';

interface PlaceholderImageProps
  extends React.ComponentPropsWithoutRef<typeof AspectRatio> {
  isSkeleton?: boolean;
  asChild?: boolean;
}

export const PlaceholderImage = ({
  isSkeleton = false,
  className,
  ...props
}: PlaceholderImageProps) => {
  return (
    <div
      {...props}
      className={cn('size-full overflow-hidden rounded-lg', className)}
    >
      <Skeleton
        aria-label="Placeholder"
        role="img"
        aria-roledescription="placeholder"
        className={cn(
          'flex size-full items-center justify-center',
          isSkeleton ? 'animate-pulse' : 'animate-none'
        )}
      >
        <Icons.placeholder
          className="size-9 text-muted-foreground"
          aria-hidden="true"
        />
      </Skeleton>
    </div>
  );
};

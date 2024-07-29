import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/shared/utils';

const shellVariants = cva('pb-8 pt-8 lg:py-6', {
  variants: {
    variant: {
      default: 'container',
      sidebar: '',
      centered: 'container flex h-dvh max-w-2xl flex-col justify-center',
      markdown: 'container max-w-3xl py-8 md:py-10',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type ShellProps = React.ComponentProps<'div'> &
  VariantProps<typeof shellVariants> & {
    as?: React.ElementType;
  };

function Shell({
  className,
  as: Comp = 'section',
  variant,
  ...props
}: ShellProps) {
  return (
    <Comp className={cn(shellVariants({ variant }), className)} {...props} />
  );
}

export { Shell, shellVariants };

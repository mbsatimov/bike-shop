import { Slot } from '@radix-ui/react-slot';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/shared/ui';
import { cn } from '@/shared/utils';

type Props = React.ComponentProps<'div'> & {
  title: string;
  description?: string;
  href?: string;
  linkText?: string;
  children: React.ReactNode;
  asChild?: boolean;
};

export const ContentSection = ({
  title,
  description,
  href,
  linkText = 'View all',
  children,
  className,
  asChild = false,
  ...props
}: Props) => {
  const ChildrenShell = asChild ? Slot : 'div';

  return (
    <section className={cn('space-y-6', className)} {...props}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex max-w-[61.25rem] flex-1 flex-col gap-0.5">
          <h2 className="text-2xl font-bold leading-[1.1] md:text-3xl">
            {title}
          </h2>
          {description ? (
            <p className="max-w-[46.875rem] text-balance text-sm leading-normal text-muted-foreground sm:text-base sm:leading-7">
              {description}
            </p>
          ) : null}
        </div>
        {href && (
          <Button variant="outline" className="hidden sm:flex" asChild>
            <Link href={href}>
              {linkText}
              <ArrowRightIcon className="ml-2 size-4" aria-hidden="true" />
              <span className="sr-only"> {linkText}</span>
            </Link>
          </Button>
        )}
      </div>
      <div className="space-y-8">
        <ChildrenShell className={cn(!asChild)}>{children}</ChildrenShell>
      </div>
    </section>
  );
};

import type { ComponentProps } from 'react';

import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui';

type Props = ComponentProps<typeof Popover> & {
  open?: boolean;
  setOpen?: () => void;
  children?: React.ReactNode;
  options?: ComponentProps<typeof PopoverContent>;
};

export const ProfilePopover = ({
  open,
  setOpen,
  children,
  options,
  ...props
}: Props) => {
  return (
    <Popover open={open} onOpenChange={setOpen} {...props}>
      {!!children && <PopoverTrigger asChild>{children}</PopoverTrigger>}
      <PopoverContent {...options}>
        Place content for the popover here.
      </PopoverContent>
    </Popover>
  );
};

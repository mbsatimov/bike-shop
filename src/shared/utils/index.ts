import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const formatPrice = (
  price: number | string,
  opts: Intl.NumberFormatOptions = {}
) =>
  new Intl.NumberFormat('uz-UZ', {
    style: 'currency',
    currency: opts.currency ?? 'UZS',
    notation: opts.notation ?? 'standard',
    ...opts,
  }).format(Number(price));

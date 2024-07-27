'use client';

import {
  usePathname,
  useRouter,
  useSearchParams as useNextSearchParams,
} from 'next/navigation';
import { useCallback } from 'react';

export const useSearchParams = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useNextSearchParams();

  const getParam = (name: string) => searchParams?.get(name);

  const setParam = useCallback(
    (name: string, value: string | number | null) => {
      const params = new URLSearchParams(searchParams?.toString());

      if (value) params.set(name, String(value));
      else params.delete(name);

      router.push(`${pathname}?${params.toString()}`);
    },
    [pathname, router, searchParams]
  );

  const clearParams = useCallback(
    (deleteParams?: string[]) => {
      const params = new URLSearchParams(searchParams?.toString());
      if (deleteParams) {
        deleteParams.forEach(param => params.delete(param));
        router.push(`${pathname}?${params.toString()}`);
      } else if (pathname) router.push(pathname);
    },
    [pathname, router, searchParams]
  );

  return {
    getParam,
    setParam,
    clearParams,
  };
};

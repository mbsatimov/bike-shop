import { Icons } from '@/shared/ui';

export interface NavItem {
  title: string;
  href?: string;
  active?: boolean;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
}

export type ApiResponse<T> = {
  success: boolean;
  data: T;
  error?: string;
};

export type RequestConfig<Params = undefined> = Params extends undefined
  ? { config?: RequestInit }
  : { config?: RequestInit; params: Params };

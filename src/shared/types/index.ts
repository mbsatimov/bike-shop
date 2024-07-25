export interface NavItem {
  title: string;
  href?: string;
  active?: boolean;
  disabled?: boolean;
  external?: boolean;
  // icon?: keyof typeof Icons;
  label?: string;
  description?: string;
}

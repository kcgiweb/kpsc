
export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export interface PageContent {
  title: string;
  subtitle?: string;
  content: string[];
  image?: string;
  icon?: any;
}

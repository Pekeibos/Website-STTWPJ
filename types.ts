export interface NavItem {
  label: string;
  path: string;
  subItems?: NavItem[];
}

export interface FacultyMember {
  id: number;
  name: string;
  title: string;
  image: string;
  role: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
}

export interface Program {
  id: string;
  degree: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}
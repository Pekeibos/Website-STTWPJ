import React from 'react';

export interface NavItem {
  label: string;
  path: string;
  subItems?: NavItem[];
}

export interface FacultyMember {
  id: number;
  name: string;
  role: string; // Jabatan Struktural
  title: string; // Gelar Akademik
  expertise: string;
  prodi: string; // Program Studi Homebase
  image: string;
  email: string;
  linkedin: string;
  biography?: string;
  education?: string[];
  publications?: string[];
  courses?: string[];
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
import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  avatar: string;
  rating: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface ProductSpec {
  id: string;
  size: string;
  weight: string;
  count: number; // pcs per bag
  bagsPerBale: number; // for wholesale
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
}
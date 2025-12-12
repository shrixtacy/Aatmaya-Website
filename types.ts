import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
}

export interface Prediction {
  sign: string;
  element: 'Fire' | 'Water' | 'Air' | 'Earth';
  forecast: string;
}

import React from 'react';
import { NavItem } from './types';

export const COLORS = {
  primary: '#6A0030',
  secondary: '#F7961E',
  accent1: '#8A1A72',
  accent2: '#C63A87',
};

export const NAVIGATION: NavItem[] = [
  { label: 'Home', path: '/' },
  { 
    label: 'About', 
    path: '/about',
    children: [
      { label: 'About Us', path: '/about/us' },
      { label: 'Philosophy', path: '/about/philosophy' },
      { label: 'Vision & Mission', path: '/about/vision-mission' },
      { label: 'Director’s Speak', path: '/about/directors-speak' },
      { label: 'Principal’s Message', path: '/about/principals-message' },
      { label: 'Faculty', path: '/about/faculty' },
      { label: 'Why KPS', path: '/about/why-kps' },
    ]
  },
  {
    label: 'Academics',
    path: '/academics',
    children: [
      { label: 'Overview', path: '/academics/overview' },
      { label: 'Curriculum', path: '/academics/curriculum' },
      { label: 'Assessment', path: '/academics/assessment' },
      { label: 'Holiday Calendar', path: '/academics/holidays' },
      { label: 'Library', path: '/academics/library' },
    ]
  },
  {
    label: 'Infrastructure',
    path: '/infrastructure',
    children: [
      { label: 'Overview', path: '/infrastructure/overview' },
      { label: 'Campus', path: '/infrastructure/campus' },
      { label: 'Details', path: '/infrastructure/details' },
      { label: 'Learning Program', path: '/infrastructure/lp' },
    ]
  },
  {
    label: 'School Life',
    path: '/school',
    children: [
      { label: 'Timings', path: '/school/timings' },
      { label: 'Code of Conduct', path: '/school/conduct' },
      { label: 'Uniform', path: '/school/uniform' },
      { label: 'Kit', path: '/school/kit' },
    ]
  },
  {
    label: 'Media',
    path: '/media',
    children: [
      { label: 'Gallery', path: '/media/gallery' },
      { label: 'News & Events', path: '/media/news' },
      { label: 'Blogs', path: '/media/blogs' },
      { label: 'Walkathon', path: '/media/walkathon' },
    ]
  },
  {
    label: 'Admissions',
    path: '/admissions',
    children: [
      { label: 'Process', path: '/admissions/process' },
      { label: 'FAQs', path: '/admissions/faqs' },
    ]
  },
  {
    label: 'Achievements',
    path: '/achievements',
    children: [
      { label: 'Awards', path: '/achievements/awards' },
      { label: 'Results', path: '/achievements/results' },
      { label: 'Co-curricular', path: '/achievements/co-curricular' },
      { label: 'Sports', path: '/achievements/sports' },
    ]
  },
  { label: 'Careers', path: '/careers' }
];

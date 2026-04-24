import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Expertise from '../pages/Expertise';
import Projects from '../pages/Projects';
import Research from '../pages/Research';
import Workshops from '../pages/Workshops';
import Mentorship from '../pages/Mentorship';
import Consultancy from '../pages/Consultancy';
import Media from '../pages/Media';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import CaseStudy from '../pages/CaseStudy';

import ProjectDetails from '../components/projects/ProjectDetails';
import BlogDetails from '../components/blog/BlogDetails';
import { trackPageView } from '../services/Analytics';

export default function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/expertise" element={<Expertise />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
      <Route path="/research" element={<Research />} />
      <Route path="/workshops" element={<Workshops />} />
      <Route path="/mentorship" element={<Mentorship />} />
      <Route path="/consultancy" element={<Consultancy />} />
      <Route path="/media" element={<Media />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/case-study" element={<CaseStudy />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
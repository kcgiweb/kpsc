import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  name?: string;
  type?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  name, 
  type, 
  image 
}) => {
  const location = useLocation();
  const domain = 'https://kpschool.edu.in'; // Replace with actual domain when ready
  const url = `${domain}${location.pathname}`;

  const defaultTitle = "Karnataka Public School";
  const defaultDescription = "Karnataka Public School is a progressive institution committed to academic excellence and holistic development. Ranked among top CBSE schools.";
  const defaultImage = `${domain}/images/homeGallery1.jpg`;
  
  const siteTitle = title ? `${title} | KPS` : defaultTitle;
  const siteDescription = description || defaultDescription;
  const siteImage = image ? (image.startsWith('http') ? image : `${domain}${image}`) : defaultImage;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      <meta name='description' content={siteDescription} />
      <link rel="canonical" href={url} />

      {/* Open Graph tags for Facebook, LinkedIn, etc. */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:type" content={type || "website"} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:site_name" content={name || "Karnataka Public School"} />

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name || "Karnataka Public School"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />
    </Helmet>
  );
};

export default SEO;

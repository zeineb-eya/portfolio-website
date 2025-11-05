import Head from 'next/head';

export default function SEOHead({ 
  title = "Zeineb Eya Rahmani - QA Engineer | BI Engineer | Business Analyst",
  description = "Computer Science Engineer with 3 years of experience in Quality Assurance, Business Intelligence, and Data Engineering. Specializing in automated testing, data pipelines, and business analysis.",
  keywords = "QA Engineer, Business Intelligence, Data Engineering, Business Analyst, Python, Power BI, Apache Airflow, Playwright, BigQuery, dbt, Quality Assurance, Tunisia",
  author = "Zeineb Eya Rahmani",
  url = "https://zeineb-eya.dev",
  image = "/og-image.png"
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Zeineb Eya Rahmani",
    "jobTitle": "Software Quality Assurance Engineer & Business Intelligence Engineer",
    "description": description,
    "url": url,
    "sameAs": [
      "https://www.linkedin.com/in/zeineb-eya-rahmani-1a453b156/",
      "https://github.com/zeineb-eya",
      "https://linktr.ee/zeineb_eya_rahmani"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "La Marsa",
      "addressRegion": "Tunis",
      "addressCountry": "Tunisia"
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "ESPRIT - École Supérieure Privée d'Ingénierie et de Technologies"
    },
    "knowsAbout": [
      "Quality Assurance",
      "Business Intelligence",
      "Data Engineering",
      "Machine Learning",
      "DevOps",
      "Business Analysis"
    ]
  };

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English, French, Arabic" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="fr_FR" />
      <meta property="og:locale:alternate" content="ar_AR" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Geo Tags */}
      <meta name="geo.region" content="TN-11" />
      <meta name="geo.placename" content="Tunis" />
      <meta name="geo.position" content="36.8065;10.1815" />
      <meta name="ICBM" content="36.8065, 10.1815" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" content="/apple-touch-icon.png" />
      
      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#9333ea" media="(prefers-color-scheme: dark)" />
      <meta name="theme-color" content="#FF5579" media="(prefers-color-scheme: light)" />
    </Head>
  );
}

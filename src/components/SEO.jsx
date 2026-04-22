// src/components/SEO.jsx
import { Helmet } from 'react-helmet-async'

const SEO = ({ title, description, url, image }) => {
  const baseUrl = 'https://samar-divine.vercel.app'
  const fullUrl = `${baseUrl}${url || '/'}`
  const ogImage = image || `${baseUrl}/og-image.jpg`

  return (
    <Helmet>
      <title>{title} | Samar Divine</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      <meta property="og:title" content={`${title} | Samar Divine`} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:title" content={`${title} | Samar Divine`} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}

export default SEO
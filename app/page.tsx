import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Process } from "@/components/Process";
import { Solutions } from "@/components/Solutions";
import { AIAgents } from "@/components/AIAgents";
import { GetStarted } from "@/components/GetStarted";
import { siteMetadata } from './metadata';


export const metadata = {
  title: 'Hocmillz AI Automation Agency | Custom AI Solutions & Automations',
  description: siteMetadata.description,
};

export default function HomePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Hocmillz AI Automation Agency',
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    sameAs: [
      'https://twitter.com/yourhandle',
      'https://linkedin.com/company/yourcompany',
      // Add your social media profiles
    ],
    address: {
      '@type': 'PostalAddress',
      // Add your address details
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+2349059612415',
      contactType: 'customer service'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <WhyChooseUs />
      <Process />
      <Solutions />
      <AIAgents />
      <GetStarted />
    </>
  );
}
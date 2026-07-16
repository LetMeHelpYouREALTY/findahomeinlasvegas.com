import { realtySiteConfig } from "@/lib/realty/site-config";
import { getSiteUrl } from "@/lib/site";

export function realEstateAgentSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: realtySiteConfig.agentName,
    jobTitle: realtySiteConfig.agentTitle,
    telephone: realtySiteConfig.phoneDisplay,
    url: getSiteUrl(),
    areaServed: {
      "@type": "City",
      name: `${realtySiteConfig.city}, ${realtySiteConfig.state}`,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: realtySiteConfig.city,
      addressRegion: realtySiteConfig.state,
      addressCountry: "US",
    },
    worksFor: {
      "@type": "RealEstateAgent",
      name: realtySiteConfig.brokerage,
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

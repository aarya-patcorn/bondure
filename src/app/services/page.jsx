"use client";

import "./services-page.css";

import Copy from "@/components/Copy/Copy";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import HowWeWork from "@/components/HowWeWork/HowWeWork";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import PreflightRequest from "@/components/PreflightRequest/PreflightRequest";
import Spotlight from "@/components/Spotlight/Spotlight";
import ServiceImageTower from "@/components/ServiceImageTower/ServiceImageTower";
import TelescopeSpotlight from "@/components/TelescopeSpotlight/TelescopeSpotlight";

const copy = {
  en: {
    heading: "Our services",
    cta: "Explore our YouTube channel",
    pillars: [
      {
        key: "recommendation",
        title: "Product recommendation",
        description: "Select systems through substrate, exposure, finish, application method, performance requirements, and specific project constraints on site.",
      },
      {
        key: "call",
        title: "Technical call support",
        description: "Access direct technical reasoning whenever specifications, site conditions, installation details, or performance expectations change during work.",
      },
      {
        key: "quality",
        title: "Onsite quality support",
        description: "Verify preparation, mixing, application, and acceptance onsite, with Bondure's mobile lab van bringing competitor products for live side-by-side comparison and testing.",
      },
      {
        key: "training",
        title: "Application training programs",
        description: "Transform product instructions into repeatable practical skills through structured demonstrations for applicators, supervisors, and project teams.",
      },
    ],
  },
  de: {
    heading: "Unsere Services",
    cta: "Unseren YouTube-Kanal entdecken",
    pillars: [
      {
        key: "recommendation",
        title: "Produktempfehlung",
        description: "Wählen Sie Systeme anhand von Untergrund, Beanspruchung, Oberfläche, Anwendungsmethode, Leistungsanforderungen und den spezifischen Projektbedingungen vor Ort aus.",
      },
      {
        key: "call",
        title: "Technischer Telefonsupport",
        description: "Erhalten Sie direkte technische Beratung, wenn sich Spezifikationen, Baustellenbedingungen, Ausführungsdetails oder Leistungserwartungen während der Arbeiten ändern.",
      },
      {
        key: "quality",
        title: "Qualitätssicherung vor Ort",
        description: "Überprüfen Sie Vorbereitung, Mischung, Anwendung und Abnahme vor Ort. Das mobile Laborfahrzeug von Bondure bringt Wettbewerbsprodukte für direkte Live-Vergleiche und Tests mit.",
      },
      {
        key: "training",
        title: "Anwendungsschulungen",
        description: "Überführen Sie Produktanweisungen durch strukturierte Vorführungen für Anwender, Bauleiter und Projektteams in wiederholbare praktische Fähigkeiten.",
      },
    ],
  },
};

const serviceBlogPosts = [
  {
    slug: "application-training-risk-management",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85",
    title: "Application Training as Risk Management",
    description: "Why Most Site Failures Aren't About the Product",
  },
  {
    slug: "mobile-testing-lab",
    image: "/blog/van_lab.jpeg",
    title: "What a Mobile Testing Lab",
    description: "Can Tell You Before You Ever Specify a Product",
  },
  {
    slug: "diagnosing-recurring-tile-debonding",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85",
    title: "Diagnosing a Recurring Tile Debonding Issue",
    description: "An On-Site Quality Audit Walkthrough",
  },
];

function PillarIllustration({ type }) {
  if (type === "recommendation") {
    return (
      <img
        className="service-pillar-art"
        src="/media/pillar-product-bag.svg"
        alt=""
        aria-hidden="true"
      />
    );
  }

  if (type === "call") {
    return (
      <img
        className="service-pillar-art service-pillar-art--call"
        src="/media/pillar-technical-call.svg"
        alt=""
        aria-hidden="true"
      />
    );
  }

  if (type === "quality") {
    return (
      <img
        className="service-pillar-art service-pillar-art--quality"
        src="/media/pillar-onsite-quality.svg"
        alt=""
        aria-hidden="true"
      />
    );
  }

  if (type === "training") {
    return (
      <img
        className="service-pillar-art service-pillar-art--training"
        src="/media/pillar-application-training.svg"
        alt=""
        aria-hidden="true"
      />
    );
  }

  return null;
}

export default function ServicesPage() {
  const { locale } = useLocale();
  const content = copy[locale];

  return (
    <>
      <main className="services-page">
        <ServiceImageTower />

        <section className="service-pillars">
          <div className="container service-pillars-heading">
            <Copy delay={0.1}>
              <h2>{content.heading}</h2>
            </Copy>
          </div>
          <div className="container service-pillars-list">
            {content.pillars.map((pillar) => (
              <article className="service-pillar" key={pillar.key} tabIndex={0}>
                <div className="service-pillar-visual"><PillarIllustration type={pillar.key} /></div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="how-we-work-container">
          <div className="container">
            <HowWeWork />
          </div>
        </section>

        <PreflightRequest />

        <Spotlight includeMobileUnit={false} />

        <TelescopeSpotlight />

        <section className="service-blog" aria-labelledby="service-blog-title">
          <div className="service-blog__inner">
            <div className="service-blog__heading">
              <h2 id="service-blog-title">From the site.</h2>
              <p>Practical guidance for stronger applications and fewer site surprises.</p>
            </div>
            <div className="service-blog__grid">
              {serviceBlogPosts.map((post) => (
                <article className="service-blog-card" key={post.title}>
                  <div className="service-blog-card__image">
                    <img src={post.image} alt="" loading="lazy" decoding="async" />
                  </div>
                  <div className="service-blog-card__body">
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <a href={`/articles/${post.slug}`}>Read more</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

      </main>
      <ConditionalFooter />
    </>
  );
}

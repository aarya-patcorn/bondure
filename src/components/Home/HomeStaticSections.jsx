"use client";

import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import "./HomePage.css";

const homeCopy = {
  en: {
    standardsLead: "Excellence",
    standardsTail: "through stringent quality standards.",
    certificationLogo: "certification logo",
  },
  de: {
    standardsLead: "Exzellenz",
    standardsTail: "durch strenge Qualitätsstandards.",
    certificationLogo: "Zertifizierungslogo",
  },
};

export default function HomeStaticSections() {
  const { locale } = useLocale();
  const copy = homeCopy[locale];

  return (
    <>
      <section className="home-standards" aria-labelledby="standards-title">
        <div className="home-standards__inner">
          <div className="home-section-intro">
            <h2 id="standards-title" className="home-standards__title home-section-heading">
              <strong>{copy.standardsLead}</strong> {copy.standardsTail}
            </h2>
          </div>

          <div className="home-standards__logos">
            <img
              src="/home-media/en-certification-logo.svg"
              alt={`EN ${copy.certificationLogo}`}
              loading="lazy"
              decoding="async"
            />
            <img
              src="/home-media/iso-certification-logo.svg"
              alt={`ISO ${copy.certificationLogo}`}
              loading="lazy"
              decoding="async"
            />
            <img
              src="/home-media/isi-certification-logo.svg"
              alt={`ISI ${copy.certificationLogo}`}
              loading="lazy"
              decoding="async"
            />
            <img
              src="/home-media/certification-logo.svg"
              alt={`IGBC ${copy.certificationLogo}`}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </>
  );
}
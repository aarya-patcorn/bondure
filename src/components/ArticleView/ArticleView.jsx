"use client";

import { useRouter } from "next/navigation";

import { requestPageTransition } from "../PageTransition/PageTransition";
import { useLocale } from "../LocaleProvider/LocaleProvider";

import "./ArticleView.css";

export default function ArticleView({ article, backHref = "/services", backLabel }) {
  const { locale, t } = useLocale();
  const router = useRouter();
  const localize = (value) => (typeof value === "object" && value !== null ? value[locale] || value.en : value);
  const localizedBackLabel = backLabel ? localize(backLabel) : t("articleBack");

  const handleBack = () => {
    // Return to the previously open page when there is history to go back to,
    // otherwise fall back to a sensible default route.
    const navigate = () => {
      if (typeof window !== "undefined" && window.history.length > 1) {
        router.back();
      } else {
        router.push(backHref);
      }
    };
    // Play the same block-wipe transition as the "Read more" open animation.
    // backHref is used only as a non-matching sentinel so the guard passes;
    // the actual navigation is performed by the callback (router.back()).
    requestPageTransition(backHref, navigate);
  };

  return (
    <article className="article-view" lang={locale}>
      <header className="article-view__hero">
        <div className="article-view__hero-copy">
          <button type="button" className="article-view__back" onClick={handleBack}>← {localizedBackLabel}</button>
          <div className="article-view__hero-text">
            <h1>{localize(article.title)}</h1>
            <p className="article-view__summary">{localize(article.summary)}</p>
          </div>
        </div>
        <figure className="article-view__hero-media">
          <img src={article.image} alt={localize(article.imageAlt)} />
        </figure>
      </header>

      <div className="article-view__body">
        {article.sections.map((section, index) => (
          <section className="article-view__section" key={index}>
            {section.heading && <h2>{localize(section.heading)}</h2>}
            {section.paragraphs?.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{localize(paragraph)}</p>)}
            {section.points && (
              <div className="article-view__points">
                {section.points.map((point, pointIndex) => (
                  <p key={pointIndex}>
                    <strong>{localize(point.label)}</strong> {localize(point.text)}
                  </p>
                ))}
              </div>
            )}
            {section.paragraphsAfter?.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{localize(paragraph)}</p>)}
          </section>
        ))}

        {article.action && (
          <div className="article-view__action">
            <a href={article.action.href}>{localize(article.action.label)} <span aria-hidden="true">→</span></a>
          </div>
        )}
      </div>
    </article>
  );
}

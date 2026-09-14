"use client";

import Link from "next/link";

import { useLocale } from "../LocaleProvider/LocaleProvider";

import "./ArticleView.css";

export default function ArticleView({ article, backHref = "/services", backLabel }) {
  const { locale, t } = useLocale();
  const localize = (value) => (typeof value === "object" && value !== null ? value[locale] || value.en : value);
  const localizedBackLabel = backLabel ? localize(backLabel) : t("articleBackToServices");

  return (
    <article className="article-view" lang={locale}>
      <header className="article-view__hero">
        <div className="article-view__hero-copy">
          <Link className="article-view__back" href={backHref}>← {localizedBackLabel}</Link>
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
            <Link href={article.action.href}>{localize(article.action.label)} <span aria-hidden="true">→</span></Link>
          </div>
        )}
      </div>
    </article>
  );
}

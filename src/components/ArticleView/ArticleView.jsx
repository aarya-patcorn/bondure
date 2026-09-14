import Link from "next/link";

import "./ArticleView.css";

export default function ArticleView({ article, backHref = "/services", backLabel = "Back to services" }) {
  return (
    <article className="article-view">
      <header className="article-view__hero">
        <div className="article-view__hero-copy">
          <Link className="article-view__back" href={backHref}>← {backLabel}</Link>
          <p className="article-view__eyebrow">Bondure journal</p>
          <h1>{article.title}</h1>
          <p className="article-view__summary">{article.summary}</p>
        </div>
        <figure className="article-view__hero-media">
          <img src={article.image} alt={article.imageAlt} />
        </figure>
      </header>

      <div className="article-view__body">
        {article.sections.map((section, index) => (
          <section className="article-view__section" key={section.heading || index}>
            {section.heading && <h2>{section.heading}</h2>}
            {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.points && (
              <div className="article-view__points">
                {section.points.map((point) => (
                  <p key={point.label}>
                    <strong>{point.label}</strong> {point.text}
                  </p>
                ))}
              </div>
            )}
          </section>
        ))}

        {article.action && (
          <div className="article-view__action">
            <Link href={article.action.href}>{article.action.label} <span aria-hidden="true">→</span></Link>
          </div>
        )}
      </div>
    </article>
  );
}

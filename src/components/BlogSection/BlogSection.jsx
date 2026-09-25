import BlogCard from "./BlogCard";

import "./BlogSection.css";

export default function BlogSection({
  heading,
  description,
  posts = [],
  locale = "en",
  titleId = "blog-section-title",
  className = "",
  style,
}) {
  const readMoreLabel = locale === "de" ? "Weiterlesen" : "Read more";

  return (
    <section
      className={`blog-section${className ? ` ${className}` : ""}`}
      style={style}
      aria-labelledby={titleId}
    >
      <div className="blog-section__inner">
        <div className="blog-section__heading">
          <h2 id={titleId}>{heading}</h2>
          {description ? <p>{description}</p> : null}
        </div>
        <div className="blog-section__grid">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              post={post}
              locale={locale}
              readMoreLabel={readMoreLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

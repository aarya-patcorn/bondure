export default function BlogCard({ post, locale, readMoreLabel }) {
  const localize = (value) =>
    typeof value === "object" && value !== null ? value[locale] || value.en : value;

  return (
    <article className="blog-card">
      <div className="blog-card__image">
        <img src={post.image} alt="" loading="lazy" decoding="async" />
      </div>
      <div className="blog-card__body">
        <h3>{localize(post.title)}</h3>
        <p>{localize(post.description)}</p>
        <a href={`/articles/${post.slug}`}>{readMoreLabel}</a>
      </div>
    </article>
  );
}

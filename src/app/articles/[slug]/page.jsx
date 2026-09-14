import { notFound } from "next/navigation";

import ArticleView from "@/components/ArticleView/ArticleView";
import { allArticleSlugs, getServiceArticle } from "@/lib/service-articles";

export function generateStaticParams() {
  return allArticleSlugs().map((slug) => ({ slug }));
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getServiceArticle(slug);

  if (!article) notFound();

  return <ArticleView article={article} />;
}

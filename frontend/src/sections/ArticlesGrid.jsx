import { useState } from "react";
import articles from "../data/articles";
import ArticleCard from "../components/ArticleCard";
import ArticleModal from "./ArticleModal";

const ArticlesGrid = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const visibleArticles = articles.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section id="articles-grid" className="py-24 bg-[#FCFCFC]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[5px] text-[#B89B5E] text-sm font-medium">
            Latest Articles
          </span>

          <h2 className="mt-5 font-cormorant text-5xl font-semibold text-[#1F3657]">
            Explore Our Publications
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            Stay informed with legal insights, practical guidance, and expert
            perspectives across a wide range of legal disciplines.
          </p>
        </div>

        {/* Grid */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {visibleArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onClick={setSelectedArticle}
            />
          ))}
        </div>

        {/* Load More */}

        {visibleCount < articles.length && (
          <div className="mt-16 text-center">
            <button
              onClick={handleLoadMore}
              className="
                rounded-xl
                border-2
                border-[#1F3657]
                px-8
                py-4
                font-medium
                text-[#1F3657]
                transition
                hover:bg-[#1F3657]
                hover:text-white
              "
            >
              Load More Articles
            </button>
          </div>
        )}
      </div>

      {/* Modal */}

      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </section>
  );
};

export default ArticlesGrid;

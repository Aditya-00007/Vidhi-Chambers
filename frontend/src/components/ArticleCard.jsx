import { CalendarDays, Clock, ArrowRight } from "lucide-react";

const ArticleCard = ({ article, onClick }) => {
  return (
    <article
      onClick={() => onClick(article)}
      className="
        group
        cursor-pointer
        overflow-hidden
        rounded-3xl
        bg-white
        border
        border-slate-200
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Image */}

      <div className="overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="
            h-60
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}

      <div className="p-7">
        {/* Category */}

        <span
          className="
            inline-block
            rounded-full
            bg-[#B89B5E]/10
            px-4
            py-1
            text-xs
            font-medium
            uppercase
            tracking-[2px]
            text-[#B89B5E]
          "
        >
          {article.category}
        </span>

        {/* Title */}

        <h3
          className="
            mt-5
            font-cormorant
            text-3xl
            font-semibold
            leading-tight
            text-[#1F3657]
            transition-colors
            duration-300
            group-hover:text-[#B89B5E]
          "
        >
          {article.title}
        </h3>

        {/* Excerpt */}

        <p
          className="
            mt-4
            line-clamp-3
            text-slate-600
            leading-7
          "
        >
          {article.excerpt}
        </p>

        {/* Meta */}

        <div
          className="
            mt-6
            flex
            items-center
            gap-5
            text-sm
            text-slate-500
          "
        >
          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            {article.date}
          </div>

          <div className="flex items-center gap-2">
            <Clock size={16} />
            {article.readTime}
          </div>
        </div>

        {/* Read More */}

        <div
          className="
            mt-8
            inline-flex
            items-center
            gap-2
            font-medium
            text-[#1F3657]
            transition-colors
            duration-300
            group-hover:text-[#B89B5E]
          "
        >
          Read Article
          <ArrowRight
            size={18}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;

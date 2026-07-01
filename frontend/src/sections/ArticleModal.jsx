import { X, CalendarDays, Clock } from "lucide-react";

const ArticleModal = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/60
        backdrop-blur-sm
        p-4
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          w-full
          max-w-5xl
          max-h-[90vh]
          overflow-y-auto
          rounded-3xl
          bg-white
          shadow-2xl
        "
      >
        {/* Close */}

        <button
          onClick={onClose}
          className="
            absolute
            right-6
            top-6
            z-20
            rounded-full
            bg-white
            p-2
            shadow-md
            hover:bg-slate-100
          "
        >
          <X size={22} />
        </button>

        {/* Image */}

        <img
          src={article.image}
          alt={article.title}
          className="
            h-80
            w-full
            object-cover
          "
        />

        {/* Content */}

        <div className="p-10">
          {/* Category */}

          <span
            className="
              rounded-full
              bg-[#B89B5E]/10
              px-4
              py-2
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

          <h2
            className="
              mt-6
              font-cormorant
              text-5xl
              font-semibold
              leading-tight
              text-[#1F3657]
            "
          >
            {article.title}
          </h2>

          {/* Meta */}

          <div
            className="
              mt-6
              flex
              flex-wrap
              gap-6
              text-slate-500
            "
          >
            <div className="flex items-center gap-2">
              <CalendarDays size={18} />

              {article.date}
            </div>

            <div className="flex items-center gap-2">
              <Clock size={18} />

              {article.readTime}
            </div>
          </div>

          {/* Divider */}

          <div className="my-8 h-px bg-slate-200" />

          {/* Article */}

          <div
            className="
              whitespace-pre-line
              text-lg
              leading-9
              text-slate-700
            "
          >
            {article.content}
          </div>

          {/* Footer */}

          <div className="mt-12 border-t border-slate-200 pt-8">
            <button
              onClick={onClose}
              className="
                rounded-xl
                bg-[#1F3657]
                px-8
                py-4
                font-medium
                text-white
                transition
                hover:bg-[#162844]
              "
            >
              Close Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleModal;

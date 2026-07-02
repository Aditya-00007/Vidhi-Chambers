import { useEffect, useState } from "react";
import api from "../../api/axios";
import { Edit2, Trash2, Plus, X } from "lucide-react";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(null); // null for create, object for edit
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    read_time: "",
    cover_image: "",
    author: "Vidhi Chambers",
  });

  const categories = [
    "Corporate Law",
    "Property Law",
    "Arbitration",
    "Constitutional Law",
    "Labour Law",
    "Intellectual Property",
    "Consumer Law",
    "Family Law",
    "General"
  ];

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const { data } = await api.get("/api/articles");
      setArticles(data.articles);
    } catch (err) {
      setError("Failed to fetch articles. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const openCreateModal = () => {
    setCurrentArticle(null);
    setForm({
      title: "",
      excerpt: "",
      content: "",
      category: "General",
      read_time: "5 min read",
      cover_image: "",
      author: "Vidhi Chambers",
    });
    setError("");
    setModalOpen(true);
  };

  const openEditModal = (article) => {
    setCurrentArticle(article);
    setForm({
      title: article.title,
      excerpt: article.excerpt || "",
      content: article.content,
      category: article.category || "General",
      read_time: article.read_time || "5 min read",
      cover_image: article.cover_image || "",
      author: article.author || "Vidhi Chambers",
    });
    setError("");
    setModalOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      if (currentArticle) {
        // Edit mode
        await api.put(`/api/articles/${currentArticle.id}`, form);
      } else {
        // Create mode
        await api.post("/api/articles", form);
      }
      setModalOpen(false);
      fetchArticles();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to save article.");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this article? This action cannot be undone.")) {
      return;
    }

    try {
      await api.delete(`/api/articles/${id}`);
      fetchArticles();
    } catch (err) {
      alert(err.response?.data?.message || "Failed to delete article.");
      console.error(err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-cormorant text-3xl font-bold text-[#304669]">Manage Articles</h1>
          <p className="text-sm text-slate-500">Publish, edit, or delete articles and publications.</p>
        </div>
        <button
          onClick={openCreateModal}
          className="flex items-center gap-2 rounded-lg bg-[#304669] px-4 py-2.5 font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#243652] hover:shadow-lg active:scale-95 cursor-pointer"
        >
          <Plus size={18} />
          Create Article
        </button>
      </div>

      {loading ? (
        <div className="flex h-64 items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-[#304669]"></div>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Cover</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Title</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Category</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Author</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Published</th>
                <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {articles.map((article) => (
                <tr key={article.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="whitespace-nowrap px-6 py-4">
                    {article.cover_image ? (
                      <img
                        src={article.cover_image}
                        alt=""
                        className="h-10 w-16 rounded-md object-cover border border-slate-100 shadow-sm"
                      />
                    ) : (
                      <div className="flex h-10 w-16 items-center justify-center rounded-md bg-slate-100 text-xs font-medium text-slate-400">
                        No Image
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="max-w-md">
                      <div className="font-semibold text-slate-900 line-clamp-1">{article.title}</div>
                      <div className="text-xs text-slate-400 line-clamp-1">{article.excerpt || "No description"}</div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span className="inline-flex rounded-full bg-[#B89B5E]/15 px-2.5 py-1 text-xs font-medium text-[#8c713b]">
                      {article.category}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">{article.author}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500">
                    {new Date(article.created_at).toLocaleDateString("en-IN", {
                      dateStyle: "medium"
                    })}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-center text-sm font-medium">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => openEditModal(article)}
                        className="rounded-lg p-1.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-950 cursor-pointer"
                        title="Edit Article"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(article.id)}
                        className="rounded-lg p-1.5 text-red-500 transition-colors hover:bg-red-50 hover:text-red-700 cursor-pointer"
                        title="Delete Article"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {articles.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-sm text-slate-500">
                    No articles found. Click "Create Article" to write your first post.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal for Article Form */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
          <div className="w-full max-w-3xl rounded-2xl bg-white shadow-2xl transition-all duration-300 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
            <header className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
              <h2 className="font-cormorant text-2xl font-bold text-[#304669]">
                {currentArticle ? "Edit Article" : "Create New Article"}
              </h2>
              <button
                onClick={() => setModalOpen(false)}
                className="rounded-full p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 cursor-pointer"
              >
                <X size={20} />
              </button>
            </header>

            <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-5">
              {error && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">Article Title *</label>
                  <input
                    type="text"
                    name="title"
                    required
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Enter article title"
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 transition focus:border-[#B89B5E] focus:outline-none focus:ring-2 focus:ring-[#B89B5E]/20"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">Category *</label>
                  <select
                    name="category"
                    required
                    value={form.category}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 transition focus:border-[#B89B5E] focus:outline-none focus:ring-2 focus:ring-[#B89B5E]/20 bg-white"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">Read Time *</label>
                  <input
                    type="text"
                    name="read_time"
                    required
                    value={form.read_time}
                    onChange={handleChange}
                    placeholder="e.g. 5 min read"
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 transition focus:border-[#B89B5E] focus:outline-none focus:ring-2 focus:ring-[#B89B5E]/20"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">Cover Image URL</label>
                  <input
                    type="url"
                    name="cover_image"
                    value={form.cover_image}
                    onChange={handleChange}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 transition focus:border-[#B89B5E] focus:outline-none focus:ring-2 focus:ring-[#B89B5E]/20"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">Author</label>
                  <input
                    type="text"
                    name="author"
                    value={form.author}
                    onChange={handleChange}
                    placeholder="Vidhi Chambers"
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 transition focus:border-[#B89B5E] focus:outline-none focus:ring-2 focus:ring-[#B89B5E]/20"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">Excerpt / Brief Summary</label>
                  <textarea
                    name="excerpt"
                    rows="2"
                    value={form.excerpt}
                    onChange={handleChange}
                    placeholder="Write a brief intro summary of the article..."
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 transition focus:border-[#B89B5E] focus:outline-none focus:ring-2 focus:ring-[#B89B5E]/20"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">Content *</label>
                  <textarea
                    name="content"
                    rows="8"
                    required
                    value={form.content}
                    onChange={handleChange}
                    placeholder="Write your article content here..."
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 transition focus:border-[#B89B5E] focus:outline-none focus:ring-2 focus:ring-[#B89B5E]/20 font-sans"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-4 mt-6">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="rounded-lg border border-slate-200 px-5 py-2.5 font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-800 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-lg bg-[#304669] px-6 py-2.5 font-semibold text-white transition hover:bg-[#243652] disabled:bg-slate-400 cursor-pointer"
                >
                  {submitting ? "Saving..." : currentArticle ? "Save Changes" : "Publish Article"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Articles;

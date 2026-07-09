import { useEffect, useState } from "react";
import api from "../../api/axios";
import { Eye, Trash2, X } from "lucide-react";

const Inquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const { data } = await api.get("/api/inquiries");
      setInquiries(data.inquiries);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this inquiry?")) return;

    try {
      await api.delete(`/api/inquiries/${id}`);
      setInquiries((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting inquiry:", error);
      alert("Failed to delete inquiry.");
    }
  };

  if (loading) {
    return <p>Loading inquiries...</p>;
  }

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold text-[#304669]">Inquiries</h1>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <table className="min-w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-5 py-3 text-left">Name</th>
              <th className="px-5 py-3 text-left">Email</th>
              <th className="px-5 py-3 text-left">Phone</th>
              <th className="px-5 py-3 text-left">Subject</th>
              <th className="px-5 py-3 text-left">Date</th>
              <th className="px-5 py-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {inquiries.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="px-5 py-4">{item.name}</td>
                <td className="px-5 py-4">{item.email}</td>
                <td className="px-5 py-4">{item.phone}</td>
                <td className="px-5 py-4">{item.subject}</td>
                <td className="px-5 py-4">
                  {new Date(item.created_at).toLocaleDateString()}
                </td>
                <td className="px-5 py-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedInquiry(item)}
                      className="p-1.5 text-slate-600 hover:text-[#304669] hover:bg-slate-100 rounded-lg transition cursor-pointer"
                      title="View Details"
                    >
                      <Eye size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-1.5 text-slate-600 hover:text-red-600 hover:bg-red-55 rounded-lg transition cursor-pointer"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {inquiries.length === 0 && (
              <tr>
                <td colSpan={6} className="py-10 text-center text-slate-500">
                  No inquiries found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Inquiry Detail Modal */}
      {selectedInquiry && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setSelectedInquiry(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedInquiry(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition"
            >
              <X size={18} />
            </button>

            <h2 className="text-2xl font-bold text-[#304669] mb-4">Inquiry Details</h2>

            <div className="space-y-4 text-slate-700">
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Name</span>
                <p className="font-semibold text-lg text-slate-900">{selectedInquiry.name}</p>
              </div>

              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Email</span>
                <p>
                  <a
                    href={`mailto:${selectedInquiry.email}`}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    {selectedInquiry.email}
                  </a>
                </p>
              </div>

              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Phone</span>
                <p className="font-medium text-slate-900">{selectedInquiry.phone || "N/A"}</p>
              </div>

              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Subject (Court)</span>
                <p className="font-medium text-slate-900">{selectedInquiry.subject || "N/A"}</p>
              </div>

              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Date</span>
                <p className="text-slate-900">{new Date(selectedInquiry.created_at).toLocaleString()}</p>
              </div>

              <div className="border-t pt-4">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Message</span>
                <div className="bg-slate-50 rounded-lg p-3 text-slate-800 whitespace-pre-wrap max-h-60 overflow-y-auto leading-relaxed border border-slate-100">
                  {selectedInquiry.message}
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedInquiry(null)}
                className="bg-[#304669] hover:bg-[#24364f] text-white px-5 py-2.5 rounded-xl font-medium transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inquiries;


import { useEffect, useState } from "react";
import api from "../../api/axios";

const Inquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

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
              </tr>
            ))}

            {inquiries.length === 0 && (
              <tr>
                <td colSpan={5} className="py-10 text-center text-slate-500">
                  No inquiries found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inquiries;

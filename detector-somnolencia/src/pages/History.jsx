import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { api } from "../api/api";

export default function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadHistory() {
    const token = localStorage.getItem("token");

    try {
      const res = await api.get("/events/history", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setHistory(res.data);
    } catch (error) {
      console.error("Error cargando historial", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadHistory();
  }, []);

  return (
    <>
      <Navbar />

      <div className="p-6 max-w-4xl mx-auto animate-fadeIn">
        <h1 className="text-3xl font-bold text-center mb-8 glow text-cyan-300">
          Historial Mensual
        </h1>

        <Card>
          {loading ? (
            <p className="text-center text-gray-500">Cargando historial...</p>
          ) : history.length === 0 ? (
            <div className="text-center text-gray-400 py-4">
              <p className="text-lg">Sin registros aún.</p>
            </div>
          ) : (
            <ul className="space-y-3">
              {history.map((event, index) => (
                <li
                  key={index}
                  className="bg-black/30 border border-pink-400/30 rounded-lg p-3 
                  flex justify-between items-center hover:glow transition"
                >
                  <span className="text-pink-300 font-semibold">
                    {event.type}
                  </span>

                  <span className="text-gray-400 text-sm">
                    {new Date(event.createdAt).toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>
    </>
  );
}

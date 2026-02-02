import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { api } from "../api/api";

export default function EventsToday() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadEvents() {
    const token = localStorage.getItem("token");

    try {
      const res = await api.get("/events/today", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setEvents(res.data);
    } catch (error) {
      console.error("Error cargando eventos", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <>
      <Navbar />

      <div className="p-6 max-w-4xl mx-auto animate-fadeIn">
        <h1 className="text-3xl font-bold text-center mb-8 glow text-cyan-300">
          Eventos de Hoy
        </h1>

        <Card>
          {loading ? (
            <p className="text-center text-gray-500">Cargando eventos...</p>
          ) : events.length === 0 ? (
            <div className="text-center text-gray-400 py-4">
              <p className="text-lg">No hay eventos registrados hoy.</p>
            </div>
          ) : (
            <ul className="space-y-3">
              {events.map((e, i) => (
                <li
                  key={i}
                  className="bg-black/30 border border-cyan-400/30 rounded-lg p-3 flex justify-between items-center hover:glow transition"
                >
                  <span className="text-cyan-200 font-semibold">
                    {e.type}
                  </span>

                  <span className="text-gray-400 text-sm">
                    {new Date(e.createdAt).toLocaleString()}
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

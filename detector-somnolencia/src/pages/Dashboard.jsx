import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  async function loadData() {
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
    loadData();
  }, []);

  return (
    <>
      <Navbar />

      <div className="p-6 animate-fadeIn">
        {/* HEADER */}
        <h2 className="text-4xl font-bold text-[#00eaff] text-center mb-4 drop-shadow-xl">
          Dashboard
        </h2>

        <p className="text-center text-gray-400 mb-10 text-lg">
          Bienvenido al sistema de detección de somnolencia.  
          <br />
          Mantente atento, conductor 🚗💤
        </p>

        {/* ESTADÍSTICAS */}
        {loading ? (
          <p className="text-center text-gray-500">Cargando datos...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <Card>
              <h3 className="text-xl font-semibold mb-2 text-[#39ff14]">
                Eventos hoy
              </h3>
              <p className="text-3xl font-bold">{events.length}</p>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold mb-2 text-[#ff44aa]">
                Estado actual
              </h3>
              <p className="text-2xl font-semibold">
                {events.length > 0 ? "⚠️ Alerta" : "😄 Despierto"}
              </p>
            </Card>
          </div>
        )}

        {/* ACCESOS RÁPIDOS */}
        <h3 className="text-2xl font-bold text-center text-cyan-300 mb-6 glow">
          Accesos rápidos
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card
            title="Eventos de Hoy"
            description="Mira los eventos de somnolencia detectados."
            onClick={() => navigate("/events-today")}
          />

          <Card
            title="Historial"
            description="Consulta tu historial completo."
            onClick={() => navigate("/history")}
          />

          <Card
            title="Perfil"
            description="Edita tu información personal."
            onClick={() => navigate("/profile")}
          />
        </div>
      </div>
    </>
  );
}

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ConfirmacionExitosa = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirige al login después de 5 segundos
    const timer = setTimeout(() => {
      navigate("/login", { replace: true });
    }, 5000); // 5000ms = 5 segundos

    // Limpia el temporizador cuando el componente se desmonte
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-[#ffffff] min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold text-green-600">¡Correo confirmado exitosamente!</h1>
      <p className="text-gray-700 mt-3">Serás redirigido al login en unos momentos...</p>
      <p className="text-sm text-gray-500">Si no eres redirigido automáticamente, haz clic <span className="text-blue-500 underline cursor-pointer" onClick={() => navigate("/login")}>aquí</span>.</p>
    </div>
  );
};



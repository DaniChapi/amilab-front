import { useNavigate } from "react-router-dom";
import { useState, FormEvent } from "react";
import { client } from "../../supabase/client"; // Importa el cliente desde tu archivo client.js
import logo from "../../assets/logo-amilab.jpg";

export const LoginView = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false); // Maneja si se muestra el formulario de login o registro
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Mensaje de éxito para registro

  // Manejo de login
  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");
  
    try {
      const { data: { user }, error } = await client.auth.signInWithPassword({
        email,
        password,
      });
  
      if (error) {
        throw error;
      }
  
      // Obtener el rol del usuario
      const { data, error: roleError } = await client
        .from('users')
        .select('role')
        .eq('email', user?.email)
        .single();
  
      if (roleError || !data) {
        throw new Error("No se pudo obtener el rol del usuario.");
      }
  
      // Navegar según el rol
      if (data.role === 'jefe') {
        navigate("/jefe/home", { replace: true });
      } else if (data.role === 'vendedor') {
        navigate("/vendedor/home", { replace: true });
      } else {
        throw new Error("Rol no autorizado.");
      }
    } catch (error) {
      setErrorMessage("Credenciales incorrectas. Por favor, intenta nuevamente.");
    }
  };

  // Manejo de registro
  const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const { data: signUpData, error: signUpError } = await client.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: "http://localhost:5173/confirmacion-exitosa", // Reemplaza con tu URL de redirección
        },
      });

      if (signUpError) {
        throw signUpError;
      }

      // Insertar el rol de usuario
      const { error: insertError } = await client
        .from('users')
        .insert({
          id: signUpData.user?.id,
          email,
          role: 'vendedor' // O el rol que quieras asignar por defecto
        });

      if (insertError) {
        throw insertError;
      }

      setSuccessMessage("Registro exitoso. Revisa tu correo para verificar tu cuenta.");
    } catch (error) {
      setErrorMessage("Error al registrarse. Por favor, intenta nuevamente.");
    }
  };

  return (
    <div className="bg-[#ffffff] min-h-screen min-w-screen flex flex-row justify-center items-center p-3">
      <div className="flex flex-col bg-[#FEFEFE] border border-[#BBBBBB] p-4 rounded-xl">
        <img src={logo} alt="logo empresa" className="block w-1/2 mx-auto" />

        {isSignUp ? (
          // Formulario de Registro
          <form className="flex flex-col mt-3" onSubmit={handleSignUp}>
            <h2 className="text-center text-xl font-bold mb-3">Registrarse</h2>
            <input
              type="email"
              placeholder="Correo electrónico"
              className="border border-[#BBBBBB] p-2 my-3 focus:outline-none rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="border border-[#BBBBBB] p-2 my-3 focus:outline-none rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errorMessage && (
              <div className="text-red-600 text-sm mt-2">{errorMessage}</div>
            )}
            {successMessage && (
              <div className="text-green-600 text-sm mt-2">{successMessage}</div>
            )}
            <button
              type="submit"
              className="mt-1 bg-[#B3E6CC] text-[#014D29] p-2 rounded-md border border-[#014D29] hover:bg-[#014D29] hover:text-[#B3E6CC] transition duration-300"
            >
              Registrarse
            </button>
            <button
              type="button"
              onClick={() => setIsSignUp(false)} // Cambia al formulario de login
              className="mt-3 text-sm text-[#014D29] underline"
            >
              ¿Ya tienes cuenta? Inicia sesión
            </button>
          </form>
        ) : (
          // Formulario de Login
          <form className="flex flex-col mt-3" onSubmit={handleLogin}>
            <h2 className="text-center text-xl font-bold mb-3">Iniciar Sesión</h2>
            <input
              type="email"
              placeholder="Correo electrónico"
              className="border border-[#BBBBBB] p-2 my-3 focus:outline-none rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="border border-[#BBBBBB] p-2 my-3 focus:outline-none rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errorMessage && (
              <div className="text-red-600 text-sm mt-2">{errorMessage}</div>
            )}
            <button
              type="submit"
              className="mt-1 bg-[#B3E6CC] text-[#014D29] p-2 rounded-md border border-[#014D29] hover:bg-[#014D29] hover:text-[#B3E6CC] transition duration-300"
            >
              Ingresar
            </button>
            <button
              type="button"
              onClick={() => setIsSignUp(true)} // Cambia al formulario de registro
              className="mt-3 text-sm text-[#014D29] underline"
            >
              ¿No tienes cuenta? Regístrate
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
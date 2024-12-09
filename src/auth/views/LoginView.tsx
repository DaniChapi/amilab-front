import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo-amilab.jpg";

export const LoginView = () => {
  const navigate = useNavigate();

  const Login = () => {
    navigate("/vendedor/home", { replace: true });
  };
  return (
    <div className="bg-[#ffffff] min-h-screen min-w-screen flex flex-row justify-center items-center p-3">
      <div className="flex flex-col bg-[#FEFEFE] border border-[#BBBBBB] p-4 rounded-xl">
        <img
          src={logo}
          alt="logo empresa"
          className="block w-1/2 mx-auto"
        />
        <form className="flex flex-col mt-3" onSubmit={Login}>
          <input
            type="text"
            placeholder="Usuario"
            className="border border-[#BBBBBB] p-2 my-3 focus:outline-none rounded-lg"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="border border-[#BBBBBB] p-2 my-3 focus:outline-none rounded-lg"
          />
          <button
            type="submit"
            className=" mt-1 bg-[#B3E6CC] text-[#014D29] p-2 rounded-md border border-[#014D29] hover:bg-[#014D29] hover:text-[#B3E6CC] transition duration-300"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

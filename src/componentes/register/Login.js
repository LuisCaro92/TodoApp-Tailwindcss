const Login = () => {
  return (
    <div className="bg-gray-800  justify-center min-h-screen py-20">
      <div className="mx-auto  flex container-center ">
        <div className="flex w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600")',
            }}
          >
            <h1 className="text-white text-3xl">Welcome</h1>
            <div>
              <p className="mt-5 mb-20 pb-40 text-white">
                Bienvenido a App-Todo-List. Inicia sesion para comenzar a
                organizar tu lista de tareas.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Sign in</h2>
            <p className="mb-4"> Favor ingresa con tus datos </p>
            <form action="#">
              <div className=" mt-5">
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-200 py-1 px-2 rounded-lg w-full"
                />
              </div>
              <div className=" mt-5">
                <input
                  type="password"
                  placeholder="Paswword"
                  className="border border-gray-200 py-1 px-2 rounded-lg w-full"
                />
              </div>

              <div className="mt-5">
                <input type="checkbox" className="border borde-gray-200" />
                <span>
                  {" "}
                  I accept the{" "}
                  <a href="#" className="text-purple-400 font-semibold">
                    Terms of Use{" "}
                  </a>{" "}
                  &
                  <a href="#" className="text-purple-400 font-semibold">
                    {" "}
                    Privacy Politic
                  </a>
                </span>
              </div>
              <div className="mt-10">
                <button className="active:scale-[.98] actiove:duration-75 transition-all hover:scale-[1.02] ease-in-out w-full  bg-slate-400 rounded-xl h-8 border border-solid border-gray-400 text-center text-white font-bold">
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

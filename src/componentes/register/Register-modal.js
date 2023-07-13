const RegisterModal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "whapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}>
      <div className="w-10/12 py-20 flex flex-col">
        
        <div className="bg-gray-800 bg-opacity-20 p-2 rounded">
          <div className="justify-center min-h-screen py-20 ">
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
                      Bienvenido a App-Todo-List. Crea tu cuenta o ingresa para
                      que puedas ver el listado de tus tareas
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 py-16 px-12">
                  <h2 className="text-3xl mb-4">Register</h2>
                  <p className="mb-4">
                    {" "}
                    Favor crea tu cuenta para poder ingresar{" "}
                  </p>
                  <form action="#">
                    <div className="grid grid-cols-2 gap-5">
                      <input
                        type="text"
                        placeholder="Firstname"
                        className="border border-gray-200 py-1 px-2 rounded-lg"
                      />
                      <input
                        type="text"
                        placeholder="Lastname"
                        className="border border-gray-200 py-1 px-2 rounded-lg"
                      />
                    </div>
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
                    <div className=" mt-5">
                      <input
                        type="password"
                        placeholder="Confirm Pasword"
                        className="border border-gray-200 py-1 px-2 rounded-lg w-full"
                      />
                    </div>
                    <div className="mt-5">
                      <input
                        type="checkbox"
                        className="border borde-gray-200"
                      />
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
                        Register Now
                      </button>
                    </div>
                    <div className="mt-3">
                    <button
                onClick={() => onClose()}
                className="active:scale-[.98] actiove:duration-75 transition-all hover:scale-[1.02] ease-in-out w-full  bg-purple-600 rounded-xl h-8 border border-solid border-gray-400 text-center text-white font-bold" >
          Closed
        </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;

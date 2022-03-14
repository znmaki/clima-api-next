export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-6xl text-center text-white py-4 bg-cyan-500 border-b-[1rem] border-cyan-600">
        Buscador de Clima
      </h1>

      <div className="grid grid-cols-2">
        <div className="py-[5rem] px-[10rem]">
          <form className="bg-white p-[3rem]">
            <label className="text-3xl" htmlFor="ciudad">Ciudad</label>
            <input
              className="mt-3 mb-5 block w-full p-3 border-2 rounded-md outline-none"
              id="ciudad"
              type="text"
              placeholder="Ingrese la Ciudad"
            />
            <label className="text-3xl" htmlFor="pais">País</label>
            <input
              className="mt-3 block w-full p-3 border-2 rounded-md outline-none"
              id="pais"
              type="text"
              placeholder="Ingrese el País"
            />
            <button className="bg-blue-700 w-full py-4 rounded-md uppercase font-bold text-white mt-5">Consultar clima</button>
          </form>
        </div>
        <div className="py-[5rem] px-[10rem]">
          <h2>as</h2>
        </div>
      </div>
    </div>
  );
}

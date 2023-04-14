const DatosCliente = () => {
    return (
        <>
            <div className="mx-5 md:w-1/2 lg:w-2/5">
                <h2 className="font-black text-pink-950 text-3xl text-center">Datos del cliente</h2>

                <p className="text-xl mt-5 mb-10 text-center">Administra tus {''}
                    <span className="text-purple-900 font-bold">Datos</span></p>

                <form className="bg-purple-200 shadow-md rounded-lg py-10 px-5">
                    <div>

                        <div className="mb-5">
                            <label htmlFor="nombres" className="block text-black uppercase font-bold">
                                Nombres:
                            </label>
                            <input id="nombres" type="text" placeholder="Nombre de la mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="apellidos" className="block text-black uppercase font-bold">
                                Apellidos:
                            </label>
                            <input id="apellidos" type="text" placeholder="Nombre del propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="email" className="block text-black uppercase font-bold">
                                Email:
                            </label>
                            <input id="email" type="email" placeholder="Email del Propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="plan" className="block text-black uppercase font-bold">
                                Escoja su Plan:
                                <form>
                                    <select id="plan" className="border-2 w-full p-2 mt-2 text-gray-600 rounded-md">
                                        <option>Normal</option>
                                        <option>Primera Clase</option>
                                    </select>
                                </form>
                            </label>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="origen" className="block text-black uppercase font-bold">
                                Origen del Vuelo:
                                <form>
                                    <select id="origen" className="border-2 w-full p-2 mt-2 text-gray-600 rounded-md">
                                        <option>Neiva</option>
                                        <option>Bogotá</option>
                                        <option>Medellín</option>
                                    </select>
                                </form>
                            </label>
                        </div>

                        <input type="submit" className="bg-purple-900 w-full p-3 
                        text-white uppercase font-bold hover:bg-purple-700 cursor-pointer transition-colors" />

                    </div>
                </form>
            </div>
        </>
    )
}

export default DatosCliente
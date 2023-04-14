function AvionesDisponibles() {
    return (
        <>
            <div className="md:w-1/2 lg:w-2/5">
                <h2 className="font-black text-pink-950 text-3xl text-center">Aviones Disponibles</h2>

                <p className="text-xl mt-5 mb-10 text-center">Administra tu {''}
                    <span className="text-purple-900 font-bold">Vuelo</span></p>

                <form className="bg-purple-200 shadow-md rounded-lg py-10 px-5">
                    <div>

                        <div className="mb-5">
                            <label htmlFor="marca" className="block text-black uppercase font-bold">
                                Marca del Avion:
                                <form>
                                    <select id="marca" className="border-2 w-full p-2 mt-2 text-gray-600 rounded-md">
                                        <option>Avianca</option>
                                        <option>AeroMéxico</option>
                                        <option>VivaAir</option>
                                        <option>Wingo</option>
                                        <option>Satena</option>
                                    </select>
                                </form>
                            </label>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="destino" className="block text-black uppercase font-bold">
                                Adonde deseas Viajar:
                                <form>
                                    <select id="destino" className="border-2 w-full p-2 mt-2 text-gray-600 rounded-md">
                                        <option>Argentina</option>
                                        <option>México</option>
                                        <option>Chile</option>
                                        <option>España</option>
                                    </select>
                                </form>
                            </label>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="fecha_salida" className="block text-black uppercase font-bold">
                                Fecha de Salida:
                            </label>
                            <input id="fecha_salida" type="date" className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md" />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="fecha_regreso" className="block text-black uppercase font-bold">
                                Fecha de Regreso:
                            </label>
                            <input id="fecha_regreso" type="date" className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md" />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="precio" className="block text-black uppercase font-bold">
                                Precio Normal:
                            </label>
                            <input id="precio" type="text" placeholder="Su precio se dará automáticamente" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
                        </div>

                        <input type="submit" className="bg-purple-900 w-full p-3 
                        text-white uppercase font-bold hover:bg-purple-700 cursor-pointer transition-colors" />

                    </div>
                </form>
            </div>
        </>
    )
}

export default AvionesDisponibles
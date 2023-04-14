import AvionesDisponibles from "./Components/AvionesDisponibles"
import DatosCliente from "./Components/DatosCliente"
import Header from "./Components/Header"
import Tarjeta from "./Components/Tarjeta"
import Tiquete from "./Components/Tiquete"

function App() {


  return (
    <>
        <div class="opa" className='container mx-auto mt-20'>
          <Header />
          <div className="mt-12 md:flex">
            <AvionesDisponibles />
            <DatosCliente />
            <Tiquete />
          </div>
        </div>
    </>
  )
}

export default App

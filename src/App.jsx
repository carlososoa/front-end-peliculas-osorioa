
import './App.css'
import Pelicula from './componentes/Pelicula'
import NavBar from './componentes/NavBar';
import {
  Route,Routes
} from "react-router-dom";
import PeliculaDetalle from './componentes/PeliculaDetalle';
import PeliculaEditar from './componentes/PeliculaEditar';
import PeliculaNew from './componentes/PeliculaNew'
import Genero from './componentes/Genero';
import GeneroEdit from './componentes/GeneroEdit';
import GeneroNew from './componentes/GeneroNew';
import Director from './componentes/Director';
import DirectorNew from './componentes/DirectorNew';
import DirectorEdit from './componentes/DirectorEdit';
import Productora from './componentes/Productora';
import ProductoraEdit from './componentes/ProductoraEdit';
import ProductoraNew from './componentes/ProductoraNew';
import Tipo from './componentes/Tipo';
import TipoNew from './componentes/TipoNew';
import TipoEdit from './componentes/TipoEdit';






function App() { 




  return (
    <>
      <header>
        <NavBar />
        <Routes>
          <Route path='/' element={<Pelicula/>} />
          <Route path='/nueva-pelicula' element={<PeliculaNew/>} />
          <Route path='/:id' element={ <PeliculaDetalle/>} />
          <Route path='/editar/:id' element={<PeliculaEditar/>} />
          <Route path='/generos' element={<Genero/>} />
          <Route path='/generoEdit/:id' element={<GeneroEdit/>} />
          <Route path='/generoNew' element={<GeneroNew/>} />
          <Route path='/directores' element={<Director/>} />
          <Route path='/directorEdit/:id' element={<DirectorEdit/>} />
          <Route path='/directorNew' element={<DirectorNew/>} />
          <Route path='/productoras' element={<Productora/>} />
          <Route path='/productoraEdit/:id' element={<ProductoraEdit/>} />
          <Route path='/productoraNew' element={<ProductoraNew/>} />
          <Route path='/tipos' element={<Tipo/>} />
          <Route path='/tipoEdit/:id' element={ <TipoEdit/> } />
          <Route path='/tipoNew' element={ <TipoNew/> } />

          
        </Routes>
      </header>
      





    </>
  )
}

export default App


import './NavBar.css'
// import peliculas from '../../public/peliculas.json'

import { Link } from "react-router-dom";


function NavBar() {

  return (
    <>
      
        <ul>
          <li><Link to='/' >Peliculas</Link></li>
          <li><Link to='/generos' >Generos</Link></li>
          <li><Link to='/directores' >Directores</Link></li>
          <li><Link to='/productoras' >Productoras</Link></li>
          <li><Link to='/tipos' >Tipos</Link></li>                   
        </ul>

        

      


    </>
  )
}

export default NavBar
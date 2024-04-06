
import './PeliculaEditar.css'
import { useForm  } from "react-hook-form"
import { useNavigate } from "react-router-dom";



function GeneroNew() { 

  const { register, handleSubmit} = useForm()
  const navigate = useNavigate()
    


  const onSubmit = handleSubmit((data) => {
    console.log(data);

    const enviarDatos = async () => {
      const respuesta = await fetch(`http://localhost:3000/genero`, {
        method: "POST",
        body: JSON.stringify(data), 
        headers: {
          "Content-Type": "application/json",
        },

      })

      if (respuesta.status == 200) {
        alert('Genero Ingresado Correctamente')
        navigate("/generos");


      } else if (respuesta.status == 400) {
        const respuestaTexto = await respuesta.text()
          alert(respuestaTexto)

      } else {
        const respuestaJson = await respuesta.json()
        alert(respuestaJson.mensaje[0].msg)
      }



    }

    try {
      enviarDatos()

    } catch (error) {
      console.log(error);

    }



  })



  return (
    <>
      <section className='peli-edit-section' >
        <h1>Ingresa Informacion de Nuevo Genero</h1>

        <form onSubmit={onSubmit}>
          <p>
            <label htmlFor="nombre">Nombre del genero </label>
            <input type="text" {...register("nombre", { required: true })} id="nombre" />
          </p>
          <p>
            <label htmlFor="estado">Selecciona el estado:</label>
            <select id="estado" {...register("estado", { required: true })}  >
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
          </p>
          <p>
            <label htmlFor="descripcion">Descripción </label>
            <input type="text" {...register("descripcion", { required: true })} id="descripcion" />
          </p>
          <button type='submit'>Guardar</button>


        </form>

      </section>

    </>
  )
}

export default GeneroNew
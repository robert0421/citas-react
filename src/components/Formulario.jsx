import { useState, useEffect } from 'react';
import Error from './Error'

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente}) => {
  

  const [name, setName] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');  

  const [error, setError] = useState(false);

  useEffect(() => {
    if( Object.keys(paciente).length > 0 ) {
      setName(paciente.name)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha
  }
    
    
  const handledSubmit = (e) => {
    e.preventDefault();

    //validando formulario
    if( [name, propietario, email, fecha, sintomas].includes('') ) {
        console.log('hay al menos un campo vacio')

        setError(true)
        return;
    }

      setError(false)

      //objeto de Paciente
      const objetoPaciente = {
        name,
        propietario,
        email,
        fecha,
        sintomas,
        id: generarId()
      }

      if (paciente.id) {
        objetoPaciente.id = paciente.id
        console.log(objetoPaciente)
        console.log(paciente)

        const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

        setPacientes(pacientesActualizados);
        setPaciente({})

      } else {
        objetoPaciente.id = generarId();
        setPacientes([...pacientes, objetoPaciente]);
      }

      

      //reiniciar el form
      setName('')
      setPropietario('')
      setEmail('')
      setFecha('')
      setSintomas('')

  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

        <p className="text-lg mt-5 text-center mb-10">
            Añade Pacientes y {''}
            <span className="text-indigo-600 font-bold">Administralos</span>
        </p>
        <form 
           onSubmit={handledSubmit}
           className="bg-white shadow-md rounded-lg py-10 px-5" 
        >
           { error && <Error><p>Todos los campos son obligatorios</p></Error>}   
           <div>
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold ">
                Nombre Mascota
                </label>
            <input
              id="mascota"
              type="text"
              placeholder="Nombre de la Mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5"
              value= {name}
              onChange={ (e) => setName(e.target.value) }
              />

           </div>

           <div>
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                Nombre Propietario
                </label>
            <input
              id="propietario"
              type="text"
              placeholder="Nombre del Propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5"
              value= {propietario}
              onChange={ (e) => setPropietario(e.target.value) }
              />
           </div>

           <div>
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                Email
                </label>
            <input
              id="email"
              type="email"
              placeholder="Email del Propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5"
              value= {email}
              onChange={ (e) => setEmail(e.target.value) }
              autoComplete='off'
              />
           </div>

           <div>
            <label htmlFor="date" className="block text-gray-700 uppercase font-bold">
                Fecha Ingreso
                </label>
            <input
              id="date"
              type="date"
              placeholder="Nombre del Propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5"
              value= {fecha}
              onChange={ (e) => setFecha(e.target.value) }
              autoComplete='off'
              />
           </div>

           <div>
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold ">
                Sintomas
                </label>
            <textarea 
              id="sintomas"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5"
              placeholder="Describe los Sintomas"
              value= {sintomas}
              onChange={ (e) => setSintomas(e.target.value) }
              />
           </div>

           <input 
           type="submit" 
           className="bg-indigo-600 w-full text-white uppercase font-bold p-2 hover:bg-indigo-700 cursor-pointer transition-colors"
           value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
           />
        </form>
    </div>
  )
}

export default Formulario
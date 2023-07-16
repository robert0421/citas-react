export const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  const { name, propietario, email, fecha, sintomas, id } = paciente

  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar este paciente?')

    if (respuesta) {
      eliminarPaciente(id) 
    }
  }

  return (
    <div className="bg-white ml-5 py-10 my-10 px-5 rounded-md shadow-md">
      <p className="font-bold uppercase text-gray-700">
        Nombre: {""}
        <span className="font-normal normal-case">{name}</span>
      </p>

      <p className="font-bold uppercase text-gray-700">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold uppercase text-gray-700">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold uppercase text-gray-700">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold uppercase text-gray-700">
        Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 text-white uppercase hover:bg-indigo-700 rounded-lg font-bold"
          onClick={() => setPaciente(paciente)}
        >
          editar
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 text-white uppercase hover:bg-red-700 rounded-lg font-bold"
          onClick={handleEliminar}
        >
          eliminar
        </button>
      </div>
    </div>
  );
};

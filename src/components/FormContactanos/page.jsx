import { Label, TextInput } from "flowbite-react"

export default function FormContactanos() {
  return (
    <form id="contactanos" className="w-full flex flex-col gap-4">
      <div className="w-full">
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
          <div className="w-full sm:w-6/12 flex flex-col">
            <label
              for="name"
              className="block mb-2 font-medium text-gray-900 text-lg ml-5"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-gray-200 border-none text-gray-900 text-sm rounded-xl block w-full p-2.5 focus:ring-purplebm focus:bg-gray-100"
              required
            />
          </div>
          <div className="w-full sm:w-6/12 flex flex-col">
            <label
              for="name"
              className="block mb-2 font-medium text-gray-900 text-lg ml-5"
            >
              Apellido
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-gray-200 border-none text-gray-900 text-sm rounded-xl block w-full p-2.5 focus:ring-purplebm focus:bg-gray-100"
              required
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row  items-center gap-4 mb-4">
          <div className="w-full sm:w-6/12 flex flex-col">
            <label
              for="name"
              className="block mb-2 font-medium text-gray-900 text-lg ml-5"
            >
              Numero de teléfono
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-gray-200 border-none text-gray-900 text-sm rounded-xl block w-full p-2.5 focus:ring-purplebm focus:bg-gray-100"
              required
            />
          </div>
          <div className="w-full sm:w-6/12 flex flex-col ">
            <label
              for="name"
              className="block mb-2 font-medium text-gray-900 text-lg ml-5"
            >
              Ciudad
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-gray-200 border-none text-gray-900 text-sm rounded-xl block w-full p-2.5 focus:ring-purplebm focus:bg-gray-100"
              required
            />
          </div>
        </div>
        <div className="w-full">
          <label
            for="name"
            className="block mb-2 font-medium text-gray-900 text-lg ml-5"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            id="name"
            name="name"
            className="bg-gray-200 border-none text-gray-900 text-sm rounded-xl block w-full p-2.5 focus:ring-purplebm focus:bg-gray-100"
            required
          />
        </div>
      </div>
      <div className="w-full flex justify-center py-4">
        <button
          type="submit"
          className="px-7 py-2 rounded-lg bg-purplebm w-fit text-white text-lg font-bold"
        >
          Enviar
        </button>
      </div>
    </form>
  )
}

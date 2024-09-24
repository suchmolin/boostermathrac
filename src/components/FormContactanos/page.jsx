"use client"

import { useState } from "react"
import SendedMsg from "../SendedMsg/page"

export default function FormContactanos() {
  const [sended, setSended] = useState(false)
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbw1R9SWvCCEz3guhBEzyoobbWq-z4AvEYRST3J1uiJWtwYBy3t-kbuUJfBg4z9H8uE/exec"

  const sendGS = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    //const data = Object.fromEntries(formData)

    const resp = fetch(scriptURL, {
      method: "POST",
      body: formData,
    })

    /*
    const resp = await fetch("/api/fetchOdoo", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
    */

    document.getElementById("myForm").reset()
    setSended(true)

    setTimeout(() => {
      setSended(false)
    }, 5000)
  }

  return (
    <form
      id="myForm"
      onSubmit={(e) => sendGS(e)}
      className="w-full flex flex-col gap-4"
    >
      <input type="hidden" id="Origen" name=" " value="Regreso a Clases" />
      <div className="w-full">
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
          <div className="w-full sm:w-6/12 flex flex-col">
            <label
              htmlFor="nombre"
              className="block mb-2 font-medium text-gray-900 text-lg ml-5"
            >
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="Nombre"
              className="bg-gray-200 border-none text-gray-900 text-sm rounded-xl block w-full p-2.5 focus:ring-purplebm focus:bg-gray-100"
              required
            />
          </div>
          <div className="w-full sm:w-6/12 flex flex-col">
            <label
              htmlFor="apellido"
              className="block mb-2 font-medium text-gray-900 text-lg ml-5"
            >
              Apellido
            </label>
            <input
              type="text"
              id="apellido"
              name="Apellido"
              className="bg-gray-200 border-none text-gray-900 text-sm rounded-xl block w-full p-2.5 focus:ring-purplebm focus:bg-gray-100"
              required
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row  items-center gap-4 mb-4">
          <div className="w-full sm:w-6/12 flex flex-col">
            <label
              htmlFor="telf"
              className="block mb-2 font-medium text-gray-900 text-lg ml-5"
            >
              Numero de teléfono
            </label>
            <input
              type="number"
              id="telf"
              name="Telf"
              className="bg-gray-200 border-none text-gray-900 text-sm rounded-xl block w-full p-2.5 focus:ring-purplebm focus:bg-gray-100"
              required
            />
          </div>
          <div className="w-full sm:w-6/12 flex flex-col ">
            <label
              htmlFor="ciudad"
              className="block mb-2 font-medium text-gray-900 text-lg ml-5"
            >
              Ciudad
            </label>
            <input
              type="text"
              id="ciudad"
              name="Ciudad"
              className="bg-gray-200 border-none text-gray-900 text-sm rounded-xl block w-full p-2.5 focus:ring-purplebm focus:bg-gray-100"
              required
            />
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="correo"
            className="block mb-2 font-medium text-gray-900 text-lg ml-5"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            id="correo"
            name="Correo"
            className="bg-gray-200 border-none text-gray-900 text-sm rounded-xl block w-full p-2.5 focus:ring-purplebm focus:bg-gray-100"
            required
          />
        </div>
        <input
          type="hidden"
          name="Fecha_de_Solicitud"
          value={new Date().toLocaleDateString("es")}
        />
      </div>

      <div className="w-full flex justify-center py-4">
        <button
          type="submit"
          className="px-7 py-2 rounded-lg bg-purplebm w-fit text-white text-lg font-bold"
        >
          Enviar
        </button>
      </div>
      {sended && <SendedMsg />}
    </form>
  )
}

"use client"

import { useState } from "react"
import SendedMsg from "../SendedMsg/page"

export default function FormContactanos() {
  const [sended, setSended] = useState(false)

  const sendGS = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    data.modality = data.sede !== "online" ? "presencial" : "online"

    const resp = await fetch("/api/fetchOdoo", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })

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
        <input type="hidden" value="landing Año Escolar" name="social_media" />
        <input type="hidden" value="Fyr Lois English Institute" name="from" />
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

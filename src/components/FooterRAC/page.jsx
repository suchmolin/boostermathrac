import Image from "next/image"
import { FaPhoneAlt } from "react-icons/fa"
import { IoLogoInstagram } from "react-icons/io5"
import { CiMail } from "react-icons/ci"
import { PiMapPinArea } from "react-icons/pi"

export default function FooterRAC() {
  return (
    <div className="w-full bg-bluebm text-white py-4 sm:py-20 flex flex-col sm:flex-row justify-between xl:justify-center -mt-1 px-3 md:px-10 xl:px-0 pb-20">
      <div className="sm:w-3/12 flex flex-col mb-5 sm:mb-0">
        <div className="relative w-[150px] lg:w-[200px] aspect-video">
          <Image
            src="/img/logo2.png"
            layout="fill"
            objectFit="contain"
            alt="Boostermath instituto de matemáticas"
          />
        </div>
        <h3 className="font-bold lg:text-2xl hidden sm:block">
          Olvidate del <br />
          miedo a las
        </h3>
        <h2 className="font-[InterBlack] text-lg lg:text-3xl hidden sm:block">
          Matemáticas
        </h2>
      </div>
      <div className="w-full sm:w-9/12 xl:w-6/12 flex justify-between">
        <div className="sm:w-9/12 xl:w-9/12 flex flex-col">
          <p className="text-2xl font-bold mb-7">Contactos</p>
          <ul className="flex flex-col gap-6 text-sm  xxxl:text-xl">
            <li className="flex items-center gap-4">
              <FaPhoneAlt className="text-xl" /> +584123408754
            </li>
            <li className="flex items-center gap-4">
              <IoLogoInstagram className="text-2xl" /> @boostermath.ve
            </li>
            <li className="flex items-center gap-4">
              <CiMail className="text-2xl" /> atencionalcliente@boostermath.com
            </li>
            <li className="flex items-center gap-4">
              <PiMapPinArea className="text-2xl" />{" "}
              <p>
                Sede Grupal <br /> CCCT, nivel 2, sector Yarey, nivel mezzanina,
                oficina M03.
              </p>
            </li>
            <li className="flex items-center gap-4">
              <PiMapPinArea className="text-2xl" />{" "}
              <p>
                Sede Clases Personalizadas <br /> CCCT, Torre A, piso 6, oficina
                608.
              </p>
            </li>
          </ul>
        </div>

        <div className="w-3/12 hidden sm:block">
          <p className="text-2xl font-bold mb-7">Navegación</p>
          <ul className="flex flex-col gap-6 text-sm  xxxl:text-xl">
            <li className="flex items-center gap-4 hover:text-lightBluebm transition-all duration-300 hover:drop-shadow-md">
              <a href="#conocenos">Acelerador Matemático</a>
            </li>
            <li className="flex items-center gap-4 hover:text-lightBluebm transition-all duration-300 hover:drop-shadow-md">
              <a href="#programas">Programas</a>
            </li>
            <li className="flex items-center gap-4 hover:text-lightBluebm transition-all duration-300 hover:drop-shadow-md">
              <a href="#horarios">Horarios</a>
            </li>
            <li className="flex items-center gap-4 hover:text-lightBluebm transition-all duration-300 hover:drop-shadow-md">
              <a href="#conocenos">Conócenos</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

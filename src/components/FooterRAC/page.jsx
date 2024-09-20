import Image from "next/image"
import { FaPhoneAlt } from "react-icons/fa"
import { IoLogoInstagram } from "react-icons/io5"
import { CiMail } from "react-icons/ci"
import { PiMapPinArea } from "react-icons/pi"

export default function FooterRAC() {
  return (
    <div className="w-full bg-bluebm text-white py-20 flex justify-center -mt-1">
      <div className="w-3/12 flex flex-col">
        <div className="relative w-[200px] aspect-video">
          <Image
            src="/img/logo2.png"
            layout="fill"
            objectFit="contain"
            alt="logo booster"
          />
        </div>
        <h3 className="font-bold text-2xl">
          Olvidate del <br />
          miedo a las
        </h3>
        <h2 className="font-[InterBlack] text-3xl">Matemáticas</h2>
      </div>
      <div className="w-4/12 flex flex-col">
        <h4 className="text-2xl font-bold mb-7">Contactos</h4>
        <ul className="flex flex-col gap-6 text-sm  3xl:text-xl">
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
      <div>
        <h4 className="text-2xl font-bold mb-7">Navegación</h4>
        <ul className="flex flex-col gap-6 text-sm  3xl:text-xl">
          <li className="flex items-center gap-4">Acelerador Matemático</li>
          <li className="flex items-center gap-4">Programas</li>
          <li className="flex items-center gap-4">Horarios</li>
          <li className="flex items-center gap-4">Conócenos</li>
        </ul>
      </div>
    </div>
  )
}

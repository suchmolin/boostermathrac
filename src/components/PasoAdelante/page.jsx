import Image from "next/image"
import { GoDotFill } from "react-icons/go"

export default function PasoAdelante() {
  return (
    <div className="relative w-full flex justify-center items-center bg-LightBlueSecondarybm bg-[url('/img/fondoPasoAdelante.png')] bg-cover bg-center bg-no-repeat py-32  text-bluebm">
      <div className="absolute bottom-0 left-32">
        <div className="relative w-[350px] h-[450px]">
          <Image
            src="/img/qkck.png"
            objectFit="contain"
            layout="fill"
            alt="qkck"
          />
        </div>
      </div>
      <div className="absolute bottom-0 right-32">
        <div className="relative w-[400px] h-[500px]">
          <Image
            src="/img/qkck-2.png"
            objectFit="contain"
            layout="fill"
            alt="qkck"
          />
        </div>
      </div>
      <div className="w-10/12 flex flex-col items-center justify-center">
        <div className="pl-20 mb-10">
          <Image
            src="/img/calendar.png"
            width={150}
            height={150}
            alt="calendar"
          />
        </div>
        <h2 className="text-4xl mb-10">
          ¡Ponte un paso adelante en tu aprendizaje!
        </h2>

        <p className="text-3xl font-[InterBlack] flex gap-3 items-center mb-7">
          <GoDotFill className="text-purplebm" /> 23 SEP - 18 JUL
        </p>
        <p className="text-3xl font-[InterBlack] flex gap-3 items-center mb-7">
          <GoDotFill className="text-purplebm" /> 3 Lapsos
        </p>
        <p className="text-3xl font-[InterBlack] flex gap-3 items-center ">
          <GoDotFill className="text-purplebm" /> Alineados al{" "}
        </p>
        <p className="text-3xl font-[InterBlack] mb-7">calendario escolar</p>
        <a
          href="#"
          className="text-white py-2 px-9 rounded-2xl bg-purplebm w-fit font-bold text-xl tracking-wider"
        >
          Comenzar
        </a>
      </div>
    </div>
  )
}

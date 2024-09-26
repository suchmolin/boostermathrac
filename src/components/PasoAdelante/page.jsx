import Image from "next/image"
import { GoDotFill } from "react-icons/go"

export default function PasoAdelante() {
  return (
    <div className="relative w-full flex justify-center items-center bg-LightBlueSecondarybm bg-[url('/img/fondoPasoAdelante.png')] bg-contain md:bg-cover bg-center bg-no-repeat py-10 sm:py-20 xl:py-32  text-bluebm">
      <div className="absolute bottom-0 left-0 lg:left-20 xxl:left-32 hidden md:block">
        <div className="relative w-[280px] xl:w-[350px] xxxl:w-[550px] h-[330px] xl:h-[450px] xxxl:h-[650px]">
          <Image
            src="/img/qkck.png"
            objectFit="contain"
            layout="fill"
            alt="qkck"
          />
        </div>
      </div>
      <div className="absolute bottom-0 right-5 lg:right-20 xxl:right-32 hidden md:block">
        <div className="relative w-[200px] xl:w-[400px] xxxl:w-[550px] h-[300px] xl:h-[500px] xxxl:h-[550px]">
          <Image
            src="/img/qkck-2.png"
            objectFit="contain"
            layout="fill"
            alt="qkck"
          />
        </div>
      </div>
      <div className="w-10/12 flex flex-col items-center justify-center">
        <div className="pl-20 mb-5 lg:mb-10">
          <Image
            src="/img/calendar.png"
            width={150}
            height={150}
            alt="calendar"
          />
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xxxl:text-6xl mb-5 lg:mb-10 text-center">
          ¡Ponte un paso adelante en tu aprendizaje!
        </h2>

        <p className="text-2xl lg:text-3xl xxxl:text-5xl font-[InterBlack] flex gap-3 items-center mb-3 lg:mb-7">
          <GoDotFill className="text-purplebm" /> 23 SEP - 18 JUL
        </p>
        <p className="text-2xl lg:text-3xl  xxxl:text-5xl font-[InterBlack] flex gap-3 items-center mb-3 lg:mb-7">
          <GoDotFill className="text-purplebm" /> 3 Lapsos
        </p>
        <p className="text-2xl lg:text-3xl  xxxl:text-5xl font-[InterBlack] flex gap-3 items-center ">
          <GoDotFill className="text-purplebm" /> Alineados al{" "}
        </p>
        <p className="text-2xl lg:text-3xl  xxxl:text-5xl font-[InterBlack] mb-3 lg:mb-7">
          calendario escolar
        </p>
        <a
          href="#contactanos"
          className="text-white py-2 xxxl:py-3 px-9 xxxl:px-12 rounded-md bg-purplebm w-fit font-bold text-xl xxxl:text-3xl tracking-wider my-5 hover:shadow-2xl hover:bg-opacity-80 transition-all duration-300"
        >
          Comenzar
        </a>
      </div>
    </div>
  )
}

import Image from "next/image"
import VidSectionRAC from "../VidSectionRAC/page"

export default function HeaderRAC() {
  return (
    <section className="w-full h-[1000px] sm:h-[1400px] 3xl:min-h-[1800px] bg-[url('/img/fondoHeaderRAC.png')] bg-center bg-no-repeat bg-cover flex flex-col">
      <div className="w-full flex flex-col md:flex-row h-[700px] 3xl:h-[1000px]">
        <div className="w-full md:w-5/12 lg:w-4/12 2xl:w-3/12 3xl:w-4/12 flex flex-col justify-center items-center md:items-start mt-2 sm:mt-10 3xl:mt-20 md:ml-5 lg:ml-[5%] xl:ml-[10%] 2xl:ml-52 3xl:ml-60 text-center md:text-start sm:pt-20 md:pt-0">
          <div className="block sm:hidden relative w-[150px] aspect-video">
            <Image
              src="/img/logo.png"
              layout="fill"
              objectFit="contain"
              alt="logo"
            />
          </div>
          <h1 className="text-3xl lg:text-5xl 3xl:text-7xl text-bluebm font-[InterBold]">
            Olvídate del <br /> miedo a las <br />
            <span className="text-lightBluebm text-4xl lg:text-6xl 3xl:text-8xl">
              Matemáticas
            </span>
          </h1>

          <a
            href="#conocenos"
            className="text-white py-2 3xl:py-3 px-9 3xl:px-12 rounded-md bg-purplebm w-fit font-bold text-xl 3xl:text-3xl tracking-wider my-5 hover:shadow-2xl hover:bg-opacity-80 transition-all duration-300"
          >
            Conoce cómo
          </a>
          <p className="leading-[18px] text-xs lg:text-base 3xl:text-2xl">
            Convertimos <b>la matemática</b> en una herramienta <br /> para
            estimular el razonamiento lógico y analítico,
            <br /> mejorar la capacidad para solucionar problemas,
            <br /> la concentración, memoria, creatividad y{" "}
            <b>
              ganar <br /> confianza
            </b>
          </p>
        </div>
        <div className="w-full md:w-7/12 2xl:w-9/12 3xl:w-8/12 flex items-center justify-center md:justify-start md:mt-10 xl:pl-20">
          <div className="relative w-[300px] md:w-[700px] 3xl:w-[900px] aspect-square -mt-7 sm:mt-0">
            <Image
              src="/img/imgHeaderRAC.png"
              layout="fill"
              objectFit="contain"
              alt="niño feliz"
              priority
            />
          </div>
        </div>
      </div>
      <VidSectionRAC />
    </section>
  )
}

import Image from "next/image"
import VidSectionRAC from "../VidSectionRAC/page"

export default function HeaderRAC() {
  return (
    <section className="w-full h-[1000px] sm:h-[1400px] xxxl:min-h-[1800px] bg-[url('/img/fondoHeaderRAC.png')] bg-center bg-no-repeat bg-cover flex flex-col">
      <div className="w-full flex flex-col md:flex-row h-[700px] xxxl:h-[1000px]">
        <div className="w-full md:w-5/12 lg:w-4/12 xxl:w-3/12 xxxl:w-4/12 flex flex-col justify-center items-center md:items-start mt-2 sm:mt-10 xxxl:mt-20 md:ml-5 lg:ml-[5%] xl:ml-[10%] xxl:ml-52 xxxl:ml-60 text-center md:text-start sm:pt-20 md:pt-0">
          <div className="w-full flex sm:hidden justify-between p-2 xs:px-4 mb-5">
            <div className="relative w-[120px] xs:w-[150px] aspect-video">
              <Image
                src="/img/sdvsdv_2.png"
                layout="fill"
                objectFit="contain"
                alt="logo"
                priority
              />
            </div>
            <div className="relative w-[120px] xs:w-[150px]  aspect-video">
              <Image
                src="/img/anoescolar.png"
                layout="fill"
                objectFit="contain"
                alt="Boostermath instituto matemático"
                priority
              />
            </div>
          </div>
          <h1 className="text-3xl lg:text-5xl xxxl:text-7xl text-bluebm font-[InterBold]">
            Olvídate del <br /> miedo a las <br />
            <span className="text-lightBluebm text-4xl lg:text-6xl xxxl:text-8xl">
              Matemáticas
            </span>
          </h1>
          <div className="block sm:hidden relative w-[300px] md:w-[700px] xxxl:w-[900px] aspect-square -mt-7 sm:mt-0">
            <Image
              src="/img/imgHeaderRAC.png"
              layout="fill"
              objectFit="contain"
              alt="adolescente en 4to año de bachillerato feliz por resolver problemas matemáticos
"
              priority
            />
          </div>

          <a
            href="#conocenos"
            className="text-white py-2 xxxl:py-3 px-9 xxxl:px-12 rounded-md bg-purplebm w-fit font-bold text-xl xxxl:text-3xl tracking-wider sm:my-5 hover:shadow-2xl hover:bg-opacity-80 transition-all duration-300 -mt-1 mb-7"
          >
            Conoce cómo
          </a>
          <p className="leading-[18px] text-xs lg:text-base xxxl:text-2xl mb-5 sm:mb-0">
            Convertimos <b>la matemática</b> en una herramienta <br /> para
            estimular el razonamiento lógico y analítico,
            <br /> mejorar la capacidad para solucionar problemas,
            <br /> la concentración, memoria, creatividad y{" "}
            <b>
              ganar <br /> confianza
            </b>
          </p>
        </div>
        <div className="w-full md:w-7/12 xxl:w-9/12 xxxl:w-8/12 hidden sm:flex items-center justify-center md:justify-start md:mt-10 xl:pl-20">
          <div className="relative w-[300px] md:w-[700px] xxxl:w-[900px] aspect-square -mt-7 sm:mt-0">
            <Image
              src="/img/imgHeaderRAC.png"
              layout="fill"
              objectFit="contain"
              alt="adolescente en 4to año de bachillerato feliz por resolver problemas matemáticos"
              priority
            />
          </div>
        </div>
      </div>
      <VidSectionRAC />
    </section>
  )
}

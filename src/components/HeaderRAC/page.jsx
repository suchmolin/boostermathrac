import Image from "next/image"
import VidSectionRAC from "../VidSectionRAC/page"

export default function HeaderRAC() {
  return (
    <section className="w-full h-[200vh] bg-[url('/img/fondoHeaderRAC.png')] bg-center bg-no-repeat bg-cover flex flex-col">
      <div className="w-full flex">
        <div className="w-3/12 h-[80vh] flex flex-col justify-end ml-52">
          <h1 className="text-5xl text-bluebm font-[InterBold]">
            Olvídate del <br /> miedo a las <br />
            <span className="text-lightBluebm text-6xl">Matemáticas</span>
          </h1>

          <a
            href="#"
            className="text-white py-2 px-9 rounded-md bg-purplebm w-fit font-bold text-xl tracking-wider my-5"
          >
            Conoce cómo
          </a>
          <p className="leading-[18px]">
            Convertimos <b>la matemática</b> en una herramienta <br /> para
            estimular el razonamiento lógico y analítico,
            <br /> mejorar la capacidad para solucionar problemas,
            <br /> la concentración, memoria, creatividad y{" "}
            <b>
              ganar <br /> confianza
            </b>
          </p>
        </div>
        <div className="w-9/12 h-[105vh] flex items-end pl-20">
          <div className="relative w-[700px] aspect-square">
            <Image
              src="/img/imgHeaderRAC.png"
              layout="fill"
              objectFit="contain"
              alt="niño feliz"
            />
          </div>
        </div>
      </div>
      <VidSectionRAC />
    </section>
  )
}

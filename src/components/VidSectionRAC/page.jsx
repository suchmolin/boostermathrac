import { IoPlayCircleOutline } from "react-icons/io5"
export default function VidSectionRAC() {
  return (
    <div className="w-full flex flex-col items-center justify-center sm:pt-24 pb-10 sm:pb-0">
      <div className="w-[250px] xs:w-[350px] sm:w-[600px] md:w-[750px] 3xl:w-[1000px] aspect-video border-LightBlueSecondarybm border-[5px] sm:border-[15px] rounded-[40px] bg-white flex items-center justify-center">
        <IoPlayCircleOutline className="text-9xl text-lightBluebm" />
      </div>
      <h3 className="text-xl xs:text-2xl 3xl:text-4xl text-lightBluebm leading-[25px] pt-3 text-center px-4 xs:px-0">
        Este Año Escolar, las matemáticas dejarán <br /> de ser un problema con
        nuestro
      </h3>
      <h2 className="text-3xl 3xl:text-5xl text-purplebm font-bold text-center">
        Acelerador Matemático
      </h2>
    </div>
  )
}

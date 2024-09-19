import { IoPlayCircleOutline } from "react-icons/io5"
export default function VidSectionRAC() {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-24">
      <div className="w-[750px] aspect-video border-LightBlueSecondarybm border-[15px] rounded-[40px] bg-white flex items-center justify-center">
        <IoPlayCircleOutline className="text-9xl text-lightBluebm" />
      </div>
      <h3 className="text-2xl text-lightBluebm leading-[25px] pt-3 text-center">
        Este Año Escolar, las matemáticas dejarán <br /> de ser un problema con
        nuestro
      </h3>
      <h2 className="text-3xl text-purplebm font-bold">
        Acelerador Matemático
      </h2>
    </div>
  )
}

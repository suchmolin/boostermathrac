import Image from "next/image"
import FormContactanos from "../FormContactanos/page"

export default function Contactanos() {
  return (
    <div className="w-full flex flex-col justify-center items-center  pt-24 bg-purpleSecondarybm bg-[url('/img/fondoContactanos.png')] bg-cover bg-center bg-no-repeat">
      <div
        id="contactanos"
        className="w-[270px] xs:w-[350px] sm:w-[550px] md:w-[700px] lg:w-[800px] flex flex-col justify-center items-center bg-white rounded-2xl sm:rounded-[100px] shadow-lg py-3 md:py-10 px-3 sm:px-10 lg:px-20"
      >
        <div className="relative w-[250px] aspect-video mb-5">
          <Image
            src="/img/logo.png"
            layout="fill"
            objectFit="contain"
            alt="boostermath"
          />
        </div>
        <h2 className="px-2 sm:px-0 font-[InterBlack] text-sm md:text-xl mb-5 text-center sm:text-start">
          {" "}
          COMIENZA A CONVERTIR A LA MATEMÁTICA EN TU ALIADA
        </h2>
        <FormContactanos />
      </div>
      <div className="w-full h-[60px] md:h-[120px] mt-10 bg-[url('/img/sdfsdf.png')] bg-cover bg-bottom bg-no-repeat"></div>
    </div>
  )
}

import Image from "next/image"
import FormContactanos from "../FormContactanos/page"

export default function Contactanos() {
  return (
    <div className="w-full flex flex-col justify-center items-center  pt-24 bg-purpleSecondarybm bg-[url('/img/fondoContactanos.png')] bg-cover bg-center bg-no-repeat">
      <div className="w-[800px] flex flex-col justify-center items-center bg-white rounded-[100px] shadow-lg py-10 px-20">
        <div className="relative w-[250px] aspect-video mb-5">
          <Image
            src="/img/logo.png"
            layout="fill"
            objectFit="contain"
            alt="boostermath"
          />
        </div>
        <h2 className="font-[InterBlack] text-xl mb-5">
          {" "}
          COMIENZA A CONVERTIR A LA MATEMÁTICA EN TU ALIADA
        </h2>
        <FormContactanos />
      </div>
      <div className="w-full h-[120px] mt-10 bg-[url('/img/sdfsdf.png')] bg-cover bg-bottom bg-no-repeat"></div>
    </div>
  )
}

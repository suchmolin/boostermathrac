import Image from "next/image"

export default function TrofeoRAC() {
  return (
    <div className="w-full mt-28 flex flex-col items-center justify-center">
      <h2 className="hidden">
        Tu aliado para mejorar el rendimiento acadèmico
      </h2>
      <div className="relative w-[500px] aspect-video">
        <Image
          src="/img/tituloTrofeoRAC.png"
          layout="fill"
          objectFit="contain"
          alt="TrofeoRAC"
        />
      </div>
      <div className="w-10/12 flex justify-center">
        <div className="w-5/12 flex flex-col">
          <div className=""></div>
        </div>
        <div className="relative w-[200px] aspect-square">
          <Image
            src="/img/trofeoRAC.png"
            layout="fill"
            objectFit="contain"
            alt="TrofeoRAC1"
          />
        </div>
      </div>
    </div>
  )
}

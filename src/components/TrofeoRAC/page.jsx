import Image from "next/image"

export default function TrofeoRAC() {
  return (
    <div className="w-full pt-28 3xl:pt-10 flex flex-col items-center justify-center pb-20 -mt-1">
      <h2 className="text-white">
        Tu aliado para mejorar el rendimiento acadèmico
      </h2>
      <div className="relative w-[500px] 3xl:w-[700px] aspect-video">
        <Image
          src="/img/tituloTrofeoRAC.png"
          layout="fill"
          objectFit="contain"
          alt="TrofeoRAC"
        />
      </div>
      <div className="w-10/12 flex justify-center">
        <div className="w-4/12 flex flex-col gap-5 3xl:gap-10 pt-10">
          <div className="w-full flex justify-end">
            <Image
              src="/img/parentesis.png"
              width={25}
              height={50}
              alt="parentesis"
            />
            <p className="text-2xl 3xl:text-5xl font-[InterBlack] text-bluebm font-extrabold px-2 text-center">
              25 años de <br /> experiencia
            </p>
            <Image
              src="/img/parentesis2.png"
              width={25}
              height={50}
              alt="parentesis"
            />
          </div>
          <div className="w-full flex justify-start ml-10">
            <Image
              src="/img/parentesis.png"
              width={25}
              height={50}
              alt="parentesis"
            />
            <p className="text-2xl 3xl:text-5xl font-[InterBlack] text-bluebm font-extrabold px-2 text-center">
              Instalaciones <br /> cómodas y seguras
            </p>
            <Image
              src="/img/parentesis2.png"
              width={25}
              height={50}
              alt="parentesis"
            />
          </div>
        </div>
        <div className="relative w-[200px] 3xl:w-[400px] aspect-square mx-10">
          <Image
            src="/img/trofeoRAC.png"
            layout="fill"
            objectFit="contain"
            alt="TrofeoRAC1"
          />
        </div>
        <div className="w-4/12 flex flex-col gap-5 3xl:gap-10 pt-10">
          <div className="w-full flex justify-start">
            <Image
              src="/img/parentesis.png"
              width={25}
              height={50}
              alt="parentesis"
            />
            <p className="text-2xl 3xl:text-5xl font-[InterBlack] text-bluebm font-extrabold px-2 text-center">
              1° acelerador <br /> matemático del país
            </p>
            <Image
              src="/img/parentesis2.png"
              width={25}
              height={50}
              alt="parentesis"
            />
          </div>
          <div className="w-full flex justify-end mr-10">
            <Image
              src="/img/parentesis.png"
              width={25}
              height={50}
              alt="parentesis"
            />
            <p className="text-2xl 3xl:text-5xl font-[InterBlack] text-bluebm font-extrabold px-2 text-center">
              Metodología <br /> empática y efectiva
            </p>
            <Image
              src="/img/parentesis2.png"
              width={25}
              height={50}
              alt="parentesis"
            />
          </div>
        </div>
      </div>
      <a
        href="#"
        className="text-white py-2 3xl:py-3 px-9 3xl:px-12 rounded-md bg-purplebm w-fit font-bold text-xl 3xl:text-3xl tracking-wider my-5 3xl:mt-10"
      >
        Vive la experiencia
      </a>
    </div>
  )
}

import Image from "next/image"

export default function TrofeoRAC() {
  return (
    <div className="w-full sm:pt-10 3xl:pt-10 flex flex-col items-center justify-center pb-20 -mt-1">
      <h2 className="text-white">
        Tu aliado para mejorar el rendimiento acadèmico
      </h2>
      <div className="relative w-[280px] xs:w-[350px] sm:w-[400px] md:w-[500px] 3xl:w-[700px] aspect-video">
        <Image
          src="/img/tituloTrofeoRAC.png"
          layout="fill"
          objectFit="contain"
          alt="TrofeoRAC"
        />
      </div>
      <div className="block sm:hidden relative w-[200px] 3xl:w-[400px] aspect-square mx-10 -mt-20">
        <Image
          src="/img/trofeoRAC.png"
          layout="fill"
          objectFit="contain"
          alt="TrofeoRAC1"
        />
      </div>
      <div className="w-full sm:w-11/12 md:w-10/12 flex justify-center">
        <div className="w-6/12 sm:w-5/12 xl:w-4/12 flex flex-col gap-5 3xl:gap-10 pt-10">
          <div className="w-full flex justify-center sm:justify-end">
            <div className="relative w-[15px] sm:w-[20px] lg:w-[25px] h-[70px]">
              <Image
                src="/img/parentesis.png"
                objectFit="contain"
                layout="fill"
                alt="parentesis"
              />
            </div>
            <p className="text-sm sm:text-base lg:text-2xl 3xl:text-5xl font-[InterBlack] text-bluebm font-extrabold px-2 text-center">
              25 años de <br /> experiencia
            </p>
            <div className="relative w-[15px] sm:w-[20px] lg:w-[25px] h-[70px]">
              <Image
                src="/img/parentesis2.png"
                objectFit="contain"
                layout="fill"
                alt="parentesis"
              />
            </div>
          </div>
          <div className="w-full flex justify-start sm:ml-10">
            <div className="relative w-[15px] sm:w-[20px] lg:w-[25px] h-[70px]">
              <Image
                src="/img/parentesis.png"
                objectFit="contain"
                layout="fill"
                alt="parentesis"
              />
            </div>
            <p className="text-sm sm:text-base lg:text-2xl 3xl:text-5xl font-[InterBlack] text-bluebm font-extrabold px-2 text-center">
              Instalaciones <br /> cómodas y seguras
            </p>
            <div className="relative w-[15px] sm:w-[20px] lg:w-[25px] h-[70px]">
              <Image
                src="/img/parentesis2.png"
                objectFit="contain"
                layout="fill"
                alt="parentesis"
              />
            </div>
          </div>
        </div>
        <div className="hidden sm:block relative w-[200px] 3xl:w-[400px] aspect-square mx-10">
          <Image
            src="/img/trofeoRAC.png"
            layout="fill"
            objectFit="contain"
            alt="TrofeoRAC1"
          />
        </div>
        <div className="w-6/12 sm:w-5/12 xl:w-4/12 flex flex-col gap-5 3xl:gap-10 pt-10">
          <div className="w-full flex justify-start">
            <div className="relative w-[15px] sm:w-[20px] lg:w-[25px] h-[70px]">
              <Image
                src="/img/parentesis.png"
                objectFit="contain"
                layout="fill"
                alt="parentesis"
              />
            </div>
            <p className="text-sm sm:text-base lg:text-2xl 3xl:text-5xl font-[InterBlack] text-bluebm font-extrabold px-2 text-center">
              1° acelerador <br /> matemático del país
            </p>
            <div className="relative w-[15px] sm:w-[20px] lg:w-[25px] h-[70px]">
              <Image
                src="/img/parentesis2.png"
                objectFit="contain"
                layout="fill"
                alt="parentesis"
              />
            </div>
          </div>
          <div className="w-full flex justify-end sm:mr-10">
            <div className="relative w-[15px] sm:w-[20px] lg:w-[25px] h-[70px]">
              <Image
                src="/img/parentesis.png"
                objectFit="contain"
                layout="fill"
                alt="parentesis"
              />
            </div>
            <p className="text-sm sm:text-base lg:text-2xl 3xl:text-5xl font-[InterBlack] text-bluebm font-extrabold px-2 text-center">
              Metodología <br /> empática y efectiva
            </p>
            <div className="relative w-[15px] sm:w-[20px] lg:w-[25px] h-[70px]">
              <Image
                src="/img/parentesis2.png"
                objectFit="contain"
                layout="fill"
                alt="parentesis"
              />
            </div>
          </div>
        </div>
      </div>
      <a
        href="#contactanos"
        className="text-white py-2 3xl:py-3 px-9 3xl:px-12 rounded-md bg-purplebm w-fit font-bold text-base sm:text-xl 3xl:text-3xl tracking-wider my-5 3xl:mt-10 hover:shadow-2xl hover:bg-opacity-80 transition-all duration-300"
      >
        Vive la experiencia
      </a>
    </div>
  )
}

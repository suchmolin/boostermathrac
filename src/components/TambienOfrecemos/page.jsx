import Image from "next/image"

export default function TambienOfrecemos() {
  return (
    <div className="w-full flex flex-col pb-20 sm:pb-10 md:pb-10 lg:pb-20 px-4 sm:pl-10 lg:pl-32 xl:pl-40 3xl:pl-64 text-bluebm bg-LightBlueSecondarybm bg-[url('/img/fondoTambien.png')] bg-contain bg-right-bottom bg-no-repeat">
      <h2 className="font-[InterBlack] text-2xl xs:text-4xl lg:text-5xl xl:text-6xl 3xl:text-8xl mb-5 lg:mb-10 xl:mb-14 ">
        ¡Tambien te ofrecemos <br />
        ayuda especializada!
      </h2>
      <div className="flex flex-col pl-2 gap-5 xl:gap-10">
        <h3 className="text-2xl 3xl:text-4xl font-[InterBlack]">
          Clases personalizadas
        </h3>
        <div className="flex gap-3 xs:gap-7 items-center">
          <div className="relative w-[45px] xs:w-[50px] lg:w-[65px] xl:w-[70px] aspect-square">
            <Image
              src="/img/iconTambien.png"
              objectFit="contain"
              layout="fill"
              alt="math icon"
            />
          </div>
          <p className="text-lg xs:text-xl lg:text-2xl xl:text-3xl  3xl:text-5xl">
            Matemática <br /> (escolar y universitaria)
          </p>
        </div>
        <div className="flex gap-3 xs:gap-7 items-center">
          <div className="relative w-[45px] xs:w-[50px] lg:w-[65px] xl:w-[70px] aspect-square">
            <Image
              src="/img/iconTambien2.png"
              objectFit="contain"
              layout="fill"
              alt="physic icon"
            />
          </div>
          <p className="text-lg xs:text-xl lg:text-2xl xl:text-3xl  3xl:text-5xl">
            Física
          </p>
        </div>
        <div className="flex gap-3 xs:gap-7 items-center">
          <div className="relative w-[45px] xs:w-[50px] lg:w-[65px] xl:w-[70px] aspect-square">
            <Image
              src="/img/iconTambien3.png"
              objectFit="contain"
              layout="fill"
              alt="chemical icon"
            />
          </div>
          <p className="text-lg xs:text-xl lg:text-2xl xl:text-3xl  3xl:text-5xl">
            Química
          </p>
        </div>
        <a
          href="#contactanos"
          className="text-white py-2 3xl:py-3 px-9 3xl:px-12 rounded-md bg-purplebm w-fit font-bold sm:text-xl 3xl:text-3xl tracking-wider xs:my-5 mb-10 xs:mb-0 hover:shadow-2xl hover:bg-opacity-80 transition-all duration-300"
        >
          Reservar
        </a>
      </div>
    </div>
  )
}

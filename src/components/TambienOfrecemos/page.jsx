import Image from "next/image"

export default function TambienOfrecemos() {
  return (
    <div className="w-full flex flex-col pb-20 pl-40 3xl:pl-64 text-bluebm bg-LightBlueSecondarybm bg-[url('/img/fondoTambien.png')] bg-contain bg-right bg-no-repeat">
      <h2 className="font-[InterBlack] text-6xl 3xl:text-8xl mb-14">
        ¡Tambien te ofrecemos <br />
        ayuda especializada!
      </h2>
      <div className="flex flex-col pl-2 gap-10">
        <h3 className="text-2xl 3xl:text-4xl font-[InterBlack]">
          Clases personalizadas
        </h3>
        <div className="flex gap-7 items-center">
          <Image src="/img/iconTambien.png" width={70} height={70} />
          <p className="text-3xl  3xl:text-5xl">
            Matemática <br /> (escolar y universitaria)
          </p>
        </div>
        <div className="flex gap-7 items-center">
          <Image src="/img/iconTambien2.png" width={70} height={70} />
          <p className="text-3xl  3xl:text-5xl">Física</p>
        </div>
        <div className="flex gap-7 items-center">
          <Image src="/img/iconTambien3.png" width={70} height={70} />
          <p className="text-3xl  3xl:text-5xl">Química</p>
        </div>
        <a
          href="#"
          className="text-white py-2 3xl:py-3 px-9 3xl:px-12 rounded-md bg-purplebm w-fit font-bold text-xl 3xl:text-3xl tracking-wider my-5"
        >
          Reservar
        </a>
      </div>
    </div>
  )
}

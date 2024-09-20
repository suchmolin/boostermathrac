import Image from "next/image"

export default function TambienOfrecemos() {
  return (
    <div className="w-full flex flex-col pb-20 pl-40 text-bluebm bg-LightBlueSecondarybm bg-[url('/img/fondoTambien.png')] bg-contain bg-right bg-no-repeat">
      <h2 className="font-[InterBlack] text-6xl mb-14">
        ¡Tambien te ofrecemos <br />
        ayuda especializada!
      </h2>
      <div className="flex flex-col pl-2 gap-10">
        <h3 className="text-2xl font-[InterBlack]">Clases personalizadas</h3>
        <div className="flex gap-7 items-center">
          <Image src="/img/iconTambien.png" width={70} height={70} />
          <p className="text-3xl">
            Matemática <br /> (escolar y universitaria)
          </p>
        </div>
        <div className="flex gap-7 items-center">
          <Image src="/img/iconTambien2.png" width={70} height={70} />
          <p className="text-3xl">Física</p>
        </div>
        <div className="flex gap-7 items-center">
          <Image src="/img/iconTambien3.png" width={70} height={70} />
          <p className="text-3xl">Química</p>
        </div>
        <a
          href="#"
          className="text-white py-2 px-20 rounded-2xl bg-purplebm w-fit font-bold text-xl tracking-wider"
        >
          Reservar
        </a>
      </div>
    </div>
  )
}

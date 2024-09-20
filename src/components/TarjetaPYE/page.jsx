import Image from "next/image"

export default function TarjetaPYE({
  key,
  img,
  iconTitle,
  title,
  ages,
  p1,
  p2,
  horarios,
  fondo,
}) {
  return (
    <div
      className={`w-full min-h-[400px] flex justify-center items-center py-14 px-20 bg-${fondo} rounded-[40px] mb-20`}
    >
      <div className="relative w-[600px] aspect-square overflow-hidden rounded-[40px]">
        <Image src={img} layout="fill" objectFit="cover" alt="imgAlpha" />
      </div>
      <div className="flex flex-col justify-center pl-10 pr-32">
        <div className="flex gap-2 items-center mb-7">
          <Image src={iconTitle} width={80} height={80} alt="Icono1" />
          <p className="text-5xl text-bluebm flex flex-col font-[InterBlack]">
            {title} <span className="text-2xl text-purplebm">{ages}</span>
          </p>
        </div>
        <p className="text-bluebm text-xl mb-7 font-bold">{p1}</p>
        <p className="text-bluebm text-xl mb-7 font-bold">{p2}</p>
        <div className="flex items-center gap-2">
          <Image
            src="/img/iconCalendar.png"
            width={70}
            height={70}
            alt="Icono1"
          />
          <div>
            <p className="text-bluebm font-[InterBlack] text-xl">Horario</p>
            {horarios.map((item, index) => {
              return (
                <p key={index} className="text-bluebm text-lg font-bold">
                  {item}
                </p>
              )
            })}
          </div>
        </div>
        <a
          href="#"
          className="text-white py-2 px-9 rounded-2xl bg-purplebm w-fit font-bold text-xl tracking-wider mt-10"
        >
          Más información
        </a>
      </div>
    </div>
  )
}

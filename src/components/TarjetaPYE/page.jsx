import Image from "next/image"

export default function TarjetaPYE({
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
      className={`w-full xl:min-h-[400px] flex flex-col md:flex-row justify-center items-center pb-4 xs:py-4 lg:py-14 px-2 xs:px-5 xl:px-20 bg-${fondo} rounded-[40px] mb-20`}
    >
      <div className="relative w-[270px] md:w-[600px] aspect-square overflow-hidden rounded-[40px]">
        <Image src={img} layout="fill" objectFit="cover" alt="imgAlpha" />
      </div>
      <div className="flex flex-col justify-center items-center md:items-start md:pl-10 xl:pr-32">
        <div className="flex gap-2 xxxl:gap-4 items-center mb-2 lg:mb-7">
          <div className="relative w-[60px] aspect-square">
            <Image
              src={iconTitle}
              objectFit="contain"
              layout="fill"
              alt="Icono1"
            />
          </div>
          <p className="text-4xl lg:text-5xl xxxl:text-7xl text-bluebm flex flex-col font-[InterBlack] mt-3 md:mt-0">
            {title}{" "}
            <span className="text-xl lg:text-2xl xxxl:text-5xl text-purplebm">
              {ages}
            </span>
          </p>
        </div>
        <p className="text-bluebm text-base sm:text-lg lg:text-xl xxxl:text-3xl mb-2 lg:mb-7 font-bold text-justify md:text-start">
          {p1}
        </p>
        <p className="text-bluebm text-base sm:text-lg lg:text-xl xxxl:text-3xl mb-2 lg:mb-7 font-bold text-justify md:text-start">
          {p2}
        </p>
        <div className="flex items-center gap-2">
          <div className="relative w-[70px] aspect-square">
            <Image
              src="/img/iconCalendar.png"
              objectFit="contain"
              layout="fill"
              alt="Icono1"
            />
          </div>
          <div>
            <p className="text-bluebm text-2xl sm:text-lg lg:text-xl xxxl:text-4xl font-[InterBlack] ">
              Horario
            </p>
            {horarios.map((item, index) => {
              return (
                <p
                  key={index}
                  className="text-bluebm text-base lg:text-lg xxxl:text-4xl font-bold"
                >
                  {item}
                </p>
              )
            })}
          </div>
        </div>
        <a
          href="#contactanos"
          className="text-white py-2 xxxl:py-3 px-9 xxxl:px-12 rounded-md bg-purplebm w-fit font-bold text-lg lg:text-xl xxxl:text-3xl tracking-wider my-5 hover:shadow-2xl hover:bg-opacity-80 transition-all duration-300"
        >
          Más información
        </a>
      </div>
    </div>
  )
}

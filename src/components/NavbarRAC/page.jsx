import Image from "next/image"

export default function NavbarRAC() {
  return (
    <nav className="hidden absolute w-full h-[100px] 3xl:h-[150px] sm:flex justify-end ">
      <div className="absolute top-0 left-10 lg:left-40 3xl:left-60">
        <div className="relative w-[200px] lg:w-[300px] 3xl:w-[400px] aspect-video">
          <Image
            src="/img/logo.png"
            layout="fill"
            objectFit="contain"
            alt="logo"
          />
        </div>
      </div>
      <ul className="flex gap-5 lg:gap-12 3xl:gap-20 justify-center items-center text-base lg:text-xl 3xl:text-4xl font-bold text-bluebm pr-10 xl:pr-64">
        <li>
          <a href="/">Programas</a>
        </li>
        <li>
          <a href="/about">Horarios</a>
        </li>
        <li>
          <a href="/contact">Conócenos</a>
        </li>
        <li>
          <a href="/contact">Contáctanos</a>
        </li>
      </ul>
    </nav>
  )
}

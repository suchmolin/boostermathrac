import Image from "next/image"

export default function NavbarRAC() {
  return (
    <nav className="absolute w-full h-[100px] flex justify-end ">
      <div className="absolute top-0 left-40">
        <div className="relative w-[300px] aspect-video">
          <Image
            src="/img/logo.png"
            layout="fill"
            objectFit="contain"
            alt="logo"
          />
        </div>
      </div>
      <ul className="flex gap-16 justify-center items-center text-xl font-bold text-bluebm pr-80">
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

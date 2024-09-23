import Image from "next/image"
import { TiStarOutline } from "react-icons/ti"
import { MdOutlineWatchLater } from "react-icons/md"
import { HiOutlineUsers } from "react-icons/hi2"
import { MdPhoneIphone } from "react-icons/md"

export default function NavbarRAC() {
  return (
    <>
      <nav className="hidden absolute w-full h-[100px] 3xl:h-[150px] sm:flex justify-end z-50">
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
          <li className="hover:text-purplebm transition-all duration-300">
            <a href="#programas">Programas</a>
          </li>
          <li className="hover:text-purplebm transition-all duration-300">
            <a href="#horarios">Horarios</a>
          </li>
          <li className="hover:text-purplebm transition-all duration-300">
            <a href="#conocenos">Conócenos</a>
          </li>
          <li className="hover:text-purplebm transition-all duration-300">
            <a href="#contactanos">Contáctanos</a>
          </li>
        </ul>
      </nav>
      <div className="flex sm:hidden justify-center items-center w-full fixed -bottom-1 z-50">
        <div className="w-full flex justify-between bg-[#f0f0f1] px-2 py-3 text-[10px] xs:text-[12px] text-[#000b7a]">
          <a
            href="#programas"
            className="flex flex-col justify-center items-center border-[#000b7a] xs:px-3"
          >
            <TiStarOutline className="text-2xl xs:text-3xl" />
            <p>Programas</p>
          </a>
          <a
            href="#horarios"
            className="flex flex-col justify-center items-center  border-[#000b7a] xs:px-3"
          >
            <MdOutlineWatchLater className="text-2xl xs:text-3xl" />
            <p>Horarios</p>
          </a>
          <a
            href="#conocenos"
            className="flex flex-col justify-center items-center  border-[#000b7a] xs:px-3"
          >
            <HiOutlineUsers className="text-2xl xs:text-3xl" />
            <p>Conócenos</p>
          </a>
          <a
            href="#contactanos"
            className="flex flex-col justify-center items-center  xs:px-3"
          >
            <MdPhoneIphone className="text-2xl xs:text-3xl" />
            <p>Contáctanos</p>
          </a>
        </div>
      </div>
    </>
  )
}

import Image from "next/image"
import TarjetaPYE from "../TarjetaPYE/page"

export default function ProgramasyEdades() {
  const data = [
    {
      img: "/img/imgAlpha.jpg",
      iconTitle: "/img/iconAlpha.png",
      title: "Alpha",
      ages: "3-5 AÑOS",
      p1: "Bríndale a tu hijo confinza en sus habilidades numéricas y una base sólida para su futuro.",
      p2: "Exploramos conceptos matemáticos de manera natural, a travez del juego",
      horarios: ["-Martes y Jueves 2:00 a 3:20 pm"],
      fondo: "LightBlueSecondarybm",
      alt: "niña de 5 años y de primaria básica sonriendo por mejorar en clases de matemáticas",
    },
    {
      img: "/img/imgBeta.png",
      iconTitle: "/img/iconBeta.png",
      title: "Beta",
      ages: "6-8 AÑOS",
      p1: "Lo preparamos para enfrentar con confizanza los desafíos matemáticos en su desarrollo académico.",
      p2: "Desarrollamos sus capacidades de cálculo mental, pensamiento lógico y resolución de problemas.",
      horarios: [
        "-Lunes y Miercoles: 5:00 a 6:20 pm",
        "-Viernes: 2:00 a 5:00 pm",
      ],
      fondo: "LightBlueSecondarybm",
      alt: "niña de 7 años, rubia, en primaria básica feliz por sus avances en matemáticas",
    },
    {
      img: "/img/imgDelta.png",
      iconTitle: "/img/iconDelta.png",
      title: "Delta",
      ages: "9-11 AÑOS",
      p1: "Fomentamos su pasión por las matemáticas.",
      p2: "Estimulamos su comprensión matemática y preparacion para abordar cursos más avanzados en el futuro.",
      horarios: [
        "-Martes y Jueves: 5:00 a 6:20 pm",
        "-Sabados: 2:00 a 5:00 pm",
      ],
      fondo: "LightBlueSecondarybm",
      alt: "niño de 10 años sonriendo, porque logró superar sus problemas de matemáticas",
    },
    {
      img: "/img/imgKappa.png",
      iconTitle: "/img/iconKappa.png",
      title: "Kappa",
      ages: "12-14 AÑOS",
      p1: "Lo preparamos para un buen rendimiento en su educación secundaria.",
      p2: "Abordamos objetivos matemáticos más avanzados con un proceso de aprendizaje empírico y agredable.",
      horarios: ["-Viernes: 2:00 a 5:00 pm"],
      fondo: "purpleSecondarybm",
      alt: "joven de 13 años en secundaria de bachillerato, feliz por su mejora en matemáticas",
    },
    {
      img: "/img/imgSigma.jpg",
      iconTitle: "/img/iconSigma.png",
      title: "Sigma",
      ages: "15-17 AÑOS",
      p1: "Entrenamos la mente para conquistar grandes desafíos académicos.",
      p2: "Convertimos la matemática en una herramienta funcional y aplicable, como preparación para el futuro universitario",
      horarios: ["-Lunes y Miercoles: 3:30 a 4:50 pm"],
      fondo: "purpleSecondarybm",
      alt: "joven de 16 años en bachillerato, feliz por su mejora en operaciones matemáticas",
    },
  ]
  return (
    <div
      id="programas"
      className="relative w-full flex flex-col justify-center items-center sm:pb-10 "
    >
      <Image
        className="absolute right-0 top-[13%]"
        src="/img/fondotarjetas2.png"
        width={600}
        height={300}
        alt="linea"
      />
      <Image
        className="absolute left-0 bottom-[18%]"
        src="/img/fondotarjetas.png"
        width={600}
        height={300}
        alt="linea"
      />
      <div
        id="horarios"
        className="w-11/12 sm:w-8/12 md:w-11/12 xl:w-10/12 flex flex-col justify-center items-center z-10"
      >
        <h2 className="font-[InterBlack] text-4xl xxxl:text-6xl text-bluebm mb-10">
          Programas y edades
        </h2>
        {data.map((item, index) => {
          return (
            <TarjetaPYE
              key={index}
              img={item.img}
              iconTitle={item.iconTitle}
              title={item.title}
              ages={item.ages}
              p1={item.p1}
              p2={item.p2}
              horarios={item.horarios}
              fondo={item.fondo}
              alt={item.alt}
            />
          )
        })}
      </div>
    </div>
  )
}

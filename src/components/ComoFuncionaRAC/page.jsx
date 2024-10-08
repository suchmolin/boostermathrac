import Image from "next/image"

export default function ComoFuncionaRAC() {
  return (
    <section
      id="conocenos"
      className="w-full bg-[url('/img/fondoComoFuncionaRAC.png')] bg-contain bg-top bg-no-repeat flex flex-col items-center bg-LightBlueSecondarybm pt-10"
    >
      <div className="w-10/12 flex justify-center items-end gap-20 lg:gap-7 xl:gap-0">
        <div className="w-[100px] xl:w-[130px] xxxl:w-[230px] aspect-square relative  hidden sm:block">
          <Image
            src="/img/iconComoFuncionaRAC.png"
            layout="fill"
            objectFit="contain"
            alt="IconoComoFuncionaRAC1"
          />
        </div>
        <div className="w-11/12 sm:w-6/12 md:w-5/12 flex flex-col items-center justify-end">
          <div className="relative w-[300px] xs:w-[350px] sm:w-[500px] xxxl:w-[700px] aspect-video">
            <Image
              src="/img/imgComoFuncionaRAC.png"
              layout="fill"
              objectFit="contain"
              alt="3 chicos de edad joven, una niña que esta en tercer grado y dos jovenes en bachillerato"
            />
          </div>
          <h2 className="font-[InterBold] md:text-lg lg:text-2xl xl:text-3xl xxxl:text-5xl text-bluebm text-center pb-5">
            Conoce cómo funciona <br />
            nuestro Acelerador Matemático
          </h2>
          <div className="relative flex gap-2 sm:gap-10 w-full justify-center">
            <div className="absolute top-[50px] xxxl:top-[60px] w-[200px] sm:w-[300px] xxxl:w-[400px] h-[4px] bg-white"></div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-bluebm font-bold text-sm xxxl:text-xl text-center mb-2">
                Iniciación
              </p>
              <div className="w-[50px] h-[50px] rounded-full p-4 bg-purplebm flex justify-center items-center z-0 hover:scale-105 transition-all duration-300">
                <Image
                  src="/img/iconMini1.png"
                  width={20}
                  height={20}
                  alt="icono play"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-bluebm font-bold text-sm xxxl:text-xl text-center mb-2">
                Nivelación
              </p>
              <div className="w-[50px] h-[50px] rounded-full p-4 bg-purplebm flex justify-center items-center z-0 hover:scale-105 transition-all duration-300">
                <Image
                  src="/img/iconMini2.png"
                  width={20}
                  height={20}
                  alt="icono play"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-bluebm font-bold text-sm xxxl:text-xl text-center mb-2">
                Aceleración
              </p>
              <div className="w-[50px] h-[50px] rounded-full p-4 bg-purplebm flex justify-center items-center z-0 hover:scale-105 transition-all duration-300">
                <Image
                  src="/img/iconMini3.png"
                  width={25}
                  height={25}
                  alt="icono play"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-bluebm font-bold text-sm xxxl:text-xl text-center mb-2">
                Aplicación
              </p>
              <div className="w-[50px] h-[50px] rounded-full p-4 bg-purplebm flex justify-center items-center z-0 hover:scale-105 transition-all duration-300">
                <Image
                  src="/img/iconMini4.png"
                  width={25}
                  height={25}
                  alt="icono play"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[150px] xl:w-[200px] xxxl:w-[300px] aspect-square hidden sm:block">
          <Image
            src="/img/iconComoFuncionaRAC1.png"
            layout="fill"
            objectFit="contain"
            alt="IconoComoFuncionaRAC2"
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center bg-LightBlueSecondarybm bg-[url('/img/fondoComoFuncionaRAC2.png')] bg-cover bg-bottom bg-no-repeat pb-20">
        <p className="w-11/12 sm:w-7/12 lg:w-5/12 font-bold py-10 text-sm lg:text-base xxxl:text-2xl text-justify sm:text-start px-7">
          Ponemos a tu hijo un paso adelante de su nivel académico, a través de
          una forma de enseñanza novedosa, pensada para que entienda los
          procesos con facilidad y desarrolle su pensamiento lógico, para saber
          aplicarlos.
        </p>
        <a
          href="#contactanos"
          className="text-white py-2 xxxl:py-3 px-9 xxxl:px-12 rounded-md bg-purplebm w-fit font-bold text-xl xxxl:text-3xl tracking-wider my-5 hover:shadow-2xl hover:bg-opacity-80 transition-all duration-300"
        >
          Obtener cupo
        </a>
      </div>
    </section>
  )
}

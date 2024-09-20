import Image from "next/image"

export default function ComoFuncionaRAC() {
  return (
    <section className="w-full h-screen bg-[url('/img/fondoComoFuncionaRAC.png')] bg-contain bg-top bg-no-repeat flex flex-col items-center bg-LightBlueSecondarybm pt-10">
      <div className="w-10/12 flex justify-center items-end">
        <div className="w-[130px] aspect-square relative">
          <Image
            src="/img/iconComoFuncionaRAC.png"
            layout="fill"
            objectFit="contain"
            alt="IconoComoFuncionaRAC1"
          />
        </div>
        <div className="w-5/12 flex flex-col items-center justify-end">
          <div className="relative w-[500px] aspect-video">
            <Image
              src="/img/imgComoFuncionaRAC.png"
              layout="fill"
              objectFit="contain"
              alt="ComoFuncionaRAC"
            />
          </div>
          <h2 className="font-[InterBold] text-3xl text-bluebm text-center pb-5">
            Conoce cómo funciona <br />
            nuestro Acelerador Matemático
          </h2>
          <div className="relative flex gap-10 w-full justify-center">
            <div className="absolute top-[50px] w-[300px] h-[4px] bg-white"></div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-bluebm font-bold text-sm text-center mb-2">
                Iniciación
              </p>
              <div className="w-[50px] h-[50px] rounded-full p-4 bg-purplebm flex justify-center items-center z-0">
                <Image
                  src="/img/iconMini1.png"
                  width={20}
                  height={20}
                  alt="icono play"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-bluebm font-bold text-sm text-center mb-2">
                Iniciación
              </p>
              <div className="w-[50px] h-[50px] rounded-full p-4 bg-purplebm flex justify-center items-center z-0">
                <Image
                  src="/img/iconMini2.png"
                  width={20}
                  height={20}
                  alt="icono play"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-bluebm font-bold text-sm text-center mb-2">
                Iniciación
              </p>
              <div className="w-[50px] h-[50px] rounded-full p-4 bg-purplebm flex justify-center items-center z-0">
                <Image
                  src="/img/iconMini3.png"
                  width={25}
                  height={25}
                  alt="icono play"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-bluebm font-bold text-sm text-center mb-2">
                Iniciación
              </p>
              <div className="w-[50px] h-[50px] rounded-full p-4 bg-purplebm flex justify-center items-center z-0">
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
        <div className="relative w-[200px] aspect-square">
          <Image
            src="/img/iconComoFuncionaRAC1.png"
            layout="fill"
            objectFit="contain"
            alt="IconoComoFuncionaRAC2"
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center bg-LightBlueSecondarybm bg-[url('/img/fondoComoFuncionaRAC2.png')] bg-cover bg-bottom bg-no-repeat">
        <p className="w-5/12 font-bold py-10">
          Ponemos a tu hijo un paso adelante de su nivel académico, a través de
          una forma de enseñanza novedosa, pensada para que entienda los
          procesos con facilidad y desarrolle su pensamiento lógico, para saber
          aplicarlos.
        </p>
        <a
          href="#"
          className="text-white py-2 px-9 rounded-md bg-purplebm w-fit font-bold text-xl tracking-wider mb-32"
        >
          Obtener cupo
        </a>
      </div>
    </section>
  )
}

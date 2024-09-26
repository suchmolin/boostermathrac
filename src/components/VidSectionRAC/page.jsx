import { IoPlayCircleOutline } from "react-icons/io5"
export default function VidSectionRAC() {
  return (
    <div className="w-full flex flex-col items-center justify-center sm:pt-24 pb-10 sm:pb-0 ">
      <div className="w-[250px] xs:w-[350px] sm:w-[600px] md:w-[740px] xxxl:w-[1000px] border-LightBlueSecondarybm border-[5px] sm:border-[15px] rounded-[40px] bg-white flex items-center justify-center overflow-hidden">
        {/*<IoPlayCircleOutline className="text-9xl text-lightBluebm" />*/}
        <video
          src="https://firebasestorage.googleapis.com/v0/b/jsuchmolin-394bd.appspot.com/o/vid.mp4?alt=media&token=bf58ecf7-2c25-4a87-b92e-91941742e095"
          controls
          autoPlay
          muted
          loop
          className="w-full h-full cursor-pointer"
        ></video>
      </div>
      <h2 className="text-xl xs:text-lg sm:text-2xl xxxl:text-4xl text-lightBluebm leading-[25px] pt-3 text-center px-4 xs:px-0">
        Este Año Escolar, las matemáticas dejarán <br /> de ser un problema con
        nuestro
      </h2>
      <h3 className="text-2xl sm:text-3xl xxxl:text-5xl text-purplebm font-bold text-center">
        Acelerador Matemático
      </h3>
    </div>
  )
}

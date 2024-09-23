import ComoFuncionaRAC from "@/components/ComoFuncionaRAC/page"
import Contactanos from "@/components/Contactanos/page"
import FooterRAC from "@/components/FooterRAC/page"
import HeaderRAC from "@/components/HeaderRAC/page"
import NavbarRAC from "@/components/NavbarRAC/page"
import PasoAdelante from "@/components/PasoAdelante/page"
import ProgramasyEdades from "@/components/ProgramasyEdades/page"
import TambienOfrecemos from "@/components/TambienOfrecemos/page"
import TrofeoRAC from "@/components/TrofeoRAC/page"

export default function Home() {
  return (
    <main className="font-[Inter]">
      <NavbarRAC />
      <HeaderRAC />
      <ComoFuncionaRAC />
      <TrofeoRAC />
      <ProgramasyEdades />
      <PasoAdelante />
      <Contactanos />
      <TambienOfrecemos />
      <FooterRAC />
      {/*
       */}
    </main>
  )
}

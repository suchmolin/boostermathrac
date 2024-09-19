import ComoFuncionaRAC from "@/components/ComoFuncionaRAC/page"
import HeaderRAC from "@/components/HeaderRAC/page"
import NavbarRAC from "@/components/NavbarRAC/page"

export default function Home() {
  return (
    <main className="font-[Inter]">
      <NavbarRAC />
      <HeaderRAC />
      <ComoFuncionaRAC />
    </main>
  )
}

import "./globals.css"

export const metadata = {
  title: "Potencia Tus Habilidades Numéricas Con Boostermath",
  description: "¡La mejor manera de aprender matemáticas! Clases personalizadas, Acelerador Matemático y Metodología unica. Online y Presencial. ¡Inscríbete ya!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

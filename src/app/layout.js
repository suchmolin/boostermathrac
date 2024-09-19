import "./globals.css"

export const metadata = {
  title: "Boostermath Regreso a Clases",
  description: "Boostermath Regreso a Clases",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

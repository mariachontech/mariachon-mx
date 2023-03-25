import './globals.css'

export const metadata = {
	title: "Mariachon",
	description:
		"Somos una compañía que une la creatividad del entretenimiento, la efectividad del marketing, y la magia de la tecnología para crear experiencias innovadoras para tu empresa.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

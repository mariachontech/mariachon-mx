import Head from "next/head"
import Hero from "@/components/Hero"
import Entertaiment from "@/components/Entertaiment"
import Inform from "@/components/Inform"
import Footer from "@/components/Footer"

export default function Home() {
	return (
		<main className="w-screen  text-center bg-[#010A30] flex flex-col justify-center items-center">
			<Head>
				<title>Mariachon</title>
				<link rel="icon" href="/images/mariachon.png" type="image/svg+xml" />
				<meta property="og:image" content={"/images/mariachon.png"} />
			</Head>
			<Hero />
			<section id="entretenimiento">
				<Entertaiment
					title="Entretenimiento"
					paragraph1="Creamos experiencias emocionantes y únicas para ti."
					paragraph2="Nos esforzamos por ofrecer el mejor entretenimiento en vivo, desde eventos sociales, corporativos hasta espectáculos en vivo..."
				/>
			</section>
			<section id="mariachis">
				<Inform
					title="Mariachis"
					paragraph1="¿Quieres una fiesta llena de alegría y tradición?"
					paragraph2="Nuestros mariachis son perfectos para amenizar tu evento social "
					imageUrl="/images/mariachon_violin.png"
				/>
			</section>
			<section id="marketing">
				<Entertaiment
					title="Marketing"
					paragraph1="El marketing efectivo es la clave para el éxito de cualquier negocio. Nos dedicamos a ayudar a nuestros clientes para alcanzar los objetivos en posicionamiento de marcas y publicidad digital."
				/>
			</section>
			<section id="diseño-web">
				<Inform
					title="Diseño web"
					paragraph1="Nuestro equipo de expertos en diseño y desarrollo web trabaja de la mano contigo para entender tus requerimientos y plasmar tu visión en una página web única y cautivadora."
					paragraph2="Ya sea que necesites un sitio web corporativo, una tienda en línea o un blog personalizado, estamos aquí para ayudarte."
					imageUrl="/images/hoche_ai.png"
					invert
				/>
			</section>
			<Footer />
		</main>
	)
}

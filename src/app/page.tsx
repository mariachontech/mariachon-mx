import Image from "next/image";
import NavBar from "@/components/NavBar";
import Head from "next/head"



export default function Home() {
  
  return (
		<main className="w-screen h-screen text-center bg-[#010A30] flex flex-col justify-center items-center">
			<Head>
				<title>Mariachon</title>
				<link rel="icon" href="/images/mariachon.png" type="image/svg+xml" />
				<meta property="og:image" content={"/images/mariachon.png"} />
			</Head>
			<div className="absolute top-0 ">
				<NavBar />
			</div>
			<div className="relative w-[350px] h-[150px]">
				<Image
					className="object-cover"
					src={"/images/mariachon.png"}
					alt="Mariachon Company"
					fill
				/>
			</div>
			<h1 className="text-white text-5xl font-comforta font-bold mt-4">Mariachon</h1>
			<p className="w-8/12 text-white mt-24 px-10">
				Somos una compañía que une la creatividad del entretenimiento, la
				efectividad del marketing, y la magia de la tecnología para crear
				experiencias innovadoras para tu empresa.
			</p>
		</main>
	)
}

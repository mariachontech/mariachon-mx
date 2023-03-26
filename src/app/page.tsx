
import Head from "next/head"
import Hero from "@/components/Hero";



export default function Home() {
  
  return (
		<main className="w-screen h-screen text-center bg-[#010A30] flex flex-col justify-center items-center">
			<Head>
				<title>Mariachon</title>
				<link rel="icon" href="/images/mariachon.png" type="image/svg+xml" />
				<meta property="og:image" content={"/images/mariachon.png"} />
			</Head>
		<Hero />
		</main>
	)
}

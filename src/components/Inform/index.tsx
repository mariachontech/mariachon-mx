import Image from "next/image"
import React from "react"
import ButtonCTO from "../ButtonCTO"

type Props = {
	title?: string
	paragraph1?: string
	paragraph2?: string
	imageUrl?: string
	invert?: boolean
}

const Inform = ({ title, paragraph1, paragraph2, imageUrl, invert }: Props) => {
	return (
		<div
			className={`w-screen h-screen flex justify-center items-center ${
				invert && "flex-row-reverse"
			}`}
		>
			<div className="w-1/2 h-full flex flex-col justify-center items-center gap-10">
				<h3 className="text-white text-5xl  font-bold">
					{title || "Mariachis"}
				</h3>
				<p className="text-white w-8/12 text-xl">
					{paragraph1 || "¿Quieres una fiesta llena de alegría y tradición?"}
				</p>
				{paragraph2 && (
					<p className="text-white w-8/12 text-xl">
						{paragraph2 ||
							"Nuestros mariachis son perfectos para amenizar tu evento social"}
					</p>
				)}

				<ButtonCTO text="Más informes" onClick={() => {}} />
			</div>
			<div className="relative w-1/2 h-full">
				<Image
					className="object-cover"
					src={imageUrl || "/images/mariachon_violin.png"}
					alt="Traje"
					fill
				/>
			</div>
		</div>
	)
}

export default Inform

"use client"

import React from "react"
import { motion } from "framer-motion"

type Props = {
	title?: string
	paragraph1?: string
	paragraph2?: string
}

const Entertaiment = ({ title, paragraph1, paragraph2 }: Props) => {
	return (
		<motion.div
			initial={{
				x: -500,
				opacity: 0,
				scale: 0.5,
			}}
			animate={{
				x: 0,
				opacity: 1,
				scale: 1,
			}}
			transition={{
				duration: 1.5,
			}}
			className="w-screen h-[50vh] bg-white flex flex-col justify-center items-center space-y-10"
		>
			<h2 className="text-[#960909] font-bold text-6xl text-start w-9/12">
				{title || "Entretenimiento"}{" "}
			</h2>
			<div className="ml-20 w-5/12  flex flex-col justify-center items-center gap-2">
				<p className="text-start w-full">
					{paragraph1 || "Creamos experiencias emocionantes y únicas para ti."}{" "}
				</p>

				{paragraph2 && <p className="text-start w-full">{paragraph2}</p>}
			</div>
		</motion.div>
	)
}

export default Entertaiment

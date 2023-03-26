'use client'

import React from 'react'
import Image from 'next/image'

import { useTypewriter, Cursor } from "react-simple-typewriter"
import { motion } from "framer-motion"


import NavBar from '../NavBar'


type Props = {}

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
			words: ["MARIACHON", "<Entretenimiento />", "<Marketing />", "<Tecnología />"],
		   loop: true,
       delaySpeed: 2000
		})
  return (
		<div className="flex flex-col justify-center items-center">
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
				className="absolute top-0 "
			>
				<NavBar />
			</motion.div>
			<div className="relative w-[350px] h-[150px]">
				<Image
					className="object-cover animate-pulse"
					src={"/images/mariachon.png"}
					alt="Mariachon Company"
					fill
				/>
			</div>
			<h1 className="text-white text-5xl font-comforta font-bold mt-4">
				<span>{text}</span>
				<Cursor cursorColor="#F7AB0A" />
			</h1>
			<motion.div
				initial={{
					x: 500,
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
				className="w-screen flex justify-center"
			>
				<p className="w-8/12 text-white mt-24 px-10">
					Somos una compañía que une la creatividad del entretenimiento, la
					efectividad del marketing, y la magia de la tecnología para crear
					experiencias innovadoras para tu empresa.
				</p>
			</motion.div>
		</div>
	)
}

export default Hero
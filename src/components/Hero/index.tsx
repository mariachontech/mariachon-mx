"use client"

import React, { useState } from "react"
import Image from "next/image"

import { useTypewriter, Cursor } from "react-simple-typewriter"
import { motion } from "framer-motion"

import NavBar from "../NavBar"
import MenuModal from "../MenuModal"

type Props = {}

const Hero = (props: Props) => {
	const [visible, setVisible] = useState(false)
	const [text, count] = useTypewriter({
		words: [
			"MARIACHON",
			"<Entretenimiento />",
			"<Marketing />",
			"<Tecnología />",
		],
		loop: true,
		delaySpeed: 2000,
	})
	return (
		<div className="flex flex-col justify-center items-center h-screen">
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
				className="absolute top-0 cursor-pointer"
				onClick={() => setVisible(true)}
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
			<div className="pt-5">
				<a href="/#entretenimiento">
					<button className="heroButton">Entretenimiento</button>
				</a>
				<a href="/#mariachis">
					<button className="heroButton">Mariachis</button>
				</a>
				<a href="/#marketing">
					<button className="heroButton">Marketing</button>
				</a>
				<a href="/#diseño-web">
					<button className="heroButton">Diseño web</button>
				</a>
			</div>
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
			<MenuModal visible={visible} setVisible={setVisible} />
		</div>
	)
}

export default Hero

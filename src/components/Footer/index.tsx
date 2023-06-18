import React from "react"
import { SocialIcon } from "react-social-icons"

type Props = {}

const socials = [
	{
		id: 1,
		url: "https://www.linkedin.com/in/josstg/",
	},
	{
		id: 2,
		url: "https://github.com/josstell",
	},
	{
		id: 3,
		url: "https://www.facebook.com/josstell/",
	},
]

const Footer = (props: Props) => {
	return (
		<footer className="w-full h-fit py-4 bg-white">
			<div className="container mx-auto flex flex-col justify-end md:flex-row md:justify-between items-center">
				<div className="hidden  md:flex md:flex-col">
					<h3 className="text-[#9A9A9A] text-2xl font-extrabold 	 ">
						Aviso de Privacidad{" "}
					</h3>
					<p className="text-[#9A9A9A] w-[40vw]">
						Derechos reservados 2023 Mariachon
					</p>
				</div>
				<div className="w-full text-end">
					{socials.map((social) => (
						<SocialIcon
							key={social.id}
							url={social?.url}
							fgColor="gray"
							bgColor="transparent"
						/>
					))}
				</div>
			</div>
		</footer>
	)
}

export default Footer

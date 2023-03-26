
import { motion } from "framer-motion"


type Props = {
	visible: boolean
	setVisible: any // SetStateAction<boolean>
}

const MenuModal = (props: Props) => {
	const { visible, setVisible } = props

	const handleStop = (e: any) => {
		if (e.target.id === "container") {
			setVisible(false)
		}
	}

	

	return (
		<div
			className={`fixed inset-0 w-screen h-screen bg-black bg-opacity-30 backdrop-blur-sm z-20  ${
				visible ? "block" : "hidden"
			}`}
		>
			<div
				id="container"
				className={`relative  w-screen h-screen   ${
					visible ? "flex justify-center items-center" : "hidden"
				}`}
				onClick={handleStop}
			>
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
				className="absolute w-11/12 h-5/6 bg-[#E66400] text-white blur-0  z-50 flex flex-col justify-center items-center gap-4"
				
				>
					<div
						className="absolute top-0 right-3 text-2xl cursor-pointer"
						onClick={() => setVisible(false)}
					>
						x
					</div>
					<p className="text-xl font-bold uppercase text-white pb-2 tracking-[15px]">
						Mariachon
					</p>
					<p className="text-xl font-bold uppercase text-white pb-2 tracking-[15px]">
						Quienes somos
					</p>
					<p className="text-xl font-bold uppercase text-white pb-2 tracking-[15px]">
						Blog
					</p>
					<p className="text-xl font-bold uppercase text-white pb-2 tracking-[15px]">
						Contáctanos
					</p>
				</motion.div>
			</div>
		</div>
	)
}

export default MenuModal

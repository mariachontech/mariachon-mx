
type Props = {
	visible: boolean
	setVisible: any // SetStateAction<boolean>
}

const MenuModal = (props: Props) => {
	const { visible, setVisible } = props

	const handleStop = (e: any) => {
		if (e.target.id === "container") {
		
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
			>
				<div className="absolute text-white blur-0  z-50">
					
				</div>
			</div>
		</div>
	)
}

export default MenuModal

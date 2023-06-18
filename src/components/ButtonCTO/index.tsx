import React from "react"

type Props = {
	text: string
	onClick: () => void
}

const ButtonCTO = ({ text, onClick }: Props) => {
	return (
		<button className="bg-[#E66400] py-2 px-6 rounded-3xl text-white">
			{text}
		</button>
	)
}

export default ButtonCTO

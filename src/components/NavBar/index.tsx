import Image from 'next/image'
import React from 'react'

type Props = {}

const NavBar = (props: Props) => {
  return (
		<div className="w-screen flex justify-end  items-center  mt-4 pr-5">
				<div className="relative w-[83px] h-[36px] ">
					<Image
						className="object-cover"
						src={"/images/menu.png"}
						alt="Mariachon Company"
						fill
					/>
			</div>
		</div>
	)
}

export default NavBar
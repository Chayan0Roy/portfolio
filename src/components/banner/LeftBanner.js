import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import CV from '../../assets/CV.pdf'

const LeftBanner = () => {
	const [text] = useTypewriter({
		words: ["Full Stack Web Developer.", "Front-end Web Developer."],
		loop: true,
		typeSpeed: 20,
		deleteSpeed: 10,
		delaySpeed: 2000,
	});
	return (
		<div className="w-full lgl:w-1/2 flex flex-col gap-10">
			<div className="flex flex-col gap-5">
				<h4 className=" text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
				<h1 className="text-6xl font-bold text-white">
					Hi, I'm <span className="text-designColor capitalize">Chayan Roy</span>
				</h1>
				<h2 className="text-4xl font-bold text-white">
					a <span>{text}</span>
					<Cursor
						cursorBlinking="false"
						cursorStyle="|"
						cursorColor="#ff014f"
					/>
				</h2>
				<p className="text-base font-bodyFont leading-6 tracking-wide">
					Hii, I am a MERN Stack Web Development enthusiast. My objective is to become an experienced MERN Stack Web developer and I want to work in challenging positions in the IT industry to expand my knowledge and skills.
				</p>
			</div>
			<div className="flex xl:flex-row items-center">
				<a href={CV} download className='flex items-center text-center text-xl rounded-lg px-6 py-4 bg-lime-700 font-bold text-white'>Download CV</a>
			</div>
		</div>
	);
}

export default LeftBanner
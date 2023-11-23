import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, } from "react-icons/fa";
import contactImg from "../../assets/images/contactImg.png";

const ContactLeft = () => {
	return (
		<div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
			<img
				className="w-full h-64 object-cover rounded-lg mb-2"
				src={contactImg}
				alt="contactImg"
			/>
			<div className="flex flex-col gap-4">
				<h3 className="text-3xl font-bold text-white">Chayan Roy</h3>
				<p className="text-lg font-normal text-gray-400">
					MERN Stack Developer
				</p>
				<p className="text-base text-gray-400 tracking-wide">
					I am a MERN Stack Web Development enthusiast. My objective is to become an experienced MERN Stack Web developer and I want to work in challenging positions in the IT industry to expand my knowledge and skills.
				</p>
				<p className="text-base text-gray-400 flex items-center gap-2">
					Phone: <span className="text-lightText">+91 7003103509</span>
				</p>
				<p className="text-base text-gray-400 flex items-center gap-2">
					Email: <a href="mailto: chayanroymail01@gmail.com" target="_blank" className="text-lightText">chayanthe01guy@gmail.com</a>
				</p>
			</div>
			<div className="flex flex-col gap-4">
				<h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
				<div className="flex gap-4">
					<a href='https://www.facebook.com/chayan0roy/' className="bannerIcon">
						<FaFacebookF />
					</a>
					<a href='https://www.instagram.com/chayan0roy/' className="bannerIcon">
						<FaInstagram />
					</a>
					<a href='https://www.linkedin.com/in/chayan0roy/' className="bannerIcon">
						<FaLinkedinIn />
					</a>
					<a href='https://twitter.com/chayan0roy' className="bannerIcon">
						<FaTwitter />
					</a>
				</div>
			</div>
		</div>
	);
}

export default ContactLeft
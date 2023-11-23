import React from 'react'
import { motion } from 'framer-motion';
import expressLogo from '../../assets/images/express.png'

const Backend_Skills = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.5 } }}
			className="w-full flex items-center">
			<div className="w-full">
				<div className="py-12 font-titleFont text-center">
					<h2 className="text-3xl md:text-4xl font-bold">Backend Skills</h2>
				</div>
				<div className='mt-1 w-full flex flex-col items-center gap-6'>
					<div className="overflow-x-hidden w-3/5">
						<img className='max-h-10 max-w-10' src="https://nodejs.org/static/images/logo.svg" />
						<span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
							<motion.span
								initial={{ x: "-100%", opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.5 }}
								className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
							>
								<span className="absolute -top-7 right-0">70%</span>
							</motion.span>
						</span>
					</div>
					<div className="overflow-x-hidden w-3/5">
						<img className='max-h-10 max-w-10' src={expressLogo} />
						<span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
							<motion.span
								initial={{ x: "-100%", opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.5 }}
								className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
							>
								<span className="absolute -top-7 right-0">60%</span>
							</motion.span>
						</span>
					</div>
					<div className="overflow-x-hidden w-3/5">
						<img className='max-h-10 max-w-10' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" />
						<span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
							<motion.span
								initial={{ x: "-100%", opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.5 }}
								className="w-[55%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
							>
								<span className="absolute -top-7 right-0">55%</span>
							</motion.span>
						</span>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default Backend_Skills
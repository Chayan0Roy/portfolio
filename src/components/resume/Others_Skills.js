import React from "react";
import { motion } from "framer-motion"

const Others_Skills = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.5 } }}
			className="w-full flex items-center">
			<div className="w-full">
				<div className="py-12 font-titleFont text-center">
					<h2 className="text-3xl md:text-4xl font-bold">Others Skills</h2>
				</div>
				<div className='mt-1 w-full flex flex-col items-center gap-6'>
					<div className="overflow-x-hidden w-3/5">
						<img className='max-h-10 max-w-10' src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667" />
						<span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
							<motion.span
								initial={{ x: "-100%", opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.5 }}
								className="w-[50%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
							>
								<span className="absolute -top-7 right-0">50%</span>
							</motion.span>
						</span>
					</div>
					<div className="overflow-x-hidden w-3/5">
						<img className='max-h-10 max-w-10' src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
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
						<img className='max-h-10 max-w-10' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" />
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
						<img className='max-h-10 max-w-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519" />
						<span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
							<motion.span
								initial={{ x: "-100%", opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.5 }}
								className="w-[65%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
							>
								<span className="absolute -top-7 right-0">65%</span>
							</motion.span>
						</span>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Others_Skills;

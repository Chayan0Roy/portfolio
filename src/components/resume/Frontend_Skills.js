import React from 'react'
import { motion } from 'framer-motion';

const Frontend_Skills = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.5 } }}
			className="w-full flex items-center">
			<div className="w-full">
				<div className="py-12 font-titleFont text-center">
					<h2 className="text-3xl md:text-4xl font-bold">Frontend Skills</h2>
				</div>
				<div className='mt-1 w-full flex flex-col items-center gap-6'>
					<div className="overflow-x-hidden w-3/5">
						<img className='max-h-10 max-w-10' src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" />
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
						<img className='max-h-10 max-w-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" />
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
						<img className='max-h-10 max-w-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" />
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
						<img className='max-h-10 max-w-10' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" />
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
					<div className="overflow-x-hidden w-3/5">
						<img className='max-h-10 max-w-10' src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" />
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

export default Frontend_Skills
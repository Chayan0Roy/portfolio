import React from 'react'
import Title from '../layouts/Title'
import ProjectsData from './ProjectsData';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const Projects = () => {
	return (
		<section
			id="projects"
			className="w-full py-16 border-b-[1px] border-b-black">
			<div className="flex justify-center items-center text-center">
				<Title des="My Projects" />
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
				{
					ProjectsData.map((p) => {
						return (
							<div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
								<div className="w-full h-[80%] overflow-hidden rounded-lg">
									<img
										className="w-[100%]  object-cover group-hover:scale-110 duration-300 cursor-pointer"
										src={p.img}
										alt="src"
									/>
								</div>
								<div className="w-full mt-5 flex flex-col  gap-6">
									<div>
										<div className='w-full flex gap-x-2 items-center flex-wrap'>
											{
												p.tags.map((t) => {
													return (
														<h4 className='text-sm text-blue-600/100 px-2 py-1 my-0.5 bg-zinc-900 rounded-full ..."'>{t}</h4>
													);
												})
											}
										</div>
										<div className="flex items-center justify-between">
											<h3 className="uppercase text-white text-lg font-bold">{p.title}</h3>
											<div className="flex gap-2">
												<span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
													<a href={p.github}><BsGithub /></a>
												</span>
												<span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
													<a href={p.hosting}><FaGlobe /></a>
												</span>
											</div>
										</div>
										<p className='text-sm'>{p.date}</p>
										<p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">{p.des}</p>
									</div>
								</div>
							</div>
						)
					})
				}
			</div>
		</section>
	);
}

export default Projects
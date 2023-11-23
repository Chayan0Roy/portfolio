import React, { useState } from 'react'
import Title from '../layouts/Title';
import Frontend_Skills from './Frontend_Skills';
import Backend_Skills from './Backend_Skills';
import Others_Skills from './Others_Skills';

const Resume = () => {
	const [frontendSkillsData, setFrontendSkillsData] = useState(true);
	const [backendSkillsData, setBackendSkillsData] = useState(false);
	const [othersSkillsData, setOthersSkillsData] = useState(false);
	return (
		<section id="resume" className="w-full py-16 border-b-[1px] border-b-black">
			<div className="flex justify-center items-center text-center">
				<Title des="My Skills" />
			</div>
			<div>
				<ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
					<li
						onClick={() =>
							setFrontendSkillsData(true) &
							setBackendSkillsData(false) &
							setOthersSkillsData(false)
						}
						className={`${frontendSkillsData
								? "border-designColor rounded-lg"
								: "border-transparent"
							} resumeLi`}
					>
						Frontend Skills
					</li>
					<li
						onClick={() =>
							setFrontendSkillsData(false) &
							setBackendSkillsData(true) &
							setOthersSkillsData(false)
						}
						className={`${backendSkillsData ? "border-designColor rounded-lg" : "border-transparent"
							} resumeLi`}
					>
						Backend Skills
					</li>
					<li
						onClick={() =>
							setFrontendSkillsData(false) &
							setBackendSkillsData(false) &
							setOthersSkillsData(true)
						}
						className={`${othersSkillsData
								? "border-designColor rounded-lg"
								: "border-transparent"
							} resumeLi`}
					>
						Others Skills
					</li>
				</ul>
			</div>
			{frontendSkillsData && <Frontend_Skills />}
			{backendSkillsData && <Backend_Skills />}
			{othersSkillsData && <Others_Skills />}

		</section>
	);
}

export default Resume
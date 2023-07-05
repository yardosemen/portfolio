import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
	return (
		<div name="home" className="w-full h-screen bg-[#0a192f]">
			{/*Container*/}
			<div className="max-w-[1080px] mx-auto px-8 flex flex-col justify-center h-full">
				<p className="text-gray-400">Hi, my name is</p>
				<h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] ">
					Yaroslav Semianchuk
				</h1>
				<h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] ">
					I’m a Front-End Developer
				</h2>
				<p className="text-[#8892b0] py-4 max-w-[700px]">
					I’m a Front-End developer specializing in building exceptional digital
					experiences. Currently, I’m focused on building responsive full-stack
					web applications.
				</p>
				<div>
					<button className="text-white group border-2 rounded-lg  px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
						View Work
						<span className="group-hover:rotate-90 duration-200">
							<HiArrowNarrowRight className="ml-3" />
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;

import * as aboutStyle from "./About.module.css";

export default function About() {
	let placeholder =
		"https://i.pinimg.com/originals/01/82/c2/0182c29f40e25a65808850494b57ba45.jpg";

	return (
		<div className={aboutStyle.aboutContainer}>
			<h2 className={aboutStyle.name}>Shamseen</h2>
			<div className={aboutStyle.profileContainer}>
				<div className={aboutStyle.imgAndDesContainer}>
					<img
						src={placeholder}
						alt="shamseen"
						className={aboutStyle.headShot}
						width="200"
					/>
					<p className={aboutStyle.p}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
				<ul className={aboutStyle.ul}>
					Contact:
					<li>GitHub</li>
					<li>LinkedIn</li>
					<li>Twitter</li>
				</ul>
			</div>
			<h2 className={aboutStyle.name}>Hengyu</h2>
			<div className={aboutStyle.profileContainer}>
				<div className={aboutStyle.imgAndDesContainer}>
					<img
						src={placeholder}
						alt="hengyu"
						className={aboutStyle.headShot}
						width="200"
					/>
					<p className={aboutStyle.p}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer
						quis auctor elit sed vulputate mi. Nunc faucibus a pellentesque sit
						amet porttitor. Metus vulputate eu scelerisque felis imperdiet.
						Iaculis at erat pellentesque adipiscing commodo elit. Et pharetra
						pharetra massa massa. Eu lobortis elementum nibh tellus molestie
						nunc non blandit.
					</p>
				</div>
				<ul className={aboutStyle.ul}>
					Contact:
					<li>GitHub</li>
					<li>LinkedIn</li>
					<li>Twitter</li>
				</ul>
			</div>
		</div>
	);
}

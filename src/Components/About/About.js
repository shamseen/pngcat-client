import * as aboutStyle from "./About.module.css";

export default function About() {
	let shamseen =
		"https://scontent-bos3-1.xx.fbcdn.net/v/t1.18169-9/269353_4191479743508_760148023_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=de6eea&_nc_ohc=bfxFflmpDPwAX_i_NDg&_nc_ht=scontent-bos3-1.xx&oh=e96c990fa4504d3b7c5eb35f0d23b08e&oe=60CC28D1";

	let hengyu = "https://i.imgur.com/T4kI92O.jpg";
	return (
		<div className={aboutStyle.aboutContainer}>
			<div className={aboutStyle.profileContainer}>
				<h2 className={aboutStyle.name}>Shamseen</h2>
				<img
					src={shamseen}
					alt="shamseen"
					className={aboutStyle.headShot}
					width="270"
				/>
				<p className={aboutStyle.p}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<ul className={aboutStyle.ul}>
					<h3 className={aboutStyle.h3}>Contact:</h3>
					<li>
						<a className={aboutStyle.a} href="https://www.github.com/shamseen">
							GitHub
						</a>
					</li>
					<li>
						<a
							className={aboutStyle.a}
							href="https://www.linkedin.com/shamseenr"
						>
							LinkedIn
						</a>
					</li>
				</ul>
			</div>
			{/* <hr className={aboutStyle.line} /> */}
			<div className={aboutStyle.profileContainer}>
				<h2 className={aboutStyle.name}>Hengyu</h2>
				<img
					src={hengyu}
					alt="hengyu"
					className={aboutStyle.headShot}
					width="270"
				/>
				<p className={aboutStyle.p}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer
					quis auctor elit sed vulputate mi. Nunc faucibus a pellentesque sit
					amet porttitor. Metus vulputate eu scelerisque felis imperdiet.
					Iaculis at erat pellentesque adipiscing commodo elit. Et pharetra
					pharetra massa massa. Eu lobortis elementum nibh tellus molestie nunc
					non blandit.
				</p>
				<ul className={aboutStyle.ul}>
					<h3 className={aboutStyle.h3}>Contact:</h3>
					<li>
						<a className={aboutStyle.a} href="https://www.github.com/hengyuni">
							GitHub
						</a>
					</li>
					<li>
						<a
							className={aboutStyle.a}
							href="https://www.linkedin.com/hengyuni"
						>
							LinkedIn
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

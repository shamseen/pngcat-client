import * as aboutStyle from './About.module.css';

export default function About() {
	return (
		<div>
			<div className={aboutStyle.shamContainer}>
				<h2>Shamseen</h2>
				<ul>
					<li>ipsem</li>
					<li>lorum</li>
					<li>yada</li>
				</ul>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
			<div className={aboutStyle.henContainer}>
				<h2>Hengyu</h2>
				<ul>
					<li>yada</li>
					<li>yada</li>
					<li>yada</li>
				</ul>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer
					quis auctor elit sed vulputate mi. Nunc faucibus a pellentesque sit
					amet porttitor. Metus vulputate eu scelerisque felis imperdiet.
					Iaculis at erat pellentesque adipiscing commodo elit. Et pharetra
					pharetra massa massa. Eu lobortis elementum nibh tellus molestie nunc
					non blandit.
				</p>
			</div>
		</div>
	);
}

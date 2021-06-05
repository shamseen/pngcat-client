import "../Styles/aboutPage.scss";

export default function AboutPage() {

	// temp descriptions
	const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
	eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut
	aliquip ex ea commodo consequat. Duis aute irure dolor in
	reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
	pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
	culpa qui officia deserunt mollit anim id est laborum.`

	const hengyu = {
		desc: lorem,
		github: "https://www.github.com/hengyuni",
		headshot: "https://i.imgur.com/T4kI92O.jpg",
		linkedin: "https://www.linkedin.com/hengyuni",
		name: 'hengyu'
	}

	const shamseen = {
		desc: lorem,
		github: "https://www.github.com/shamseen",
		headshot: "https://scontent-bos3-1.xx.fbcdn.net/v/t1.18169-9/269353_4191479743508_760148023_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=de6eea&_nc_ohc=bfxFflmpDPwAX_i_NDg&_nc_ht=scontent-bos3-1.xx&oh=e96c990fa4504d3b7c5eb35f0d23b08e&oe=60CC28D1",
		linkedin: "https://www.linkedin.com/shamseenr",
		name: 'shamseen'
	}

	const profiles = [shamseen, hengyu];

	return (
		<div id='about-container'>
			{profiles.map(p => {
				return (<div key={p.name} className='card profile-container'>

					<h2 className='name'>{p.name}</h2>

					<img
						src={p.headshot}
						alt={p.name}
						className='headshot'
						width="270" />

					<p>{p.desc}</p>

					{/* Contact info */}
					<ul>
						<h3>Contact:</h3>
						<li>
							<a href={p.github}>GitHub</a>
						</li>
						<li>
							<a href={p.linkedin}>LinkedIn</a>
						</li>
					</ul>

				</div>);
			})}
		</div>
	);
}

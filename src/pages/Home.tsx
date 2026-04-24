import profile from "../../profile.json";
import Body from "../components/Body";
import * as h from "../components/pages/Home";
import Layout from "../layouts/Layout";
import "./Home.css";

export default function HomePage() {
	return (
		<Layout>
			<div>
				<Body>
					<div className="profile">
						<h.Avatar profile={profile} />
						<div className="info">
							<h.Name profile={profile} />
							<h.Identity pronouns="it/its">
								<h.Flags one="Transfeminine" two="Lesbian" />
							</h.Identity>
						</div>
					</div>
				</Body>
				<Body>
					<div className="bio">
						<h3>About Me</h3>
						<h4 className="bio-text">
							Hi there! My name is Sophia, call me Sophie if you'd like.
							<br />
							<br />
							I'm a programmer, and do backend/frontend development. I mainly
							work in TypeScript and Go, however I also occasionally code in
							Python, Rust, Shell, and Java if needed.
							<br />
							<br />
							Most of my current projects are networking/proxy tech, however I
							plan on eventually creating more development-focused tools. I also
							have worked on several Discord bots for various servers.
							<br />
							<br />
							Some other interests of mine are ice skating, art, and interior
							design, however I'm not remotely good enough at art to pursue it
							much.
						</h4>
					</div>
				</Body>
				<Body>
					<div style={{ flexDirection: "row" }}>
						<div className="bio">
							<h3>Where I Am</h3>
							<h4 className="bio-text">
								I'm in various communities, but you're able to find me primarily
								in{" "}
								<a
									target="_blank"
									href="https://titaniumnetwork.org/"
									rel="noopener"
								>
									Titanium Network
								</a>{" "}
								and{" "}
								<a target="_blank" href="https://night-x.com/" rel="noopener">
									Night Network
								</a>
								.
							</h4>
						</div>
						<div className="external">
							<h.Social
								name="TitaniumNetwork"
								logo="https://github.com/titaniumnetwork-dev.png"
								elId="social-titaniumnetwork"
							/>
							<h.SocialModal
								elId="titaniumnetwork"
								name="TitaniumNetwork"
								logo="https://github.com/titaniumnetwork-dev.png"
								site="https://titaniumnetwork.org/"
								discord="unblock"
							/>
							<h.Social
								name="Night Network"
								logo="https://github.com/Night-N3twork.png"
								elId="social-nightnetwork"
							/>
							<h.SocialModal
								elId="nightnetwork"
								name="Night Network"
								logo="https://github.com/Night-N3twork.png"
								site="https://night-x.com"
								discord="algebra"
							/>
						</div>
					</div>
				</Body>
				<Body>
					<div className="bio" style={{ paddingBlock: "16px" }}>
						<div className="connections">
							{profile.connections.map((data) => (
								<h.Connection key={data.name} img={data.img} link={data.link} />
							))}
						</div>
					</div>
				</Body>
			</div>
		</Layout>
	);
}

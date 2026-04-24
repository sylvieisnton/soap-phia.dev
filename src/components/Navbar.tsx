import type { JSX } from "react";
import { Code, GitHub, Home, MessageSquare } from "react-feather";
import "./Navbar.css";
import { Discord, Steam } from "./Svg";

function NavBtn({ children, path }: { children: JSX.Element; path: string }) {
	return (
		<a className="nb-link" href={path}>
			{children}
		</a>
	);
}

export default function Navbar() {
	return (
		<div className="nb-c">
			<nav id="navbar" className="nb">
				<div className="nb-left nb-section">
					<NavBtn path="/">
						<Home className="nb-item" />
					</NavBtn>
					<NavBtn path="/projects">
						<Code className="nb-item" />
					</NavBtn>
					<NavBtn path="/blog">
						<MessageSquare className="nb-item" />
					</NavBtn>
				</div>
				<div className="nb-right nb-section">
					<NavBtn path="https://github.com/soap-phia/">
						<GitHub className="nb-item" />
					</NavBtn>
					<NavBtn path="https://discord.com/1012095822957133976/">
						<Discord className="nb-item" />
					</NavBtn>
					<NavBtn path="https://steamcommunity.com/id/soap_phia/">
						<Steam className="nb-item" />
					</NavBtn>
				</div>
			</nav>
		</div>
	);
}

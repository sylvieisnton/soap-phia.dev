import type { JSX } from "react";
import { Discord } from "../Svg";

export type Profile = {
	name: string;
	avatar: string;
};

export function Flags({ one, two }: { one: string; two: string }) {
	return (
		<div className="flags">
			<a href={`https://lgbtqia.wiki/wiki/${one}`}>
				<img
					style={{ clipPath: `polygon(0 0, 100% 0, 0% 100%)` }}
					className="flag"
					src={`https://en.pronouns.page/flags/${one}.png`}
					alt={one}
				></img>
			</a>
			<a href={`https://lgbtqia.wiki/wiki/${two}`}>
				<img
					style={{ clipPath: `polygon(100% 100%, 100% 0%, 0% 100%)` }}
					className="flag"
					src={`https://en.pronouns.page/flags/${two}.png`}
					alt={two}
				></img>
			</a>
		</div>
	);
}

export function Identity({
	children,
	pronouns,
}: {
	children: JSX.Element;
	pronouns: string;
}) {
	return (
		<div className="identity">
			<a
				target="_blank"
				rel="noopener"
				className="pronouns"
				href="https://en.pronouns.page/@soap_phia/"
			>
				<h5>{pronouns}</h5>
			</a>
			{children}
		</div>
	);
}

export function Avatar({ profile }: { profile: Profile }) {
	return <img className="pfp" src={profile.avatar} alt="avatar" />;
}

export function Name({ profile }: { profile: Profile }) {
	return <h1 className="name">{profile.name}</h1>;
}

export function Social({
	name,
	logo,
	elId,
}: {
	name: string;
	logo: string;
	elId: string;
}) {
	function modal() {
		const modal = document.getElementById(elId);
		if (modal) {
			modal.style.display = "flex";
			document.body.offsetHeight;
			modal.style.opacity = "1";
			document.addEventListener("keydown", handleKeyDown);
			document.addEventListener("mousedown", handleMouseDown);
		}
	}
	function closeModal() {
		const modal = document.getElementById(elId);
		if (modal) {
			modal.style.opacity = "0";
			setTimeout(() => {
				modal.style.display = "none";
			}, 250);
			document.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("mousedown", handleMouseDown);
		}
	}
	const handleKeyDown = (e: KeyboardEvent): void => {
		if (e.key === "Escape") {
			closeModal();
		}
	};
	const handleMouseDown = (e: MouseEvent): void => {
		const modal = document.getElementById(elId)?.querySelector(".modal");
		if (modal && !modal.contains(e.target as Node)) {
			closeModal();
		}
	};
	return (
		<button type="button" className="social" onClick={() => modal()}>
			<img className="social-img" src={logo} alt={name} />
			<h3>{name}</h3>
		</button>
	);
}

export function SocialModal({
	elId,
	name,
	logo,
	site,
	discord,
}: {
	elId: string;
	name: string;
	logo: string;
	site: string;
	discord: string;
}) {
	return (
		<div className="overlay" id={`social-${elId}`}>
			<div className="modal">
				<img className="modal-img" src={logo} alt={name} />
				<h3 style={{ margin: "0px" }}>{name}</h3>
				<div style={{ flexDirection: "row", gap: "8px" }}>
					<a target="_blank" href={site}>
						<img className="social-img" src={logo} alt={name} />
					</a>
					<a
						target="_blank"
						className="social-img"
						href={`https://discord.gg/${discord}`}
					>
						<Discord />
					</a>
				</div>
			</div>
		</div>
	);
}

export function Connection({ img, link }: { img: string; link: string }) {
	return (
		<a target="_blank" href={link} rel="noopener">
			<div className="connection">
				<img src={img} alt={link} />
			</div>
		</a>
	);
}

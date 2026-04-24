import type { JSX } from "react";
import { Helmet } from "react-helmet-async";
import profile from "../../profile.json";
import Navbar from "../components/Navbar";

export default function Layout({ children }: { children: JSX.Element }) {
	return (
		<>
			<Helmet>
				<title>{profile.name}</title>
				<link rel="icon" href={profile.avatar} />
				<meta content=":3" name="description" />
				<meta content={profile.name} property="og:title" />
				<meta content=":3" property="og:description" />
				<meta content={profile.avatar} property="og:image" />
				<meta content={profile.name} property="twitter:title" />
				<meta content=":3" property="twitter:description" />
				<meta content={profile.avatar} property="twitter:image" />
				<meta property="og:type" content="website" />
				<meta content="summary_large_image" name="twitter:card" />
				<meta content="width=device-width, initial-scale=1" name="viewport" />
			</Helmet>
			<Navbar />
			{children}
		</>
	);
}

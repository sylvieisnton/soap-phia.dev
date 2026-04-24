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
			</Helmet>
			<Navbar />
			{children}
		</>
	);
}

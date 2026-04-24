import type { JSX } from "react";
import "./Body.css";

export default function Body({
	children,
}: {
	children: JSX.Element;
}) {
	return (
		<div id="body" className="b">
			{children}
		</div>
	);
}
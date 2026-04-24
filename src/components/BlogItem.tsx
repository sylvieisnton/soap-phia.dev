import { ArrowLeft } from "react-feather";
import Layout from "../layouts/Layout";
import "./BlogItem.css";
import Body from "./Body";

export default function BlogItem({
	name,
	description,
	date,
	content,
}: {
	name: string;
	description: string;
	date: string;
	content: string;
}) {
	return (
		<Layout>
			<div>
				<Body>
					<div className="blogitem-main">
						<a className="blogitem-back" href="/blog">
							{" "}
							<ArrowLeft size={28} />
						</a>
						<div className="blogitem-top">
							<h1 className="blogitem-title">{name}</h1>
							<h5 className="blogitem-description">{description}</h5>
							<h5 className="blogitem-date">{date}</h5>
						</div>
						<h3 className="blogitem-content">{content}</h3>
					</div>
				</Body>
			</div>
		</Layout>
	);
}

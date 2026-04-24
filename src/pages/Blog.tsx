import { MessageSquare } from "react-feather";
import repos from "../../blog.json";
import Layout from "../layouts/Layout";
import "./Blog.css";

export default function Blog() {
	return (
		<Layout>
			<div>
				{repos.map((data) => (
					<a
						href={`/blog/${data.url}`}
						className="blog"
						key={data.name}
					>
						<div className="blog-top">
							<MessageSquare size={28} />
							<h3 className="blog-title">{data.name}</h3>
						</div>
						<div className="blog-bottom">
							<h5 className="blog-description">{data.description}</h5>
							<h5 className="blog-date">{data.date}</h5>
						</div>
					</a>
				))}
			</div>
		</Layout>
	);
}

import { GitHub } from "react-feather";
import repos from "../../repos.json";
import { GitFork } from "../components/Svg";
import Layout from "../layouts/Layout";
import "./Projects.css";

export default function Projects() {
	return (
		<Layout>
			<div>
				{repos.map((data) => (
					<a
						target="_blank"
						href={`https://github.com/${data.full_name}`}
						rel="noopener"
						className="project"
						key={data.full_name}
					>
						<div className="project-top">
							<div className="project-head">
								<GitHub size={28} />
								<h3 className="project-title">
									<span className="project-org">
										{data.full_name?.substring(
											0,
											data.full_name?.indexOf("/") + 1,
										)}
									</span>
									{data.full_name?.substring(data.full_name?.indexOf("/") + 1)}
								</h3>
							</div>
							<div className="project-fork">
								{data.fork ? <GitFork /> : undefined}
							</div>
						</div>
						<div className="project-bottom">
							<div className="project-info">
								<h5 className="project-description">{data.description}</h5>
								<h5 className="project-language">
									{data.language ? data.language : "Plaintext"}
								</h5>
							</div>
						</div>
					</a>
				))}
			</div>
		</Layout>
	);
}

import type { RouteObject } from "react-router-dom";
import blog from "../blog.json";
import BlogItem from "./components/BlogItem";
import Blog from "./pages/Blog";
import ErrorPage from "./pages/Error";
import Home from "./pages/Home";
import Project from "./pages/Projects";

const routes: RouteObject[] = [
	{
		path: "/",
		children: [
			{ index: true, element: <Home /> },
			{ path: "/projects", element: <Project /> },
			{ path: "/blog", element: <Blog /> },
			{ path: "*", element: <ErrorPage /> },
			...blog.map((data) => (
				{ path: `/blog/${data.url}`, element: <BlogItem name={data.name} description={data.description} content={data.content} /> }
			))
		],
	},
];

export default routes;

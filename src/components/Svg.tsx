import { forwardRef, type SVGProps } from "react";

interface SvgProps extends SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export const Discord = forwardRef<SVGSVGElement, SvgProps>(
	({ color = "currentColor", size = 24, ...rest }, ref) => {
		return (
			<svg
				ref={ref}
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				width={size}
				height={size}
				stroke={color}
				strokeWidth={2}
				{...rest}
			>
				<title>Discord</title>
				<path
					d="M18.8943,4.34399 C17.5183,3.71467 16.057,3.256 14.5317,3 14.3396,3.33067 14.1263,3.77866 13.977,4.13067 12.3546,3.89599 10.7439,3.89599 9.14391,4.13067 8.99457,3.77866 8.77056,3.33067 8.58922,3 7.05325,3.256 5.59191,3.71467 4.22552,4.34399 1.46286,8.41865 0.716188,12.3973 1.08952,16.3226 2.92418,17.6559 4.69486,18.4666 6.4346,19 c0.42666,-0.576 1.3470138,-2.446 1.3470138,-2.446 2.4336752,0.765088 4.9597612,0.729133 7.3782152,0 0,0 1.078471,1.870003 1.505171,2.446003 1.7386,-0.5334 3.52,-1.3441 5.345,-2.6774 0.4587,-4.5439 -0.7264,-8.49058 -3.1157,-11.97861Z"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

Discord.displayName = "Discord";

export const Steam = forwardRef<SVGSVGElement, SvgProps>(
	({ color = "currentColor", size = 24, ...rest }, ref) => {
		return (
			<svg
				ref={ref}
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				width={size}
				height={size}
				stroke={color}
				strokeWidth={2}
				strokeLinejoin="round"
				strokeLinecap="round"
				{...rest}
			>
				<title>Steam</title>
				<g transform="translate(1.2, 1.2) scale(0.9)">
					<path d="m 17.8125,0.9375 c 1.2656,0 3,0.7031 3.8203,1.5234 l 0.7031,0.7031 c 0.8672,0.9141 1.4062,2.4375 1.5,3.75 v 0.8672 c -0.1875,2.7188 -2.0859,4.7812 -4.2891,5.5312 -1.2656,0.4453 -1.6641,0.1875 -2.0391,0.4688 L 12.8203,17.2266 c -0.2109,0.1641 -0.2812,0.1875 -0.3984,0.2812 C 12.0938,20.1562 9.7734,21.6328 7.4766,21.6328 5.8125,21.6328 4.1953,20.8594 3.3281,19.1953 3.0234,18.6094 3,18.3984 2.8828,18.1172 L 0.5625,17.1797 C 0.375,17.1094 0.1406,16.9688 0.0938,16.6875 L 0.0469,16.4062 V 11.4141 c 0.0234,-0.4922 0.3047,-0.75 0.6797,-0.75 0.0938,0 0.1875,0.0234 0.3047,0.0469 1.4297,0.5859 2.8828,1.125 4.2891,1.7344 l 0.375,-0.1641 c 0.7734,-0.3281 1.2188,-0.375 2.0625,-0.375 0.1172,-0.1641 0.2812,-0.3984 0.375,-0.5391 l 2.0859,-2.9766 c 0.1641,-0.2109 0.7266,-1.0078 0.9141,-1.3359 0.1406,-2.0859 0.7969,-3.1641 2.0859,-4.4766 C 14.2266,1.6172 16.0078,0.9375 17.8125,0.9375 Z" />
					<circle cx={17.625} cy={7.1484} r={2.5} />
				</g>
			</svg>
		);
	},
);

Steam.displayName = "Steam";

export const GitFork = forwardRef<SVGSVGElement, SvgProps>(
	({ color = "currentColor", size = 24, ...rest }, ref) => {
		return (
			<svg
				ref={ref}
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				width={size}
				height={size}
				stroke={color}
				strokeWidth={2}
				strokeLinejoin="round"
				strokeLinecap="round"
				{...rest}
			>
				<title>GitFork</title>
				<circle cx="12" cy="18" r="3" />
				<circle cx="6" cy="6" r="3" />
				<circle cx="18" cy="6" r="3" />
				<path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" />
				<path d="M12 12v3" />
			</svg>
		);
	},
);

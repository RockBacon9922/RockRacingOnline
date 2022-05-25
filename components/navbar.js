import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";

const navbar = () => {
	const router = useRouter();
	const routeTo = router.push;
	useEffect(() => {
		router.prefetch("/");
	});

	return (
		<span>
			<navbar className="h-14 flex gap-7 shadow-md fixed w-full z-50 text-xl bg-white">
				<span className="object-contain w-14">
					<img
						quality={5}
						src="/Logo.ico"
						alt="RockRacing logo"
						className="hover:bg-gray-100"
						onClick={() => routeTo("/")}
						onKeyPress={() => routeTo("/")}
					/>
				</span>
				<ROCK txt="Garage" route="/Garage" />
				<ROCK txt="Leaderboards" route="/Leaderboards" />
			</navbar>
			<div className="h-14"></div>
		</span>
	);
};

const ROCK = (props) => {
	function routeTo() {
		router.push(props.route);
	}
	const router = useRouter();
	useEffect(() => {
		router.prefetch(props.route);
	});
	return (
		<div
			className="flex p-4 hover:bg-gray-100"
			onClick={routeTo}
			onKeyPress={routeTo}
		>
			<button className="text-center self-center navButton" alt={props.txt}>
				{props.txt}
			</button>
		</div>
	);
};

export default navbar;

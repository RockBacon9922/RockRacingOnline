import * as PIXI from "pixi.js";
import { useRef } from "react";
const Index = () => {
	const SSR = typeof window === "undefined";
	const gameDivRef = useRef(null);
	const gameDiv = gameDivRef.current;
	if (!SSR) {
		Game(gameDiv);
	}
	return <div id="game" ref={gameDiv}></div>;
};
export default Index;

const Game = (gameDiv) => {
	// Create the application helper and add its render target to the page
	let app = new PIXI.Application({ width: 640, height: 360 });
	document.getElementById("game").appendChild(app.view);

	// Create the sprite and add it to the stage
	let sprite = PIXI.Sprite.from("sample.png");
	app.stage.addChild(sprite);

	// Add a ticker callback to move the sprite back and forth
	let elapsed = 0.0;
	app.ticker.add((delta) => {
		elapsed += delta;
		sprite.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
	});
};

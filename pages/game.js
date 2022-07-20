import { Stage, Sprite } from '@inlet/react-pixi'
import { useRef } from "react";
const Index = () => {
	const SSR = typeof window === "undefined";
	const gameDivRef = useRef(null);
	const gameDiv = gameDivRef.current;
	if (!SSR) {
		Game(gameDiv);
	}
	return {!SSR ? <Game /> : null};
};
export default Index;

const Game = (gameDiv) => {
    return (
        <Stage width={640} height={360} options={{ antialias: true }}>
            <Sprite texture={PIXI.Texture.from("/Car3.png")} />
        </Stage>
    )
};

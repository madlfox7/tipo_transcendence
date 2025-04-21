// import AbstractView from "./AbstractView.js";
// import { PongGame, eventListeners }  from "../scripts/pong/pong.js";
// import { initCursorClickEffect } from "../visual/effects.js";

// export default class Pong extends AbstractView {
//     constructor() {
//         super();
//         this.setTitle("satori - pong");
// 		this.pongGame;
//     }

//     async getHtml() {
//         return (await fetch("/static/html/pong.html")).text();
//     }

// 	loadJS() {
// 		this.pongGame = new PongGame();
// 		initCursorClickEffect();
// 	}

// 	stopJS(){
// 		this.pongGame.stopGameLoop();
// 	}

// 	cleanUpEventListeners() {
// 		for (const [event, listener] of Object.entries(eventListeners)) {
// 			document.removeEventListener(event, listener);
// 		}
// 	}
// }

// @ts-ignore: AbstractView is a JS module
import AbstractView from "./AbstractView.js";

// @ts-ignore: PongGame and eventListeners are from a JS module
import { PongGame, eventListeners } from "../scripts/pong/pong.js";

// @ts-ignore: initCursorClickEffect is from a JS module
import { initCursorClickEffect } from "../visual/effects.js";

// Minimal typing for AbstractView (optional but safe)
type AbstractViewType = {
	setTitle(title: string): void;
	getHtml(): Promise<string>;
	loadJS?(): void;
	stopJS?(): void;
	cleanUpEventListeners?(): void;
};

// Define a rough structure for the JS PongGame instance (optional)
type PongGameInstance = {
	stopGameLoop(): void;
};

export default class PongView extends (AbstractView as { new (): AbstractViewType }) {
	private pongGame!: PongGameInstance;

	constructor() {
		super();
		this.setTitle("satori - pong");
	}

	getHtml(): Promise<string> {
		return fetch("/static/html/pong.html").then((res) => res.text());
	}

	loadJS(): void {
		// @ts-ignore: JS constructor
		this.pongGame = new PongGame();
		initCursorClickEffect();
	}

	stopJS(): void {
		this.pongGame.stopGameLoop();
	}

	cleanUpEventListeners(): void {
		// @ts-ignore: JS event map
		for (const [event, listener] of Object.entries(eventListeners as Record<string, EventListener>)) {
			document.removeEventListener(event, listener);
		}
	}
}

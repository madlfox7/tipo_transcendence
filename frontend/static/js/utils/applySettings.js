// import { setLanguage } from './languages.js';
// import { moveNoise } from '../visual/effects.js';
// import { ids, BIG_TEXT, DEFAULT_TEXT } from '../index.js';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// // Backgorund gradients
// const applyGraphics = () => {
// 	let graphicsSetting = localStorage.getItem('graphics');
// 	// If the graphics setting is not set, set it to "medium" by default
// 	if (!graphicsSetting) {
// 		localStorage.setItem('graphics', 'medium');
// 		graphicsSetting = 'medium';
// 	}
// 	const gradientsContainer = document.querySelector('.gradients-container');
// 	const videoBackground = document.querySelector('#video-background');
// 	if (graphicsSetting === 'ultra') {
// 		gradientsContainer.style.display = 'block';
// 		videoBackground.style.display = 'none';
// 	} else if (graphicsSetting === 'medium') {
// 		gradientsContainer.style.display = 'none';
// 		videoBackground.style.display = 'block';
// 	} else if (graphicsSetting === 'none') {
// 		gradientsContainer.style.display = 'none';
// 		videoBackground.style.display = 'none';
// 	}
// }
// // Background noise
// const applyNoise = (interval) => {
// 	let noiseSetting = localStorage.getItem('noise');
// 	// If the noise setting is not set, set it to "on" by default
// 	if (!noiseSetting) {
// 		localStorage.setItem('noise', 'on');
// 		noiseSetting = 'on';
// 	}
// 	const noiseElement = document.querySelector('.background-noise');
// 	if (noiseSetting === 'on') {
// 		noiseElement.style.display = 'block';
// 		ids.moveNoiseInterval = setInterval(moveNoise, interval);
// 	} else  if (noiseSetting === 'off') {
// 		noiseElement.style.display = 'none';
// 	}
// }
// // Set text size
// const applyTextSize = () => {
// 	if (localStorage.getItem('bigText') === 'on') {
// 		document.documentElement.style.fontSize = BIG_TEXT;
// 	} else {
// 		document.documentElement.style.fontSize = DEFAULT_TEXT;
// 	}
// }
// // Apply the settings from the local storage
// export const applySettings = async () => {
// 	applyGraphics();
// 	applyNoise(100);
// 	applyTextSize();
// 	await setLanguage(localStorage.getItem('language') ? localStorage.getItem('language') : 'en');
// }
// @ts-ignore
import { setLanguage } from './languages.js';
// @ts-ignore
import { moveNoise } from '../visual/effects.js';
// @ts-ignore
import { ids, BIG_TEXT, DEFAULT_TEXT } from '../index.js';
// Background gradients
const applyGraphics = () => {
    let graphicsSetting = localStorage.getItem('graphics');
    if (!graphicsSetting) {
        localStorage.setItem('graphics', 'medium');
        graphicsSetting = 'medium';
    }
    const gradientsContainer = document.querySelector('.gradients-container');
    const videoBackground = document.querySelector('#video-background');
    if (graphicsSetting === 'ultra') {
        if (gradientsContainer)
            gradientsContainer.style.display = 'block';
        if (videoBackground)
            videoBackground.style.display = 'none';
    }
    else if (graphicsSetting === 'medium') {
        if (gradientsContainer)
            gradientsContainer.style.display = 'none';
        if (videoBackground)
            videoBackground.style.display = 'block';
    }
    else if (graphicsSetting === 'none') {
        if (gradientsContainer)
            gradientsContainer.style.display = 'none';
        if (videoBackground)
            videoBackground.style.display = 'none';
    }
};
// Background noise
const applyNoise = (interval) => {
    let noiseSetting = localStorage.getItem('noise');
    if (!noiseSetting) {
        localStorage.setItem('noise', 'on');
        noiseSetting = 'on';
    }
    const noiseElement = document.querySelector('.background-noise');
    if (noiseSetting === 'on') {
        if (noiseElement)
            noiseElement.style.display = 'block';
        ids.moveNoiseInterval = setInterval(moveNoise, interval);
    }
    else if (noiseSetting === 'off') {
        if (noiseElement)
            noiseElement.style.display = 'none';
    }
};
// Set text size
const applyTextSize = () => {
    if (localStorage.getItem('bigText') === 'on') {
        document.documentElement.style.fontSize = BIG_TEXT;
    }
    else {
        document.documentElement.style.fontSize = DEFAULT_TEXT;
    }
};
// Apply the settings from the local storage
export const applySettings = () => __awaiter(void 0, void 0, void 0, function* () {
    applyGraphics();
    applyNoise(100);
    applyTextSize();
    const lang = localStorage.getItem('language') || 'en';
    yield setLanguage(lang);
});

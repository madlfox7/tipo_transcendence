// import { BASE_URL, navigateTo } from '../index.js';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// export const isUserConnected = async () => {
// 	const response = await fetch(`${BASE_URL}/api/profile`);
// 	if (response.status === 401 || response.status === 400) {
// 		return (false);
// 	}
// 	return (true);
// }
// // Function to attach event listeners to the links
// // Overwrite the default behavior of the links (<a> tags)
// // When a link is clicked, the navigateTo function is called
// // The navigateTo function changes the URL and calls the router function 
// // to load the new view without reloading the page.
// export const attachEventListenersToLinks = () => {
// 	// Select all links with the attribute data-link
// 	const links = document.querySelectorAll('[data-link]');
// 	// Attach event listener to each link
// 	links.forEach(link => {
// 		link.addEventListener("click", e => {
// 			e.preventDefault();
// 			navigateTo(link.href);
// 		});
// 	});
// }
// @ts-ignore
import { BASE_URL, navigateTo } from '../index.js';
export const isUserConnected = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${BASE_URL}/api/profile`);
    if (response.status === 401 || response.status === 400) {
        return false;
    }
    return true;
});
// Function to attach event listeners to the links
// Overwrite the default behavior of the links (<a> tags)
// When a link is clicked, the navigateTo function is called
// The navigateTo function changes the URL and calls the router function 
// to load the new view without reloading the page.
export const attachEventListenersToLinks = () => {
    // Select all links with the attribute data-link
    const links = document.querySelectorAll('[data-link]');
    // Attach event listener to each link
    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            navigateTo(link.href);
        });
    });
};

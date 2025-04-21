// import AbstractView from "./AbstractView.js";
// import { editProfile } from "../scripts/editProfile.js";
// // import { eventListeners } from "../scripts/editProfile.js";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// export default class extends AbstractView {
//     constructor() {
//         super();
//         this.setTitle("satori - edit profile");
//     }
//     async getHtml() {
//         return (await fetch("static/html/editProfile.html")).text();
//     }
//     loadJS() {
//         editProfile();
//     }
//     stopJS(){
// 		// No loop in this view
// 	}
//     // cleanUpEventListeners() {
//     //  for (const [event, listener] of Object.entries(eventListeners)) {
//     //      document.removeEventListener(event, listener);
//     //  }
//     // }
// }
// @ts-ignore
import AbstractView from "./AbstractView.js";
// @ts-ignore
import { editProfile } from "../scripts/editProfile.js";
// import { eventListeners } from "../scripts/editProfile.js";
export default class EditProfileView extends AbstractView {
    constructor() {
        super();
        this.setTitle("satori - edit profile");
    }
    getHtml() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield fetch("static/html/editProfile.html")).text();
        });
    }
    loadJS() {
        editProfile();
    }
    stopJS() {
        // No loop in this view
    }
}
///???????????????????????

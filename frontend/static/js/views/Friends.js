// import AbstractView from "./AbstractView.js";
// import { friends } from "../scripts/friends.js";
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
//         this.setTitle("satori - friends");
//     }
//     async getHtml() {
//         return (await fetch("static/html/friends.html")).text();
//     }
//     loadJS() {
//         friends();
//     }
// }
// @ts-ignore
import AbstractView from "./AbstractView.js";
// @ts-ignore
import { friends } from "../scripts/friends.js";
export default class FriendsView extends AbstractView {
    constructor() {
        super();
        this.setTitle("satori - friends");
    }
    getHtml() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield fetch("static/html/friends.html")).text();
        });
    }
    loadJS() {
        friends();
    }
}

// import AbstractView from "./AbstractView.js";
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
//         this.setTitle("satori - games");
//     }
//     async getHtml() {
// 		return (await fetch("static/html/games.html")).text();
//     }
// }
// @ts-ignore
import AbstractView from "./AbstractView.js";
export default class GamesView extends AbstractView {
    constructor() {
        super();
        this.setTitle("satori - games");
    }
    getHtml() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield fetch("static/html/games.html")).text();
        });
    } //old but gold
}

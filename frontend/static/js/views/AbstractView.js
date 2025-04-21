// // This is the abstract class for all the views
// export default class {
//     constructor() {}
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 	// Sets the title of the page
//     setTitle(title) {
//         document.title = title;
//     }
// 	// The following methods will be overridden by the child classes
// 	// Returns the HTML content of the view
// 	// This method is asynchronous because it may need to fetch data from an API
//     async getHtml() {
//         return "";
//     }
// 	// Calls a function that contains the JavaScript code for the view
// 	loadJS() {}
// 	// Stops the JavaScript code of the view (used for views with loops like in the games)
// 	stopJS() {}
// 	// Removes all the event listeners attached to the document that were added by the view 
// 	cleanUpEventListeners() {}
// }
export default class AbstractView {
    constructor() { }
    setTitle(title) {
        document.title = title;
    }
    getHtml() {
        return __awaiter(this, void 0, void 0, function* () {
            return "";
        });
    }
    loadJS() { }
    stopJS() { }
    cleanUpEventListeners() { }
}

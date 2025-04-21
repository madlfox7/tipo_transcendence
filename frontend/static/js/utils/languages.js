// // Switch language setting
// let translations = {};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// async function loadTranslations(language) {
// 	const response = await fetch(`static/languages/${language}.json`);
// 	const translations = await response.json();
// 	return translations;
// }
// export async function setLanguage(language) {
// 	translations = await loadTranslations(language);
// 	updateTexts();
// }
// export function updateTexts() {
// 	document.querySelectorAll('[data-translate]').forEach(element => {
// 		const key = element.getAttribute('data-translate');
// 		if (element.getAttribute('placeholder')) {
// 			element.setAttribute('placeholder', translations[key]);
// 			return;
// 		} else {
// 			element.textContent = translations[key];
// 		}
// 	});
// }
// export function updateTextForElem(elem, key) {
// 	elem.textContent = translations[key];
// }
// export function getText(key) {
// 	return translations[key];
// }
// Switch language setting
let translations = {};
// Загрузка переводов из JSON-файла
function loadTranslations(language) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`static/languages/${language}.json`);
        const translations = yield response.json();
        return translations;
    });
}
// Установить язык и обновить текст на странице
export function setLanguage(language) {
    return __awaiter(this, void 0, void 0, function* () {
        translations = yield loadTranslations(language);
        updateTexts();
    });
}
// Обновить все элементы с data-translate
export function updateTexts() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (!key || !(key in translations))
            return;
        if (element.hasAttribute('placeholder')) {
            element.setAttribute('placeholder', translations[key]);
        }
        else {
            element.textContent = translations[key];
        }
    });
}
// Обновить текст для одного элемента
export function updateTextForElem(elem, key) {
    if (key in translations) {
        elem.textContent = translations[key];
    }
}
// Получить текст по ключу
export function getText(key) {
    return translations[key];
}

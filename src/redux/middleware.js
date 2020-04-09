import {CREATE_POSTS} from "./types";
import {showAlert} from "./actions";

const spam = ['php', 'fuck', 'posts']

export function spamWordsMiddleware({dispatch}) {
    return function (next) {
        return function (action) {
            if (action.type === CREATE_POSTS) {
                const found = spam.filter(w => action.payload.title.includes(w))
                if (found.length){
                    return dispatch(showAlert('Есть спам слова'))
                }
            }
            return next(action)
        }
    }
}
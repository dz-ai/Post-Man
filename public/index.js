import {onBodyLoaded, onSubmitClicked} from "./DOM.js";
import {REQUESTS} from "./serverRequestes.js";

window.onBodyLoad = () => {
    onBodyLoaded()
}

window.onSubmit = () => {
    onSubmitClicked(REQUESTS)
}
let textSample = "Hello World!";

function getTextLength(textSample){
    return textSample.getTextLength();
}

export default function escapeCharacters(){
    return "Escape characters \"Example\" sample";
} //default - import must be done with 'import escapeCharacters from "./String.js";'

export function toLowerCase(textSample){
    return textSample.toLowerCase();
} //named export - import must be done with 'import { toLowerCase } from "./String.js";'


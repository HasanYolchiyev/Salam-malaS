let text = prompt("Sozu daxil edin:");

if (text.length > 1) {
    text = text[text.length - 1] + text.substring(1, text.length - 1) + text[0];
}

console.log(text);
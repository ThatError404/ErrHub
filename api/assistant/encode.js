function encode(text) {
    // Encode the text using base 2
    var encoded = "";
    for (var i = 0; i < text.length; i++) {
        var charCode = text.charCodeAt(i);
        var binary = charCode.toString(2);
        encoded += binary;
        console.log(text);
    }
    return encoded;
}

function decode(text) {
    // Decode the text using base 2
    var decoded = "";
    for (var i = 0; i < text.length; i += 8) {
        var binary = text.substr(i, 8);
        var charCode = parseInt(binary, 2);
        var char = String.fromCharCode(charCode);
        decoded += char;
    }
    return decoded;
}

console.log(encode("Hello World"));
console.log(decode(encode("Hello World")));
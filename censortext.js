const censoredWords = ["sad", "bad", "mad"];
const customCensoredWords = [];

function censor(inStr) {
    for (let idx in censoredWords) {
        inStr = inStr.replace(censoredWords[idx], "****");
    }
    for (let idx in customCensoredWords) {
        inStr = inStr.replace(customCensoredWords[idx], "****");

    }
    return inStr;
}

function addCensoredWord(word) {
    customCensoredWords.push(word);
}

function getCensoredWords() {
    return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;

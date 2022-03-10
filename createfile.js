const fs = require('fs');
const linesCount = 1000;
const lineLength = 5;
const letters = ['к', 'о'];

let text = '';

for (let i = 0; i < linesCount; i++){
	text += generateLine() + '\n';
}

function generateLine() {
	let line = '';

	for (let i = 0; i < lineLength; i++) {

		let letter = letters[Math.floor((Math.random() * 10) % letters.length)];

		line += letter;
	}

	return line;
}

fs.writeFile('file1', text, function() {});

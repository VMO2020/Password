export const generatePassword = (setting) => {
	const characteres = {
		numbers: '0 1 2 3 4 5 6 7 8 9',
		symbols: '! @ # $ % ^ & * ( ) _ - + = { [ } ] ; : < , > . ? /',
		uppercase: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
		lowercase: 'a b c d e f g h i j k l m n o p q r s t u v w x y z',
	};

	let characteresReady = '';
	let password = '';

	// Add characteres.prop === true to variable, prop= numbers, symbols, etc.
	for (let prop in setting) {
		if (setting[prop] === true) {
			characteresReady += characteres[prop] + ' ';
		}
	}

	// Add letters as default
	characteresReady += characteres.lowercase;
	// console.log(characteresReady);
	characteresReady = characteresReady.trim();
	characteresReady = characteresReady.split(' ');
	// console.log(characteresReady);

	// Loop for numberCharacters:
	for (let i = 0; i < setting.numberCharacters; i++) {
		password +=
			characteresReady[Math.floor(Math.random() * characteresReady.length)];
	}

	return password;
};

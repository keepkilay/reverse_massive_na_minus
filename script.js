const reverseAndNegate = (arr) => {
	return arr.reverse().map(value => -value);
}

alert( reverseAndNegate([1, -2, 5, 4]) )
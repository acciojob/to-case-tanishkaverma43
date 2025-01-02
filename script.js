function toCase(text) {
  // write your code here
	let case1 = text.toLowerCase();
	let case2 = text.toUpperCase();

	return case1 + "-" + case2;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));

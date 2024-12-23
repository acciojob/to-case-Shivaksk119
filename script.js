function toCase(text) {
  // write your code here
	if(text==='')return '-'
	let lw = text.toLowerCase();
	let up = text.toUpperCase();
	return `${lw}-${up}`
}

// DO not change the code below

//const text = prompt("Enter text:");
alert(toCase(text));

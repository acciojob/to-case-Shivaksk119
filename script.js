function toCase(text) {
  // write your code here
	text = text.trim();
	if(text==='')return '-'
	let lw = text.toLowerCase();
	let up = text.toUpperCase();
	let str = `${lw}-${up}`;
	return str;
}

// DO not change the code below

//const text = prompt("Enter text:");
alert(toCase(text));

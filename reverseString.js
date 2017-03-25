function reverseString (str){
	var arr = str.split(''); // arr = ["h","e","l","l","o"]
	arr.reverse(); // arr = ["o","l","l","e","h"]
	return arr.join(''); // arr = olleh
};
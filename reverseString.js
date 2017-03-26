function reverseString (str){
	var arr = str.split(''); // arr = ["h","e","l","l","o"]
	arr.reverse(); // arr = ["o","l","l","e","h"]
	var rev = arr.join(''); // olleh
	return rev;
};

function factorialize(num){
	var factor = 1;
	for (var i = num; i>0; i--){
		factor*=i;

	}
	return factor;
}
factorialize(5);
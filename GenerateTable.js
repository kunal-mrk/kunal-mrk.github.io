function Print(){
	var table = document.getElementById('t1').value;
	var row = document.getElementById('t2').value;
	
    var a =0;
	var t='kunal';
	for(a=0;a<=row;a++){
		t=t +'<br>' + table + 'x' + a + ' = ' + (a*table)
		document.getElementById('result').innerHTML=t;
	}
}

//var a =0;
	//var t='kunal';
	//for(a=1;a<=row;a++){
	//	t=t +'<br>'+ table +'x' + a +'='+(a*table);
	//  }
	//document.getElementById('result').innerHTML=t;
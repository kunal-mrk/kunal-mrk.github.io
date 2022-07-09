function Print(){
	var table = document.getElementById('t1').value;
	var row = document.getElementById('t2').value;
	
    var a =0;
	var t='<table class="table table-striped">';
	for(a=1;a<=parseInt(row);a++){
	t=t+ '<tr><td>' + table + '</td><td>' + 'x' + '</td><td>' + a + '</td><td>' + '=' + '</td><td>' + (table * a)+ '</td><tr>';
	}
	t= t + '</table>';
	document.getElementById('result').innerHTML=t;
}

//var a =0;
	//var t='kunal';
	//for(a=1;a<=row;a++){
	//	t=t +'<br>'+ table +'x' + a +'='+(a*table);
	//  }
	//document.getElementById('result').innerHTML=t;
function Print(){
  var n1 = document.getElementById('name1').value;
  var n2 = document.getElementById('name2').value;
  console.log(n1.length);
  console.log(n2.length);
  
  if(n2.length > n1.length){
  document.getElementById('name1').value= n2;
  document.getElementById('name2').value= n1;
  }
}

function Asc(){
	var k1 = document.getElementById('name1').value;
	var k2 = document.getElementById('name2').value;
	console.log(k1.length);
	console.log(k2.length);
	
	if(k1.length > k2.lenght){
		document.getElementById('name1').value=k2;
		document.getElementById('name2').value=k1;
		
		
	}
	
}


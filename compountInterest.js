function Interest(){
var p=document.getElementById('name1').value;
	var n=document.getElementById('name2').value;
	var r=document.getElementById('name3').value;
	var a4 = parseInt(p)*(1 + ((parseInt(r))/100)) **parseInt(n);
	console.log(a4);
	
}
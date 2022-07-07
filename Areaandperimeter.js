function asc(){
	var l=document.getElementById('length').value;
	var b=document.getElementById('breadth').value;
	var Area=(l)*(b);
	var perimeter= 2 *[parseInt(l) + parseInt(b)];
	console.log('Area of Rectangle ='+Area);
	console.log('Perimeter of Rectangle ='+perimeter);
}
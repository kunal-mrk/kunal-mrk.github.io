function Hello(){
	var radius=document.getElementById('r').value;
	var height=document.getElementById('h').value;
	var Area =2*3.14* [parseInt(radius)+parseInt(height)];
	var volume=3.14*(radius*radius)*height;
	console.log('Area of Cylinder = '+ Area);
	console.log('volume of cylinder = '+ volume);
}
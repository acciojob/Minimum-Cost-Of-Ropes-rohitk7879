function calculateMinCost() {
  //your code here
  let string = document.getElementById("rope-lengths").value
	let arr = string.split(",");
	while(arr.length > 1){
		arr.sort((a,b) =>{return(a-b)});
		let value = arr.shift();
		let value1 = arr.shift();
		arr.push(value+value1);
	}
  let result = document.getElementById("result").value;
	div.innertext = arr[0];
	return arr[0];
  
}  

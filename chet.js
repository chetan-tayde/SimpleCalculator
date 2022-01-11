// // Advance Arrays
// const array = [1,2,3,4];
// const newArray = [];
// const a = array.forEach((num) => {
// 	newArray.push(num * 2);
// })
// console.log('for each',newArray);



// // Map Function for single return value
// const mapArray = array.map(num => num+2);
// console.log('Map for single' ,mapArray);



// // map function for multiple value
// const mapArray1 = array.map((num)=>{
// 	return num * 2;
// })
// console.log('map for multivalue' ,mapArray1);



// // Filter function for array we can add the condition 
// const filterArray = array.filter((num)=>{
// 	return num%2 === 0;
// })
// console.log('filter Arrays',filterArray);



// // reduce function for Arrays
// const reduceArrays = array.reduce((acc, num)=>{
// 	return acc + num;
// },5);
// console.log('reduce arrays',reduceArrays);


console.log("Chetan");
let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
	item.addEventListener('click',(e)=>{
		buttonText = e.target.innerText;
		console.log(buttonText);
		if(buttonText === 'X'){
			buttonText = '*';
			screenValue += buttonText;
           screen.value = screenValue;
		}
		else if(buttonText === 'C'){
           screenValue = "";
           screen.value = screenValue;
		}
		else if(buttonText === '='){
			screen.value = eval(screenValue);
		}
		else{
			screenValue += buttonText;
			screen.value = screenValue;
		}
	})
}







//Const variable we cannot modify It Like final keyword in Java
const Button_Hello = document.querySelector(".exsample");
const Button_Submit = document.getElementById("submit");


//Event Listener easliy you can add to a Button
Button_Hello.addEventListener('click',function SayHello(){
	console.log("Hello World");
})

Button_Submit.addEventListener('click',function Submit(){
	console.log("You Click Submit");
	
})



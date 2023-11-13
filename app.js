let operator = document.getElementById("operator"),
	btn = document.getElementById("btn"),
	clearBtn = document.getElementById("clear-btn"),
	result = document.getElementById("result"),
	error = document.getElementById("error"),
	error2 = document.getElementById("error2");

let firstNum = document.getElementById("firstnumber"),
	secNum = document.getElementById("secondnumber");

firstNum.focus();

btn.addEventListener("click", function(e) {

	let firstNumVal = parseInt(firstNum.value),
		secNumVal = parseInt(secNum.value);

	if(firstNum.value == "" || secNum.value == "") {
		error.style.display = "block";

		setTimeout(function(){
			error.style.display = "none";
		}, 2000);

		result.innerHTML = "0";
	}

	switch(operator.value) {
		case "+":
			result.innerHTML= firstNumVal + secNumVal;
			break;
		case "-":
			result.innerHTML= firstNumVal - secNumVal;
			break;
		case "*":
			result.innerHTML= firstNumVal * secNumVal;
			break;
		case "/":
			result.innerHTML= firstNumVal / secNumVal;
			break;
	}
});


clearBtn.addEventListener("click",function(){
	firstNum.value = "";
	secNum.value = "";
	result.innerHTML = "0";
	operator.value = "default";

	firstNum.focus();
});



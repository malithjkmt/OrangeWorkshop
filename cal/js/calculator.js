window.equation="";
window.result="";

function appendEq(text){
	window.equation+=text;
}

function clear(){
	window.equation="";
	window.result="";
}

function pressedButton(text){
	if(text=='='){
		evaluate(window.equation);
		document.getElementById('idresult').value=getResult();
		clear();
	}else{
		document.getElementById('idresult').value=text;
		appendEq(text);
	}
}

function evaluate(equation){
	window.result=eval(equation)
	return window.result
}

function getResult(){
	return window.result;
}

function getEquation(){
	return window.equation
}


window.equation="";
window.result="";

function appendEq(text){
	window.equation+=text;
}

function clear(){
	window.equation="";
}

function pressedButton(text){
	if(text=='='){
		evaluate(window.equation);
		document.getElementById('idresult').value=getResult();
		clear();
	}else{
		if(document.getElementById('idresult').value=='0'){
			document.getElementById('idresult').value=text;
		}
		else{
			if(getResult()!=''){
				document.getElementById('idresult').value=text;
				window.result='';
			}
			else{
				document.getElementById('idresult').value+=text;
			}
			
		}
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


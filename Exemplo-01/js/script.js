
const a = 10;
const b = 2;

function somar ( a, b){
	return a+b;
}

document.querySelector("#calcular").addEventListener("click",function(){
	var valorA = document.querySelector("#valorA").value;
	var valorB = document.querySelector("#valorB").value;
	if(valorA.length > 0 && valorB.length > 0){
		alert(parseInt(valorA) + parseInt(valorB));
	}else{
		alert("Digite novamente")
	}

});
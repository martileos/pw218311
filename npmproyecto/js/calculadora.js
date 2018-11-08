window.onload = function(){

	 var operador = ""
	 var colorAmarillo = function(x){
 		x.style.background = "yellow";
 	 }
	 var colorBlanco = function(x){
	 	x.style.background = "white";
	 }

	 var operando1=document.getElementById('operando1')
	 var operando2=document.getElementById('operando2')
	 var resultado=document.getElementById('resultado')
	 operando1.addEventListener('focus',colorAmarillo)
	 operando1.addEventListener('focusout',colorBlanco)
	 operando2.addEventListener('focus',colorAmarillo)
	 operando2.addEventListener('focusout',colorBlanco)
	 resultado.addEventListener('focus',colorAmarillo)
	 resultado.addEventListener('focusout',colorBlanco)

	 var cero=document.getElementById('cero')
	 var uno=document.getElementById('uno')
	 var dos=document.getElementById('dos')
	 var tres=document.getElementById('tres')
	 var cuatro=document.getElementById('cuatro')
	 var cinco=document.getElementById('cinco')
	 var seis=document.getElementById('seis')
	 var siete=document.getElementById('siete')
	 var ocho=document.getElementById('ocho')
	 var nueve=document.getElementById('nueve')

	 var suma=document.getElementById('suma')
	 var resta=document.getElementById('resta')
	 var multiplicacion=document.getElementById('multiplicacion')
	 var division=document.getElementById('division')

	 var igual=document.getElementById('igual')

	 var reiniciar=document.getElementById('reiniciar')

	var numeros = function(){
		console.log("aqui")
		var op1 = operando1.value;
		var op2 = operando2.value;
		if (operador == ""){ //Operando 1
			if(op1 == "0"){
				operando1.value = ""
			}
			operando1.value+=this.value
		}else{ //Operando 2
			if(op2 == "0"){
				operando2.value = ""
			}
			operando2.value+=this.value
		}
	}
	var operadores = function(){
		operador = this.value
	}
	var resultadoIgual = function(){
		var op1 = operando1.value
		var op2 = operando2.value
		resultado.value = eval(op1+operador+op2)
	}
	var reinicio = function(){
		operando1.value = "0"
		operando2.value = "0"
		resultado.value = "0"
		operador = ""
	}
	cero.addEventListener('click',numeros)
	uno.addEventListener('click',numeros)
	dos.addEventListener('click',numeros)
	tres.addEventListener('click',numeros)
	cuatro.addEventListener('click',numeros)
	cinco.addEventListener('click',numeros)
	seis.addEventListener('click',numeros)
	siete.addEventListener('click',numeros)
	ocho.addEventListener('click',numeros)
	nueve.addEventListener('click',numeros)
	suma.addEventListener('click',operadores)
	resta.addEventListener('click',operadores)
	multiplicacion.addEventListener('click',operadores)
	division.addEventListener('click',operadores)
	igual.addEventListener('click',resultadoIgual)
	reiniciar.addEventListener('click',reinicio)


}














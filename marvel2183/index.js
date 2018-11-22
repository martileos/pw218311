const {BrowserWindow}=require('electron').remote
const app=require('electron').app
const path=require('path')
const url=require('url')

var personaje=""
var PantallaDetalle;

var btnComics=document.getElementsByClassName('btnComics')

var buscaComics = function(){
	// alert(thisw.value)
	localStorage.setItem("indice",this.value)
	localStorage.setItem("personaje",personaje)	
	PantallaDetalle=new BrowserWindow({width:400,height:425})
	PantallaDetalle.loadURL(url.format({
		pathname: path.join(__dirname,'PantallaDetalle.html'),
		protocol: 'file',
		slashes: true
	}))
	PantallaDetalle.show();
}

var buscaPersonaje = function(){
	personaje=document.getElementById('txtPersonaje').value;
	var url="https://gateway.marvel.com/v1/public/characters?ts=1&apikey=67788e74df746a1523d8ebb504ee1008&hash=cf5ec9bfa5a156f031a69417cd0e012c&nameStartsWith="
	fetch(url+personaje)
	.then(datos=>datos.json())
	.then(datos=>{
		document.getElementById('abajo').innerHTML='';
		var cantidad=datos.data.count;
		var foto = ''
		for(let i=0;i<cantidad;i++){
			foto=datos.data.results[i].thumbnail.path+"."+
			     datos.data.results[i].thumbnail.extension
			document.getElementById('abajo').innerHTML += `
				<article class="abajoIzquierda">
					<img src="${foto}" class="imgFoto">
				</article>
				<article class="abajoDerecha">
					<div class="txtNombre">${datos.data.results[i].name}</div>
					<button class="btnComics" value="${i}">Comics</button> 
				</article>
				<hr>
				<br>
			`
		} //Termina For
		for(let i=0;i<btnComics.length;i++){
			btnComics[i].addEventListener('click',buscaComics)
		}
	})
}

var btnBuscar=document.getElementById('btnBuscar')
btnBuscar.addEventListener('click',buscaPersonaje)









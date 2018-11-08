//Cargamos la aplicación de electron
const app=require('electron').app;
//Para crear ventanas del S.O.
const BrowserWindow=require('electron').BrowserWindow;
//Ruta de los archivos del S.O
const path=require('path');
//Cargar como una página Web
const url=require('url')
//Declarar la variable de la ventana
let PantallaPrincipal; //let es para constantes

function muestraPantallaPrincipal(){
	//Creamos una pantalla vacía
	PantallaPrincipal=new BrowserWindow({width:380,height:420});
	//Le damos contenido contenido a esa pantalla
	PantallaPrincipal.loadURL(url.format({
		pathname:path.join(__dirname,'index.html'),
		protocol: 'file',
		slashes: true
	}));
	//Mostrar la pantalla
	PantallaPrincipal.show();
}

app.on('ready',muestraPantallaPrincipal);













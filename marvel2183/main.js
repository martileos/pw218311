//cargar la aplicación de electron
const app=require('electron').app;
//Crear ventanas del sistema operativo
const BrowserWindow=require('electron').BrowserWindow;
//Ruta del sistema de archivos del S.O.
const path=require('path');
const url= require('url');

//Constantes para PDF
const electron = require('electron');
//Sistema de archivos
const fs = require('fs');
//Acceso al sistema operativo
const os = require('os');
//Para declarar una función remota
const ipc = electron.ipcMain;
//Acceso a la terminal-línea de comandos
const shell = electron.shell;

//Otra forma de declarar una constante
//Pantalla principal
let PantallaPrincipal;

function muestraPantallaPrincipal(){
	//Creamos una pantalla vacía
	PantallaPrincipal=new BrowserWindow({width:1024,height:850});
	//Cargamos en la pantalla el contenido de nuestra página
	PantallaPrincipal.loadURL(url.format({
		pathname: path.join(__dirname,'index.html'),
		protocol: 'file',
		slashes: true
	}));
	//Mostramos la pantalla
	PantallaPrincipal.show();
}

//Evento para PDF (declaración) 
ipc.on('print-to-pdf',function(event){
	const pdfPath=path.join(os.tmpdir(),'print.pdf')
	const win=BrowserWindow.fromWebContents(event.sender)
	win.webContents.printToPDF({},function(error,data){
		if(error) throw error
		fs.writeFile(pdfPath,data,function(error){
			if(error){
				throw error
			}
			shell.openExternal('file://'+pdfPath)
			// win.close()
		})
	})
});

app.on('ready',muestraPantallaPrincipal);












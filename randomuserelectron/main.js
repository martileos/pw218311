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

//Constantes para imprimir en PDF
const electron=require('electron');
//Sistema de archivos
const fs=require('fs');
//Sistema Operativo
const os=require('os');
//Aplicar una constante para llamado interno/remoto
//IPC = llamada a un procedimiento interno
const ipc=electron.ipcMain;
//Acceso a la terminal o línea de comandos
const shell= electron.shell;



function muestraPantallaPrincipal(){
	//Creamos una pantalla vacía
	PantallaPrincipal=new BrowserWindow({width:1024,height:450});
	//Le damos contenido contenido a esa pantalla
	PantallaPrincipal.loadURL(url.format({
		pathname:path.join(__dirname,'index.html'),
		protocol: 'file',
		slashes: true
	}));
	//Mostrar la pantalla
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
		})
	})
})

app.on('ready',muestraPantallaPrincipal);













'use strict'

const { app, BrowserWindow } = require('electron')
//el objeto app permite controlar el ciclo de vida del aplicativo y diferentes eventos, puedo quitar, reiniciar u otras acciones

// el objeto BrowserWindow permite cargar todo el contenido visualmente del aplicativo de escritorio

//console.dir(app); // ver lo que tiene el objeto app adentro

// escuchar un evento básico y ejecutamos un código en el evento before-quit el cual se ejecuta antes que el evento salga
//imprimiendo un mensaje en la consola antes de salir
app.on('before-quit', () => {
    console.log('Saliendo ... ');
    console.log('Vas muy bien Jose, te felicito ... ');
}) 

// para mostrar una ventana hay que utilizar 'ready'
//ejecutando órdenes cuando la aplicacion esté lista
app.on('ready', () => {
    // creando una ventana
    let win = new BrowserWindow({
        width: 900,
        height: 900,
        title: 'Hola mundo electron',
        center:true,
        maximizable: false,
        show: false
    })

    win.once('ready-to-show', () =>{
        win.show()
    })

    // win.on('move', () => {
    //     const position = win.getPosition()
    //     console.log(`la posicion es ${position}`);
    // })

    // detectando el cierre de la ventana para cerrar el aplicativo
    win.on('closed', () =>{
        win = null  // quita el objeto de memoria
        app.quit()  // utilizamos una acccion del evento app, app.quit, el cual quita el aplicativo
    })

    // win.loadURL('https://devdocs.io/')
    win.loadURL('http://127.0.0.1:5500/index.html')
})



const {app, BrowserWindow} = require('electron')
const ejse = require('ejs-electron')
 
let mainWindow
 

app.on('ready', () => {
       mainWindow = new BrowserWindow()
       var jsonfile = '../data/ihm.json';
       ihm_data = require(jsonfile)['ihm'];
       ejse.data('json', ihm_data)

       mainWindow.loadURL('file://' + __dirname + '/../views/pages/creation.ejs')
})

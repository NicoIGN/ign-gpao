const {app, BrowserWindow} = require('electron')
const ejse = require('ejs-electron')
 
let mainWindow
 

app.on('ready', () => {
    //Create the new window
       mainWindow = new BrowserWindow({
           "width": 800,
           "height": 800
       });
       var jsonfile = '../data/ihm.json';
       ihm_data = require(jsonfile)['ihm'];
       ejse.data('electron', 'on');
       ejse.data('json', ihm_data);

       //mainWindow.loadURL('file://' + __dirname + '/../views/pages/index.ejs');
       mainWindow.loadURL('file://' + __dirname + '/../views/pages/creation.ejs');
})

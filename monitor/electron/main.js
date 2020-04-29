const ejse = require('ejs-electron')
 
const electron = require('electron'),
app = electron.app,
BrowserWindow = electron.BrowserWindow;

let mainWindow;

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

app.on('window-all-closed', function () {
 if (process.platform !== 'darwin') {
  app.quit()
 }
})

app.on('activate', function () {
 if (mainWindow === null) {
  createWindow()
 }
})

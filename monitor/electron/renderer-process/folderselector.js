 {
    let myName = document.currentScript.getAttribute('name');
    const ipc       = require('electron').ipcRenderer;

    let  asyncBtn  = document.querySelector('#folder-selector-'+myName);
    let replyField = document.querySelector('#folder-selector-content-'+myName);
    let onButtonClick = function() {
        replyField.textContent = "Oh wow, you clicked me!";
        const { dialog } = require('electron').remote;

         dialog.showOpenDialog(function() {
              var dir = dialog.showOpenDialog(mainWindow, {
               properties: ['openDirectory']
               });
             if (dir==undefined){
              console.log('no folder selected');
             replyField.textContent  = '';
             } else {
               console.log('folder:', folderNames[0]);
               replyField.textContent  = folderNames[0];
             }
        })
    };

    asyncBtn.addEventListener("click", onButtonClick);
}

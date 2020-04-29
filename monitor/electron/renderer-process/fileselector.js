 {
    let myName = document.currentScript.getAttribute('name');
    const ipc       = require('electron').ipcRenderer;

    let  asyncBtn  = document.querySelector('#file-selector-'+myName);
    let replyField = document.querySelector('#file-selector-content-'+myName);
    let onButtonClick = function() {
        replyField.textContent = "Oh wow, you clicked me!";
        const { dialog } = require('electron').remote;

         dialog.showOpenDialog(function(fileNames) {
             if (fileNames==undefined){
              console.log('no file selected');
             replyField.textContent  = '';
             } else {
               console.log('file:', fileNames[0]);
               replyField.textContent  = fileNames[0];
             }
        })
    };

    asyncBtn.addEventListener("click", onButtonClick);
}

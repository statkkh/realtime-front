const {app, BrowserWindow } = require('electron');

const createWindow = () =>{
    const window = new BrowserWindow({
        width: 1200,
        height : 800
    });
    window.loadURL('http://localhost:3000');
}

app.whenReady().then(createWindow);
// 위
app.on('window-all-closed', ()=> {
    if(process.platform !== 'darwin') app.quit();
});

// 열린 윈도우개수가 0이면 새로운 윈도우 열기
app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) createWindow();
})

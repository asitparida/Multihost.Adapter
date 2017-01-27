const electron = require('electron');
var fs = require('fs');
var path = require('path');
var fetch = require('node-fetch');
var FormData = require('form-data');
var _ = require('underscore-node');

global.baseDir = __dirname + '\\dist\\images\\multi-host-adapter-x64.png';
global.appId = 'Multihost Adpater';
global.defaultProtocol = 'multihost-adapter';

const remote = electron.remote;
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
var dialog = electron.dialog;

let hostWindow;
let forceClose = true;
let appWindow = false;
let _authTokens = null;
let _notifications = [];

app.setAppUserModelId(global.appId);
var set = app.setAsDefaultProtocolClient(global.defaultProtocol);

app.on('open-url', function (event, url) {
    dialog.showErrorBox('Welcome Back', `You arrived from: ${url}`)
})

function createHostWindow(debugMode) {
    debugMode = debugMode || false;
    let waSize = electron.screen.getPrimaryDisplay().workAreaSize;
    var _listItemLength = 4;
    var _height = 640;
    let posX = waSize.width - 400 - 15;
    let posY = waSize.height - _height - 15;
    hostWindow = new BrowserWindow({
        width: 400, height: _height, icon: 'dist/images/multi-host-adapter-x64.png',
        x: posX, y: posY,
        resizable: true, movable: true, minimizable: true, maximizable: true, alwaysOnTop: false, frame: false, backgroundColor: '#29b6f6', title: 'Not So Grey', show: true
    });
    hostWindow.loadURL('file://' + __dirname + '/host-launch.html');
    hostWindow.debugMode = debugMode;    
    //hostWindow.webContents.openDevTools()
    hostWindow.on('closed', function () {                
        app.quit();
    });    
}

electron.ipcMain.on('start-quick-access', (event, arg) => {
    if (!createHostWindow) createHostWindow();
    else
        hostWindow.show();
});

electron.ipcMain.on('app-get-host-config', (event, arg) => {
    var _hostConfig = require('./dist/configs/client-configs.json');
    event.sender.send('app-get-host-config-reply', _hostConfig)
})

electron.ipcMain.on('sample-notification', function (event, arg) {
    if (hostWindow) {
        hostWindow.webContents.send('start-quick-access');
        hostWindow.restore();
    }
})

function makeSingleInstance() {
    if (process.mas) return false

    return app.makeSingleInstance(function () {
        if (hostWindow) {
            if (hostWindow.isMinimized()) hostWindow.restore()
            hostWindow.focus()
        }
    })
}

function appInitialize() {

    var shouldQuit = makeSingleInstance()
    if (shouldQuit) return app.quit()

    app.on('ready', function () { createHostWindow(true); })    

    app.on('window-all-closed', function () {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    })
}

appInitialize();
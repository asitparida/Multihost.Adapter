"use strict";
angular.module('Multihost.Launch.Controllers', [])
.controller('Multihost.Launch.Controllers.MainContoller', ['$http', 'Multihost.Launch.Services.LaunchService', '$timeout', '$scope', function ($http, LaunchService, $timeout, $scope) {
    var self = this;
    self.appName = 'Multihost Adapter';
    self.launchService = LaunchService;
    self.timeout = $timeout;
    self.scope = $scope;
    self.ready = false;
    self.inProcessed = true;
    self.showMinimize = false;
    if (require)
        self.electron = require('electron');
    else
        self.electron = null;
    if (self.electron) {
        self.debugMode = self.electron.remote.getCurrentWindow().debugMode;
        self.electron.ipcRenderer.on('token-ready-stored', function () {
            self.inProcessed = false;
            self.ready = true;
            self.showMinimize = true;
            if (!self.scope.$$phase)
                self.scope.$apply();
        })
        self.electron.ipcRenderer.on('start-quick-access', function () {
            self.startQuickAccess();
            if (!self.scope.$$phase)
                self.scope.$apply();
        })
    }

    self.sendSampleNotifications = function () {
        if (self.electron) self.electron.ipcRenderer.send('sample-notification');
        else
            self.startQuickAccess();
    }
    self.startQuickAccess = function () {
        self.showHostAdapter = true;
        document.getElementById('launchContextAdapter').classList.add('hide-window');
        self.timeout(function () {
            document.getElementById('launchContextAdapter').style.display = "none";
        }, 1000);
        self.timeout(function () {
            if (typeof window.bootstrapHostAdapter === 'function')
                window.bootstrapHostAdapter();
        }, 600);
    }
    self.minimizeHostWindow = function () {
        if (self.electron) self.electron.remote.getCurrentWindow().minimize();
    }
    if (self.debugMode || true) {
        //self.timeout(self.startQuickAccess, 2000);
        self.timeout(function () {
            self.ready = true;
            self.inProcessed = false;
        }, 2000);
    }
}]);
"use strict";

angular.module('Multihost.Host.Services', [])
.service('Multihost.Host.Services.HostService', ['$http', '$q', function ($http, $q) {
    var self = this;
    self.http = $http;
    if (require)
        self.electron = require('electron');
    else
        self.electron = null;
    self.getDebugMode = function () {
        if (self.electron)
            return self.electron.remote.getCurrentWindow().debugMode;
    }
    self.minimizeHostWindow = function () {
        if (self.electron) self.electron.remote.getCurrentWindow().minimize();
    }
}]);
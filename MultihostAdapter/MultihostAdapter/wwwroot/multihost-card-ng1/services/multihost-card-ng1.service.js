"use strict";

angular.module('Multihost.Card.Services', [])
.service('Multihost.Card.Services.RequestService', ['$http', '$q', '$filter', function ($http, $q, $filter) {
    var self = this;
    self.http = $http;
    if (require)
        self.electron = require('electron');
    else
        self.electron = null;
    self.filter = $filter;   
    self.getDebugMode = function () {
        return self.electron.remote.getCurrentWindow().debugMode;
    }
}]);

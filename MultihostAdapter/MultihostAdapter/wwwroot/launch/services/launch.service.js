"use strict";

if (typeof (String.prototype.replaceAll) === 'undefined') {
    String.prototype.replaceAll = function (find, replaceWith) {
        var regex = new RegExp(find, 'g');
        return this.replace(regex, replaceWith);
    }
}

angular.module('Multihost.Launch.Services', [])
.service('Multihost.Launch.Services.LaunchService', ['$http', '$q', function ($http, $q) {
    var self = this;
    self.http = $http;
    if (require)
        self.electron = require('electron');
    else
        self.electron = null;     
}]);
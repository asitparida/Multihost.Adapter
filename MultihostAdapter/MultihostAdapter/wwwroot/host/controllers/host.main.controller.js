"use strict";

angular.module('Multihost.Host.Controllers')
.controller('Multihost.Host.Controllers.MainContoller', ['$http', 'Multihost.Host.Services.HostService', '$mdBottomSheet', '$timeout', '$mdSidenav', function ($http, HostService, $mdBottomSheet, $timeout, $mdSidenav) {
    var self = this;
    self.hostService = HostService;
    if (require)
        self.electron = require('electron');
    else
        self.electron = null;
    self.eventTypes = '';
    self.mdBottomSheet = $mdBottomSheet;
    self.mdSidenav = $mdSidenav;
    self.timeout = $timeout;
    self.debugMode = self.hostService.getDebugMode();
    self.minimizeApp = function () {
        if (self.electron) self.electron.remote.getCurrentWindow().minimize();
    }
    self.closeApp = function () {
        if (self.electron) self.electron.remote.getCurrentWindow().close();
    }
    self.openContextMenu = function () {
        $mdBottomSheet.show({
            templateUrl: 'templates/host/host.context.bottomsheet.html',
            controller: 'Multihost.Host.Controllers.ContextContoller',
            controllerAs: 'context'
        }).then(function (clickedItem) {
            console.log('hello clicked then ');
        });
    }
    var _notificationsPane = 'host_notifications_pane';
    var _profilePane = 'host_profile_pane';
    self.openNotifications = buildToggler(_notificationsPane);
    self.openProile = buildToggler(_profilePane);
    function buildToggler(navID) {
        return function () {
            self.mdSidenav(navID)
              .toggle()
              .then(function () {
                  //$log.debug("toggle " + navID + " is done");
              });
        }
    }
    self.closeProfile = function () {

        self.mdSidenav(_profilePane).close();
    }
    self.changeCardSubscriptions = function () {
    }
    self.changeAppSettings = function () {
    }
    self.logOut = function () {
    }
}]);